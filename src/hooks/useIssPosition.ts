import { useEffect, useState } from 'react'

const API_URL = 'https://api.wheretheiss.at/v1/satellites/25544'
const LULEA_COORDS = { lat: 65.584819, lon: 22.156702 }

export interface IssPositionState {
  latitude: number
  longitude: number
  altitude: number
  velocity: number
  timestamp: number
  distanceFromLuleaKm: number
  loading: boolean
  error?: string
}

function haversineDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const initialState: IssPositionState = {
  latitude: 0,
  longitude: 0,
  altitude: 0,
  velocity: 0,
  timestamp: 0,
  distanceFromLuleaKm: 0,
  loading: true,
}

export function useIssPosition(pollIntervalMs = 15000) {
  const [state, setState] = useState<IssPositionState>(initialState)

  useEffect(() => {
    let timer: number | undefined
    let cancelled = false

    async function fetchPosition() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error(`Could not fetch ISS position (${response.status})`)
        }
        const data = await response.json()
        if (cancelled) return
        const distanceFromLuleaKm = haversineDistanceKm(
          data.latitude,
          data.longitude,
          LULEA_COORDS.lat,
          LULEA_COORDS.lon,
        )
        setState({
          latitude: data.latitude,
          longitude: data.longitude,
          altitude: data.altitude,
          velocity: data.velocity,
          timestamp: Date.now(),
          distanceFromLuleaKm,
          loading: false,
        })
      } catch (error) {
        if (!cancelled) {
          setState((prev) => ({
            ...(prev ?? {}),
            loading: false,
            error: error instanceof Error ? error.message : 'Unknown error',
          }))
        }
      }
    }

    fetchPosition()
    timer = window.setInterval(fetchPosition, pollIntervalMs)

    return () => {
      cancelled = true
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [pollIntervalMs])

  return state
}
