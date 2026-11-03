import{b as lc,J as Cg,a as wf,C as Vo,c as cc,d as Sx,O as xa,e as Mx}from"./colleagues-BchjOv-p.js";var Rg={exports:{}},uc={},bg={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),Ex=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Ax=Symbol.for("react.profiler"),Cx=Symbol.for("react.provider"),Rx=Symbol.for("react.context"),bx=Symbol.for("react.forward_ref"),Px=Symbol.for("react.suspense"),Nx=Symbol.for("react.memo"),Lx=Symbol.for("react.lazy"),jh=Symbol.iterator;function Ix(t){return t===null||typeof t!="object"?null:(t=jh&&t[jh]||t["@@iterator"],typeof t=="function"?t:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Lg={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Lg,this.updater=n||Pg}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=Xs.prototype;function Af(t,e,n){this.props=t,this.context=e,this.refs=Lg,this.updater=n||Pg}var Cf=Af.prototype=new Ig;Cf.constructor=Af;Ng(Cf,Xs.prototype);Cf.isPureReactComponent=!0;var Wh=Array.isArray,Dg=Object.prototype.hasOwnProperty,Rf={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dg.call(e,i)&&!Ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:aa,type:t,key:s,ref:o,props:r,_owner:Rf.current}}function Dx(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function Ux(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ux(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case Ex:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lc(o,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(bf(r)&&(r=Dx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Xh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lc(s,a);o+=hl(s,e,n,l,r)}else if(l=Ix(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Fx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},pl={transition:null},Ox={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Rf};function Og(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Xs;ke.Fragment=Tx;ke.Profiler=Ax;ke.PureComponent=Af;ke.StrictMode=wx;ke.Suspense=Px;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;ke.act=Og;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ng({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dg.call(e,l)&&!Ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:aa,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:Rx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cx,_context:t},t.Consumer=t};ke.createElement=Fg;ke.createFactory=function(t){var e=Fg.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:bx,render:t}};ke.isValidElement=bf;ke.lazy=function(t){return{$$typeof:Lx,_payload:{_status:-1,_result:t},_init:Fx}};ke.memo=function(t,e){return{$$typeof:Nx,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};ke.unstable_act=Og;ke.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ke.useContext=function(t){return Kt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ke.useId=function(){return Kt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ke.useRef=function(t){return Kt.current.useRef(t)};ke.useState=function(t){return Kt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Kt.current.useTransition()};ke.version="18.3.1";bg.exports=ke;var te=bg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=te,Bx=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),Hx=Object.prototype.hasOwnProperty,Vx=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gx={key:!0,ref:!0,__self:!0,__source:!0};function kg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hx.call(e,i)&&!Gx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Bx,type:t,key:s,ref:o,props:r,_owner:Vx.current}}uc.Fragment=zx;uc.jsx=kg;uc.jsxs=kg;Rg.exports=uc;var p=Rg.exports,Bg={exports:{}},_n={},zg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,Y){var q=P.length;P.push(Y);e:for(;0<q;){var oe=q-1>>>1,xe=P[oe];if(0<r(xe,Y))P[oe]=Y,P[q]=xe,q=oe;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var Y=P[0],q=P.pop();if(q!==Y){P[0]=q;e:for(var oe=0,xe=P.length,ze=xe>>>1;oe<ze;){var $=2*(oe+1)-1,ie=P[$],me=$+1,ae=P[me];if(0>r(ie,q))me<xe&&0>r(ae,ie)?(P[oe]=ae,P[me]=q,oe=me):(P[oe]=ie,P[$]=q,oe=$);else if(me<xe&&0>r(ae,q))P[oe]=ae,P[me]=q,oe=me;else break e}}return Y}function r(P,Y){var q=P.sortIndex-Y.sortIndex;return q!==0?q:P.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=P)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(P){if(y=!1,x(P),!_)if(n(l)!==null)_=!0,z(N);else{var Y=n(c);Y!==null&&J(S,Y.startTime-P)}}function N(P,Y){_=!1,y&&(y=!1,u(b),b=-1),m=!0;var q=h;try{for(x(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||P&&!L());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var xe=oe(f.expirationTime<=Y);Y=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),x(Y)}else i(l);f=n(l)}if(f!==null)var ze=!0;else{var $=n(c);$!==null&&J(S,$.startTime-Y),ze=!1}return ze}finally{f=null,h=q,m=!1}}var C=!1,R=null,b=-1,w=5,E=-1;function L(){return!(t.unstable_now()-E<w)}function B(){if(R!==null){var P=t.unstable_now();E=P;var Y=!0;try{Y=R(!0,P)}finally{Y?O():(C=!1,R=null)}}else C=!1}var O;if(typeof g=="function")O=function(){g(B)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,W=k.port2;k.port1.onmessage=B,O=function(){W.postMessage(null)}}else O=function(){v(B,0)};function z(P){R=P,C||(C=!0,O())}function J(P,Y){b=v(function(){P(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,z(N))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var q=h;h=Y;try{return P()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=h;h=P;try{return Y()}finally{h=q}},t.unstable_scheduleCallback=function(P,Y,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,P){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=q+xe,P={id:d++,callback:Y,priorityLevel:P,startTime:q,expirationTime:xe,sortIndex:-1},q>oe?(P.sortIndex=q,e(c,P),n(l)===null&&P===n(c)&&(y?(u(b),b=-1):y=!0,J(S,q-oe))):(P.sortIndex=xe,e(l,P),_||m||(_=!0,z(N))),P},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(P){var Y=h;return function(){var q=h;h=Y;try{return P.apply(this,arguments)}finally{h=q}}}})(Hg);zg.exports=Hg;var jx=zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx=te,vn=jx;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vg=new Set,Go={};function zr(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Go[t]=e,t=0;t<e.length;t++)Vg.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,Xx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$h={},Yh={};function $x(t){return Bu.call(Yh,t)?!0:Bu.call($h,t)?!1:Xx.test(t)?Yh[t]=!0:($h[t]=!0,!1)}function Yx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qx(t,e,n,i){if(e===null||typeof e>"u"||Yx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pf=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);Ut[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pf,Nf);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lf(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qx(e,n,r,i)&&(n=null),i||r===null?$x(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),Uf=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),qh=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Ic;function To(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Dc=!1;function Uc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function Kx(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case zu:return"Profiler";case If:return"StrictMode";case Hu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Gg:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uf:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function Zx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qx(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=Qx(t))}function $g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yg(t,e){e=e.checked,e!=null&&Lf(t,"checked",e,!1)}function Wu(t,e){Yg(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xu(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xu(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(wo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function qg(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,Zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jx=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){Jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function Qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function Jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ey=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qu(t,e){if(e){if(ey[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Ms=null,Es=null;function ep(t){if(t=ua(t)){if(typeof Qu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=mc(e),Qu(t.stateNode,t.type,e))}}function ev(t){Ms?Es?Es.push(t):Es=[t]:Ms=t}function tv(){if(Ms){var t=Ms,e=Es;if(Es=Ms=null,ep(t),e)for(t=0;t<e.length;t++)ep(e[t])}}function nv(t,e){return t(e)}function iv(){}var Fc=!1;function rv(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return nv(t,e,n)}finally{Fc=!1,(Ms!==null||Es!==null)&&(iv(),tv())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var i=mc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ju=!1;if(Mi)try{var so={};Object.defineProperty(so,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Ju=!1}function ty(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Io=!1,Il=null,Dl=!1,ed=null,ny={onError:function(t){Io=!0,Il=t}};function iy(t,e,n,i,r,s,o,a,l){Io=!1,Il=null,ty.apply(ny,arguments)}function ry(t,e,n,i,r,s,o,a,l){if(iy.apply(this,arguments),Io){if(Io){var c=Il;Io=!1,Il=null}else throw Error(ne(198));Dl||(Dl=!0,ed=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tp(t){if(Hr(t)!==t)throw Error(ne(188))}function sy(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tp(r),t;if(s===i)return tp(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function ov(t){return t=sy(t),t!==null?av(t):null}function av(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=av(t);if(e!==null)return e;t=t.sibling}return null}var lv=vn.unstable_scheduleCallback,np=vn.unstable_cancelCallback,oy=vn.unstable_shouldYield,ay=vn.unstable_requestPaint,yt=vn.unstable_now,ly=vn.unstable_getCurrentPriorityLevel,Of=vn.unstable_ImmediatePriority,cv=vn.unstable_UserBlockingPriority,Ul=vn.unstable_NormalPriority,cy=vn.unstable_LowPriority,uv=vn.unstable_IdlePriority,dc=null,ei=null;function uy(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:hy,dy=Math.log,fy=Math.LN2;function hy(t){return t>>>=0,t===0?32:31-(dy(t)/fy|0)|0}var Ta=64,wa=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ao(a):(s&=o,s!==0&&(i=Ao(s)))}else o=n&~r,o!==0?i=Ao(o):s!==0&&(i=Ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function py(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=py(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dv(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function gy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hv,Bf,pv,mv,gv,nd=!1,Aa=[],Xi=null,$i=null,Yi=null,Xo=new Map,$o=new Map,Bi=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&Bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _y(t,e,n,i,r){switch(e){case"focusin":return Xi=oo(Xi,t,e,n,i,r),!0;case"dragenter":return $i=oo($i,t,e,n,i,r),!0;case"mouseover":return Yi=oo(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xo.set(s,oo(Xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$o.set(s,oo($o.get(s)||null,t,e,n,i,r)),!0}return!1}function vv(t){var e=Er(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=sv(n),e!==null){t.blockedOn=e,gv(t.priority,function(){pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=ua(n),e!==null&&Bf(e),t.blockedOn=n,!1;e.shift()}return!0}function rp(t,e,n){ml(t)&&n.delete(e)}function xy(){nd=!1,Xi!==null&&ml(Xi)&&(Xi=null),$i!==null&&ml($i)&&($i=null),Yi!==null&&ml(Yi)&&(Yi=null),Xo.forEach(rp),$o.forEach(rp)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,xy)))}function Yo(t){function e(r){return ao(r,t)}if(0<Aa.length){ao(Aa[0],t);for(var n=1;n<Aa.length;n++){var i=Aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&ao(Xi,t),$i!==null&&ao($i,t),Yi!==null&&ao(Yi,t),Xo.forEach(e),$o.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)vv(n),n.blockedOn===null&&Bi.shift()}var Ts=Ci.ReactCurrentBatchConfig,Ol=!0;function yy(t,e,n,i){var r=Je,s=Ts.transition;Ts.transition=null;try{Je=1,zf(t,e,n,i)}finally{Je=r,Ts.transition=s}}function Sy(t,e,n,i){var r=Je,s=Ts.transition;Ts.transition=null;try{Je=4,zf(t,e,n,i)}finally{Je=r,Ts.transition=s}}function zf(t,e,n,i){if(Ol){var r=id(t,e,n,i);if(r===null)$c(t,e,i,kl,n),ip(t,i);else if(_y(r,t,e,n,i))i.stopPropagation();else if(ip(t,i),e&4&&-1<vy.indexOf(t)){for(;r!==null;){var s=ua(r);if(s!==null&&hv(s),s=id(t,e,n,i),s===null&&$c(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(t,e,i,null,n)}}var kl=null;function id(t,e,n,i){if(kl=null,t=Ff(i),t=Er(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function _v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ly()){case Of:return 1;case cv:return 4;case Ul:case cy:return 16;case uv:return 536870912;default:return 16}default:return 16}}var Gi=null,Hf=null,gl=null;function xv(){if(gl)return gl;var t,e=Hf,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function sp(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:sp,this.isPropagationStopped=sp,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=xn($s),ca=mt({},$s,{view:0,detail:0}),My=xn(ca),kc,Bc,lo,fc=mt({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(kc=t.screenX-lo.screenX,Bc=t.screenY-lo.screenY):Bc=kc=0,lo=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),op=xn(fc),Ey=mt({},fc,{dataTransfer:0}),Ty=xn(Ey),wy=mt({},ca,{relatedTarget:0}),zc=xn(wy),Ay=mt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=xn(Ay),Ry=mt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),by=xn(Ry),Py=mt({},$s,{data:0}),ap=xn(Py),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Iy[t])?!!e[t]:!1}function Gf(){return Dy}var Uy=mt({},ca,{key:function(t){if(t.key){var e=Ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ly[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=xn(Uy),Oy=mt({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=xn(Oy),ky=mt({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),By=xn(ky),zy=mt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=xn(zy),Vy=mt({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=xn(Vy),jy=[9,13,27,32],jf=Mi&&"CompositionEvent"in window,Do=null;Mi&&"documentMode"in document&&(Do=document.documentMode);var Wy=Mi&&"TextEvent"in window&&!Do,yv=Mi&&(!jf||Do&&8<Do&&11>=Do),cp=" ",up=!1;function Sv(t,e){switch(t){case"keyup":return jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function Xy(t,e){switch(t){case"compositionend":return Mv(e);case"keypress":return e.which!==32?null:(up=!0,cp);case"textInput":return t=e.data,t===cp&&up?null:t;default:return null}}function $y(t,e){if(cs)return t==="compositionend"||!jf&&Sv(t,e)?(t=xv(),gl=Hf=Gi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yv&&e.locale!=="ko"?null:e.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yy[t.type]:e==="textarea"}function Ev(t,e,n,i){ev(i),e=Bl(e,"onChange"),0<e.length&&(n=new Vf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Uo=null,qo=null;function qy(t){Dv(t,0)}function hc(t){var e=fs(t);if($g(e))return t}function Ky(t,e){if(t==="change")return e}var Tv=!1;if(Mi){var Hc;if(Mi){var Vc="oninput"in document;if(!Vc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Vc=typeof fp.oninput=="function"}Hc=Vc}else Hc=!1;Tv=Hc&&(!document.documentMode||9<document.documentMode)}function hp(){Uo&&(Uo.detachEvent("onpropertychange",wv),qo=Uo=null)}function wv(t){if(t.propertyName==="value"&&hc(qo)){var e=[];Ev(e,qo,t,Ff(t)),rv(qy,e)}}function Zy(t,e,n){t==="focusin"?(hp(),Uo=e,qo=n,Uo.attachEvent("onpropertychange",wv)):t==="focusout"&&hp()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(qo)}function Jy(t,e){if(t==="click")return hc(e)}function eS(t,e){if(t==="input"||t==="change")return hc(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:tS;function Ko(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bu.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var n=pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function Av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cv(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=Cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Av(n.ownerDocument.documentElement,n)){if(i!==null&&Wf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mp(n,s);var o=mp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=Mi&&"documentMode"in document&&11>=document.documentMode,us=null,rd=null,Fo=null,sd=!1;function gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||us==null||us!==Ll(i)||(i=us,"selectionStart"in i&&Wf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&Ko(Fo,i)||(Fo=i,i=Bl(rd,"onSelect"),0<i.length&&(e=new Vf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Gc={},Rv={};Mi&&(Rv=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function pc(t){if(Gc[t])return Gc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rv)return Gc[t]=e[n];return t}var bv=pc("animationend"),Pv=pc("animationiteration"),Nv=pc("animationstart"),Lv=pc("transitionend"),Iv=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Iv.set(t,e),zr(e,[t])}for(var jc=0;jc<vp.length;jc++){var Wc=vp[jc],rS=Wc.toLowerCase(),sS=Wc[0].toUpperCase()+Wc.slice(1);ar(rS,"on"+sS)}ar(bv,"onAnimationEnd");ar(Pv,"onAnimationIteration");ar(Nv,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(Lv,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function _p(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ry(i,e,void 0,t),t.currentTarget=null}function Dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;_p(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;_p(r,a,c),s=l}}}if(Dl)throw t=ed,Dl=!1,ed=null,t}function ct(t,e){var n=e[ud];n===void 0&&(n=e[ud]=new Set);var i=t+"__bubble";n.has(i)||(Uv(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),Uv(n,t,i,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[ba]){t[ba]=!0,Vg.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Xc("selectionchange",!1,e))}}function Uv(t,e,n,i){switch(_v(e)){case 1:var r=yy;break;case 4:r=Sy;break;default:r=zf}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}rv(function(){var c=s,d=Ff(n),f=[];e:{var h=Iv.get(t);if(h!==void 0){var m=Vf,_=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":m=Fy;break;case"focusin":_="focus",m=zc;break;case"focusout":_="blur",m=zc;break;case"beforeblur":case"afterblur":m=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=By;break;case bv:case Pv:case Nv:m=Cy;break;case Lv:m=Hy;break;case"scroll":m=My;break;case"wheel":m=Gy;break;case"copy":case"cut":case"paste":m=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=lp}var y=(e&4)!==0,v=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Wo(g,u),S!=null&&y.push(Qo(g,S,x)))),v)break;g=g.return}0<y.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Zu&&(_=n.relatedTarget||n.fromElement)&&(Er(_)||_[Ei]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Er(_):null,_!==null&&(v=Hr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=op,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=lp,S="onPointerLeave",u="onPointerEnter",g="pointer"),v=m==null?h:fs(m),x=_==null?h:fs(_),h=new y(S,g+"leave",m,n,d),h.target=v,h.relatedTarget=x,S=null,Er(d)===c&&(y=new y(u,g+"enter",_,n,d),y.target=x,y.relatedTarget=v,S=y),v=S,m&&_)t:{for(y=m,u=_,g=0,x=y;x;x=Wr(x))g++;for(x=0,S=u;S;S=Wr(S))x++;for(;0<g-x;)y=Wr(y),g--;for(;0<x-g;)u=Wr(u),x--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Wr(y),u=Wr(u)}y=null}else y=null;m!==null&&xp(f,h,m,y,!1),_!==null&&v!==null&&xp(f,v,_,y,!0)}}e:{if(h=c?fs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var N=Ky;else if(dp(h))if(Tv)N=eS;else{N=Qy;var C=Zy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Jy);if(N&&(N=N(t,c))){Ev(f,N,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Xu(h,"number",h.value)}switch(C=c?fs(c):window,t){case"focusin":(dp(C)||C.contentEditable==="true")&&(us=C,rd=c,Fo=null);break;case"focusout":Fo=rd=us=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,gp(f,n,d);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":gp(f,n,d)}var R;if(jf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else cs?Sv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yv&&n.locale!=="ko"&&(cs||b!=="onCompositionStart"?b==="onCompositionEnd"&&cs&&(R=xv()):(Gi=d,Hf="value"in Gi?Gi.value:Gi.textContent,cs=!0)),C=Bl(c,b),0<C.length&&(b=new ap(b,t,null,n,d),f.push({event:b,listeners:C}),R?b.data=R:(R=Mv(n),R!==null&&(b.data=R)))),(R=Wy?Xy(t,n):$y(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(d=new ap("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}Dv(f,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wo(t,n),s!=null&&i.unshift(Qo(t,s,r)),s=Wo(t,e),s!=null&&i.push(Qo(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Wo(n,s),l!=null&&o.unshift(Qo(n,l,a))):r||(l=Wo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function Pa(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(ne(425))}function zl(){}var od=null,ad=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(t){return Sp.resolve(null).then(t).catch(dS)}:cd;function dS(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Yo(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Ys,Jo="__reactProps$"+Ys,Ei="__reactContainer$"+Ys,ud="__reactEvents$"+Ys,fS="__reactListeners$"+Ys,hS="__reactHandles$"+Ys;function Er(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mp(t);t!==null;){if(n=t[Zn])return n;t=Mp(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[Zn]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function mc(t){return t[Jo]||null}var dd=[],hs=-1;function lr(t){return{current:t}}function ut(t){0>hs||(t.current=dd[hs],dd[hs]=null,hs--)}function rt(t,e){hs++,dd[hs]=t.current,t.current=e}var rr={},jt=lr(rr),rn=lr(!1),Ir=rr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function Hl(){ut(rn),ut(jt)}function Ep(t,e,n){if(jt.current!==rr)throw Error(ne(168));rt(jt,e),rt(rn,n)}function Fv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Zx(t)||"Unknown",r));return mt({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Ir=jt.current,rt(jt,t),rt(rn,rn.current),!0}function Tp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Fv(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,ut(rn),ut(jt),rt(jt,t)):ut(rn),rt(rn,n)}var hi=null,gc=!1,qc=!1;function Ov(t){hi===null?hi=[t]:hi.push(t)}function pS(t){gc=!0,Ov(t)}function cr(){if(!qc&&hi!==null){qc=!0;var t=0,e=Je;try{var n=hi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,gc=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),lv(Of,cr),r}finally{Je=e,qc=!1}}return null}var ps=[],ms=0,Gl=null,jl=0,Tn=[],wn=0,Dr=null,gi=1,vi="";function vr(t,e){ps[ms++]=jl,ps[ms++]=Gl,Gl=t,jl=e}function kv(t,e,n){Tn[wn++]=gi,Tn[wn++]=vi,Tn[wn++]=Dr,Dr=t;var i=gi;t=vi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gi=1<<32-Gn(e)+r|n<<r|i,vi=s+t}else gi=1<<s|n<<r|i,vi=t}function Xf(t){t.return!==null&&(vr(t,1),kv(t,1,0))}function $f(t){for(;t===Gl;)Gl=ps[--ms],ps[ms]=null,jl=ps[--ms],ps[ms]=null;for(;t===Dr;)Dr=Tn[--wn],Tn[wn]=null,vi=Tn[--wn],Tn[wn]=null,gi=Tn[--wn],Tn[wn]=null}var mn=null,hn=null,dt=!1,kn=null;function Bv(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,hn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:gi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,hn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(dt){var e=hn;if(e){var n=e;if(!wp(t,e)){if(fd(t))throw Error(ne(418));e=qi(n.nextSibling);var i=mn;e&&wp(t,e)?Bv(i,n):(t.flags=t.flags&-4097|2,dt=!1,mn=t)}}else{if(fd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,mn=t}}}function Ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Na(t){if(t!==mn)return!1;if(!dt)return Ap(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=hn)){if(fd(t))throw zv(),Error(ne(418));for(;e;)Bv(t,e),e=qi(e.nextSibling)}if(Ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=mn?qi(t.stateNode.nextSibling):null;return!0}function zv(){for(var t=hn;t;)t=qi(t.nextSibling)}function Ls(){hn=mn=null,dt=!1}function Yf(t){kn===null?kn=[t]:kn.push(t)}var mS=Ci.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function Hv(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Ji(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,S){return g===null||g.tag!==6?(g=nu(x,u.mode,S),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,S){var N=x.type;return N===ls?d(u,g,x.props.children,S,x.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Oi&&Cp(N)===g.type)?(S=r(g,x.props),S.ref=co(u,g,x),S.return=u,S):(S=Tl(x.type,x.key,x.props,null,u.mode,S),S.ref=co(u,g,x),S.return=u,S)}function c(u,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=iu(x,u.mode,S),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function d(u,g,x,S,N){return g===null||g.tag!==7?(g=Pr(x,u.mode,S,N),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=nu(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:return x=Tl(g.type,g.key,g.props,null,u.mode,x),x.ref=co(u,null,g),x.return=u,x;case as:return g=iu(g,u.mode,x),g.return=u,g;case Oi:var S=g._init;return f(u,S(g._payload),x)}if(wo(g)||ro(g))return g=Pr(g,u.mode,x,null),g.return=u,g;La(u,g)}return null}function h(u,g,x,S){var N=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:a(u,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return x.key===N?l(u,g,x,S):null;case as:return x.key===N?c(u,g,x,S):null;case Oi:return N=x._init,h(u,g,N(x._payload),S)}if(wo(x)||ro(x))return N!==null?null:d(u,g,x,S,null);La(u,x)}return null}function m(u,g,x,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(g,u,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:return u=u.get(S.key===null?x:S.key)||null,l(g,u,S,N);case as:return u=u.get(S.key===null?x:S.key)||null,c(g,u,S,N);case Oi:var C=S._init;return m(u,g,x,C(S._payload),N)}if(wo(S)||ro(S))return u=u.get(x)||null,d(g,u,S,N,null);La(g,S)}return null}function _(u,g,x,S){for(var N=null,C=null,R=g,b=g=0,w=null;R!==null&&b<x.length;b++){R.index>b?(w=R,R=null):w=R.sibling;var E=h(u,R,x[b],S);if(E===null){R===null&&(R=w);break}t&&R&&E.alternate===null&&e(u,R),g=s(E,g,b),C===null?N=E:C.sibling=E,C=E,R=w}if(b===x.length)return n(u,R),dt&&vr(u,b),N;if(R===null){for(;b<x.length;b++)R=f(u,x[b],S),R!==null&&(g=s(R,g,b),C===null?N=R:C.sibling=R,C=R);return dt&&vr(u,b),N}for(R=i(u,R);b<x.length;b++)w=m(R,u,b,x[b],S),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?b:w.key),g=s(w,g,b),C===null?N=w:C.sibling=w,C=w);return t&&R.forEach(function(L){return e(u,L)}),dt&&vr(u,b),N}function y(u,g,x,S){var N=ro(x);if(typeof N!="function")throw Error(ne(150));if(x=N.call(x),x==null)throw Error(ne(151));for(var C=N=null,R=g,b=g=0,w=null,E=x.next();R!==null&&!E.done;b++,E=x.next()){R.index>b?(w=R,R=null):w=R.sibling;var L=h(u,R,E.value,S);if(L===null){R===null&&(R=w);break}t&&R&&L.alternate===null&&e(u,R),g=s(L,g,b),C===null?N=L:C.sibling=L,C=L,R=w}if(E.done)return n(u,R),dt&&vr(u,b),N;if(R===null){for(;!E.done;b++,E=x.next())E=f(u,E.value,S),E!==null&&(g=s(E,g,b),C===null?N=E:C.sibling=E,C=E);return dt&&vr(u,b),N}for(R=i(u,R);!E.done;b++,E=x.next())E=m(R,u,b,E.value,S),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?b:E.key),g=s(E,g,b),C===null?N=E:C.sibling=E,C=E);return t&&R.forEach(function(B){return e(u,B)}),dt&&vr(u,b),N}function v(u,g,x,S){if(typeof x=="object"&&x!==null&&x.type===ls&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:e:{for(var N=x.key,C=g;C!==null;){if(C.key===N){if(N=x.type,N===ls){if(C.tag===7){n(u,C.sibling),g=r(C,x.props.children),g.return=u,u=g;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Oi&&Cp(N)===C.type){n(u,C.sibling),g=r(C,x.props),g.ref=co(u,C,x),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===ls?(g=Pr(x.props.children,u.mode,S,x.key),g.return=u,u=g):(S=Tl(x.type,x.key,x.props,null,u.mode,S),S.ref=co(u,g,x),S.return=u,u=S)}return o(u);case as:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=iu(x,u.mode,S),g.return=u,u=g}return o(u);case Oi:return C=x._init,v(u,g,C(x._payload),S)}if(wo(x))return _(u,g,x,S);if(ro(x))return y(u,g,x,S);La(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=nu(x,u.mode,S),g.return=u,u=g),o(u)):n(u,g)}return v}var Is=Hv(!0),Vv=Hv(!1),Wl=lr(null),Xl=null,gs=null,qf=null;function Kf(){qf=gs=Xl=null}function Zf(t){var e=Wl.current;ut(Wl),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Xl=t,qf=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(Xl===null)throw Error(ne(308));gs=t,Xl.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var Tr=null;function Qf(t){Tr===null?Tr=[t]:Tr.push(t)}function Gv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ki=!1;function Jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=mt({},f,h);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var da={},ti=lr(da),ea=lr(da),ta=lr(da);function wr(t){if(t===da)throw Error(ne(174));return t}function eh(t,e){switch(rt(ta,e),rt(ea,t),rt(ti,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yu(e,t)}ut(ti),rt(ti,e)}function Ds(){ut(ti),ut(ea),ut(ta)}function Wv(t){wr(ta.current);var e=wr(ti.current),n=Yu(e,t.type);e!==n&&(rt(ea,t),rt(ti,n))}function th(t){ea.current===t&&(ut(ti),ut(ea))}var ht=lr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function nh(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var xl=Ci.ReactCurrentDispatcher,Zc=Ci.ReactCurrentBatchConfig,Ur=0,pt=null,Tt=null,Pt=null,ql=!1,Oo=!1,na=0,gS=0;function Ot(){throw Error(ne(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function rh(t,e,n,i,r,s){if(Ur=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?yS:SS,t=n(i,r),Oo){s=0;do{if(Oo=!1,na=0,25<=s)throw Error(ne(301));s+=1,Pt=Tt=null,e.updateQueue=null,xl.current=MS,t=n(i,r)}while(Oo)}if(xl.current=Kl,e=Tt!==null&&Tt.next!==null,Ur=0,Pt=Tt=pt=null,ql=!1,e)throw Error(ne(300));return t}function sh(){var t=na!==0;return na=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function bn(){if(Tt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Pt===null?pt.memoizedState:Pt.next;if(e!==null)Pt=e,Tt=t;else{if(t===null)throw Error(ne(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function ia(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ur&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,pt.lanes|=d,Fr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xv(){}function $v(t,e){var n=pt,i=bn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,oh(Kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,ra(9,qv.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ne(349));Ur&30||Yv(n,e,r)}return r}function Yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qv(t,e,n,i){e.value=n,e.getSnapshot=i,Zv(e)&&Qv(t)}function Kv(t,e,n){return n(function(){Zv(e)&&Qv(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Qv(t){var e=Ti(t,1);e!==null&&jn(e,t,1,-1)}function Pp(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=xS.bind(null,pt,t),[e.memoizedState,t]}function ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jv(){return bn().memoizedState}function yl(t,e,n,i){var r=qn();pt.flags|=t,r.memoizedState=ra(1|e,n,void 0,i===void 0?null:i)}function vc(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&ih(i,o.deps)){r.memoizedState=ra(e,n,s,i);return}}pt.flags|=t,r.memoizedState=ra(1|e,n,s,i)}function Np(t,e){return yl(8390656,8,t,e)}function oh(t,e){return vc(2048,8,t,e)}function e0(t,e){return vc(4,2,t,e)}function t0(t,e){return vc(4,4,t,e)}function n0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i0(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,n0.bind(null,e,t),n)}function ah(){}function r0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function o0(t,e,n){return Ur&21?(Xn(n,e)||(n=dv(),pt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function vS(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{Je=n,Zc.transition=i}}function a0(){return bn().memoizedState}function _S(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},l0(t))c0(e,n);else if(n=Gv(t,e,n,i),n!==null){var r=Yt();jn(n,t,i,r),u0(n,e,i)}}function xS(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(l0(t))c0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,Qf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gv(t,e,r,i),n!==null&&(r=Yt(),jn(n,t,i,r),u0(n,e,i))}}function l0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function c0(t,e){Oo=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}var Kl={readContext:Rn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},yS={readContext:Rn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,n0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_S.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Pp,useDebugValue:ah,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Pp(!1),e=t[0];return t=vS.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=qn();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Nt===null)throw Error(ne(349));Ur&30||Yv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Np(Kv.bind(null,i,s,t),[t]),i.flags|=2048,ra(9,qv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Nt.identifierPrefix;if(dt){var n=vi,i=gi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:Rn,useCallback:r0,useContext:Rn,useEffect:oh,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:Qc,useRef:Jv,useState:function(){return Qc(ia)},useDebugValue:ah,useDeferredValue:function(t){var e=bn();return o0(e,Tt.memoizedState,t)},useTransition:function(){var t=Qc(ia)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:$v,useId:a0,unstable_isNewReconciler:!1},MS={readContext:Rn,useCallback:r0,useContext:Rn,useEffect:oh,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:Jc,useRef:Jv,useState:function(){return Jc(ia)},useDebugValue:ah,useDeferredValue:function(t){var e=bn();return Tt===null?e.memoizedState=t:o0(e,Tt.memoizedState,t)},useTransition:function(){var t=Jc(ia)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:$v,useId:a0,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Qi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(jn(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Qi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(jn(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Qi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(jn(e,t,i,n),_l(e,t,i))}};function Lp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,i)||!Ko(r,s):!0}function d0(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=sn(e)?Ir:jt.current,i=e.contextTypes,s=(i=i!=null)?Ns(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=sn(e)?Ir:jt.current,r.context=Ns(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_c.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",i=e;do n+=Kx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function f0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Cd=i),vd(t,e)},n}function h0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vd(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ES;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=OS.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var TS=Ci.ReactCurrentOwner,nn=!1;function $t(t,e,n,i){e.child=t===null?Vv(e,null,n,i):Is(e,t.child,n,i)}function Op(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=rh(t,e,n,i,s,r),n=sh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(dt&&n&&Xf(e),e.flags|=1,$t(t,e,i,r),e.child)}function kp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p0(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function p0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ko(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return _d(t,e,n,i,r)}function m0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(_s,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(_s,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(_s,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(_s,dn),dn|=i;return $t(t,e,r,n),e.child}function g0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,i,r){var s=sn(n)?Ir:jt.current;return s=Ns(e,s),ws(e,r),n=rh(t,e,n,i,s,r),i=sh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(dt&&i&&Xf(e),e.flags|=1,$t(t,e,n,r),e.child)}function Bp(t,e,n,i,r){if(sn(n)){var s=!0;Vl(e)}else s=!1;if(ws(e,r),e.stateNode===null)Sl(t,e),d0(e,n,i),gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=sn(n)?Ir:jt.current,c=Ns(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ip(e,o,i,c),ki=!1;var h=e.memoizedState;o.state=h,$l(e,i,o,r),l=e.memoizedState,a!==i||h!==l||rn.current||ki?(typeof d=="function"&&(md(e,n,d,i),l=e.memoizedState),(a=ki||Lp(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,jv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Fn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=sn(n)?Ir:jt.current,l=Ns(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Ip(e,o,i,l),ki=!1,h=e.memoizedState,o.state=h,$l(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||rn.current||ki?(typeof m=="function"&&(md(e,n,m,i),_=e.memoizedState),(c=ki||Lp(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return xd(t,e,n,i,s,r)}function xd(t,e,n,i,r,s){g0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Tp(e,n,!1),wi(t,e,s);i=e.stateNode,TS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&Tp(e,n,!0),e.child}function v0(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),eh(t,e.containerInfo)}function zp(t,e,n,i,r){return Ls(),Yf(r),e.flags|=256,$t(t,e,n,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ht,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=yd,t):lh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lh(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&Yf(i),Is(e,t.child,null,n),t=lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=eu(Error(ne(422))),Ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sc({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=yd,s);if(!(e.mode&1))return Ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=eu(s,i,void 0),Ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),jn(i,t,r,-1))}return ph(),i=eu(Error(ne(421))),Ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=qi(r.nextSibling),mn=e,dt=!0,kn=null,t!==null&&(Tn[wn++]=gi,Tn[wn++]=vi,Tn[wn++]=Dr,gi=t.id,vi=t.overflow,Dr=e),e=lh(e,i.children),e.flags|=4096,e)}function Hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pd(t.return,e,n)}function tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function x0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hp(t,n,e);else if(t.tag===19)Hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tu(e,!0,n,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:v0(e),Ls();break;case 5:Wv(e);break;case 1:sn(e.type)&&Vl(e);break;case 4:eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?_0(t,e,n):(rt(ht,ht.current&1),t=wi(t,e,n),t!==null?t.sibling:null);rt(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return x0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,m0(t,e,n)}return wi(t,e,n)}var y0,Md,S0,M0;y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};S0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ti.current);var s=null;switch(n){case"input":r=ju(t,r),i=ju(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=$u(t,r),i=$u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zl)}qu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Go.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Go.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};M0=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CS(t,e,n){var i=e.pendingProps;switch($f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return sn(e.type)&&Hl(),kt(e),null;case 3:return i=e.stateNode,Ds(),ut(rn),ut(jt),nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Pd(kn),kn=null))),Md(t,e),kt(e),null;case 5:th(e);var r=wr(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)S0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return kt(e),null}if(t=wr(ti.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Co.length;r++)ct(Co[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Kh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Qh(i,s),ct("invalid",i)}qu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):Go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ma(i),Zh(i,s,!0);break;case"textarea":Ma(i),Jh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Jo]=i,y0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ku(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Co.length;r++)ct(Co[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Kh(t,i),r=ju(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Qh(t,i),r=$u(t,i),ct("invalid",t);break;default:r=i}qu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(t,l):typeof l=="number"&&jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Lf(t,s,l,o))}switch(n){case"input":Ma(t),Zh(t,i,!1);break;case"textarea":Ma(t),Jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)M0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=wr(ta.current),wr(ti.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return kt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&hn!==null&&e.mode&1&&!(e.flags&128))zv(),Ls(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Zn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else kn!==null&&(Pd(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?wt===0&&(wt=3):ph())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ds(),Md(t,e),t===null&&Zo(e.stateNode.containerInfo),kt(e),null;case 10:return Zf(e.type._context),kt(e),null;case 17:return sn(e.type)&&Hl(),kt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Fs&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return kt(e),null}else 2*yt()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,rt(ht,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function RS(t,e){switch($f(e),e.tag){case 1:return sn(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),ut(rn),ut(jt),nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return th(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return Ds(),null;case 10:return Zf(e.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var Da=!1,Gt=!1,bS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Ed(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Vp=!1;function PS(t,e){if(od=Ol,t=Cv(),Wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},Ol=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,v=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Fn(e.type,y),v);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=Vp,Vp=!1,_}function ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ed(e,n,s)}r=r.next}while(r!==i)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E0(t){var e=t.alternate;e!==null&&(t.alternate=null,E0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Jo],delete e[ud],delete e[fS],delete e[hS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T0(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Lt=null,On=!1;function Pi(t,e,n){for(n=n.child;n!==null;)w0(t,e,n),n=n.sibling}function w0(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:Gt||vs(n,e);case 6:var i=Lt,r=On;Lt=null,Pi(t,e,n),Lt=i,On=r,Lt!==null&&(On?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(On?(t=Lt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Yo(t)):Yc(Lt,n.stateNode));break;case 4:i=Lt,r=On,Lt=n.stateNode.containerInfo,On=!0,Pi(t,e,n),Lt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ed(n,e,o),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Gt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Pi(t,e,n),Gt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(i){var r=BS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,On=!1;break e;case 3:Lt=a.stateNode.containerInfo,On=!0;break e;case 4:Lt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Lt===null)throw Error(ne(160));w0(s,o,r),Lt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}function A0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Yn(t),i&4){try{ko(3,t,t.return),xc(3,t)}catch(y){vt(t,t.return,y)}try{ko(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Ln(e,t),Yn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Ln(e,t),Yn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{jo(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yg(r,s),Ku(a,o);var c=Ku(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Jg(r,f):d==="dangerouslySetInnerHTML"?Zg(r,f):d==="children"?jo(r,f):Lf(r,d,f,c)}switch(a){case"input":Wu(r,s);break;case"textarea":qg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ss(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[Jo]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Ln(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Ln(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Ln(e,t),Yn(t);break;case 13:Ln(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(dh=yt())),i&4&&jp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||d,Ln(e,t),Gt=c):Ln(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(f=pe=d;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:ko(4,h,h.return);break;case 1:vs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:vs(h,h.return);break;case 22:if(h.memoizedState!==null){Xp(f);continue}}m!==null?(m.return=h,pe=m):Xp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qg("display",o))}catch(y){vt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){vt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,t),Yn(t),i&4&&jp(t);break;case 21:break;default:Ln(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jo(r,""),i.flags&=-33);var s=Gp(t);Ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Gp(t);wd(t,a,o);break;default:throw Error(ne(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NS(t,e,n){pe=t,C0(t)}function C0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Da;var c=Gt;if(Da=o,(Gt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?$p(r):l!==null?(l.return=o,pe=l):$p(r);for(;s!==null;)pe=s,C0(s),s=s.sibling;pe=r,Da=a,Gt=c}Wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Wp(t)}}function Wp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Gt||e.flags&512&&Td(e)}catch(h){vt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Xp(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function $p(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Td(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Td(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var LS=Math.ceil,Zl=Ci.ReactCurrentDispatcher,ch=Ci.ReactCurrentOwner,Cn=Ci.ReactCurrentBatchConfig,$e=0,Nt=null,Mt=null,It=0,dn=0,_s=lr(0),wt=0,sa=null,Fr=0,yc=0,uh=0,Bo=null,en=null,dh=0,Fs=1/0,fi=null,Ql=!1,Cd=null,Zi=null,Ua=!1,ji=null,Jl=0,zo=0,Rd=null,Ml=-1,El=0;function Yt(){return $e&6?yt():Ml!==-1?Ml:Ml=yt()}function Qi(t){return t.mode&1?$e&2&&It!==0?It&-It:mS.transition!==null?(El===0&&(El=dv()),El):(t=Je,t!==0||(t=window.event,t=t===void 0?16:_v(t.type)),t):1}function jn(t,e,n,i){if(50<zo)throw zo=0,Rd=null,Error(ne(185));la(t,n,i),(!($e&2)||t!==Nt)&&(t===Nt&&(!($e&2)&&(yc|=n),wt===4&&zi(t,It)),on(t,i),n===1&&$e===0&&!(e.mode&1)&&(Fs=yt()+500,gc&&cr()))}function on(t,e){var n=t.callbackNode;my(t,e);var i=Fl(t,t===Nt?It:0);if(i===0)n!==null&&np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&np(n),e===1)t.tag===0?pS(Yp.bind(null,t)):Ov(Yp.bind(null,t)),uS(function(){!($e&6)&&cr()}),n=null;else{switch(fv(i)){case 1:n=Of;break;case 4:n=cv;break;case 16:n=Ul;break;case 536870912:n=uv;break;default:n=Ul}n=U0(n,R0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R0(t,e){if(Ml=-1,El=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=Fl(t,t===Nt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=$e;$e|=2;var s=P0();(Nt!==t||It!==e)&&(fi=null,Fs=yt()+500,br(t,e));do try{US();break}catch(a){b0(t,a)}while(!0);Kf(),Zl.current=s,$e=r,Mt!==null?e=0:(Nt=null,It=0,e=wt)}if(e!==0){if(e===2&&(r=td(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=sa,br(t,0),zi(t,i),on(t,yt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!IS(r)&&(e=ec(t,i),e===2&&(s=td(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=sa,br(t,0),zi(t,i),on(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:_r(t,en,fi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=dh+500-yt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cd(_r.bind(null,t,en,fi),e);break}_r(t,en,fi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*LS(i/1960))-i,10<i){t.timeoutHandle=cd(_r.bind(null,t,en,fi),i);break}_r(t,en,fi);break;case 5:_r(t,en,fi);break;default:throw Error(ne(329))}}}return on(t,yt()),t.callbackNode===n?R0.bind(null,t):null}function bd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=ec(t,e),t!==2&&(e=en,en=n,e!==null&&Pd(e)),t}function Pd(t){en===null?en=t:en.push.apply(en,t)}function IS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~uh,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if($e&6)throw Error(ne(327));As();var e=Fl(t,0);if(!(e&1))return on(t,yt()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=td(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=sa,br(t,0),zi(t,e),on(t,yt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,en,fi),on(t,yt()),null}function fh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Fs=yt()+500,gc&&cr())}}function Or(t){ji!==null&&ji.tag===0&&!($e&6)&&As();var e=$e;$e|=1;var n=Cn.transition,i=Je;try{if(Cn.transition=null,Je=1,t)return t()}finally{Je=i,Cn.transition=n,$e=e,!($e&6)&&cr()}}function hh(){dn=_s.current,ut(_s)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch($f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:Ds(),ut(rn),ut(jt),nh();break;case 5:th(i);break;case 4:Ds();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:Zf(i.type._context);break;case 22:case 23:hh()}n=n.return}if(Nt=t,Mt=t=Ji(t.current,null),It=dn=e,wt=0,sa=null,uh=yc=Fr=0,en=Bo=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function b0(t,e){do{var n=Mt;try{if(Kf(),xl.current=Kl,ql){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Ur=0,Pt=Tt=pt=null,Oo=!1,na=0,ch.current=null,n===null||n.return===null){wt=1,sa=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Up(o);if(m!==null){m.flags&=-257,Fp(m,o,a,s,e),m.mode&1&&Dp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Dp(s,c,e),ph();break e}l=Error(ne(426))}}else if(dt&&a.mode&1){var v=Up(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Fp(v,o,a,s,e),Yf(Us(l,a));break e}}s=l=Us(l,a),wt!==4&&(wt=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=f0(s,l,e);Rp(s,u);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zi===null||!Zi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=h0(s,a,e);Rp(s,S);break e}}s=s.return}while(s!==null)}L0(n)}catch(N){e=N,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function P0(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function ph(){(wt===0||wt===3||wt===2)&&(wt=4),Nt===null||!(Fr&268435455)&&!(yc&268435455)||zi(Nt,It)}function ec(t,e){var n=$e;$e|=2;var i=P0();(Nt!==t||It!==e)&&(fi=null,br(t,e));do try{DS();break}catch(r){b0(t,r)}while(!0);if(Kf(),$e=n,Zl.current=i,Mt!==null)throw Error(ne(261));return Nt=null,It=0,wt}function DS(){for(;Mt!==null;)N0(Mt)}function US(){for(;Mt!==null&&!oy();)N0(Mt)}function N0(t){var e=D0(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?L0(t):Mt=e,ch.current=null}function L0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RS(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Mt=null;return}}else if(n=CS(n,e,dn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);wt===0&&(wt=5)}function _r(t,e,n){var i=Je,r=Cn.transition;try{Cn.transition=null,Je=1,FS(t,e,n,i)}finally{Cn.transition=r,Je=i}return null}function FS(t,e,n,i){do As();while(ji!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gy(t,s),t===Nt&&(Mt=Nt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,U0(Ul,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Je;Je=1;var a=$e;$e|=4,ch.current=null,PS(t,n),A0(n,t),nS(ad),Ol=!!od,ad=od=null,t.current=n,NS(n),ay(),$e=a,Je=o,Cn.transition=s}else t.current=n;if(Ua&&(Ua=!1,ji=t,Jl=r),s=t.pendingLanes,s===0&&(Zi=null),uy(n.stateNode),on(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Cd,Cd=null,t;return Jl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===Rd?zo++:(zo=0,Rd=t):zo=0,cr(),null}function As(){if(ji!==null){var t=fv(Jl),e=Cn.transition,n=Je;try{if(Cn.transition=null,Je=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Jl=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:ko(8,d,s)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var h=d.sibling,m=d.return;if(E0(d),d===c){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,pe=x;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xc(9,a)}}catch(N){vt(a,a.return,N)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if($e=r,cr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(dc,t)}catch{}i=!0}return i}finally{Je=n,Cn.transition=e}}return!1}function qp(t,e,n){e=Us(n,e),e=f0(t,e,1),t=Ki(t,e,1),e=Yt(),t!==null&&(la(t,1,e),on(t,e))}function vt(t,e,n){if(t.tag===3)qp(t,t,n);else for(;e!==null;){if(e.tag===3){qp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Us(n,t),t=h0(e,t,1),e=Ki(e,t,1),t=Yt(),e!==null&&(la(e,1,t),on(e,t));break}}e=e.return}}function OS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(It&n)===n&&(wt===4||wt===3&&(It&130023424)===It&&500>yt()-dh?br(t,0):uh|=n),on(t,e)}function I0(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=Yt();t=Ti(t,e),t!==null&&(la(t,e,n),on(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I0(t,n)}function BS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),I0(t,n)}var D0;D0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,AS(t,e,n);nn=!!(t.flags&131072)}else nn=!1,dt&&e.flags&1048576&&kv(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=Ns(e,jt.current);ws(e,n),r=rh(null,e,i,t,r,n);var s=sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jf(e),r.updater=_c,e.stateNode=r,r._reactInternals=e,gd(e,i,t,n),e=xd(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Xf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),t=Fn(i,t),r){case 0:e=_d(null,e,i,t,n);break e;case 1:e=Bp(null,e,i,t,n);break e;case 11:e=Op(null,e,i,t,n);break e;case 14:e=kp(null,e,i,Fn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),_d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Bp(t,e,i,r,n);case 3:e:{if(v0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jv(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(ne(423)),e),e=zp(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(ne(424)),e),e=zp(t,e,i,n,r);break e}else for(hn=qi(e.stateNode.containerInfo.firstChild),mn=e,dt=!0,kn=null,n=Vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=wi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Wv(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ld(i,r)?o=null:s!==null&&ld(i,s)&&(e.flags|=32),g0(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&hd(e),null;case 13:return _0(t,e,n);case 4:return eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Op(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Wl,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!rn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=Rn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),kp(t,e,i,r,n);case 15:return p0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Sl(t,e),e.tag=1,sn(i)?(t=!0,Vl(e)):t=!1,ws(e,n),d0(e,i,r),gd(e,i,r,n),xd(null,e,i,!0,t,n);case 19:return x0(t,e,n);case 22:return m0(t,e,n)}throw Error(ne(156,e.tag))};function U0(t,e){return lv(t,e)}function zS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new zS(t,e,n,i)}function mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HS(t){if(typeof t=="function")return mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===Uf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")mh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return Pr(n.children,r,s,e);case If:o=8,r|=8;break;case zu:return t=An(12,n,e,r|2),t.elementType=zu,t.lanes=s,t;case Hu:return t=An(13,n,e,r),t.elementType=Hu,t.lanes=s,t;case Vu:return t=An(19,n,e,r),t.elementType=Vu,t.lanes=s,t;case Wg:return Sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gg:o=10;break e;case jg:o=9;break e;case Df:o=11;break e;case Uf:o=14;break e;case Oi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Sc(t,e,n,i){return t=An(22,t,i,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gh(t,e,n,i,r,s,o,a,l){return t=new VS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(s),t}function GS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function F0(t){if(!t)return rr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(sn(n))return Fv(t,n,e)}return e}function O0(t,e,n,i,r,s,o,a,l){return t=gh(n,i,!0,t,r,s,o,a,l),t.context=F0(null),n=t.current,i=Yt(),r=Qi(n),s=yi(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,la(t,r,i),on(t,i),t}function Mc(t,e,n,i){var r=e.current,s=Yt(),o=Qi(r);return n=F0(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,o),t!==null&&(jn(t,r,o,s),_l(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vh(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function jS(){return null}var k0=typeof reportError=="function"?reportError:function(t){console.error(t)};function _h(t){this._internalRoot=t}Ec.prototype.render=_h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Mc(t,e,null,null)};Ec.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Mc(null,t,null,null)}),e[Ei]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&vv(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function WS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(o);s.call(c)}}var o=O0(e,i,t,0,null,!1,!1,"",Zp);return t._reactRootContainer=o,t[Ei]=o.current,Zo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tc(l);a.call(c)}}var l=gh(t,0,!1,null,null,!1,!1,"",Zp);return t._reactRootContainer=l,t[Ei]=l.current,Zo(t.nodeType===8?t.parentNode:t),Or(function(){Mc(e,l,n,i)}),l}function wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}Mc(e,o,t,r)}else o=WS(n,e,t,r,i);return tc(o)}hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(kf(e,n|1),on(e,yt()),!($e&6)&&(Fs=yt()+500,cr()))}break;case 13:Or(function(){var i=Ti(t,1);if(i!==null){var r=Yt();jn(i,t,1,r)}}),vh(t,1)}};Bf=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=Yt();jn(e,t,134217728,n)}vh(t,134217728)}};pv=function(t){if(t.tag===13){var e=Qi(t),n=Ti(t,e);if(n!==null){var i=Yt();jn(n,t,e,i)}vh(t,e)}};mv=function(){return Je};gv=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Qu=function(t,e,n){switch(e){case"input":if(Wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mc(i);if(!r)throw Error(ne(90));$g(i),Wu(i,r)}}}break;case"textarea":qg(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};nv=fh;iv=Or;var XS={usingClientEntryPoint:!1,Events:[ua,fs,mc,ev,tv,fh]},fo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ov(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||jS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{dc=Fa.inject($S),ei=Fa}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(ne(200));return GS(t,e,null,n)};_n.createRoot=function(t,e){if(!xh(t))throw Error(ne(299));var n=!1,i="",r=k0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gh(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Zo(t.nodeType===8?t.parentNode:t),new _h(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=ov(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Or(t)};_n.hydrate=function(t,e,n){if(!Tc(e))throw Error(ne(200));return wc(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=k0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O0(e,null,t,1,n??null,r,!1,s,o),t[Ei]=e.current,Zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ec(e)};_n.render=function(t,e,n){if(!Tc(e))throw Error(ne(200));return wc(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(ne(40));return t._reactRootContainer?(Or(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};_n.unstable_batchedUpdates=fh;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return wc(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),Bg.exports=_n;var YS=Bg.exports,z0,Qp=YS;z0=Qp.createRoot,Qp.hydrateRoot;const qS=1920,KS=1080;function H0({children:t,className:e=""}){const n=te.useRef(null),[i,r]=te.useState(0);return te.useLayoutEffect(()=>{const s=n.current,o=()=>r(Math.min(s.clientWidth/qS,s.clientHeight/KS));o();const a=new ResizeObserver(o);return a.observe(s),()=>a.disconnect()},[]),p.jsx("div",{className:"stage-fit",ref:n,children:p.jsx("div",{className:`stage ${e}`,style:{transform:`translate(-50%, -50%) scale(${i})`},children:t})})}function ZS({reduced:t}){return p.jsxs("div",{className:"screen s0",children:[p.jsx("h1",{className:"pixel s0-title",children:"One Woman Show"}),p.jsx("p",{className:`pixel s0-start ${t?"":"blink"}`,children:"Press start"}),p.jsx("p",{className:"pixel s0-meta",children:"JUVAII · UZH · 04.11.2026"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="170",QS=0,Jp=1,JS=2,V0=1,Sh=2,di=3,sr=0,an=1,pi=2,er=0,Cs=1,em=2,tm=3,nm=4,eM=5,Sr=100,tM=101,nM=102,iM=103,rM=104,sM=200,oM=201,aM=202,lM=203,Nd=204,Ld=205,cM=206,uM=207,dM=208,fM=209,hM=210,pM=211,mM=212,gM=213,vM=214,Id=0,Dd=1,Ud=2,Os=3,Fd=4,Od=5,kd=6,Bd=7,Mh=0,_M=1,xM=2,tr=0,yM=1,SM=2,MM=3,EM=4,TM=5,wM=6,AM=7,G0=300,ks=301,Bs=302,zd=303,Hd=304,Ac=306,Vd=1e3,Ar=1001,Gd=1002,gn=1003,CM=1004,Oa=1005,Qn=1006,ru=1007,Cr=1008,Ai=1009,j0=1010,W0=1011,oa=1012,Eh=1013,kr=1014,Jn=1015,fa=1016,Th=1017,wh=1018,zs=1020,X0=35902,$0=1021,Y0=1022,Hn=1023,q0=1024,K0=1025,Rs=1026,Hs=1027,Ah=1028,Ch=1029,Z0=1030,Rh=1031,bh=1033,wl=33776,Al=33777,Cl=33778,Rl=33779,jd=35840,Wd=35841,Xd=35842,$d=35843,Yd=36196,qd=37492,Kd=37496,Zd=37808,Qd=37809,Jd=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,of=37816,af=37817,lf=37818,cf=37819,uf=37820,df=37821,bl=36492,ff=36494,hf=36495,Q0=36283,pf=36284,mf=36285,gf=36286,RM=3200,bM=3201,J0=0,PM=1,Hi="",En="srgb",qs="srgb-linear",Cc="linear",et="srgb",Xr=7680,im=519,NM=512,LM=513,IM=514,e_=515,DM=516,UM=517,FM=518,OM=519,rm=35044,sm="300 es",_i=2e3,nc=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=Math.PI/180,vf=180/Math.PI;function ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function kM(t,e){return(t%e+e)%e}function ou(t,e,n){return(1-n)*t+n*e}function ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,n,i,r,s,o,a,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],y=r[0],v=r[3],u=r[6],g=r[1],x=r[4],S=r[7],N=r[2],C=r[5],R=r[8];return s[0]=o*y+a*g+l*N,s[3]=o*v+a*x+l*C,s[6]=o*u+a*S+l*R,s[1]=c*y+d*g+f*N,s[4]=c*v+d*x+f*C,s[7]=c*u+d*S+f*R,s[2]=h*y+m*g+_*N,s[5]=h*v+m*x+_*C,s[8]=h*u+m*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new De;function t_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ic(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BM(){const t=ic("canvas");return t.style.display="block",t}const om={};function Ro(t){t in om||(om[t]=!0,console.warn(t))}function zM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function HM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function VM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===et&&(t.r=Si(t.r),t.g=Si(t.g),t.b=Si(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===et&&(t.r=bs(t.r),t.g=bs(t.g),t.b=bs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Hi?Cc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const am=[.64,.33,.3,.6,.15,.06],lm=[.2126,.7152,.0722],cm=[.3127,.329],um=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[qs]:{primaries:am,whitePoint:cm,transfer:Cc,toXYZ:um,fromXYZ:dm,luminanceCoefficients:lm,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:am,whitePoint:cm,transfer:et,toXYZ:um,fromXYZ:dm,luminanceCoefficients:lm,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let $r;class GM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=ic("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ic("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Si(n[i]/255)*255):n[i]=Si(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jM=0;class n_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?GM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WM=0;class qt extends Ks{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Ar,r=Ar,s=Qn,o=Cr,a=Hn,l=Ai,c=qt.DEFAULT_ANISOTROPY,d=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=ha(),this.name="",this.source=new n_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=G0;qt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],y=l[2],v=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+v)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(m+1)/2,N=(u+1)/2,C=(d+h)/4,R=(f+y)/4,b=(_+v)/4;return x>S&&x>N?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=R/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=b/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=R/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-_)*(v-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(f-y)/g,this.z=(h-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XM extends Ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new n_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends XM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class i_ extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $M extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==m||d!==_){let v=1-a;const u=l*h+c*m+d*_+f*y,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const N=Math.sqrt(x),C=Math.atan2(N,u*g);v=Math.sin(v*C)/N,a=Math.sin(a*C)/N}const S=a*g;if(l=l*v+h*S,c=c*v+m*S,d=d*v+_*S,f=f*v+y*S,v===1-a){const N=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=N,c*=N,d*=N,f*=N}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*m-c*h,e[n+1]=l*_+d*h+c*f-a*m,e[n+2]=c*_+d*m+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new j,fm=new pa;class Vr{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Ba.subVectors(this.max,po),Yr.subVectors(e.a,po),qr.subVectors(e.b,po),Kr.subVectors(e.c,po),Ni.subVectors(qr,Yr),Li.subVectors(Kr,qr),dr.subVectors(Yr,Kr);let n=[0,-Ni.z,Ni.y,0,-Li.z,Li.y,0,-dr.z,dr.y,Ni.z,0,-Ni.x,Li.z,0,-Li.x,dr.z,0,-dr.x,-Ni.y,Ni.x,0,-Li.y,Li.x,0,-dr.y,dr.x,0];return!uu(n,Yr,qr,Kr,Ba)||(n=[1,0,0,0,1,0,0,0,1],!uu(n,Yr,qr,Kr,Ba))?!1:(za.crossVectors(Ni,Li),n=[za.x,za.y,za.z],uu(n,Yr,qr,Kr,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new j,new j,new j,new j,new j,new j,new j,new j],In=new j,ka=new Vr,Yr=new j,qr=new j,Kr=new j,Ni=new j,Li=new j,dr=new j,po=new j,Ba=new j,za=new j,fr=new j;function uu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fr.fromArray(t,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=n.dot(fr),d=i.dot(fr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const YM=new Vr,mo=new j,du=new j;class ma{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):YM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(du)),this.expandByPoint(mo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new j,fu=new j,Ha=new j,Ii=new j,hu=new j,Va=new j,pu=new j;class qM{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(fu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=Ii.dot(this.direction),l=-Ii.dot(Ha),c=Ii.lengthSq(),d=Math.abs(1-o*o);let f,h,m,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fu).addScaledVector(Ha,h),m}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){hu.subVectors(n,e),Va.subVectors(i,e),pu.crossVectors(hu,Va);let o=this.direction.dot(pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Ii,Va));if(l<0)return null;const c=a*this.direction.dot(hu.cross(Ii));if(c<0||l+c>o)return null;const d=-a*Ii.dot(pu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,n,i,r,s,o,a,l,c,d,f,h,m,_,y,v){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,m,_,y,v)}set(e,n,i,r,s,o,a,l,c,d,f,h,m,_,y,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=o*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KM,e,ZM)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Di.crossVectors(i,cn),Di.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Di.crossVectors(i,cn)),Di.normalize(),Ga.crossVectors(cn,Di),r[0]=Di.x,r[4]=Ga.x,r[8]=cn.x,r[1]=Di.y,r[5]=Ga.y,r[9]=cn.y,r[2]=Di.z,r[6]=Ga.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],y=i[6],v=i[10],u=i[14],g=i[3],x=i[7],S=i[11],N=i[15],C=r[0],R=r[4],b=r[8],w=r[12],E=r[1],L=r[5],B=r[9],O=r[13],k=r[2],W=r[6],z=r[10],J=r[14],P=r[3],Y=r[7],q=r[11],oe=r[15];return s[0]=o*C+a*E+l*k+c*P,s[4]=o*R+a*L+l*W+c*Y,s[8]=o*b+a*B+l*z+c*q,s[12]=o*w+a*O+l*J+c*oe,s[1]=d*C+f*E+h*k+m*P,s[5]=d*R+f*L+h*W+m*Y,s[9]=d*b+f*B+h*z+m*q,s[13]=d*w+f*O+h*J+m*oe,s[2]=_*C+y*E+v*k+u*P,s[6]=_*R+y*L+v*W+u*Y,s[10]=_*b+y*B+v*z+u*q,s[14]=_*w+y*O+v*J+u*oe,s[3]=g*C+x*E+S*k+N*P,s[7]=g*R+x*L+S*W+N*Y,s[11]=g*b+x*B+S*z+N*q,s[15]=g*w+x*O+S*J+N*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],y=e[7],v=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+v*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],y=e[13],v=e[14],u=e[15],g=f*v*c-y*h*c+y*l*m-a*v*m-f*l*u+a*h*u,x=_*h*c-d*v*c-_*l*m+o*v*m+d*l*u-o*h*u,S=d*y*c-_*f*c+_*a*m-o*y*m-d*a*u+o*f*u,N=_*f*l-d*y*l-_*a*h+o*y*h+d*a*v-o*f*v,C=n*g+i*x+r*S+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=g*R,e[1]=(y*h*s-f*v*s-y*r*m+i*v*m+f*r*u-i*h*u)*R,e[2]=(a*v*s-y*l*s+y*r*c-i*v*c-a*r*u+i*l*u)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*R,e[4]=x*R,e[5]=(d*v*s-_*h*s+_*r*m-n*v*m-d*r*u+n*h*u)*R,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*u-n*l*u)*R,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*m+n*l*m)*R,e[8]=S*R,e[9]=(_*f*s-d*y*s-_*i*m+n*y*m+d*i*u-n*f*u)*R,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*R,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*m-n*a*m)*R,e[12]=N*R,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*v+n*f*v)*R,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*v-n*a*v)*R,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,_=s*f,y=o*d,v=o*f,u=a*f,g=l*c,x=l*d,S=l*f,N=i.x,C=i.y,R=i.z;return r[0]=(1-(y+u))*N,r[1]=(m+S)*N,r[2]=(_-x)*N,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(h+u))*C,r[6]=(v+g)*C,r[7]=0,r[8]=(_+x)*R,r[9]=(v-g)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),a=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,d=1/o,f=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===_i)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===nc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*d;let _,y;if(a===_i)_=(o+s)*f,y=-2*f;else if(a===nc)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new j,Dn=new st,KM=new j(0,0,0),ZM=new j(1,1,1),Di=new j,Ga=new j,cn=new j,hm=new st,pm=new pa;class ni{constructor(e=0,n=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class r_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const mm=new j,Qr=new pa,ai=new st,ja=new j,go=new j,JM=new j,eE=new pa,gm=new j(1,0,0),vm=new j(0,1,0),_m=new j(0,0,1),xm={type:"added"},tE={type:"removed"},Jr={type:"childadded",child:null},mu={type:"childremoved",child:null};class Dt extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new j,n=new ni,i=new pa,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new De}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,n){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(go,ja,this.up):ai.lookAt(ja,go,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(ai),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tE),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,JM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,eE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new j(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new j,li=new j,gu=new j,ci=new j,es=new j,ts=new j,ym=new j,vu=new j,_u=new j,xu=new j,yu=new _t,Su=new _t,Mu=new _t;class zn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),li.subVectors(i,n),gu.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(li),l=Un.dot(gu),c=li.dot(li),d=li.dot(gu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return yu.setScalar(0),Su.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(e,n),Su.fromBufferAttribute(e,i),Mu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yu,s.x),o.addScaledVector(Su,s.y),o.addScaledVector(Mu,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),li.subVectors(e,n),Un.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),vu.subVectors(e,i);const l=es.dot(vu),c=ts.dot(vu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const d=es.dot(_u),f=ts.dot(_u);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(es,o);xu.subVectors(e,s);const m=es.dot(xu),_=ts.dot(xu);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ts,a);const v=d*_-m*f;if(v<=0&&f-d>=0&&m-_>=0)return ym.subVectors(s,r),a=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(ym,a);const u=1/(v+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=kM(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Eu(o,s,e+1/3),this.g=Eu(o,s,e),this.b=Eu(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Xe.fromWorkingColorSpace(zt.copy(this),e),Math.round(tn(zt.r*255,0,255))*65536+Math.round(tn(zt.g*255,0,255))*256+Math.round(tn(zt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=En){Xe.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Wa);const i=ou(Ui.h,Wa.h,n),r=ou(Ui.s,Wa.s,n),s=ou(Ui.l,Wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Be;Be.NAMES=s_;let nE=0;class Zs extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=ha(),this.name="",this.blending=Cs,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Ld,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ld&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class o_ extends Zs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new j,Xa=new Ze;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rm,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),e}}class a_ extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class l_ extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nr extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iE=0;const Mn=new st,Tu=new Dt,ns=new j,un=new Vr,vo=new Vr,bt=new j;class Gr extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?l_:a_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nr(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(un.min,vo.min),un.expandByPoint(bt),bt.addVectors(un.max,vo.max),un.expandByPoint(bt)):(un.expandByPoint(vo.min),un.expandByPoint(vo.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)bt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),bt.add(ns)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new j,l[b]=new j;const c=new j,d=new j,f=new j,h=new Ze,m=new Ze,_=new Ze,y=new j,v=new j;function u(b,w,E){c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),_.fromBufferAttribute(s,E),d.sub(c),f.sub(c),m.sub(h),_.sub(h);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),v.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[b].add(y),a[w].add(y),a[E].add(y),l[b].add(v),l[w].add(v),l[E].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,w=g.length;b<w;++b){const E=g[b],L=E.start,B=E.count;for(let O=L,k=L+B;O<k;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new j,S=new j,N=new j,C=new j;function R(b){N.fromBufferAttribute(r,b),C.copy(N);const w=a[b];x.copy(w),x.sub(N.multiplyScalar(N.dot(w))).normalize(),S.crossVectors(C,w);const L=S.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,L)}for(let b=0,w=g.length;b<w;++b){const E=g[b],L=E.start,B=E.count;for(let O=L,k=L+B;O<k;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,f=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new Wn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new st,hr=new qM,$a=new ma,Mm=new j,Ya=new j,qa=new j,Ka=new j,wu=new j,Za=new j,Em=new j,Qa=new j;class pn extends Dt{constructor(e=new Gr,n=new o_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(wu.fromBufferAttribute(f,e),o?Za.addScaledVector(wu,d):Za.addScaledVector(wu.sub(n),d))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!($a.containsPoint(hr.origin)===!1&&(hr.intersectSphere($a,Mm)===null||hr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Sm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const v=h[_],u=o[v.materialIndex],g=Math.max(v.start,m.start),x=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let S=g,N=x;S<N;S+=3){const C=a.getX(S),R=a.getX(S+1),b=a.getX(S+2);r=Ja(this,u,e,i,c,d,f,C,R,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const g=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);r=Ja(this,o,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const v=h[_],u=o[v.materialIndex],g=Math.max(v.start,m.start),x=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=g,N=x;S<N;S+=3){const C=S,R=S+1,b=S+2;r=Ja(this,u,e,i,c,d,f,C,R,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const g=v,x=v+1,S=v+2;r=Ja(this,o,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function rE(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===sr,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ya),t.getVertexPosition(l,qa),t.getVertexPosition(c,Ka);const d=rE(t,e,n,i,Ya,qa,Ka,Em);if(d){const f=new j;zn.getBarycoord(Em,Ya,qa,Ka,f),r&&(d.uv=zn.getInterpolatedAttribute(r,a,l,c,f,new Ze)),s&&(d.uv1=zn.getInterpolatedAttribute(s,a,l,c,f,new Ze)),o&&(d.normal=zn.getInterpolatedAttribute(o,a,l,c,f,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};zn.getNormal(Ya,qa,Ka,h.normal),d.face=h,d.barycoord=f}return d}class Qs extends Gr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nr(c,3)),this.setAttribute("normal",new Nr(d,3)),this.setAttribute("uv",new Nr(f,2));function _(y,v,u,g,x,S,N,C,R,b,w){const E=S/R,L=N/b,B=S/2,O=N/2,k=C/2,W=R+1,z=b+1;let J=0,P=0;const Y=new j;for(let q=0;q<z;q++){const oe=q*L-O;for(let xe=0;xe<W;xe++){const ze=xe*E-B;Y[y]=ze*g,Y[v]=oe*x,Y[u]=k,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[v]=0,Y[u]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(xe/R),f.push(1-q/b),J+=1}}for(let q=0;q<b;q++)for(let oe=0;oe<R;oe++){const xe=h+oe+W*q,ze=h+oe+W*(q+1),$=h+(oe+1)+W*(q+1),ie=h+(oe+1)+W*q;l.push(xe,ze,ie),l.push(ze,$,ie),P+=6}a.addGroup(m,P,w),m+=P,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function sE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const oE={clone:Vs,merge:Wt};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends Zs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=sE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class u_ extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new j,Tm=new Ze,wm=new Ze;class fn extends u_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,n){return this.getViewBounds(e,Tm,wm),n.subVectors(wm,Tm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(su*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class cE extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new fn(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new fn(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new fn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new fn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new fn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class d_ extends qt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uE extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new d_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qs(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:er});s.uniforms.tEquirect.value=n;const o=new pn(r,s),a=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Qn),new cE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Au=new j,dE=new j,fE=new De;class xr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Au.subVectors(i,n).cross(dE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fE.getNormalMatrix(e),r=this.coplanarPoint(Au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new ma,el=new j;class Ph{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],y=r[10],v=r[11],u=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,v-m,S-u).normalize(),i[1].setComponents(l+s,h+c,v+m,S+u).normalize(),i[2].setComponents(l+o,h+d,v+_,S+g).normalize(),i[3].setComponents(l-o,h-d,v-_,S-g).normalize(),i[4].setComponents(l-a,h-f,v-y,S-x).normalize(),n===_i)i[5].setComponents(l+a,h+f,v+y,S+x).normalize();else if(n===nc)i[5].setComponents(a,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hE(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],y=f[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const y=f[m];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Js extends Gr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,m=[],_=[],y=[],v=[];for(let u=0;u<d;u++){const g=u*h-o;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-g,0),y.push(0,0,1),v.push(x/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,S=g+c*(u+1),N=g+1+c*(u+1),C=g+1+c*u;m.push(x,S,C),m.push(S,N,C)}this.setIndex(m),this.setAttribute("position",new Nr(_,3)),this.setAttribute("normal",new Nr(y,3)),this.setAttribute("uv",new Nr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
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
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
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
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,OE=`#define PI 3.141592653589793
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
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BE=`vec3 transformedNormal = objectNormal;
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
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
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
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d1=`PhysicalMaterial material;
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
#endif`,f1=`struct PhysicalMaterial {
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
}`,h1=`
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E1=`#if defined( USE_POINTS_UV )
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
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
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
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
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
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q1=`float getShadowMask() {
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
}`,J1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
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
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
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
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
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
}`,yT=`#if DEPTH_PACKING == 3200
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
}`,ST=`#define DISTANCE
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
}`,MT=`#define DISTANCE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
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
}`,AT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,RT=`uniform vec3 diffuse;
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
}`,bT=`#define LAMBERT
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
}`,PT=`#define LAMBERT
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
}`,NT=`#define MATCAP
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
}`,LT=`#define MATCAP
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
}`,IT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
}`,UT=`#define PHONG
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
}`,FT=`#define PHONG
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
}`,OT=`#define STANDARD
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
}`,kT=`#define STANDARD
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
}`,BT=`#define TOON
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
}`,zT=`#define TOON
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
}`,HT=`uniform float size;
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
}`,VT=`uniform vec3 diffuse;
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
}`,GT=`#include <common>
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
}`,jT=`uniform vec3 color;
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
}`,WT=`uniform float rotation;
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
}`,XT=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:vE,alphatest_fragment:_E,alphatest_pars_fragment:xE,aomap_fragment:yE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:EE,begin_vertex:TE,beginnormal_vertex:wE,bsdfs:AE,iridescence_fragment:CE,bumpmap_pars_fragment:RE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:PE,clipping_planes_pars_vertex:NE,clipping_planes_vertex:LE,color_fragment:IE,color_pars_fragment:DE,color_pars_vertex:UE,color_vertex:FE,common:OE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:BE,displacementmap_pars_vertex:zE,displacementmap_vertex:HE,emissivemap_fragment:VE,emissivemap_pars_fragment:GE,colorspace_fragment:jE,colorspace_pars_fragment:WE,envmap_fragment:XE,envmap_common_pars_fragment:$E,envmap_pars_fragment:YE,envmap_pars_vertex:qE,envmap_physical_pars_fragment:o1,envmap_vertex:KE,fog_vertex:ZE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:e1,gradientmap_pars_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:r1,lights_pars_begin:s1,lights_toon_fragment:a1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:u1,lights_physical_fragment:d1,lights_physical_pars_fragment:f1,lights_fragment_begin:h1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:v1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:S1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:w1,morphinstance_vertex:A1,morphcolor_vertex:C1,morphnormal_vertex:R1,morphtarget_pars_vertex:b1,morphtarget_vertex:P1,normal_fragment_begin:N1,normal_fragment_maps:L1,normal_pars_fragment:I1,normal_pars_vertex:D1,normal_vertex:U1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:z1,opaque_fragment:H1,packing:V1,premultiplied_alpha_fragment:G1,project_vertex:j1,dithering_fragment:W1,dithering_pars_fragment:X1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:K1,shadowmap_vertex:Z1,shadowmask_pars_fragment:Q1,skinbase_vertex:J1,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:rT,tonemapping_fragment:sT,tonemapping_pars_fragment:oT,transmission_fragment:aT,transmission_pars_fragment:lT,uv_pars_fragment:cT,uv_pars_vertex:uT,uv_vertex:dT,worldpos_vertex:fT,background_vert:hT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:vT,cube_frag:_T,depth_vert:xT,depth_frag:yT,distanceRGBA_vert:ST,distanceRGBA_frag:MT,equirect_vert:ET,equirect_frag:TT,linedashed_vert:wT,linedashed_frag:AT,meshbasic_vert:CT,meshbasic_frag:RT,meshlambert_vert:bT,meshlambert_frag:PT,meshmatcap_vert:NT,meshmatcap_frag:LT,meshnormal_vert:IT,meshnormal_frag:DT,meshphong_vert:UT,meshphong_frag:FT,meshphysical_vert:OT,meshphysical_frag:kT,meshtoon_vert:BT,meshtoon_frag:zT,points_vert:HT,points_frag:VT,shadow_vert:GT,shadow_frag:jT,sprite_vert:WT,sprite_frag:XT},le={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Kn={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Kn.physical={uniforms:Wt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const tl={r:0,b:0,g:0},mr=new ni,$T=new st;function YT(t,e,n,i,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function _(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function y(g){let x=!1;const S=_(g);S===null?u(a,l):S&&S.isColor&&(u(S,1),x=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Ac)?(d===void 0&&(d=new pn(new Qs(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Vs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),mr.copy(x.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(mr)),d.material.toneMapped=Xe.getTransfer(S.colorSpace)!==et,(f!==S||h!==S.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pn(new Js(2,2),new or({name:"BackgroundMaterial",uniforms:Vs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,x){g.getRGB(tl,c_(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:y,addToRenderList:v}}function qT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,L,B,O,k){let W=!1;const z=f(O,B,L);s!==z&&(s=z,c(s.object)),W=m(E,O,B,k),W&&_(E,O,B,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(E,L,B,O),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,L,B){const O=B.wireframe===!0;let k=i[E.id];k===void 0&&(k={},i[E.id]=k);let W=k[L.id];W===void 0&&(W={},k[L.id]=W);let z=W[O];return z===void 0&&(z=h(l()),W[O]=z),z}function h(E){const L=[],B=[],O=[];for(let k=0;k<n;k++)L[k]=0,B[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:E,attributes:{},index:null}}function m(E,L,B,O){const k=s.attributes,W=L.attributes;let z=0;const J=B.getAttributes();for(const P in J)if(J[P].location>=0){const q=k[P];let oe=W[P];if(oe===void 0&&(P==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),P==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function _(E,L,B,O){const k={},W=L.attributes;let z=0;const J=B.getAttributes();for(const P in J)if(J[P].location>=0){let q=W[P];q===void 0&&(P==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),P==="instanceColor"&&E.instanceColor&&(q=E.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),k[P]=oe,z++}s.attributes=k,s.attributesNum=z,s.index=O}function y(){const E=s.newAttributes;for(let L=0,B=E.length;L<B;L++)E[L]=0}function v(E){u(E,0)}function u(E,L){const B=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;B[E]=1,O[E]===0&&(t.enableVertexAttribArray(E),O[E]=1),k[E]!==L&&(t.vertexAttribDivisor(E,L),k[E]=L)}function g(){const E=s.newAttributes,L=s.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==E[B]&&(t.disableVertexAttribArray(B),L[B]=0)}function x(E,L,B,O,k,W,z){z===!0?t.vertexAttribIPointer(E,L,B,k,W):t.vertexAttribPointer(E,L,B,O,k,W)}function S(E,L,B,O){y();const k=O.attributes,W=B.getAttributes(),z=L.defaultAttributeValues;for(const J in W){const P=W[J];if(P.location>=0){let Y=k[J];if(Y===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor)),Y!==void 0){const q=Y.normalized,oe=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;const ze=xe.buffer,$=xe.type,ie=xe.bytesPerElement,me=$===t.INT||$===t.UNSIGNED_INT||Y.gpuType===Eh;if(Y.isInterleavedBufferAttribute){const ae=Y.data,Re=ae.stride,Ne=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let Oe=0;Oe<P.locationSize;Oe++)u(P.location+Oe,ae.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<P.locationSize;Oe++)v(P.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Oe=0;Oe<P.locationSize;Oe++)x(P.location+Oe,oe/P.locationSize,$,q,Re*ie,(Ne+oe/P.locationSize*Oe)*ie,me)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<P.locationSize;ae++)u(P.location+ae,Y.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<P.locationSize;ae++)v(P.location+ae);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ae=0;ae<P.locationSize;ae++)x(P.location+ae,oe/P.locationSize,$,q,oe*ie,oe/P.locationSize*ae*ie,me)}}else if(z!==void 0){const q=z[J];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(P.location,q);break;case 3:t.vertexAttrib3fv(P.location,q);break;case 4:t.vertexAttrib4fv(P.location,q);break;default:t.vertexAttrib1fv(P.location,q)}}}}g()}function N(){b();for(const E in i){const L=i[E];for(const B in L){const O=L[B];for(const k in O)d(O[k].object),delete O[k];delete L[B]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const B in L){const O=L[B];for(const k in O)d(O[k].object),delete O[k];delete L[B]}delete i[E.id]}function R(E){for(const L in i){const B=i[L];if(B[E.id]===void 0)continue;const O=B[E.id];for(const k in O)d(O[k].object),delete O[k];delete B[E.id]}}function b(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:v,disableUnusedAttributes:g}}function KT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];n.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y]*h[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ZT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Hn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ai&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Jn&&!b)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:N,maxSamples:C}}function QT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,y=f.clipIntersection,v=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!v)s?d(null):c();else{const g=s?0:i,x=g*4;let S=u.clippingState||null;l.value=S,S=d(_,h,x,m);for(let N=0;N!==x;++N)S[N]=n[N];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const y=f!==null?f.length:0;let v=null;if(y!==0){if(v=l.value,_!==!0||v===null){const u=m+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<u)&&(v=new Float32Array(u));for(let x=0,S=m;x!==y;++x,S+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(v,S),v[S+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function JT(t){let e=new WeakMap;function n(o,a){return a===zd?o.mapping=ks:a===Hd&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zd||a===Hd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class h_ extends u_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xs=4,Am=[.125,.215,.35,.446,.526,.582],Mr=20,Cu=new h_,Cm=new Be;let Ru=null,bu=0,Pu=0,Nu=!1;const yr=(1+Math.sqrt(5))/2,ss=1/yr,Rm=[new j(-yr,ss,0),new j(yr,ss,0),new j(-ss,0,yr),new j(ss,0,yr),new j(0,yr,-ss),new j(0,yr,ss),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ru=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,bu,Pu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:fa,format:Hn,colorSpace:qs,depthBuffer:!1},r=Pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(s)),this._blurMaterial=tw(s,e,n)}return r}_compileMaterial(e){const n=new pn(this._lodPlanes[0],e);this._renderer.compile(n,Cu)}_sceneToCubeUV(e,n,i,r){const a=new fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Cm),d.toneMapping=tr,d.autoClear=!1;const m=new o_({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new pn(new Qs,m);let y=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,y=!0):(m.color.copy(Cm),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;nl(r,g*x,u>2?x:0,x,x),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ks||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rm[(r-s-1)%Rm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new pn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mr-1),y=s/_,v=isFinite(s)?1+Math.floor(d*y):Mr;v>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Mr}`);const u=[];let g=0;for(let R=0;R<Mr;++R){const b=R/y,w=Math.exp(-b*b/2);u.push(w),R===0?g+=w:R<v&&(g+=2*w)}for(let R=0;R<u.length;R++)u[R]=u[R]/g;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[r],N=3*S*(r>x-xs?r-x+xs:0),C=4*(this._cubeSize-S);nl(n,N,C,3*S,2*S),l.setRenderTarget(n),l.render(f,Cu)}}function ew(t){const e=[],n=[],i=[];let r=t;const s=t-xs+1+Am.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-xs?l=Am[o-t+xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,y=3,v=2,u=1,g=new Float32Array(y*_*m),x=new Float32Array(v*_*m),S=new Float32Array(u*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,b=C>2?0:-1,w=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];g.set(w,y*_*C),x.set(h,v*_*C);const E=[C,C,C,C,C,C];S.set(E,u*_*C)}const N=new Gr;N.setAttribute("position",new Wn(g,y)),N.setAttribute("uv",new Wn(x,v)),N.setAttribute("faceIndex",new Wn(S,u)),e.push(N),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pm(t,e,n){const i=new Br(t,e,n);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tw(t,e,n){const i=new Float32Array(Mr),r=new j(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Nm(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Lm(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Nh(){return`

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
	`}function nw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zd||l===Hd,d=l===ks||l===Bs;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new bm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new bm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ro("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let v=0,u=y.length;v<u;v++)e.remove(y[v])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const y=m[_];for(let v=0,u=y.length;v<u;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let x=0,S=g.length;x<S;x+=3){const N=g[x+0],C=g[x+1],R=g[x+2];h.push(N,C,C,R,R,N)}}else if(_!==void 0){const g=_.array;y=_.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const N=x+0,C=x+1,R=x+2;h.push(N,C,C,R,R,N)}}else return;const v=new(t_(h)?l_:a_)(h,1);v.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,v)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function sw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,h*o,_),n.update(m,i,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let v=0;for(let u=0;u<_;u++)v+=m[u];n.update(v,i,1)}function f(h,m,_,y){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],y[u]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g]*y[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function ow(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aw(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),y===!0&&(x=3);let S=a.attributes.position.count*x,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*N*4*f),R=new i_(C,S,N,f);R.type=Jn,R.needsUpdate=!0;const b=x*4;for(let E=0;E<f;E++){const L=v[E],B=u[E],O=g[E],k=S*N*4*E;for(let W=0;W<L.count;W++){const z=W*b;m===!0&&(r.fromBufferAttribute(L,W),C[k+z+0]=r.x,C[k+z+1]=r.y,C[k+z+2]=r.z,C[k+z+3]=0),_===!0&&(r.fromBufferAttribute(B,W),C[k+z+4]=r.x,C[k+z+5]=r.y,C[k+z+6]=r.z,C[k+z+7]=0),y===!0&&(r.fromBufferAttribute(O,W),C[k+z+8]=r.x,C[k+z+9]=r.y,C[k+z+10]=r.z,C[k+z+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Ze(S,N)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function lw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class p_ extends qt{constructor(e,n,i,r,s,o,a,l,c,d=Rs){if(d!==Rs&&d!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Rs&&(i=kr),i===void 0&&d===Hs&&(i=zs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const m_=new qt,Im=new p_(1,1),g_=new i_,v_=new $M,__=new d_,Dm=[],Um=[],Fm=new Float32Array(16),Om=new Float32Array(9),km=new Float32Array(4);function eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dm[r];if(s===void 0&&(s=new Float32Array(r),Dm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rc(t,e){let n=Um[e];n===void 0&&(n=new Int32Array(e),Um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;km.set(i),t.uniformMatrix2fv(this.addr,!1,km),Rt(n,i)}}function pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Om.set(i),t.uniformMatrix3fv(this.addr,!1,Om),Rt(n,i)}}function mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Fm.set(i),t.uniformMatrix4fv(this.addr,!1,Fm),Rt(n,i)}}function gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function Tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Im.compareFunction=e_,s=Im):s=m_,n.setTexture2D(e||s,r)}function ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||v_,r)}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||__,r)}function Cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||g_,r)}function Rw(t){switch(t){case 5126:return cw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Sw;case 36295:return Mw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Cw}}function bw(t,e){t.uniform1fv(this.addr,e)}function Pw(t,e){const n=eo(e,this.size,2);t.uniform2fv(this.addr,n)}function Nw(t,e){const n=eo(e,this.size,3);t.uniform3fv(this.addr,n)}function Lw(t,e){const n=eo(e,this.size,4);t.uniform4fv(this.addr,n)}function Iw(t,e){const n=eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Dw(t,e){const n=eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Uw(t,e){const n=eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Fw(t,e){t.uniform1iv(this.addr,e)}function Ow(t,e){t.uniform2iv(this.addr,e)}function kw(t,e){t.uniform3iv(this.addr,e)}function Bw(t,e){t.uniform4iv(this.addr,e)}function zw(t,e){t.uniform1uiv(this.addr,e)}function Hw(t,e){t.uniform2uiv(this.addr,e)}function Vw(t,e){t.uniform3uiv(this.addr,e)}function Gw(t,e){t.uniform4uiv(this.addr,e)}function jw(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||m_,s[o])}function Ww(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||v_,s[o])}function Xw(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||__,s[o])}function $w(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||g_,s[o])}function Yw(t){switch(t){case 5126:return bw;case 35664:return Pw;case 35665:return Nw;case 35666:return Lw;case 35674:return Iw;case 35675:return Dw;case 35676:return Uw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return kw;case 35669:case 35673:return Bw;case 5125:return zw;case 36294:return Hw;case 36295:return Vw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return $w}}class qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Rw(n.type)}}class Kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Yw(n.type)}}class Zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function Bm(t,e){t.seq.push(e),t.map[e.id]=e}function Qw(t,e,n){const i=t.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),o=Lu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Bm(n,c===void 0?new qw(a,t,e):new Kw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Zw(a),Bm(n,f)),n=f}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Qw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Jw=37297;let eA=0;function tA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Hm=new De;function nA(t){Xe._getMatrix(Hm,Xe.workingColorSpace,t);const e=`mat3( ${Hm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Cc:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tA(t.getShaderSource(e),o)}else return r}function iA(t,e){const n=nA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rA(t,e){let n;switch(e){case yM:n="Linear";break;case SM:n="Reinhard";break;case MM:n="Cineon";break;case EM:n="ACESFilmic";break;case wM:n="AgX";break;case AM:n="Neutral";break;case TM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const il=new j;function sA(){Xe.getLuminanceCoefficients(il);const t=il.x.toFixed(4),e=il.y.toFixed(4),n=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function aA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bo(t){return t!==""}function Gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(t){return t.replace(cA,dA)}const uA=new Map;function dA(t,e){let n=Fe[e];if(n===void 0){const i=uA.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _f(n)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(fA,hA)}function hA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===V0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function mA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function vA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Mh:e="ENVMAP_BLENDING_MULTIPLY";break;case _M:e="ENVMAP_BLENDING_MIX";break;case xM:e="ENVMAP_BLENDING_ADD";break}return e}function _A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pA(n),c=mA(n),d=gA(n),f=vA(n),h=_A(n),m=oA(n),_=aA(s),y=r.createProgram();let v,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),u.length>0&&(u+=`
`)):(v=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),u=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Fe.tonemapping_pars_fragment:"",n.toneMapping!==tr?rA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,iA("linearToOutputTexel",n.outputColorSpace),sA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),o=_f(o),o=Gm(o,n),o=jm(o,n),a=_f(a),a=Gm(a,n),a=jm(a,n),o=Wm(o),a=Wm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+v+o,S=g+u+a,N=zm(r,r.VERTEX_SHADER,x),C=zm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,N),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(L){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(y).trim(),O=r.getShaderInfoLog(N).trim(),k=r.getShaderInfoLog(C).trim();let W=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,N,C);else{const J=Vm(r,N,"vertex"),P=Vm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+J+`
`+P)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||k==="")&&(z=!1);z&&(L.diagnostics={runnable:W,programLog:B,vertexShader:{log:O,prefix:v},fragmentShader:{log:k,prefix:u}})}r.deleteShader(N),r.deleteShader(C),b=new Pl(r,y),w=lA(r,y)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,Jw)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=C,this}let yA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MA(e),n.set(e,i)),i}}class MA{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}}function EA(t,e,n,i,r,s,o){const a=new r_,l=new SA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function v(w,E,L,B,O){const k=B.fog,W=O.geometry,z=w.isMeshStandardMaterial?B.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||z),P=J&&J.mapping===Ac?J.image.height:null,Y=_[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=q!==void 0?q.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let ze,$,ie,me;if(Y){const Qe=Kn[Y];ze=Qe.vertexShader,$=Qe.fragmentShader}else ze=w.vertexShader,$=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),me=l.getFragmentShaderID(w);const ae=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,ft=!!w.map,je=!!w.matcap,xt=!!J,F=!!w.aoMap,yn=!!w.lightMap,He=!!w.bumpMap,Ve=!!w.normalMap,Ae=!!w.displacementMap,ot=!!w.emissiveMap,we=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,H=w.clearcoat>0,Z=w.dispersion>0,ee=w.iridescence>0,K=w.sheen>0,Ee=w.transmission>0,ue=M&&!!w.anisotropyMap,ge=H&&!!w.clearcoatMap,We=H&&!!w.clearcoatNormalMap,re=H&&!!w.clearcoatRoughnessMap,ve=ee&&!!w.iridescenceMap,Ce=ee&&!!w.iridescenceThicknessMap,be=K&&!!w.sheenColorMap,_e=K&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,Ue=!!w.specularColorMap,nt=!!w.specularIntensityMap,I=Ee&&!!w.transmissionMap,ce=Ee&&!!w.thicknessMap,X=!!w.gradientMap,Q=!!w.alphaMap,he=w.alphaTest>0,de=!!w.alphaHash,Le=!!w.extensions;let gt=tr;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Ft={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:ze,fragmentShader:$,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:qs,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:je,envMap:xt,envMapMode:xt&&J.mapping,envMapCubeUVHeight:P,aoMap:F,lightMap:yn,bumpMap:He,normalMap:Ve,displacementMap:h&&Ae,emissiveMap:ot,normalMapObjectSpace:Ve&&w.normalMapType===PM,normalMapTangentSpace:Ve&&w.normalMapType===J0,metalnessMap:we,roughnessMap:A,anisotropy:M,anisotropyMap:ue,clearcoat:H,clearcoatMap:ge,clearcoatNormalMap:We,clearcoatRoughnessMap:re,dispersion:Z,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Ce,sheen:K,sheenColorMap:be,sheenRoughnessMap:_e,specularMap:Ge,specularColorMap:Ue,specularIntensityMap:nt,transmission:Ee,transmissionMap:I,thicknessMap:ce,gradientMap:X,opaque:w.transparent===!1&&w.blending===Cs&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:de,combine:w.combine,mapUv:ft&&y(w.map.channel),aoMapUv:F&&y(w.aoMap.channel),lightMapUv:yn&&y(w.lightMap.channel),bumpMapUv:He&&y(w.bumpMap.channel),normalMapUv:Ve&&y(w.normalMap.channel),displacementMapUv:Ae&&y(w.displacementMap.channel),emissiveMapUv:ot&&y(w.emissiveMap.channel),metalnessMapUv:we&&y(w.metalnessMap.channel),roughnessMapUv:A&&y(w.roughnessMap.channel),anisotropyMapUv:ue&&y(w.anisotropyMap.channel),clearcoatMapUv:ge&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:We&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(w.sheenRoughnessMap.channel),specularMapUv:Ge&&y(w.specularMap.channel),specularColorMapUv:Ue&&y(w.specularColorMap.channel),specularIntensityMapUv:nt&&y(w.specularIntensityMap.channel),transmissionMapUv:I&&y(w.transmissionMap.channel),thicknessMapUv:ce&&y(w.thicknessMap.channel),alphaMapUv:Q&&y(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ve||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(ft||Q),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&Xe.getTransfer(w.map.colorSpace)===et,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(w.emissiveMap.colorSpace)===et,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pi,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function u(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)E.push(L),E.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(g(E,w),x(E,w),E.push(t.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function g(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function x(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const E=_[w.type];let L;if(E){const B=Kn[E];L=oE.clone(B.uniforms)}else L=w.uniforms;return L}function N(w,E){let L;for(let B=0,O=d.length;B<O;B++){const k=d[B];if(k.cacheKey===E){L=k,++L.usedTimes;break}}return L===void 0&&(L=new xA(t,E,w,s),d.push(L)),L}function C(w){if(--w.usedTimes===0){const E=d.indexOf(w);d[E]=d[d.length-1],d.pop(),w.destroy()}}function R(w){l.remove(w)}function b(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:S,acquireProgram:N,releaseProgram:C,releaseShaderCache:R,programs:d,dispose:b}}function TA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,_,y,v){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:v},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=v),e++,u}function a(f,h,m,_,y,v){const u=o(f,h,m,_,y,v);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,_,y,v){const u=o(f,h,m,_,y,v);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||wA),i.length>1&&i.sort(h||$m),r.length>1&&r.sort(h||$m)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function AA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ym,t.set(i,[o])):r>=s.length?(o=new Ym,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function CA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Be};break;case"SpotLight":n={position:new j,direction:new j,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bA=0;function PA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NA(t){const e=new CA,n=RA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new st,o=new st;function a(c){let d=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,_=0,y=0,v=0,u=0,g=0,x=0,S=0,N=0,C=0,R=0;c.sort(PA);for(let w=0,E=c.length;w<E;w++){const L=c[w],B=L.color,O=L.intensity,k=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*O,f+=B.g*O,h+=B.b*O;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],O);R++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,P=n.get(L);P.shadowIntensity=J.intensity,P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=L.shadow.matrix,g++}i.directional[m]=z,m++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(B).multiplyScalar(O),z.distance=k,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[y]=z;const J=L.shadow;if(L.map&&(i.spotLightMap[N]=L.map,N++,J.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[y]=J.matrix,L.castShadow){const P=n.get(L);P.shadowIntensity=J.intensity,P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=W,S++}y++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=z,v++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const J=L.shadow,P=n.get(L);P.shadowIntensity=J.intensity,P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,P.shadowCameraNear=J.camera.near,P.shadowCameraFar=J.camera.far,i.pointShadow[_]=P,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=z,_++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(O),z.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[u]=z,u++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==m||b.pointLength!==_||b.spotLength!==y||b.rectAreaLength!==v||b.hemiLength!==u||b.numDirectionalShadows!==g||b.numPointShadows!==x||b.numSpotShadows!==S||b.numSpotMaps!==N||b.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,b.directionalLength=m,b.pointLength=_,b.spotLength=y,b.rectAreaLength=v,b.hemiLength=u,b.numDirectionalShadows=g,b.numPointShadows=x,b.numSpotShadows=S,b.numSpotMaps=N,b.numLightProbes=R,i.version=bA++)}function l(c,d){let f=0,h=0,m=0,_=0,y=0;const v=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),f++}else if(x.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),m++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(v),o.identity(),s.copy(x.matrixWorld),s.premultiply(v),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(v),h++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function qm(t){const e=new NA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qm(t),e.set(r,[a])):s>=o.length?(a=new qm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class IA extends Zs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=RM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DA extends Zs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
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
}`;function OA(t,e,n){let i=new Ph;const r=new Ze,s=new Ze,o=new _t,a=new IA({depthPacking:bM}),l=new DA,c={},d=n.maxTextureSize,f={[sr]:an,[an]:sr,[pi]:pi},h=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:UA,fragmentShader:FA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Gr;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new pn(_,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=V0;let u=this.type;this.render=function(C,R,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),B=t.state;B.setBlending(er),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=u!==di&&this.type===di,k=u===di&&this.type!==di;for(let W=0,z=C.length;W<z;W++){const J=C[W],P=J.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const Y=P.getFrameExtents();if(r.multiply(Y),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,P.mapSize.y=s.y)),P.map===null||O===!0||k===!0){const oe=this.type!==di?{minFilter:gn,magFilter:gn}:{};P.map!==null&&P.map.dispose(),P.map=new Br(r.x,r.y,oe),P.map.texture.name=J.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const q=P.getViewportCount();for(let oe=0;oe<q;oe++){const xe=P.getViewport(oe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),B.viewport(o),P.updateMatrices(J,oe),i=P.getFrustum(),S(R,b,P.camera,J,this.type)}P.isPointLightShadow!==!0&&this.type===di&&g(P,b),P.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(w,E,L)};function g(C,R){const b=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Br(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,b,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,b,m,y,null)}function x(C,R,b,w){let E=null;const L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)E=L;else if(E=b.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=E.uuid,O=R.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let W=k[O];W===void 0&&(W=E.clone(),k[O]=W,R.addEventListener("dispose",N)),E=W}if(E.visible=R.visible,E.wireframe=R.wireframe,w===di?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=t.properties.get(E);B.light=b}return E}function S(C,R,b,w,E){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===di)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const O=e.update(C),k=C.material;if(Array.isArray(k)){const W=O.groups;for(let z=0,J=W.length;z<J;z++){const P=W[z],Y=k[P.materialIndex];if(Y&&Y.visible){const q=x(C,Y,w,E);C.onBeforeShadow(t,C,R,b,O,q,P),t.renderBufferDirect(b,null,O,q,C,P),C.onAfterShadow(t,C,R,b,O,q,P)}}}else if(k.visible){const W=x(C,k,w,E);C.onBeforeShadow(t,C,R,b,O,W,null),t.renderBufferDirect(b,null,O,W,C,null),C.onAfterShadow(t,C,R,b,O,W,null)}}const B=C.children;for(let O=0,k=B.length;O<k;O++)S(B[O],R,b,w,E)}function N(C){C.target.removeEventListener("dispose",N);for(const b in c){const w=c[b],E=C.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const kA={[Id]:Dd,[Ud]:kd,[Fd]:Bd,[Os]:Od,[Dd]:Id,[kd]:Ud,[Bd]:Fd,[Od]:Os};function BA(t,e){function n(){let I=!1;const ce=new _t;let X=null;const Q=new _t(0,0,0,0);return{setMask:function(he){X!==he&&!I&&(t.colorMask(he,he,he,he),X=he)},setLocked:function(he){I=he},setClear:function(he,de,Le,gt,Ft){Ft===!0&&(he*=gt,de*=gt,Le*=gt),ce.set(he,de,Le,gt),Q.equals(ce)===!1&&(t.clearColor(he,de,Le,gt),Q.copy(ce))},reset:function(){I=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,X=null,Q=null,he=null;return{setReversed:function(de){if(ce!==de){const Le=e.get("EXT_clip_control");ce?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const gt=he;he=null,this.setClear(gt)}ce=de},getReversed:function(){return ce},setTest:function(de){de?ae(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(de){X!==de&&!I&&(t.depthMask(de),X=de)},setFunc:function(de){if(ce&&(de=kA[de]),Q!==de){switch(de){case Id:t.depthFunc(t.NEVER);break;case Dd:t.depthFunc(t.ALWAYS);break;case Ud:t.depthFunc(t.LESS);break;case Os:t.depthFunc(t.LEQUAL);break;case Fd:t.depthFunc(t.EQUAL);break;case Od:t.depthFunc(t.GEQUAL);break;case kd:t.depthFunc(t.GREATER);break;case Bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=de}},setLocked:function(de){I=de},setClear:function(de){he!==de&&(ce&&(de=1-de),t.clearDepth(de),he=de)},reset:function(){I=!1,X=null,Q=null,he=null,ce=!1}}}function r(){let I=!1,ce=null,X=null,Q=null,he=null,de=null,Le=null,gt=null,Ft=null;return{setTest:function(Qe){I||(Qe?ae(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!I&&(t.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Pn,ii){(X!==Qe||Q!==Pn||he!==ii)&&(t.stencilFunc(Qe,Pn,ii),X=Qe,Q=Pn,he=ii)},setOp:function(Qe,Pn,ii){(de!==Qe||Le!==Pn||gt!==ii)&&(t.stencilOp(Qe,Pn,ii),de=Qe,Le=Pn,gt=ii)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Ft!==Qe&&(t.clearStencil(Qe),Ft=Qe)},reset:function(){I=!1,ce=null,X=null,Q=null,he=null,de=null,Le=null,gt=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,m=[],_=null,y=!1,v=null,u=null,g=null,x=null,S=null,N=null,C=null,R=new Be(0,0,0),b=0,w=!1,E=null,L=null,B=null,O=null,k=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(P)[1]),z=J>=1):P.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),z=J>=2);let Y=null,q={};const oe=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),ze=new _t().fromArray(oe),$=new _t().fromArray(xe);function ie(I,ce,X,Q){const he=new Uint8Array(4),de=t.createTexture();t.bindTexture(I,de),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<X;Le++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return de}const me={};me[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(Os),He(!1),Ve(Jp),ae(t.CULL_FACE),F(er);function ae(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Re(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Ne(I,ce){return f[I]!==ce?(t.bindFramebuffer(I,ce),f[I]=ce,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Oe(I,ce){let X=m,Q=!1;if(I){X=h.get(ce),X===void 0&&(X=[],h.set(ce,X));const he=I.textures;if(X.length!==he.length||X[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Le=he.length;de<Le;de++)X[de]=t.COLOR_ATTACHMENT0+de;X.length=he.length,Q=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Q=!0);Q&&t.drawBuffers(X)}function ft(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const je={[Sr]:t.FUNC_ADD,[tM]:t.FUNC_SUBTRACT,[nM]:t.FUNC_REVERSE_SUBTRACT};je[iM]=t.MIN,je[rM]=t.MAX;const xt={[sM]:t.ZERO,[oM]:t.ONE,[aM]:t.SRC_COLOR,[Nd]:t.SRC_ALPHA,[hM]:t.SRC_ALPHA_SATURATE,[dM]:t.DST_COLOR,[cM]:t.DST_ALPHA,[lM]:t.ONE_MINUS_SRC_COLOR,[Ld]:t.ONE_MINUS_SRC_ALPHA,[fM]:t.ONE_MINUS_DST_COLOR,[uM]:t.ONE_MINUS_DST_ALPHA,[pM]:t.CONSTANT_COLOR,[mM]:t.ONE_MINUS_CONSTANT_COLOR,[gM]:t.CONSTANT_ALPHA,[vM]:t.ONE_MINUS_CONSTANT_ALPHA};function F(I,ce,X,Q,he,de,Le,gt,Ft,Qe){if(I===er){y===!0&&(Re(t.BLEND),y=!1);return}if(y===!1&&(ae(t.BLEND),y=!0),I!==eM){if(I!==v||Qe!==w){if((u!==Sr||S!==Sr)&&(t.blendEquation(t.FUNC_ADD),u=Sr,S=Sr),Qe)switch(I){case Cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.ONE,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,x=null,N=null,C=null,R.set(0,0,0),b=0,v=I,w=Qe}return}he=he||ce,de=de||X,Le=Le||Q,(ce!==u||he!==S)&&(t.blendEquationSeparate(je[ce],je[he]),u=ce,S=he),(X!==g||Q!==x||de!==N||Le!==C)&&(t.blendFuncSeparate(xt[X],xt[Q],xt[de],xt[Le]),g=X,x=Q,N=de,C=Le),(gt.equals(R)===!1||Ft!==b)&&(t.blendColor(gt.r,gt.g,gt.b,Ft),R.copy(gt),b=Ft),v=I,w=!1}function yn(I,ce){I.side===pi?Re(t.CULL_FACE):ae(t.CULL_FACE);let X=I.side===an;ce&&(X=!X),He(X),I.blending===Cs&&I.transparent===!1?F(er):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){E!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),E=I)}function Ve(I){I!==QS?(ae(t.CULL_FACE),I!==L&&(I===Jp?t.cullFace(t.BACK):I===JS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),L=I}function Ae(I){I!==B&&(z&&t.lineWidth(I),B=I)}function ot(I,ce,X){I?(ae(t.POLYGON_OFFSET_FILL),(O!==ce||k!==X)&&(t.polygonOffset(ce,X),O=ce,k=X)):Re(t.POLYGON_OFFSET_FILL)}function we(I){I?ae(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+W-1),Y!==I&&(t.activeTexture(I),Y=I)}function M(I,ce,X){X===void 0&&(Y===null?X=t.TEXTURE0+W-1:X=Y);let Q=q[X];Q===void 0&&(Q={type:void 0,texture:void 0},q[X]=Q),(Q.type!==I||Q.texture!==ce)&&(Y!==X&&(t.activeTexture(X),Y=X),t.bindTexture(I,ce||me[I]),Q.type=I,Q.texture=ce)}function H(){const I=q[Y];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(I){ze.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ze.copy(I))}function _e(I){$.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Ge(I,ce){let X=c.get(ce);X===void 0&&(X=new WeakMap,c.set(ce,X));let Q=X.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(ce,I.name),X.set(I,Q))}function Ue(I,ce){const Q=c.get(ce).get(I);l.get(ce)!==Q&&(t.uniformBlockBinding(ce,Q,I.__bindingPointIndex),l.set(ce,Q))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Y=null,q={},f={},h=new WeakMap,m=[],_=null,y=!1,v=null,u=null,g=null,x=null,S=null,N=null,C=null,R=new Be(0,0,0),b=0,w=!1,E=null,L=null,B=null,O=null,k=null,ze.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Re,bindFramebuffer:Ne,drawBuffers:Oe,useProgram:ft,setBlending:F,setMaterial:yn,setFlipSided:He,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:ot,setScissorTest:we,activeTexture:A,bindTexture:M,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Ce,updateUBOMapping:Ge,uniformBlockBinding:Ue,texStorage2D:We,texStorage3D:re,texSubImage2D:K,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:be,viewport:_e,reset:nt}}function Km(t,e,n,i){const r=zA(i);switch(n){case $0:return t*e;case q0:return t*e;case K0:return t*e*2;case Ah:return t*e/r.components*r.byteLength;case Ch:return t*e/r.components*r.byteLength;case Z0:return t*e*2/r.components*r.byteLength;case Rh:return t*e*2/r.components*r.byteLength;case Y0:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case bh:return t*e*4/r.components*r.byteLength;case wl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case $d:return Math.max(t,16)*Math.max(e,8)/4;case jd:case Xd:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bl:case ff:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Q0:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zA(t){switch(t){case Ai:case j0:return{byteLength:1,components:1};case oa:case W0:case fa:return{byteLength:2,components:1};case Th:case wh:return{byteLength:2,components:4};case kr:case Eh:case Jn:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function HA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return m?new OffscreenCanvas(A,M):ic("canvas")}function y(A,M,H){let Z=1;const ee=we(A);if((ee.width>H||ee.height>H)&&(Z=H/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*ee.width),Ee=Math.floor(Z*ee.height);f===void 0&&(f=_(K,Ee));const ue=M?_(K,Ee):f;return ue.width=K,ue.height=Ee,ue.getContext("2d").drawImage(A,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Ee+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function v(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,M,H,Z,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=M;if(M===t.RED&&(H===t.FLOAT&&(K=t.R32F),H===t.HALF_FLOAT&&(K=t.R16F),H===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.R8UI),H===t.UNSIGNED_SHORT&&(K=t.R16UI),H===t.UNSIGNED_INT&&(K=t.R32UI),H===t.BYTE&&(K=t.R8I),H===t.SHORT&&(K=t.R16I),H===t.INT&&(K=t.R32I)),M===t.RG&&(H===t.FLOAT&&(K=t.RG32F),H===t.HALF_FLOAT&&(K=t.RG16F),H===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.RG8UI),H===t.UNSIGNED_SHORT&&(K=t.RG16UI),H===t.UNSIGNED_INT&&(K=t.RG32UI),H===t.BYTE&&(K=t.RG8I),H===t.SHORT&&(K=t.RG16I),H===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.RGB8UI),H===t.UNSIGNED_SHORT&&(K=t.RGB16UI),H===t.UNSIGNED_INT&&(K=t.RGB32UI),H===t.BYTE&&(K=t.RGB8I),H===t.SHORT&&(K=t.RGB16I),H===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),H===t.UNSIGNED_INT&&(K=t.RGBA32UI),H===t.BYTE&&(K=t.RGBA8I),H===t.SHORT&&(K=t.RGBA16I),H===t.INT&&(K=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),M===t.RGBA){const Ee=ee?Cc:Xe.getTransfer(Z);H===t.FLOAT&&(K=t.RGBA32F),H===t.HALF_FLOAT&&(K=t.RGBA16F),H===t.UNSIGNED_BYTE&&(K=Ee===et?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(A,M){let H;return A?M===null||M===kr||M===zs?H=t.DEPTH24_STENCIL8:M===Jn?H=t.DEPTH32F_STENCIL8:M===oa&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===kr||M===zs?H=t.DEPTH_COMPONENT24:M===Jn?H=t.DEPTH_COMPONENT32F:M===oa&&(H=t.DEPTH_COMPONENT16),H}function N(A,M){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==Qn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&d.delete(M)}function R(A){const M=A.target;M.removeEventListener("dispose",R),E(M)}function b(A){const M=i.get(A);if(M.__webglInit===void 0)return;const H=A.source,Z=h.get(H);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(A),Object.keys(Z).length===0&&h.delete(H)}i.remove(A)}function w(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const H=A.source,Z=h.get(H);delete Z[M.__cacheKey],o.memory.textures--}function E(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=A.textures;for(let Z=0,ee=H.length;Z<ee;Z++){const K=i.get(H[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(A)}let L=0;function B(){L=0}function O(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function k(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const H=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,A,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function z(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){$(H,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function J(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){$(H,A,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function P(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ie(H,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const Y={[Vd]:t.REPEAT,[Ar]:t.CLAMP_TO_EDGE,[Gd]:t.MIRRORED_REPEAT},q={[gn]:t.NEAREST,[CM]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[ru]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},oe={[NM]:t.NEVER,[OM]:t.ALWAYS,[LM]:t.LESS,[e_]:t.LEQUAL,[IM]:t.EQUAL,[FM]:t.GEQUAL,[DM]:t.GREATER,[UM]:t.NOTEQUAL};function xe(A,M){if(M.type===Jn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qn||M.magFilter===ru||M.magFilter===Oa||M.magFilter===Cr||M.minFilter===Qn||M.minFilter===ru||M.minFilter===Oa||M.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Y[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Y[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Y[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==Oa&&M.minFilter!==Cr||M.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ze(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const K=k(M);if(K!==A.__cacheKey){ee[K]===void 0&&(ee[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[K].usedTimes++;const Ee=ee[A.__cacheKey];Ee!==void 0&&(ee[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(M)),A.__cacheKey=K,A.__webglTexture=ee[K].texture}return H}function $(A,M,H){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ee=ze(A,M),K=M.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+H);const Ee=i.get(K);if(K.version!==Ee.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const ue=Xe.getPrimaries(Xe.workingColorSpace),ge=M.colorSpace===Hi?null:Xe.getPrimaries(M.colorSpace),We=M.colorSpace===Hi||ue===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let re=y(M.image,!1,r.maxTextureSize);re=ot(M,re);const ve=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type);let be=x(M.internalFormat,ve,Ce,M.colorSpace,M.isVideoTexture);xe(Z,M);let _e;const Ge=M.mipmaps,Ue=M.isVideoTexture!==!0,nt=Ee.__version===void 0||ee===!0,I=K.dataReady,ce=N(M,re);if(M.isDepthTexture)be=S(M.format===Hs,M.type),nt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,be,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,ve,Ce,null));else if(M.isDataTexture)if(Ge.length>0){Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,ce,be,Ge[0].width,Ge[0].height);for(let X=0,Q=Ge.length;X<Q;X++)_e=Ge[X],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ve,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,X,be,_e.width,_e.height,0,ve,Ce,_e.data);M.generateMipmaps=!1}else Ue?(nt&&n.texStorage2D(t.TEXTURE_2D,ce,be,re.width,re.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,Ce,re.data)):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,ve,Ce,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,be,Ge[0].width,Ge[0].height,re.depth);for(let X=0,Q=Ge.length;X<Q;X++)if(_e=Ge[X],M.format!==Hn)if(ve!==null)if(Ue){if(I)if(M.layerUpdates.size>0){const he=Km(_e.width,_e.height,M.format,M.type);for(const de of M.layerUpdates){const Le=_e.data.subarray(de*he/_e.data.BYTES_PER_ELEMENT,(de+1)*he/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,de,_e.width,_e.height,1,ve,Le)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,re.depth,ve,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,be,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,re.depth,ve,Ce,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,be,_e.width,_e.height,re.depth,0,ve,Ce,_e.data)}else{Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,ce,be,Ge[0].width,Ge[0].height);for(let X=0,Q=Ge.length;X<Q;X++)_e=Ge[X],M.format!==Hn?ve!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,X,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ve,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,X,be,_e.width,_e.height,0,ve,Ce,_e.data)}else if(M.isDataArrayTexture)if(Ue){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,be,re.width,re.height,re.depth),I)if(M.layerUpdates.size>0){const X=Km(re.width,re.height,M.format,M.type);for(const Q of M.layerUpdates){const he=re.data.subarray(Q*X/re.data.BYTES_PER_ELEMENT,(Q+1)*X/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ve,Ce,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Ce,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,ve,Ce,re.data);else if(M.isData3DTexture)Ue?(nt&&n.texStorage3D(t.TEXTURE_3D,ce,be,re.width,re.height,re.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Ce,re.data)):n.texImage3D(t.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,ve,Ce,re.data);else if(M.isFramebufferTexture){if(nt)if(Ue)n.texStorage2D(t.TEXTURE_2D,ce,be,re.width,re.height);else{let X=re.width,Q=re.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,be,X,Q,0,ve,Ce,null),X>>=1,Q>>=1}}else if(Ge.length>0){if(Ue&&nt){const X=we(Ge[0]);n.texStorage2D(t.TEXTURE_2D,ce,be,X.width,X.height)}for(let X=0,Q=Ge.length;X<Q;X++)_e=Ge[X],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ve,Ce,_e):n.texImage2D(t.TEXTURE_2D,X,be,ve,Ce,_e);M.generateMipmaps=!1}else if(Ue){if(nt){const X=we(re);n.texStorage2D(t.TEXTURE_2D,ce,be,X.width,X.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Ce,re)}else n.texImage2D(t.TEXTURE_2D,0,be,ve,Ce,re);v(M)&&u(Z),Ee.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ie(A,M,H){if(M.image.length!==6)return;const Z=ze(A,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const K=i.get(ee);if(ee.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+H);const Ee=Xe.getPrimaries(Xe.workingColorSpace),ue=M.colorSpace===Hi?null:Xe.getPrimaries(M.colorSpace),ge=M.colorSpace===Hi||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!We&&!re?ve[Q]=y(M.image[Q],!0,r.maxCubemapSize):ve[Q]=re?M.image[Q].image:M.image[Q],ve[Q]=ot(M,ve[Q]);const Ce=ve[0],be=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ge=x(M.internalFormat,be,_e,M.colorSpace),Ue=M.isVideoTexture!==!0,nt=K.__version===void 0||Z===!0,I=ee.dataReady;let ce=N(M,Ce);xe(t.TEXTURE_CUBE_MAP,M);let X;if(We){Ue&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ge,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){X=ve[Q].mipmaps;for(let he=0;he<X.length;he++){const de=X[he];M.format!==Hn?be!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,de.width,de.height,be,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,de.width,de.height,be,_e,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ge,de.width,de.height,0,be,_e,de.data)}}}else{if(X=M.mipmaps,Ue&&nt){X.length>0&&ce++;const Q=we(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,be,_e,ve[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,ve[Q].width,ve[Q].height,0,be,_e,ve[Q].data);for(let he=0;he<X.length;he++){const Le=X[he].image[Q].image;Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Le.width,Le.height,be,_e,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ge,Le.width,Le.height,0,be,_e,Le.data)}}else{Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be,_e,ve[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,be,_e,ve[Q]);for(let he=0;he<X.length;he++){const de=X[he];Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,be,_e,de.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ge,be,_e,de.image[Q])}}}v(M)&&u(t.TEXTURE_CUBE_MAP),K.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function me(A,M,H,Z,ee,K){const Ee=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),ge=x(H.internalFormat,Ee,ue,H.colorSpace),We=i.get(M),re=i.get(H);if(re.__renderTarget=M,!We.__hasExternalTextures){const ve=Math.max(1,M.width>>K),Ce=Math.max(1,M.height>>K);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,K,ge,ve,Ce,M.depth,0,Ee,ue,null):n.texImage2D(ee,K,ge,ve,Ce,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,re.__webglTexture,0,He(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,re.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(A,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=S(M.stencilBuffer,ee),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=He(M);Ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,K,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,A)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],Ee=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),ge=x(K.internalFormat,Ee,ue,K.colorSpace),We=He(M);H&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ge,M.width,M.height):Ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ee=Z.__webglTexture,K=He(M);if(M.depthTexture.format===Rs)Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Hs)Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const M=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,A)}else if(H){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),ae(M.__webglDepthbuffer[Z],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ae(M.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(A,M,H){const Z=i.get(A);M!==void 0&&me(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ne(A)}function ft(A){const M=A.texture,H=i.get(A),Z=i.get(M);A.addEventListener("dispose",R);const ee=A.textures,K=A.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let ge=0;ge<M.mipmaps.length;ge++)H.__webglFramebuffer[ue][ge]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,ge=ee.length;ue<ge;ue++){const We=i.get(ee[ue]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ve(A)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const ge=ee[ue];H.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const We=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=x(ge.internalFormat,We,re,ge.colorSpace,A.isXRRenderTarget===!0),Ce=He(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ve,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),xe(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)me(H.__webglFramebuffer[ue][ge],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else me(H.__webglFramebuffer[ue],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,ge=ee.length;ue<ge;ue++){const We=ee[ue],re=i.get(We);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),xe(t.TEXTURE_2D,We),me(H.__webglFramebuffer,A,We,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),v(We)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),xe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)me(H.__webglFramebuffer[ge],A,M,t.COLOR_ATTACHMENT0,ue,ge);else me(H.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ue,0);v(M)&&u(ue),n.unbindTexture()}A.depthBuffer&&Ne(A)}function je(A){const M=A.textures;for(let H=0,Z=M.length;H<Z;H++){const ee=M[H];if(v(ee)){const K=g(A),Ee=i.get(ee).__webglTexture;n.bindTexture(K,Ee),u(K),n.unbindTexture()}}}const xt=[],F=[];function yn(A){if(A.samples>0){if(Ve(A)===!1){const M=A.textures,H=A.width,Z=A.height;let ee=t.COLOR_BUFFER_BIT;const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(A),ue=M.length>1;if(ue)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const We=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,H,Z,0,0,H,Z,ee,t.NEAREST),l===!0&&(xt.length=0,F.length=0,xt.push(t.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xt.push(K),F.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const We=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(A){return Math.min(r.maxSamples,A.samples)}function Ve(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(A){const M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function ot(A,M){const H=A.colorSpace,Z=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==qs&&H!==Hi&&(Xe.getTransfer(H)===et?(Z!==Hn||ee!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function we(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=P,this.rebindTextures=Oe,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ve}function VA(t,e){function n(i,r=Hi){let s;const o=Xe.getTransfer(r);if(i===Ai)return t.UNSIGNED_BYTE;if(i===Th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===j0)return t.BYTE;if(i===W0)return t.SHORT;if(i===oa)return t.UNSIGNED_SHORT;if(i===Eh)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===Jn)return t.FLOAT;if(i===fa)return t.HALF_FLOAT;if(i===$0)return t.ALPHA;if(i===Y0)return t.RGB;if(i===Hn)return t.RGBA;if(i===q0)return t.LUMINANCE;if(i===K0)return t.LUMINANCE_ALPHA;if(i===Rs)return t.DEPTH_COMPONENT;if(i===Hs)return t.DEPTH_STENCIL;if(i===Ah)return t.RED;if(i===Ch)return t.RED_INTEGER;if(i===Z0)return t.RG;if(i===Rh)return t.RG_INTEGER;if(i===bh)return t.RGBA_INTEGER;if(i===wl||i===Al||i===Cl||i===Rl)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jd||i===Wd||i===Xd||i===$d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===qd||i===Kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===qd)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===df)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ef)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===of)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===af)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===df)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===ff||i===hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ff)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Q0||i===pf||i===mf||i===gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class GA extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jA={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),u=this._getHandJoint(c,y);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XA=`
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

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new or({vertexShader:WA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pn(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends Ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const y=new $A,v=n.getContextAttributes();let u=null,g=null;const x=[],S=[],N=new Ze;let C=null;const R=new fn;R.viewport=new _t;const b=new fn;b.viewport=new _t;const w=[R,b],E=new GA;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=x[$];return ie===void 0&&(ie=new Iu,x[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=x[$];return ie===void 0&&(ie=new Iu,x[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=x[$];return ie===void 0&&(ie=new Iu,x[$]=ie),ie.getHandSpace()};function O($){const ie=S.indexOf($.inputSource);if(ie===-1)return;const me=x[ie];me!==void 0&&(me.update($.inputSource,$.frame,c||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",W);for(let $=0;$<x.length;$++){const ie=S[$];ie!==null&&(S[$]=null,x[$].disconnect(ie))}L=null,B=null,y.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,g=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Br(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ie=null,me=null,ae=null;v.depth&&(ae=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=v.stencil?Hs:Rs,me=v.stencil?zs:kr);const Re={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Br(h.textureWidth,h.textureHeight,{format:Hn,type:Ai,depthTexture:new p_(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W($){for(let ie=0;ie<$.removed.length;ie++){const me=$.removed[ie],ae=S.indexOf(me);ae>=0&&(S[ae]=null,x[ae].disconnect(me))}for(let ie=0;ie<$.added.length;ie++){const me=$.added[ie];let ae=S.indexOf(me);if(ae===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=S.length){S.push(me),ae=Ne;break}else if(S[Ne]===null){S[Ne]=me,ae=Ne;break}if(ae===-1)break}const Re=x[ae];Re&&Re.connect(me)}}const z=new j,J=new j;function P($,ie,me){z.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(me.matrixWorld);const ae=z.distanceTo(J),Re=ie.projectionMatrix.elements,Ne=me.projectionMatrix.elements,Oe=Re[14]/(Re[10]-1),ft=Re[14]/(Re[10]+1),je=(Re[9]+1)/Re[5],xt=(Re[9]-1)/Re[5],F=(Re[8]-1)/Re[0],yn=(Ne[8]+1)/Ne[0],He=Oe*F,Ve=Oe*yn,Ae=ae/(-F+yn),ot=Ae*-F;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ot),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const we=Oe+Ae,A=ft+Ae,M=He-ot,H=Ve+(ae-ot),Z=je*ft/A*we,ee=xt*ft/A*we;$.projectionMatrix.makePerspective(M,H,Z,ee,we,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,me=$.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(me=y.depthFar)),E.near=b.near=R.near=ie,E.far=b.far=R.far=me,(L!==E.near||B!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,B=E.far),R.layers.mask=$.layers.mask|2,b.layers.mask=$.layers.mask|4,E.layers.mask=R.layers.mask|b.layers.mask;const ae=$.parent,Re=E.cameras;Y(E,ae);for(let Ne=0;Ne<Re.length;Ne++)Y(Re[Ne],ae);Re.length===2?P(E,R,b):E.projectionMatrix.copy(R.projectionMatrix),q($,E,ae)};function q($,ie,me){me===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=vf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let oe=null;function xe($,ie){if(d=ie.getViewerPose(c||o),_=ie,d!==null){const me=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;me.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Ne=0;Ne<me.length;Ne++){const Oe=me[Ne];let ft=null;if(m!==null)ft=m.getViewport(Oe);else{const xt=f.getViewSubImage(h,Oe);ft=xt.viewport,Ne===0&&(e.setRenderTargetTextures(g,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(g))}let je=w[Ne];je===void 0&&(je=new fn,je.layers.enable(Ne),je.viewport=new _t,w[Ne]=je),je.matrix.fromArray(Oe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Oe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ft.x,ft.y,ft.width,ft.height),Ne===0&&(E.matrix.copy(je.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(je)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ne=f.getDepthInformation(me[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let me=0;me<x.length;me++){const ae=S[me],Re=x[me];ae!==null&&Re!==void 0&&Re.update(ae,ie,c||o)}oe&&oe($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const ze=new f_;ze.setAnimationLoop(xe),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const gr=new ni,qA=new st;function KA(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,c_(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,g,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),f(v,u)):u.isMeshPhongMaterial?(s(v,u),d(v,u)):u.isMeshStandardMaterial?(s(v,u),h(v,u),u.isMeshPhysicalMaterial&&m(v,u,S)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),y(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,g,x):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===an&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===an&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,S=g.envMapRotation;x&&(v.envMap.value=x,gr.copy(S),gr.x*=-1,gr.y*=-1,gr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),v.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(gr)),v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,g,x){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*g,v.scale.value=x*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function d(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function f(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function h(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function m(v,u,g){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function y(v,u){const g=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(_(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",v));const N=x.program;i.updateUBOMapping(g,N);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function d(g){const x=f();g.__bindingPointIndex=x;const S=t.createBuffer(),N=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,N=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,R=S.length;C<R;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,E=b.length;w<E;w++){const L=b[w];if(m(L,C,w,N)===!0){const B=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let W=0;W<O.length;W++){const z=O[W],J=y(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,B+k,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,x,S,N){const C=g.value,R=x+"_"+S;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const b=N[R];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return N[R]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function _(g){const x=g.uniforms;let S=0;const N=16;for(let R=0,b=x.length;R<b;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,L=w.length;E<L;E++){const B=w[E],O=Array.isArray(B.value)?B.value:[B.value];for(let k=0,W=O.length;k<W;k++){const z=O[k],J=y(z),P=S%N,Y=P%J.boundary,q=P+Y;S+=Y,q!==0&&N-q<J.storage&&(S+=N-q),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=J.storage}}}const C=S%N;return C>0&&(S+=N-C),g.__size=S,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function v(g){const x=g.target;x.removeEventListener("dispose",v);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class x_{constructor(e={}){const{canvas:n=BM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),y=new Int32Array(4);let v=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=tr,this.toneMappingExposure=1;const S=this;let N=!1,C=0,R=0,b=null,w=-1,E=null;const L=new _t,B=new _t;let O=null;const k=new Be(0);let W=0,z=n.width,J=n.height,P=1,Y=null,q=null;const oe=new _t(0,0,z,J),xe=new _t(0,0,z,J);let ze=!1;const $=new Ph;let ie=!1,me=!1;const ae=new st,Re=new st,Ne=new j,Oe=new _t,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function xt(){return b===null?P:1}let F=i;function yn(T,D){return n.getContext(T,D)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yh}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",de,!1),F===null){const D="webgl2";if(F=yn(D,T),F===null)throw yn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Ve,Ae,ot,we,A,M,H,Z,ee,K,Ee,ue,ge,We,re,ve,Ce,be,_e,Ge,Ue,nt,I;function ce(){He=new iw(F),He.init(),Ue=new VA(F,He),Ve=new ZT(F,He,e,Ue),Ae=new BA(F,He),Ve.reverseDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),ot=new ow(F),we=new TA,A=new HA(F,He,Ae,we,Ve,Ue,ot),M=new JT(S),H=new nw(S),Z=new hE(F),nt=new qT(F,Z),ee=new rw(F,Z,ot,nt),K=new lw(F,ee,Z,ot),be=new aw(F,Ve,A),re=new QT(we),Ee=new EA(S,M,H,He,Ve,nt,re),ue=new KA(S,we),ge=new AA,We=new LA(He),Ce=new YT(S,M,H,Ae,K,m,l),ve=new OA(S,K,Ve),I=new ZA(F,ot,Ve,Ae),_e=new KT(F,He,ot),Ge=new sw(F,He,ot),ot.programs=Ee.programs,S.capabilities=Ve,S.extensions=He,S.properties=we,S.renderLists=ge,S.shadowMap=ve,S.state=Ae,S.info=ot}ce();const X=new YA(S,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(z,J,!1))},this.getSize=function(T){return T.set(z,J)},this.setSize=function(T,D,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,J=D,n.width=Math.floor(T*P),n.height=Math.floor(D*P),V===!0&&(n.style.width=T+"px",n.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(z*P,J*P).floor()},this.setDrawingBufferSize=function(T,D,V){z=T,J=D,P=V,n.width=Math.floor(T*V),n.height=Math.floor(D*V),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,D,V,G){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,D,V,G),Ae.viewport(L.copy(oe).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,D,V,G){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,D,V,G),Ae.scissor(B.copy(xe).multiplyScalar(P).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(T){Ae.setScissorTest(ze=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(T=!0,D=!0,V=!0){let G=0;if(T){let U=!1;if(b!==null){const se=b.texture.format;U=se===bh||se===Rh||se===Ch}if(U){const se=b.texture.type,fe=se===Ai||se===kr||se===oa||se===zs||se===Th||se===wh,ye=Ce.getClearColor(),Se=Ce.getClearAlpha(),Pe=ye.r,Ie=ye.g,Me=ye.b;fe?(_[0]=Pe,_[1]=Ie,_[2]=Me,_[3]=Se,F.clearBufferuiv(F.COLOR,0,_)):(y[0]=Pe,y[1]=Ie,y[2]=Me,y[3]=Se,F.clearBufferiv(F.COLOR,0,y))}else G|=F.COLOR_BUFFER_BIT}D&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),We.dispose(),we.dispose(),M.dispose(),H.dispose(),K.dispose(),nt.dispose(),I.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",Fh),X.removeEventListener("sessionend",Oh),ur.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const T=ot.autoReset,D=ve.enabled,V=ve.autoUpdate,G=ve.needsUpdate,U=ve.type;ce(),ot.autoReset=T,ve.enabled=D,ve.autoUpdate=V,ve.needsUpdate=G,ve.type=U}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){const D=T.target;D.removeEventListener("dispose",Le),gt(D)}function gt(T){Ft(T),we.remove(T)}function Ft(T){const D=we.get(T).programs;D!==void 0&&(D.forEach(function(V){Ee.releaseProgram(V)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,V,G,U,se){D===null&&(D=ft);const fe=U.isMesh&&U.matrixWorld.determinant()<0,ye=_x(T,D,V,G,U);Ae.setMaterial(G,fe);let Se=V.index,Pe=1;if(G.wireframe===!0){if(Se=ee.getWireframeAttribute(V),Se===void 0)return;Pe=2}const Ie=V.drawRange,Me=V.attributes.position;let Ye=Ie.start*Pe,it=(Ie.start+Ie.count)*Pe;se!==null&&(Ye=Math.max(Ye,se.start*Pe),it=Math.min(it,(se.start+se.count)*Pe)),Se!==null?(Ye=Math.max(Ye,0),it=Math.min(it,Se.count)):Me!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,Me.count));const at=it-Ye;if(at<0||at===1/0)return;nt.setup(U,G,ye,V,Se);let Qt,qe=_e;if(Se!==null&&(Qt=Z.get(Se),qe=Ge,qe.setIndex(Qt)),U.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*xt()),qe.setMode(F.LINES)):qe.setMode(F.TRIANGLES);else if(U.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Ae.setLineWidth(Te*xt()),U.isLineSegments?qe.setMode(F.LINES):U.isLineLoop?qe.setMode(F.LINE_LOOP):qe.setMode(F.LINE_STRIP)}else U.isPoints?qe.setMode(F.POINTS):U.isSprite&&qe.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,ri=U._multiDrawCounts,Ke=U._multiDrawCount,Nn=Se?Z.get(Se).bytesPerElement:1,jr=we.get(G).currentProgram.getUniforms();for(let ln=0;ln<Ke;ln++)jr.setValue(F,"_gl_DrawID",ln),qe.render(Te[ln]/Nn,ri[ln])}else if(U.isInstancedMesh)qe.renderInstances(Ye,at,U.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ri=Math.min(V.instanceCount,Te);qe.renderInstances(Ye,at,ri)}else qe.render(Ye,at)};function Qe(T,D,V){T.transparent===!0&&T.side===pi&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,_a(T,D,V),T.side=sr,T.needsUpdate=!0,_a(T,D,V),T.side=pi):_a(T,D,V)}this.compile=function(T,D,V=null){V===null&&(V=T),u=We.get(V),u.init(D),x.push(u),V.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),T!==V&&T.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const G=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const ye=se[fe];Qe(ye,V,U),G.add(ye)}else Qe(se,V,U),G.add(se)}),x.pop(),u=null,G},this.compileAsync=function(T,D,V=null){const G=this.compile(T,D,V);return new Promise(U=>{function se(){if(G.forEach(function(fe){we.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){U(T);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Pn=null;function ii(T){Pn&&Pn(T)}function Fh(){ur.stop()}function Oh(){ur.start()}const ur=new f_;ur.setAnimationLoop(ii),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(T){Pn=T,X.setAnimationLoop(T),T===null?ur.stop():ur.start()},X.addEventListener("sessionstart",Fh),X.addEventListener("sessionend",Oh),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,D,b),u=We.get(T,x.length),u.init(D),x.push(u),Re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(Re),me=this.localClippingEnabled,ie=re.init(this.clippingPlanes,me),v=ge.get(T,g.length),v.init(),g.push(v),X.enabled===!0&&X.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Nc(se,D,-1/0,S.sortObjects)}Nc(T,D,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(Y,q),je=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,je&&Ce.addToRenderList(v,T),this.info.render.frame++,ie===!0&&re.beginShadows();const V=u.state.shadowsArray;ve.render(V,T,D),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,U=v.transmissive;if(u.setupLights(),D.isArrayCamera){const se=D.cameras;if(U.length>0)for(let fe=0,ye=se.length;fe<ye;fe++){const Se=se[fe];Bh(G,U,T,Se)}je&&Ce.render(T);for(let fe=0,ye=se.length;fe<ye;fe++){const Se=se[fe];kh(v,T,Se,Se.viewport)}}else U.length>0&&Bh(G,U,T,D),je&&Ce.render(T),kh(v,T,D);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(S,T,D),nt.resetDefaultState(),w=-1,E=null,x.pop(),x.length>0?(u=x[x.length-1],ie===!0&&re.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Nc(T,D,V,G){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){G&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);const fe=K.update(T),ye=T.material;ye.visible&&v.push(T,fe,ye,V,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const fe=K.update(T),ye=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Oe.copy(fe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(ye)){const Se=fe.groups;for(let Pe=0,Ie=Se.length;Pe<Ie;Pe++){const Me=Se[Pe],Ye=ye[Me.materialIndex];Ye&&Ye.visible&&v.push(T,fe,Ye,V,Oe.z,Me)}}else ye.visible&&v.push(T,fe,ye,V,Oe.z,null)}}const se=T.children;for(let fe=0,ye=se.length;fe<ye;fe++)Nc(se[fe],D,V,G)}function kh(T,D,V,G){const U=T.opaque,se=T.transmissive,fe=T.transparent;u.setupLightsView(V),ie===!0&&re.setGlobalState(S.clippingPlanes,V),G&&Ae.viewport(L.copy(G)),U.length>0&&va(U,D,V),se.length>0&&va(se,D,V),fe.length>0&&va(fe,D,V),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Bh(T,D,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Br(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?fa:Ai,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const se=u.state.transmissionRenderTarget[G.id],fe=G.viewport||L;se.setSize(fe.z,fe.w);const ye=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(k),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),je&&Ce.render(V);const Se=S.toneMapping;S.toneMapping=tr;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),ie===!0&&re.setGlobalState(S.clippingPlanes,G),va(T,V,G),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Me=0,Ye=D.length;Me<Ye;Me++){const it=D[Me],at=it.object,Qt=it.geometry,qe=it.material,Te=it.group;if(qe.side===pi&&at.layers.test(G.layers)){const ri=qe.side;qe.side=an,qe.needsUpdate=!0,zh(at,V,G,Qt,qe,Te),qe.side=ri,qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}S.setRenderTarget(ye),S.setClearColor(k,W),Pe!==void 0&&(G.viewport=Pe),S.toneMapping=Se}function va(T,D,V){const G=D.isScene===!0?D.overrideMaterial:null;for(let U=0,se=T.length;U<se;U++){const fe=T[U],ye=fe.object,Se=fe.geometry,Pe=G===null?fe.material:G,Ie=fe.group;ye.layers.test(V.layers)&&zh(ye,D,V,Se,Pe,Ie)}}function zh(T,D,V,G,U,se){T.onBeforeRender(S,D,V,G,U,se),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(S,D,V,G,T,se),U.transparent===!0&&U.side===pi&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,S.renderBufferDirect(V,D,G,U,T,se),U.side=sr,U.needsUpdate=!0,S.renderBufferDirect(V,D,G,U,T,se),U.side=pi):S.renderBufferDirect(V,D,G,U,T,se),T.onAfterRender(S,D,V,G,U,se)}function _a(T,D,V){D.isScene!==!0&&(D=ft);const G=we.get(T),U=u.state.lights,se=u.state.shadowsArray,fe=U.state.version,ye=Ee.getParameters(T,U.state,se,D,V),Se=Ee.getProgramCacheKey(ye);let Pe=G.programs;G.environment=T.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(T.isMeshStandardMaterial?H:M).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Le),Pe=new Map,G.programs=Pe);let Ie=Pe.get(Se);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===fe)return Vh(T,ye),Ie}else ye.uniforms=Ee.getUniforms(T),T.onBeforeCompile(ye,S),Ie=Ee.acquireProgram(ye,Se),Pe.set(Se,Ie),G.uniforms=ye.uniforms;const Me=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=re.uniform),Vh(T,ye),G.needsLights=yx(T),G.lightsStateVersion=fe,G.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function Hh(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=Pl.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function Vh(T,D){const V=we.get(T);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function _x(T,D,V,G,U){D.isScene!==!0&&(D=ft),A.resetTextureUnits();const se=D.fog,fe=G.isMeshStandardMaterial?D.environment:null,ye=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:qs,Se=(G.isMeshStandardMaterial?H:M).get(G.envMap||fe),Pe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!V.morphAttributes.position,Ye=!!V.morphAttributes.normal,it=!!V.morphAttributes.color;let at=tr;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=S.toneMapping);const Qt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qe=Qt!==void 0?Qt.length:0,Te=we.get(G),ri=u.state.lights;if(ie===!0&&(me===!0||T!==E)){const Sn=T===E&&G.id===w;re.setState(G,T,Sn)}let Ke=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ri.state.version||Te.outputColorSpace!==ye||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==Se||G.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Ie||Te.morphTargets!==Me||Te.morphNormals!==Ye||Te.morphColors!==it||Te.toneMapping!==at||Te.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Te.__version=G.version);let Nn=Te.currentProgram;Ke===!0&&(Nn=_a(G,D,U));let jr=!1,ln=!1,no=!1;const lt=Nn.getUniforms(),$n=Te.uniforms;if(Ae.useProgram(Nn.program)&&(jr=!0,ln=!0,no=!0),G.id!==w&&(w=G.id,ln=!0),jr||E!==T){Ae.buffers.depth.getReversed()?(ae.copy(T.projectionMatrix),HM(ae),VM(ae),lt.setValue(F,"projectionMatrix",ae)):lt.setValue(F,"projectionMatrix",T.projectionMatrix),lt.setValue(F,"viewMatrix",T.matrixWorldInverse);const Ri=lt.map.cameraPosition;Ri!==void 0&&Ri.setValue(F,Ne.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,ln=!0,no=!0)}if(U.isSkinnedMesh){lt.setOptional(F,U,"bindMatrix"),lt.setOptional(F,U,"bindMatrixInverse");const Sn=U.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),lt.setValue(F,"boneTexture",Sn.boneTexture,A))}U.isBatchedMesh&&(lt.setOptional(F,U,"batchingTexture"),lt.setValue(F,"batchingTexture",U._matricesTexture,A),lt.setOptional(F,U,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",U._indirectTexture,A),lt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",U._colorsTexture,A));const io=V.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&be.update(U,V,Nn),(ln||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,lt.setValue(F,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&($n.envMap.value=Se,$n.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&($n.envMapIntensity.value=D.environmentIntensity),ln&&(lt.setValue(F,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&xx($n,no),se&&G.fog===!0&&ue.refreshFogUniforms($n,se),ue.refreshMaterialUniforms($n,G,P,J,u.state.transmissionRenderTarget[T.id]),Pl.upload(F,Hh(Te),$n,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pl.upload(F,Hh(Te),$n,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(F,"center",U.center),lt.setValue(F,"modelViewMatrix",U.modelViewMatrix),lt.setValue(F,"normalMatrix",U.normalMatrix),lt.setValue(F,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Sn=G.uniformsGroups;for(let Ri=0,bi=Sn.length;Ri<bi;Ri++){const Gh=Sn[Ri];I.update(Gh,Nn),I.bind(Gh,Nn)}}return Nn}function xx(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function yx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,D,V){we.get(T.texture).__webglTexture=D,we.get(T.depthTexture).__webglTexture=V;const G=we.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const V=we.get(T);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,V=0){b=T,C=D,R=V;let G=!0,U=null,se=!1,fe=!1;if(T){const Se=we.get(T);if(Se.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(Se.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Se.__hasExternalTextures)A.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(Se.__boundDepthTexture!==Me){if(Me!==null&&we.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const Ie=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?U=Ie[D][V]:U=Ie[D],se=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?U=we.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[V]:U=Ie,L.copy(T.viewport),B.copy(T.scissor),O=T.scissorTest}else L.copy(oe).multiplyScalar(P).floor(),B.copy(xe).multiplyScalar(P).floor(),O=ze;if(Ae.bindFramebuffer(F.FRAMEBUFFER,U)&&G&&Ae.drawBuffers(T,U),Ae.viewport(L),Ae.scissor(B),Ae.setScissorTest(O),se){const Se=we.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Se.__webglTexture,V)}else if(fe){const Se=we.get(T.texture),Pe=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Pe)}w=-1},this.readRenderTargetPixels=function(T,D,V,G,U,se,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){Ae.bindFramebuffer(F.FRAMEBUFFER,ye);try{const Se=T.texture,Pe=Se.format,Ie=Se.type;if(!Ve.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-G&&V>=0&&V<=T.height-U&&F.readPixels(D,V,G,U,Ue.convert(Pe),Ue.convert(Ie),se)}finally{const Se=b!==null?we.get(b).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,D,V,G,U,se,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){const Se=T.texture,Pe=Se.format,Ie=Se.type;if(!Ve.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-G&&V>=0&&V<=T.height-U){Ae.bindFramebuffer(F.FRAMEBUFFER,ye);const Me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.bufferData(F.PIXEL_PACK_BUFFER,se.byteLength,F.STREAM_READ),F.readPixels(D,V,G,U,Ue.convert(Pe),Ue.convert(Ie),0);const Ye=b!==null?we.get(b).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Ye);const it=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zM(F,it,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,se),F.deleteBuffer(Me),F.deleteSync(it),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,V=0){T.isTexture!==!0&&(Ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),U=Math.floor(T.image.width*G),se=Math.floor(T.image.height*G),fe=D!==null?D.x:0,ye=D!==null?D.y:0;A.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,fe,ye,U,se),Ae.unbindTexture()},this.copyTextureToTexture=function(T,D,V=null,G=null,U=0){T.isTexture!==!0&&(Ro("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],D=arguments[2],U=arguments[3]||0,V=null);let se,fe,ye,Se,Pe,Ie,Me,Ye,it;const at=T.isCompressedTexture?T.mipmaps[U]:T.image;V!==null?(se=V.max.x-V.min.x,fe=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Pe=V.min.y,Ie=V.isBox3?V.min.z:0):(se=at.width,fe=at.height,ye=at.depth||1,Se=0,Pe=0,Ie=0),G!==null?(Me=G.x,Ye=G.y,it=G.z):(Me=0,Ye=0,it=0);const Qt=Ue.convert(D.format),qe=Ue.convert(D.type);let Te;D.isData3DTexture?(A.setTexture3D(D,0),Te=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Te=F.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Te=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const ri=F.getParameter(F.UNPACK_ROW_LENGTH),Ke=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Nn=F.getParameter(F.UNPACK_SKIP_PIXELS),jr=F.getParameter(F.UNPACK_SKIP_ROWS),ln=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Se),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ie);const no=T.isDataArrayTexture||T.isData3DTexture,lt=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const $n=we.get(T),io=we.get(D),Sn=we.get($n.__renderTarget),Ri=we.get(io.__renderTarget);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let bi=0;bi<ye;bi++)no&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(T).__webglTexture,U,Ie+bi),T.isDepthTexture?(lt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(D).__webglTexture,U,it+bi),F.blitFramebuffer(Se,Pe,se,fe,Me,Ye,se,fe,F.DEPTH_BUFFER_BIT,F.NEAREST)):lt?F.copyTexSubImage3D(Te,U,Me,Ye,it+bi,Se,Pe,se,fe):F.copyTexSubImage2D(Te,U,Me,Ye,it+bi,Se,Pe,se,fe);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Te,U,Me,Ye,it,se,fe,ye,Qt,qe,at.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Te,U,Me,Ye,it,se,fe,ye,Qt,at.data):F.texSubImage3D(Te,U,Me,Ye,it,se,fe,ye,Qt,qe,at):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Me,Ye,se,fe,Qt,qe,at.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Me,Ye,at.width,at.height,Qt,at.data):F.texSubImage2D(F.TEXTURE_2D,U,Me,Ye,se,fe,Qt,qe,at);F.pixelStorei(F.UNPACK_ROW_LENGTH,ri),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ke),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Nn),F.pixelStorei(F.UNPACK_SKIP_ROWS,jr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ln),U===0&&D.generateMipmaps&&F.generateMipmap(Te),Ae.unbindTexture()},this.copyTextureToTexture3D=function(T,D,V=null,G=null,U=0){return T.isTexture!==!0&&(Ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],D=arguments[3],U=arguments[4]||0),Ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,V,G,U)},this.initRenderTarget=function(T){we.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){C=0,R=0,b=null,Ae.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}class y_ extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class QA extends qt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=gn,d=gn,f,h){super(null,o,a,l,c,d,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zm extends Wn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new st,Qm=new st,rl=[],Jm=new Vr,JA=new st,_o=new pn,xo=new ma;class eC extends pn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Zm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,JA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,os),Jm.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Jm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ma),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,os),xo.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(xo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,os),Qm.multiplyMatrices(i,os),_o.matrixWorld=Qm,_o.raycast(e,rl);for(let o=0,a=rl.length;o<a;o++){const l=rl[o];l.instanceId=s,l.object=this,n.push(l)}rl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Zm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new QA(new Float32Array(r*this.count),r,this.count,Ah,Jn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class S_ extends Zs{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class tC extends Zs{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class M_ extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class E_ extends M_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Du=new st,eg=new j,tg=new j;class nC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),n.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tg),n.updateMatrixWorld(),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iC extends nC{constructor(){super(new h_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T_ extends M_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new iC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);function rC(t){const e=new Set(t.map(i=>`${i.x},${i.y},${i.z}`)),n=(i,r,s)=>e.has(`${i},${r},${s}`);return t.filter(({x:i,y:r,z:s})=>!(n(i+1,r,s)&&n(i-1,r,s)&&n(i,r+1,s)&&n(i,r-1,s)&&n(i,r,s+1)&&n(i,r,s-1)))}function sC(t,e,n){const i=Math.sin(t*12.9898+e*78.233+n*37.719)*43758.5453;return(i-Math.floor(i)-.5)*.05}function xf(t){const e=rC(t),n=new Qs(1,1,1),i=new tC,r=new eC(n,i,e.length),s=new st,o=[];return e.forEach((a,l)=>{s.makeTranslation(a.x+.5,a.y+.5,a.z+.5),r.setMatrixAt(l,s);const c=new Be(a.c),d=c.getHSL({});c.offsetHSL(0,0,sC(a.x,a.y,a.z)*Math.min(1,d.l*2)),r.setColorAt(l,c),o.push(c)}),r.castShadow=!0,r.receiveShadow=!0,{mesh:r,colors:o,list:e}}function w_(t){t.geometry.dispose(),t.material.dispose()}function oC(t,{shadowSize:e=30,shadowFar:n=220}={}){t.add(new E_(16777215,15326411,2.2));const i=new T_(16777215,2.4);return i.position.set(40,70,60),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-e,right:e,top:e+10,bottom:-e,near:1,far:n}),i.shadow.bias=-8e-4,t.add(i),i}const ng=lc.illustration;function aC(t=9){const e=[];for(let n=-t;n<=t;n++)for(let i=-t;i<=t;i++)n*n+i*i>t*t+2||e.push({x:n,y:-1,z:i,c:(n+i)%2===0?ng.paper:ng.sky});return e}function Lh({cubes:t,width:e,height:n,still:i=!1,periodMs:r=8e3,stillAngle:s=-.5,showPedestal:o=!0,ground:a=!1,target:l=[0,15,0],distance:c=118}){const d=te.useRef(null),f=te.useRef(null),h=te.useRef(s);return h.current=s,te.useEffect(()=>{const m=document.createElement("canvas");Object.assign(m.style,{width:e+"px",height:n+"px",display:"block"}),d.current.appendChild(m);const _=new x_({canvas:m,antialias:!0,alpha:!0});_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.setSize(e,n,!1),_.shadowMap.enabled=!0,_.shadowMap.type=Sh;const y=new y_,v=new fn(24,e/n,1,1e3);v.position.set(0,l[1]+22,c),v.lookAt(...l),y.add(new E_(16777215,15326411,2.2));const u=new T_(16777215,2.4);u.position.set(40,70,60),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-30,right:30,top:40,bottom:-10,near:1,far:220}),u.shadow.bias=-8e-4,y.add(u);const g=new xi,x=[xf(t).mesh];o&&x.push(xf(aC()).mesh),x.forEach(R=>{R.position.set(-.5,0,-.5),g.add(R)}),y.add(g);let S=null;a&&(S=new pn(new Js(80,80),new S_({opacity:.12})),S.rotation.x=-Math.PI/2,S.receiveShadow=!0,y.add(S));const N=()=>_.render(y,v);f.current={group:g,render:N};let C=0;if(i)g.rotation.y=h.current,N();else{const R=performance.now(),b=w=>{g.rotation.y=(w-R)%r/r*Math.PI*2,N(),C=requestAnimationFrame(b)};C=requestAnimationFrame(b)}return()=>{cancelAnimationFrame(C),x.forEach(w_),S&&(S.geometry.dispose(),S.material.dispose()),f.current=null,_.dispose(),_.forceContextLoss(),m.remove()}},[t,e,n,i,r,o,a,c,l[0],l[1],l[2]]),te.useEffect(()=>{const m=f.current;!m||!i||(m.group.rotation.y=s,m.render())},[s,i]),p.jsx("div",{ref:d,style:{width:e,height:n}})}const A_=[{label:"Brand & design",value:9},{label:"Marketing & comms",value:10},{label:"Teaching",value:8},{label:"Tech",value:6,levelTo:8},{label:"Patience with hype",value:2}],C_=1,R_=C_+A_.length,b_=R_+1,lC=b_+1,cC=10,ig=70,uC=700;function dC({stat:t,on:e,instant:n,sfx:i}){const r=t.levelTo??t.value,[s,o]=te.useState(e&&n?r:0),[a,l]=te.useState(e&&n&&!!t.levelTo);return te.useEffect(()=>{if(!e){o(0),l(!1);return}if(n){o(r),l(!!t.levelTo);return}const c=[];let d=0;for(let f=1;f<=t.value;f++)d+=ig,c.push(setTimeout(()=>{o(f),i.tick()},d));if(t.levelTo){d+=uC,c.push(setTimeout(()=>{l(!0),i.levelUp()},d));for(let f=t.value+1;f<=t.levelTo;f++)d+=ig*2,c.push(setTimeout(()=>o(f),d))}return()=>c.forEach(clearTimeout)},[e]),p.jsxs("div",{className:"stat",children:[p.jsx("span",{className:"stat-label",children:t.label}),p.jsx("span",{className:"stat-blocks","aria-hidden":"true",children:Array.from({length:cC},(c,d)=>p.jsx("span",{className:`block ${d<s?d>=t.value?"up":"on":""}`},d))}),p.jsx("span",{className:"pixel stat-value",children:e?a?r:s:""}),t.levelTo&&p.jsx("span",{className:`pixel level-up ${a?"on":""} ${n?"instant":""}`,children:"Level up"})]})}function fC({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,o=a=>`reveal ${t>=a?"on":""}`;return p.jsxs("div",{className:`screen s1 ${s?"instant":""}`,children:[p.jsx("div",{className:"s1-figure",children:p.jsx(Lh,{cubes:Cg,width:760,height:952,still:n||i,distance:104,target:[0,15.5,0]})}),p.jsxs("div",{className:"s1-sheet",children:[p.jsxs("header",{children:[p.jsx("span",{className:"pixel tag s1-kicker",children:"Character select"}),p.jsx("h1",{className:"pixel s1-name",children:"Juani"})]}),p.jsxs("dl",{className:"s1-info",children:[p.jsxs("div",{children:[p.jsx("dt",{className:"pixel",children:"Class"}),p.jsx("dd",{children:"Hybrid: Designer · Marketer · Builder"})]}),p.jsxs("div",{children:[p.jsx("dt",{className:"pixel",children:"Origin"}),p.jsx("dd",{children:"Buenos Aires → Zurich"})]}),p.jsxs("div",{children:[p.jsx("dt",{className:"pixel",children:"Languages"}),p.jsx("dd",{children:"ES · EN · FR · PT · DE"})]})]}),p.jsxs("section",{children:[p.jsx("h2",{className:"pixel s1-label",children:"Stats"}),p.jsx("div",{className:"s1-stats",children:A_.map((a,l)=>p.jsx(dC,{stat:a,on:t>=C_+l,instant:s,sfx:r},a.label))})]}),p.jsxs("div",{className:`s1-abilities ${o(R_)}`,children:[p.jsxs("div",{children:[p.jsx("h2",{className:"pixel s1-label",children:"Special ability"}),p.jsx("p",{children:"opens doors that weren't meant for her"})]}),p.jsxs("div",{children:[p.jsx("h2",{className:"pixel s1-label",children:"Weakness"}),p.jsx("p",{children:"forgets everything when focused"})]})]}),p.jsxs("div",{className:o(b_),children:[p.jsx("h2",{className:"pixel s1-label",children:"Inventory"}),p.jsxs("ul",{className:"s1-inventory",children:[p.jsx("li",{children:"15 years of marketing"}),p.jsx("li",{children:"100+ people trained"}),p.jsx("li",{children:"8 digital colleagues"})]})]})]})]})}const hC=5;function pC({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,o=a=>`reveal ${t>=a?"on":""}`;return te.useEffect(()=>{!s&&t===2&&r.start()},[t]),p.jsxs("div",{className:`screen s1b ${s?"instant":""}`,children:[p.jsx("p",{className:"pixel tag s1b-kicker",children:"The promise"}),p.jsx("p",{className:`s1b-first ${o(0)}`,children:"One year ago, I couldn’t build any of this. Not this presentation, not the game you’ll play, not my video tool."}),p.jsx("p",{className:`s1b-line ${o(1)}`,children:"I learned it. In the last 12 months."}),p.jsx("p",{className:`s1b-line s1b-player accent ${o(2)}`,children:"Today, you’re Player 2."}),p.jsxs("div",{className:`s1b-last ${o(3)}`,children:[p.jsx("p",{children:"Every level of my year is one you’ll play: with a manager, or on your own."}),p.jsxs("div",{className:"s1b-tags",children:[p.jsx("span",{className:"pixel sp-tag sp-tag-manager",children:"With a manager"}),p.jsx("span",{className:"pixel sp-tag sp-tag-own",children:"On your own"})]})]}),p.jsxs("div",{className:`s1b-end ${o(4)}`,children:[p.jsx("p",{children:"And at the end, you’ll actually play it: everything from today, in one game."}),p.jsx("span",{className:"pixel tag s1b-unlock",children:"Game unlocks at the end"})]})]})}function Gs({rows:t,palette:e,px:n=24,className:i,style:r}){const s=Math.max(...t.map(a=>a.length)),o=t.length;return p.jsx("svg",{className:i,style:r,width:s*n,height:o*n,viewBox:`0 0 ${s} ${o}`,shapeRendering:"crispEdges","aria-hidden":"true",children:t.flatMap((a,l)=>[...a].map((c,d)=>e[c]?p.jsx("rect",{x:d,y:l,width:1,height:1,fill:e[c]},`${d},${l}`):null))})}const mC={manager:"With a manager",own:"On your own"},P_=["nnnnnnnnnn.","nwwwwwwnwnn","nwwwwwwnwwn","nwwwwwwwwwn","nnnnnnnnnnn","nnccccccnnn","nnccccccnnn","nnccccccnnn","nnnnnnnnnnn"],N_={n:"#1b3644",w:"#f9f2e8",c:"#ffffff"},L_=t=>t.length+1;function I_({sentence:t,moves:e,title:n,accentYourMove:i=!0,beat:r,dir:s,reduced:o,preview:a,sfx:l}){const c=o||a||s<1;return te.useEffect(()=>{if(c||r!==0)return;const d=setTimeout(()=>l.levelUp(),250);return()=>clearTimeout(d)},[]),te.useEffect(()=>{!c&&r>=1&&l.tick()},[r]),p.jsx("div",{className:`screen sp ${c?"instant":""}`,children:p.jsxs("article",{className:"sp-card",children:[p.jsxs("header",{className:"sp-head",children:[p.jsx(Gs,{rows:P_,palette:N_,px:7}),p.jsx("p",{className:"pixel sp-label",children:"Save point"}),p.jsx("p",{className:`pixel sp-move ${i?"accent":""}`,children:"Your move"})]}),n&&p.jsx("p",{className:"pixel tag sp-title",children:n}),p.jsx("p",{className:"sp-sentence",children:t}),p.jsx("ul",{className:"sp-moves",children:e.map((d,f)=>p.jsxs("li",{className:`reveal ${r>=f+1?"on":""}`,children:[p.jsx("span",{className:`pixel sp-tag sp-tag-${d.tag}`,children:mC[d.tag]??d.tag}),p.jsx("p",{children:d.text})]},f))})]})})}const D_={SP1:{sentence:"You don’t need all of it. You need what’s relevant to your work.",moves:[{tag:"manager",text:"You’ll be the one who can say which tool is worth the time."},{tag:"own",text:"Every subscription is a cost. Choose like it’s your money. Because it is."}]},SP2:{sentence:"Someone will put you in a box too. Too junior. “Just comms.” Not technical.",moves:[{tag:"manager",text:"The label is theirs. Your work can change it."},{tag:"own",text:"The box becomes your positioning. Use what makes you different."}]},SP3:{sentence:"Open one door outside your field this semester. A conference, a talk, a meetup.",moves:[{tag:"manager",text:"You come back with what nobody else in the team heard."},{tag:"own",text:"That’s where your first clients are. Mine still come from there."}]},SP4:{sentence:"Write the job description before you hire the AI.",moves:[{tag:"manager",text:"You’ll be the one who briefs the AI and checks what comes back. That’s the skill they can’t find."},{tag:"own",text:"You can run a company with digital colleagues. You still need people. Start collecting phone numbers."}]}},sl=t=>L_(D_[t].moves),ol=t=>e=>p.jsx(I_,{...e,...D_[t]}),gC=60;function U_({number:t,label:e,name:n,reduced:i,preview:r,dir:s,sfx:o}){const a=i||r||s<1,[l,c]=te.useState(a?n.length:0);return te.useEffect(()=>{if(a)return;const d=[setTimeout(()=>o.level(),0)];for(let f=1;f<=n.length;f++)d.push(setTimeout(()=>{c(f),n[f-1]!==" "&&o.tick()},300+f*gC));return()=>d.forEach(clearTimeout)},[]),p.jsxs("div",{className:"screen level-card",children:[p.jsx("p",{className:"pixel level-number",children:e??`Level ${t}`}),p.jsxs("h1",{className:"pixel level-name","aria-label":n,children:[p.jsx("span",{children:n.slice(0,l)}),p.jsx("span",{className:"level-rest","aria-hidden":"true",children:n.slice(l)})]})]})}const vC=[{name:"Brad Velocity",role:"AI Visionary · 7-figure mindset",text:"10 AI tools that will replace your job before Friday 🚀🧵 (number 7 is terrifying)",likes:"12,481",comments:"1,207"},{name:"Jade Scalewell",role:"Founder @ Stealth AI startup",text:"I automated my whole company in a weekend. Fired nobody. Hired nobody. Slept 3 hours. 🔥",likes:"8,932",comments:"644"},{name:"Kai Promptley",role:"Prompt Whisperer · Keynote speaker",text:"Prompt engineering is dead. 💀 Long live prompt engineering. 🚀",likes:"5,210",comments:"389"},{name:"Nina Hyperion",role:"Helping you 10x with AI",text:"This new model changes EVERYTHING. Again. 🤯🤯🤯",likes:"21,077",comments:"2,930"},{name:"Marco Growthwell",role:"Growth hacker · Ex-everything",text:"You’re already 6 months behind. Here’s how to catch up in 6 minutes ⏱️🚀",likes:"9,645",comments:"812"},{name:"Lena Futurecast",role:"Thought leader · AI evangelist",text:"Unpopular opinion: humans are the bottleneck. 🧠⚡",likes:"3,418",comments:"1,955"},{name:"Tom Disrupto",role:"Serial founder · 0 to 1 to 100",text:"Stop scrolling. 🛑 AI just did in 30 seconds what your agency does in 3 weeks. 👇🔥",likes:"14,302",comments:"977"},{name:"Ava Leverage",role:"Agentic AI coach",text:"If you’re not using agents yet, you’re not a professional. You’re a hobbyist. 🚀",likes:"6,790",comments:"1,104"},{name:"Rex Momentum",role:"Productivity maximalist",text:"My 5-step AI morning routine ☀️🤖 Step 1: wake up before the AI does.",likes:"4,021",comments:"233"},{name:"Mia Funnelstein",role:"DM me “AI” 📩",text:"Comment “AI” and I’ll send you my secret 400-prompt library 🔥📩",likes:"18,556",comments:"9,871"},{name:"Leo Shipfast",role:"Builder · No-code is the new code",text:"Built a SaaS with zero code during my coffee ☕ MRR: soon. 🚀",likes:"7,333",comments:"502"},{name:"Zoe Signalboost",role:"AI news, daily",text:"Everyone is talking about AGI. Nobody is talking about THIS. 👀🔥",likes:"11,940",comments:"1,388"},{name:"Finn Exitstrategy",role:"Investor · Angel · Visionary",text:"RIP marketing. 🪦 AI does it all now. Link in comments 👇",likes:"2,876",comments:"3,402"},{name:"Ivy Tenexer",role:"CEO of myself",text:"I replaced my entire team with 3 prompts. AMA 🚀🚀🚀",likes:"16,204",comments:"4,118"},{name:"Max Goldrush",role:"Early adopter of everything",text:"The AI gold rush is here. Are you digging or watching? ⛏️💰🔥",likes:"10,087",comments:"726"},{name:"Ella Overnight",role:"From 0 to 100k followers in 30 days",text:"I asked AI to write my CV. Now I have 4 job offers and no idea what I actually do. 🙌🔥",likes:"13,659",comments:"1,540"}],yo=[1,2,3,4,5].map(t=>({real:`screenshots/feed-0${t}.png`})),Ht=vC.map((t,e)=>({...t,seed:e})),_C=[[Ht[0],yo[0],Ht[1],Ht[2],Ht[3],yo[3],Ht[4]],[Ht[5],Ht[6],yo[4],Ht[7],Ht[8],Ht[9],Ht[10]],[Ht[11],Ht[12],Ht[13],yo[1],Ht[14],Ht[15],yo[2]]],rg=["#9cc8a5","#ffd36b","#cfe3ea","#f2a7c3","#ff8a5c","#25495b","#e5b77a","#f9f2e8"],al=["#1b3644","#ff491e","#163040"],sg="#25495b";function xC({seed:t}){const e=rg[t%rg.length],n=e===sg?"#ffd36b":al[(t*2+1)%al.length],i=e===sg?"#ffffff":al[(t+2)%al.length],r=t%4;return p.jsxs("svg",{className:"hype-avatar",viewBox:"0 0 64 64","aria-hidden":"true",children:[p.jsx("circle",{cx:"32",cy:"32",r:"32",fill:e}),r===0&&p.jsx("polygon",{points:"32,12 54,50 10,50",fill:n}),r===1&&p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"14",y:"14",width:"22",height:"22",fill:n}),p.jsx("circle",{cx:"42",cy:"42",r:"12",fill:i})]}),r===2&&p.jsx("path",{d:"M8 40 A24 24 0 0 1 56 40 Z",fill:n}),r===3&&p.jsxs(p.Fragment,{children:[p.jsx("rect",{x:"10",y:"28",width:"44",height:"8",fill:n}),p.jsx("rect",{x:"28",y:"10",width:"8",height:"44",fill:i})]})]})}function yC({post:t}){return p.jsxs("article",{className:"feed-card hype",children:[p.jsxs("header",{className:"hype-head",children:[p.jsx(xC,{seed:t.seed}),p.jsxs("div",{className:"hype-who",children:[p.jsx("p",{className:"hype-name",children:t.name}),p.jsx("p",{className:"hype-role",children:t.role})]}),p.jsx("span",{className:"hype-follow",children:"+ Follow"})]}),p.jsx("p",{className:"hype-text",children:t.text}),p.jsxs("footer",{className:"hype-stats",children:[p.jsxs("span",{children:["🔥🚀👏 ",t.likes]}),p.jsxs("span",{children:[t.comments," comments"]})]})]})}function SC({item:t}){return t.real?p.jsx("img",{className:"feed-card feed-shot",src:`/onewomanshow/assets/${t.real}`,alt:""}):p.jsx(yC,{post:t})}const MC=6,og=40,EC=5200,TC=[1,1.18,.9],wC=14;function AC({reduced:t,preview:e,sfx:n}){const i=te.useRef(null),r=te.useRef([]);return te.useEffect(()=>{if(e)return;let s=0,o=0;const a=performance.now(),l=[0,-640*.4,-640*.75];let c=a;const d=h=>Math.min(1,(h-a)/1e3/MC);if(!t){const h=m=>{const _=(m-c)/1e3;c=m;const y=d(m),v=og+(EC-og)*y*y*y;r.current.forEach((u,g)=>{if(!u)return;const x=u.scrollHeight/2;l[g]=(l[g]-v*TC[g]*_)%x,u.style.transform=`translate3d(0, ${l[g]}px, 0)`}),i.current&&(i.current.style.filter=`blur(${(wC*y*y).toFixed(2)}px)`),s=requestAnimationFrame(h)};s=requestAnimationFrame(h)}const f=()=>{const h=d(performance.now());n.ding(h),o=setTimeout(f,900-780*h*h)};return o=setTimeout(f,400),()=>{cancelAnimationFrame(s),clearTimeout(o)}},[t,e,n]),p.jsx("div",{className:"screen s2",children:p.jsx("div",{className:"feed",ref:i,children:_C.map((s,o)=>p.jsx("div",{className:"feed-col",ref:a=>r.current[o]=a,children:[...s,...s].map((a,l)=>p.jsx(SC,{item:a},l))},o))})})}const ag=600,CC=800;function ga({lines:t,size:e=96,accentLast:n=!0,reduced:i,preview:r}){const s=i||r;return p.jsx("div",{className:`screen statement ${s?"still":""}`,style:{fontSize:e},children:t.map((o,a)=>p.jsx("p",{className:`statement-line ${n&&a===t.length-1?"accent":""}`,style:s?void 0:{animationDuration:`${ag}ms`,animationDelay:`${a*(ag+CC)}ms`},children:o},a))})}function RC(t){return p.jsx(ga,{...t,lines:["I make my living from AI.","And I'm exhausted too."]})}function Ih({lines:t,beat:e,size:n=96,footer:i,instant:r}){return p.jsxs("div",{className:`screen lines ${r?"instant":""}`,style:{fontSize:n},children:[p.jsx("div",{className:"lines-body",children:t.map((s,o)=>p.jsx("p",{className:`lines-line reveal ${e>=(s.at??o)?"on":""} ${s.accent?"accent":""}`,children:s.text},o))}),i&&p.jsx("p",{className:"lines-footer",children:i})]})}const bC=3;function PC({beat:t,dir:e,reduced:n,preview:i}){return p.jsx(Ih,{beat:t,instant:n||i||e<1,lines:[{text:"So today: no hype."},{text:"One woman. One year."},{text:"Mistakes included.",accent:!0}]})}const rc=1040,sc=880,At={tl:[40,300],tr:[720,300],br:[720,860],bl:[40,860]},Lr=[280,-170],ll=t=>[t[0]+Lr[0],t[1]+Lr[1]],js={tl:ll(At.tl),tr:ll(At.tr),br:ll(At.br),bl:ll(At.bl)},to=(...t)=>t.map(e=>e.join(",")).join(" "),F_=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],Uu=[680,0],cl=[0,560],NC={front:"#e5b77a",lid:"#edc890",right:"#d99a5b",back:"#d99a5b",left:"#c4854b"},lg="#5c3520",bc=[{id:"left",label:"You’re too senior.",face:{o:At.tl,u:Lr,v:cl,nu:7,nv:14},at:[180,540],w:240},{id:"right",label:"You’re not technical.",face:{o:At.tr,u:Lr,v:cl,nu:7,nv:14},at:[860,560],w:240},{id:"back",label:"You’re too creative for strategy.",face:{o:js.tl,u:Uu,v:cl,nu:17,nv:14},at:[585,225],w:480},{id:"lid",label:"You think too much out of the box.",face:{o:At.tl,u:Uu,v:Lr,nu:17,nv:7},at:[520,215],w:600},{id:"front",label:"You don’t fit in my company.",face:{o:At.tl,u:Uu,v:cl,nu:17,nv:14},at:[380,600],w:560}];for(const t of bc){const{o:e,u:n,v:i}=t.face;t.poly=to(e,[e[0]+n[0],e[1]+n[1]],[e[0]+n[0]+i[0],e[1]+n[1]+i[1]],[e[0]+i[0],e[1]+i[1]])}const LC=(t,e)=>{const n=parseInt(t.slice(1),16);return`rgb(${[n>>16,n>>8&255,n&255].map(r=>Math.max(0,Math.min(255,Math.round(r*e)))).join(",")})`},cg=[1,.97,1.03,.985,1.015,.96];function IC({o:t,u:e,v:n,nu:i,nv:r},s){const o=(l,c)=>[t[0]+e[0]*l/i+n[0]*c/r,t[1]+e[1]*l/i+n[1]*c/r],a=[];for(let l=0;l<r;l++)for(let c=0;c<i;c++){const d=cg[(c*7+l*13+c*l%5)%cg.length];a.push({key:`${c},${l}`,points:to(o(c,l),o(c+1,l),o(c+1,l+1),o(c,l+1)),fill:LC(s,d)})}return a}const DC=Object.fromEntries(bc.map(t=>[t.id,IC(t.face,NC[t.id])])),Wi=34,Vn=F_(At.tl,At.tr,.5),Rr=F_(js.tl,js.tr,.5),UC=to([Vn[0]-Wi,Vn[1]],[Vn[0]+Wi,Vn[1]],[Rr[0]+Wi,Rr[1]],[Rr[0]-Wi,Rr[1]]),FC=to([Vn[0]-Wi,At.tl[1]],[Vn[0]+Wi,At.tl[1]],[Vn[0]+Wi,At.tl[1]+96],[Vn[0]-Wi,At.tl[1]+96]),OC=to(Vn,At.tr,js.tr,Rr),kC=`matrix(1, ${Lr[1]/Lr[0]}, 0, 1, ${At.tr[0]}, ${At.tr[1]})`,ug=({x:t})=>p.jsxs("g",{transform:`translate(${t} 40)`,children:[p.jsx("polygon",{points:"0,22 16,0 32,22"}),p.jsx("rect",{x:"11",y:"20",width:"10",height:"36"})]});function BC({id:t}){return t==="lid"?p.jsxs(p.Fragment,{children:[p.jsx("polygon",{points:OC,fill:"rgba(92,53,32,0.14)"}),p.jsx("line",{x1:Vn[0],y1:Vn[1],x2:Rr[0],y2:Rr[1],stroke:lg,strokeWidth:"3"}),p.jsx("polygon",{points:UC,className:"bx-tape"})]}):t==="front"?p.jsx("polygon",{points:FC,className:"bx-tape"}):t==="right"?p.jsxs("g",{transform:kC,fill:lg,opacity:"0.85",children:[p.jsx(ug,{x:186}),p.jsx(ug,{x:228})]}):null}const zC=to(At.bl,At.br,js.br,js.bl),HC=420;function VC({wall:t,down:e,instant:n,sfx:i}){return te.useEffect(()=>{if(!e||n||!i)return;const r=setTimeout(()=>i.thud(),HC);return()=>clearTimeout(r)},[e]),p.jsxs("div",{className:`bx-wall bx-${t.id} ${e?"down":""}`,children:[p.jsxs("svg",{viewBox:`0 0 ${rc} ${sc}`,width:rc,height:sc,"aria-hidden":"true",children:[p.jsx("g",{className:"bx-blocks",children:DC[t.id].map(r=>p.jsx("polygon",{points:r.points,fill:r.fill},r.key))}),p.jsx(BC,{id:t.id}),p.jsx("polygon",{points:t.poly,className:"bx-edge"})]}),p.jsx("p",{style:{left:t.at[0],top:t.at[1],width:t.w,transform:"translate(-50%, -50%)"},children:t.label})]})}function O_({wallsDown:t,kicked:e=!1,instant:n,sfx:i,children:r,className:s="",style:o}){const a=(l,c)=>p.jsx(VC,{wall:bc[c],down:c<t,instant:n,sfx:i},l);return p.jsxs("div",{className:`bx ${e?"kicked":""} ${n?"instant":""} ${s}`,style:o,children:[p.jsx("svg",{className:"bx-floor",viewBox:`0 0 ${rc} ${sc}`,width:rc,height:sc,"aria-hidden":"true",children:p.jsx("polygon",{points:zC})}),a("back",2),a("left",0),r,a("right",1),a("lid",3),a("front",4)]})}const GC=bc.length+1,jC=1800,WC=Math.PI/2,k_=0;function B_({facing:t=k_,smile:e=!1,className:n=""}){return p.jsx("div",{className:`bx-juani ${n}`,children:p.jsx(Lh,{cubes:e?wf:Cg,width:360,height:520,still:!0,stillAngle:t,showPedestal:!1,target:[0,17,0],distance:118})})}function XC({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,[o,a]=te.useState(s||t>0);return te.useEffect(()=>{if(o)return;const l=setTimeout(()=>a(!0),jC);return()=>clearTimeout(l)},[o]),p.jsx("div",{className:`screen s5 ${s?"instant":""}`,children:p.jsx(O_,{wallsDown:t,instant:s,sfx:r,className:"s5-box",children:p.jsx(B_,{facing:o?k_:WC,className:o?"arrived":"walking"})})})}const $C=2;function YC({beat:t,dir:e,reduced:n,preview:i}){return p.jsx(Ih,{beat:t,size:88,instant:n||i||e<1,lines:[{text:p.jsxs(p.Fragment,{children:["Jobs most exposed to AI are ",p.jsx("span",{className:"accent",children:"16 points more female."})]})},{text:"Office jobs. Our jobs."}],footer:p.jsx(p.Fragment,{children:"Source: Anthropic, “Labor market impacts of AI” (Massenkoff & McCrory, 2026) (my reading)."})})}const qC=3,Fu=1,KC=1300;function ZC({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,o=t>=Fu,[a,l]=te.useState(o&&s);return te.useEffect(()=>{if(!o)return l(!1);if(s)return l(!0);const c=setTimeout(()=>l(!0),KC);return()=>clearTimeout(c)},[o,s]),te.useEffect(()=>{if(s||t!==Fu)return;r.thud();const c=setTimeout(()=>r.crack(),300);return()=>clearTimeout(c)},[t]),p.jsxs("div",{className:`screen s7 ${s?"instant":""}`,children:[p.jsxs("div",{className:"s7-text",children:[p.jsx("p",{className:"s7-line reveal on",children:"A box has no door."}),p.jsx("p",{className:`s7-line reveal ${t>=Fu?"on":""}`,children:"So I stopped waiting for someone to open it."}),p.jsx("p",{className:`s7-line accent reveal ${t>=2?"on":""}`,children:"I started opening doors."})]}),p.jsx(O_,{wallsDown:5,kicked:o,instant:s,className:"s7-box",children:p.jsx(B_,{smile:a,className:o?"s7-out":""})})]})}const z_=[{label:"Hired",subtitle:"the proof",rooms:[{head:"ICH · Geneva",line:"Months later, their teams still use what I set up."},{head:"Tunon · Geneva",line:"BA students like you. AI allowed, but they must say which tool and whether they challenged it."},{head:"UZH · Zurich",line:"Invited back. That’s why I’m here."}]},{label:"Showed up",subtitle:"how doors open",rooms:[{head:"Geneva Peace Forum",line:"Lawyers and NGOs. AI in justice."},{head:"Zurich AI Festival",line:"Quantum scientists. Communicating science."},{head:"ITU · UN digital agency",line:"Working group on foresight in the age of AI."}],result:"→ What came out of it: a responsible-AI training proposal for Argentina, built with Lukas, a software architect and former CTO in Lucerne."},{label:"Found me",subtitle:"what visibility does",rooms:[{head:"My website · SEO + GEO",line:"1.5 years making sure AI search can find me. Now ChatGPT, Gemini and Claude send people to me."},{head:"Nina & Sam, web & automation developers",line:"Found me through ChatGPT. Now we work together."},{head:"Every contract",line:p.jsxs(p.Fragment,{children:["Inbound or warm. ",p.jsx("span",{className:"accent",children:"Never a cold pitch."})]})}]}],yf=[];let Sf=0;for(const t of z_){const e=t.rooms.map(()=>++Sf);yf.push({doors:e,result:t.result?++Sf:null})}const QC=Sf+1;function JC({room:t,open:e,instant:n,sfx:i}){return te.useEffect(()=>{e&&!n&&i.door()},[e]),p.jsxs("div",{className:`room ${e?"open":""}`,children:[p.jsxs("div",{className:"room-text",children:[p.jsx("h3",{children:t.head}),p.jsx("p",{children:t.line})]}),p.jsx("div",{className:"room-wall","aria-hidden":"true",children:p.jsxs("div",{className:"door",children:[p.jsx("span",{className:"door-panel"}),p.jsx("span",{className:"door-panel"}),p.jsx("span",{className:"door-knob"})]})})]})}function eR({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1;return p.jsx("div",{className:`screen s8 ${s?"instant":""}`,children:z_.map((o,a)=>p.jsxs("section",{className:`s8-row ${o.result?"has-result":""}`,children:[p.jsxs("header",{className:"s8-label",children:[p.jsx("h2",{className:"pixel",children:o.label}),p.jsx("p",{className:"pixel",children:o.subtitle})]}),p.jsx("div",{className:"s8-doors",children:o.rooms.map((l,c)=>p.jsx(JC,{room:l,open:t>=yf[a].doors[c],instant:s,sfx:r},c))}),o.result&&p.jsx("p",{className:`s8-result reveal ${t>=yf[a].result?"on":""}`,children:o.result})]},o.label))})}function tR(t){return p.jsx(ga,{...t,size:72,accentLast:!1,lines:["Behind every door, I wasn’t the expert. Not a scientist, not a lawyer, not a pharma specialist.",p.jsxs(p.Fragment,{children:["But I was the one who knew"," ",p.jsx("span",{className:"accent",children:"communication, digital literacy and AI in practice."})]})]})}function nR(t){return p.jsx(ga,{...t,lines:["They needed AI literacy and communication.","That’s what you’re studying."]})}const iR=3;function rR({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1,s=o=>`reveal ${t>=o?"on":""}`;return p.jsxs("div",{className:`screen s11 ${r?"instant":""}`,children:[p.jsx("p",{className:`s11-question ${s(0)}`,children:"One woman, all these doors. How?"}),p.jsxs("blockquote",{className:s(1),children:[p.jsx("p",{className:"s11-quote",children:"I don’t need to know everything. I need the phone number of the person who does."}),p.jsx("p",{className:"s11-spanish",lang:"es",children:"“No necesito saber todo. Necesito tener el teléfono del que sabe.”"}),p.jsx("p",{className:"s11-source",children:"Psychologists call it transactive memory: knowing who knows what. (Wegner, 1985)"})]}),p.jsx("p",{className:`pixel tag s11-next ${s(2)}`,children:"→ Level 4: The Office"})]})}function sR(t){return p.jsx(ga,{...t,size:88,lines:["Running a one-woman company is lonely.","No colleagues. No coffee machine. No one to say “are you sure?”"]})}const So=lc.illustration,oR=[-36,-12,12,36],aR=[-12,16],mi=Vo.map((t,e)=>({...t,x:oR[e%4],z:aR[Math.floor(e/4)]})),H_={romeo:[{x:-84,z:4}],engineers:[{x:80,z:-14},{x:90,z:-2}],accountant:[{x:-66,z:-52}],lucerne:[{x:70,z:56}],clients:[{x:-34,z:62},{x:-22,z:66},{x:-10,z:62},{x:2,z:66},{x:14,z:62}]},dg={office:{pos:[0,100,140],target:[0,13,-8],fov:30},universe:{pos:[0,170,250],target:[0,0,6],fov:34}},lR=400,cR=250,uR=650,dR=2500,fR=t=>1-(1-t)**3,hR=t=>t<.5?4*t*t*t:1-(-2*t+2)**3/2,Ou=t=>Math.min(1,Math.max(0,t));function pR(t){const n=.62+.3*(t.r*.2126+t.g*.7152+t.b*.0722);return new Be(n,n,n)}function mR(){const t=[];for(let n=-52;n<=52;n++)for(let i=-28;i<=32;i++)t.push({x:n,y:-1,z:i,c:(n+i)%2===0?So.paper:So.sky});const e=[-48,-24,0,24,48];for(let n=-52;n<=52;n++)for(let i=0;i<=22;i++){const r=e.find(s=>Math.abs(n-s)<=5&&i>=6&&i<=17);r===void 0?t.push({x:n,y:i,z:-30,c:So.paper}):Math.abs(n-r)===5||i===6||i===17||n===r?t.push({x:n,y:i,z:-30,c:So.navy_mid}):t.push({x:n,y:i,z:-30,c:So.sky})}return t}function V_({width:t,height:e,lit:n=0,instant:i=!1,lightsInstant:r,camera:s="office",startCamera:o,people:a=!1,anchors:l,onAnchors:c}){const d=te.useRef(null),f=te.useRef(null),h=te.useRef(n);h.current=n;const m=te.useRef(i);m.current=i;const _=te.useRef(r??i);_.current=r??i;const y=te.useRef(c);y.current=c;const v=te.useRef(l);return v.current=l,te.useEffect(()=>{const u=document.createElement("canvas");Object.assign(u.style,{width:t+"px",height:e+"px",display:"block"}),d.current.appendChild(u);const g=new x_({canvas:u,antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),g.setSize(t,e,!1),g.shadowMap.enabled=!0,g.shadowMap.type=Sh;const x=new y_,S=new fn(30,t/e,1,2e3);oC(x,{shadowSize:130,shadowFar:500});const N=[],C=(k,W=x)=>{const z=xf(k);return z.mesh.position.set(-.5,0,-.5),W.add(z.mesh),N.push(z.mesh),z};C(mR());const R=mi.map(k=>{const{body:W,desk:z}=cc(k),J=new xi;J.position.set(k.x,0,k.z),x.add(J);const P=new xi;return P.position.set(k.x,0,k.z),x.add(P),{parts:[C(z,J),C(W,P)].map(q=>({...q,grey:q.colors.map(pR)})),bodyGroup:P,litAt:null,shown:-1,turn:-1}});let b=null;if(a){b=new xi,b.position.y=-1;const k=Sx();for(const z of Object.values(H_))for(const J of z){const P=new xi;P.position.set(J.x,0,J.z),P.rotation.y=Math.atan2(-J.x,-J.z)*.6,C(k,P),b.add(P)}x.add(b);const W=new pn(new Js(800,800),new S_({opacity:.1}));W.rotation.x=-Math.PI/2,W.position.y=-1,W.receiveShadow=!0,x.add(W),N.push(W)}const w={from:null,to:dg[o||s],t0:0,settled:!1},E=k=>{S.position.set(...k.pos),S.fov=k.fov,S.updateProjectionMatrix(),S.lookAt(...k.target)};E(w.to);const L=()=>{const k=v.current;!k||!y.current||y.current(k.map(([W,z,J])=>{const P=new j(W,z,J).project(S);return{x:(P.x+1)/2*t,y:(1-P.y)/2*e}}))};let B=0;const O=k=>{let W=!1;if(R.forEach((z,J)=>{const P=J<h.current;P&&z.litAt===null&&(z.litAt=_.current?-1e9:k),P||(z.litAt=null);const Y=z.litAt===null?0:k-z.litAt,q=z.litAt===null?0:Ou(Y/lR),oe=z.litAt===null?0:fR(Ou((Y-cR)/uR));if(q!==z.shown){z.shown=q;for(const xe of z.parts)xe.colors.forEach((ze,$)=>xe.mesh.setColorAt($,xe.grey[$].clone().lerp(ze,q))),xe.mesh.instanceColor.needsUpdate=!0;W=!0}oe!==z.turn&&(z.turn=oe,z.bodyGroup.rotation.y=Math.PI*(1-oe),W=!0)}),w.from){const z=hR(Ou((k-w.t0)/dR)),J=(P,Y)=>P.map((q,oe)=>q+(Y[oe]-q)*z);E({pos:J(w.from.pos,w.to.pos),target:J(w.from.target,w.to.target),fov:w.from.fov+(w.to.fov-w.from.fov)*z}),W=!0,z>=1&&(w.from=null,w.settled=!1)}!w.from&&!w.settled&&(w.settled=!0,L()),W&&g.render(x,S),B=requestAnimationFrame(O)};return B=requestAnimationFrame(O),f.current={goTo(k){const W=dg[k];W!==w.to&&(m.current?(w.to=W,w.from=null,E(W),w.settled=!1,g.render(x,S)):(w.from={...w.to},w.to=W,w.t0=performance.now()))}},g.render(x,S),()=>{cancelAnimationFrame(B),N.forEach(w_),g.dispose(),g.forceContextLoss(),u.remove(),f.current=null}},[t,e,a]),te.useEffect(()=>{var u;(u=f.current)==null||u.goTo(s)},[s]),p.jsx("div",{ref:d,style:{width:t,height:e}})}const G_=mi.length+1,j_=G_+1,gR=j_+1,W_=1150,vR=952,_R=mi.map(t=>[t.x,27,t.z]),fg=135,xR=t=>Math.min(W_-fg,Math.max(fg,t));function yR({colleague:t,instant:e}){return p.jsxs("article",{className:`desk-card ${e?"instant":""}`,children:[p.jsx("h2",{className:"pixel tag desk-card-name",children:t.name}),p.jsx("p",{className:"pixel desk-card-label",children:"What it really is"}),p.jsx("p",{className:"desk-card-what",children:t.what}),p.jsx("p",{className:"pixel desk-card-label",children:"Autonomy"}),p.jsx("p",{className:"desk-card-autonomy",children:t.autonomy})]})}function SR({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,o=Math.min(t,mi.length),[a,l]=te.useState(null);te.useEffect(()=>{!s&&t>=1&&t<=mi.length&&r.lamp()},[t]);const c=t>=1&&t<=mi.length?mi[t-1]:null;return p.jsxs("div",{className:`screen s13 ${s?"instant":""}`,children:[p.jsxs("div",{className:"s13-scene",children:[p.jsx(V_,{width:W_,height:vR,lit:o,instant:s,anchors:_R,onAnchors:l}),a&&mi.map((d,f)=>p.jsx("span",{className:`pixel s13-nametag ${f<o?"on":""}`,style:{left:xR(a[f].x),top:a[f].y},children:d.name.replace(/^The /,"")},d.id))]}),p.jsxs("aside",{className:"s13-panel",children:[p.jsx("h1",{className:"s13-title",children:"So I built an office."}),p.jsxs("div",{className:"s13-slot",children:[c&&p.jsx(yR,{colleague:c,instant:s},c.id),t>=G_&&p.jsxs("div",{className:"s13-rule",children:[p.jsxs("p",{className:"reveal on",children:["Today there are eight. Next month maybe ten. The number changes. The rule doesn’t:"," ",p.jsx("span",{className:"accent",children:"I write every job description, and I decide what each one can touch."})]}),p.jsxs("div",{className:`s13-alert reveal ${t>=j_?"on":""}`,children:[p.jsx("p",{className:"pixel s13-alert-label",children:"Alert"}),p.jsxs("p",{children:["Free on GitHub. Free on social media. “Just install this skill.”"," ",p.jsx("b",{children:"Free isn’t safe."})," I write my own skills. I don’t install strangers’. (Details in Level 5.)"]})]})]})]})]})]})}function oc({cubes:t,px:e=5,view:n="front",style:i}){const r=te.useRef(null);return te.useEffect(()=>{const s=g=>n==="side"?-g.z:g.x,o=g=>n==="side"?g.x:g.z,a=new Map;for(const g of t){const x=`${s(g)},${g.y}`,S=a.get(x);(!S||o(g)>o(S))&&a.set(x,g)}const l=[...a.values()],c=l.map(s),d=l.map(g=>g.y),f=Math.min(...c),h=Math.max(...d),m=(Math.max(...c)-f+1)*e,_=(h-Math.min(...d)+1)*e,y=r.current,v=Math.min(window.devicePixelRatio||1,2);y.width=m*v,y.height=_*v,y.style.width=m+"px",y.style.height=_+"px";const u=y.getContext("2d");u.scale(v,v),u.clearRect(0,0,m,_);for(const g of l)u.fillStyle=g.c,u.fillRect((s(g)-f)*e,(h-g.y)*e,e,e)},[t,e,n]),p.jsx("canvas",{ref:r,style:{display:"block",imageRendering:"pixelated",...i}})}const ul=[{id:"autocomplete",label:"Autocomplete",angle:180},{id:"drafts",label:"Drafts, I approve",angle:120},{id:"builds",label:"Builds, I review",angle:60},{id:"alone",label:"Runs alone",angle:0}],hg=[{at:1,dial:"alone"},{at:2,dial:"drafts"},{at:3,dial:"builds"},{at:4,dial:"stops"}],X_=5,MR=X_+1,Nl=960,Po=820,Vt=520,ui=(t,e)=>[Nl+e*Math.cos(t*Math.PI/180),Po-e*Math.sin(t*Math.PI/180)],ER=180,TR=196,pg=5;function wR({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,o=te.useMemo(()=>Object.fromEntries(Vo.map(_=>[_.id,cc(_).body])),[]),[a,l]=te.useState(s||t>0);te.useEffect(()=>{if(a)return;const _=setTimeout(()=>l(!0),1700);return()=>clearTimeout(_)},[a]);const c=[...hg].reverse().find(_=>t>=_.at),d=c?c.dial==="stops"?TR:ul.find(_=>_.id===c.dial).angle:ER;te.useEffect(()=>{if(!s&&c&&t===c.at){const _=setTimeout(()=>r.drop(),420);return()=>clearTimeout(_)}},[t]);const f=_=>Vo.filter(y=>y.dial===_),h=_=>{const y=hg.find(v=>v.dial===_);return y&&t>=y.at},m=Array.from({length:18},(_,y)=>{const v=180-y*10-1,u=v-8,[g,x]=ui(v,Vt),[S,N]=ui(u,Vt),[C,R]=ui(u,Vt-46),[b,w]=ui(v,Vt-46);return`M${g},${x} A${Vt},${Vt} 0 0 1 ${S},${N} L${C},${R} A${Vt-46},${Vt-46} 0 0 0 ${b},${w} Z`});return p.jsxs("div",{className:`screen s14 ${s?"instant":""}`,children:[p.jsx("p",{className:"pixel tag s14-kicker",children:"Autonomy dial"}),p.jsxs("svg",{className:"s14-svg",viewBox:"0 0 1920 1080","aria-hidden":"true",children:[m.map((_,y)=>p.jsx("path",{d:_,className:"s14-seg"},y)),ul.map(_=>{const[y,v]=ui(_.angle,Vt+6),[u,g]=ui(_.angle,Vt-60);return p.jsx("line",{x1:y,y1:v,x2:u,y2:g,className:"s14-tick"},_.id)}),p.jsx("g",{className:`s14-needle ${a?"":"sweeping"}`,style:{transform:`rotate(${-(d-180)}deg)`,transformOrigin:`${Nl}px ${Po}px`},children:p.jsx("rect",{x:Nl-Vt+90,y:Po-7,width:Vt-90,height:14,className:"s14-needle-bar"})}),p.jsx("rect",{x:Nl-26,y:Po-26,width:52,height:52,className:"s14-hub"})]}),ul.map(_=>{const y=_.angle===0||_.angle===180,[v,u]=y?[ui(_.angle,Vt-23)[0],Po+56]:ui(_.angle,Vt+70);return p.jsx("p",{className:`s14-label s14-label-${_.id}`,style:{left:v,top:u},children:_.label},_.id)}),ul.map(_=>{const y=f(_.id);if(!y.length)return null;const v=y.length>3,[u,g]=ui(_.angle,v?Vt-330:Vt-190);return p.jsx("div",{className:`s14-icons ${v?"many":""} ${h(_.id)?"down":""}`,style:{left:u,top:g},children:y.map(x=>p.jsxs("figure",{children:[p.jsx(oc,{cubes:o[x.id],px:pg}),p.jsx("figcaption",{className:"pixel",children:x.name.replace(/^The /,"")})]},x.id))},_.id)}),p.jsxs("div",{className:`s14-stop ${h("stops")?"down":""}`,children:[p.jsxs("figure",{children:[p.jsx(oc,{cubes:o.bodyguard,px:pg}),p.jsx("figcaption",{className:"pixel",children:"Bodyguard"})]}),p.jsx("p",{className:"s14-stop-label",children:"stops me"})]}),p.jsxs("p",{className:`s14-line reveal ${t>=X_?"on":""}`,children:["They draft. ",p.jsx("span",{className:"accent",children:"I decide."})]})]})}const AR="/onewomanshow/assets/video/linkedin-video.mp4",CR=3,RR=["an evening → 25 min","5 takes, 1 kept","5.5 min for cuts + 9 illustrations","43 s render","1 storyboard review","no cost beyond my subscription"];function bR({beat:t,dir:e,reduced:n,preview:i,muted:r}){const s=n||i||e<1,o=te.useRef(null);return te.useEffect(()=>{const a=o.current;!a||i||t===1&&e>0&&(a.currentTime=0,a.play().catch(()=>{}))},[t,e,i]),te.useEffect(()=>{o.current&&(o.current.muted=!!r||!!i)},[r,i]),p.jsxs("div",{className:`screen s15 ${s?"instant":""}`,children:[p.jsxs("div",{className:"s15-text",children:[p.jsx("p",{className:"pixel tag s15-kicker",children:"Backstage: the video generator"}),p.jsxs("p",{className:"s15-origin",children:["It started small: a flow to translate content for one client in education."," ",p.jsx("span",{className:"accent",children:"It grew into my own video production system."})]}),p.jsx("ul",{className:`s15-numbers reveal ${t>=2?"on":""}`,children:RR.map(a=>p.jsx("li",{children:a},a))})]}),p.jsx("video",{ref:o,className:"s15-video",src:AR,preload:"auto",playsInline:!0,muted:!!r||!!i})]})}const $_="/onewomanshow/",PR=`${$_}assets/video/stills/s02-illustration.png`,NR=["png","png","png","jpeg","jpg","jpg","jpeg","png","jpeg","jpeg","png","png","png","png"],LR=NR.map((t,e)=>`${$_}assets/screenshots/generic-flyer-${String(e+1).padStart(2,"0")}.${t}`),IR=1,mg=2,Y_=3,DR=Y_+1;function UR({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1,s=t>=mg;return p.jsxs("div",{className:`screen s15b ${r?"instant":""}`,children:[p.jsxs("div",{className:`s15b-wall ${s?"back":""}`,children:[LR.map((o,a)=>p.jsx("img",{src:o,alt:"",style:{animationDelay:`${a*45}ms`}},o)),p.jsx("p",{className:"pixel tag s15b-wall-tag",children:"Generic AI flyers"})]}),p.jsxs("figure",{className:`s15b-brand ${t>=IR?"on":""}`,children:[p.jsx("img",{src:PR,alt:"JUVAII illustration from Juani's LinkedIn video"}),p.jsx("figcaption",{className:"pixel tag",children:"JUVAII illustration"})]}),p.jsxs("div",{className:"s15b-text",children:[p.jsxs("div",{className:`s15b-lines reveal ${t===mg?"on":""}`,children:[p.jsx("p",{className:"accent",children:"The brand came first."}),p.jsx("p",{className:"s15b-quote",children:"“The system didn’t need the take to be perfect. I did.”"})]}),p.jsxs("div",{className:`s15b-creative reveal ${t>=Y_?"on":""}`,children:[p.jsx("p",{className:"s15b-ask",children:"Am I scared AI will kill my creativity?"}),p.jsx("p",{className:"s15b-no",children:"No."}),p.jsx("p",{children:"AI makes average, fast."}),p.jsxs("p",{children:[p.jsx("span",{className:"accent",children:"Deciding what’s worth making"})," is still mine."]})]})]})]})}const Dh=[{id:"romeo",name:"Romeo Roy",what:"AI architect, advisor & trainer"},{id:"engineers",name:"Nina & Sam",what:"web & automation · found me through ChatGPT"},{id:"accountant",name:"my accountant",what:"never automated"},{id:"lucerne",name:"Lukas",what:"software architect, former CTO, Lucerne"},{id:"clients",name:"my clients and students",what:null,below:!0}],q_=Dh.length+1,FR=q_+1,OR=Dh.map(t=>{const e=H_[t.id],n=e.reduce((r,s)=>r+s.x,0)/e.length,i=e.reduce((r,s)=>r+s.z,0)/e.length;return[n,t.below?-2:30,i]});function kR({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,[o,a]=te.useState(null),l=s||o!==null;return te.useEffect(()=>{if(s||o===null||t!==0)return;const c=setTimeout(()=>r.levelUp(),0);return()=>clearTimeout(c)},[o===null]),p.jsxs("div",{className:`screen s16 ${s?"instant":""}`,children:[p.jsx(V_,{width:1920,height:1080,lit:mi.length,instant:s,lightsInstant:!0,startCamera:s?"universe":"office",camera:"universe",people:!0,anchors:OR,onAnchors:a}),o&&Dh.map((c,d)=>p.jsxs("div",{className:`s16-label ${c.below?"below":""} reveal ${t>=d+1?"on":""}`,style:{left:o[d].x,top:o[d].y},children:[p.jsx("b",{children:c.name}),c.what&&p.jsx("span",{children:c.what})]},c.id)),p.jsx("h1",{className:`pixel s16-title ${l?"on":""}`,children:"My universe"}),p.jsxs("p",{className:`s16-line reveal ${t>=q_?"on":""}`,children:["AI let me build a company alone. ",p.jsx("span",{className:"accent",children:"It never let me work alone."})]})]})}function BR({beat:t,dir:e,reduced:n,preview:i}){return p.jsx(Ih,{beat:t,instant:n||i||e<1,lines:[{text:p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"accent",children:"Mistakes included."})," As promised."]})}]})}const K_=[{date:"26-28 Oct 2026",text:p.jsx(p.Fragment,{children:"GitHub flagged 106 malicious npm/PyPI packages in three days. Three were named “claudeopus...”-something: infostealers using Claude’s name as bait."}),source:"GitHub advisories via safeguard.sh"},{date:"8 Oct 2026",text:p.jsx(p.Fragment,{children:"VirusTotal analysed 35,878 AI agent skills: 18.5% malicious. 62% of those contain no code at all, just plain-language instructions telling the agent to steal (.env files, keys, wallet secrets)."}),source:"VirusTotal blog"},{date:"Aug 2026 (Black Hat)",text:p.jsx(p.Fragment,{children:"Two lookalike skills hit a marketplace’s trending list, ~1.7M downloads, built to steal SSH keys, cloud credentials and .env files."}),source:"CSO Online / Zenity"}],Z_=K_.length+1,zR=Z_+1;function HR({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1;return p.jsxs("div",{className:`screen s18a ${r?"instant":""}`,children:[p.jsx("p",{className:"pixel tag s18a-kicker",children:"This month’s news"}),p.jsx("div",{className:"s18a-cards",children:K_.map((s,o)=>p.jsxs("article",{className:`s18a-card reveal ${t>=o+1?"on":""}`,children:[p.jsx("p",{className:"pixel s18a-date",children:s.date}),p.jsx("p",{className:"s18a-text",children:s.text}),p.jsxs("p",{className:"s18a-source",children:["Source: ",s.source]})]},s.date))}),p.jsxs("div",{className:`s18a-bottom reveal ${t>=Z_?"on":""}`,children:[p.jsxs("p",{className:"s18a-line",children:["The attack is now written in plain English. ",p.jsx("span",{className:"accent",children:"Your language."})," That makes it a communication problem too."]}),p.jsx("p",{className:"s18a-honesty",children:"Honesty note: the open-source scanners (incl. the Cisco one I use) missed 36-71% of malicious skills in that test. That’s why my last step is a human-readable review, not a scan."})]})]})}const gg=lc.illustration,Uh=[".......y.......","......yyd......","......yyd......",".....yyydd.....",".....yyydd.....","yyyyyyyyyyddddd",".yyyyyyyyyyddd.","..yyyyyyyyydd..","...yyyyyyyyd...","...yyyyyyyyd...","..yyyyyddyydd..","..yyyyd..yydd..",".yyyd......ydd.",".yyd........dd.","yd............d"],vg={y:gg.yellow,d:gg.yellow_dark},Mf=Math.ceil(Uh[0].length/2),VR=Uh.map(t=>t.slice(0,Mf)),GR=Uh.map(t=>".".repeat(Mf)+t.slice(Mf)),jR=3;function WR({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,o=t>=1;return te.useEffect(()=>{o&&!s&&r.crack()},[o]),p.jsxs("div",{className:`screen s18 ${s?"instant":""} ${n||i?"still":""}`,children:[p.jsxs("div",{className:"s18-stage",children:[p.jsxs("div",{className:`s18-review ${o?"on":""}`,children:[p.jsx("p",{className:"pixel s18-review-label",children:"Failed my review"}),p.jsxs("ul",{children:[p.jsx("li",{children:"a bundled script searched up to 5 folders for a .env file (API keys) and loaded the first it found"}),p.jsx("li",{children:"telemetry on by default"})]})]}),p.jsxs("div",{className:`s18-star ${o?"cracked":""}`,children:[p.jsx(Gs,{rows:VR,palette:vg,px:32,className:"s18-half s18-left"}),p.jsx(Gs,{rows:GR,palette:vg,px:32,className:"s18-half s18-right"}),!o&&p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"s18-sparkle",style:{left:-40,top:60}}),p.jsx("span",{className:"s18-sparkle",style:{left:470,top:20,animationDelay:"0.5s"}}),p.jsx("span",{className:"s18-sparkle",style:{left:500,top:330,animationDelay:"1.1s"}}),p.jsx("span",{className:"s18-sparkle",style:{left:-10,top:400,animationDelay:"1.6s"}})]})]})]}),p.jsxs("div",{className:"s18-text",children:[p.jsx("p",{className:"pixel tag s18-kicker",children:"The golden star"}),p.jsx("h1",{children:"A tool with 72,000 GitHub stars."}),p.jsxs("p",{className:`s18-line reveal ${t>=2?"on":""}`,children:["Stars tell you a tool is popular, ",p.jsx("span",{className:"accent",children:"not what it does with your files."})]})]})]})}const _g=lc.illustration,XR=[".yyy..........","yddy..........","yd.yyyyyyyyyyy","yddy.....y.y.y",".yyy.....y.y.."],Q_=[{name:"Claude chat",what:"you talk"},{name:"Claude Code",what:"it acts on your computer"},{name:"API key",what:p.jsxs(p.Fragment,{children:["lets software use the model, billed to you: ",p.jsx("span",{className:"accent",children:"whoever has it spends your money"})]})}],$R=2+Q_.length;function YR({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1,o=t>=1,[a,l]=te.useState(!1);return te.useEffect(()=>{if(!o||s)return;const c=[setTimeout(()=>r.drop(),0),setTimeout(()=>{l(!0),r.alarm()},520),setTimeout(()=>l(!1),700)];return()=>c.forEach(clearTimeout)},[o]),p.jsxs("div",{className:`screen s19 ${s?"instant":""}`,children:[p.jsxs("div",{className:"s19-top",children:[p.jsxs("div",{className:"s19-scene",children:[p.jsx(Gs,{rows:XR,palette:{y:_g.yellow,d:_g.yellow_dark},px:30,className:`s19-key ${o?"fallen":""}`}),p.jsx("div",{className:"s19-ground",children:p.jsx("span",{className:"s19-pit"})})]}),p.jsxs("div",{className:"s19-text",children:[p.jsx("p",{className:"pixel tag s19-kicker",children:"The leaked key"}),p.jsx("h1",{children:"An old API key from an earlier video flow sat in my project."}),p.jsx("p",{className:`s19-audit reveal ${o?"on":""}`,children:"A Claude audit found it. Deleted and replaced in minutes."})]})]}),p.jsx("div",{className:"s19-doors",children:Q_.map((c,d)=>p.jsxs("article",{className:`s19-door reveal ${t>=2+d?"on":""}`,children:[p.jsx("span",{className:"s19-door-icon","aria-hidden":"true"}),p.jsxs("div",{children:[p.jsx("h2",{children:c.name}),p.jsx("p",{children:c.what})]})]},c.name))}),a&&p.jsx("div",{className:"s19-flash"})]})}function qR({filename:t,width:e="100%",height:n=240,style:i}){return p.jsxs("div",{style:{width:e,height:n,background:"var(--placeholder)",color:"var(--navy)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,textAlign:"center",padding:16,...i},children:[p.jsx("span",{style:{fontSize:16,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase"},children:"Placeholder"}),p.jsxs("span",{style:{fontSize:18,fontWeight:500},children:["public/assets/",t]})]})}const KR="screenshots/access-prompt.png",xg={x:78,y:86},ZR=["nothing","one folder","whole computer","can delete and send"],QR=3;function JR({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1;return p.jsxs("div",{className:`screen s20 ${r?"instant":""} ${n||i?"still":""}`,children:[p.jsxs("div",{className:"s20-top",children:[p.jsxs("div",{className:"s20-text",children:[p.jsx("p",{className:"pixel tag s20-kicker",children:"Live"}),p.jsx("p",{className:"s20-story",children:"“Preparing this talk, Claude asked for one folder on my computer. Then it asked for more. I clicked yes.”"}),p.jsx("p",{className:`s20-ask reveal ${t>=1?"on":""}`,children:"Would you?"})]}),p.jsxs("div",{className:"s20-shot",children:[p.jsx(qR,{filename:KR,width:820,height:560}),p.jsxs("svg",{className:"s20-cursor",style:{left:`${xg.x}%`,top:`${xg.y}%`},width:"40",height:"56",viewBox:"0 0 10 14","aria-hidden":"true",children:[p.jsx("polygon",{points:"0,0 0,11 3,8.5 5,13.4 7,12.4 5,7.8 9,7.8",fill:"#1b3644"}),p.jsx("polygon",{points:"1,2.4 1,8.8 3.3,6.9 5.4,11.6 5.8,11.3 3.8,6.8 6.6,6.8",fill:"#ffffff"})]})]})]}),p.jsx("ol",{className:`s20-ladder reveal ${t>=2?"on":""}`,children:ZR.map((s,o)=>p.jsx("li",{style:{height:70+o*50},children:s},s))})]})}const J_=[{tag:"Pillar 1",text:"Give the minimum access."},{tag:"Pillar 2",text:"Keys are money."},{tag:"Pillar 3",text:"Never paste what isn’t yours."},{tag:"Pillar 4",text:"Read before it runs."}],e2=L_(J_);function t2(t){return p.jsx(I_,{...t,sentence:"Your pillars",moves:J_})}const n2=2;function i2({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1;return p.jsxs("div",{className:`screen s11 ${r?"instant":""}`,children:[p.jsx("p",{className:"s22-line",children:"Your turn to play."}),p.jsx("p",{className:`pixel tag s11-next reveal ${t>=1?"on":""}`,children:"→ Player 2 has joined"})]})}const ex=[null,[10,1,16,0,0],[16,1,28,0,0],[26,1,44,0,0],[18,2,32,0,0],[24,2,43,0,0],[16,4,27,0,0],[18,4,31,0,0],[22,2,38,2,39],[22,3,36,2,37],[26,4,43,1,44]],r2=[null,[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50]],s2=0,Ho=new Array(512),Ef=new Array(256);{let t=1;for(let e=0;e<255;e++)Ho[e]=t,Ef[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)Ho[e]=Ho[e-255]}const tx=(t,e)=>t===0||e===0?0:Ho[Ef[t]+Ef[e]];function o2(t){let e=[1];for(let n=0;n<t;n++){const i=new Array(e.length+1).fill(0);for(let r=0;r<e.length;r++)i[r]^=e[r],i[r+1]^=tx(e[r],Ho[n]);e=i}return e}function a2(t,e){const n=o2(e),i=new Array(e).fill(0);for(const r of t){const s=r^i.shift();i.push(0);for(let o=0;o<e;o++)i[o]^=tx(n[o+1],s)}return i}function l2(t,e){const n=t<<3|e;let i=n;for(let r=0;r<10;r++)i=i<<1^(i>>>9)*1335;return(n<<10|i)^21522}function c2(t){let e=t;for(let n=0;n<12;n++)e=e<<1^(e>>>11)*7973;return t<<12|e}const u2=[(t,e)=>(t+e)%2===0,t=>t%2===0,(t,e)=>e%3===0,(t,e)=>(t+e)%3===0,(t,e)=>(Math.floor(t/2)+Math.floor(e/3))%2===0,(t,e)=>t*e%2+t*e%3===0,(t,e)=>(t*e%2+t*e%3)%2===0,(t,e)=>((t+e)%2+t*e%3)%2===0];function Tf(t){const[,e,n,i,r]=ex[t];return e*n+i*r}class d2{constructor(e){this.size=e,this.dark=Array.from({length:e},()=>new Array(e).fill(!1)),this.fn=Array.from({length:e},()=>new Array(e).fill(!1))}set(e,n,i){this.dark[e][n]=i,this.fn[e][n]=!0}}function f2(t,e){const n=t.size;for(let r=0;r<n;r++)t.set(6,r,r%2===0),t.set(r,6,r%2===0);for(const[r,s]of[[0,0],[0,n-7],[n-7,0]])for(let o=-1;o<=7;o++)for(let a=-1;a<=7;a++){const l=r+o,c=s+a;if(l<0||c<0||l>=n||c>=n)continue;const d=Math.max(Math.abs(o-3),Math.abs(a-3));t.set(l,c,d!==2&&d!==4)}const i=r2[e];for(const r of i)for(const s of i)if(!(r===6&&s===6||r===6&&s===n-7||r===n-7&&s===6))for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)t.set(r+o,s+a,Math.max(Math.abs(o),Math.abs(a))!==1);if(nx(t,0),e>=7){const r=c2(e);for(let s=0;s<18;s++){const o=(r>>>s&1)===1,a=n-11+s%3,l=Math.floor(s/3);t.set(a,l,o),t.set(l,a,o)}}}function nx(t,e){const n=t.size,i=l2(s2,e),r=s=>(i>>>s&1)===1;for(let s=0;s<=5;s++)t.set(s,8,r(s));t.set(7,8,r(6)),t.set(8,8,r(7)),t.set(8,7,r(8));for(let s=9;s<15;s++)t.set(8,14-s,r(s));for(let s=0;s<8;s++)t.set(8,n-1-s,r(s));for(let s=8;s<15;s++)t.set(n-15+s,8,r(s));t.set(n-8,8,!0)}function h2(t,e){const n=[],i=(o,a)=>{for(let l=a-1;l>=0;l--)n.push(o>>>l&1)};i(4,4),i(t.length,e<=9?8:16);for(const o of t)i(o,8);const r=Tf(e)*8;for(i(0,Math.min(4,r-n.length));n.length%8;)n.push(0);const s=[];for(let o=0;o<n.length;o+=8)s.push(parseInt(n.slice(o,o+8).join(""),2));for(let o=0;s.length<Tf(e);o++)s.push(o%2?17:236);return s}function p2(t,e){const[n,i,r,s,o]=ex[e],a=[];let l=0;for(let f=0;f<i+s;f++){const h=f<i?r:o,m=t.slice(l,l+h);l+=h,a.push({d:m,e:a2(m,n)})}const c=[],d=Math.max(r,o);for(let f=0;f<d;f++)for(const h of a)f<h.d.length&&c.push(h.d[f]);for(let f=0;f<n;f++)for(const h of a)c.push(h.e[f]);return c}function m2(t,e){const n=t.size;let i=0;const r=e.length*8;for(let s=n-1;s>=1;s-=2){s===6&&(s=5);for(let o=0;o<n;o++)for(let a=0;a<2;a++){const l=s-a,d=(s+1&2)===0?n-1-o:o;t.fn[d][l]||(i<r&&(t.dark[d][l]=(e[i>>>3]>>>7-(i&7)&1)===1),i++)}}}function g2(t,e){const n=u2[e];for(let i=0;i<t.size;i++)for(let r=0;r<t.size;r++)!t.fn[i][r]&&n(i,r)&&(t.dark[i][r]=!t.dark[i][r])}function v2(t){const e=t.length;let n=0;const i=[];for(let a=0;a<e;a++)i.push(t[a]),i.push(t.map(l=>l[a]));const r=[!0,!1,!0,!0,!0,!1,!0,!1,!1,!1,!1],s=[!1,!1,!1,!1,!0,!1,!0,!0,!0,!1,!0];for(const a of i){let l=1;for(let c=1;c<=e;c++)c<e&&a[c]===a[c-1]?l++:(l>=5&&(n+=l-2),l=1);for(let c=0;c+11<=e;c++){let d=!0,f=!0;for(let h=0;h<11;h++)a[c+h]!==r[h]&&(d=!1),a[c+h]!==s[h]&&(f=!1);d&&(n+=40),f&&(n+=40)}}for(let a=0;a<e-1;a++)for(let l=0;l<e-1;l++){const c=t[a][l];c===t[a][l+1]&&c===t[a+1][l]&&c===t[a+1][l+1]&&(n+=3)}let o=0;for(const a of t)for(const l of a)l&&o++;return n+=Math.floor(Math.abs(o*20/(e*e)-10))*10,n}function _2(t){const e=[...new TextEncoder().encode(t)];let n=1;for(;n<=10&&e.length+(n<=9?2:3)>Tf(n);)n++;if(n>10)throw new Error("QR: text too long");const i=p2(h2(e,n),n);let r=null;for(let s=0;s<8;s++){const o=new d2(17+n*4);f2(o,n),m2(o,i),g2(o,s),nx(o,s);const a=v2(o.dark);(!r||a<r.p)&&(r={p:a,m:o.dark,mask:s})}return r.m}function ix({text:t,size:e=360,className:n,style:i}){const r=te.useMemo(()=>_2(t),[t]),s=r.length+8;let o="";return r.forEach((a,l)=>a.forEach((c,d)=>{c&&(o+=`M${d+4} ${l+4}h1v1h-1z`)})),p.jsxs("svg",{className:n,style:i,width:e,height:e,viewBox:`0 0 ${s} ${s}`,shapeRendering:"crispEdges",role:"img","aria-label":`QR code: ${t}`,children:[p.jsx("rect",{width:s,height:s,fill:"#ffffff"}),p.jsx("path",{d:o,fill:"#1b3644"})]})}const rx="https://juanitagm.github.io/onewomanshow/play.html",Pc="juanitagm.github.io/onewomanshow/play.html",x2=2;function y2({beat:t,dir:e,reduced:n,preview:i,sfx:r}){const s=n||i||e<1;return te.useEffect(()=>{if(s)return;const o=[setTimeout(()=>r.levelUp(),150),setTimeout(()=>r.pop(),750)];return()=>o.forEach(clearTimeout)},[]),p.jsxs("div",{className:`screen s23 ${s?"instant":""}`,children:[p.jsx("div",{className:"s23-banner",children:p.jsx("p",{className:"pixel",children:"Player 2 has joined"})}),p.jsxs("div",{className:"s23-body",children:[p.jsxs("div",{className:"s23-left",children:[p.jsxs("p",{className:"s23-line",children:["Scan. For the next 8 minutes, ",p.jsx("span",{className:"accent",children:"you’re me."})]}),p.jsx("ul",{className:"s23-controls",children:p.jsxs("li",{children:[p.jsx("span",{className:"pixel tag",children:"Phone"})," tap = jump · hold = stop / listen"]})}),p.jsx("p",{className:`s23-hands reveal ${t>=1?"on":""}`,children:"Hands up: who passed 1,000?"})]}),p.jsxs("figure",{className:"s23-qr",children:[p.jsx(ix,{text:rx,size:460}),p.jsx("figcaption",{children:Pc})]})]})]})}const sx=["Who stopped at the listening door?","Who grabbed the golden star?","Who ran out of tokens?"],S2=sx.length+1;function M2({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1;return p.jsxs("div",{className:`screen s24 ${r?"instant":""}`,children:[p.jsx("p",{className:"pixel tag s24-kicker",children:"Debrief"}),p.jsxs("div",{className:"s24-end",children:[p.jsx("p",{children:"Agents gave you speed."}),p.jsx("p",{children:"People opened the doors."}),p.jsx("p",{className:"accent",children:"Visibility made them find you."})]}),p.jsx("ul",{className:"s24-questions",children:sx.map((s,o)=>p.jsx("li",{className:`reveal ${t>=o+1?"on":""}`,children:s},s))})]})}const dl=10*60*1e3;let Mo=null;const ox=Pc.indexOf("/")+1,E2=Pc.slice(0,ox),T2=Pc.slice(ox),w2=t=>{const e=Math.ceil(t/1e3);return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`};function A2({preview:t,sfx:e}){const[n,i]=te.useState(dl);return te.useEffect(()=>{if(t)return;(Mo===null||Date.now()-Mo>=dl)&&(Mo=Date.now());let r=Date.now()-Mo>=dl;const s=()=>{const a=Math.max(0,dl-(Date.now()-Mo));i(a),a===0&&!r&&(r=!0,e.chime())};s();const o=setInterval(s,250);return()=>clearInterval(o)},[]),p.jsxs("div",{className:"screen s25",children:[p.jsx("p",{className:"pixel tag s25-kicker",children:"Break"}),p.jsx("p",{className:`pixel s25-clock ${n===0?"done":""}`,"aria-live":"off",children:w2(n)}),p.jsxs("div",{className:"s25-bottom",children:[p.jsxs("p",{className:"s25-line",children:["The game stays open. ",p.jsx("span",{className:"accent",children:"Beat the high score."})]}),p.jsxs("figure",{className:"s25-qr",children:[p.jsx(ix,{text:rx,size:260}),p.jsxs("figcaption",{children:[E2,p.jsx("br",{}),T2]})]})]})]})}const C2=[{id:"R1",parts:["Develop and manage the AI and automation portfolio, aligned with the marketing strategy."]},{id:"R2",parts:["Identify AI and automation opportunities across campaigns, content and customer experience."]},{id:"R3",parts:["Optimise cross-departmental processes, so teams have more capacity for creative, strategic work."]},{id:"R4",icon:"door",parts:["Turn the teams’ needs into ",{hl:"green",text:"use cases"}," and guide them through ",{hl:"green",text:"pilots, scaling and handover"},"."]},{id:"R5",parts:["Define goals and ",{hl:"green",text:"KPIs"}," that show the impact of AI use cases."]},{id:"R6",icon:"bodyguard",parts:["Ensure ",{hl:"green",text:"responsible AI use"},": data protection, compliance, transparency, quality."]}],R2=[{id:"Q1",parts:["Several years in marketing and in process, project, product or portfolio management."]},{id:"Q2",parts:[{hl:"orange",text:"Solid knowledge of AI"},", marketing automation, CRM, analytics, digital platforms."]},{id:"Q3",parts:["Good understanding of customer journeys and marketing."]},{id:"Q4",parts:[{hl:"orange",text:"Analytical, networked thinking"},"; customer focus; clear priorities."]},{id:"Q5",icon:"door",parts:[{hl:"green",text:"Audience-appropriate communication"},"; very good German."]},{id:"Q6",parts:["Degree in marketing, business administration, business informatics or similar."]}],No=["Change communication (people’s fear of AI)","Training the teams (AI literacy)","Aligning departments","Telling the story of results, not only KPIs"],b2=2,P2=3,N2=No.length+2,L2=["ffffffff","fwwwwwwf","fwddddwf","fwddddwf","fwddddwf","fwwwwwwf","fwddddwf","fwddddwk","fwddddwf","fwwwwwwf","ffffffff"],I2={f:"#7a4a2b",w:"#e5b77a",d:"#d99a5b",k:"#ffd36b"};function D2({kind:t,bodyguard:e}){return t==="door"?p.jsx(Gs,{rows:L2,palette:I2,px:4,className:"jd-icon"}):p.jsx("span",{className:"jd-icon",children:p.jsx(oc,{cubes:e,px:2})})}function yg({line:t,on:e,instant:n,bodyguard:i}){const r=t.icon&&e.green;return p.jsxs("li",{className:"jd-line",children:[p.jsx("span",{className:"pixel jd-id",children:t.id}),p.jsx("p",{children:t.parts.map((s,o)=>typeof s=="string"?s:p.jsx("mark",{className:`jd-hl jd-hl-${s.hl} ${e[s.hl]?"on":""} ${n?"instant":""}`,style:n?void 0:{transitionDelay:`${s.delay}ms`},children:s.text},o))}),p.jsx("span",{className:`jd-icon-wrap ${r?"on":""} ${n?"instant":""}`,children:t.icon&&p.jsx(D2,{kind:t.icon,bodyguard:i})})]})}function U2({stage:t,beat:e,dir:n,reduced:i,preview:r,sfx:s}){const o=i||r||n<1,a=te.useMemo(()=>cc(Vo.find(g=>g.id==="bodyguard")).body,[]),l=t!=="card"||e>=1,c={green:t==="missing"||t==="highlight"&&e>=1,orange:t==="missing"||t==="highlight"&&e>=2},d=t==="missing"?Math.min(e,No.length):0,f=t==="missing"&&e>=No.length+1,h=te.useRef(e);te.useEffect(()=>{const g=h.current;if(h.current=e,!(o||e<=g)){if(t==="card"&&e===1){const x=setTimeout(()=>s.thud(),380);return()=>clearTimeout(x)}if(t==="highlight"){const x=e===1?5:2,S=Array.from({length:x},(N,C)=>setTimeout(()=>s.marker(),C*260));return()=>S.forEach(clearTimeout)}if(t==="missing"&&e<=No.length){const x=setTimeout(()=>s.slap(),120);return()=>clearTimeout(x)}}},[e]);let m={green:0,orange:0};const _=g=>g.map(x=>({...x,parts:x.parts.map(S=>typeof S=="string"?S:{...S,delay:m[S.hl]++*260})})),y=_(C2),v=_(R2),u=t==="card"&&!o;return p.jsxs("div",{className:`screen jd jd-${t} ${o?"instant":""} ${u?"builds":""}`,children:[p.jsxs("article",{className:"jd-card",children:[p.jsxs("header",{className:"jd-head",children:[p.jsxs("div",{children:[p.jsx("p",{className:"pixel tag jd-kicker",children:"Job ad"}),p.jsx("h1",{className:"jd-title",children:"AI Portfolio & Process Manager Marketing"}),p.jsx("p",{className:"jd-meta",children:"SBB · Zürich · posted 22 Oct 2026"}),p.jsxs("div",{className:"jd-legend",children:[p.jsx("span",{className:`jd-chip jd-chip-green ${c.green?"on":""}`,children:"Real, and it’s my year"}),p.jsx("span",{className:`jd-chip jd-chip-orange ${c.orange?"on":""}`,children:"Vague"})]})]}),p.jsxs("div",{className:`jd-salary ${l?"on":""} ${o||t!=="card"?"instant":""}`,children:[p.jsx("p",{className:"jd-salary-amount",children:"CHF 98,670 - 144,798"}),p.jsx("p",{className:"jd-salary-note",children:"published by SBB"})]})]}),p.jsxs("div",{className:"jd-cols",children:[p.jsxs("section",{children:[p.jsx("h2",{className:"pixel jd-col-title",children:"Responsibilities"}),p.jsx("ul",{children:y.map(g=>p.jsx(yg,{line:g,on:c,instant:o,bodyguard:a},g.id))})]}),p.jsxs("section",{children:[p.jsx("h2",{className:"pixel jd-col-title",children:"Requirements"}),p.jsx("ul",{children:v.map(g=>p.jsx(yg,{line:g,on:c,instant:o,bodyguard:a},g.id))})]})]}),p.jsx("p",{className:"jd-source",children:"Source: medienjobs.ch, 22 Oct 2026 · text shortened"})]}),t==="missing"&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"jd-notes",children:No.map((g,x)=>p.jsxs("div",{className:`jd-note jd-note-${x} ${x<d?"on":""} ${o?"instant":""}`,children:[p.jsx("p",{className:"pixel jd-note-head",children:"Missing"}),p.jsx("p",{className:"jd-note-text",children:g})]},g))}),p.jsxs("p",{className:`jd-line-final reveal ${f?"on":""}`,children:["This job is what I did this year, as a company of one. And the missing parts?"," ",p.jsx("span",{className:"accent",children:"That’s communication."})]})]})]})}const ax=["Since Feb 2025, organisations using AI in the EU must take measures so their people are AI-literate.","Still mandatory after the 2026 Digital Omnibus.","Swiss companies working with the EU are affected."],lx=ax.length,F2=lx+1;function O2({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1;return p.jsxs("div",{className:`screen s29 ${r?"instant":""}`,children:[p.jsx("p",{className:"pixel tag s29-kicker",children:"EU AI Act · Article 4"}),p.jsx("div",{className:"s29-facts",children:ax.map((s,o)=>p.jsx("p",{className:`s29-fact ${o===0?"lead":""} reveal ${t>=o?"on":""}`,children:s},s))}),p.jsxs("div",{className:`s29-save reveal ${t>=lx?"on":""}`,children:[p.jsx(Gs,{rows:P_,palette:N_,px:6}),p.jsx("span",{className:"pixel s29-save-label",children:"Save point"}),p.jsx("span",{className:"pixel sp-tag sp-tag-manager s29-tag",children:"With a manager"}),p.jsxs("p",{className:"s29-line",children:["Someone has to own that. ",p.jsx("span",{className:"accent",children:"Why not you?"})]})]})]})}const cx=["Carl Sagan: astronomer, NASA scientist, and the face of science communication. His series Cosmos made the universe understandable to millions.","In 1992 the US National Academy of Sciences rejected him: too popular to be serious.","Two years later, the same Academy gave him its Public Welfare Medal."],ux=cx.length,k2=ux+1;function B2({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1;return p.jsxs("div",{className:`screen s30 ${r?"instant":""}`,children:[p.jsx("p",{className:"pixel tag s30-kicker",children:"The Sagan effect"}),p.jsx("div",{className:"s30-story",children:cx.map((s,o)=>p.jsx("p",{className:`s30-sentence reveal ${t>=o?"on":""}`,children:s},s))}),p.jsxs("p",{className:`s30-line reveal ${t>=ux?"on":""}`,children:["Visible isn’t unserious. ",p.jsx("span",{className:"accent",children:"Playful isn’t unprofessional."})]})]})}function z2(t){return p.jsx(ga,{...t,size:104,lines:["AI let me build a company alone.","It never let me work alone."]})}const dx=t=>({x:t,y:0,z:-99,c:"transparent"}),Vi=(t,e,n,i,r,s)=>{for(let o=e;o<=n;o++)for(let a=i;a<=r;a++)for(let l=-1;l<=1;l++)t.push({x:o,y:a,z:l,c:s})};function H2(){const t=Mx,e=wf.filter(r=>!(r.part==="armR"&&r.y<17)),n=[...e];Vi(n,7,8,18,27,t.shirt),Vi(n,7,8,28,29,t.skin),n.push(dx(10));const i=[...e];return Vi(i,7,8,18,22,t.shirt),Vi(i,8,9,23,26,t.shirt),Vi(i,9,10,27,28,t.skin),[n,i]}const fx={designer:1,bodyguard:1,ghostwriter:-1,sparring:0};function V2(t){const e=cc(t).body,n=fx[t.id]??1;if(n===0)return[e,e];const i=l=>l.c===xa.arms&&l.y>=6&&l.y<=12&&Math.sign(l.x)===n&&Math.abs(l.x)>=4,r=e.filter(l=>!i(l)),s=(l,c)=>n>0?[l,c]:[-c,-l],o=[...r];Vi(o,...s(5,6),11,18,xa.arms),o.push(dx(n*7));const a=[...r];return Vi(a,...s(5,6),11,14,xa.arms),Vi(a,...s(6,7),15,18,xa.arms),[o,a]}const G2=H2(),j2=Vo.map(t=>({id:t.id,name:t.name,frames:V2(t),hops:fx[t.id]===0}));let tt=null,nr=null,ac=!1;const hx=.9;function W2(){if(!tt){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;tt=new t,nr=tt.createGain(),nr.gain.value=ac?0:hx,nr.connect(tt.destination)}tt.state==="suspended"&&tt.resume()}function X2(t){ac=t,nr&&nr.gain.setTargetAtTime(ac?0:hx,tt.currentTime,.01)}function Xt(){return tt&&tt.state==="running"&&!ac}function Et({type:t="square",freq:e,at:n=0,dur:i,gain:r=.06,slideTo:s}){const o=tt.currentTime+n,a=tt.createOscillator(),l=tt.createGain();a.type=t,a.frequency.setValueAtTime(e,o),s&&a.frequency.exponentialRampToValueAtTime(s,o+i),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(r,o+.006),l.gain.exponentialRampToValueAtTime(1e-4,o+i),a.connect(l).connect(nr),a.start(o),a.stop(o+i+.02)}function ys({at:t=0,dur:e,gain:n=.1,freq:i=400,type:r="lowpass"}){const s=tt.currentTime+t,o=Math.ceil(tt.sampleRate*e),a=tt.createBuffer(1,o,tt.sampleRate),l=a.getChannelData(0);for(let h=0;h<o;h++)l[h]=Math.random()*2-1;const c=tt.createBufferSource();c.buffer=a;const d=tt.createBiquadFilter();d.type=r,d.frequency.value=i;const f=tt.createGain();f.gain.setValueAtTime(n,s),f.gain.exponentialRampToValueAtTime(1e-4,s+e),c.connect(d).connect(f).connect(nr),c.start(s),c.stop(s+e+.02)}const Ws={level(){Xt()&&(Et({freq:392,dur:.1,gain:.05}),Et({freq:587.33,at:.1,dur:.18,gain:.05}))},ding(t=.5){if(!Xt())return;const e=.015+t*.07;Et({type:"sine",freq:1318.5,dur:.22,gain:e}),Et({type:"sine",freq:1975.5,at:.07,dur:.28,gain:e*.8})},thud(){Xt()&&(Et({type:"sine",freq:110,slideTo:38,dur:.35,gain:.35}),ys({dur:.18,gain:.25,freq:280}))},lamp(){Xt()&&(ys({dur:.025,gain:.18,freq:3500,type:"highpass"}),Et({type:"square",freq:2200,dur:.02,gain:.025}))},drop(){Xt()&&Et({type:"square",freq:660,slideTo:330,dur:.12,gain:.04})},alarm(){Xt()&&[0,.16].forEach(t=>Et({type:"square",freq:440,slideTo:330,at:t,dur:.14,gain:.05}))},crack(){Xt()&&(ys({dur:.22,gain:.22,freq:1800,type:"bandpass"}),Et({type:"sawtooth",freq:300,slideTo:90,dur:.25,gain:.04}))},door(){Xt()&&(ys({dur:.04,gain:.12,freq:2500,type:"bandpass"}),Et({type:"triangle",freq:180,slideTo:120,at:.04,dur:.4,gain:.05}))},start(){Xt()&&([523.25,659.25,783.99,1046.5].forEach((t,e)=>Et({freq:t,at:e*.065,dur:.09})),Et({freq:1046.5,slideTo:2093,at:.28,dur:.32,gain:.05}),Et({type:"triangle",freq:130.81,at:0,dur:.5,gain:.08}))},tick(){Xt()&&Et({freq:1760,dur:.035,gain:.035})},levelUp(){Xt()&&([659.25,880,1174.66,1567.98].forEach((t,e)=>Et({freq:t,at:e*.055,dur:.12,gain:.055})),Et({type:"triangle",freq:392,at:0,dur:.45,gain:.08}))}};Ws.pop=function(){Xt()&&Et({freq:880,slideTo:1760,dur:.08,gain:.05})};Ws.marker=function(){Xt()&&ys({dur:.45,gain:.06,freq:2600,type:"bandpass"})};Ws.slap=function(){Xt()&&(ys({dur:.07,gain:.3,freq:1200,type:"lowpass"}),Et({type:"sine",freq:160,slideTo:70,dur:.12,gain:.12}))};Ws.chime=function(){Xt()&&[783.99,1046.5,1318.51].forEach((e,n)=>Et({type:"triangle",freq:e,at:n*.18,dur:.6,gain:.07}))};const fl=t=>{const e=t.match(/^([A-G])(#?)(\d)$/),n={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[e[1]]+(e[2]?1:0);return 440*Math.pow(2,(n+(Number(e[3])-4)*12-9)/12)},$2=[["C3","C4","E4","G4"],["A2","A3","C4","E4"],["F2","F3","A3","C4"],["G2","G3","B3","D4"],["C3","C4","E4","G4"],["E2","E3","G3","B3"],["F2","F3","A3","C4"],["G2","G3","B3","D4"]],Y2=[["E5",2],["G5",2],["C6",3],["B5",1],["A5",2],["E5",2],["C5",4],["F5",2],["A5",2],["G5",2],["F5",2],["D5",3],["E5",1],["G5",4],["E5",2],["G5",2],["C6",2],["D6",2],["B5",3],["G5",1],["E5",4],["A5",2],["G5",2],["F5",2],["A5",2],["G5",6],[null,2]];function q2(){if(!tt||tt.state!=="running")return()=>{};const t=tt.createGain();t.gain.value=1,t.connect(nr);const e=60/104/2,n=e*8,i=n*8;let r=tt.currentTime+.1,s=!1;const o=(c,d,f,h,m)=>{const _=tt.createOscillator(),y=tt.createGain();_.type=c,_.frequency.value=d,y.gain.setValueAtTime(1e-4,f),y.gain.exponentialRampToValueAtTime(m,f+.01),y.gain.exponentialRampToValueAtTime(1e-4,f+h),_.connect(y).connect(t),_.start(f),_.stop(f+h+.02)},a=c=>{$2.forEach((f,h)=>{const m=c+h*n;o("triangle",fl(f[0]),m,e*3.5,.09),o("triangle",fl(f[0]),m+e*4,e*3.5,.08);for(let _=0;_<8;_++)o("square",fl(f[1+_%3]),m+_*e,e*.8,.012)});let d=c;for(const[f,h]of Y2)f&&o("square",fl(f),d,e*h*.9,.028),d+=e*h};a(r);const l=setInterval(()=>{s||tt.currentTime>r+i-1&&(r+=i,a(r))},250);return(c=.6)=>{if(s)return;s=!0,clearInterval(l);const d=tt.currentTime;t.gain.setValueAtTime(t.gain.value,d),t.gain.linearRampToValueAtTime(0,d+c),setTimeout(()=>t.disconnect(),(c+.1)*1e3)}}const K2={start(){},tick(){},levelUp(){},level(){},ding(){},thud(){},door(){},lamp(){},drop(){},alarm(){},crack(){},pop(){},marker(){},slap(){},chime(){}},Sg=4e4,px=420,Z2=[{title:!0,lines:["One Woman Show"]},{role:"Starring Juani as",lines:["Sales","Marketing","Design","Tech","Teaching","Rejection survivor"]},{role:"Digital colleagues",lines:["The Assistant","The Voice","The Ghostwriter","The Designer","The Bodyguard","The Builder","The Tutor","The Sparring Partner"]},{role:"Humans",lines:["Romeo Roy · AI architect, advisor & trainer","Lukas · software architect","Nina & Sam · web & automation","my accountant (never automated)","my clients","my students"]},{role:"Special thanks",lines:["Camille Nchakga","Prof. Dr. Nadine Strauss","UZH IKMZ"]}];function Mg({frames:t,px:e,hops:n,still:i,offset:r=0}){const[s,o]=te.useState(0);return te.useEffect(()=>{if(i)return;let a;const l=setTimeout(()=>{a=setInterval(()=>o(c=>1-c),px)},r);return()=>{clearTimeout(l),clearInterval(a)}},[i,r]),p.jsx("div",{className:`waver ${n&&s?"hop":""}`,children:p.jsx(oc,{cubes:t[s],px:e})})}function Q2({dir:t,reduced:e,preview:n}){const i=n||t<1,r=te.useRef(null),s=te.useRef(null);te.useEffect(()=>{const a=r.current,l=s.current,c=540-(l.offsetTop+l.offsetHeight/2);if(i){a.style.transform=`translateY(${c}px)`;return}const d=a.animate([{transform:"translateY(1080px)"},{transform:`translateY(${c}px)`}],{duration:Sg,easing:"linear",fill:"forwards"});return()=>d.cancel()},[i]),te.useEffect(()=>{if(i)return;let a=()=>{};const l=setTimeout(()=>{a=q2()},0),c=setTimeout(()=>a(3),Sg-1e3);return()=>{clearTimeout(l),clearTimeout(c),a(.4)}},[i]);const o=e||n;return p.jsxs("div",{className:"screen s32",children:[p.jsxs("aside",{className:"s32-side s32-left",children:[p.jsx(Mg,{frames:G2,px:11,still:o}),p.jsx("p",{className:"pixel s32-side-label",children:"Player 1"})]}),p.jsx("div",{className:"s32-window",children:p.jsxs("div",{className:"s32-roll",ref:r,children:[Z2.map((a,l)=>a.title?p.jsx("h1",{className:"pixel s32-title",children:a.lines[0]},l):p.jsxs("section",{className:"s32-block",children:[p.jsx("h2",{className:"pixel s32-role",children:a.role}),a.lines.map(c=>p.jsx("p",{className:"s32-name",children:c},c))]},l)),p.jsxs("p",{className:"s32-final",ref:s,children:["Your show starts ",p.jsx("span",{className:"accent",children:"now."})]})]})}),p.jsx("aside",{className:"s32-side s32-right",children:p.jsx("div",{className:"s32-colleagues",children:j2.map((a,l)=>p.jsx(Mg,{frames:a.frames,px:4,hops:a.hops,still:o,offset:l*137%px},a.id))})})]})}const J2="/onewomanshow/assets/photos/linkedin-qr.png",mx="linkedin.com/in/juanitaterrapon";function gx({size:t=360,className:e,style:n}){return p.jsx("img",{className:e,src:J2,width:t,height:t,alt:"QR code to Juanita Terrapon on LinkedIn",style:{display:"block",background:"#fff",...n}})}const eb=2;function tb({beat:t,dir:e,reduced:n,preview:i}){const r=n||i||e<1;return p.jsxs("div",{className:`screen s33 ${r?"instant":""} ${n||i?"still":""}`,children:[p.jsxs("div",{className:"s33-left",children:[p.jsx("h1",{className:"pixel s33-continue",children:"Continue?"}),p.jsxs("p",{className:`s33-line reveal ${t>=1?"on":""}`,children:["A question, an idea, a first project? ",p.jsx("span",{className:"accent",children:"Write me."})]})]}),p.jsxs("figure",{className:`s33-qr reveal ${t>=1?"on":""}`,children:[p.jsx(gx,{size:440}),p.jsx("figcaption",{children:mx})]})]})}function nb({reduced:t,preview:e}){return p.jsxs("div",{className:"screen s34",children:[p.jsx("div",{className:"s34-figure",children:p.jsx(Lh,{cubes:wf,width:620,height:952,still:t||e,periodMs:16e3,stillAngle:-.35,distance:110,target:[0,15.5,0]})}),p.jsxs("div",{className:"s34-main",children:[p.jsx("h1",{className:"pixel s34-title",children:"Q&A"}),p.jsxs("div",{className:"s34-contact",children:[p.jsxs("figure",{className:"s34-qr",children:[p.jsx(gx,{size:380}),p.jsx("figcaption",{children:mx})]}),p.jsxs("div",{className:"s34-web",children:[p.jsx("img",{src:"/onewomanshow/assets/logos/juvaiilogofullcolor.png",alt:"JUVAII",className:"s34-logo"}),p.jsx("p",{className:"s34-url",children:"juvaii.com"})]})]})]})]})}const Eo=(t,e)=>n=>p.jsx(U_,{...n,number:t,name:e}),ib=t=>e=>p.jsx(U_,{...e,label:"Side quest",name:t}),ku=t=>e=>p.jsx(U2,{...e,stage:t}),Bn=[{id:"S0",title:"Press Start",Component:ZS,beats:1,exit:"flash",notes:"Press space live; sound. First laugh."},{id:"S1",title:"Character select: Juani",Component:fC,beats:lC,notes:`2 min intro through the stats. Weakness pays off later with The Assistant.
Beats: 1-5 stat bars (Tech levels up 6 → 8) · 6 special ability + weakness · 7 inventory.`},{id:"S1b",title:"The promise",Component:pC,beats:hC,notes:`This is the red thread. Each level ends with a SAVE POINT that turns my story into their move.
One line per press: one year ago · I learned it · Player 2 (orange) · every level + the two tags · the game at the end.`},{id:"L1",title:"Level 1 · The Feed",Component:Eo(1,"The Feed"),beats:1,notes:"Level title."},{id:"S2",title:"The Feed",Component:AC,beats:1,notes:`Real feed screenshots scroll, accelerating, sound rising.
It runs on its own (6 s to a blur, then keeps going). Press when ready: hard cut to silence.`},{id:"S3",title:"Statement: exhausted too",Component:RC,beats:1,enter:"cut",notes:"White statement screen. Line 2 fades in on its own after line 1."},{id:"S4",title:"No hype",Component:PC,beats:bC,notes:"One line per press."},{id:"SP1",title:"Save point · after The Feed",Component:ol("SP1"),beats:sl("SP1"),notes:"Red thread: my story becomes their move. Sentence on arrival · press: WITH A MANAGER · press: ON YOUR OWN."},{id:"L2",title:"Level 2 · The Box",Component:Eo(2,"The Box"),beats:1,notes:"Level title."},{id:"S5",title:"The Box",Component:XC,beats:GC,notes:`The Big No. Not one rejection: the box, repeated.
Beat 0: she walks in. Then one wall per press (left, right, back, lid, front); the 5th closes the box around her.`},{id:"S6",title:"16 points more female",Component:YC,beats:$C,notes:`"The odds aren't the same for everyone." One line, move on.`},{id:"SP2",title:"Save point · after The Box",Component:ol("SP2"),beats:sl("SP2"),notes:"Red thread: my story becomes their move. Sentence on arrival · press: WITH A MANAGER · press: ON YOUR OWN."},{id:"L3",title:"Level 3 · The Doors",Component:Eo(3,"The Doors"),beats:1,notes:"Level title."},{id:"S7",title:"A box has no door",Component:ZC,beats:qC,notes:'"A box has no door." (box closed) · Press: "So I stopped waiting for someone to open it." + Juani KICKS the box open, the walls fall outward, she steps out and SMILES (payoff for "You think too much out of the box": yes, she does) · Press: "I started opening doors." Bridge: the box has no door, so she makes her own. S8 shows the doors.'},{id:"S8",title:"The doors I opened",Component:eR,beats:QC,notes:`Hired = proof, showed up = how doors open, found me = what visibility does.
One door per press: 3 hired · 3 showed up + "What came out of it" line · 3 found me.
GEO = Generative Engine Optimisation, being cited in AI-generated answers (term from a 2023 research paper by Aggarwal et al.). Pure communication work: positioning, keywords, original content, consistency.`},{id:"S9",title:"Statement: behind every door",Component:tR,beats:1,notes:"White statement screen. Line 2 fades in on its own."},{id:"S10",title:"Statement: what you're studying",Component:nR,beats:1,notes:"Pause. The line of the talk."},{id:"SP3",title:"Save point · after The Doors",Component:ol("SP3"),beats:sl("SP3"),notes:"Red thread: my story becomes their move. Sentence on arrival · press: WITH A MANAGER · press: ON YOUR OWN."},{id:"S11",title:"All these doors: the phone number",Component:rR,beats:iR,notes:"Question · then the quote: English big, Spanish small (my voice) + transactive memory source · then → Level 4: The Office."},{id:"L4",title:"Level 4 · The Office",Component:Eo(4,"The Office"),beats:1,notes:"Level title."},{id:"S12",title:"Statement: lonely",Component:sR,beats:1,notes:"White statement screen. Line 2 fades in on its own."},{id:"S13",title:"So I built an office",Component:SR,beats:gR,notes:`One desk per press (lamp click, colleague turns, card slides in): Assistant · Voice · Ghostwriter · Designer · Bodyguard · Builder · Tutor · Sparring Partner. Then the rule. Then the alert.
The Assistant: the weakness from S1 pays off.`},{id:"S14",title:"Autonomy dial",Component:wR,beats:MR,notes:'Needle sweeps on arrival. Then: Assistant (runs alone, only alerts) · Voice / Ghostwriter / Designer / Tutor / Sparring Partner (drafts, I approve) · Builder (builds, I review) · Bodyguard (stops me) · "They draft. I decide."'},{id:"S15",title:"Backstage: the video generator",Component:bR,beats:CR,notes:"Origin · press = play the 60-second LinkedIn video (sound; S mutes) · press = the numbers."},{id:"S15b",title:"The brand came first",Component:UR,beats:DR,notes:'The sameness: a wall of 14 generic AI flyers. Press: my JUVAII illustration, large. Press: "The brand came first." (the wall steps back). Press: "Am I scared AI will kill my creativity? No."'},{id:"S16",title:"Zoom out: my universe",Component:kR,beats:FR,notes:`The camera pulls back on its own (2.5 s), then the MY UNIVERSE title. One label per press: Romeo Roy (AI architect, advisor & trainer) · Nina & Sam (web & automation) · accountant · Lukas (software architect, former CTO, Lucerne) · clients and students.
Line: first time said; repeated at the end.`},{id:"SP4",title:"Save point · after The Office",Component:ol("SP4"),beats:sl("SP4"),notes:"Red thread: my story becomes their move. Sentence on arrival · press: WITH A MANAGER · press: ON YOUR OWN."},{id:"L5",title:"Level 5 · Traps",Component:Eo(5,"Traps"),beats:1,notes:"Level title."},{id:"S17",title:"Mistakes included",Component:BR,beats:1,notes:"As promised."},{id:"S18a",title:"This month's news",Component:HR,beats:zR,notes:"One news item per press (sources on slide). Then the line + the honesty note: the scanners missed 36-71%, that's why my last step is a human-readable review, not a scan."},{id:"S18",title:"The golden star",Component:WR,beats:jR,notes:"The star glitters. Press: it cracks open, showing what failed the review. Press: the line."},{id:"S19",title:"The leaked key",Component:YR,beats:$R,notes:"Press: the key falls, red flash, the audit. Then the three doors, one per press."},{id:"S20",title:"Live: the access prompt",Component:JR,beats:QR,notes:'Cursor hovers over "Allow". Pause. Press: "Would you?" Press: the access ladder.'},{id:"S21",title:"Save point: your pillars",Component:t2,beats:e2,notes:"Same SAVE POINT format. One pillar per press."},{id:"S22",title:"Your turn to play",Component:i2,beats:n2,notes:"→ PLAYER 2 HAS JOINED."},{id:"S23",title:"Player 2 has joined",Component:y2,beats:x2,notes:`"Scan. For the next 8 minutes, you’re me." Banner slides in, QR pops (link = placeholder until deploy, src/deck/urls.js).
Phones only: tap = jump, hold = stop/listen. Press: "Hands up: who passed 1,000?" (no live leaderboard).`},{id:"S24",title:"Debrief",Component:M2,beats:S2,notes:"The end-screen line on the projector. One question per press: listening door · golden star · out of tokens."},{id:"S25",title:"Break · 10:00",Component:A2,beats:1,notes:'Countdown starts on arrival and keeps running if you leave and come back (a fresh 10:00 only after it ended). Chime + blink at 00:00. "The game stays open. Beat the high score."'},{id:"S26",title:"Side quest · The Job Ad",Component:ib("The Job Ad"),beats:1,notes:"Presented by me, not a student activity. Respectful: what’s real, what’s vague, what’s missing."},{id:"S27",title:"The job ad: SBB",Component:ku("card"),beats:b2,notes:`Real, recent (22 Oct 2026), Zurich, a brand everyone knows.
Press: the salary drops in (published by SBB).`},{id:"S27b",title:"Highlighter: real / vague",Component:ku("highlight"),beats:P2,enter:"cut",notes:`Press: GREEN = real, and it’s my year: use cases, pilots, scaling, handover (R4) · KPIs (R5) · responsible AI (R6, the Bodyguard) · audience-appropriate communication (Q5). Doors = clients.
Press: ORANGE = vague: "solid knowledge of AI" (Q2) · "analytical, networked thinking" (Q4).`},{id:"S27c",title:"Sticky notes: missing",Component:ku("missing"),beats:N2,notes:`One MISSING note per press: change communication · training the teams · aligning departments · the story of results.
Press: "This job is what I did this year, as a company of one. And the missing parts? That’s communication."`},{id:"S29",title:"EU AI Act · Article 4",Component:O2,beats:F2,notes:'One fact per press. Then the save point (WITH A MANAGER): "Someone has to own that. Why not you?"'},{id:"S30",title:"The Sagan effect",Component:B2,beats:k2,notes:`Beat 1: Carl Sagan: astronomer, NASA scientist, the face of science communication; Cosmos. Then 1992 rejection · 1994 Public Welfare Medal · the line: "Visible isn’t unserious. Playful isn’t unprofessional."
The Sagan effect is a real term: scientists whose reputation suffers because they’re popular. He’s the textbook case of science communication: their field.`},{id:"S31",title:"Statement: never alone",Component:z2,beats:1,notes:"White statement screen. Line 2 fades in on its own. Pause."},{id:"S32",title:"Credits roll",Component:Q2,beats:1,notes:'40 s roll with music (S mutes). Press any time to move on; it ends on "Your show starts now."'},{id:"S33",title:"Continue? → LinkedIn",Component:tb,beats:eb,notes:'CONTINUE? blinks. Press: LinkedIn QR + "A question, an idea, a first project? Write me." (character builder cut 3 Nov.)'},{id:"S34",title:"Q&A",Component:nb,beats:1,notes:"Stays up for Q&A (protected 20 min). R = still figure if the projector stutters."}];function rb({current:t,onJump:e,onClose:n,reduced:i,muted:r}){return p.jsx("div",{className:"pmenu",onClick:n,children:p.jsxs("div",{className:"pmenu-inner",onClick:s=>s.stopPropagation(),children:[p.jsxs("div",{className:"pmenu-head",children:[p.jsx("span",{className:"kicker",children:"Presenter menu · M to close"}),p.jsxs("span",{className:"pmenu-status",children:["Sound ",r?"OFF":"on"," (S) · Motion ",i?"REDUCED":"full"," (R)"]})]}),p.jsx("div",{className:"pmenu-grid",children:Bn.map((s,o)=>p.jsxs("button",{className:o===t?"current":"",onClick:()=>e(o),children:[p.jsx("span",{className:"pmenu-id",children:s.id}),p.jsxs("span",{className:"pmenu-title",children:["· ",s.title]})]},s.id))}),p.jsx("p",{className:"pmenu-keys",children:"→ / Space / PageDown next beat · ← / PageUp back · P presenter window · F fullscreen · S mute · R reduced motion"})]})})}const sb="onewomanshow-deck";function vx(t){if(!("BroadcastChannel"in window))return{post(){},close(){}};const e=new BroadcastChannel(sb);return e.onmessage=n=>t(n.data),{post:n=>e.postMessage(n),close:()=>e.close()}}const Eg=150,Tg=300,ob=80;function wg(){const t=location.hash.match(/^#([A-Z]+\d+[a-z]?)(?:\.(\d+))?$/),e=t?Bn.findIndex(i=>i.id===t[1]):-1;if(e<0)return{index:0,beat:0};const n=Math.min(Number(t[2]||0),Bn[e].beats-1);return{index:e,beat:n}}function ab(){const[t,e]=te.useState(wg),[n,i]=te.useState(()=>wg().beat>0?0:1),[r,s]=te.useState(!0),[o,a]=te.useState(!1),[l,c]=te.useState(!1),[d,f]=te.useState(!1),[h,m]=te.useState(!1),_=te.useRef(t);_.current=t;const y=te.useRef(!1),v=te.useRef(null),u=te.useRef(null),g=te.useCallback((B,O,k,W)=>{y.current=!0;const z=()=>{i(k),e({index:B,beat:O})};W==="flash"?(a(!0),setTimeout(()=>{z(),a(!1),y.current=!1},ob)):W==="cut"?(z(),y.current=!1):(s(!1),setTimeout(()=>{z(),s(!0),setTimeout(()=>{y.current=!1},Tg)},Eg))},[]),x=te.useCallback(()=>{if(y.current)return;const{index:B,beat:O}=_.current,k=Bn[B];if(O<k.beats-1){i(1),e({index:B,beat:O+1});return}B+1>=Bn.length||(k.exit==="flash"?(Ws.start(),g(B+1,0,1,"flash")):g(B+1,0,1,Bn[B+1].enter||"fade"))},[g]),S=te.useCallback(()=>{if(y.current)return;const{index:B,beat:O}=_.current;if(O>0){i(-1),e({index:B,beat:O-1});return}B!==0&&g(B-1,Bn[B-1].beats-1,-1,"fade")},[g]),N=te.useCallback(B=>{c(!1),!y.current&&g(B,0,1,"fade")},[g]),C=()=>{var B,O;document.fullscreenElement?document.exitFullscreen():(O=(B=document.documentElement).requestFullscreen)==null||O.call(B)},R=()=>{window.open(`${location.pathname}?presenter`,"onewomanshow-presenter","width=1280,height=820")},b=te.useCallback((B,O=!1)=>{const k=B.length===1?B.toLowerCase():B;if(k==="m")return c(W=>!W);if(k==="Escape")return c(!1);if(k==="s")return m(W=>!W);if(k==="r")return f(W=>!W);if(k==="f"&&!O)return C();if(k==="p"&&!O)return R();l||((k==="ArrowRight"||k===" "||k==="PageDown")&&x(),(k==="ArrowLeft"||k==="PageUp")&&S())},[l,x,S]);te.useEffect(()=>{const B=O=>{if(!(O.metaKey||O.ctrlKey||O.altKey)){if(W2(),O.repeat&&[" ","ArrowRight","ArrowLeft","PageDown","PageUp"].includes(O.key)){O.preventDefault();return}[" ","ArrowRight","ArrowLeft","PageDown","PageUp"].includes(O.key)&&O.preventDefault(),b(O.key)}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[b]);const w=te.useRef(b);w.current=b,te.useEffect(()=>(v.current=vx(B=>{B.type==="key"&&w.current(B.key,!0),B.type==="hello"&&u.current&&v.current.post(u.current)}),()=>v.current.close()),[]),te.useEffect(()=>{X2(h)},[h]),te.useEffect(()=>{var O;u.current={type:"state",...t,reduced:d,muted:h},(O=v.current)==null||O.post(u.current);const B=Bn[t.index];history.replaceState(null,"",`#${B.id}${t.beat?"."+t.beat:""}`)},[t,d,h]);const L=Bn[t.index].Component;return p.jsxs(H0,{className:d?"reduced":"",children:[p.jsx("div",{className:"screen-layer",style:{opacity:r?1:0,transition:`opacity ${r?Tg:Eg}ms var(--ease-out)`},children:p.jsx(L,{beat:t.beat,dir:n,reduced:d,preview:!1,sfx:Ws,muted:h},t.index)}),o&&p.jsx("div",{className:"flash"}),l&&p.jsx(rb,{current:t.index,onJump:N,onClose:()=>c(!1),reduced:d,muted:h})]})}function Ag({index:t,beat:e}){const n=Bn[t];if(!n)return p.jsx("div",{className:"pv-empty",children:"End"});const i=n.Component;return p.jsx(H0,{children:p.jsx(i,{beat:e,dir:1,reduced:!0,preview:!0,sfx:K2})})}function lb(){const[t,e]=te.useState(()=>Date.now()),[n,i]=te.useState(Date.now());te.useEffect(()=>{const o=setInterval(()=>i(Date.now()),1e3);return()=>clearInterval(o)},[]);const r=Math.floor((n-t)/1e3);return[`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,()=>{e(Date.now()),i(Date.now())}]}function cb(){const[t,e]=te.useState(null),[n,i]=lb(),r=te.useRef(null);if(te.useEffect(()=>{document.title="Presenter · One Woman Show",r.current=vx(c=>{c.type==="state"&&e(c)}),r.current.post({type:"hello"});const l=c=>{c.metaKey||c.ctrlKey||c.altKey||c.repeat||([" ","ArrowRight","ArrowLeft","PageDown","PageUp"].includes(c.key)&&c.preventDefault(),r.current.post({type:"key",key:c.key}))};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l),r.current.close()}},[]),!t)return p.jsx("div",{className:"presenter waiting",children:"Waiting for the deck… (open the deck in another window and press P there)"});const s=Bn[t.index],o=t.beat<s.beats-1?t.index:t.index+1,a=o===t.index?t.beat+1:0;return p.jsxs("div",{className:"presenter",children:[p.jsxs("header",{className:"p-head",children:[p.jsxs("span",{className:"p-title",children:[p.jsx("b",{children:s.id})," ",s.title," · beat ",t.beat+1," / ",s.beats]}),p.jsxs("span",{className:"p-flags",children:[t.muted&&p.jsx("span",{className:"p-flag",children:"MUTED"}),t.reduced&&p.jsx("span",{className:"p-flag",children:"REDUCED MOTION"})]}),p.jsx("button",{className:"p-clock",onClick:i,title:"Reset timer",children:n})]}),p.jsxs("div",{className:"p-body",children:[p.jsxs("section",{className:"p-now",children:[p.jsx("h2",{className:"kicker",children:"Now"}),p.jsx("div",{className:"p-frame",children:p.jsx(Ag,{index:t.index,beat:t.beat})}),p.jsx("h2",{className:"kicker",children:"Notes"}),p.jsx("p",{className:"p-notes",children:s.notes})]}),p.jsxs("section",{className:"p-next",children:[p.jsx("h2",{className:"kicker",children:"Next"}),p.jsx("div",{className:"p-frame",children:p.jsx(Ag,{index:o,beat:a})}),p.jsx("p",{className:"p-hint",children:"Keys work here too. Press the first SPACE in the deck window: browsers only allow sound after a key press there."})]})]})]})}const ub=new URLSearchParams(location.search).has("presenter");z0(document.getElementById("root")).render(p.jsx(te.StrictMode,{children:ub?p.jsx(cb,{}):p.jsx(ab,{})}));
