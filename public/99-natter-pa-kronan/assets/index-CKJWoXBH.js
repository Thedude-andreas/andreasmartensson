(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="175",ll=0,ma=1,ul=2,Ac=1,hl=2,Fn=3,ei=0,on=1,Bn=2,Qn=0,ki=1,ga=2,_a=3,va=4,dl=5,mi=100,fl=101,pl=102,ml=103,gl=104,_l=200,vl=201,xl=202,Ml=203,ro=204,oo=205,Sl=206,El=207,yl=208,Tl=209,wl=210,bl=211,Al=212,Rl=213,Cl=214,ao=0,co=1,lo=2,Xi=3,uo=4,ho=5,fo=6,po=7,Rc=0,Pl=1,Ll=2,ti=0,Dl=1,Il=2,Ul=3,Nl=4,Fl=5,Ol=6,Bl=7,Cc=300,Yi=301,qi=302,mo=303,go=304,pr=306,ms=1e3,_i=1001,_o=1002,hn=1003,zl=1004,Ds=1005,wn=1006,Sr=1007,vi=1008,Gn=1009,Pc=1010,Lc=1011,gs=1012,qo=1013,xi=1014,bn=1015,Es=1016,Ko=1017,Zo=1018,_s=1020,Dc=35902,Ic=1021,Uc=1022,Mn=1023,Nc=1024,Fc=1025,vs=1026,xs=1027,$o=1028,Jo=1029,Oc=1030,jo=1031,Qo=1033,nr=33776,ir=33777,sr=33778,rr=33779,vo=35840,xo=35841,Mo=35842,So=35843,Eo=36196,yo=37492,To=37496,wo=37808,bo=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Lo=37814,Do=37815,Io=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,or=36492,zo=36494,Ho=36495,Bc=36283,Go=36284,Vo=36285,ko=36286,Hl=3200,Gl=3201,zc=0,Vl=1,jn="",sn="srgb",Ki="srgb-linear",ur="linear",xe="srgb",wi=7680,xa=519,kl=512,Wl=513,Xl=514,Hc=515,Yl=516,ql=517,Kl=518,Zl=519,Ma=35044,Sa="300 es",zn=2e3,hr=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ea=1234567;const fs=Math.PI/180,Ms=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function ta(i,t){return(i%t+t)%t}function $l(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jl(i,t,e){return i!==t?(e-i)/(t-i):0}function ps(i,t,e){return(1-e)*i+e*t}function jl(i,t,e,n){return ps(i,t,1-Math.exp(-e*n))}function Ql(i,t=1){return t-Math.abs(ta(i,t*2)-t)}function tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function iu(i,t){return i+Math.random()*(t-i)}function su(i){return i*(.5-Math.random())}function ru(i){i!==void 0&&(Ea=i);let t=Ea+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ou(i){return i*fs}function au(i){return i*Ms}function cu(i){return(i&i-1)===0&&i!==0}function lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),d=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*d,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*d,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*d,a*l);break;case"XZX":i.set(a*d,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*d,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gt={DEG2RAD:fs,RAD2DEG:Ms,generateUUID:Ji,clamp:ne,euclideanModulo:ta,mapLinear:$l,inverseLerp:Jl,lerp:ps,damp:jl,pingpong:Ql,smoothstep:tu,smootherstep:eu,randInt:nu,randFloat:iu,randFloatSpread:su,seededRandom:ru,degToRad:ou,radToDeg:au,isPowerOfTwo:cu,ceilPowerOfTwo:lu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:hu,normalize:Je,denormalize:Gi};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],h=s[6],w=s[1],T=s[4],E=s[7],D=s[2],C=s[5],b=s[8];return r[0]=o*v+a*w+c*D,r[3]=o*m+a*T+c*C,r[6]=o*h+a*E+c*b,r[1]=l*v+d*w+u*D,r[4]=l*m+d*T+u*C,r[7]=l*h+d*E+u*b,r[2]=f*v+p*w+g*D,r[5]=f*m+p*T+g*C,r[8]=f*h+p*E+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=d*o-a*l,f=a*c-d*r,p=l*r-o*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-d*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(d*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new jt;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function du(){const i=dr("canvas");return i.style.display="block",i}const ya={};function ar(i){i in ya||(ya[i]=!0,console.warn(i))}function fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ta=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wa=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gu(){const i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?ur:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:Ta,fromXYZ:wa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Ta,fromXYZ:wa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const pe=gu();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class _u{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bi===void 0&&(bi=dr("canvas")),bi.width=t.width,bi.height=t.height;const s=bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vu=0;class ea{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yr(s[o].image)):r.push(yr(s[o]))}else r=yr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xu=0;class Ze extends $i{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=_i,s=_i,r=wn,o=vi,a=Mn,c=Gn,l=Ze.DEFAULT_ANISOTROPY,d=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ji(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Cc;Ze.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],d=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,E=(p+1)/2,D=(h+1)/2,C=(d+f)/4,b=(u+v)/4,I=(g+m)/4;return T>E&&T>D?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=b/n):E>D?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=b/r,s=I/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(f-d)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ea(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Su extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==p||d!==g){let m=1-a;const h=c*f+l*p+d*g+u*v,w=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const D=Math.sqrt(T),C=Math.atan2(D,h*w);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const E=a*w;if(c=c*m+f*E,l=l*m+p*E,d=d*m+g*E,u=u*m+v*E,m===1-a){const D=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=D,l*=D,d*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+d*u+c*p-l*f,t[e+1]=c*g+d*f+l*u-a*p,t[e+2]=l*g+d*p+a*f-c*u,t[e+3]=d*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"YZX":this._x=f*d*u+l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u-f*p*g;break;case"XZY":this._x=f*d*u-l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(d-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-e)*d)/l,f=Math.sin(e*d)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),d=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*d,this.y=n+c*d+a*l-r*u,this.z=s+c*u+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new U,ba=new ys;class Si{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Us.subVectors(this.max,ns),Ai.subVectors(t.a,ns),Ri.subVectors(t.b,ns),Ci.subVectors(t.c,ns),Xn.subVectors(Ri,Ai),Yn.subVectors(Ci,Ri),oi.subVectors(Ai,Ci);let e=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-oi.z,oi.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,oi.z,0,-oi.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-oi.y,oi.x,0];return!wr(e,Ai,Ri,Ci,Us)||(e=[1,0,0,0,1,0,0,0,1],!wr(e,Ai,Ri,Ci,Us))?!1:(Ns.crossVectors(Xn,Yn),e=[Ns.x,Ns.y,Ns.z],wr(e,Ai,Ri,Ci,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new U,new U,new U,new U,new U,new U,new U,new U],gn=new U,Is=new Si,Ai=new U,Ri=new U,Ci=new U,Xn=new U,Yn=new U,oi=new U,ns=new U,Us=new U,Ns=new U,ai=new U;function wr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ai.fromArray(i,r);const a=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),d=n.dot(ai);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Eu=new Si,is=new U,br=new U;class Ts{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(br)),this.expandByPoint(is.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new U,Ar=new U,Fs=new U,qn=new U,Rr=new U,Os=new U,Cr=new U;class yu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ar.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Ar);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fs),a=qn.dot(this.direction),c=-qn.dot(Fs),l=qn.lengthSq(),d=Math.abs(1-o*o);let u,f,p,g;if(d>0)if(u=o*c-a,f=o*a-c,g=r*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ar).addScaledVector(Fs,f),p}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Rr.subVectors(e,t),Os.subVectors(n,t),Cr.crossVectors(Rr,Os);let o=this.direction.dot(Cr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const c=a*this.direction.dot(Os.crossVectors(qn,Os));if(c<0)return null;const l=a*this.direction.dot(Rr.cross(qn));if(l<0||c+l>o)return null;const d=-a*qn.dot(Cr);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,s,r,o,a,c,l,d,u,f,p,g,v,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,d,u,f,p,g,v,m)}set(t,e,n,s,r,o,a,c,l,d,u,f,p,g,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*d,p=o*u,g=a*d,v=a*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*d,p=c*u,g=l*d,v=l*u;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*d,p=c*u,g=l*d,v=l*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*d,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*d,p=o*u,g=a*d,v=a*u;e[0]=c*d,e[4]=g*l-p,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*d,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=f*u+v,e[5]=o*d,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*d,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tu,t,wu)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Kn.crossVectors(n,cn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Kn.crossVectors(n,cn)),Kn.normalize(),Bs.crossVectors(cn,Kn),s[0]=Kn.x,s[4]=Bs.x,s[8]=cn.x,s[1]=Kn.y,s[5]=Bs.y,s[9]=cn.y,s[2]=Kn.z,s[6]=Bs.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],h=n[14],w=n[3],T=n[7],E=n[11],D=n[15],C=s[0],b=s[4],I=s[8],S=s[12],x=s[1],A=s[5],O=s[9],z=s[13],Z=s[2],j=s[6],Y=s[10],nt=s[14],k=s[3],gt=s[7],St=s[11],Pt=s[15];return r[0]=o*C+a*x+c*Z+l*k,r[4]=o*b+a*A+c*j+l*gt,r[8]=o*I+a*O+c*Y+l*St,r[12]=o*S+a*z+c*nt+l*Pt,r[1]=d*C+u*x+f*Z+p*k,r[5]=d*b+u*A+f*j+p*gt,r[9]=d*I+u*O+f*Y+p*St,r[13]=d*S+u*z+f*nt+p*Pt,r[2]=g*C+v*x+m*Z+h*k,r[6]=g*b+v*A+m*j+h*gt,r[10]=g*I+v*O+m*Y+h*St,r[14]=g*S+v*z+m*nt+h*Pt,r[3]=w*C+T*x+E*Z+D*k,r[7]=w*b+T*A+E*j+D*gt,r[11]=w*I+T*O+E*Y+D*St,r[15]=w*S+T*z+E*nt+D*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],h=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+v*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*d-r*c*d)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*d-n*l*d)+h*(-s*a*d-e*c*u+e*a*f+s*o*u-n*o*f+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],h=t[15],w=u*m*l-v*f*l+v*c*p-a*m*p-u*c*h+a*f*h,T=g*f*l-d*m*l-g*c*p+o*m*p+d*c*h-o*f*h,E=d*v*l-g*u*l+g*a*p-o*v*p-d*a*h+o*u*h,D=g*u*c-d*v*c-g*a*f+o*v*f+d*a*m-o*u*m,C=e*w+n*T+s*E+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=w*b,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*h-n*f*h)*b,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*h+n*c*h)*b,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*b,t[4]=T*b,t[5]=(d*m*r-g*f*r+g*s*p-e*m*p-d*s*h+e*f*h)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*h-e*c*h)*b,t[7]=(o*f*r-d*c*r+d*s*l-e*f*l-o*s*p+e*c*p)*b,t[8]=E*b,t[9]=(g*u*r-d*v*r-g*n*p+e*v*p+d*n*h-e*u*h)*b,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*h+e*a*h)*b,t[11]=(d*a*r-o*u*r-d*n*l+e*u*l+o*n*p-e*a*p)*b,t[12]=D*b,t[13]=(d*v*s-g*u*s+g*n*f-e*v*f-d*n*m+e*u*m)*b,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*b,t[15]=(o*u*s-d*a*s+d*n*c-e*u*c-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,u=a+a,f=r*l,p=r*d,g=r*u,v=o*d,m=o*u,h=a*u,w=c*l,T=c*d,E=c*u,D=n.x,C=n.y,b=n.z;return s[0]=(1-(v+h))*D,s[1]=(p+E)*D,s[2]=(g-T)*D,s[3]=0,s[4]=(p-E)*C,s[5]=(1-(f+h))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(g+T)*b,s[9]=(m-w)*b,s[10]=(1-(f+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/r,d=1/o,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn){const c=this.elements,l=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===zn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===hr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn){const c=this.elements,l=1/(e-t),d=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*d;let g,v;if(a===zn)g=(o+r)*u,v=-2*u;else if(a===hr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new U,_n=new Te,Tu=new U(0,0,0),wu=new U(1,1,1),Kn=new U,Bs=new U,cn=new U,Aa=new Te,Ra=new ys;class Rn{constructor(t=0,e=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bu=0;const Ca=new U,Li=new ys,Dn=new Te,zs=new U,ss=new U,Au=new U,Ru=new ys,Pa=new U(1,0,0),La=new U(0,1,0),Da=new U(0,0,1),Ia={type:"added"},Cu={type:"removed"},Di={type:"childadded",child:null},Pr={type:"childremoved",child:null};class ze extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new U,e=new Rn,n=new ys,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new jt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Pa,t)}rotateY(t){return this.rotateOnAxis(La,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return Ca.copy(t).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pa,t)}translateY(t){return this.translateOnAxis(La,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ss,zs,this.up):Dn.lookAt(zs,ss,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Dn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ia),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cu),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ia),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ze.DEFAULT_UP=new U(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new U,In=new U,Lr=new U,Un=new U,Ii=new U,Ui=new U,Ua=new U,Dr=new U,Ir=new U,Ur=new U,Nr=new Me,Fr=new Me,Or=new Me;class xn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),In.subVectors(n,e),Lr.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(In),c=vn.dot(Lr),l=In.dot(In),d=In.dot(Lr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*d)*f,g=(o*d-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Nr.setScalar(0),Fr.setScalar(0),Or.setScalar(0),Nr.fromBufferAttribute(t,e),Fr.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nr,r.x),o.addScaledVector(Fr,r.y),o.addScaledVector(Or,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),In.subVectors(t,e),vn.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),vn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Ui.subVectors(r,n),Dr.subVectors(t,n);const c=Ii.dot(Dr),l=Ui.dot(Dr);if(c<=0&&l<=0)return e.copy(n);Ir.subVectors(t,s);const d=Ii.dot(Ir),u=Ui.dot(Ir);if(d>=0&&u<=d)return e.copy(s);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Ii,o);Ur.subVectors(t,r);const p=Ii.dot(Ur),g=Ui.dot(Ur);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ui,a);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Ua.subVectors(r,s),a=(u-d)/(u-d+(p-g)),e.copy(s).addScaledVector(Ua,a);const h=1/(m+v+f);return o=v*h,a=f*h,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Br(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=ta(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Br(o,r,t+1/3),this.g=Br(o,r,t),this.b=Br(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return pe.fromWorkingColorSpace(Ke.copy(this),t),Math.round(ne(Ke.r*255,0,255))*65536+Math.round(ne(Ke.g*255,0,255))*256+Math.round(ne(Ke.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=sn){pe.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Hs);const n=ps(Zn.h,Hs.h,e),s=ps(Zn.s,Hs.s,e),r=ps(Zn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Zt;Zt.NAMES=Wc;let Pu=0;class ws extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=ki,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=oo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class On extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new U,Gs=new Vt;let Lu=0;class Sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class Xc extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ue extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Du=0;const fn=new Te,zr=new ze,Ni=new U,ln=new Si,rs=new Si,Be=new U;class dn extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Yc:Xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(ln.min,rs.min),ln.expandByPoint(Be),Be.addVectors(ln.max,rs.max),ln.expandByPoint(Be)):(ln.expandByPoint(rs.min),ln.expandByPoint(rs.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Be.fromBufferAttribute(a,l),c&&(Ni.fromBufferAttribute(t,l),Be.add(Ni)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new U,c[I]=new U;const l=new U,d=new U,u=new U,f=new Vt,p=new Vt,g=new Vt,v=new U,m=new U;function h(I,S,x){l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),d.sub(l),u.sub(l),p.sub(f),g.sub(f);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(A),a[I].add(v),a[S].add(v),a[x].add(v),c[I].add(m),c[S].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,S=w.length;I<S;++I){const x=w[I],A=x.start,O=x.count;for(let z=A,Z=A+O;z<Z;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new U,E=new U,D=new U,C=new U;function b(I){D.fromBufferAttribute(s,I),C.copy(D);const S=a[I];T.copy(S),T.sub(D.multiplyScalar(D.dot(S))).normalize(),E.crossVectors(C,S);const A=E.dot(c[I])<0?-1:1;o.setXYZW(I,T.x,T.y,T.z,A)}for(let I=0,S=w.length;I<S;++I){const x=w[I],A=x.start,O=x.count;for(let z=A,Z=A+O;z<Z;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,d=new U,u=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,u=a.normalized,f=new l.constructor(c.length*d);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*d;for(let h=0;h<d;h++)f[g++]=l[p++]}return new Sn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,u=l.length;d<u;d++){const f=l[d],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];d.push(p.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],u=r[l];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new Te,ci=new yu,Vs=new Ts,Fa=new U,ks=new U,Ws=new U,Xs=new U,Hr=new U,Ys=new U,Oa=new U,qs=new U;class At extends ze{constructor(t=new dn,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],u=r[c];d!==0&&(Hr.fromBufferAttribute(u,t),o?Ys.addScaledVector(Hr,d):Ys.addScaledVector(Hr.sub(e),d))}e.add(Ys)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Vs.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Vs,Fa)===null||ci.origin.distanceToSquared(Fa)>(t.far-t.near)**2))&&(Na.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Na),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,D=T;E<D;E+=3){const C=a.getX(E),b=a.getX(E+1),I=a.getX(E+2);s=Ks(this,h,t,n,l,d,u,C,b,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const w=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);s=Ks(this,o,t,n,l,d,u,w,T,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,D=T;E<D;E+=3){const C=E,b=E+1,I=E+2;s=Ks(this,h,t,n,l,d,u,C,b,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const w=m,T=m+1,E=m+2;s=Ks(this,o,t,n,l,d,u,w,T,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Iu(i,t,e,n,s,r,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ei,a),c===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qs);return l<e.near||l>e.far?null:{distance:l,point:qs.clone(),object:i}}function Ks(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ks),i.getVertexPosition(c,Ws),i.getVertexPosition(l,Xs);const d=Iu(i,t,e,n,ks,Ws,Xs,Oa);if(d){const u=new U;xn.getBarycoord(Oa,ks,Ws,Xs,u),s&&(d.uv=xn.getInterpolatedAttribute(s,a,c,l,u,new Vt)),r&&(d.uv1=xn.getInterpolatedAttribute(r,a,c,l,u,new Vt)),o&&(d.normal=xn.getInterpolatedAttribute(o,a,c,l,u,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};xn.getNormal(ks,Ws,Xs,f.normal),d.face=f,d.barycoord=u}return d}class rn extends dn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(u,2));function g(v,m,h,w,T,E,D,C,b,I,S){const x=E/b,A=D/I,O=E/2,z=D/2,Z=C/2,j=b+1,Y=I+1;let nt=0,k=0;const gt=new U;for(let St=0;St<Y;St++){const Pt=St*A-z;for(let Bt=0;Bt<j;Bt++){const le=Bt*x-O;gt[v]=le*w,gt[m]=Pt*T,gt[h]=Z,l.push(gt.x,gt.y,gt.z),gt[v]=0,gt[m]=0,gt[h]=C>0?1:-1,d.push(gt.x,gt.y,gt.z),u.push(Bt/b),u.push(1-St/I),nt+=1}}for(let St=0;St<I;St++)for(let Pt=0;Pt<b;Pt++){const Bt=f+Pt+j*St,le=f+Pt+j*(St+1),J=f+(Pt+1)+j*(St+1),rt=f+(Pt+1)+j*St;c.push(Bt,le,rt),c.push(le,J,rt),k+=6}a.addGroup(p,k,S),p+=k,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function Uu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Nu={clone:Zi,merge:je};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kc extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new U,Ba=new Vt,za=new Vt;class un extends Kc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Ba,za),e.subVectors(za,Ba)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class Bu extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new un(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const o=new un(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const a=new un(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const c=new un(Fi,Oi,t,e);c.layers=this.layers,this.add(c);const l=new un(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zc extends Ze{constructor(t=[],e=Yi,n,s,r,o,a,c,l,d){super(t,e,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zu extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rn(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Qn});r.uniforms.tEquirect.value=e;const o=new At(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=wn),new Bu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Ce extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hu={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class mr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new mr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gu extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vu extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=hn,d=hn,u,f){super(null,o,a,c,l,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha extends Sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new Te,Ga=new Te,Zs=[],Va=new Si,ku=new Te,os=new At,as=new Ts;class cr extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ku)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),Va.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Va)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),as.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bi),Ga.multiplyMatrices(n,Bi),os.matrixWorld=Ga,os.raycast(t,Zs);for(let o=0,a=Zs.length;o<a;o++){const c=Zs[o];c.instanceId=r,c.object=this,e.push(c)}Zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vu(new Float32Array(s*this.count),s,this.count,$o,bn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vr=new U,Wu=new U,Xu=new jt;class di{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vr.subVectors(n,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xu.getNormalMatrix(t),s=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Ts,$s=new U;class na{constructor(t=new di,e=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],d=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],h=s[12],w=s[13],T=s[14],E=s[15];if(n[0].setComponents(c-r,f-l,m-p,E-h).normalize(),n[1].setComponents(c+r,f+l,m+p,E+h).normalize(),n[2].setComponents(c+o,f+d,m+g,E+w).normalize(),n[3].setComponents(c-o,f-d,m-g,E-w).normalize(),n[4].setComponents(c-a,f-u,m-v,E-T).normalize(),e===zn)n[5].setComponents(c+a,f+u,m+v,E+T).normalize();else if(e===hr)n[5].setComponents(a,u,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($s.x=s.normal.x>0?t.max.x:t.min.x,$s.y=s.normal.y>0?t.max.y:t.min.y,$s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yu extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $c extends Ze{constructor(t,e,n=xi,s,r,o,a=hn,c=hn,l,d=vs){if(d!==vs&&d!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const d=n[s],f=n[s+1]-d,p=(o-d)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Vt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],o=[],a=new U,c=new Te;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ne(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ne(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ia(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,u){let f=(o-r)/l-(a-r)/(l+d)+(a-o)/d,p=(a-o)/d-(c-o)/(d+u)+(c-a)/u;f*=d,p*=d,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Js=new U,kr=new ia,Wr=new ia,Xr=new ia;class Ku extends qu{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(Js.subVectors(s[0],s[1]).add(s[0]),l=Js);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Js.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),kr.initNonuniformCatmullRom(l.x,u.x,f.x,d.x,g,v,m),Wr.initNonuniformCatmullRom(l.y,u.y,f.y,d.y,g,v,m),Xr.initNonuniformCatmullRom(l.z,u.z,f.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(l.x,u.x,f.x,d.x,this.tension),Wr.initCatmullRom(l.y,u.y,f.y,d.y,this.tension),Xr.initCatmullRom(l.z,u.z,f.z,d.z,this.tension));return n.set(kr.calc(c),Wr.calc(c),Xr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class sa extends dn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new U,d=new Vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class An extends dn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let h=0;w(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(p,2));function w(){const E=new U,D=new U;let C=0;const b=(e-t)/n;for(let I=0;I<=r;I++){const S=[],x=I/r,A=x*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,Z=z*c+a,j=Math.sin(Z),Y=Math.cos(Z);D.x=A*j,D.y=-x*n+m,D.z=A*Y,u.push(D.x,D.y,D.z),E.set(j,b,Y).normalize(),f.push(E.x,E.y,E.z),p.push(z,1-x),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const x=v[S][I],A=v[S+1][I],O=v[S+1][I+1],z=v[S][I+1];(t>0||S!==0)&&(d.push(x,A,z),C+=3),(e>0||S!==r-1)&&(d.push(A,O,z),C+=3)}l.addGroup(h,C,0),h+=C}function T(E){const D=g,C=new Vt,b=new U;let I=0;const S=E===!0?t:e,x=E===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const A=g;for(let O=0;O<=s;O++){const Z=O/s*c+a,j=Math.cos(Z),Y=Math.sin(Z);b.x=S*Y,b.y=m*x,b.z=S*j,u.push(b.x,b.y,b.z),f.push(0,x,0),C.x=j*.5+.5,C.y=Y*.5*x+.5,p.push(C.x,C.y),g++}for(let O=0;O<s;O++){const z=D+O,Z=A+O;E===!0?d.push(Z,Z+1,z):d.push(Z+1,Z,z),I+=3}l.addGroup(h,I,E===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yn extends An{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new yn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gr extends dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,u=t/a,f=e/c,p=[],g=[],v=[],m=[];for(let h=0;h<d;h++){const w=h*f-o;for(let T=0;T<l;T++){const E=T*u-r;g.push(E,-w,0),v.push(0,0,1),m.push(T/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<a;w++){const T=w+l*h,E=w+l*(h+1),D=w+1+l*(h+1),C=w+1+l*h;p.push(T,E,C),p.push(E,D,C)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ge extends dn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],u=new U,f=new U,p=[],g=[],v=[],m=[];for(let h=0;h<=n;h++){const w=[],T=h/n;let E=0;h===0&&o===0?E=.5/e:h===n&&c===Math.PI&&(E=-.5/e);for(let D=0;D<=e;D++){const C=D/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(C+E,1-T),w.push(l++)}d.push(w)}for(let h=0;h<n;h++)for(let w=0;w<e;w++){const T=d[h][w+1],E=d[h][w],D=d[h+1][w],C=d[h+1][w+1];(h!==0||o>0)&&p.push(T,E,C),(h!==n-1||c<Math.PI)&&p.push(E,D,C)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kt extends ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zu extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $u extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ra extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ju extends ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new Te,ka=new U,Wa=new U;class Jc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(ka),Wa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wa),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xa=new Te,cs=new U,qr=new U;class ju extends Jc{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(cs),qr.copy(n.position),qr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qr),n.updateMatrixWorld(),s.makeTranslation(-cs.x,-cs.y,-cs.z),Xa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa)}}class jc extends ra{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ju}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qc extends Kc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qu extends Jc{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ya extends ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Qu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class th extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function qa(i,t,e,n){const s=eh(n);switch(e){case Ic:return i*t;case Nc:return i*t;case Fc:return i*t*2;case $o:return i*t/s.components*s.byteLength;case Jo:return i*t/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case jo:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Qo:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:case So:return Math.max(i,16)*Math.max(t,8)/4;case vo:case Mo:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case or:case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eh(i){switch(i){case Gn:case Pc:return{byteLength:1,components:1};case gs:case Lc:case Es:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case xi:case qo:case bn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nh(i){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ed=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ef=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:ih,alphahash_pars_fragment:sh,alphamap_fragment:rh,alphamap_pars_fragment:oh,alphatest_fragment:ah,alphatest_pars_fragment:ch,aomap_fragment:lh,aomap_pars_fragment:uh,batching_pars_vertex:hh,batching_vertex:dh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:_h,clipping_planes_fragment:vh,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:Mh,clipping_planes_vertex:Sh,color_fragment:Eh,color_pars_fragment:yh,color_pars_vertex:Th,color_vertex:wh,common:bh,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Ph,emissivemap_fragment:Lh,emissivemap_pars_fragment:Dh,colorspace_fragment:Ih,colorspace_pars_fragment:Uh,envmap_fragment:Nh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:Oh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:Zh,envmap_vertex:zh,fog_vertex:Hh,fog_pars_vertex:Gh,fog_fragment:Vh,fog_pars_fragment:kh,gradientmap_pars_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:Yh,lights_lambert_pars_fragment:qh,lights_pars_begin:Kh,lights_toon_fragment:$h,lights_toon_pars_fragment:Jh,lights_phong_fragment:jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:td,lights_physical_pars_fragment:ed,lights_fragment_begin:nd,lights_fragment_maps:id,lights_fragment_end:sd,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:cd,map_fragment:ld,map_pars_fragment:ud,map_particle_fragment:hd,map_particle_pars_fragment:dd,metalnessmap_fragment:fd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:_d,morphtarget_pars_vertex:vd,morphtarget_vertex:xd,normal_fragment_begin:Md,normal_fragment_maps:Sd,normal_pars_fragment:Ed,normal_pars_vertex:yd,normal_vertex:Td,normalmap_pars_fragment:wd,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Cd,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Dd,project_vertex:Id,dithering_fragment:Ud,dithering_pars_fragment:Nd,roughnessmap_fragment:Fd,roughnessmap_pars_fragment:Od,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:zd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Gd,skinbase_vertex:Vd,skinning_pars_vertex:kd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:Yd,specularmap_pars_fragment:qd,tonemapping_fragment:Kd,tonemapping_pars_fragment:Zd,transmission_fragment:$d,transmission_pars_fragment:Jd,uv_pars_fragment:jd,uv_pars_vertex:Qd,uv_vertex:tf,worldpos_vertex:ef,background_vert:nf,background_frag:sf,backgroundCube_vert:rf,backgroundCube_frag:of,cube_vert:af,cube_frag:cf,depth_vert:lf,depth_frag:uf,distanceRGBA_vert:hf,distanceRGBA_frag:df,equirect_vert:ff,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:_f,meshbasic_frag:vf,meshlambert_vert:xf,meshlambert_frag:Mf,meshmatcap_vert:Sf,meshmatcap_frag:Ef,meshnormal_vert:yf,meshnormal_frag:Tf,meshphong_vert:wf,meshphong_frag:bf,meshphysical_vert:Af,meshphysical_frag:Rf,meshtoon_vert:Cf,meshtoon_frag:Pf,points_vert:Lf,points_frag:Df,shadow_vert:If,shadow_frag:Uf,sprite_vert:Nf,sprite_frag:Ff},Mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Tn={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Tn.physical={uniforms:je([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const js={r:0,b:0,g:0},ui=new Rn,Of=new Te;function Bf(i,t,e,n,s,r,o){const a=new Zt(0);let c=r===!0?0:1,l,d,u=null,f=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function v(T){let E=!1;const D=g(T);D===null?h(a,c):D&&D.isColor&&(h(D,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const D=g(E);D&&(D.isCubeTexture||D.mapping===pr)?(d===void 0&&(d=new At(new rn(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Zi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ui.copy(E.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Of.makeRotationFromEuler(ui)),d.material.toneMapped=pe.getTransfer(D.colorSpace)!==xe,(u!==D||f!==D.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=D,f=D.version,p=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new At(new gr(2,2),new ni({name:"BackgroundMaterial",uniforms:Zi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=pe.getTransfer(D.colorSpace)!==xe,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||f!==D.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=D,f=D.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,E){T.getRGB(js,qc(i)),n.buffers.color.setClear(js.r,js.g,js.b,E,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(a,c)},render:v,addToRenderList:m,dispose:w}}function zf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,A,O,z,Z){let j=!1;const Y=u(z,O,A);r!==Y&&(r=Y,l(r.object)),j=p(x,z,O,Z),j&&g(x,z,O,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,E(x,A,O,z),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function u(x,A,O){const z=O.wireframe===!0;let Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let j=Z[A.id];j===void 0&&(j={},Z[A.id]=j);let Y=j[z];return Y===void 0&&(Y=f(c()),j[z]=Y),Y}function f(x){const A=[],O=[],z=[];for(let Z=0;Z<e;Z++)A[Z]=0,O[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,A,O,z){const Z=r.attributes,j=A.attributes;let Y=0;const nt=O.getAttributes();for(const k in nt)if(nt[k].location>=0){const St=Z[k];let Pt=j[k];if(Pt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Pt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Pt=x.instanceColor)),St===void 0||St.attribute!==Pt||Pt&&St.data!==Pt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(x,A,O,z){const Z={},j=A.attributes;let Y=0;const nt=O.getAttributes();for(const k in nt)if(nt[k].location>=0){let St=j[k];St===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(St=x.instanceColor));const Pt={};Pt.attribute=St,St&&St.data&&(Pt.data=St.data),Z[k]=Pt,Y++}r.attributes=Z,r.attributesNum=Y,r.index=z}function v(){const x=r.newAttributes;for(let A=0,O=x.length;A<O;A++)x[A]=0}function m(x){h(x,0)}function h(x,A){const O=r.newAttributes,z=r.enabledAttributes,Z=r.attributeDivisors;O[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),Z[x]!==A&&(i.vertexAttribDivisor(x,A),Z[x]=A)}function w(){const x=r.newAttributes,A=r.enabledAttributes;for(let O=0,z=A.length;O<z;O++)A[O]!==x[O]&&(i.disableVertexAttribArray(O),A[O]=0)}function T(x,A,O,z,Z,j,Y){Y===!0?i.vertexAttribIPointer(x,A,O,Z,j):i.vertexAttribPointer(x,A,O,z,Z,j)}function E(x,A,O,z){v();const Z=z.attributes,j=O.getAttributes(),Y=A.defaultAttributeValues;for(const nt in j){const k=j[nt];if(k.location>=0){let gt=Z[nt];if(gt===void 0&&(nt==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),nt==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),gt!==void 0){const St=gt.normalized,Pt=gt.itemSize,Bt=t.get(gt);if(Bt===void 0)continue;const le=Bt.buffer,J=Bt.type,rt=Bt.bytesPerElement,at=J===i.INT||J===i.UNSIGNED_INT||gt.gpuType===qo;if(gt.isInterleavedBufferAttribute){const et=gt.data,wt=et.stride,$t=gt.offset;if(et.isInstancedInterleavedBuffer){for(let Rt=0;Rt<k.locationSize;Rt++)h(k.location+Rt,et.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Rt=0;Rt<k.locationSize;Rt++)m(k.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Rt=0;Rt<k.locationSize;Rt++)T(k.location+Rt,Pt/k.locationSize,J,St,wt*rt,($t+Pt/k.locationSize*Rt)*rt,at)}else{if(gt.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)h(k.location+et,gt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let et=0;et<k.locationSize;et++)m(k.location+et);i.bindBuffer(i.ARRAY_BUFFER,le);for(let et=0;et<k.locationSize;et++)T(k.location+et,Pt/k.locationSize,J,St,Pt*rt,Pt/k.locationSize*et*rt,at)}}else if(Y!==void 0){const St=Y[nt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(k.location,St);break;case 3:i.vertexAttrib3fv(k.location,St);break;case 4:i.vertexAttrib4fv(k.location,St);break;default:i.vertexAttrib1fv(k.location,St)}}}}w()}function D(){I();for(const x in n){const A=n[x];for(const O in A){const z=A[O];for(const Z in z)d(z[Z].object),delete z[Z];delete A[O]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const O in A){const z=A[O];for(const Z in z)d(z[Z].object),delete z[Z];delete A[O]}delete n[x.id]}function b(x){for(const A in n){const O=n[A];if(O[x.id]===void 0)continue;const z=O[x.id];for(const Z in z)d(z[Z].object),delete z[Z];delete O[x.id]}}function I(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Hf(i,t,e){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),e.update(d,n,u))}function a(l,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];e.update(p,n,1)}function c(l,d,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Mn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const I=b===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Gn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==bn&&!I)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:D,maxSamples:C}}function Vf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new di,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const w=r?0:n,T=w*4;let E=h.clippingState||null;c.value=E,E=d(g,f,T,p);for(let D=0;D!==T;++D)E[D]=e[D];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const h=p+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,E=p;T!==v;++T,E+=4)o.copy(u[T]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function kf(i){let t=new WeakMap;function e(o,a){return a===mo?o.mapping=Yi:a===go&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mo||a===go)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zu(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Vi=4,Ka=[.125,.215,.35,.446,.526,.582],gi=20,Kr=new Qc,Za=new Zt;let Zr=null,$r=0,Jr=0,jr=!1;const fi=(1+Math.sqrt(5))/2,zi=1/fi,$a=[new U(-fi,zi,0),new U(fi,zi,0),new U(-zi,0,fi),new U(zi,0,fi),new U(0,fi,-zi),new U(0,fi,zi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Wf=new U;class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Wf}=r;Zr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,$r,Jr),this._renderer.xr.enabled=jr,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Es,format:Mn,colorSpace:Ki,depthBuffer:!1},s=ja(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xf(r)),this._blurMaterial=Yf(r,t,e)}return s}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,s,r){const c=new un(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Za),u.toneMapping=ti,u.autoClear=!1;const g=new On({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new At(new rn,g);let m=!1;const h=t.background;h?h.isColor&&(g.color.copy(h),t.background=null,m=!0):(g.color.copy(Za),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):T===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const E=this._cubeSize;Qs(s,T*E,w>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(v,c),u.render(t,c)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Yi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$a[(s-r-1)%$a.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new At(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const h=[];let w=0;for(let b=0;b<gi;++b){const I=b/v,S=Math.exp(-I*I/2);h.push(S),b===0?w+=S:b<m&&(w+=2*S)}for(let b=0;b<h.length;b++)h[b]=h[b]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const E=this._sizeLods[s],D=3*E*(s>T-Vi?s-T+Vi:0),C=4*(this._cubeSize-E);Qs(e,D,C,3*E,2*E),c.setRenderTarget(e),c.render(u,Kr)}}function Xf(i){const t=[],e=[],n=[];let s=i;const r=i-Vi+1+Ka.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Vi?c=Ka[o-i+Vi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,v=3,m=2,h=1,w=new Float32Array(v*g*p),T=new Float32Array(m*g*p),E=new Float32Array(h*g*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,I=C>2?0:-1,S=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];w.set(S,v*g*C),T.set(f,m*g*C);const x=[C,C,C,C,C,C];E.set(x,h*g*C)}const D=new dn;D.setAttribute("position",new Sn(w,v)),D.setAttribute("uv",new Sn(T,m)),D.setAttribute("faceIndex",new Sn(E,h)),t.push(D),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ja(i,t,e){const n=new Mi(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yf(i,t,e){const n=new Float32Array(gi),s=new U(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Qa(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function tc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===mo||c===go,d=c===Yi||c===qi;if(l||d){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ja(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new Ja(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Kf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zf(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let T=0,E=w.length;T<E;T+=3){const D=w[T+0],C=w[T+1],b=w[T+2];f.push(D,C,C,b,b,D)}}else if(g!==void 0){const w=g.array;v=g.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const D=T+0,C=T+1,b=T+2;f.push(D,C,C,b,b,D)}}else return;const m=new(Gc(f)?Yc:Xc)(f,1);m.version=v;const h=r.get(u);h&&t.remove(h),r.set(u,m)}function d(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function $f(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function d(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*v[w];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Jf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jf(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let D=a.attributes.position.count*E,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const b=new Float32Array(D*C*4*u),I=new Vc(b,D,C,u);I.type=bn,I.needsUpdate=!0;const S=E*4;for(let A=0;A<u;A++){const O=h[A],z=w[A],Z=T[A],j=D*C*4*A;for(let Y=0;Y<O.count;Y++){const nt=Y*S;g===!0&&(s.fromBufferAttribute(O,Y),b[j+nt+0]=s.x,b[j+nt+1]=s.y,b[j+nt+2]=s.z,b[j+nt+3]=0),v===!0&&(s.fromBufferAttribute(z,Y),b[j+nt+4]=s.x,b[j+nt+5]=s.y,b[j+nt+6]=s.z,b[j+nt+7]=0),m===!0&&(s.fromBufferAttribute(Z,Y),b[j+nt+8]=s.x,b[j+nt+9]=s.y,b[j+nt+10]=s.z,b[j+nt+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new Vt(D,C)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Qf(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const el=new Ze,ec=new $c(1,1),nl=new Vc,il=new Su,sl=new Zc,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),oc=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _r(i,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),Oe(e,n)}}function rp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),Oe(e,n)}}function op(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Oe(e,n)}}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function mp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=Hc,r=ec):r=el,e.setTexture2D(t||r,s)}function gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||il,s)}function _p(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sl,s)}function vp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nl,s)}function xp(i){switch(i){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return op;case 5124:case 35670:return ap;case 35667:case 35671:return cp;case 35668:case 35672:return lp;case 35669:case 35673:return up;case 5125:return hp;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return vp}}function Mp(i,t){i.uniform1fv(this.addr,t)}function Sp(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Ep(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function yp(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Tp(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wp(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bp(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ap(i,t){i.uniform1iv(this.addr,t)}function Rp(i,t){i.uniform2iv(this.addr,t)}function Cp(i,t){i.uniform3iv(this.addr,t)}function Pp(i,t){i.uniform4iv(this.addr,t)}function Lp(i,t){i.uniform1uiv(this.addr,t)}function Dp(i,t){i.uniform2uiv(this.addr,t)}function Ip(i,t){i.uniform3uiv(this.addr,t)}function Up(i,t){i.uniform4uiv(this.addr,t)}function Np(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||el,r[o])}function Fp(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||il,r[o])}function Op(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sl,r[o])}function Bp(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nl,r[o])}function zp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return Ep;case 35666:return yp;case 35674:return Tp;case 35675:return wp;case 35676:return bp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}class Hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xp(e.type)}}class Gp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zp(e.type)}}class Vp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function ac(i,t){i.seq.push(t),i.map[t.id]=t}function kp(i,t,e){const n=i.name,s=n.length;for(Qr.lastIndex=0;;){const r=Qr.exec(n),o=Qr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ac(e,l===void 0?new Hp(a,i,t):new Gp(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Vp(a),ac(e,u)),e=u}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);kp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function cc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wp=37297;let Xp=0;function Yp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const lc=new jt;function qp(i){pe._getMatrix(lc,pe.workingColorSpace,i);const t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Yp(i.getShaderSource(t),o)}else return s}function Kp(i,t){const e=qp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zp(i,t){let e;switch(t){case Dl:e="Linear";break;case Il:e="Reinhard";break;case Ul:e="Cineon";break;case Nl:e="ACESFilmic";break;case Ol:e="AgX";break;case Bl:e="Neutral";break;case Fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new U;function $p(){pe.getLuminanceCoefficients(tr);const i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function jp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function hs(i){return i!==""}function hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(tm,nm)}const em=new Map;function nm(i,t){let e=Qt[t];if(e===void 0){const n=em.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wo(e)}const im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(im,sm)}function sm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function om(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case qi:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function cm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Ll:t="ENVMAP_BLENDING_ADD";break}return t}function lm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function um(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=rm(e),l=om(e),d=am(e),u=cm(e),f=lm(e),p=Jp(e),g=jp(r),v=s.createProgram();let m,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),h.length>0&&(h+=`
`)):(m=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),h=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Kp("linearToOutputTexel",e.outputColorSpace),$p(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=Wo(o),o=hc(o,e),o=dc(o,e),a=Wo(a),a=hc(a,e),a=dc(a,e),o=fc(o),a=fc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=w+m+o,E=w+h+a,D=cc(s,s.VERTEX_SHADER,T),C=cc(s,s.FRAGMENT_SHADER,E);s.attachShader(v,D),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(A){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(D).trim(),Z=s.getShaderInfoLog(C).trim();let j=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,C);else{const nt=uc(s,D,"vertex"),k=uc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+nt+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||Z==="")&&(Y=!1);Y&&(A.diagnostics={runnable:j,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(D),s.deleteShader(C),I=new lr(s,v),S=Qp(s,v)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Wp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}let hm=0;class dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fm(t),e.set(t,n)),n}}class fm{constructor(t){this.id=hm++,this.code=t,this.usedTimes=0}}function pm(i,t,e,n,s,r,o){const a=new kc,c=new dm,l=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,A,O,z){const Z=O.fog,j=z.geometry,Y=S.isMeshStandardMaterial?O.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),k=nt&&nt.mapping===pr?nt.image.height:null,gt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const St=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pt=St!==void 0?St.length:0;let Bt=0;j.morphAttributes.position!==void 0&&(Bt=1),j.morphAttributes.normal!==void 0&&(Bt=2),j.morphAttributes.color!==void 0&&(Bt=3);let le,J,rt,at;if(gt){const Ft=Tn[gt];le=Ft.vertexShader,J=Ft.fragmentShader}else le=S.vertexShader,J=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),at=c.getFragmentShaderID(S);const et=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),$t=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,_e=!!S.map,re=!!S.matcap,zt=!!nt,R=!!S.aoMap,we=!!S.lightMap,Wt=!!S.bumpMap,qt=!!S.normalMap,dt=!!S.displacementMap,ie=!!S.emissiveMap,_t=!!S.metalnessMap,y=!!S.roughnessMap,_=S.anisotropy>0,B=S.clearcoat>0,q=S.dispersion>0,tt=S.iridescence>0,K=S.sheen>0,vt=S.transmission>0,ct=_&&!!S.anisotropyMap,Et=B&&!!S.clearcoatMap,Xt=B&&!!S.clearcoatNormalMap,it=B&&!!S.clearcoatRoughnessMap,ft=tt&&!!S.iridescenceMap,yt=tt&&!!S.iridescenceThicknessMap,Dt=K&&!!S.sheenColorMap,xt=K&&!!S.sheenRoughnessMap,Ot=!!S.specularMap,Lt=!!S.specularColorMap,te=!!S.specularIntensityMap,L=vt&&!!S.transmissionMap,lt=vt&&!!S.thicknessMap,V=!!S.gradientMap,Q=!!S.alphaMap,ot=S.alphaTest>0,ut=!!S.alphaHash,pt=!!S.extensions;let It=ti;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(It=i.toneMapping);const ee={shaderID:gt,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:J,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:$t,instancingColor:$t&&z.instanceColor!==null,instancingMorph:$t&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:_e,matcap:re,envMap:zt,envMapMode:zt&&nt.mapping,envMapCubeUVHeight:k,aoMap:R,lightMap:we,bumpMap:Wt,normalMap:qt,displacementMap:f&&dt,emissiveMap:ie,normalMapObjectSpace:qt&&S.normalMapType===Vl,normalMapTangentSpace:qt&&S.normalMapType===zc,metalnessMap:_t,roughnessMap:y,anisotropy:_,anisotropyMap:ct,clearcoat:B,clearcoatMap:Et,clearcoatNormalMap:Xt,clearcoatRoughnessMap:it,dispersion:q,iridescence:tt,iridescenceMap:ft,iridescenceThicknessMap:yt,sheen:K,sheenColorMap:Dt,sheenRoughnessMap:xt,specularMap:Ot,specularColorMap:Lt,specularIntensityMap:te,transmission:vt,transmissionMap:L,thicknessMap:lt,gradientMap:V,opaque:S.transparent===!1&&S.blending===ki&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:ot,alphaHash:ut,combine:S.combine,mapUv:_e&&v(S.map.channel),aoMapUv:R&&v(S.aoMap.channel),lightMapUv:we&&v(S.lightMap.channel),bumpMapUv:Wt&&v(S.bumpMap.channel),normalMapUv:qt&&v(S.normalMap.channel),displacementMapUv:dt&&v(S.displacementMap.channel),emissiveMapUv:ie&&v(S.emissiveMap.channel),metalnessMapUv:_t&&v(S.metalnessMap.channel),roughnessMapUv:y&&v(S.roughnessMap.channel),anisotropyMapUv:ct&&v(S.anisotropyMap.channel),clearcoatMapUv:Et&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(S.sheenRoughnessMap.channel),specularMapUv:Ot&&v(S.specularMap.channel),specularColorMapUv:Lt&&v(S.specularColorMap.channel),specularIntensityMapUv:te&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:lt&&v(S.thicknessMap.channel),alphaMapUv:Q&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(qt||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(_e||Q),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:_e&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===xe,decodeVideoTextureEmissive:ie&&S.emissiveMap.isVideoTexture===!0&&pe.getTransfer(S.emissiveMap.colorSpace)===xe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bn,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&S.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)x.push(A),x.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(w(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){const x=g[S.type];let A;if(x){const O=Tn[x];A=Nu.clone(O.uniforms)}else A=S.uniforms;return A}function D(S,x){let A;for(let O=0,z=d.length;O<z;O++){const Z=d[O];if(Z.cacheKey===x){A=Z,++A.usedTimes;break}}return A===void 0&&(A=new um(i,x,S,r),d.push(A)),A}function C(S){if(--S.usedTimes===0){const x=d.indexOf(S);d[x]=d[d.length-1],d.pop(),S.destroy()}}function b(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:D,releaseProgram:C,releaseShaderCache:b,programs:d,dispose:I}}function mm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,v,m){let h=i[t];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=v,h.group=m),t++,h}function a(u,f,p,g,v,m){const h=o(u,f,p,g,v,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function c(u,f,p,g,v,m){const h=o(u,f,p,g,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function l(u,f){e.length>1&&e.sort(u||gm),n.length>1&&n.sort(f||mc),s.length>1&&s.sort(f||mc)}function d(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:d,sort:l}}function _m(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new gc,i.set(n,[o])):s>=r.length?(o=new gc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Zt};break;case"SpotLight":e={position:new U,direction:new U,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Mm=0;function Sm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Em(i){const t=new vm,e=xm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new Te,o=new Te;function a(l){let d=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,w=0,T=0,E=0,D=0,C=0,b=0;l.sort(Sm);for(let S=0,x=l.length;S<x;S++){const A=l[S],O=A.color,z=A.intensity,Z=A.distance,j=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=O.r*z,u+=O.g*z,f+=O.b*z;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(A.sh.coefficients[Y],z);b++}else if(A.isDirectionalLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const nt=A.shadow,k=e.get(A);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=A.shadow.matrix,w++}n.directional[p]=Y,p++}else if(A.isSpotLight){const Y=t.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(O).multiplyScalar(z),Y.distance=Z,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,n.spot[v]=Y;const nt=A.shadow;if(A.map&&(n.spotLightMap[D]=A.map,D++,nt.updateMatrices(A),A.castShadow&&C++),n.spotLightMatrix[v]=nt.matrix,A.castShadow){const k=e.get(A);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=j,E++}v++}else if(A.isRectAreaLight){const Y=t.get(A);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=Y,m++}else if(A.isPointLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const nt=A.shadow,k=e.get(A);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,k.shadowCameraNear=nt.camera.near,k.shadowCameraFar=nt.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=A.shadow.matrix,T++}n.point[g]=Y,g++}else if(A.isHemisphereLight){const Y=t.get(A);Y.skyColor.copy(A.color).multiplyScalar(z),Y.groundColor.copy(A.groundColor).multiplyScalar(z),n.hemi[h]=Y,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==E||I.numSpotMaps!==D||I.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=E,I.numSpotMaps=D,I.numLightProbes=b,n.version=Mm++)}function c(l,d){let u=0,f=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const T=l[h];if(T.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(T.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function _c(i){const t=new Em(i),e=[],n=[];function s(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ym(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new _c(i),t.set(s,[a])):r>=o.length?(a=new _c(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bm(i,t,e){let n=new na;const s=new Vt,r=new Vt,o=new Me,a=new Zu({depthPacking:Gl}),c=new $u,l={},d=e.maxTextureSize,u={[ei]:on,[on]:ei,[Bn]:Bn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Tm,fragmentShader:wm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let h=this.type;this.render=function(C,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=h!==Fn&&this.type===Fn,Z=h===Fn&&this.type!==Fn;for(let j=0,Y=C.length;j<Y;j++){const nt=C[j],k=nt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const gt=k.getFrameExtents();if(s.multiply(gt),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/gt.x),s.x=r.x*gt.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/gt.y),s.y=r.y*gt.y,k.mapSize.y=r.y)),k.map===null||z===!0||Z===!0){const Pt=this.type!==Fn?{minFilter:hn,magFilter:hn}:{};k.map!==null&&k.map.dispose(),k.map=new Mi(s.x,s.y,Pt),k.map.texture.name=nt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const St=k.getViewportCount();for(let Pt=0;Pt<St;Pt++){const Bt=k.getViewport(Pt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),O.viewport(o),k.updateMatrices(nt,Pt),n=k.getFrustum(),E(b,I,k.camera,nt,this.type)}k.isPointLightShadow!==!0&&this.type===Fn&&w(k,I),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,A)};function w(C,b){const I=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Mi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,I,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,I,p,v,null)}function T(C,b,I,S){let x=null;const A=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)x=A;else if(x=I.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=x.uuid,z=b.uuid;let Z=l[O];Z===void 0&&(Z={},l[O]=Z);let j=Z[z];j===void 0&&(j=x.clone(),Z[z]=j,b.addEventListener("dispose",D)),x=j}if(x.visible=b.visible,x.wireframe=b.wireframe,S===Fn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=I}return x}function E(C,b,I,S,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Fn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const z=t.update(C),Z=C.material;if(Array.isArray(Z)){const j=z.groups;for(let Y=0,nt=j.length;Y<nt;Y++){const k=j[Y],gt=Z[k.materialIndex];if(gt&&gt.visible){const St=T(C,gt,S,x);C.onBeforeShadow(i,C,b,I,z,St,k),i.renderBufferDirect(I,null,z,St,C,k),C.onAfterShadow(i,C,b,I,z,St,k)}}}else if(Z.visible){const j=T(C,Z,S,x);C.onBeforeShadow(i,C,b,I,z,j,null),i.renderBufferDirect(I,null,z,j,C,null),C.onAfterShadow(i,C,b,I,z,j,null)}}const O=C.children;for(let z=0,Z=O.length;z<Z;z++)E(O[z],b,I,S,x)}function D(C){C.target.removeEventListener("dispose",D);for(const I in l){const S=l[I],x=C.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Am={[ao]:co,[lo]:fo,[uo]:po,[Xi]:ho,[co]:ao,[fo]:lo,[po]:uo,[ho]:Xi};function Rm(i,t){function e(){let L=!1;const lt=new Me;let V=null;const Q=new Me(0,0,0,0);return{setMask:function(ot){V!==ot&&!L&&(i.colorMask(ot,ot,ot,ot),V=ot)},setLocked:function(ot){L=ot},setClear:function(ot,ut,pt,It,ee){ee===!0&&(ot*=It,ut*=It,pt*=It),lt.set(ot,ut,pt,It),Q.equals(lt)===!1&&(i.clearColor(ot,ut,pt,It),Q.copy(lt))},reset:function(){L=!1,V=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,lt=!1,V=null,Q=null,ot=null;return{setReversed:function(ut){if(lt!==ut){const pt=t.get("EXT_clip_control");ut?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),lt=ut;const It=ot;ot=null,this.setClear(It)}},getReversed:function(){return lt},setTest:function(ut){ut?et(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ut){V!==ut&&!L&&(i.depthMask(ut),V=ut)},setFunc:function(ut){if(lt&&(ut=Am[ut]),Q!==ut){switch(ut){case ao:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ut}},setLocked:function(ut){L=ut},setClear:function(ut){ot!==ut&&(lt&&(ut=1-ut),i.clearDepth(ut),ot=ut)},reset:function(){L=!1,V=null,Q=null,ot=null,lt=!1}}}function s(){let L=!1,lt=null,V=null,Q=null,ot=null,ut=null,pt=null,It=null,ee=null;return{setTest:function(Ft){L||(Ft?et(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Ft){lt!==Ft&&!L&&(i.stencilMask(Ft),lt=Ft)},setFunc:function(Ft,he,oe){(V!==Ft||Q!==he||ot!==oe)&&(i.stencilFunc(Ft,he,oe),V=Ft,Q=he,ot=oe)},setOp:function(Ft,he,oe){(ut!==Ft||pt!==he||It!==oe)&&(i.stencilOp(Ft,he,oe),ut=Ft,pt=he,It=oe)},setLocked:function(Ft){L=Ft},setClear:function(Ft){ee!==Ft&&(i.clearStencil(Ft),ee=Ft)},reset:function(){L=!1,lt=null,V=null,Q=null,ot=null,ut=null,pt=null,It=null,ee=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,h=null,w=null,T=null,E=null,D=null,C=null,b=new Zt(0,0,0),I=0,S=!1,x=null,A=null,O=null,z=null,Z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,nt=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=nt>=1):k.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=nt>=2);let gt=null,St={};const Pt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),le=new Me().fromArray(Pt),J=new Me().fromArray(Bt);function rt(L,lt,V,Q){const ot=new Uint8Array(4),ut=i.createTexture();i.bindTexture(L,ut),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<V;pt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(lt+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ut}const at={};at[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Xi),Wt(!1),qt(ma),et(i.CULL_FACE),R(Qn);function et(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function wt(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function $t(L,lt){return u[L]!==lt?(i.bindFramebuffer(L,lt),u[L]=lt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Rt(L,lt){let V=p,Q=!1;if(L){V=f.get(lt),V===void 0&&(V=[],f.set(lt,V));const ot=L.textures;if(V.length!==ot.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,pt=ot.length;ut<pt;ut++)V[ut]=i.COLOR_ATTACHMENT0+ut;V.length=ot.length,Q=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Q=!0);Q&&i.drawBuffers(V)}function _e(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const re={[mi]:i.FUNC_ADD,[fl]:i.FUNC_SUBTRACT,[pl]:i.FUNC_REVERSE_SUBTRACT};re[ml]=i.MIN,re[gl]=i.MAX;const zt={[_l]:i.ZERO,[vl]:i.ONE,[xl]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[wl]:i.SRC_ALPHA_SATURATE,[yl]:i.DST_COLOR,[Sl]:i.DST_ALPHA,[Ml]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[Tl]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[bl]:i.CONSTANT_COLOR,[Al]:i.ONE_MINUS_CONSTANT_COLOR,[Rl]:i.CONSTANT_ALPHA,[Cl]:i.ONE_MINUS_CONSTANT_ALPHA};function R(L,lt,V,Q,ot,ut,pt,It,ee,Ft){if(L===Qn){v===!0&&(wt(i.BLEND),v=!1);return}if(v===!1&&(et(i.BLEND),v=!0),L!==dl){if(L!==m||Ft!==S){if((h!==mi||E!==mi)&&(i.blendEquation(i.FUNC_ADD),h=mi,E=mi),Ft)switch(L){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.ONE,i.ONE);break;case _a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,T=null,D=null,C=null,b.set(0,0,0),I=0,m=L,S=Ft}return}ot=ot||lt,ut=ut||V,pt=pt||Q,(lt!==h||ot!==E)&&(i.blendEquationSeparate(re[lt],re[ot]),h=lt,E=ot),(V!==w||Q!==T||ut!==D||pt!==C)&&(i.blendFuncSeparate(zt[V],zt[Q],zt[ut],zt[pt]),w=V,T=Q,D=ut,C=pt),(It.equals(b)===!1||ee!==I)&&(i.blendColor(It.r,It.g,It.b,ee),b.copy(It),I=ee),m=L,S=!1}function we(L,lt){L.side===Bn?wt(i.CULL_FACE):et(i.CULL_FACE);let V=L.side===on;lt&&(V=!V),Wt(V),L.blending===ki&&L.transparent===!1?R(Qn):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function qt(L){L!==ll?(et(i.CULL_FACE),L!==A&&(L===ma?i.cullFace(i.BACK):L===ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),A=L}function dt(L){L!==O&&(Y&&i.lineWidth(L),O=L)}function ie(L,lt,V){L?(et(i.POLYGON_OFFSET_FILL),(z!==lt||Z!==V)&&(i.polygonOffset(lt,V),z=lt,Z=V)):wt(i.POLYGON_OFFSET_FILL)}function _t(L){L?et(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function y(L){L===void 0&&(L=i.TEXTURE0+j-1),gt!==L&&(i.activeTexture(L),gt=L)}function _(L,lt,V){V===void 0&&(gt===null?V=i.TEXTURE0+j-1:V=gt);let Q=St[V];Q===void 0&&(Q={type:void 0,texture:void 0},St[V]=Q),(Q.type!==L||Q.texture!==lt)&&(gt!==V&&(i.activeTexture(V),gt=V),i.bindTexture(L,lt||at[L]),Q.type=L,Q.texture=lt)}function B(){const L=St[gt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){le.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function xt(L){J.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function Ot(L,lt){let V=l.get(lt);V===void 0&&(V=new WeakMap,l.set(lt,V));let Q=V.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(lt,L.name),V.set(L,Q))}function Lt(L,lt){const Q=l.get(lt).get(L);c.get(lt)!==Q&&(i.uniformBlockBinding(lt,Q,L.__bindingPointIndex),c.set(lt,Q))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},gt=null,St={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,h=null,w=null,T=null,E=null,D=null,C=null,b=new Zt(0,0,0),I=0,S=!1,x=null,A=null,O=null,z=null,Z=null,le.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:wt,bindFramebuffer:$t,drawBuffers:Rt,useProgram:_e,setBlending:R,setMaterial:we,setFlipSided:Wt,setCullFace:qt,setLineWidth:dt,setPolygonOffset:ie,setScissorTest:_t,activeTexture:y,bindTexture:_,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:tt,texImage2D:ft,texImage3D:yt,updateUBOMapping:Ot,uniformBlockBinding:Lt,texStorage2D:Xt,texStorage3D:it,texSubImage2D:K,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Et,scissor:Dt,viewport:xt,reset:te}}function Cm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return p?new OffscreenCanvas(y,_):dr("canvas")}function v(y,_,B){let q=1;const tt=_t(y);if((tt.width>B||tt.height>B)&&(q=B/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const K=Math.floor(q*tt.width),vt=Math.floor(q*tt.height);u===void 0&&(u=g(K,vt));const ct=_?g(K,vt):u;return ct.width=K,ct.height=vt,ct.getContext("2d").drawImage(y,0,0,K,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+vt+")."),ct}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),y;return y}function m(y){return y.generateMipmaps}function h(y){i.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,B,q,tt=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=_;if(_===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),_===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),_===i.RGBA){const vt=tt?ur:pe.getTransfer(q);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=vt===xe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(y,_){let B;return y?_===null||_===xi||_===_s?B=i.DEPTH24_STENCIL8:_===bn?B=i.DEPTH32F_STENCIL8:_===gs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xi||_===_s?B=i.DEPTH_COMPONENT24:_===bn?B=i.DEPTH_COMPONENT32F:_===gs&&(B=i.DEPTH_COMPONENT16),B}function D(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==hn&&y.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function C(y){const _=y.target;_.removeEventListener("dispose",C),I(_),_.isVideoTexture&&d.delete(_)}function b(y){const _=y.target;_.removeEventListener("dispose",b),x(_)}function I(y){const _=n.get(y);if(_.__webglInit===void 0)return;const B=y.source,q=f.get(B);if(q){const tt=q[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(y),Object.keys(q).length===0&&f.delete(B)}n.remove(y)}function S(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const B=y.source,q=f.get(B);delete q[_.__cacheKey],o.memory.textures--}function x(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let tt=0;tt<_.__webglFramebuffer[q].length;tt++)i.deleteFramebuffer(_.__webglFramebuffer[q][tt]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=y.textures;for(let q=0,tt=B.length;q<tt;q++){const K=n.get(B[q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[q])}n.remove(y)}let A=0;function O(){A=0}function z(){const y=A;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),A+=1,y}function Z(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function j(y,_){const B=n.get(y);if(y.isVideoTexture&&dt(y),y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,y,_);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function Y(y,_){const B=n.get(y);if(y.version>0&&B.__version!==y.version){J(B,y,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function nt(y,_){const B=n.get(y);if(y.version>0&&B.__version!==y.version){J(B,y,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function k(y,_){const B=n.get(y);if(y.version>0&&B.__version!==y.version){rt(B,y,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const gt={[ms]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},St={[hn]:i.NEAREST,[zl]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},Pt={[kl]:i.NEVER,[Zl]:i.ALWAYS,[Wl]:i.LESS,[Hc]:i.LEQUAL,[Xl]:i.EQUAL,[Kl]:i.GEQUAL,[Yl]:i.GREATER,[ql]:i.NOTEQUAL};function Bt(y,_){if(_.type===bn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===wn||_.magFilter===Sr||_.magFilter===Ds||_.magFilter===vi||_.minFilter===wn||_.minFilter===Sr||_.minFilter===Ds||_.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,gt[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,gt[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,gt[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,St[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,St[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==Ds&&_.minFilter!==vi||_.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function le(y,_){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",C));const q=_.source;let tt=f.get(q);tt===void 0&&(tt={},f.set(q,tt));const K=Z(_);if(K!==y.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[K].usedTimes++;const vt=tt[y.__cacheKey];vt!==void 0&&(tt[y.__cacheKey].usedTimes--,vt.usedTimes===0&&S(_)),y.__cacheKey=K,y.__webglTexture=tt[K].texture}return B}function J(y,_,B){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const tt=le(y,_),K=_.source;e.bindTexture(q,y.__webglTexture,i.TEXTURE0+B);const vt=n.get(K);if(K.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ct=pe.getPrimaries(pe.workingColorSpace),Et=_.colorSpace===jn?null:pe.getPrimaries(_.colorSpace),Xt=_.colorSpace===jn||ct===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let it=v(_.image,!1,s.maxTextureSize);it=ie(_,it);const ft=r.convert(_.format,_.colorSpace),yt=r.convert(_.type);let Dt=T(_.internalFormat,ft,yt,_.colorSpace,_.isVideoTexture);Bt(q,_);let xt;const Ot=_.mipmaps,Lt=_.isVideoTexture!==!0,te=vt.__version===void 0||tt===!0,L=K.dataReady,lt=D(_,it);if(_.isDepthTexture)Dt=E(_.format===xs,_.type),te&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,ft,yt,null));else if(_.isDataTexture)if(Ot.length>0){Lt&&te&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,Ot[0].width,Ot[0].height);for(let V=0,Q=Ot.length;V<Q;V++)xt=Ot[V],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,ft,yt,xt.data):e.texImage2D(i.TEXTURE_2D,V,Dt,xt.width,xt.height,0,ft,yt,xt.data);_.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,it.width,it.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,ft,yt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,ft,yt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Dt,Ot[0].width,Ot[0].height,it.depth);for(let V=0,Q=Ot.length;V<Q;V++)if(xt=Ot[V],_.format!==Mn)if(ft!==null)if(Lt){if(L)if(_.layerUpdates.size>0){const ot=qa(xt.width,xt.height,_.format,_.type);for(const ut of _.layerUpdates){const pt=xt.data.subarray(ut*ot/xt.data.BYTES_PER_ELEMENT,(ut+1)*ot/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ut,xt.width,xt.height,1,ft,pt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,it.depth,ft,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Dt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,it.depth,ft,yt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Dt,xt.width,xt.height,it.depth,0,ft,yt,xt.data)}else{Lt&&te&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,Ot[0].width,Ot[0].height);for(let V=0,Q=Ot.length;V<Q;V++)xt=Ot[V],_.format!==Mn?ft!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,ft,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,ft,yt,xt.data):e.texImage2D(i.TEXTURE_2D,V,Dt,xt.width,xt.height,0,ft,yt,xt.data)}else if(_.isDataArrayTexture)if(Lt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Dt,it.width,it.height,it.depth),L)if(_.layerUpdates.size>0){const V=qa(it.width,it.height,_.format,_.type);for(const Q of _.layerUpdates){const ot=it.data.subarray(Q*V/it.data.BYTES_PER_ELEMENT,(Q+1)*V/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,ft,yt,ot)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,yt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,ft,yt,it.data);else if(_.isData3DTexture)Lt?(te&&e.texStorage3D(i.TEXTURE_3D,lt,Dt,it.width,it.height,it.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,yt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,ft,yt,it.data);else if(_.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(i.TEXTURE_2D,lt,Dt,it.width,it.height);else{let V=it.width,Q=it.height;for(let ot=0;ot<lt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Dt,V,Q,0,ft,yt,null),V>>=1,Q>>=1}}else if(Ot.length>0){if(Lt&&te){const V=_t(Ot[0]);e.texStorage2D(i.TEXTURE_2D,lt,Dt,V.width,V.height)}for(let V=0,Q=Ot.length;V<Q;V++)xt=Ot[V],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft,yt,xt):e.texImage2D(i.TEXTURE_2D,V,Dt,ft,yt,xt);_.generateMipmaps=!1}else if(Lt){if(te){const V=_t(it);e.texStorage2D(i.TEXTURE_2D,lt,Dt,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,yt,it)}else e.texImage2D(i.TEXTURE_2D,0,Dt,ft,yt,it);m(_)&&h(q),vt.__version=K.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function rt(y,_,B){if(_.image.length!==6)return;const q=le(y,_),tt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+B);const K=n.get(tt);if(tt.version!==K.__version||q===!0){e.activeTexture(i.TEXTURE0+B);const vt=pe.getPrimaries(pe.workingColorSpace),ct=_.colorSpace===jn?null:pe.getPrimaries(_.colorSpace),Et=_.colorSpace===jn||vt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Xt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let Q=0;Q<6;Q++)!Xt&&!it?ft[Q]=v(_.image[Q],!0,s.maxCubemapSize):ft[Q]=it?_.image[Q].image:_.image[Q],ft[Q]=ie(_,ft[Q]);const yt=ft[0],Dt=r.convert(_.format,_.colorSpace),xt=r.convert(_.type),Ot=T(_.internalFormat,Dt,xt,_.colorSpace),Lt=_.isVideoTexture!==!0,te=K.__version===void 0||q===!0,L=tt.dataReady;let lt=D(_,yt);Bt(i.TEXTURE_CUBE_MAP,_);let V;if(Xt){Lt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ot,yt.width,yt.height);for(let Q=0;Q<6;Q++){V=ft[Q].mipmaps;for(let ot=0;ot<V.length;ot++){const ut=V[ot];_.format!==Mn?Dt!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,Ot,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,0,0,ut.width,ut.height,Dt,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot,Ot,ut.width,ut.height,0,Dt,xt,ut.data)}}}else{if(V=_.mipmaps,Lt&&te){V.length>0&&lt++;const Q=_t(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ot,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ft[Q].width,ft[Q].height,Dt,xt,ft[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ot,ft[Q].width,ft[Q].height,0,Dt,xt,ft[Q].data);for(let ot=0;ot<V.length;ot++){const pt=V[ot].image[Q].image;Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,0,0,pt.width,pt.height,Dt,xt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,Ot,pt.width,pt.height,0,Dt,xt,pt.data)}}else{Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,xt,ft[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ot,Dt,xt,ft[Q]);for(let ot=0;ot<V.length;ot++){const ut=V[ot];Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,0,0,Dt,xt,ut.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot+1,Ot,Dt,xt,ut.image[Q])}}}m(_)&&h(i.TEXTURE_CUBE_MAP),K.__version=tt.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function at(y,_,B,q,tt,K){const vt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),Et=T(B.internalFormat,vt,ct,B.colorSpace),Xt=n.get(_),it=n.get(B);if(it.__renderTarget=_,!Xt.__hasExternalTextures){const ft=Math.max(1,_.width>>K),yt=Math.max(1,_.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,Et,ft,yt,_.depth,0,vt,ct,null):e.texImage2D(tt,K,Et,ft,yt,0,vt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),qt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,tt,it.__webglTexture,0,Wt(_)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,tt,it.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(y,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const q=_.depthTexture,tt=q&&q.isDepthTexture?q.type:null,K=E(_.stencilBuffer,tt),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Wt(_);qt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,K,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,y)}else{const q=_.textures;for(let tt=0;tt<q.length;tt++){const K=q[tt],vt=r.convert(K.format,K.colorSpace),ct=r.convert(K.type),Et=T(K.internalFormat,vt,ct,K.colorSpace),Xt=Wt(_);B&&qt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Et,_.width,_.height):qt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,Et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Et,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const tt=q.__webglTexture,K=Wt(_);if(_.depthTexture.format===vs)qt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(_.depthTexture.format===xs)qt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function $t(y){const _=n.get(y),B=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=q}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");wt(_.__webglFramebuffer,y)}else if(B){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),et(_.__webglDepthbuffer[q],y,!1);else{const tt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),et(_.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(y,_,B){const q=n.get(y);_!==void 0&&at(q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$t(y)}function _e(y){const _=y.texture,B=n.get(y),q=n.get(_);y.addEventListener("dispose",b);const tt=y.textures,K=y.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let Et=0;Et<_.mipmaps.length;Et++)B.__webglFramebuffer[ct][Et]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ct=0,Et=tt.length;ct<Et;ct++){const Xt=n.get(tt[ct]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&qt(y)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const Et=tt[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const Xt=r.convert(Et.format,Et.colorSpace),it=r.convert(Et.type),ft=T(Et.internalFormat,Xt,it,Et.colorSpace,y.isXRRenderTarget===!0),yt=Wt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ft,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),et(B.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let Et=0;Et<_.mipmaps.length;Et++)at(B.__webglFramebuffer[ct][Et],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et);else at(B.__webglFramebuffer[ct],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ct=0,Et=tt.length;ct<Et;ct++){const Xt=tt[ct],it=n.get(Xt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Bt(i.TEXTURE_2D,Xt),at(B.__webglFramebuffer,y,Xt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Xt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ct=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),Bt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let Et=0;Et<_.mipmaps.length;Et++)at(B.__webglFramebuffer[Et],y,_,i.COLOR_ATTACHMENT0,ct,Et);else at(B.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,ct,0);m(_)&&h(ct),e.unbindTexture()}y.depthBuffer&&$t(y)}function re(y){const _=y.textures;for(let B=0,q=_.length;B<q;B++){const tt=_[B];if(m(tt)){const K=w(y),vt=n.get(tt).__webglTexture;e.bindTexture(K,vt),h(K),e.unbindTexture()}}}const zt=[],R=[];function we(y){if(y.samples>0){if(qt(y)===!1){const _=y.textures,B=y.width,q=y.height;let tt=i.COLOR_BUFFER_BIT;const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(y),ct=_.length>1;if(ct)for(let Et=0;Et<_.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Et=0;Et<_.length;Et++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Et]);const Xt=n.get(_[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,tt,i.NEAREST),c===!0&&(zt.length=0,R.length=0,zt.push(i.COLOR_ATTACHMENT0+Et),y.depthBuffer&&y.resolveDepthBuffer===!1&&(zt.push(K),R.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Et=0;Et<_.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Et]);const Xt=n.get(_[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Wt(y){return Math.min(s.maxSamples,y.samples)}function qt(y){const _=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function dt(y){const _=o.render.frame;d.get(y)!==_&&(d.set(y,_),y.update())}function ie(y,_){const B=y.colorSpace,q=y.format,tt=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==Ki&&B!==jn&&(pe.getTransfer(B)===xe?(q!==Mn||tt!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function _t(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=k,this.rebindTextures=Rt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=at,this.useMultisampledRTT=qt}function Pm(i,t){function e(n,s=jn){let r;const o=pe.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===qo)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Es)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===Mn)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Fc)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===Qo)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===xo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===yo||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===yo)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===bo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bo)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===zo||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Go||n===Vo||n===ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:Lm,fragmentShader:Dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Um extends $i{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,f=null,p=null,g=null;const v=new Im,m=e.getContextAttributes();let h=null,w=null;const T=[],E=[],D=new Vt;let C=null;const b=new un;b.viewport=new Me;const I=new un;I.viewport=new Me;const S=[b,I],x=new th;let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=T[J];return rt===void 0&&(rt=new Gr,T[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=T[J];return rt===void 0&&(rt=new Gr,T[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=T[J];return rt===void 0&&(rt=new Gr,T[J]=rt),rt.getHandSpace()};function z(J){const rt=E.indexOf(J.inputSource);if(rt===-1)return;const at=T[rt];at!==void 0&&(at.update(J.inputSource,J.frame,l||o),at.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",j);for(let J=0;J<T.length;J++){const rt=E[J];rt!==null&&(E[J]=null,T[J].disconnect(rt))}A=null,O=null,v.reset(),t.setRenderTarget(h),p=null,f=null,u=null,s=null,w=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,et=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?xs:vs,et=m.stencil?_s:xi);const $t={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Mi(f.textureWidth,f.textureHeight,{format:Mn,type:Gn,depthTexture:new $c(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Mi(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(J){for(let rt=0;rt<J.removed.length;rt++){const at=J.removed[rt],et=E.indexOf(at);et>=0&&(E[et]=null,T[et].disconnect(at))}for(let rt=0;rt<J.added.length;rt++){const at=J.added[rt];let et=E.indexOf(at);if(et===-1){for(let $t=0;$t<T.length;$t++)if($t>=E.length){E.push(at),et=$t;break}else if(E[$t]===null){E[$t]=at,et=$t;break}if(et===-1)break}const wt=T[et];wt&&wt.connect(at)}}const Y=new U,nt=new U;function k(J,rt,at){Y.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(at.matrixWorld);const et=Y.distanceTo(nt),wt=rt.projectionMatrix.elements,$t=at.projectionMatrix.elements,Rt=wt[14]/(wt[10]-1),_e=wt[14]/(wt[10]+1),re=(wt[9]+1)/wt[5],zt=(wt[9]-1)/wt[5],R=(wt[8]-1)/wt[0],we=($t[8]+1)/$t[0],Wt=Rt*R,qt=Rt*we,dt=et/(-R+we),ie=dt*-R;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ie),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const _t=Rt+dt,y=_e+dt,_=Wt-ie,B=qt+(et-ie),q=re*_e/y*_t,tt=zt*_e/y*_t;J.projectionMatrix.makePerspective(_,B,q,tt,_t,y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function gt(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let rt=J.near,at=J.far;v.texture!==null&&(v.depthNear>0&&(rt=v.depthNear),v.depthFar>0&&(at=v.depthFar)),x.near=I.near=b.near=rt,x.far=I.far=b.far=at,(A!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,O=x.far),b.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,x.layers.mask=b.layers.mask|I.layers.mask;const et=J.parent,wt=x.cameras;gt(x,et);for(let $t=0;$t<wt.length;$t++)gt(wt[$t],et);wt.length===2?k(x,b,I):x.projectionMatrix.copy(b.projectionMatrix),St(J,x,et)};function St(J,rt,at){at===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(at.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ms*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Pt=null;function Bt(J,rt){if(d=rt.getViewerPose(l||o),g=rt,d!==null){const at=d.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let et=!1;at.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let Rt=0;Rt<at.length;Rt++){const _e=at[Rt];let re=null;if(p!==null)re=p.getViewport(_e);else{const R=u.getViewSubImage(f,_e);re=R.viewport,Rt===0&&(t.setRenderTargetTextures(w,R.colorTexture,R.depthStencilTexture),t.setRenderTarget(w))}let zt=S[Rt];zt===void 0&&(zt=new un,zt.layers.enable(Rt),zt.viewport=new Me,S[Rt]=zt),zt.matrix.fromArray(_e.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(_e.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(re.x,re.y,re.width,re.height),Rt===0&&(x.matrix.copy(zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(zt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Rt=u.getDepthInformation(at[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,s.renderState)}}for(let at=0;at<T.length;at++){const et=E[at],wt=T[at];et!==null&&wt!==void 0&&wt.update(et,rt,l||o)}Pt&&Pt(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const le=new tl;le.setAnimationLoop(Bt),this.setAnimationLoop=function(J){Pt=J},this.dispose=function(){}}}const hi=new Rn,Nm=new Te;function Fm(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,qc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,w,T,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,w,T):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===on&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===on&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=t.get(h),T=w.envMap,E=w.envMapRotation;T&&(m.envMap.value=T,hi.copy(E),hi.x*=-1,hi.y*=-1,hi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(hi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=T*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===on&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const w=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Om(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,T){const E=T.program;n.uniformBlockBinding(w,E)}function l(w,T){let E=s[w.id];E===void 0&&(g(w),E=d(w),s[w.id]=E,w.addEventListener("dispose",m));const D=T.program;n.updateUBOMapping(w,D);const C=t.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function d(w){const T=u();w.__bindingPointIndex=T;const E=i.createBuffer(),D=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const T=s[w.id],E=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,b=E.length;C<b;C++){const I=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,x=I.length;S<x;S++){const A=I[S];if(p(A,C,S,D)===!0){const O=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let Z=0;for(let j=0;j<z.length;j++){const Y=z[j],nt=v(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+Z,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,Z),Z+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,T,E,D){const C=w.value,b=T+"_"+E;if(D[b]===void 0)return typeof C=="number"||typeof C=="boolean"?D[b]=C:D[b]=C.clone(),!0;{const I=D[b];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return D[b]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(w){const T=w.uniforms;let E=0;const D=16;for(let b=0,I=T.length;b<I;b++){const S=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,A=S.length;x<A;x++){const O=S[x],z=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,j=z.length;Z<j;Z++){const Y=z[Z],nt=v(Y),k=E%D,gt=k%nt.boundary,St=k+gt;E+=gt,St!==0&&D-St<nt.storage&&(E+=D-St),O.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=nt.storage}}}const C=E%D;return C>0&&(E+=D-C),w.__size=E,w.__cache={},this}function v(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}class Bm{constructor(t={}){const{canvas:e=du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let D=!1;this._outputColorSpace=sn;let C=0,b=0,I=null,S=-1,x=null;const A=new Me,O=new Me;let z=null;const Z=new Zt(0);let j=0,Y=e.width,nt=e.height,k=1,gt=null,St=null;const Pt=new Me(0,0,Y,nt),Bt=new Me(0,0,Y,nt);let le=!1;const J=new na;let rt=!1,at=!1;const et=new Te,wt=new Te,$t=new U,Rt=new Me,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function zt(){return I===null?k:1}let R=n;function we(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){const N="webgl2";if(R=we(N,M),R===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Wt,qt,dt,ie,_t,y,_,B,q,tt,K,vt,ct,Et,Xt,it,ft,yt,Dt,xt,Ot,Lt,te,L;function lt(){Wt=new Kf(R),Wt.init(),Lt=new Pm(R,Wt),qt=new Gf(R,Wt,t,Lt),dt=new Rm(R,Wt),qt.reverseDepthBuffer&&f&&dt.buffers.depth.setReversed(!0),ie=new Jf(R),_t=new mm,y=new Cm(R,Wt,dt,_t,qt,Lt,ie),_=new kf(E),B=new qf(E),q=new nh(R),te=new zf(R,q),tt=new Zf(R,q,ie,te),K=new Qf(R,tt,q,ie),Dt=new jf(R,qt,y),it=new Vf(_t),vt=new pm(E,_,B,Wt,qt,te,it),ct=new Fm(E,_t),Et=new _m,Xt=new ym(Wt),yt=new Bf(E,_,B,dt,K,p,c),ft=new bm(E,K,qt),L=new Om(R,ie,qt,dt),xt=new Hf(R,Wt,ie),Ot=new $f(R,Wt,ie),ie.programs=vt.programs,E.capabilities=qt,E.extensions=Wt,E.properties=_t,E.renderLists=Et,E.shadowMap=ft,E.state=dt,E.info=ie}lt();const V=new Um(E,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(Y,nt,!1))},this.getSize=function(M){return M.set(Y,nt)},this.setSize=function(M,N,H=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,nt=N,e.width=Math.floor(M*k),e.height=Math.floor(N*k),H===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Y*k,nt*k).floor()},this.setDrawingBufferSize=function(M,N,H){Y=M,nt=N,k=H,e.width=Math.floor(M*H),e.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(Pt)},this.setViewport=function(M,N,H,G){M.isVector4?Pt.set(M.x,M.y,M.z,M.w):Pt.set(M,N,H,G),dt.viewport(A.copy(Pt).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(Bt)},this.setScissor=function(M,N,H,G){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,N,H,G),dt.scissor(O.copy(Bt).multiplyScalar(k).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){dt.setScissorTest(le=M)},this.setOpaqueSort=function(M){gt=M},this.setTransparentSort=function(M){St=M},this.getClearColor=function(M){return M.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,H=!0){let G=0;if(M){let F=!1;if(I!==null){const st=I.texture.format;F=st===Qo||st===jo||st===Jo}if(F){const st=I.texture.type,mt=st===Gn||st===xi||st===gs||st===_s||st===Ko||st===Zo,Tt=yt.getClearColor(),bt=yt.getClearAlpha(),kt=Tt.r,Ht=Tt.g,Ut=Tt.b;mt?(g[0]=kt,g[1]=Ht,g[2]=Ut,g[3]=bt,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=kt,v[1]=Ht,v[2]=Ut,v[3]=bt,R.clearBufferiv(R.COLOR,0,v))}else G|=R.COLOR_BUFFER_BIT}N&&(G|=R.DEPTH_BUFFER_BIT),H&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),yt.dispose(),Et.dispose(),Xt.dispose(),_t.dispose(),_.dispose(),B.dispose(),K.dispose(),te.dispose(),L.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",$e),V.removeEventListener("sessionend",Ve),ke.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=ie.autoReset,N=ft.enabled,H=ft.autoUpdate,G=ft.needsUpdate,F=ft.type;lt(),ie.autoReset=M,ft.enabled=N,ft.autoUpdate=H,ft.needsUpdate=G,ft.type=F}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function pt(M){const N=M.target;N.removeEventListener("dispose",pt),It(N)}function It(M){ee(M),_t.remove(M)}function ee(M){const N=_t.get(M).programs;N!==void 0&&(N.forEach(function(H){vt.releaseProgram(H)}),M.isShaderMaterial&&vt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,G,F,st){N===null&&(N=_e);const mt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=vr(M,N,H,G,F);dt.setMaterial(G,mt);let bt=H.index,kt=1;if(G.wireframe===!0){if(bt=tt.getWireframeAttribute(H),bt===void 0)return;kt=2}const Ht=H.drawRange,Ut=H.attributes.position;let ae=Ht.start*kt,de=(Ht.start+Ht.count)*kt;st!==null&&(ae=Math.max(ae,st.start*kt),de=Math.min(de,(st.start+st.count)*kt)),bt!==null?(ae=Math.max(ae,0),de=Math.min(de,bt.count)):Ut!=null&&(ae=Math.max(ae,0),de=Math.min(de,Ut.count));const Re=de-ae;if(Re<0||Re===1/0)return;te.setup(F,G,Tt,H,bt);let Se,ce=xt;if(bt!==null&&(Se=q.get(bt),ce=Ot,ce.setIndex(Se)),F.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*zt()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(F.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),dt.setLineWidth(Nt*zt()),F.isLineSegments?ce.setMode(R.LINES):F.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else F.isPoints?ce.setMode(R.POINTS):F.isSprite&&ce.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Nt=F._multiDrawStarts,Le=F._multiDrawCounts,fe=F._multiDrawCount,We=bt?q.get(bt).bytesPerElement:1,Cn=_t.get(G).currentProgram.getUniforms();for(let Xe=0;Xe<fe;Xe++)Cn.setValue(R,"_gl_DrawID",Xe),ce.render(Nt[Xe]/We,Le[Xe])}else if(F.isInstancedMesh)ce.renderInstances(ae,Re,F.count);else if(H.isInstancedBufferGeometry){const Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Le=Math.min(H.instanceCount,Nt);ce.renderInstances(ae,Re,Le)}else ce.render(ae,Re)};function Ft(M,N,H){M.transparent===!0&&M.side===Bn&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,yi(M,N,H),M.side=ei,M.needsUpdate=!0,yi(M,N,H),M.side=Bn):yi(M,N,H)}this.compile=function(M,N,H=null){H===null&&(H=M),h=Xt.get(H),h.init(N),T.push(h),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const G=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){const Tt=st[mt];Ft(Tt,H,F),G.add(Tt)}else Ft(st,H,F),G.add(st)}),h=T.pop(),G},this.compileAsync=function(M,N,H=null){const G=this.compile(M,N,H);return new Promise(F=>{function st(){if(G.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){F(M);return}setTimeout(st,10)}Wt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let he=null;function oe(M){he&&he(M)}function $e(){ke.stop()}function Ve(){ke.start()}const ke=new tl;ke.setAnimationLoop(oe),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(M){he=M,V.setAnimationLoop(M),M===null?ke.stop():ke.start()},V.addEventListener("sessionstart",$e),V.addEventListener("sessionend",Ve),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,N,I),h=Xt.get(M,T.length),h.init(N),T.push(h),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(wt),at=this.localClippingEnabled,rt=it.init(this.clippingPlanes,at),m=Et.get(M,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){const st=E.xr.getDepthSensingMesh();st!==null&&Qe(st,N,-1/0,E.sortObjects)}Qe(M,N,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(gt,St),re=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,re&&yt.addToRenderList(m,M),this.info.render.frame++,rt===!0&&it.beginShadows();const H=h.state.shadowsArray;ft.render(H,M,N),rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(h.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let mt=0,Tt=st.length;mt<Tt;mt++){const bt=st[mt];Qi(G,F,M,bt)}re&&yt.render(M);for(let mt=0,Tt=st.length;mt<Tt;mt++){const bt=st[mt];tn(m,M,bt,bt.viewport)}}else F.length>0&&Qi(G,F,M,N),re&&yt.render(M),tn(m,M,N);I!==null&&b===0&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(E,M,N),te.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],rt===!0&&it.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Qe(M,N,H,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){G&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);const mt=K.update(M),Tt=M.material;Tt.visible&&m.push(M,mt,Tt,H,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||J.intersectsObject(M))){const mt=K.update(M),Tt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Rt.copy(mt.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(Tt)){const bt=mt.groups;for(let kt=0,Ht=bt.length;kt<Ht;kt++){const Ut=bt[kt],ae=Tt[Ut.materialIndex];ae&&ae.visible&&m.push(M,mt,ae,H,Rt.z,Ut)}}else Tt.visible&&m.push(M,mt,Tt,H,Rt.z,null)}}const st=M.children;for(let mt=0,Tt=st.length;mt<Tt;mt++)Qe(st[mt],N,H,G)}function tn(M,N,H,G){const F=M.opaque,st=M.transmissive,mt=M.transparent;h.setupLightsView(H),rt===!0&&it.setGlobalState(E.clippingPlanes,H),G&&dt.viewport(A.copy(G)),F.length>0&&ii(F,N,H),st.length>0&&ii(st,N,H),mt.length>0&&ii(mt,N,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Qi(M,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new Mi(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Es:Gn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const st=h.state.transmissionRenderTarget[G.id],mt=G.viewport||A;st.setSize(mt.z*E.transmissionResolutionScale,mt.w*E.transmissionResolutionScale);const Tt=E.getRenderTarget();E.setRenderTarget(st),E.getClearColor(Z),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),re&&yt.render(H);const bt=E.toneMapping;E.toneMapping=ti;const kt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),rt===!0&&it.setGlobalState(E.clippingPlanes,G),ii(M,H,G),y.updateMultisampleRenderTarget(st),y.updateRenderTargetMipmap(st),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ut=0,ae=N.length;Ut<ae;Ut++){const de=N[Ut],Re=de.object,Se=de.geometry,ce=de.material,Nt=de.group;if(ce.side===Bn&&Re.layers.test(G.layers)){const Le=ce.side;ce.side=on,ce.needsUpdate=!0,Ei(Re,H,G,Se,ce,Nt),ce.side=Le,ce.needsUpdate=!0,Ht=!0}}Ht===!0&&(y.updateMultisampleRenderTarget(st),y.updateRenderTargetMipmap(st))}E.setRenderTarget(Tt),E.setClearColor(Z,j),kt!==void 0&&(G.viewport=kt),E.toneMapping=bt}function ii(M,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=M.length;F<st;F++){const mt=M[F],Tt=mt.object,bt=mt.geometry,kt=mt.group;let Ht=mt.material;Ht.allowOverride===!0&&G!==null&&(Ht=G),Tt.layers.test(H.layers)&&Ei(Tt,N,H,bt,Ht,kt)}}function Ei(M,N,H,G,F,st){M.onBeforeRender(E,N,H,G,F,st),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(E,N,H,G,M,st),F.transparent===!0&&F.side===Bn&&F.forceSinglePass===!1?(F.side=on,F.needsUpdate=!0,E.renderBufferDirect(H,N,G,F,M,st),F.side=ei,F.needsUpdate=!0,E.renderBufferDirect(H,N,G,F,M,st),F.side=Bn):E.renderBufferDirect(H,N,G,F,M,st),M.onAfterRender(E,N,H,G,F,st)}function yi(M,N,H){N.isScene!==!0&&(N=_e);const G=_t.get(M),F=h.state.lights,st=h.state.shadowsArray,mt=F.state.version,Tt=vt.getParameters(M,F.state,st,N,H),bt=vt.getProgramCacheKey(Tt);let kt=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?B:_).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,kt===void 0&&(M.addEventListener("dispose",pt),kt=new Map,G.programs=kt);let Ht=kt.get(bt);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===mt)return ts(M,Tt),Ht}else Tt.uniforms=vt.getUniforms(M),M.onBeforeCompile(Tt,E),Ht=vt.acquireProgram(Tt,bt),kt.set(bt,Ht),G.uniforms=Tt.uniforms;const Ut=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=it.uniform),ts(M,Tt),G.needsLights=Vn(M),G.lightsStateVersion=mt,G.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ht,G.uniformsList=null,Ht}function bs(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=lr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ts(M,N){const H=_t.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function vr(M,N,H,G,F){N.isScene!==!0&&(N=_e),y.resetTextureUnits();const st=N.fog,mt=G.isMeshStandardMaterial?N.environment:null,Tt=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ki,bt=(G.isMeshStandardMaterial?B:_).get(G.envMap||mt),kt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ut=!!H.morphAttributes.position,ae=!!H.morphAttributes.normal,de=!!H.morphAttributes.color;let Re=ti;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Re=E.toneMapping);const Se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=Se!==void 0?Se.length:0,Nt=_t.get(G),Le=h.state.lights;if(rt===!0&&(at===!0||M!==x)){const He=M===x&&G.id===S;it.setState(G,M,He)}let fe=!1;G.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Le.state.version||Nt.outputColorSpace!==Tt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==bt||G.fog===!0&&Nt.fog!==st||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==it.numPlanes||Nt.numIntersection!==it.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==Ht||Nt.morphTargets!==Ut||Nt.morphNormals!==ae||Nt.morphColors!==de||Nt.toneMapping!==Re||Nt.morphTargetsCount!==ce)&&(fe=!0):(fe=!0,Nt.__version=G.version);let We=Nt.currentProgram;fe===!0&&(We=yi(G,N,F));let Cn=!1,Xe=!1,kn=!1;const ve=We.getUniforms(),an=Nt.uniforms;if(dt.useProgram(We.program)&&(Cn=!0,Xe=!0,kn=!0),G.id!==S&&(S=G.id,Xe=!0),Cn||x!==M){dt.buffers.depth.getReversed()?(et.copy(M.projectionMatrix),pu(et),mu(et),ve.setValue(R,"projectionMatrix",et)):ve.setValue(R,"projectionMatrix",M.projectionMatrix),ve.setValue(R,"viewMatrix",M.matrixWorldInverse);const P=ve.map.cameraPosition;P!==void 0&&P.setValue(R,$t.setFromMatrixPosition(M.matrixWorld)),qt.logarithmicDepthBuffer&&ve.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Xe=!0,kn=!0)}if(F.isSkinnedMesh){ve.setOptional(R,F,"bindMatrix"),ve.setOptional(R,F,"bindMatrixInverse");const He=F.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ve.setValue(R,"boneTexture",He.boneTexture,y))}F.isBatchedMesh&&(ve.setOptional(R,F,"batchingTexture"),ve.setValue(R,"batchingTexture",F._matricesTexture,y),ve.setOptional(R,F,"batchingIdTexture"),ve.setValue(R,"batchingIdTexture",F._indirectTexture,y),ve.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ve.setValue(R,"batchingColorTexture",F._colorsTexture,y));const en=H.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Dt.update(F,H,We),(Xe||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,ve.setValue(R,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(an.envMap.value=bt,an.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(an.envMapIntensity.value=N.environmentIntensity),Xe&&(ve.setValue(R,"toneMappingExposure",E.toneMappingExposure),Nt.needsLights&&xr(an,kn),st&&G.fog===!0&&ct.refreshFogUniforms(an,st),ct.refreshMaterialUniforms(an,G,k,nt,h.state.transmissionRenderTarget[M.id]),lr.upload(R,bs(Nt),an,y)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lr.upload(R,bs(Nt),an,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(R,"center",F.center),ve.setValue(R,"modelViewMatrix",F.modelViewMatrix),ve.setValue(R,"normalMatrix",F.normalMatrix),ve.setValue(R,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const He=G.uniformsGroups;for(let P=0,X=He.length;P<X;P++){const W=He[P];L.update(W,We),L.bind(W,We)}}return We}function xr(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Vn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,N,H){const G=_t.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_t.get(M.texture).__webglTexture=N,_t.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const H=_t.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const es=R.createFramebuffer();this.setRenderTarget=function(M,N=0,H=0){I=M,C=N,b=H;let G=!0,F=null,st=!1,mt=!1;if(M){const bt=_t.get(M);if(bt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(bt.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(bt.__hasExternalTextures)y.rebindTextures(M,_t.get(M.texture).__webglTexture,_t.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ut=M.depthTexture;if(bt.__boundDepthTexture!==Ut){if(Ut!==null&&_t.has(Ut)&&(M.width!==Ut.image.width||M.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const kt=M.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(mt=!0);const Ht=_t.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[N])?F=Ht[N][H]:F=Ht[N],st=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?F=_t.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?F=Ht[H]:F=Ht,A.copy(M.viewport),O.copy(M.scissor),z=M.scissorTest}else A.copy(Pt).multiplyScalar(k).floor(),O.copy(Bt).multiplyScalar(k).floor(),z=le;if(H!==0&&(F=es),dt.bindFramebuffer(R.FRAMEBUFFER,F)&&G&&dt.drawBuffers(M,F),dt.viewport(A),dt.scissor(O),dt.setScissorTest(z),st){const bt=_t.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,H)}else if(mt){const bt=_t.get(M.texture),kt=N;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.__webglTexture,H,kt)}else if(M!==null&&H!==0){const bt=_t.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bt.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(M,N,H,G,F,st,mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=_t.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){dt.bindFramebuffer(R.FRAMEBUFFER,Tt);try{const bt=M.texture,kt=bt.format,Ht=bt.type;if(!qt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&H>=0&&H<=M.height-F&&R.readPixels(N,H,G,F,Lt.convert(kt),Lt.convert(Ht),st)}finally{const bt=I!==null?_t.get(I).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,N,H,G,F,st,mt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=_t.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt)if(N>=0&&N<=M.width-G&&H>=0&&H<=M.height-F){dt.bindFramebuffer(R.FRAMEBUFFER,Tt);const bt=M.texture,kt=bt.format,Ht=bt.type;if(!qt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.bufferData(R.PIXEL_PACK_BUFFER,st.byteLength,R.STREAM_READ),R.readPixels(N,H,G,F,Lt.convert(kt),Lt.convert(Ht),0);const ae=I!==null?_t.get(I).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,ae);const de=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await fu(R,de,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,st),R.deleteBuffer(Ut),R.deleteSync(de),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,H=0){const G=Math.pow(2,-H),F=Math.floor(M.image.width*G),st=Math.floor(M.image.height*G),mt=N!==null?N.x:0,Tt=N!==null?N.y:0;y.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,mt,Tt,F,st),dt.unbindTexture()};const As=R.createFramebuffer(),Mr=R.createFramebuffer();this.copyTextureToTexture=function(M,N,H=null,G=null,F=0,st=null){st===null&&(F!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=F,F=0):st=0);let mt,Tt,bt,kt,Ht,Ut,ae,de,Re;const Se=M.isCompressedTexture?M.mipmaps[st]:M.image;if(H!==null)mt=H.max.x-H.min.x,Tt=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,kt=H.min.x,Ht=H.min.y,Ut=H.isBox3?H.min.z:0;else{const en=Math.pow(2,-F);mt=Math.floor(Se.width*en),Tt=Math.floor(Se.height*en),M.isDataArrayTexture?bt=Se.depth:M.isData3DTexture?bt=Math.floor(Se.depth*en):bt=1,kt=0,Ht=0,Ut=0}G!==null?(ae=G.x,de=G.y,Re=G.z):(ae=0,de=0,Re=0);const ce=Lt.convert(N.format),Nt=Lt.convert(N.type);let Le;N.isData3DTexture?(y.setTexture3D(N,0),Le=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(y.setTexture2DArray(N,0),Le=R.TEXTURE_2D_ARRAY):(y.setTexture2D(N,0),Le=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const fe=R.getParameter(R.UNPACK_ROW_LENGTH),We=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Cn=R.getParameter(R.UNPACK_SKIP_PIXELS),Xe=R.getParameter(R.UNPACK_SKIP_ROWS),kn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,kt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ut);const ve=M.isDataArrayTexture||M.isData3DTexture,an=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const en=_t.get(M),He=_t.get(N),P=_t.get(en.__renderTarget),X=_t.get(He.__renderTarget);dt.bindFramebuffer(R.READ_FRAMEBUFFER,P.__webglFramebuffer),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let W=0;W<bt;W++)ve&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(M).__webglTexture,F,Ut+W),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(N).__webglTexture,st,Re+W)),R.blitFramebuffer(kt,Ht,mt,Tt,ae,de,mt,Tt,R.DEPTH_BUFFER_BIT,R.NEAREST);dt.bindFramebuffer(R.READ_FRAMEBUFFER,null),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||_t.has(M)){const en=_t.get(M),He=_t.get(N);dt.bindFramebuffer(R.READ_FRAMEBUFFER,As),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Mr);for(let P=0;P<bt;P++)ve?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,en.__webglTexture,F,Ut+P):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,en.__webglTexture,F),an?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,He.__webglTexture,st,Re+P):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,He.__webglTexture,st),F!==0?R.blitFramebuffer(kt,Ht,mt,Tt,ae,de,mt,Tt,R.COLOR_BUFFER_BIT,R.NEAREST):an?R.copyTexSubImage3D(Le,st,ae,de,Re+P,kt,Ht,mt,Tt):R.copyTexSubImage2D(Le,st,ae,de,kt,Ht,mt,Tt);dt.bindFramebuffer(R.READ_FRAMEBUFFER,null),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else an?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Le,st,ae,de,Re,mt,Tt,bt,ce,Nt,Se.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Le,st,ae,de,Re,mt,Tt,bt,ce,Se.data):R.texSubImage3D(Le,st,ae,de,Re,mt,Tt,bt,ce,Nt,Se):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,st,ae,de,mt,Tt,ce,Nt,Se.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,st,ae,de,Se.width,Se.height,ce,Se.data):R.texSubImage2D(R.TEXTURE_2D,st,ae,de,mt,Tt,ce,Nt,Se);R.pixelStorei(R.UNPACK_ROW_LENGTH,fe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,We),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Cn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,kn),st===0&&N.generateMipmaps&&R.generateMipmap(Le),dt.unbindTexture()},this.copyTextureToTexture3D=function(M,N,H=null,G=null,F=0){return ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,H,G,F)},this.initRenderTarget=function(M){_t.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),dt.unbindTexture()},this.resetState=function(){C=0,b=0,I=null,dt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const zm="kronan-karta-kaninval+13",Ss=48,pn=70;function Ae(i,t){if(t<=-12)return 2.4;if(t>=10)return 0;const e=Gt.smoothstep(t,-12,10);return Gt.lerp(2.4,0,e)}const Ge=(i,t,e,n)=>new At(new rn(i,t,e),n);function fr(i,t,e,n,s){const r=new dn;return r.setAttribute("position",new Ue([-i/2,e,-t/2,i/2,e,-t/2,-i/2,n,0,i/2,n,0,-i/2,e,t/2,i/2,e,t/2],3)),r.setIndex([0,1,3,0,3,2,2,3,5,2,5,4,0,2,4,1,5,3,0,4,5,0,5,1]),r.computeVertexNormals(),new At(r,s)}function Hm(i){const n=[],s=[],r=[],o=new Zt(5145663),a=new Zt(6788686);for(let d=0;d<=46;d++){const u=-pn+d/46*pn*2;for(let f=0;f<=32;f++){const p=-Ss+f/32*Ss*2,g=Ae(p,u);n.push(p,g,u);const v=(Math.sin(p*.43)+Math.cos(u*.31))*.045,m=o.clone().lerp(a,Gt.clamp(.52+v,0,1));s.push(m.r,m.g,m.b)}}for(let d=0;d<46;d++)for(let u=0;u<32;u++){const f=d*33+u,p=f+1,g=f+32+1,v=g+1;r.push(f,g,p,p,g,v)}const c=new dn;c.setAttribute("position",new Ue(n,3)),c.setAttribute("color",new Ue(s,3)),c.setIndex(r),c.computeVertexNormals();const l=new At(c,new Kt({vertexColors:!0,roughness:.94}));l.receiveShadow=!0,i.add(l)}function Jn(i,t,e,n,s=.035){const r=new Ku(t.map(([u,f])=>new U(u,0,f)),!1,"centripetal"),o=Math.max(10,t.length*8),a=[],c=[];for(let u=0;u<=o;u++){const f=u/o,p=r.getPoint(f),g=r.getTangent(f).normalize(),v=-g.z,m=g.x;for(const h of[-1,1]){const w=p.x+v*e*.5*h,T=p.z+m*e*.5*h;a.push(w,Ae(w,T)+s,T)}if(u<o){const h=u*2;c.push(h,h+2,h+1,h+1,h+2,h+3)}}const l=new dn;l.setAttribute("position",new Ue(a,3)),l.setIndex(c),l.computeVertexNormals();const d=new At(l,n);d.receiveShadow=!0,i.add(d)}function Nn(i,t,e,n,s,r=1.3,o=.85){const a=Math.hypot(n-t,s-e),c=Math.max(Ae(t,e),Ae(n,s))+r*.5,l=new Kt({color:2383147,roughness:.92}),d=Ge(o,r,a,l);d.position.set((t+n)/2,c,(e+s)/2),d.rotation.y=Math.atan2(n-t,s-e),d.castShadow=!0,i.add(d);const u=new ge(o*.65,9,6);for(let f=0;f<=a;f+=1.25){const p=a===0?0:f/a,g=new At(u,l);g.scale.set(1,.66,1.2),g.position.set(Gt.lerp(t,n,p),c+r*.36,Gt.lerp(e,s,p)),i.add(g)}}function Xo(i,t,e,n,s,r,o,a,c,l){const d=Ge(s+.22,r+.22,.08,a);d.position.set(t,e,n);const u=Ge(s,r,.1,c);u.position.set(t,e,n+o*.055);const f=Ge(.055,r,.12,a);f.position.set(t,e,n+o*.115),i.add(d,u,f);const p=new jc(16757594,0,7,2);p.position.set(t,e,n+o*.5),i.add(p),l.push(p)}function En(i,t,e,n,s,r,o,a,c,l,d=0,u=2.7){const f=Ae(s,r),p=new Ce,g=new Kt({color:c,roughness:.72}),v=new Kt({color:l,roughness:.82}),m=new Kt({color:15986404,roughness:.62}),h=new Kt({color:7509410,emissive:16756050,emissiveIntensity:0,roughness:.2});n.push(h);const w=Ge(o,u,a,g);w.position.y=u/2,p.add(w,fr(o+.65,a+.85,u+.06,u+1.2,v)),Xo(p,-o*.22,u*.58,a/2+.045,Math.min(1.2,o*.18),.82,1,m,h,e),Xo(p,o*.22,u*.58,a/2+.045,Math.min(1.2,o*.18),.82,1,m,h,e),p.position.set(s,f,r),p.rotation.y=d,i.add(p);const T=Math.abs(Math.cos(d))*o+Math.abs(Math.sin(d))*a,E=Math.abs(Math.sin(d))*o+Math.abs(Math.cos(d))*a;return t.push({min:new Vt(s-T/2-.2,r-E/2-.2),max:new Vt(s+T/2+.2,r+E/2+.2),y0:f,y1:f+u+1.2}),p}function Gm(i,t,e,n){const c=Ae(8,31),l=new Ce,d=new Kt({color:15657436,roughness:.72}),u=new Kt({color:16447727,roughness:.6}),f=new Kt({color:2434341,roughness:.82}),p=new Kt({color:7903656,emissive:16757594,emissiveIntensity:0,roughness:.18}),g=new Kt({color:9273712,roughness:.86});n.push(p);const v=Ge(13.5,5.4,9,d);v.position.y=2.7,l.add(v,fr(13.5+.85,10,5.48,7.15,f));const m=5.4,h=1.65,w=Ge(m,.16,h,g);w.position.set(0,.1,9/2+h/2),l.add(w);for(const S of[-m/2,-.95,.95,m/2]){const x=Ge(.16,5,.16,u);x.position.set(S,2.55,9/2+h-.18),l.add(x)}const T=Ge(m,.18,h,u);T.position.set(0,2.85,9/2+h/2),l.add(T);for(let S=-m/2;S<=m/2+.01;S+=.32){const x=Ge(.055,.82,.055,u);x.position.set(S,3.32,9/2+h-.08),l.add(x)}const E=Ge(m+.1,.11,.12,u);E.position.set(0,3.76,9/2+h-.08),l.add(E);const D=fr(m+.6,h+.75,5.5,6.8,f);D.position.z=9/2+h/2,l.add(D);const C=Ge(1.15,2.2,.09,u);C.position.set(0,1.18,9/2+.07);const b=Ge(.88,1.92,.12,new Kt({color:15065042,roughness:.62}));b.position.set(0,1.06,9/2+.14);const I=new At(new sa(.2,20),p);I.position.set(0,1.52,9/2+.205),l.add(C,b,I);for(const[S,x]of[[-4.2,1.65],[4.2,1.65],[-1.45,4.35],[1.45,4.35]])Xo(l,S,x,9/2+.05,x>3?1.05:1.45,x>3?1:1.25,1,u,p,e);l.position.set(8,c,31),i.add(l),t.push({min:new Vt(8-13.5/2-.25,31-9/2-.25),max:new Vt(8+13.5/2+.25,31+9/2+h+.25),y0:c,y1:c+7.2}),En(i,t,e,n,19.2,31.2,7,8.2,15262421,2697513,0,2.65)}function Vm(i,t,e,n){En(i,t,e,n,-2,-31,16.5,9.2,12135716,4602418,0,2.8),En(i,t,e,n,10.2,-31,8.4,8.8,7830133,4145213,0,2.55);const s=new Kt({color:10194296,roughness:.94}),r=Ge(7.2,.12,3.4,s);r.position.set(-2.5,Ae(-2.5,-24.2)+.06,-24.2),i.add(r)}function Hi(i,t,e,n,s,r,o,a=0){const c=Ae(e,n),l=new Ce,d=new Kt({color:o,roughness:.82}),u=new Kt({color:3617841,roughness:.9}),f=Ge(s,2.05,r,d);f.position.y=1.025,l.add(f,fr(s+.35,r+.42,2.08,2.72,u)),l.position.set(e,c,n),l.rotation.y=a,i.add(l);const p=Math.abs(Math.cos(a))*s+Math.abs(Math.sin(a))*r,g=Math.abs(Math.sin(a))*s+Math.abs(Math.cos(a))*r;t.push({min:new Vt(e-p/2,n-g/2),max:new Vt(e+p/2,n+g/2),y0:c,y1:c+2.8})}function vc(i,t,e,n,s=0){const r=new Ce,o=new Kt({color:t==="Sigge"?7557174:4797478,roughness:.72}),a=new Kt({color:13357773,roughness:.32,metalness:.35}),c=new Kt({color:9595207,roughness:.8}),l=new On({color:1248521}),d=2.8,u=2.6,f=1.65,p=.075,g=.014,v=(S,x,A,O,z,Z,j=o)=>{const Y=Ge(S,x,A,j);Y.position.set(O,z,Z),r.add(Y)};for(const S of[-d/2,d/2])for(const x of[-u/2,u/2])v(p,f,p,S,f/2,x);for(const S of[p/2,f-p/2]){for(const x of[-u/2,u/2])v(d+p,p,p,0,S,x);for(const x of[-d/2,d/2])v(p,p,u+p,x,S,0)}for(let S=1;S<7;S++){const x=-d/2+d*S/7;v(g,f-p*2,g,x,f/2,u/2+g,a),v(g,f-p*2,g,x,f/2,-u/2-g,a)}for(let S=1;S<6;S++){const x=-u/2+u*S/6;v(g,f-p*2,g,d/2+g,f/2,x,a),v(g,f-p*2,g,-d/2-g,f/2,x,a)}for(let S=1;S<5;S++){const x=p+(f-p*2)*S/5;v(d-p,g,g,0,x,u/2+g,a),v(d-p,g,g,0,x,-u/2-g,a),v(g,g,u-p,d/2+g,x,0,a),v(g,g,u-p,-d/2-g,x,0,a)}const m={w:d,d:u,doorX:-.62,doorW:.72};v(.62,.43,.04,m.doorX,.31,u/2+.035,l),v(.8,.055,.06,m.doorX,.55,u/2+.06),v(.055,.48,.06,m.doorX-m.doorW/2,.31,u/2+.06),v(.055,.48,.06,m.doorX+m.doorW/2,.31,u/2+.06),v(.82,.52,.68,-.78,.26,-.72,c),v(.42,.3,.045,-.78,.23,-.36,l),v(.96,.08,.7,.5,.67,-.65,c);const h={x:.28,zBottom:.83,zTop:-.32,w:.54,yBottom:.08,yTop:.67},w=h.zBottom-h.zTop,T=h.yTop-h.yBottom,E=new Ce;E.position.set(h.x,(h.yBottom+h.yTop)/2,(h.zBottom+h.zTop)/2),E.rotation.x=Math.atan2(T,w),E.add(Ge(h.w,.045,Math.hypot(w,T),c)),r.add(E);const D=Ae(e,n);r.position.set(e,D,n),r.rotation.y=s,i.add(r);const C=new U(e,D+.5,n),b={min:new Vt(e-d/2,n-u/2),max:new Vt(e+d/2,n+u/2),y0:D,y1:D+f},I=new U(e+m.doorX,Ae(e+m.doorX,n+u/2+1.15),n+u/2+1.15);return{name:t,center:C,aabb:b,ramp:h,spec:m,spawn:I}}function km(i){const t=new Kt({color:6636847,roughness:.96}),e=new Kt({color:1527082,roughness:.92}),n=new Kt({color:2581050,roughness:.92}),s=new An(.16,.24,2.3,7),r=new yn(1.12,3.9,9),o=new yn(.78,2.9,9),a=[];let c=8731;const l=()=>(c=c*1664525+1013904223>>>0,c/4294967296),d=(v,m)=>m>13&&m<49&&v>-6&&v<28||m>-44&&m<-17&&v>-21&&v<17||Math.abs(m+4)<5||Math.abs(m+49)<6;for(let v=0;v<170;v++){let m=Gt.lerp(-47,47,l()),h=Gt.lerp(-68,68,l());const w=m>28,T=h>1&&h<18,E=Math.abs(m)>42||Math.abs(h)>63;if(!w&&!T&&!E||d(m,h))continue;T&&m>18&&(m+=6);const D=.82+l()*.75;a.push([m,h,D])}const u=new cr(s,t,a.length),f=new cr(r,e,a.length),p=new cr(o,n,a.length),g=new ze;a.forEach(([v,m,h],w)=>{const T=Ae(v,m);g.position.set(v,T+1.15*h,m),g.scale.setScalar(h),g.rotation.y=w*2.399%(Math.PI*2),g.updateMatrix(),u.setMatrixAt(w,g.matrix),g.position.y=T+3.25*h,g.updateMatrix(),f.setMatrixAt(w,g.matrix),g.position.y=T+4.7*h,g.scale.setScalar(h*.82),g.updateMatrix(),p.setMatrixAt(w,g.matrix)}),u.castShadow=!0,f.castShadow=!0,i.add(u,f,p)}function Wm(i){const t=[],e=[],n=[];Hm(i);const s=new Kt({color:5592916,roughness:.98}),r=new Kt({color:6711654,roughness:.98}),o=new Kt({color:10195583,roughness:1});Jn(i,[[-52,-50],[-25,-49],[3,-50],[26,-48],[52,-44]],7.2,s),Jn(i,[[-52,-8],[-28,-7],[-4,-5],[22,-3],[52,1]],3,r),Jn(i,[[-52,49],[-32,48],[-10,49],[8,52],[18,48],[19,39]],6.2,s),Jn(i,[[18,72],[18,57],[18,45]],6.2,s),Jn(i,[[-14,-46],[-13,-38],[-10,-28]],3.2,o),Jn(i,[[17,-46],[15,-38],[12,-30]],3.2,o),Jn(i,[[17,44],[17,36],[18,30]],3.4,o),Jn(i,[[-12,47],[-8,37],[-5,29]],3.2,o),Vm(i,t,e,n),Gm(i,t,e,n),En(i,t,e,n,-32,-59,12,8,12884592,8212024,.04),En(i,t,e,n,27,-37,12.5,8.5,6252653,2698544,.08),En(i,t,e,n,-31,25,13,9,12370105,3422523,.03),En(i,t,e,n,36,24,11.5,8.2,10988198,3159095,Math.PI/2),En(i,t,e,n,-30,61,13,8.5,14008995,4930354,.05),En(i,t,e,n,1,64,12,8.5,12040368,3356730,-.04),En(i,t,e,n,32,59,11,8,10462885,3158837,Math.PI/2),Hi(i,t,-18.5,-28,5.4,4.2,14143937),Hi(i,t,-20,-19,3.8,3.2,10105641),Hi(i,t,-16,28,4.2,3.6,7830907),Hi(i,t,29,31,5.2,4.2,9409164),Hi(i,t,-39,38,5.3,4.4,11053216),Hi(i,t,38,-32,4.2,3.6,6185569),Nn(i,-22,-18,15,-16,1.45,.95),Nn(i,-22,-46,-22,-18,1.35),Nn(i,16,-44,16,-16,1.4),Nn(i,-22,-46,16,-44,1.25),Nn(i,-15,17,-15,42,1.15),Nn(i,-15,17,24,16,1.15),Nn(i,24,16,24,42,1.15),Nn(i,-15,42,24,42,1.05),Nn(i,-46,12,-18,13,1.35);const a=vc(i,"Sigge",-5,-14.2),c=vc(i,"Kurre",-7.5,27);return km(i),i.traverse(l=>{l instanceof At&&!(l instanceof cr)&&(l.castShadow=l.castShadow||l.position.y>.3,l.receiveShadow=!0)}),{colliders:t,hutches:[a,c],spawns:{sigge:a.spawn.clone(),kurre:c.spawn.clone()},carrotPatches:[new Vt(-10,-22),new Vt(2,22)],windowLights:e,windowMaterials:n}}const nn=Ss,Xm=.72,xc=0,ye=.29,Ym=18,qm=7.2,Km=5.7,to=4.9,Zm=8,$m=18,Jm=2.7,Mc=1.35,eo=5.35,jm=13,Qm=28,tg=2.2,Sc=1.2,eg=.85,ng=18,ig=28,sg=.74,rg=.68,ls=100,og=18,ag=1.4,cg=24,lg=17,ug=1.15,hg=.9,Ec=.42,yc=.32,Tc=.68,wc=.58,bc=45,pi=60,rl=30,no=pi+rl,us=8,dg=.85,fg=6,pg=9,mg=17,io=4,gg=16,_g=12;function er(i,t,e){return t>=i.min.x&&t<=i.max.x&&e>=i.min.y&&e<=i.max.y}function vg(i,t,e,n,s,r,o){const a=Gt.clamp(s,i,e),c=Gt.clamp(r,t,n),l=s-a,d=r-c,u=Math.hypot(l,d);if(u<o){if(u<1e-5){const g=s-i,v=e-s,m=r-t,h=n-r,w=Math.min(g,v,m,h);return w===g?{x:i-o,z:r}:w===v?{x:e+o,z:r}:w===m?{x:s,z:t-o}:{x:s,z:n+o}}const f=l/u,p=d/u;return{x:a+f*o,z:c+p*o}}return{x:s,z:r}}function ds(i,t){const e=Gt.clamp(t,0,1);i.edible.visible=e>=.98,i.greens.visible=e>.03,i.greens.scale.setScalar(.28+e*.72),i.greens.position.y=-.24*(1-e),i.edible.scale.setScalar(.86+e*.14)}function xg(i){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n.fillStyle=i==="sigge"?"#ead29a":"#4a2d1d",n.fillRect(0,0,128,128);for(let r=0;r<620;r++){const o=Math.random()*128,a=Math.random()*128,c=2+Math.random()*7,l=Math.random();n.strokeStyle=i==="sigge"?l>.55?"rgba(255, 240, 201, 0.38)":"rgba(128, 89, 45, 0.14)":l>.55?"rgba(164, 112, 75, 0.34)":"rgba(25, 12, 8, 0.25)",n.lineWidth=.55+Math.random()*.8,n.beginPath(),n.moveTo(o,a),n.lineTo(o+(Math.random()-.5)*3,a+c),n.stroke()}const s=new Yu(e);return s.colorSpace=sn,s.wrapS=ms,s.wrapT=ms,s.repeat.set(2.4,2.4),s}function so(i){const t=xg(i);return new Kt({color:i==="sigge"?15782027:5977378,map:t,emissive:i==="sigge"?4007176:1444357,emissiveIntensity:.12,roughness:.95,metalness:0,fog:!1})}function Mg(i){const t=new At(new ge(.17,18,14),i);return t.scale.set(1.05,.8,.88),t.position.set(0,.29,-.5),t}function Sg(){const i=new Gu;i.background=new Zt(7256276),i.fog=new mr(9357536,28,125);const t=new Ju(14217471,3824176,.85);i.add(t);const e=new Ya(16775916,1);e.position.set(20,32,12),i.add(e);const n=new Ya(12110079,0);n.position.set(-18,26,-12),i.add(n);const s=new At(new ge(.72,24,16),new On({color:16773542,fog:!1})),r=new At(new ge(.52,24,16),new On({color:14212607,fog:!1}));i.add(s,r);const o=Wm(i),a=o.carrotPatches[0],c=o.carrotPatches[1],l=new Kt({color:5912609,roughness:.96}),d=new Kt({color:4007961,roughness:.98}),u=(pt,It,ee,Ft)=>{const he=new At(new rn(It,.08,ee),l);he.position.set(pt.x,Ae(pt.x,pt.y)+.04,pt.y),i.add(he);for(const oe of Ft){const $e=new At(new rn(It-.55,.035,.15),d),Ve=pt.y+oe;$e.position.set(pt.x,Ae(pt.x,Ve)+.095,Ve),i.add($e)}};u(a,7.4,4.6,[-1.35,-.45,.45,1.35]),u(c,6.4,4.2,[-1.25,-.42,.42,1.25]);const f=[],p=new Kt({color:15300637,emissive:2034176,roughness:.72}),g=new Kt({color:15895076,roughness:.68}),v=new Kt({color:2649890,roughness:.75}),m=pt=>{const It=new Ce,ee=new Ce,Ft=new Ce,he=new At(new An(.08,.18,.24,12),g);he.position.y=.18,ee.add(he);const oe=new At(new yn(.105,.34,12),p);oe.rotation.x=Math.PI,oe.position.y=.13,ee.add(oe);for(let Ve=0;Ve<7;Ve++){const ke=new At(new yn(.025,.44+Ve%3*.07,5),v),Qe=Ve/7*Math.PI*2+pt,tn=.35+Ve%2*.18;ke.position.set(Math.cos(Qe)*.045,.43,Math.sin(Qe)*.045),ke.rotation.set(Math.sin(Qe)*tn,Qe,-Math.cos(Qe)*tn),Ft.add(ke)}It.add(ee,Ft);const $e={root:It,edible:ee,greens:Ft,picked:!1,regrowLeft:0,regrowTotal:0};return ds($e,1),$e},h=(pt,It,ee,Ft)=>{for(let he=0;he<It.length;he++)for(let oe=0;oe<ee.length;oe++){if(Ft(he,oe))continue;const $e=m(he*.45+oe*.18),Ve=(he+oe)%2===0?-.08:.08,ke=oe%2===0?.04:-.04,Qe=pt.x+ee[oe]+Ve,tn=pt.y+It[he]+ke;$e.root.position.set(Qe,Ae(Qe,tn)+.08,tn),$e.root.rotation.y=((he+oe)%3-1)*.08,i.add($e.root),f.push($e)}};h(a,[-1.35,-.45,.45,1.35],[-2.7,-1.35,0,1.35,2.7],(pt,It)=>pt===0&&It===4||pt===3&&It===0),h(c,[-1.25,-.42,.42,1.25],[-2.25,-1.1,0,1.1,2.25],(pt,It)=>pt===1&&It===0||pt===2&&It===4);const w=new Ce,T=new Ce,E=so("sigge"),D=so("kurre"),C=new Kt({color:13211765,roughness:.9,fog:!1}),b=new On({color:1774348,fog:!1}),I=new Kt({color:9067589,roughness:.8,fog:!1}),S=new At(new ge(.43,28,20),E);S.scale.set(1.05,.78,1.28),S.position.y=.32;const x=new At(new ge(.24,18,14),E);x.scale.set(1.15,.9,.75),x.position.set(0,.39,.28);const A=new At(new ge(.28,22,16),E);A.scale.set(1.08,.9,1.02),A.position.set(0,.56,.38);const O=new At(new ge(.13,16,12),E);O.scale.set(.62,2.15,.38),O.rotation.set(.16,.06,-.28),O.position.set(-.31,.42,.2);const z=O.clone();z.rotation.set(.16,-.06,.28),z.position.x=.31;const Z=new At(new ge(.082,12,8),C);Z.scale.set(.48,1.65,.13),Z.rotation.copy(O.rotation),Z.position.set(-.315,.4,.245);const j=Z.clone();j.rotation.copy(z.rotation),j.position.x=.235;const Y=new At(new ge(.025,10,8),b);Y.position.set(-.105,.6,.62);const nt=Y.clone();nt.position.x=.105;const k=new At(new ge(.035,10,8),I);k.scale.set(1.1,.75,.75),k.position.set(0,.535,.655);const gt=Mg(E),St=new Ce,Pt=new Kt({color:11056838,metalness:.45,roughness:.34,fog:!1}),Bt=new At(new rn(.56,.055,.66),Pt);Bt.position.set(0,.61,-.03),Bt.rotation.x=-.08;const le=new At(new rn(.42,.05,.24),Pt);le.position.set(0,.49,.34),le.rotation.x=.18;const J=new At(new rn(.36,.04,.23),Pt);J.position.set(0,.73,.43),St.add(Bt,le,J),St.visible=!1,T.add(S,x,A,O,z,Z,j,Y,nt,k,gt,St),T.scale.setScalar(Xm),w.add(T),w.position.copy(o.spawns.sigge),i.add(w);const rt=pt=>{const It=pt==="sigge"?so("sigge"):D;E.color.copy(It.color),E.emissive.copy(It.emissive),E.map=It.map,E.needsUpdate=!0,C.color.set(pt==="sigge"?13211765:8343872),I.color.set(pt==="sigge"?9067589:3809304)},at=new Ce,et=new Kt({color:13916698,roughness:.5}),wt=new Kt({color:2756357,roughness:.5}),$t=new Kt({color:15983293,roughness:.7}),Rt=new On({color:1181702,fog:!1}),_e=new On({color:16774104,fog:!1}),re=new At(new ge(.34,18,12),et);re.scale.set(.85,.55,1.45),re.position.y=.34;const zt=new At(new ge(.18,14,10),$t);zt.scale.set(.95,.7,.55),zt.position.set(0,.35,.36);const R=new At(new ge(.22,16,12),et);R.scale.set(.95,.8,1),R.position.set(0,.56,.58);const we=new At(new yn(.11,.28,12),$t);we.rotation.x=Math.PI/2,we.position.set(0,.52,.77);const Wt=new At(new ge(.045,10,8),Rt);Wt.scale.set(1.15,.8,.8),Wt.position.set(0,.52,.9);const qt=new At(new rn(.14,.014,.08),Rt);qt.position.set(0,.492,.82);const dt=new Ce;dt.position.set(0,.49,.77);const ie=new At(new ge(.075,12,8),$t);ie.scale.set(1.12,.36,.95),ie.position.set(0,-.03,.08),dt.add(ie);for(const pt of[-.05,.05]){const It=new At(new yn(.013,.04,5),_e);It.position.set(pt,-.005,.12),dt.add(It)}const _t=new At(new ge(.026,8,6),Rt);_t.position.set(-.075,.61,.76);const y=_t.clone();y.position.x=.075;const _=new At(new yn(.08,.22,4),et);_.rotation.set(.22,.18,-.15),_.position.set(-.13,.76,.52);const B=_.clone();B.rotation.set(.22,-.18,.15),B.position.x=.13;const q=new Ce;q.position.set(0,.42,-.46),q.rotation.x=-.46;for(const[pt,It,ee,Ft,he]of[[-.08,0,.15,.12,.22],[-.25,.05,.19,.15,.28],[-.44,.09,.22,.17,.3],[-.62,.13,.18,.15,.24]]){const oe=new At(new ge(1,14,10),et);oe.scale.set(ee,Ft,he),oe.position.set(0,It,pt),q.add(oe)}const tt=new At(new ge(1,14,10),$t);tt.scale.set(.16,.13,.2),tt.position.set(0,.17,-.78),q.add(tt);const K=[];for(const pt of[-.18,.18])for(const It of[-.25,.28]){const ee=new At(new An(.045,.055,.28,8),wt);ee.position.set(pt,.15,It),K.push(ee)}at.userData.parts={body:re,chest:zt,head:R,snout:we,nose:Wt,mouthLine:qt,lowerJaw:dt,tail:q,legs:K,baseY:0,bodyY:re.position.y,chestY:zt.position.y,headY:R.position.y,headZ:R.position.z,snoutY:we.position.y,snoutZ:we.position.z,noseY:Wt.position.y,noseZ:Wt.position.z,mouthLineY:qt.position.y,mouthLineZ:qt.position.z,lowerJawY:dt.position.y,lowerJawZ:dt.position.z,lowerJawRotX:dt.rotation.x,tailRotX:q.rotation.x,tailRotZ:q.rotation.z},at.add(re,zt,R,we,Wt,qt,dt,_t,y,_,B,q,...K),at.visible=!1,i.add(at);const vt=new Ce,ct=new Kt({color:8423309,roughness:.62}),Et=new Kt({color:3488317,roughness:.66}),Xt=new Kt({color:13093320,roughness:.7}),it=new At(new ge(.31,18,12),ct);it.scale.set(.78,.5,1.34),it.position.y=.31;const ft=new At(new ge(.15,12,10),Xt);ft.scale.set(.8,.55,.45),ft.position.set(0,.32,.34);const yt=new At(new ge(.22,16,12),ct);yt.scale.set(.96,.78,.92),yt.position.set(0,.52,.55);const Dt=new At(new ge(.09,12,8),Xt);Dt.scale.set(1.12,.58,.84),Dt.position.set(0,.48,.72);const xt=new At(new ge(.03,8,6),Rt);xt.scale.set(1.15,.75,.75),xt.position.set(0,.49,.82);const Ot=new At(new rn(.1,.011,.055),Rt);Ot.position.set(0,.452,.76);const Lt=new Ce;Lt.position.set(0,.45,.7);const te=new At(new ge(.054,10,8),Xt);te.scale.set(1.08,.34,.88),te.position.set(0,-.02,.08),Lt.add(te);const L=new At(new ge(.023,8,6),new On({color:11075456,fog:!1}));L.position.set(-.075,.56,.7);const lt=L.clone();lt.position.x=.075;const V=new At(new yn(.08,.22,4),ct);V.rotation.set(.1,.22,-.1),V.position.set(-.13,.69,.47);const Q=V.clone();Q.rotation.set(.1,-.22,.1),Q.position.x=.13;const ot=new Ce;ot.position.set(0,.38,-.44),ot.rotation.x=-.2;for(const[pt,It,ee,Ft,he]of[[-.1,.02,.075,.07,.18],[-.28,.08,.07,.065,.2],[-.45,.17,.064,.06,.18],[-.56,.29,.058,.055,.14]]){const oe=new At(new ge(1,12,8),ct);oe.scale.set(ee,Ft,he),oe.position.set(0,It,pt),ot.add(oe)}const ut=[];for(const pt of[-.15,.15])for(const It of[-.23,.26]){const ee=new At(new An(.035,.043,.25,8),Et);ee.position.set(pt,.13,It),ut.push(ee)}return vt.userData.parts={body:it,chest:ft,head:yt,snout:Dt,nose:xt,mouthLine:Ot,lowerJaw:Lt,tail:ot,legs:ut,baseY:0,bodyY:it.position.y,chestY:ft.position.y,headY:yt.position.y,headZ:yt.position.z,snoutY:Dt.position.y,snoutZ:Dt.position.z,noseY:xt.position.y,noseZ:xt.position.z,mouthLineY:Ot.position.y,mouthLineZ:Ot.position.z,lowerJawY:Lt.position.y,lowerJawZ:Lt.position.z,lowerJawRotX:Lt.rotation.x,tailRotX:ot.rotation.x,tailRotZ:ot.rotation.z},vt.add(it,ft,yt,Dt,xt,Ot,Lt,L,lt,V,Q,ot,...ut),vt.visible=!1,i.add(vt),{scene:i,siggeG:w,siggeVisual:T,siggeArmor:St,setPlayerCharacter:rt,foxG:at,catG:vt,carrots:f,hemi:t,sun:e,moonLight:n,sunOrb:s,moonOrb:r,windowLights:o.windowLights,windowMaterials:o.windowMaterials,colliders:o.colliders,hutches:o.hutches,spawns:o.spawns}}function Eg(){const i=document.getElementById("app"),t=document.getElementById("energy-bar"),e=document.getElementById("night-count"),n=document.getElementById("cycle-state"),s=document.getElementById("item-status"),r=document.getElementById("hud-pickup"),o=document.getElementById("hud-fox"),a=document.getElementById("hud-safe"),c=document.getElementById("hud-gameover"),l=document.getElementById("gameover-dialog"),d=document.getElementById("gameover-detail"),u=document.getElementById("restart-game"),f=document.getElementById("move-zone"),p=document.getElementById("move-stick"),g=document.getElementById("move-knob"),v=document.getElementById("camera-zone"),m=document.getElementById("jump-zone"),h=document.getElementById("start-screen"),w=document.getElementById("rotate-screen"),T=Array.from(document.querySelectorAll("[data-character]")),E=document.getElementById("player-name"),D=document.getElementById("hud-rev");D&&(D.textContent=`Kod: ${zm}`);const{scene:C,siggeG:b,siggeVisual:I,siggeArmor:S,setPlayerCharacter:x,foxG:A,catG:O,carrots:z,hemi:Z,sun:j,moonLight:Y,sunOrb:nt,moonOrb:k,windowLights:gt,windowMaterials:St,colliders:Pt,hutches:Bt,spawns:le}=Sg(),J=new un(60,1,.1,200),rt=new Bm({antialias:!0});rt.setPixelRatio(Math.min(window.devicePixelRatio,2)),rt.outputColorSpace=sn,rt.shadowMap.enabled=!0,i.appendChild(rt.domElement);const at={},et={active:!1,pointerId:-1,startX:0,startY:0,baseX:0,baseY:0,radius:64,x:0,y:0},wt={active:!1,pointerId:-1,lastX:0,lastY:0};let $t=!1;const Rt=new U(0,0,0),_e=new U(0,0,12),re=new U(0,0,-12);let zt=0,R=0,we=.18,Wt=0;const qt=2.2;let dt=bc,ie=!0,_t=!1,y="hidden",_=5,B=0,q=0,tt=0,K=0,vt="hidden",ct=12,Et=0,Xt=0,it=0,ft=0,yt=us*.45,Dt=0,xt=!1,Ot=0,Lt=0,te=0,L=7,lt=0,V=!tn(),Q=!1,ot="sigge";const ut=new U,pt=new U,It=new U,ee=new U,Ft=[],he=new Zt(7256276),oe=new Zt(16097388),$e=new Zt(461596),Ve=new Zt(9357536),ke=new Zt(15769976),Qe=new Zt(593178);function tn(){return navigator.maxTouchPoints>0||window.matchMedia("(hover: none), (pointer: coarse)").matches}function Qi(){return window.innerHeight>window.innerWidth}function ii(){return!Q||tn()&&(!V||Qi())}function Ei(){const P=tn(),X=Qi(),W=(!P||!X)&&(!Q||P&&!V);h==null||h.classList.toggle("mobile-overlay--hidden",!W),w==null||w.classList.toggle("mobile-overlay--hidden",!P||!X),P||(V=!0),ii()&&We()}function yi(P,X,W){return Bt.some(ht=>er(ht.aabb,P,W)&&X+xc*.3>=ht.aabb.y0&&X<ht.aabb.y1+.2)}function bs(P,X){const W=Bt.find(se=>er(se.aabb,P,X));if(!W)return Ae(P,X);const ht=P-W.center.x,$=X-W.center.z;let Ct=W.aabb.y0;if(ht>=.43-.43-ye*.35&&ht<=.43+.43+ye*.35&&$>=-.48-.31-ye*.35&&$<=-.48+.31+ye*.35&&(Ct=Math.max(Ct,W.aabb.y0+W.ramp.yTop)),ht>=W.ramp.x-W.ramp.w/2-ye*.25&&ht<=W.ramp.x+W.ramp.w/2+ye*.25&&$>=W.ramp.zTop&&$<=W.ramp.zBottom){const se=Gt.clamp((W.ramp.zBottom-$)/(W.ramp.zBottom-W.ramp.zTop),0,1);Ct=Math.max(Ct,W.aabb.y0+Gt.lerp(W.ramp.yBottom,W.ramp.yTop,se))}return Ct}function ts(P,X){return Math.abs(X-P.spec.doorX)<=P.spec.doorW/2}function vr(P,X,W,ht,$){const Ct=P.spec.w/2,Yt=P.spec.d/2,Ee=X-P.center.x,se=W-P.center.z,me=ht-P.center.x,Jt=$-P.center.z,be=Math.abs(Ee)<=Ct&&Math.abs(se)<=Yt,Ye=Math.abs(me)<=Ct&&Math.abs(Jt)<=Yt;if(ts(P,(Ee+me)/2)&&(se<=Yt&&Jt>=Yt-ye||se>=Yt&&Jt<=Yt+ye))return{x:ht,z:$};if(be)return{x:P.center.x+Gt.clamp(me,-Ct+ye,Ct-ye),z:P.center.z+Gt.clamp(Jt,-Yt+ye,Yt-ye)};if(Ye){const Ne=Math.abs(Ee+Ct),si=Math.abs(Ee-Ct),ri=Math.abs(se+Yt),Ti=Math.abs(se-Yt),Wn=Math.min(Ne,si,ri,Ti);return Wn===Ne?{x:P.center.x-Ct-ye,z:$}:Wn===si?{x:P.center.x+Ct+ye,z:$}:Wn===ri?{x:ht,z:P.center.z-Yt-ye}:{x:ht,z:P.center.z+Yt+ye}}if(Math.abs(me)<=Ct+ye&&Math.abs(Jt)<=Yt+ye){const Ne=Math.abs(me+Ct),si=Math.abs(me-Ct),ri=Math.abs(Jt+Yt),Ti=Math.abs(Jt-Yt),Wn=Math.min(Ne,si,ri,Ti);if(Wn===Ne)return{x:P.center.x-Ct-ye,z:$};if(Wn===si)return{x:P.center.x+Ct+ye,z:$};if(Wn===ri)return{x:ht,z:P.center.z-Yt-ye};if(!ts(P,me))return{x:ht,z:P.center.z+Yt+ye}}return{x:ht,z:$}}function xr(P,X,W,ht){let $={x:W,z:ht};for(const Ct of Bt)$=vr(Ct,P,X,$.x,$.z);return $}function Vn(){return yt>=pi}function es(P){const X=xt;_t||(yt=(yt+P)%no);const W=Vn();X&&!W&&!_t&&(Dt+=1),xt=W;let ht=he.clone(),$=Ve.clone(),Ct=1,Yt=0,Ee=.85,se=0,me="Dag";if(W){const Jt=Gt.clamp((yt-pi)/rl,0,1),be=Gt.clamp((yt-pi)/4,0,1);ht=oe.clone().lerp($e,be),$=ke.clone().lerp(Qe,be),Ct=0,Yt=.24+Math.sin(Jt*Math.PI)*.16,Ee=.08,se=.9+Math.sin(Jt*Math.PI)*.28,me="Natt";const Ye=Math.cos(Math.PI*(1-Jt))*25,De=7+Math.sin(Jt*Math.PI)*24;Y.position.set(Ye,De,-14),k.position.copy(Y.position),k.visible=!0,nt.visible=!1}else{const Jt=Gt.clamp(yt/pi,0,1),be=Math.sin(Jt*Math.PI),Ye=1-Gt.clamp(yt/us,0,1),De=Gt.clamp((yt-(pi-us))/us,0,1),Pe=Math.max(Ye,De);ht=he.clone().lerp(oe,Pe*.92),$=Ve.clone().lerp(ke,Pe*.85),Ct=Gt.lerp(.34,1.08,be)*(1-De*.35),Ee=Gt.lerp(.48,.9,be)*(1-De*.18),se=Math.max(De*.4,Ye*.18),me=Ye>.05?"Gryning":De>.05?"Skymning":"Dag";const mn=Math.cos(Math.PI*(1-Jt))*29,Ne=2.6+be*29;j.position.set(mn,Ne,13),nt.position.copy(j.position),nt.visible=!0,k.visible=!1}C.background.copy(ht),C.fog instanceof mr&&(C.fog.color.copy($),C.fog.near=W?16:28,C.fog.far=W?72:125),Z.intensity=Ee,j.intensity=Ct,j.color.set(me==="Skymning"||me==="Gryning"?16762250:16775916),Y.intensity=Yt;for(const Jt of St)Jt.emissiveIntensity=se*1.15;for(const[Jt,be]of gt.entries())be.intensity=se*(.58+Jt%3*.08);if(n){const Jt=W?no-yt:pi-yt;n.textContent=`${me} ${Math.max(0,Math.ceil(Jt))} s`}e&&(e.textContent=`${Dt}`)}function As(){for(let P=0;P<40;P++){const X=Gt.randFloat(-Ss+1.2,Ss-1.2),W=Gt.randFloat(-pn+1.2,pn-1.2),ht=Pt.some(Ct=>er(Ct,X,W)),$=Bt.some(Ct=>er({min:Ct.aabb.min.clone().addScalar(-1.3),max:Ct.aabb.max.clone().addScalar(1.3),y0:Ct.aabb.y0,y1:Ct.aabb.y1},X,W));if(!ht&&!$&&Math.hypot(X-b.position.x,W-b.position.z)>3)return new U(X,Ae(X,W)+.24,W)}return new U(0,Ae(0,15)+.24,15)}function Mr(P){return P==="light-armor"?"Lätt rustning":P==="heavy-armor"?"Stark rustning":P==="energy-potion"?"Energipotion":P==="speed-potion"?"Fartpotion":"Skyddspotion"}function M(P){const X=new Ce;X.userData.baseY=.24;const W=new jc(16777215,.28,3.6,2);if(W.position.y=.45,P==="light-armor"||P==="heavy-armor"){const ht=P==="heavy-armor",$=new Kt({color:ht?6648454:11056838,emissive:ht?1054506:791837,emissiveIntensity:.18,metalness:.55,roughness:.3}),Ct=new At(new An(.18,ht?.27:.23,.34,6),$);Ct.rotation.z=Math.PI/2,Ct.position.y=.34;const Yt=new At(new rn(.08,.4,.06),$);Yt.position.y=.34,W.color.set(ht?10270719:14216447),X.add(Ct,Yt,W)}else{const ht=P==="energy-potion"?16734564:P==="speed-potion"?5227519:11831295,$=new Kt({color:ht,emissive:ht,emissiveIntensity:.55,roughness:.25,metalness:.02}),Ct=new At(new An(.12,.14,.34,12),$);Ct.position.y=.3;const Yt=new At(new An(.055,.06,.1,8),new Kt({color:6044447,roughness:.7}));Yt.position.y=.52;const Ee=new At(new ge(.12,12,8),$);Ee.position.y=.16,W.color.set(ht),X.add(Ct,Yt,Ee,W)}return X}function N(){if(Ft.length>=fg)return;const P=["light-armor","heavy-armor","energy-potion","speed-potion","shield-potion"],X=Vn()?[3,2,2,2,3]:[2,1,3,2,1],W=X.reduce((Yt,Ee)=>Yt+Ee,0);let ht=Math.random()*W,$=P[0];for(let Yt=0;Yt<P.length;Yt++)if(ht-=X[Yt],ht<=0){$=P[Yt];break}const Ct=M($);Ct.position.copy(As()),C.add(Ct),Ft.push({group:Ct,kind:$,ttl:42})}function H(P){P==="light-armor"?Ot=Math.min(io,Ot+1):P==="heavy-armor"?Ot=Math.min(io,Ot+2):P==="energy-potion"?dt=Math.min(ls,dt+32):P==="speed-potion"?te=Math.max(te,gg):Lt=Math.max(Lt,_g),r&&(r.textContent=`${Mr(P)} plockad`,r.classList.remove("hud-pickup--hidden"),lt=2.4)}function G(P,X){if(!_t){L-=P,L<=0&&(N(),L=Gt.randFloat(pg,mg));for(let W=Ft.length-1;W>=0;W--){const ht=Ft[W];ht.ttl-=P,ht.group.rotation.y+=P*1.9,ht.group.position.y=ht.group.userData.baseY+Math.sin(X*2.8+W)*.08,ht.group.position.distanceTo(b.position)<dg?(H(ht.kind),C.remove(ht.group),Ft.splice(W,1)):ht.ttl<=0&&(C.remove(ht.group),Ft.splice(W,1))}lt>0&&(lt=Math.max(0,lt-P),lt<=0&&(r==null||r.classList.add("hud-pickup--hidden")))}}function F(){if(y!=="hidden")return;const P=Math.random()*Math.PI*2,X=nn-1.2;_e.set(Math.cos(P)*X,.25,Math.sin(P)*X),_e.y=Ae(_e.x,_e.z)+.25,A.position.copy(_e),A.visible=!0,y="chase"}function st(){y="hidden",A.visible=!1,_=Gt.randFloat(Zm,$m)}function mt(P,X,W){const ht=P.clone().sub(A.position);ht.y=0;const $=ht.length();if($<.01)return $;const Ct=Math.min($,X*W);return ht.normalize(),A.position.addScaledVector(ht,Ct),A.position.y=Ae(A.position.x,A.position.z)+.25,A.rotation.y=Math.atan2(ht.x,ht.z),$-Ct}function Tt(P,X,W,ht){const $=A.userData.parts;if(!$)return;P?q+=W*10:q=Gt.lerp(q,0,Math.min(1,W*6));const Ct=Math.sin(q),Yt=Math.sin(q+Math.PI),Ee=P?Math.abs(Ct)*.035:X?Math.sin(ht*8)*.012:0,se=X?Math.sin(ht*12)*.035:P?Math.sin(q+.5)*.015:0;A.position.y=Ae(A.position.x,A.position.z)+.25+Ee,$.body.position.y=$.bodyY+Ee*.35,$.chest.position.y=$.chestY+Ee*.45;const me=K>0?Math.sin((1-K/Ec)*Math.PI):0,Jt=me*.16,be=me*.035;$.head.position.y=$.headY+se-be,$.head.position.z=$.headZ+Jt*.32,$.snout.position.y=$.snoutY+se-be,$.snout.position.z=$.snoutZ+Jt,$.nose.position.y=$.noseY+se-be,$.nose.position.z=$.noseZ+Jt,$.mouthLine.position.y=$.mouthLineY+se-be,$.mouthLine.position.z=$.mouthLineZ+Jt,$.lowerJaw.position.y=$.lowerJawY+se-be,$.lowerJaw.position.z=$.lowerJawZ+Jt,$.lowerJaw.rotation.x=$.lowerJawRotX+me*.52;const Ye=Math.sin(q+1.4);$.tail.rotation.x=$.tailRotX+(P?.04:.015)*Ye,$.tail.rotation.z=$.tailRotZ+(P?.13:.04)*Ye;for(let De=0;De<$.legs.length;De++){const Pe=$.legs[De],mn=De%2===0?Ct:Yt;Pe.rotation.x=P?mn*.45:Gt.lerp(Pe.rotation.x,0,Math.min(1,W*8))}}function bt(){const P=Bt.reduce((W,ht)=>ht.center.distanceToSquared(A.position)<W.center.distanceToSquared(A.position)?ht:W),X=A.position.clone().sub(P.center);X.y=0,X.lengthSq()<.01&&X.set(0,0,-1),X.normalize(),ut.set(P.center.x+X.x*Mc,.25,P.center.z+X.z*Mc),pt.set(P.center.x+X.x*(nn+8),.25,P.center.z+X.z*(nn+8)),B=Jm,y="sniff"}function kt(){if(vt!=="hidden")return;const P=Math.random()*Math.PI*2,X=nn-1;re.set(Math.cos(P)*X,.22,Math.sin(P)*X),re.y=Ae(re.x,re.z)+.22,O.position.copy(re),O.visible=!0,vt="chase"}function Ht(){vt="hidden",O.visible=!1,ct=Gt.randFloat(jm,Qm)}function Ut(P,X,W){const ht=P.clone().sub(O.position);ht.y=0;const $=ht.length();if($<.01)return $;const Ct=Math.min($,X*W);return ht.normalize(),O.position.addScaledVector(ht,Ct),O.position.y=Ae(O.position.x,O.position.z)+.22,O.rotation.y=Math.atan2(ht.x,ht.z),$-Ct}function ae(P,X,W,ht){const $=O.userData.parts;if(!$)return;P?Xt+=W*13:Xt=Gt.lerp(Xt,0,Math.min(1,W*7));const Ct=Math.sin(Xt),Yt=Math.sin(Xt+Math.PI),Ee=P?Math.abs(Ct)*.026:X?Math.sin(ht*9)*.01:0,se=X?Math.sin(ht*14)*.028:P?Math.sin(Xt+.4)*.012:0;O.position.y=Ae(O.position.x,O.position.z)+.22+Ee,$.body.position.y=$.bodyY+Ee*.35,$.chest.position.y=$.chestY+Ee*.4;const me=ft>0?Math.sin((1-ft/yc)*Math.PI):0,Jt=me*.12,be=me*.025;$.head.position.y=$.headY+se-be,$.head.position.z=$.headZ+Jt*.28,$.snout.position.y=$.snoutY+se-be,$.snout.position.z=$.snoutZ+Jt,$.nose.position.y=$.noseY+se-be,$.nose.position.z=$.noseZ+Jt,$.mouthLine.position.y=$.mouthLineY+se-be,$.mouthLine.position.z=$.mouthLineZ+Jt,$.lowerJaw.position.y=$.lowerJawY+se-be,$.lowerJaw.position.z=$.lowerJawZ+Jt,$.lowerJaw.rotation.x=$.lowerJawRotX+me*.44;const Ye=Math.sin(Xt+1.1);$.tail.rotation.x=$.tailRotX+(P?.08:.03)*Ye,$.tail.rotation.z=$.tailRotZ+(P?.2:.08)*Ye;for(let De=0;De<$.legs.length;De++){const Pe=$.legs[De],mn=De%2===0?Ct:Yt;Pe.rotation.x=P?mn*.55:Gt.lerp(Pe.rotation.x,0,Math.min(1,W*8))}}function de(){const P=Bt.reduce((W,ht)=>ht.center.distanceToSquared(O.position)<W.center.distanceToSquared(O.position)?ht:W),X=O.position.clone().sub(P.center);X.y=0,X.lengthSq()<.01&&X.set(0,0,-1),X.normalize(),It.set(P.center.x+X.x*Sc,.22,P.center.z+X.z*Sc),ee.set(P.center.x+X.x*(nn+8),.22,P.center.z+X.z*(nn+8)),Et=tg,vt="sniff"}function Re(P){if(!_t)for(const X of z)if(X.picked){X.regrowLeft=Math.max(0,X.regrowLeft-P);const W=X.regrowTotal>0?1-X.regrowLeft/X.regrowTotal:1;ds(X,W),X.regrowLeft<=0&&(X.picked=!1,ds(X,1))}else X.root.position.distanceTo(b.position)<eg&&(X.picked=!0,X.regrowTotal=Gt.randFloat(ng,ig),X.regrowLeft=X.regrowTotal,ds(X,.06),dt=Math.min(ls,dt+og))}function Se(P){if(!(_t||P<=0)&&(dt=Math.max(0,dt-P),dt<=0)){if(_t=!0,dt=0,d){const X=ot==="sigge"?"Sigge":"Kurre";d.textContent=`${X} överlevde ${Dt} ${Dt===1?"natt":"nätter"}.`}l==null||l.classList.remove("gameover-dialog--hidden"),Rt.set(0,0,0),We();for(const X of Object.keys(at))at[X]=!1}}function ce(P){if(Lt>0){Se(P*.22);return}if(Ot>0){Ot-=1,Se(P*.28);return}Se(P)}function Nt(P){if(_t||(Lt=Math.max(0,Lt-P),te=Math.max(0,te-P)),S.visible=Ot>0||Lt>0,S.rotation.y=Lt>0?Math.sin(performance.now()*.006)*.12:0,s){const X=Lt>0?` · Skydd ${Math.ceil(Lt)} s`:"",W=te>0?` · Fart ${Math.ceil(te)} s`:"";s.textContent=`Rustning ${Ot}/${io}${X}${W}`}}function Le(){const P=window.innerWidth,X=window.innerHeight;J.aspect=P/X,J.updateProjectionMatrix(),rt.setSize(P,X),Ei()}window.addEventListener("resize",Le),window.addEventListener("orientationchange",Ei),Le();function fe(P,X){P.code==="Space"&&P.preventDefault(),(P.code==="ArrowUp"||P.code==="ArrowDown"||P.code==="ArrowLeft"||P.code==="ArrowRight")&&P.preventDefault(),at[P.code]=X}window.addEventListener("keydown",P=>{fe(P,!0)}),window.addEventListener("keyup",P=>{at[P.code]=!1});function We(){Xe(),Cn(),$t=!1,m==null||m.classList.remove("touch-zone--active")}function Cn(){wt.active=!1,wt.pointerId=-1}function Xe(){et.active=!1,et.pointerId=-1,et.x=0,et.y=0,f==null||f.classList.remove("touch-zone--active"),p&&(p.style.left="",p.style.top="",p.style.bottom=""),g&&(g.style.transform="")}function kn(P){const X=P.clientX-et.baseX,W=P.clientY-et.baseY,ht=Math.hypot(X,W),$=ht>et.radius?et.radius/ht:1,Ct=X*$,Yt=W*$,Ee=Gt.clamp(Ct/et.radius,-1,1),se=Gt.clamp(Yt/et.radius,-1,1),me=.12;et.x=Math.abs(Ee)<me?0:Ee,et.y=Math.abs(se)<me?0:se,g&&(g.style.transform=`translate(calc(-50% + ${Ct}px), calc(-50% + ${Yt}px))`)}f==null||f.addEventListener("pointerdown",P=>{if(P.preventDefault(),et.active)return;const X=f.getBoundingClientRect(),W=(p==null?void 0:p.getBoundingClientRect().width)??Math.max(108,Math.min(window.innerWidth,window.innerHeight)*.18),ht=W*.34,$=W*.5,Ct=Gt.clamp(P.clientX,X.left+$,X.right-$),Yt=Gt.clamp(P.clientY,X.top+$,X.bottom-$);et.active=!0,et.pointerId=P.pointerId,et.startX=P.clientX,et.startY=P.clientY,et.baseX=Ct,et.baseY=Yt,et.radius=ht,et.x=0,et.y=0,f.classList.add("touch-zone--active"),p&&(p.style.left=`${Ct}px`,p.style.top=`${Yt}px`,p.style.bottom="auto"),f.setPointerCapture(P.pointerId),kn(P)}),f==null||f.addEventListener("pointermove",P=>{!et.active||P.pointerId!==et.pointerId||(P.preventDefault(),kn(P))});for(const P of["pointerup","pointercancel","lostpointercapture"])f==null||f.addEventListener(P,X=>{X instanceof PointerEvent&&X.pointerId!==et.pointerId||Xe()});v==null||v.addEventListener("pointerdown",P=>{P.preventDefault(),!wt.active&&(wt.active=!0,wt.pointerId=P.pointerId,wt.lastX=P.clientX,wt.lastY=P.clientY,v.setPointerCapture(P.pointerId))}),v==null||v.addEventListener("pointermove",P=>{if(!wt.active||P.pointerId!==wt.pointerId)return;P.preventDefault();const X=P.clientX-wt.lastX,W=P.clientY-wt.lastY;wt.lastX=P.clientX,wt.lastY=P.clientY,R-=X*.008,we=Gt.clamp(we+W*.0045,-.22,.68)});for(const P of["pointerup","pointercancel","lostpointercapture"])v==null||v.addEventListener(P,X=>{X instanceof PointerEvent&&X.pointerId!==wt.pointerId||Cn()});m==null||m.addEventListener("pointerdown",P=>{P.preventDefault(),m.classList.add("touch-zone--active"),_t||($t=!0)});for(const P of["pointerup","pointercancel","lostpointercapture"])m==null||m.addEventListener(P,()=>{m.classList.remove("touch-zone--active")});m==null||m.addEventListener("contextmenu",P=>{P.preventDefault()}),f==null||f.addEventListener("contextmenu",P=>{P.preventDefault()}),window.addEventListener("blur",We);for(const P of T)P.addEventListener("click",async()=>{var X,W;if(ot=P.dataset.character==="kurre"?"kurre":"sigge",x(ot),b.position.copy(le[ot]),b.rotation.set(0,0,0),E&&(E.textContent=ot==="sigge"?"Sigge":"Kurre"),tn()){try{document.fullscreenElement||await document.documentElement.requestFullscreen()}catch{}try{await((W=(X=screen.orientation).lock)==null?void 0:W.call(X,"landscape"))}catch{}}Q=!0,V=!0,ve=performance.now()/1e3,Ei()});let ve=performance.now()/1e3;(window.location.hostname==="127.0.0.1"||window.location.hostname==="localhost")&&new URLSearchParams(window.location.search).has("debug")&&(window.__siggeDebug={setCycleClock:P=>{yt=Gt.euclideanModulo(P,no),xt=Vn(),es(0)},setEnergy:P=>{dt=Gt.clamp(P,0,ls)},spawnPickup:P=>{if(P){const X=M(P);X.position.copy(As()),C.add(X),Ft.push({group:X,kind:P,ttl:42})}else N()}});function en(){dt=bc,_t=!1,ie=!0,zt=0,R=0,we=.18,Wt=0,y="hidden",_=5,B=0,q=0,tt=0,K=0,vt="hidden",ct=12,Et=0,Xt=0,it=0,ft=0,yt=us*.45,Dt=0,xt=!1,Ot=0,Lt=0,te=0,L=7,lt=0,Rt.set(0,0,0),b.position.copy(le[ot]),b.rotation.set(0,0,0),I.position.set(0,0,0),S.visible=!1,A.visible=!1,A.position.set(0,0,12),O.visible=!1,O.position.set(0,0,-12);for(const P of z)P.picked=!1,P.regrowLeft=0,P.regrowTotal=0,ds(P,1);for(;Ft.length>0;){const P=Ft.pop();P&&C.remove(P.group)}We();for(const P of Object.keys(at))at[P]=!1;l==null||l.classList.add("gameover-dialog--hidden"),c==null||c.classList.add("hud-gameover--hidden"),o==null||o.classList.add("hud-fox--hidden"),a==null||a.classList.add("hud-safe--hidden"),r==null||r.classList.add("hud-pickup--hidden"),t&&(t.style.width=`${dt/ls*100}%`),es(0),Nt(0),ve=performance.now()/1e3}u==null||u.addEventListener("click",en);function He(P){const X=P/1e3;let W=X-ve;if(ve=X,W>.1&&(W=.1),ii()){rt.render(C,J);return}es(W),Nt(W),tt>0&&(tt=Math.max(0,tt-W)),K>0&&(K=Math.max(0,K-W)),it>0&&(it=Math.max(0,it-W)),ft>0&&(ft=Math.max(0,ft-W)),_t||Se(ag*W),!_t&&y==="hidden"&&(_-=W*(Vn()?1.25:.75),_<=0&&F()),!_t&&vt==="hidden"&&(ct-=W*(Vn()?1.55:.55),ct<=0&&kt());const ht=at.ArrowUp||at.KeyW,$=at.ArrowDown||at.KeyS,Ct=at.ArrowLeft||at.KeyA,Yt=at.ArrowRight||at.KeyD,Ee=et.active&&(et.x!==0||et.y!==0);let se=0,me=0,Jt=0;if(Ee){const ue=Math.sin(R),Ls=Math.cos(R),al=Math.cos(R),cl=-Math.sin(R),fa=-et.y,pa=-et.x;se=ue*fa+al*pa,me=Ls*fa+cl*pa,Jt=Math.min(1,Math.hypot(se,me)),Jt>0&&(se/=Jt,me/=Jt,zt=Math.atan2(se,me))}else{const ue=(Ct?1:0)-(Yt?1:0);!_t&&ue!==0&&(zt+=Gt.clamp(ue,-1,1)*qt*W),se=Math.sin(zt),me=Math.cos(zt),Jt=Gt.clamp((ht?1:0)-($?1:0),-1,1),tn()||(R=zt)}const be=(1+dt*8e-4)*(te>0?1.22:1),Ye=_t?0:Jt*Km*W*be;Rt.x=se*Ye,Rt.z=me*Ye,Rt.y-=Ym*W;const De=at.Space||$t;!_t&&ie&&De&&(Rt.y=qm,ie=!1),$t=!1;let Pe=b.position.x+Rt.x,mn=b.position.y+Rt.y*W,Ne=b.position.z+Rt.z;Pe=Gt.clamp(Pe,-nn+ye,nn-ye),Ne=Gt.clamp(Ne,-pn+ye,pn-ye);const si=b.position.x,ri=b.position.z;for(const ue of Pt){const Ls=vg(ue.min.x,ue.min.y,ue.max.x,ue.max.y,Pe,Ne,ye);Pe=Ls.x,Ne=Ls.z}const Ti=xr(si,ri,Pe,Ne);Pe=Ti.x,Ne=Ti.z,b.position.x=Pe,b.position.z=Ne;const aa=bs(Pe,Ne)+xc;mn<=aa+.14?(mn=aa,Rt.y=0,ie=!0):ie=!1,b.position.y=mn,b.rotation.y=zt,ie&&Math.abs(Jt)>.01?(Wt+=W*11.5,I.position.y=.1*(.5-.5*Math.cos(Wt*2.6))):(Wt=Gt.lerp(Wt,0,W*4),I.position.y=Gt.lerp(I.position.y,0,Math.min(1,W*12))),ie||(I.position.y=0),Re(W),G(W,X);const Rs=yi(Pe,mn,Ne);a==null||a.classList.toggle("hud-safe--hidden",!Rs),c==null||c.classList.toggle("hud-gameover--hidden",!_t),Rs||(y==="hidden"||y==="leave")&&(vt==="hidden"||vt==="leave")?o==null||o.classList.add("hud-fox--hidden"):o==null||o.classList.remove("hud-fox--hidden");let Cs=!1,ca=!1;if(y==="chase")if(Rs)bt();else{const ue=A.position.clone().sub(b.position);ue.y=0,ue.lengthSq()<.001&&ue.set(Math.sin(A.rotation.y),0,Math.cos(A.rotation.y)),ue.normalize(),ut.set(b.position.x+ue.x*Tc,.25,b.position.z+ue.z*Tc),Cs=mt(ut,to*(.9+(100-dt)*35e-5),W)>.08,A.position.x=Gt.clamp(A.position.x,-nn+.4,nn-.4),A.position.z=Gt.clamp(A.position.z,-pn+.4,pn-.4),A.rotation.y=Math.atan2(b.position.x-A.position.x,b.position.z-A.position.z),tt<=0&&new Vt(A.position.x,A.position.z).distanceTo(new Vt(Pe,Ne))<=sg&&(ce(cg),tt=ug,K=Ec)}else if(y==="sniff"){const ue=mt(ut,to*.55,W);Cs=ue>.08,ue<.08&&(ca=!0,B-=W,A.rotation.y+=Math.sin(performance.now()*.014)*W*.9,B<=0&&(y="leave"))}else if(y==="leave"){const ue=mt(pt,to*.8,W);Cs=!0,(ue<.2||Math.abs(A.position.x)>nn||Math.abs(A.position.z)>pn)&&st()}Tt(Cs,ca,W,X);let Ps=!1,la=!1;if(vt==="chase")if(Rs)de();else{const ue=O.position.clone().sub(b.position);ue.y=0,ue.lengthSq()<.001&&ue.set(Math.sin(O.rotation.y),0,Math.cos(O.rotation.y)),ue.normalize(),It.set(b.position.x+ue.x*wc,.22,b.position.z+ue.z*wc),Ps=Ut(It,eo*(Vn()?1.08:.92),W)>.07,O.position.x=Gt.clamp(O.position.x,-nn+.35,nn-.35),O.position.z=Gt.clamp(O.position.z,-pn+.35,pn-.35),O.rotation.y=Math.atan2(b.position.x-O.position.x,b.position.z-O.position.z),it<=0&&new Vt(O.position.x,O.position.z).distanceTo(new Vt(Pe,Ne))<=rg&&(ce(lg),it=hg,ft=yc)}else if(vt==="sniff"){const ue=Ut(It,eo*.58,W);Ps=ue>.07,ue<.07&&(la=!0,Et-=W,O.rotation.y+=Math.sin(performance.now()*.016)*W*1.1,Et<=0&&(vt="leave"))}else if(vt==="leave"){const ue=Ut(ee,eo*.85,W);Ps=!0,(ue<.2||Math.abs(O.position.x)>nn||Math.abs(O.position.z)>pn)&&Ht()}ae(Ps,la,W,X);const ua=new U(Math.sin(R),0,Math.cos(R)).clone().multiplyScalar(-1),ha=4.35,da=Math.cos(we)*ha,ol=new U(b.position.x+ua.x*da,b.position.y+1.15+Math.sin(we)*ha,b.position.z+ua.z*da);J.position.lerp(ol,.18),J.lookAt(new U(b.position.x,b.position.y+.3,b.position.z)),t&&(t.style.width=`${dt/ls*100}%`),rt.render(C,J)}rt.setAnimationLoop(()=>{const P=performance.now();He(P)})}Eg();
