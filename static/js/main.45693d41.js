/*! For license information please see main.45693d41.js.LICENSE.txt */
(()=>{"use strict";var e={219:(e,t,n)=>{var r=n(763),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return r.isMemo(e)?l:i[e.$$typeof]||a}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=l;var u=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var a=p(n);a&&a!==m&&e(t,a,r)}var l=c(n);f&&(l=l.concat(f(n)));for(var i=s(t),h=s(n),g=0;g<l.length;++g){var y=l[g];if(!o[y]&&(!r||!r[y])&&(!h||!h[y])&&(!i||!i[y])){var v=d(n,y);try{u(t,y,v)}catch(b){}}}}return t}},983:(e,t)=>{var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case f:case o:case i:case l:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case h:case s:return e;default:return t}}case a:return t}}}function x(e){return k(e)===f}t.AsyncMode=c,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=d,t.Fragment=o,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=l,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||k(e)===c},t.isConcurrentMode=x,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===o},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===i},t.isStrictMode=function(e){return k(e)===l},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===i||e===l||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=k},763:(e,t,n)=>{e.exports=n(983)},479:(e,t)=>{var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case l:case d:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case f:case h:case m:case s:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return y(e)===o}},163:(e,t,n)=>{e.exports=n(479)},730:(e,t,n)=>{var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,i={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(i[e]=t,e=0;e<t.length;e++)l.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,t,n,r,a,o,l){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!f.call(m,e)||!f.call(p,e)&&(d.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,v);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var I,F=Object.assign;function D(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var A=!1;function $(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),l=a.length-1,i=o.length-1;1<=l&&0<=i&&a[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==o[i]){if(1!==l||1!==i)do{if(l--,0>--i||a[l]!==o[i]){var s="\n"+a[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=l&&0<=i);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function U(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case x:return"Portal";case E:return"Profiler";case _:return"StrictMode";case j:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return V(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Q(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){G(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function le(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ie(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ie(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,fe=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function de(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ye=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var xe=null,Se=null,_e=null;function Ee(e){if(e=ba(e)){if("function"!==typeof xe)throw Error(o(280));var t=e.stateNode;t&&(t=ka(t),xe(e.stateNode,e.type,t))}}function Ce(e){Se?_e?_e.push(e):_e=[e]:Se=e}function Ne(){if(Se){var e=Se,t=_e;if(_e=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function je(){}var ze=!1;function Te(e,t,n){if(ze)return e(t,n);ze=!0;try{return Pe(e,t,n)}finally{ze=!1,(null!==Se||null!==_e)&&(je(),Ne())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=ka(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Le=!1;if(c)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ce){Le=!1}function Me(e,t,n,r,a,o,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ie=!1,Fe=null,De=!1,Ae=null,$e={onError:function(e){Ie=!0,Fe=e}};function Ue(e,t,n,r,a,o,l,i,s){Ie=!1,Fe=null,Me.apply($e,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ve(e)!==e)throw Error(o(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var l=a.alternate;if(null===l){if(null!==(r=a.return)){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return We(a),e;if(l===r)return We(a),t;l=l.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=l;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,r=l;break}if(s===r){i=!0,r=a,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=a;break}if(s===r){i=!0,r=l,n=a;break}s=s.sibling}if(!i)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Qe(e):null}function Qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=a.unstable_scheduleCallback,Xe=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Ke=a.unstable_requestPaint,Ge=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var lt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(it(e)/st|0)|0},it=Math.log,st=Math.LN2;var ut=64,ct=4194304;function ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,l=268435455&n;if(0!==l){var i=l&~a;0!==i?r=ft(i):0!==(o&=l)&&(r=ft(o))}else 0!==(l=n&~a)?r=ft(l):0!==o&&(r=ft(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-lt(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-lt(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,xt,St,_t,Et,Ct=!1,Nt=[],Pt=null,jt=null,zt=null,Tt=new Map,Ot=new Map,Lt=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function It(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&xt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ft(e){var t=va(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&xt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function At(e,t,n){Dt(e)&&n.delete(t)}function $t(){Ct=!1,null!==Pt&&Dt(Pt)&&(Pt=null),null!==jt&&Dt(jt)&&(jt=null),null!==zt&&Dt(zt)&&(zt=null),Tt.forEach(At),Ot.forEach(At)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$t)))}function Vt(e){function t(t){return Ut(t,e)}if(0<Nt.length){Ut(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==jt&&Ut(jt,e),null!==zt&&Ut(zt,e),Tt.forEach(t),Ot.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Lt.shift()}var Bt=w.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var a=bt,o=Bt.transition;Bt.transition=null;try{bt=1,Yt(e,t,n,r)}finally{bt=a,Bt.transition=o}}function Qt(e,t,n,r){var a=bt,o=Bt.transition;Bt.transition=null;try{bt=4,Yt(e,t,n,r)}finally{bt=a,Bt.transition=o}}function Yt(e,t,n,r){if(Wt){var a=qt(e,t,n,r);if(null===a)Wr(e,t,r,Xt,n),Mt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=It(Pt,e,t,n,r,a),!0;case"dragenter":return jt=It(jt,e,t,n,r,a),!0;case"mouseover":return zt=It(zt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Tt.set(o,It(Tt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Ot.set(o,It(Ot.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==a;){var o=ba(a);if(null!==o&&kt(o),null===(o=qt(e,t,n,r))&&Wr(e,t,r,Xt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Xt=null;function qt(e,t,n,r){if(Xt=null,null!==(e=va(e=ke(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===a[o-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),fn=F({},un,{view:0,detail:0}),dn=an(fn),pn=F({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=an(pn),hn=an(F({},pn,{dataTransfer:0})),gn=an(F({},fn,{relatedTarget:0})),yn=an(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(vn),wn=an(F({},un,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return _n}var Cn=F({},fn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nn=an(Cn),Pn=an(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jn=an(F({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),zn=an(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(Tn),Ln=[9,13,27,32],Rn=c&&"CompositionEvent"in window,Mn=null;c&&"documentMode"in document&&(Mn=document.documentMode);var In=c&&"TextEvent"in window&&!Mn,Fn=c&&(!Rn||Mn&&8<Mn&&11>=Mn),Dn=String.fromCharCode(32),An=!1;function $n(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Hn(e,t,n,r){Ce(r),0<(t=Qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,Yn=null;function Xn(e){Dr(e,0)}function qn(e){if(Y(wa(e)))return e}function Kn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Gn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Qn&&(Qn.detachEvent("onpropertychange",nr),Yn=Qn=null)}function nr(e){if("value"===e.propertyName&&qn(Yn)){var t=[];Hn(t,Yn,e,ke(e)),Te(Xn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(Qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Yn)}function or(e,t){if("click"===e)return qn(t)}function lr(e,t){if("input"===e||"change"===e)return qn(t)}var ir="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(ir(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!f.call(t,a)||!ir(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function fr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?fr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function dr(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=dr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var l=cr(n,r);a&&l&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,br=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==X(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Qr(yr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Sr={},_r={};function Er(e){if(Sr[e])return Sr[e];if(!xr[e])return e;var t,n=xr[e];for(t in n)if(n.hasOwnProperty(t)&&t in _r)return Sr[e]=n[t];return e}c&&(_r=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);var Cr=Er("animationend"),Nr=Er("animationiteration"),Pr=Er("animationstart"),jr=Er("transitionend"),zr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){zr.set(e,t),s(t,[e])}for(var Lr=0;Lr<Tr.length;Lr++){var Rr=Tr[Lr];Or(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Or(Cr,"onAnimationEnd"),Or(Nr,"onAnimationIteration"),Or(Pr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(jr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,l,i,s,u){if(Ue.apply(this,arguments),Ie){if(!Ie)throw Error(o(198));var c=Fe;Ie=!1,Fe=null,De||(De=!0,Ae=c)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,i,u),o=s}else for(l=0;l<r.length;l++){if(s=(i=r[l]).instance,u=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,i,u),o=s}}}if(De)throw e=Ae,De=!1,Ae=null,e}function Ar(e,t){var n=t[ha];void 0===n&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Ur]){e[Ur]=!0,l.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,$r("selectionchange",!1,t))}}function Br(e,t,n,r){switch(Kt(t)){case 1:var a=Ht;break;case 4:a=Qt;break;default:a=Yt}n=a.bind(null,t,n,e),a=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var l=r.tag;if(3===l||4===l){var i=r.stateNode.containerInfo;if(i===a||8===i.nodeType&&i.parentNode===a)break;if(4===l)for(l=r.return;null!==l;){var s=l.tag;if((3===s||4===s)&&((s=l.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;l=l.return}for(;null!==i;){if(null===(l=va(i)))return;if(5===(s=l.tag)||6===s){r=o=l;continue e}i=i.parentNode}}r=r.return}Te((function(){var r=o,a=ke(n),l=[];e:{var i=zr.get(e);if(void 0!==i){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Nn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=jn;break;case Cr:case Nr:case Pr:s=yn;break;case jr:s=zn;break;case"scroll":s=dn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),f=!c&&"scroll"===e,d=c?null!==i?i+"Capture":null:i;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==d&&(null!=(h=Oe(m,d))&&c.push(Hr(m,h,p)))),f)break;m=m.return}0<c.length&&(i=new s(i,u,null,n,a),l.push({event:i,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!va(u)&&!u[ma])&&(s||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?va(u):null)&&(u!==(f=Ve(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=mn,h="onMouseLeave",d="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,h="onPointerLeave",d="onPointerEnter",m="pointer"),f=null==s?i:wa(s),p=null==u?i:wa(u),(i=new c(h,m+"leave",s,n,a)).target=f,i.relatedTarget=p,h=null,va(a)===r&&((c=new c(d,m+"enter",u,n,a)).target=p,c.relatedTarget=f,h=c),f=h,s&&u)e:{for(d=u,m=0,p=c=s;p;p=Yr(p))m++;for(p=0,h=d;h;h=Yr(h))p++;for(;0<m-p;)c=Yr(c),m--;for(;0<p-m;)d=Yr(d),p--;for(;m--;){if(c===d||null!==d&&c===d.alternate)break e;c=Yr(c),d=Yr(d)}c=null}else c=null;null!==s&&Xr(l,i,s,c,!1),null!==u&&null!==f&&Xr(l,f,u,c,!0)}if("select"===(s=(i=r?wa(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===s&&"file"===i.type)var g=Kn;else if(Wn(i))if(Gn)g=lr;else{g=ar;var y=rr}else(s=i.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(l,g,n,a):(y&&y(e,i,r),"focusout"===e&&(y=i._wrapperState)&&y.controlled&&"number"===i.type&&ee(i,"number",i.value)),y=r?wa(r):window,e){case"focusin":(Wn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,wr(l,n,a);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":wr(l,n,a)}var v;if(Rn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vn?$n(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Fn&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Vn&&(v=en()):(Zt="value"in(Gt=a)?Gt.value:Gt.textContent,Vn=!0)),0<(y=Qr(r,b)).length&&(b=new wn(b,e,null,n,a),l.push({event:b,listeners:y}),v?b.data=v:null!==(v=Un(n))&&(b.data=v))),(v=In?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(An=!0,Dn);case"textInput":return(e=t.data)===Dn&&An?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!Rn&&$n(e,t)?(e=en(),Jt=Zt=Gt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Qr(r,"onBeforeInput")).length&&(a=new wn("onBeforeInput","beforeinput",null,n,a),l.push({event:a,listeners:r}),a.data=v))}Dr(l,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Oe(e,n))&&r.unshift(Hr(e,o,a)),null!=(o=Oe(e,t))&&r.push(Hr(e,o,a))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xr(e,t,n,r,a){for(var o=t._reactName,l=[];null!==n&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(null!==s&&s===r)break;5===i.tag&&null!==u&&(i=u,a?null!=(s=Oe(n,o))&&l.unshift(Hr(n,s,i)):a||null!=(s=Oe(n,o))&&l.push(Hr(n,s,i))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var qr=/\r\n?/g,Kr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Kr,"")}function Zr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,la="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(ia)}:ra;function ia(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Vt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Vt(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fa=Math.random().toString(36).slice(2),da="__reactFiber$"+fa,pa="__reactProps$"+fa,ma="__reactContainer$"+fa,ha="__reactEvents$"+fa,ga="__reactListeners$"+fa,ya="__reactHandles$"+fa;function va(e){var t=e[da];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[da]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[da])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[da]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function ka(e){return e[pa]||null}var xa=[],Sa=-1;function _a(e){return{current:e}}function Ea(e){0>Sa||(e.current=xa[Sa],xa[Sa]=null,Sa--)}function Ca(e,t){Sa++,xa[Sa]=e.current,e.current=t}var Na={},Pa=_a(Na),ja=_a(!1),za=Na;function Ta(e,t){var n=e.type.contextTypes;if(!n)return Na;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function La(){Ea(ja),Ea(Pa)}function Ra(e,t,n){if(Pa.current!==Na)throw Error(o(168));Ca(Pa,t),Ca(ja,n)}function Ma(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,B(e)||"Unknown",a));return F({},n,r)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Na,za=Pa.current,Ca(Pa,e),Ca(ja,ja.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ma(e,t,za),r.__reactInternalMemoizedMergedChildContext=e,Ea(ja),Ea(Pa),Ca(Pa,e)):Ea(ja),Ca(ja,n)}var Da=null,Aa=!1,$a=!1;function Ua(e){null===Da?Da=[e]:Da.push(e)}function Va(){if(!$a&&null!==Da){$a=!0;var e=0,t=bt;try{var n=Da;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Da=null,Aa=!1}catch(a){throw null!==Da&&(Da=Da.slice(e+1)),Ye(Je,Va),a}finally{bt=t,$a=!1}}return null}var Ba=[],Wa=0,Ha=null,Qa=0,Ya=[],Xa=0,qa=null,Ka=1,Ga="";function Za(e,t){Ba[Wa++]=Qa,Ba[Wa++]=Ha,Ha=e,Qa=t}function Ja(e,t,n){Ya[Xa++]=Ka,Ya[Xa++]=Ga,Ya[Xa++]=qa,qa=e;var r=Ka;e=Ga;var a=32-lt(r)-1;r&=~(1<<a),n+=1;var o=32-lt(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Ka=1<<32-lt(t)+a|n<<a|r,Ga=o+e}else Ka=1<<o|n<<a|r,Ga=e}function eo(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function to(e){for(;e===Ha;)Ha=Ba[--Wa],Ba[Wa]=null,Qa=Ba[--Wa],Ba[Wa]=null;for(;e===qa;)qa=Ya[--Xa],Ya[Xa]=null,Ga=Ya[--Xa],Ya[Xa]=null,Ka=Ya[--Xa],Ya[Xa]=null}var no=null,ro=null,ao=!1,oo=null;function lo(e,t){var n=Tu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function io(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qa?{id:Ka,overflow:Ga}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!io(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&io(e,t)?lo(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)lo(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function mo(){ro=no=null,ao=!1}function ho(e){null===oo?oo=[e]:oo.push(e)}var go=w.ReactCurrentBatchConfig;function yo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,l=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===l?t.ref:(t=function(e){var t=a.refs;null===e?delete t[l]:t[l]=e},t._stringRef=l,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function wo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Lu(e,t)).index=0,e.sibling=null,e}function l(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===O&&bo(o)===t.type)?((r=a(t,n.props)).ref=yo(e,t,n),r.return=e,r):((r=Ru(n.type,n.key,n.props,null,e.mode,r)).ref=yo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Du(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?((t=Mu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Ru(t.type,t.key,t.props,null,e.mode,n)).ref=yo(e,null,t),n.return=e,n;case x:return(t=Du(t,e.mode,n)).return=e,t;case O:return d(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mu(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?u(e,t,n,r):null;case x:return n.key===a?c(e,t,n,r):null;case O:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||M(n))return null!==a?null:f(e,t,n,r,null);vo(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case x:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||M(r))return f(t,e=e.get(n)||null,r,a,null);vo(t,r)}return null}function h(a,o,i,s){for(var u=null,c=null,f=o,h=o=0,g=null;null!==f&&h<i.length;h++){f.index>h?(g=f,f=null):g=f.sibling;var y=p(a,f,i[h],s);if(null===y){null===f&&(f=g);break}e&&f&&null===y.alternate&&t(a,f),o=l(y,o,h),null===c?u=y:c.sibling=y,c=y,f=g}if(h===i.length)return n(a,f),ao&&Za(a,h),u;if(null===f){for(;h<i.length;h++)null!==(f=d(a,i[h],s))&&(o=l(f,o,h),null===c?u=f:c.sibling=f,c=f);return ao&&Za(a,h),u}for(f=r(a,f);h<i.length;h++)null!==(g=m(f,a,h,i[h],s))&&(e&&null!==g.alternate&&f.delete(null===g.key?h:g.key),o=l(g,o,h),null===c?u=g:c.sibling=g,c=g);return e&&f.forEach((function(e){return t(a,e)})),ao&&Za(a,h),u}function g(a,i,s,u){var c=M(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var f=c=null,h=i,g=i=0,y=null,v=s.next();null!==h&&!v.done;g++,v=s.next()){h.index>g?(y=h,h=null):y=h.sibling;var b=p(a,h,v.value,u);if(null===b){null===h&&(h=y);break}e&&h&&null===b.alternate&&t(a,h),i=l(b,i,g),null===f?c=b:f.sibling=b,f=b,h=y}if(v.done)return n(a,h),ao&&Za(a,g),c;if(null===h){for(;!v.done;g++,v=s.next())null!==(v=d(a,v.value,u))&&(i=l(v,i,g),null===f?c=v:f.sibling=v,f=v);return ao&&Za(a,g),c}for(h=r(a,h);!v.done;g++,v=s.next())null!==(v=m(h,a,g,v.value,u))&&(e&&null!==v.alternate&&h.delete(null===v.key?g:v.key),i=l(v,i,g),null===f?c=v:f.sibling=v,f=v);return e&&h.forEach((function(e){return t(a,e)})),ao&&Za(a,g),c}return function e(r,o,l,s){if("object"===typeof l&&null!==l&&l.type===S&&null===l.key&&(l=l.props.children),"object"===typeof l&&null!==l){switch(l.$$typeof){case k:e:{for(var u=l.key,c=o;null!==c;){if(c.key===u){if((u=l.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,l.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===O&&bo(u)===c.type){n(r,c.sibling),(o=a(c,l.props)).ref=yo(r,c,l),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}l.type===S?((o=Mu(l.props.children,r.mode,s,l.key)).return=r,r=o):((s=Ru(l.type,l.key,l.props,null,r.mode,s)).ref=yo(r,o,l),s.return=r,r=s)}return i(r);case x:e:{for(c=l.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===l.containerInfo&&o.stateNode.implementation===l.implementation){n(r,o.sibling),(o=a(o,l.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Du(l,r.mode,s)).return=r,r=o}return i(r);case O:return e(r,o,(c=l._init)(l._payload),s)}if(te(l))return h(r,o,l,s);if(M(l))return g(r,o,l,s);vo(r,l)}return"string"===typeof l&&""!==l||"number"===typeof l?(l=""+l,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,l)).return=r,r=o):(n(r,o),(o=Fu(l,r.mode,s)).return=r,r=o),i(r)):n(r,o)}}var ko=wo(!0),xo=wo(!1),So=_a(null),_o=null,Eo=null,Co=null;function No(){Co=Eo=_o=null}function Po(e){var t=So.current;Ea(So),e._currentValue=t}function jo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zo(e,t){_o=e,Co=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bi=!0),e.firstContext=null)}function To(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===_o)throw Error(o(308));Eo=e,_o.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var Oo=null;function Lo(e){null===Oo?Oo=[e]:Oo.push(e)}function Ro(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Lo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Mo(e,r)}function Mo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Io=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Do(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ao(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $o(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Mo(e,n)}return null===(a=r.interleaved)?(t.next=t,Lo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Mo(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Vo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=l:o=o.next=l,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var a=e.updateQueue;Io=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var s=i,u=s.next;s.next=null,null===l?o=u:l.next=u,l=s;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==l&&(null===i?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(null!==o){var f=a.baseState;for(l=0,c=u=s=null,i=o;;){var d=i.lane,p=i.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var m=e,h=i;switch(d=t,p=n,h.tag){case 1:if("function"===typeof(m=h.payload)){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(d="function"===typeof(m=h.payload)?m.call(p,f,d):m)||void 0===d)break e;f=F({},f,d);break e;case 2:Io=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[i]:d.push(i))}else p={eventTime:p,lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=p,s=f):c=c.next=p,l|=d;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(d=i).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(s=f),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{l|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Is|=l,e.lanes=l,e.memoizedState=f}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Ho={},Qo=_a(Ho),Yo=_a(Ho),Xo=_a(Ho);function qo(e){if(e===Ho)throw Error(o(174));return e}function Ko(e,t){switch(Ca(Xo,t),Ca(Yo,e),Ca(Qo,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Qo),Ca(Qo,t)}function Go(){Ea(Qo),Ea(Yo),Ea(Xo)}function Zo(e){qo(Xo.current);var t=qo(Qo.current),n=se(t,e.type);t!==n&&(Ca(Yo,e),Ca(Qo,n))}function Jo(e){Yo.current===e&&(Ea(Qo),Ea(Yo))}var el=_a(0);function tl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function rl(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var al=w.ReactCurrentDispatcher,ol=w.ReactCurrentBatchConfig,ll=0,il=null,sl=null,ul=null,cl=!1,fl=!1,dl=0,pl=0;function ml(){throw Error(o(321))}function hl(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ir(e[n],t[n]))return!1;return!0}function gl(e,t,n,r,a,l){if(ll=l,il=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,al.current=null===e||null===e.memoizedState?Jl:ei,e=n(r,a),fl){l=0;do{if(fl=!1,dl=0,25<=l)throw Error(o(301));l+=1,ul=sl=null,t.updateQueue=null,al.current=ti,e=n(r,a)}while(fl)}if(al.current=Zl,t=null!==sl&&null!==sl.next,ll=0,ul=sl=il=null,cl=!1,t)throw Error(o(300));return e}function yl(){var e=0!==dl;return dl=0,e}function vl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ul?il.memoizedState=ul=e:ul=ul.next=e,ul}function bl(){if(null===sl){var e=il.alternate;e=null!==e?e.memoizedState:null}else e=sl.next;var t=null===ul?il.memoizedState:ul.next;if(null!==t)ul=t,sl=e;else{if(null===e)throw Error(o(310));e={memoizedState:(sl=e).memoizedState,baseState:sl.baseState,baseQueue:sl.baseQueue,queue:sl.queue,next:null},null===ul?il.memoizedState=ul=e:ul=ul.next=e}return ul}function wl(e,t){return"function"===typeof t?t(e):t}function kl(e){var t=bl(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=sl,a=r.baseQueue,l=n.pending;if(null!==l){if(null!==a){var i=a.next;a.next=l.next,l.next=i}r.baseQueue=a=l,n.pending=null}if(null!==a){l=a.next,r=r.baseState;var s=i=null,u=null,c=l;do{var f=c.lane;if((ll&f)===f)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=d,i=r):u=u.next=d,il.lanes|=f,Is|=f}c=c.next}while(null!==c&&c!==l);null===u?i=r:u.next=s,ir(r,t.memoizedState)||(bi=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{l=a.lane,il.lanes|=l,Is|=l,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=bl(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(null!==a){n.pending=null;var i=a=a.next;do{l=e(l,i.action),i=i.next}while(i!==a);ir(l,t.memoizedState)||(bi=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Sl(){}function _l(e,t){var n=il,r=bl(),a=t(),l=!ir(r.memoizedState,a);if(l&&(r.memoizedState=a,bi=!0),r=r.queue,Il(Nl.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||null!==ul&&1&ul.memoizedState.tag){if(n.flags|=2048,Tl(9,Cl.bind(null,n,r,a,t),void 0,null),null===js)throw Error(o(349));0!==(30&ll)||El(n,t,a)}return a}function El(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=il.updateQueue)?(t={lastEffect:null,stores:null},il.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Cl(e,t,n,r){t.value=n,t.getSnapshot=r,Pl(t)&&jl(e)}function Nl(e,t,n){return n((function(){Pl(t)&&jl(e)}))}function Pl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ir(e,n)}catch(r){return!0}}function jl(e){var t=Mo(e,1);null!==t&&nu(t,e,1,-1)}function zl(e){var t=vl();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:e},t.queue=e,e=e.dispatch=Xl.bind(null,il,e),[t.memoizedState,e]}function Tl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=il.updateQueue)?(t={lastEffect:null,stores:null},il.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ol(){return bl().memoizedState}function Ll(e,t,n,r){var a=vl();il.flags|=e,a.memoizedState=Tl(1|t,n,void 0,void 0===r?null:r)}function Rl(e,t,n,r){var a=bl();r=void 0===r?null:r;var o=void 0;if(null!==sl){var l=sl.memoizedState;if(o=l.destroy,null!==r&&hl(r,l.deps))return void(a.memoizedState=Tl(t,n,o,r))}il.flags|=e,a.memoizedState=Tl(1|t,n,o,r)}function Ml(e,t){return Ll(8390656,8,e,t)}function Il(e,t){return Rl(2048,8,e,t)}function Fl(e,t){return Rl(4,2,e,t)}function Dl(e,t){return Rl(4,4,e,t)}function Al(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $l(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Rl(4,4,Al.bind(null,t,e),n)}function Ul(){}function Vl(e,t){var n=bl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bl(e,t){var n=bl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wl(e,t,n){return 0===(21&ll)?(e.baseState&&(e.baseState=!1,bi=!0),e.memoizedState=n):(ir(n,t)||(n=ht(),il.lanes|=n,Is|=n,e.baseState=!0),t)}function Hl(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{bt=n,ol.transition=r}}function Ql(){return bl().memoizedState}function Yl(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ql(e))Kl(t,n);else if(null!==(n=Ro(e,t,n,r))){nu(n,e,r,eu()),Gl(n,t,r)}}function Xl(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ql(e))Kl(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,ir(i,l)){var s=t.interleaved;return null===s?(a.next=a,Lo(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Ro(e,t,a,r))&&(nu(n,e,r,a=eu()),Gl(n,t,r))}}function ql(e){var t=e.alternate;return e===il||null!==t&&t===il}function Kl(e,t){fl=cl=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gl(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Zl={readContext:To,useCallback:ml,useContext:ml,useEffect:ml,useImperativeHandle:ml,useInsertionEffect:ml,useLayoutEffect:ml,useMemo:ml,useReducer:ml,useRef:ml,useState:ml,useDebugValue:ml,useDeferredValue:ml,useTransition:ml,useMutableSource:ml,useSyncExternalStore:ml,useId:ml,unstable_isNewReconciler:!1},Jl={readContext:To,useCallback:function(e,t){return vl().memoizedState=[e,void 0===t?null:t],e},useContext:To,useEffect:Ml,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ll(4194308,4,Al.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ll(4,2,e,t)},useMemo:function(e,t){var n=vl();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vl();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yl.bind(null,il,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vl().memoizedState=e},useState:zl,useDebugValue:Ul,useDeferredValue:function(e){return vl().memoizedState=e},useTransition:function(){var e=zl(!1),t=e[0];return e=Hl.bind(null,e[1]),vl().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=il,a=vl();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===js)throw Error(o(349));0!==(30&ll)||El(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Ml(Nl.bind(null,r,l,e),[e]),r.flags|=2048,Tl(9,Cl.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=vl(),t=js.identifierPrefix;if(ao){var n=Ga;t=":"+t+"R"+(n=(Ka&~(1<<32-lt(Ka)-1)).toString(32)+n),0<(n=dl++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pl++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ei={readContext:To,useCallback:Vl,useContext:To,useEffect:Il,useImperativeHandle:$l,useInsertionEffect:Fl,useLayoutEffect:Dl,useMemo:Bl,useReducer:kl,useRef:Ol,useState:function(){return kl(wl)},useDebugValue:Ul,useDeferredValue:function(e){return Wl(bl(),sl.memoizedState,e)},useTransition:function(){return[kl(wl)[0],bl().memoizedState]},useMutableSource:Sl,useSyncExternalStore:_l,useId:Ql,unstable_isNewReconciler:!1},ti={readContext:To,useCallback:Vl,useContext:To,useEffect:Il,useImperativeHandle:$l,useInsertionEffect:Fl,useLayoutEffect:Dl,useMemo:Bl,useReducer:xl,useRef:Ol,useState:function(){return xl(wl)},useDebugValue:Ul,useDeferredValue:function(e){var t=bl();return null===sl?t.memoizedState=e:Wl(t,sl.memoizedState,e)},useTransition:function(){return[xl(wl)[0],bl().memoizedState]},useMutableSource:Sl,useSyncExternalStore:_l,useId:Ql,unstable_isNewReconciler:!1};function ni(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function ri(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Ao(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Ao(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Ao(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=$o(e,a,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function oi(e,t,n,r,a,o,l){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function li(e,t,n){var r=!1,a=Na,o=t.contextType;return"object"===typeof o&&null!==o?o=To(o):(a=Oa(t)?za:Pa.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ta(e,a):Na),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ii(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function si(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Fo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=To(o):(o=Oa(t)?za:Pa.current,a.context=Ta(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(ri(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&ai.enqueueReplaceState(a,a.state,null),Bo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ui(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function fi(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var di="function"===typeof WeakMap?WeakMap:Map;function pi(e,t,n){(n=Ao(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Hs=r),fi(0,t)},n}function mi(e,t,n){(n=Ao(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fi(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){fi(0,t),"function"!==typeof r&&(null===Qs?Qs=new Set([this]):Qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hi(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new di;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gi(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yi(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ao(-1,1)).tag=2,$o(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vi=w.ReactCurrentOwner,bi=!1;function wi(e,t,n,r){t.child=null===e?xo(t,null,n,r):ko(t,e.child,n,r)}function ki(e,t,n,r,a){n=n.render;var o=t.ref;return zo(t,a),r=gl(e,t,n,r,o,a),n=yl(),null===e||bi?(ao&&n&&eo(t),t.flags|=1,wi(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wi(e,t,a))}function xi(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Ou(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ru(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Si(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var l=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(l,r)&&e.ref===t.ref)return Wi(e,t,a)}return t.flags|=1,(e=Lu(o,r)).ref=t.ref,e.return=t,t.child=e}function Si(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(bi=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Wi(e,t,a);0!==(131072&e.flags)&&(bi=!0)}}return Ci(e,t,n,r,a)}function _i(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Ls,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Ls,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ca(Ls,Os),Os|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ca(Ls,Os),Os|=r;return wi(e,t,a,n),t.child}function Ei(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,a){var o=Oa(n)?za:Pa.current;return o=Ta(t,o),zo(t,a),n=gl(e,t,n,r,o,a),r=yl(),null===e||bi?(ao&&r&&eo(t),t.flags|=1,wi(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wi(e,t,a))}function Ni(e,t,n,r,a){if(Oa(n)){var o=!0;Ia(t)}else o=!1;if(zo(t,a),null===t.stateNode)Bi(e,t),li(t,n,r),si(t,n,r,a),r=!0;else if(null===e){var l=t.stateNode,i=t.memoizedProps;l.props=i;var s=l.context,u=n.contextType;"object"===typeof u&&null!==u?u=To(u):u=Ta(t,u=Oa(n)?za:Pa.current);var c=n.getDerivedStateFromProps,f="function"===typeof c||"function"===typeof l.getSnapshotBeforeUpdate;f||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(i!==r||s!==u)&&ii(t,l,r,u),Io=!1;var d=t.memoizedState;l.state=d,Bo(t,r,l,a),s=t.memoizedState,i!==r||d!==s||ja.current||Io?("function"===typeof c&&(ri(t,n,c,r),s=t.memoizedState),(i=Io||oi(t,n,i,r,d,s,u))?(f||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||("function"===typeof l.componentWillMount&&l.componentWillMount(),"function"===typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"===typeof l.componentDidMount&&(t.flags|=4194308)):("function"===typeof l.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=i):("function"===typeof l.componentDidMount&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Do(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ni(t.type,i),l.props=u,f=t.pendingProps,d=l.context,"object"===typeof(s=n.contextType)&&null!==s?s=To(s):s=Ta(t,s=Oa(n)?za:Pa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof l.getSnapshotBeforeUpdate)||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(i!==f||d!==s)&&ii(t,l,r,s),Io=!1,d=t.memoizedState,l.state=d,Bo(t,r,l,a);var m=t.memoizedState;i!==f||d!==m||ja.current||Io?("function"===typeof p&&(ri(t,n,p,r),m=t.memoizedState),(u=Io||oi(t,n,u,r,d,m,s)||!1)?(c||"function"!==typeof l.UNSAFE_componentWillUpdate&&"function"!==typeof l.componentWillUpdate||("function"===typeof l.componentWillUpdate&&l.componentWillUpdate(r,m,s),"function"===typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof l.componentDidUpdate&&(t.flags|=4),"function"===typeof l.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,o,a)}function Pi(e,t,n,r,a,o){Ei(e,t);var l=0!==(128&t.flags);if(!r&&!l)return a&&Fa(t,n,!1),Wi(e,t,o);r=t.stateNode,vi.current=t;var i=l&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&l?(t.child=ko(t,e.child,null,o),t.child=ko(t,null,i,o)):wi(e,t,i,o),t.memoizedState=r.state,a&&Fa(t,n,!0),t.child}function ji(e){var t=e.stateNode;t.pendingContext?Ra(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(0,t.context,!1),Ko(e,t.containerInfo)}function zi(e,t,n,r,a){return mo(),ho(a),t.flags|=256,wi(e,t,n,r),t.child}var Ti,Oi,Li,Ri,Mi={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fi(e,t,n){var r,a=t.pendingProps,l=el.current,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&l)),r?(i=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(l|=1),Ca(el,1&l),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,i?(a=t.mode,i=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==i?(i.childLanes=0,i.pendingProps=s):i=Iu(s,a,0,null),e=Mu(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ii(n),t.memoizedState=Mi,e):Di(t,s));if(null!==(l=e.memoizedState)&&null!==(r=l.dehydrated))return function(e,t,n,r,a,l,i){if(n)return 256&t.flags?(t.flags&=-257,Ai(e,t,i,r=ci(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Iu({mode:"visible",children:r.children},a,0,null),(l=Mu(l,a,i,null)).flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,0!==(1&t.mode)&&ko(t,e.child,null,i),t.child.memoizedState=Ii(i),t.memoizedState=Mi,l);if(0===(1&t.mode))return Ai(e,t,i,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ai(e,t,i,r=ci(l=Error(o(419)),r,void 0))}if(s=0!==(i&e.childLanes),bi||s){if(null!==(r=js)){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|i))?0:a)&&a!==l.retryLane&&(l.retryLane=a,Mo(e,a),nu(r,e,a,-1))}return hu(),Ai(e,t,i,r=ci(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Nu.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ya[Xa++]=Ka,Ya[Xa++]=Ga,Ya[Xa++]=qa,Ka=e.id,Ga=e.overflow,qa=t),t=Di(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,l,n);if(i){i=a.fallback,s=t.mode,r=(l=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==l?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Lu(l,u)).subtreeFlags=14680064&l.subtreeFlags,null!==r?i=Lu(r,i):(i=Mu(i,s,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,s=null===(s=e.child.memoizedState)?Ii(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Mi,a}return e=(i=e.child).sibling,a=Lu(i,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Di(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ai(e,t,n,r){return null!==r&&ho(r),ko(t,e.child,null,n),(e=Di(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $i(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),jo(e.return,t,n)}function Ui(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Vi(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(wi(e,t,r.children,n),0!==(2&(r=el.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$i(e,n,t);else if(19===e.tag)$i(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(el,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===tl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ui(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===tl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ui(t,!0,n,null,o);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wi(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Lu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hi(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qi(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yi(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qi(t),null;case 1:case 17:return Oa(t.type)&&La(),Qi(t),null;case 3:return r=t.stateNode,Go(),Ea(ja),Ea(Pa),rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(lu(oo),oo=null))),Oi(e,t),Qi(t),null;case 5:Jo(t);var a=qo(Xo.current);if(n=t.type,null!==e&&null!=t.stateNode)Li(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Qi(t),null}if(e=qo(Qo.current),fo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[da]=t,r[pa]=l,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(a=0;a<Mr.length;a++)Ar(Mr[a],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":K(r,l),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Ar("invalid",r);break;case"textarea":ae(r,l),Ar("invalid",r)}for(var s in ve(n,l),a=null,l)if(l.hasOwnProperty(s)){var u=l[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==l.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==l.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):i.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":Q(r),J(r,l,!0);break;case"textarea":Q(r),le(r);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ie(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[da]=t,e[pa]=r,Ti(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),a=r;break;case"iframe":case"object":case"embed":Ar("load",e),a=r;break;case"video":case"audio":for(a=0;a<Mr.length;a++)Ar(Mr[a],e);a=r;break;case"source":Ar("error",e),a=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),a=r;break;case"details":Ar("toggle",e),a=r;break;case"input":K(e,r),a=q(e,r),Ar("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=F({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Ar("invalid",e)}for(l in ve(n,a),u=a)if(u.hasOwnProperty(l)){var c=u[l];"style"===l?ge(e,c):"dangerouslySetInnerHTML"===l?null!=(c=c?c.__html:void 0)&&fe(e,c):"children"===l?"string"===typeof c?("textarea"!==n||""!==c)&&de(e,c):"number"===typeof c&&de(e,""+c):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(i.hasOwnProperty(l)?null!=c&&"onScroll"===l&&Ar("scroll",e):null!=c&&b(e,l,c,s))}switch(n){case"input":Q(e),J(e,r,!1);break;case"textarea":Q(e),le(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(l=r.value)?ne(e,!!r.multiple,l,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Qi(t),null;case 6:if(e&&null!=t.stateNode)Ri(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=qo(Xo.current),qo(Qo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[da]=t,(l=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}l&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[da]=t,t.stateNode=r}return Qi(t),null;case 13:if(Ea(el),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),mo(),t.flags|=98560,l=!1;else if(l=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!l)throw Error(o(318));if(!(l=null!==(l=t.memoizedState)?l.dehydrated:null))throw Error(o(317));l[da]=t}else mo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Qi(t),l=!1}else null!==oo&&(lu(oo),oo=null),l=!0;if(!l)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&el.current)?0===Rs&&(Rs=3):hu())),null!==t.updateQueue&&(t.flags|=4),Qi(t),null);case 4:return Go(),Oi(e,t),null===e&&Vr(t.stateNode.containerInfo),Qi(t),null;case 10:return Po(t.type._context),Qi(t),null;case 19:if(Ea(el),null===(l=t.memoizedState))return Qi(t),null;if(r=0!==(128&t.flags),null===(s=l.rendering))if(r)Hi(l,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=tl(e))){for(t.flags|=128,Hi(l,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(l=n).flags&=14680066,null===(s=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca(el,1&el.current|2),t.child}e=e.sibling}null!==l.tail&&Ge()>Vs&&(t.flags|=128,r=!0,Hi(l,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=tl(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hi(l,!0),null===l.tail&&"hidden"===l.tailMode&&!s.alternate&&!ao)return Qi(t),null}else 2*Ge()-l.renderingStartTime>Vs&&1073741824!==n&&(t.flags|=128,r=!0,Hi(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=l.last)?n.sibling=s:t.child=s,l.last=s)}return null!==l.tail?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ge(),t.sibling=null,n=el.current,Ca(el,r?1&n|2:1&n),t):(Qi(t),null);case 22:case 23:return fu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Qi(t),6&t.subtreeFlags&&(t.flags|=8192)):Qi(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Xi(e,t){switch(to(t),t.tag){case 1:return Oa(t.type)&&La(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Go(),Ea(ja),Ea(Pa),rl(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(Ea(el),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));mo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(el),null;case 4:return Go(),null;case 10:return Po(t.type._context),null;case 22:case 23:return fu(),null;default:return null}}Ti=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Oi=function(){},Li=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qo(Qo.current);var o,l=null;switch(n){case"input":a=q(e,a),r=q(e,r),l=[];break;case"select":a=F({},a,{value:void 0}),r=F({},r,{value:void 0}),l=[];break;case"textarea":a=re(e,a),r=re(e,r),l=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ve(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(i.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(l=l||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(l=l||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(i.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ar("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}},Ri=function(e,t,n,r){n!==r&&(t.flags|=4)};var qi=!1,Ki=!1,Gi="function"===typeof WeakSet?WeakSet:Set,Zi=null;function Ji(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){_u(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){_u(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[da],delete t[pa],delete t[ha],delete t[ga],delete t[ya])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ls(e){return 5===e.tag||3===e.tag||4===e.tag}function is(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,fs=!1;function ds(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(i){}switch(n.tag){case 5:Ki||Ji(n,t);case 6:var r=cs,a=fs;cs=null,ds(e,t,n),fs=a,null!==(cs=r)&&(fs?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(fs?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Vt(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=fs,cs=n.stateNode.containerInfo,fs=!0,ds(e,t,n),cs=r,fs=a;break;case 0:case 11:case 14:case 15:if(!Ki&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,l=o.destroy;o=o.tag,void 0!==l&&(0!==(2&o)||0!==(4&o))&&es(n,t,l),a=a.next}while(a!==r)}ds(e,t,n);break;case 1:if(!Ki&&(Ji(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){_u(n,t,i)}ds(e,t,n);break;case 21:ds(e,t,n);break;case 22:1&n.mode?(Ki=(r=Ki)||null!==n.memoizedState,ds(e,t,n),Ki=r):ds(e,t,n);break;default:ds(e,t,n)}}function ms(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gi),t.forEach((function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,fs=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,fs=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(l,i,a),cs=null,fs=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){_u(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){_u(e,e.return,g)}try{ns(5,e,e.return)}catch(g){_u(e,e.return,g)}}break;case 1:hs(t,e),ys(e),512&r&&null!==n&&Ji(n,n.return);break;case 5:if(hs(t,e),ys(e),512&r&&null!==n&&Ji(n,n.return),32&e.flags){var a=e.stateNode;try{de(a,"")}catch(g){_u(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var l=e.memoizedProps,i=null!==n?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===l.type&&null!=l.name&&G(a,l),be(s,i);var c=be(s,l);for(i=0;i<u.length;i+=2){var f=u[i],d=u[i+1];"style"===f?ge(a,d):"dangerouslySetInnerHTML"===f?fe(a,d):"children"===f?de(a,d):b(a,f,d,c)}switch(s){case"input":Z(a,l);break;case"textarea":oe(a,l);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var m=l.value;null!=m?ne(a,!!l.multiple,m,!1):p!==!!l.multiple&&(null!=l.defaultValue?ne(a,!!l.multiple,l.defaultValue,!0):ne(a,!!l.multiple,l.multiple?[]:"",!1))}a[pa]=l}catch(g){_u(e,e.return,g)}}break;case 6:if(hs(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(g){_u(e,e.return,g)}}break;case 3:if(hs(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(g){_u(e,e.return,g)}break;case 4:default:hs(t,e),ys(e);break;case 13:hs(t,e),ys(e),8192&(a=e.child).flags&&(l=null!==a.memoizedState,a.stateNode.isHidden=l,!l||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Ge())),4&r&&ms(e);break;case 22:if(f=null!==n&&null!==n.memoizedState,1&e.mode?(Ki=(c=Ki)||f,hs(t,e),Ki=c):hs(t,e),ys(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!f&&0!==(1&e.mode))for(Zi=e,f=e.child;null!==f;){for(d=Zi=f;null!==Zi;){switch(m=(p=Zi).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Ji(p,p.return);var h=p.stateNode;if("function"===typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){_u(r,n,g)}}break;case 5:Ji(p,p.return);break;case 22:if(null!==p.memoizedState){ks(d);continue}}null!==m?(m.return=p,Zi=m):ks(d)}f=f.sibling}e:for(f=null,d=e;;){if(5===d.tag){if(null===f){f=d;try{a=d.stateNode,c?"function"===typeof(l=a.style).setProperty?l.setProperty("display","none","important"):l.display="none":(s=d.stateNode,i=void 0!==(u=d.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=he("display",i))}catch(g){_u(e,e.return,g)}}}else if(6===d.tag){if(null===f)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){_u(e,e.return,g)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:hs(t,e),ys(e),4&r&&ms(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ls(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(de(a,""),r.flags&=-33),us(e,is(e),a);break;case 3:case 4:var l=r.stateNode.containerInfo;ss(e,is(e),l);break;default:throw Error(o(161))}}catch(i){_u(e,e.return,i)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Zi=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Zi;){var a=Zi,o=a.child;if(22===a.tag&&r){var l=null!==a.memoizedState||qi;if(!l){var i=a.alternate,s=null!==i&&null!==i.memoizedState||Ki;i=qi;var u=Ki;if(qi=l,(Ki=s)&&!u)for(Zi=a;null!==Zi;)s=(l=Zi).child,22===l.tag&&null!==l.memoizedState?xs(a):null!==s?(s.return=l,Zi=s):xs(a);for(;null!==o;)Zi=o,bs(o,t,n),o=o.sibling;Zi=a,qi=i,Ki=u}ws(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Zi=o):ws(e)}}function ws(e){for(;null!==Zi;){var t=Zi;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ki||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ki)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ni(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;null!==l&&Wo(t,l,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,i,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var f=c.memoizedState;if(null!==f){var d=f.dehydrated;null!==d&&Vt(d)}}}break;default:throw Error(o(163))}Ki||512&t.flags&&as(t)}catch(p){_u(t,t.return,p)}}if(t===e){Zi=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zi=n;break}Zi=t.return}}function ks(e){for(;null!==Zi;){var t=Zi;if(t===e){Zi=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zi=n;break}Zi=t.return}}function xs(e){for(;null!==Zi;){var t=Zi;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){_u(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){_u(t,a,s)}}var o=t.return;try{as(t)}catch(s){_u(t,o,s)}break;case 5:var l=t.return;try{as(t)}catch(s){_u(t,l,s)}}}catch(s){_u(t,t.return,s)}if(t===e){Zi=null;break}var i=t.sibling;if(null!==i){i.return=t.return,Zi=i;break}Zi=t.return}}var Ss,_s=Math.ceil,Es=w.ReactCurrentDispatcher,Cs=w.ReactCurrentOwner,Ns=w.ReactCurrentBatchConfig,Ps=0,js=null,zs=null,Ts=0,Os=0,Ls=_a(0),Rs=0,Ms=null,Is=0,Fs=0,Ds=0,As=null,$s=null,Us=0,Vs=1/0,Bs=null,Ws=!1,Hs=null,Qs=null,Ys=!1,Xs=null,qs=0,Ks=0,Gs=null,Zs=-1,Js=0;function eu(){return 0!==(6&Ps)?Ge():-1!==Zs?Zs:Zs=Ge()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ts?Ts&-Ts:null!==go.transition?(0===Js&&(Js=ht()),Js):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function nu(e,t,n,r){if(50<Ks)throw Ks=0,Gs=null,Error(o(185));yt(e,n,r),0!==(2&Ps)&&e===js||(e===js&&(0===(2&Ps)&&(Fs|=n),4===Rs&&iu(e,Ts)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Vs=Ge()+500,Aa&&Va()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-lt(o),i=1<<l,s=a[l];-1===s?0!==(i&n)&&0===(i&r)||(a[l]=pt(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}(e,t);var r=dt(e,e===js?Ts:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Aa=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),la((function(){0===(6&Ps)&&Va()})),n=null;else{switch(wt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=ju(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&Ps))throw Error(o(327));var n=e.callbackNode;if(xu()&&e.callbackNode!==n)return null;var r=dt(e,e===js?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ps;Ps|=2;var l=mu();for(js===e&&Ts===t||(Bs=null,Vs=Ge()+500,du(e,t));;)try{vu();break}catch(s){pu(e,s)}No(),Es.current=l,Ps=a,null!==zs?t=0:(js=null,Ts=0,t=Rs)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(r=a,t=ou(e,a))),1===t)throw n=Ms,du(e,0),iu(e,r),ru(e,Ge()),n;if(6===t)iu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!ir(o(),a))return!1}catch(i){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(l=mt(e))&&(r=l,t=ou(e,l))),1===t))throw n=Ms,du(e,0),iu(e,r),ru(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:ku(e,$s,Bs);break;case 3:if(iu(e,r),(130023424&r)===r&&10<(t=Us+500-Ge())){if(0!==dt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(ku.bind(null,e,$s,Bs),t);break}ku(e,$s,Bs);break;case 4:if(iu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-lt(r);l=1<<i,(i=t[i])>a&&(a=i),r&=~l}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_s(r/1960))-r)){e.timeoutHandle=ra(ku.bind(null,e,$s,Bs),r);break}ku(e,$s,Bs);break;default:throw Error(o(329))}}}return ru(e,Ge()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(du(e,t).flags|=256),2!==(e=gu(e,t))&&(t=$s,$s=n,null!==t&&lu(t)),e}function lu(e){null===$s?$s=e:$s.push.apply($s,e)}function iu(e,t){for(t&=~Ds,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(o(327));xu();var t=dt(e,0);if(0===(1&t))return ru(e,Ge()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ms,du(e,0),iu(e,t),ru(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,$s,Bs),ru(e,Ge()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Vs=Ge()+500,Aa&&Va())}}function cu(e){null!==Xs&&0===Xs.tag&&0===(6&Ps)&&xu();var t=Ps;Ps|=1;var n=Ns.transition,r=bt;try{if(Ns.transition=null,bt=1,e)return e()}finally{bt=r,Ns.transition=n,0===(6&(Ps=t))&&Va()}}function fu(){Os=Ls.current,Ea(Ls)}function du(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&La();break;case 3:Go(),Ea(ja),Ea(Pa),rl();break;case 5:Jo(r);break;case 4:Go();break;case 13:case 19:Ea(el);break;case 10:Po(r.type._context);break;case 22:case 23:fu()}n=n.return}if(js=e,zs=e=Lu(e.current,null),Ts=Os=t,Rs=0,Ms=null,Ds=Fs=Is=0,$s=As=null,null!==Oo){for(t=0;t<Oo.length;t++)if(null!==(r=(n=Oo[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var l=o.next;o.next=a,r.next=l}n.pending=r}Oo=null}return e}function pu(e,t){for(;;){var n=zs;try{if(No(),al.current=Zl,cl){for(var r=il.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}cl=!1}if(ll=0,ul=sl=il=null,fl=!1,dl=0,Cs.current=null,null===n||null===n.return){Rs=1,Ms=t,zs=null;break}e:{var l=e,i=n.return,s=n,u=t;if(t=Ts,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,f=s,d=f.tag;if(0===(1&f.mode)&&(0===d||11===d||15===d)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=gi(i);if(null!==m){m.flags&=-257,yi(m,i,s,0,t),1&m.mode&&hi(l,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){hi(l,c,t),hu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var y=gi(i);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yi(y,i,s,0,t),ho(ui(u,s));break e}}l=u=ui(u,s),4!==Rs&&(Rs=2),null===As?As=[l]:As.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t,Vo(l,pi(0,u,t));break e;case 1:s=u;var v=l.type,b=l.stateNode;if(0===(128&l.flags)&&("function"===typeof v.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Qs||!Qs.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t,Vo(l,mi(l,s,t));break e}}l=l.return}while(null!==l)}wu(n)}catch(w){t=w,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function mu(){var e=Es.current;return Es.current=Zl,null===e?Zl:e}function hu(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===js||0===(268435455&Is)&&0===(268435455&Fs)||iu(js,Ts)}function gu(e,t){var n=Ps;Ps|=2;var r=mu();for(js===e&&Ts===t||(Bs=null,du(e,t));;)try{yu();break}catch(a){pu(e,a)}if(No(),Ps=n,Es.current=r,null!==zs)throw Error(o(261));return js=null,Ts=0,Rs}function yu(){for(;null!==zs;)bu(zs)}function vu(){for(;null!==zs&&!qe();)bu(zs)}function bu(e){var t=Ss(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?wu(e):zs=t,Cs.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Yi(n,t,Os)))return void(zs=n)}else{if(null!==(n=Xi(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Rs=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Rs&&(Rs=5)}function ku(e,t,n){var r=bt,a=Ns.transition;try{Ns.transition=null,bt=1,function(e,t,n,r){do{xu()}while(null!==Xs);if(0!==(6&Ps))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-lt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,l),e===js&&(zs=js=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ys||(Ys=!0,ju(tt,(function(){return xu(),null}))),l=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||l){l=Ns.transition,Ns.transition=null;var i=bt;bt=1;var s=Ps;Ps|=4,Cs.current=null,function(e,t){if(ea=Wt,pr(e=dr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch(k){n=null;break e}var i=0,s=-1,u=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var m;d!==n||0!==a&&3!==d.nodeType||(s=i+a),d!==l||0!==r&&3!==d.nodeType||(u=i+r),3===d.nodeType&&(i+=d.nodeValue.length),null!==(m=d.firstChild);)p=d,d=m;for(;;){if(d===e)break t;if(p===n&&++c===a&&(s=i),p===l&&++f===r&&(u=i),null!==(m=d.nextSibling))break;p=(d=p).parentNode}d=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Wt=!1,Zi=t;null!==Zi;)if(e=(t=Zi).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zi=e;else for(;null!==Zi;){t=Zi;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,y=h.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ni(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(o(163))}}catch(k){_u(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Zi=e;break}Zi=t.return}h=ts,ts=!1}(e,n),gs(n,e),mr(ta),Wt=!!ea,ta=ea=null,e.current=n,vs(n,e,a),Ke(),Ps=s,bt=i,Ns.transition=l}else e.current=n;if(Ys&&(Ys=!1,Xs=e,qs=a),l=e.pendingLanes,0===l&&(Qs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ws)throw Ws=!1,e=Hs,Hs=null,e;0!==(1&qs)&&0!==e.tag&&xu(),l=e.pendingLanes,0!==(1&l)?e===Gs?Ks++:(Ks=0,Gs=e):Ks=0,Va()}(e,t,n,r)}finally{Ns.transition=a,bt=r}return null}function xu(){if(null!==Xs){var e=wt(qs),t=Ns.transition,n=bt;try{if(Ns.transition=null,bt=16>e?16:e,null===Xs)var r=!1;else{if(e=Xs,Xs=null,qs=0,0!==(6&Ps))throw Error(o(331));var a=Ps;for(Ps|=4,Zi=e.current;null!==Zi;){var l=Zi,i=l.child;if(0!==(16&Zi.flags)){var s=l.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zi=c;null!==Zi;){var f=Zi;switch(f.tag){case 0:case 11:case 15:ns(8,f,l)}var d=f.child;if(null!==d)d.return=f,Zi=d;else for(;null!==Zi;){var p=(f=Zi).sibling,m=f.return;if(os(f),f===c){Zi=null;break}if(null!==p){p.return=m,Zi=p;break}Zi=m}}}var h=l.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Zi=l}}if(0!==(2064&l.subtreeFlags)&&null!==i)i.return=l,Zi=i;else e:for(;null!==Zi;){if(0!==(2048&(l=Zi).flags))switch(l.tag){case 0:case 11:case 15:ns(9,l,l.return)}var v=l.sibling;if(null!==v){v.return=l.return,Zi=v;break e}Zi=l.return}}var b=e.current;for(Zi=b;null!==Zi;){var w=(i=Zi).child;if(0!==(2064&i.subtreeFlags)&&null!==w)w.return=i,Zi=w;else e:for(i=b;null!==Zi;){if(0!==(2048&(s=Zi).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(x){_u(s,s.return,x)}if(s===i){Zi=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,Zi=k;break e}Zi=s.return}}if(Ps=a,Va(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(x){}r=!0}return r}finally{bt=n,Ns.transition=t}}return!1}function Su(e,t,n){e=$o(e,t=pi(0,t=ui(n,t),1),1),t=eu(),null!==e&&(yt(e,1,t),ru(e,t))}function _u(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Qs||!Qs.has(r))){t=$o(t,e=mi(t,e=ui(n,e),1),1),e=eu(),null!==t&&(yt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,js===e&&(Ts&n)===n&&(4===Rs||3===Rs&&(130023424&Ts)===Ts&&500>Ge()-Us?du(e,0):Ds|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Mo(e,t))&&(yt(e,t,n),ru(e,n))}function Nu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cu(e,n)}function ju(e,t){return Ye(e,t)}function zu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tu(e,t,n,r){return new zu(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,t){var n=e.alternate;return null===n?((n=Tu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ru(e,t,n,r,a,l){var i=2;if(r=e,"function"===typeof e)Ou(e)&&(i=1);else if("string"===typeof e)i=5;else e:switch(e){case S:return Mu(n.children,a,l,t);case _:i=8,a|=8;break;case E:return(e=Tu(12,n,t,2|a)).elementType=E,e.lanes=l,e;case j:return(e=Tu(13,n,t,a)).elementType=j,e.lanes=l,e;case z:return(e=Tu(19,n,t,a)).elementType=z,e.lanes=l,e;case L:return Iu(n,a,l,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:i=10;break e;case N:i=9;break e;case P:i=11;break e;case T:i=14;break e;case O:i=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Tu(i,n,t,a)).elementType=e,t.type=r,t.lanes=l,t}function Mu(e,t,n,r){return(e=Tu(7,e,r,t)).lanes=n,e}function Iu(e,t,n,r){return(e=Tu(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=Tu(6,e,null,t)).lanes=n,e}function Du(e,t,n){return(t=Tu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Au(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,a,o,l,i,s){return e=new Au(e,t,n,i,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Tu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Uu(e){if(!e)return Na;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Ma(e,n,t)}return t}function Vu(e,t,n,r,a,o,l,i,s){return(e=$u(n,r,!0,e,0,o,0,i,s)).context=Uu(null),n=e.current,(o=Ao(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,$o(n,o,a),e.current.lanes=a,yt(e,a,r),ru(e,r),e}function Bu(e,t,n,r){var a=t.current,o=eu(),l=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ao(o,l)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$o(a,t,l))&&(nu(e,a,l,o),Uo(e,a,l)),l}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Qu(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||ja.current)bi=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bi=!1,function(e,t,n){switch(t.tag){case 3:ji(t),mo();break;case 5:Zo(t);break;case 1:Oa(t.type)&&Ia(t);break;case 4:Ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(So,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca(el,1&el.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fi(e,t,n):(Ca(el,1&el.current),null!==(e=Wi(e,t,n))?e.sibling:null);Ca(el,1&el.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Vi(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(el,el.current),r)break;return null;case 22:case 23:return t.lanes=0,_i(e,t,n)}return Wi(e,t,n)}(e,t,n);bi=0!==(131072&e.flags)}else bi=!1,ao&&0!==(1048576&t.flags)&&Ja(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var a=Ta(t,Pa.current);zo(t,n),a=gl(null,t,r,e,a,n);var l=yl();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(l=!0,Ia(t)):l=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Fo(t),a.updater=ai,t.stateNode=a,a._reactInternals=t,si(t,r,e,n),t=Pi(null,t,r,!0,l,n)):(t.tag=0,ao&&l&&eo(t),wi(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ou(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===T)return 14}return 2}(r),e=ni(r,e),a){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=Ni(null,t,r,e,n);break e;case 11:t=ki(null,t,r,e,n);break e;case 14:t=xi(null,t,r,ni(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Ci(e,t,r,a=t.elementType===r?a:ni(r,a),n);case 1:return r=t.type,a=t.pendingProps,Ni(e,t,r,a=t.elementType===r?a:ni(r,a),n);case 3:e:{if(ji(t),null===e)throw Error(o(387));r=t.pendingProps,a=(l=t.memoizedState).element,Do(e,t),Bo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated){if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,256&t.flags){t=zi(e,t,r,n,a=ui(Error(o(423)),t));break e}if(r!==a){t=zi(e,t,r,n,a=ui(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=xo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mo(),r===a){t=Wi(e,t,n);break e}wi(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,l=null!==e?e.memoizedProps:null,i=a.children,na(r,a)?i=null:null!==l&&na(r,l)&&(t.flags|=32),Ei(e,t),wi(e,t,i,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Fi(e,t,n);case 4:return Ko(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ko(t,null,r,n):wi(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,ki(e,t,r,a=t.elementType===r?a:ni(r,a),n);case 7:return wi(e,t,t.pendingProps,n),t.child;case 8:case 12:return wi(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,i=a.value,Ca(So,r._currentValue),r._currentValue=i,null!==l)if(ir(l.value,i)){if(l.children===a.children&&!ja.current){t=Wi(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var s=l.dependencies;if(null!==s){i=l.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===l.tag){(u=Ao(-1,n&-n)).tag=2;var c=l.updateQueue;if(null!==c){var f=(c=c.shared).pending;null===f?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}l.lanes|=n,null!==(u=l.alternate)&&(u.lanes|=n),jo(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===l.tag)i=l.type===t.type?null:l.child;else if(18===l.tag){if(null===(i=l.return))throw Error(o(341));i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),jo(i,n,t),i=l.sibling}else i=l.child;if(null!==i)i.return=l;else for(i=l;null!==i;){if(i===t){i=null;break}if(null!==(l=i.sibling)){l.return=i.return,i=l;break}i=i.return}l=i}wi(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zo(t,n),r=r(a=To(a)),t.flags|=1,wi(e,t,r,n),t.child;case 14:return a=ni(r=t.type,t.pendingProps),xi(e,t,r,a=ni(r.type,a),n);case 15:return Si(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ni(r,a),Bi(e,t),t.tag=1,Oa(r)?(e=!0,Ia(t)):e=!1,zo(t,n),li(t,r,a),si(t,r,a,n),Pi(null,t,r,!0,e,n);case 19:return Vi(e,t,n);case 22:return _i(e,t,n)}throw Error(o(156,t.tag))};var Yu="function"===typeof reportError?reportError:function(e){console.error(e)};function Xu(e){this._internalRoot=e}function qu(e){this._internalRoot=e}function Ku(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var o=n._reactRootContainer;if(o){var l=o;if("function"===typeof a){var i=a;a=function(){var e=Wu(l);i.call(e)}}Bu(t,l,e,a)}else l=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Wu(l);o.call(e)}}var l=Vu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=l,e[ma]=l.current,Vr(8===e.nodeType?e.parentNode:e),cu(),l}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var i=r;r=function(){var e=Wu(s);i.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ma]=s.current,Vr(8===e.nodeType?e.parentNode:e),cu((function(){Bu(t,s,n,r)})),s}(n,t,e,a,r);return Wu(l)}qu.prototype.render=Xu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Bu(e,t,null,null)},qu.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Bu(null,e,null,null)})),t[ma]=null}},qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=_t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&Ft(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ft(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Ge()),0===(6&Ps)&&(Vs=Ge()+500,Va()))}break;case 13:cu((function(){var t=Mo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Qu(e,1)}},xt=function(e){if(13===e.tag){var t=Mo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Qu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Mo(e,t);if(null!==n)nu(n,e,t,eu());Qu(e,t)}},_t=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},xe=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ka(r);if(!a)throw Error(o(90));Y(r),Z(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,je=cu;var ec={usingClientEntryPoint:!1,Events:[ba,wa,ka,Ce,Ne,uu]},tc={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ku(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Ku(e))throw Error(o(299));var n=!1,r="",a=Yu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,a),e[ma]=t.current,Vr(8===e.nodeType?e.parentNode:e),new Xu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(o(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Ku(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,l="",i=Yu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=Vu(t,null,e,1,null!=n?n:null,a,0,l,i),e[ma]=t.current,Vr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new qu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(o(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[ma]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},341:(e,t,n)=>{var r=n(579),a=n(43),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};function l(e,t){var n,r;switch(t.type){case"TYPE":return o(o({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length+1)});case"DELAY":return o(o({},e),{speed:t.payload});case"DELETE":return o(o({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length-1)});case"COUNT":return o(o({},e),{count:e.count+1});default:return e}}var i=function(e){var t=e.words,n=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,o=void 0===r?1:r,i=e.typeSpeed,s=void 0===i?80:i,u=e.deleteSpeed,c=void 0===u?50:u,f=e.delaySpeed,d=void 0===f?1500:f,p=e.onLoopDone,m=e.onType,h=e.onDelete,g=e.onDelay,y=a.useReducer(l,{speed:s,text:"",count:0}),v=y[0],b=v.speed,w=v.text,k=v.count,x=y[1],S=a.useRef(0),_=a.useRef(!1),E=a.useRef(!1),C=a.useRef(!1),N=a.useRef(!1),P=a.useCallback((function(){var e=k%n.length,t=n[e];E.current?(x({type:"DELETE",payload:t,speed:c}),""===w&&(E.current=!1,x({type:"COUNT"}))):(x({type:"TYPE",payload:t,speed:s}),C.current=!0,w===t&&(x({type:"DELAY",payload:d}),C.current=!1,N.current=!0,setTimeout((function(){N.current=!1,E.current=!0}),d),o>0&&(S.current+=1,S.current/n.length===o&&(N.current=!1,_.current=!0)))),C.current&&m&&m(S.current),E.current&&h&&h(),N.current&&g&&g()}),[k,d,c,o,s,n,w,m,h,g]);return a.useEffect((function(){var e=setTimeout(P,b);return _.current&&clearTimeout(e),function(){return clearTimeout(e)}}),[P,b]),a.useEffect((function(){p&&_.current&&p()}),[p]),[w,{isType:C.current,isDelay:N.current,isDelete:E.current,isDone:_.current}]};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var s=a.memo((function(e){var t=e.cursorBlinking,n=void 0===t||t,a=e.cursorStyle,l=void 0===a?"|":a,i=e.cursorColor,s=void 0===i?"inherit":i;return r.jsx("span",o({style:{color:s},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(n?"styles-module_blinking__9VXRT":"")},{children:l}))}));t.d1=i},153:(e,t,n)=>{var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var w=b.prototype=new v;w.constructor=b,h(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},l=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,a)&&!_.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:l,ref:i,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,a,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return l=l(s=e),e=""===o?"."+P(s,0):o,k(l)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),j(l,t,a,"",(function(e){return e}))):null!=l&&(C(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",k(e))for(var u=0;u<e.length;u++){var c=o+P(i=e[u],u);s+=j(i,t,a,c,l)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=j(i=i.value,t,a,c=o+P(i,u++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return j(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},L={transition:null},R={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=l,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),o=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)x.call(t,u)&&!_.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:l,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{e.exports=n(202)},579:(e,t,n)=>{e.exports=n(153)},234:(e,t)=>{function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,l=a>>>1;r<l;){var i=2*(r+1)-1,s=e[i],u=i+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[i]=n,r=i);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],f=1,d=null,p=3,m=!1,h=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,w(e),!h)if(null!==r(u))h=!0,L(x);else{var t=r(c);null!==t&&R(k,t.startTime-e)}}function x(e,n){h=!1,g&&(g=!1,v(C),C=-1),m=!0;var o=p;try{for(w(n),d=r(u);null!==d&&(!(d.expirationTime>n)||e&&!j());){var l=d.callback;if("function"===typeof l){d.callback=null,p=d.priorityLevel;var i=l(d.expirationTime<=n);n=t.unstable_now(),"function"===typeof i?d.callback=i:d===r(u)&&a(u),w(n)}else a(u);d=r(u)}if(null!==d)var s=!0;else{var f=r(c);null!==f&&R(k,f.startTime-n),s=!1}return s}finally{d=null,p=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,_=!1,E=null,C=-1,N=5,P=-1;function j(){return!(t.unstable_now()-P<N)}function z(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?S():(_=!1,E=null)}}else _=!1}if("function"===typeof b)S=function(){b(z)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,O=T.port2;T.port1.onmessage=z,S=function(){O.postMessage(null)}}else S=function(){y(z,0)};function L(e){E=e,_||(_=!0,S())}function R(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,L(x))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var l=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?l+o:l:o=l,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:f++,callback:a,priorityLevel:e,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(v(C),C=-1):g=!0,R(k,o-l))):(e.sortIndex=i,n(u,e),h||m||(h=!0,L(x))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{e.exports=n(234)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>l[e]=()=>r[e]));return l.default=()=>r,n.d(o,l),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".ed3810f9.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="my-app:";n.l=(r,a,o,l)=>{if(e[r])e[r].push(a);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[a];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/my-website/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var l=n.p+n.u(t),i=new Error;n.l(l,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,l=r[0],i=r[1],s=r[2],u=0;if(l.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)s(n)}for(t&&t(r);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmy_app=self.webpackChunkmy_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n(43),a=n.t(r,2),o=n(391);const l=n.p+"static/media/logo.47f9c3ede213d00a4368.jpg";var i=n(579);const s=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"header-container",children:[(0,i.jsx)("img",{src:l,alt:"Logo",className:"header-logo"}),(0,i.jsxs)("ul",{className:"header-menu",children:[(0,i.jsx)("li",{className:"cursor-pointer",children:"HOME"}),(0,i.jsx)("li",{className:"cursor-pointer",children:"ABOUT US"}),(0,i.jsx)("li",{className:"cursor-pointer",children:"PROJECT"})]})]})}),u=n.p+"static/media/ecomHome.e5c0ee9c78ce8e147277.png",c=n.p+"static/media/ecomProduct.0f316ae8902331389d07.png",f=n.p+"static/media/ecomCart.d5553dca913fda1db73c.png",d=()=>(0,i.jsxs)("div",{className:"project-container",children:[(0,i.jsx)("h1",{className:"project-title",children:(0,i.jsx)("u",{children:"E-Commerce Website"})}),(0,i.jsxs)("section",{className:"section",children:[(0,i.jsx)("h2",{className:"section-heading",children:"Project Overview"}),(0,i.jsx)("p",{className:"section-content",children:"This e-commerce website is a robust front-end application developed using React.js. It offers users a seamless shopping experience with features like product browsing, cart management, and real-time data updates through API integration."})]}),(0,i.jsxs)("section",{className:"section",children:[(0,i.jsx)("h2",{className:"section-heading",children:"Technologies Used"}),(0,i.jsxs)("ul",{className:"tech-list",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"React.js"}),": For building dynamic and responsive user interfaces."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Redux"}),": For state management and ensuring a smooth user experience."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"RESTful API"}),": For fetching product data and managing cart operations."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"CSS/SCSS"}),": For styling and ensuring responsiveness."]})]})]}),(0,i.jsxs)("section",{className:"section",children:[(0,i.jsx)("h2",{className:"section-heading",children:"Features"}),(0,i.jsxs)("ul",{className:"features-list",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"User Interface"}),": Modern, responsive design with detailed product pages and user-friendly navigation."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Cart Management"}),": Add, remove, and update items in the cart with real-time updates and persistent state."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"API Integration"}),": Dynamic data fetching from RESTful API and real-time synchronization of product data."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Product Management"}),": Product categories and sorting options for enhanced user experience."]})]})]}),(0,i.jsxs)("section",{className:"section",children:[(0,i.jsx)("h2",{className:"section-heading",children:"Challenges Faced"}),(0,i.jsxs)("ul",{className:"challenges-list",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"State Management"}),": Implementing Redux for global state management was a complex task."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"API Integration"}),": Handling asynchronous data fetching and error management required careful implementation."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Responsive Design"}),": Ensuring consistency across various devices involved extensive testing."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Performance Optimization"}),": Optimizing load times and performance was crucial for a smooth user experience."]})]})]}),(0,i.jsxs)("section",{className:"section",children:[(0,i.jsx)("h2",{className:"section-heading",children:"Learning Outcomes"}),(0,i.jsxs)("ul",{className:"learning-outcomes-list",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Advanced React.js Skills"}),": Gained proficiency in building complex components and managing state."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"API Integration"}),": Developed hands-on experience with RESTful APIs."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Responsive Design"}),": Enhanced understanding of responsive web design principles."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Performance Optimization"}),": Learned techniques for improving front-end performance."]})]})]}),(0,i.jsxs)("section",{className:"section",children:[(0,i.jsx)("h2",{className:"section-heading",children:"Future Enhancements"}),(0,i.jsxs)("ul",{className:"future-enhancements-list",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Enhanced Features"}),": User authentication, personalized shopping, and advanced product recommendations."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"UI/UX Improvements"}),": Interactive elements and refinements based on user feedback."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Performance and Scalability"}),": Improvements to handle increased traffic and data loads."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Additional Functionality"}),": Integration of additional payment options and product reviews."]})]})]}),(0,i.jsxs)("section",{className:"imgs-section",children:[(0,i.jsx)("h2",{className:"section-heading",children:"Images"}),(0,i.jsxs)("div",{className:"Project_image_box",children:[(0,i.jsx)("div",{className:"Project_image_box_1",children:(0,i.jsx)("img",{src:u,alt:"E-commerce Home Page",layout:"fill",objectFit:"cover",className:"img"})}),(0,i.jsx)("div",{className:"Project_image_box_1",children:(0,i.jsx)("img",{src:c,alt:"E-commerce Product Page",layout:"fill",objectFit:"cover",className:"img"})}),(0,i.jsx)("div",{className:"Project_image_box_1",children:(0,i.jsx)("img",{src:f,alt:"E-commerce Cart Page",layout:"fill",objectFit:"cover",className:"img"})})]})]}),(0,i.jsxs)("section",{className:"text-center",children:[(0,i.jsx)("p",{className:"final-message",children:"Currently, this is the only project listed. Stay tuned for more exciting projects coming soon!"}),(0,i.jsx)("div",{className:"link-container",children:(0,i.jsx)("a",{href:"https://ankit7251.github.io/Ecommers/",className:"link",children:"Live Demo"})})]})]});var p=n(341);var m=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),h=Math.abs,g=String.fromCharCode,y=Object.assign;function v(e){return e.trim()}function b(e,t,n){return e.replace(t,n)}function w(e,t){return e.indexOf(t)}function k(e,t){return 0|e.charCodeAt(t)}function x(e,t,n){return e.slice(t,n)}function S(e){return e.length}function _(e){return e.length}function E(e,t){return t.push(e),e}var C=1,N=1,P=0,j=0,z=0,T="";function O(e,t,n,r,a,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:C,column:N,length:l,return:""}}function L(e,t){return y(O("",null,null,"",null,null,0),e,{length:-e.length},t)}function R(){return z=j>0?k(T,--j):0,N--,10===z&&(N=1,C--),z}function M(){return z=j<P?k(T,j++):0,N++,10===z&&(N=1,C++),z}function I(){return k(T,j)}function F(){return j}function D(e,t){return x(T,e,t)}function A(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $(e){return C=N=1,P=S(T=e),j=0,[]}function U(e){return T="",e}function V(e){return v(D(j-1,H(91===e?e+2:40===e?e+1:e)))}function B(e){for(;(z=I())&&z<33;)M();return A(e)>2||A(z)>3?"":" "}function W(e,t){for(;--t&&M()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return D(e,F()+(t<6&&32==I()&&32==M()))}function H(e){for(;M();)switch(z){case e:return j;case 34:case 39:34!==e&&39!==e&&H(z);break;case 40:41===e&&H(e);break;case 92:M()}return j}function Q(e,t){for(;M()&&e+z!==57&&(e+z!==84||47!==I()););return"/*"+D(t,j-1)+"*"+g(47===e?e:M())}function Y(e){for(;!A(I());)M();return D(e,j)}var X="-ms-",q="-moz-",K="-webkit-",G="comm",Z="rule",J="decl",ee="@keyframes";function te(e,t){for(var n="",r=_(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function ne(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case J:return e.return=e.return||e.value;case G:return"";case ee:return e.return=e.value+"{"+te(e.children,r)+"}";case Z:e.value=e.props.join(",")}return S(n=te(e.children,r))?e.return=e.value+"{"+n+"}":""}function re(e){return U(ae("",null,null,null,[""],e=$(e),0,[0],e))}function ae(e,t,n,r,a,o,l,i,s){for(var u=0,c=0,f=l,d=0,p=0,m=0,h=1,y=1,v=1,x=0,_="",C=a,N=o,P=r,j=_;y;)switch(m=x,x=M()){case 40:if(108!=m&&58==k(j,f-1)){-1!=w(j+=b(V(x),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:j+=V(x);break;case 9:case 10:case 13:case 32:j+=B(m);break;case 92:j+=W(F()-1,7);continue;case 47:switch(I()){case 42:case 47:E(le(Q(M(),F()),t,n),s);break;default:j+="/"}break;case 123*h:i[u++]=S(j)*v;case 125*h:case 59:case 0:switch(x){case 0:case 125:y=0;case 59+c:-1==v&&(j=b(j,/\f/g,"")),p>0&&S(j)-f&&E(p>32?ie(j+";",r,n,f-1):ie(b(j," ","")+";",r,n,f-2),s);break;case 59:j+=";";default:if(E(P=oe(j,t,n,u,c,a,i,_,C=[],N=[],f),o),123===x)if(0===c)ae(j,t,P,P,C,o,f,i,N);else switch(99===d&&110===k(j,3)?100:d){case 100:case 108:case 109:case 115:ae(e,P,P,r&&E(oe(e,P,P,0,0,a,i,_,a,C=[],f),N),a,N,f,i,r?C:N);break;default:ae(j,P,P,P,[""],N,0,i,N)}}u=c=p=0,h=v=1,_=j="",f=l;break;case 58:f=1+S(j),p=m;default:if(h<1)if(123==x)--h;else if(125==x&&0==h++&&125==R())continue;switch(j+=g(x),x*h){case 38:v=c>0?1:(j+="\f",-1);break;case 44:i[u++]=(S(j)-1)*v,v=1;break;case 64:45===I()&&(j+=V(M())),d=I(),c=f=S(_=j+=Y(F())),x++;break;case 45:45===m&&2==S(j)&&(h=0)}}return o}function oe(e,t,n,r,a,o,l,i,s,u,c){for(var f=a-1,d=0===a?o:[""],p=_(d),m=0,g=0,y=0;m<r;++m)for(var w=0,k=x(e,f+1,f=h(g=l[m])),S=e;w<p;++w)(S=v(g>0?d[w]+" "+k:b(k,/&\f/g,d[w])))&&(s[y++]=S);return O(e,t,n,0===a?Z:i,s,u,c)}function le(e,t,n){return O(e,t,n,G,g(z),x(e,2,-2),0)}function ie(e,t,n,r){return O(e,t,n,J,x(e,0,r),x(e,r+1,-1),r)}var se=function(e,t,n){for(var r=0,a=0;r=a,a=I(),38===r&&12===a&&(t[n]=1),!A(a);)M();return D(e,j)},ue=function(e,t){return U(function(e,t){var n=-1,r=44;do{switch(A(r)){case 0:38===r&&12===I()&&(t[n]=1),e[n]+=se(j-1,t,n);break;case 2:e[n]+=V(r);break;case 4:if(44===r){e[++n]=58===I()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=g(r)}}while(r=M());return e}($(e),t))},ce=new WeakMap,fe=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ce.get(n))&&!r){ce.set(e,!0);for(var a=[],o=ue(t,a),l=n.props,i=0,s=0;i<o.length;i++)for(var u=0;u<l.length;u++,s++)e.props[s]=a[i]?o[i].replace(/&\f/g,l[u]):l[u]+" "+o[i]}}},de=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function pe(e,t){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+q+e+X+e+e;case 6828:case 4268:return K+e+X+e+e;case 6165:return K+e+X+"flex-"+e+e;case 5187:return K+e+b(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return K+e+X+"flex-item-"+b(e,/flex-|-self/,"")+e;case 4675:return K+e+X+"flex-line-pack"+b(e,/align-content|flex-|-self/,"")+e;case 5548:return K+e+X+b(e,"shrink","negative")+e;case 5292:return K+e+X+b(e,"basis","preferred-size")+e;case 6060:return K+"box-"+b(e,"-grow","")+K+e+X+b(e,"grow","positive")+e;case 4554:return K+b(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+q+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch")?pe(b(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==k(e,t+1))break;case 6444:switch(k(e,S(e)-3-(~w(e,"!important")&&10))){case 107:return b(e,":",":"+K)+e;case 101:return b(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+K+(45===k(e,14)?"inline-":"")+"box$3$1"+K+"$2$3$1"+X+"$2box$3")+e}break;case 5936:switch(k(e,t+11)){case 114:return K+e+X+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+X+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+X+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return K+e+X+e+e}return e}var me=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case J:e.return=pe(e.value,e.length);break;case ee:return te([L(e,{value:b(e.value,"@","@"+K)})],r);case Z:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return te([L(e,{props:[b(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return te([L(e,{props:[b(t,/:(plac\w+)/,":"+K+"input-$1")]}),L(e,{props:[b(t,/:(plac\w+)/,":-moz-$1")]}),L(e,{props:[b(t,/:(plac\w+)/,X+"input-$1")]})],r)}return""}))}}],he=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,o=e.stylisPlugins||me,l={},i=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)l[t[n]]=!0;i.push(e)}));var s,u,c=[ne,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],f=function(e){var t=_(e);return function(n,r,a,o){for(var l="",i=0;i<t;i++)l+=e[i](n,r,a,o)||"";return l}}([fe,de].concat(o,c));a=function(e,t,n,r){s=n,te(re(e?e+"{"+t.styles+"}":t.styles),f),r&&(d.inserted[t.name]=!0)};var d={key:t,sheet:new m({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:a};return d.sheet.hydrate(i),d};function ge(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var ye=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},ve=function(e,t,n){ye(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var be={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function we(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var ke=!1,xe=/[A-Z]|^ms/g,Se=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_e=function(e){return 45===e.charCodeAt(1)},Ee=function(e){return null!=e&&"boolean"!==typeof e},Ce=we((function(e){return _e(e)?e:e.replace(xe,"-$&").toLowerCase()})),Ne=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(Se,(function(e,t,n){return ze={name:t,styles:n,next:ze},t}))}return 1===be[e]||_e(e)||"number"!==typeof t||0===t?t:t+"px"},Pe="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function je(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var a=n;if(1===a.anim)return ze={name:a.name,styles:a.styles,next:ze},a.name;var o=n;if(void 0!==o.styles){var l=o.next;if(void 0!==l)for(;void 0!==l;)ze={name:l.name,styles:l.styles,next:ze},l=l.next;return o.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=je(e,t,n[a])+";";else for(var o in n){var l=n[o];if("object"!==typeof l){var i=l;null!=t&&void 0!==t[i]?r+=o+"{"+t[i]+"}":Ee(i)&&(r+=Ce(o)+":"+Ne(o,i)+";")}else{if("NO_COMPONENT_SELECTOR"===o&&ke)throw new Error(Pe);if(!Array.isArray(l)||"string"!==typeof l[0]||null!=t&&void 0!==t[l[0]]){var s=je(e,t,l);switch(o){case"animation":case"animationName":r+=Ce(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var u=0;u<l.length;u++)Ee(l[u])&&(r+=Ce(o)+":"+Ne(o,l[u])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var i=ze,s=n(e);return ze=i,je(e,t,s)}}var u=n;if(null==t)return u;var c=t[u];return void 0!==c?c:u}var ze,Te=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function Oe(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";ze=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=je(n,t,o)):a+=o[0];for(var l=1;l<e.length;l++){if(a+=je(n,t,e[l]),r)a+=o[l]}Te.lastIndex=0;for(var i,s="";null!==(i=Te.exec(a));)s+="-"+i[1];var u=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:u,styles:a,next:ze}}var Le=!!a.useInsertionEffect&&a.useInsertionEffect,Re=Le||function(e){return e()},Me=(Le||r.useLayoutEffect,r.createContext("undefined"!==typeof HTMLElement?he({key:"css"}):null)),Ie=(Me.Provider,function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(Me);return e(t,a,n)}))}),Fe=r.createContext({});var De={}.hasOwnProperty,Ae="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",$e=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ye(t,n,r),Re((function(){return ve(t,n,r)})),null},Ue=Ie((function(e,t,n){var a=e.css;"string"===typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var o=e[Ae],l=[a],i="";"string"===typeof e.className?i=ge(t.registered,l,e.className):null!=e.className&&(i=e.className+" ");var s=Oe(l,void 0,r.useContext(Fe));i+=t.key+"-"+s.name;var u={};for(var c in e)De.call(e,c)&&"css"!==c&&c!==Ae&&(u[c]=e[c]);return u.className=i,n&&(u.ref=n),r.createElement(r.Fragment,null,r.createElement($e,{cache:t,serialized:s,isStringTag:"string"===typeof o}),r.createElement(o,u))})),Ve=(n(219),i.Fragment);function Be(e,t,n){return De.call(t,"css")?i.jsx(Ue,function(e,t){var n={};for(var r in t)De.call(t,r)&&(n[r]=t[r]);return n[Ae]=e,n}(e,t),n):i.jsx(e,t,n)}function We(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Oe(t)}var He=function(){var e=We.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Qe=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(null!=o){var l=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))l=e(o);else for(var i in l="",o)o[i]&&i&&(l&&(l+=" "),l+=i);break;default:l=o}l&&(a&&(a+=" "),a+=l)}}return a};var Ye=function(e){var t=e.cache,n=e.serializedArr;return Re((function(){for(var e=0;e<n.length;e++)ve(t,n[e],!1)})),null},Xe=Ie((function(e,t){var n=[],a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o=Oe(r,t.registered);return n.push(o),ye(t,o,!1),t.key+"-"+o.name},o={css:a,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e,t,n){var r=[],a=ge(e,r,n);return r.length<2?n:a+t(r)}(t.registered,a,Qe(n))},theme:r.useContext(Fe)},l=e.children(o);return r.createElement(r.Fragment,null,r.createElement(Ye,{cache:t,serializedArr:n}),l)})),qe=Object.defineProperty,Ke=(e,t,n)=>((e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),Ge=new Map,Ze=new WeakMap,Je=0,et=void 0;function tt(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Ze.has(e)||(Je+=1,Ze.set(e,Je.toString())),Ze.get(e)):"0"}(e.root):e[t]}`)).toString()}function nt(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:et;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:l}=function(e){const t=tt(e);let n=Ge.get(t);if(!n){const r=new Map;let a;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ge.set(t,n)}return n}(n),i=l.get(e)||[];return l.has(e)||l.set(e,i),i.push(t),o.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(l.delete(e),o.unobserve(e)),0===l.size&&(o.disconnect(),Ge.delete(a))}}var rt=class extends r.Component{constructor(e){super(e),Ke(this,"node",null),Ke(this,"_unobserveCb",null),Ke(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),Ke(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:o}=this.props;this._unobserveCb=nt(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:a,root:o,rootMargin:l,onChange:i,skip:s,trackVisibility:u,delay:c,initialInView:f,fallbackInView:d,...p}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...p},e)}};function at(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:o,triggerOnce:l,skip:i,initialInView:s,fallbackInView:u,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var f;const[d,p]=r.useState(null),m=r.useRef(),[h,g]=r.useState({inView:!!s,entry:void 0});m.current=c,r.useEffect((()=>{if(i||!d)return;let r;return r=nt(d,((e,t)=>{g({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&l&&r&&(r(),r=void 0)}),{root:o,rootMargin:a,threshold:e,trackVisibility:n,delay:t},u),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,d,o,a,l,i,n,u,t]);const y=null==(f=h.entry)?void 0:f.target,v=r.useRef();d||!y||l||i||v.current===y||(v.current=y,g({inView:!!s,entry:void 0}));const b=[p,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var ot=n(163);He`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,He`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,He`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,He`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,He`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,He`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,He`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,He`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,He`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,He`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,He`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,He`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,He`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const lt=He`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,it=He`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,st=He`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ut=He`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ct=He`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ft=He`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dt=He`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pt=He`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mt=He`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ht=He`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gt=He`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yt=He`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vt=He`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function bt(e,t){return n=>n?e():t()}function wt(e){return bt(e,(()=>null))}function kt(e){return wt((()=>({opacity:0})))(e)}const xt=e=>{const{cascade:t=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:l=0,keyframes:i=ft,triggerOnce:s=!1,className:u,style:c,childClassName:f,childStyle:d,children:p,onVisibilityChange:m}=e,h=(0,r.useMemo)((()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:a=ft,iterationCount:o=1}=e;return We`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:o})),[o,i]);return void 0==p?null:"string"===typeof(g=p)||"number"===typeof g||"boolean"===typeof g?Be(_t,{...e,animationStyles:h,children:String(p)}):(0,ot.isFragment)(p)?Be(Et,{...e,animationStyles:h}):Be(Ve,{children:r.Children.map(p,((i,p)=>{if(!(0,r.isValidElement)(i))return null;const g=a+(t?p*o*n:0);switch(i.type){case"ol":case"ul":return Be(Xe,{children:t=>{let{cx:n}=t;return Be(i.type,{...i.props,className:n(u,i.props.className),style:Object.assign({},c,i.props.style),children:Be(xt,{...e,children:i.props.children})})}});case"li":return Be(rt,{threshold:l,triggerOnce:s,onChange:m,children:e=>{let{inView:t,ref:n}=e;return Be(Xe,{children:e=>{let{cx:r}=e;return Be(i.type,{...i.props,ref:n,className:r(f,i.props.className),css:wt((()=>h))(t),style:Object.assign({},d,i.props.style,kt(!t),{animationDelay:g+"ms"})})}})}});default:return Be(rt,{threshold:l,triggerOnce:s,onChange:m,children:e=>{let{inView:t,ref:n}=e;return Be("div",{ref:n,className:u,css:wt((()=>h))(t),style:Object.assign({},c,kt(!t),{animationDelay:g+"ms"}),children:Be(Xe,{children:e=>{let{cx:t}=e;return Be(i.type,{...i.props,className:t(f,i.props.className),style:Object.assign({},d,i.props.style)})}})})}})}}))});var g},St={display:"inline-block",whiteSpace:"pre"},_t=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:l=0,triggerOnce:i=!1,className:s,style:u,children:c,onVisibilityChange:f}=e,{ref:d,inView:p}=at({triggerOnce:i,threshold:l,onChange:f});return bt((()=>Be("div",{ref:d,className:s,style:Object.assign({},u,St),children:c.split("").map(((e,n)=>Be("span",{css:wt((()=>t))(p),style:{animationDelay:a+n*o*r+"ms"},children:e},n)))})),(()=>Be(Et,{...e,children:c})))(n)},Et=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:o,children:l,onVisibilityChange:i}=e,{ref:s,inView:u}=at({triggerOnce:r,threshold:n,onChange:i});return Be("div",{ref:s,className:a,css:wt((()=>t))(u),style:Object.assign({},o,kt(!u)),children:l})};const Ct=He`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Nt=He`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt=He`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jt=He`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt=He`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Tt=He`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Ot=He`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Lt=He`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Rt=He`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Mt=He`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const It=e=>{const{direction:t,reverse:n=!1,...a}=e,o=(0,r.useMemo)((()=>function(e,t){switch(t){case"down":return e?Ot:Nt;case"left":return e?Lt:Pt;case"right":return e?Rt:jt;case"up":return e?Mt:zt;default:return e?Tt:Ct}}(n,t)),[t,n]);return Be(xt,{keyframes:o,...a})},Ft=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Dt=He`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,At=He`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,$t=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ut=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Vt=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Bt=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Wt=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ht=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Qt=He`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Yt=He`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Xt=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,qt=He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Kt=e=>{const{big:t=!1,direction:n,reverse:a=!1,...o}=e,l=(0,r.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?Dt:it;case"bottom-right":return t?At:st;case"down":return e?t?Ut:ct:t?$t:ut;case"left":return e?t?Bt:dt:t?Vt:ft;case"right":return e?t?Ht:mt:t?Wt:pt;case"top-left":return t?Qt:ht;case"top-right":return t?Yt:gt;case"up":return e?t?qt:vt:t?Xt:yt;default:return t?Ft:lt}}(t,a,n)),[t,n,a]);return Be(xt,{keyframes:l,...o})};He`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,He`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,He`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,He`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,He`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;He`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;const Gt=He`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Zt=(He`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,He`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,e=>Be(xt,{keyframes:Gt,...e}));He`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,He`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,He`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,He`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,He`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,He`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,He`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,He`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,He`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,He`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;He`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,He`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,He`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,He`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,He`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,He`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,He`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,He`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;He`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,He`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,He`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,He`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,He`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,He`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,He`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,He`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,He`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,He`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Jt=()=>{const[e]=(0,p.d1)({words:["FRONT END WEB DEVELOPER"],delaySpeed:3e3,loop:!0,deleteSpeed:50});return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"hero-container hero-background",children:(0,i.jsxs)("div",{className:"hero-text-container",children:[(0,i.jsx)(It,{children:(0,i.jsx)("h1",{children:"ANKIT SINGH"})}),(0,i.jsx)(Zt,{children:(0,i.jsx)("p",{children:e})})]})})})},en=n.p+"static/media/who_i_am.e2c802c8578ebf759d29.webp",tn=n.p+"static/media/myskils.6e0798860c79bb50ea43.webp",nn=n.p+"static/media/myapproach.5d3618792efd1734a34a.jpg",rn=n.p+"static/media/Front-End.4fd9e1295d8ee7070670.webp",an=n.p+"static/media/continue.07cc867ae8b88fa30f43.webp",on=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"about_main_container",children:[(0,i.jsx)("h1",{children:(0,i.jsx)(It,{children:"ABOUT US"})}),(0,i.jsxs)("div",{className:"About_container",children:[(0,i.jsx)("div",{className:"About_container_img1",children:(0,i.jsx)("img",{src:en,alt:"Who I Am"})}),(0,i.jsxs)("div",{className:"About_Details_box",children:[(0,i.jsx)("h2",{className:"",children:(0,i.jsx)(Zt,{children:"Who I Am"})}),(0,i.jsx)(Kt,{children:(0,i.jsx)("p",{children:"I am a dedicated front-end developer with a passion for crafting intuitive and visually engaging web experiences. With a strong foundation in modern web technologies, I bring ideas to life on the screen, ensuring each project is not just functional but also user-friendly. My approach blends creativity with technical expertise to build websites that leave a lasting impression."})})]}),(0,i.jsx)("div",{className:"about_show_mobileOnly",children:(0,i.jsx)("img",{src:en,alt:"Who I Am"})})]}),(0,i.jsxs)("div",{className:"About_container",children:[(0,i.jsxs)("div",{className:"About_Details_box",children:[(0,i.jsx)("h2",{className:"About_container-heading",children:(0,i.jsx)(It,{children:"My Skills"})}),(0,i.jsx)(Kt,{children:(0,i.jsx)("p",{children:"I specialize in HTML, CSS, JavaScript, React.js, Next.js, TailwindCSS, and Redux Toolkit, which allow me to create responsive, dynamic, and scalable web applications. My expertise in these technologies ensures that I can handle everything from building sleek user interfaces to optimizing performance and managing state efficiently. Whether it's coding from scratch or enhancing existing websites, I take pride in delivering quality code and seamless experiences."})})]}),(0,i.jsx)("div",{className:"About_container_img1",children:(0,i.jsx)("img",{src:tn,alt:"My Skills"})})]}),(0,i.jsxs)("div",{className:"About_container",children:[(0,i.jsx)("div",{className:"About_container_img1",children:(0,i.jsx)("img",{src:nn,alt:"My Approach"})}),(0,i.jsxs)("div",{className:"About_Details_box",children:[(0,i.jsx)("h2",{className:"About_container-heading",children:(0,i.jsx)(It,{children:"My Approach"})}),(0,i.jsx)(Kt,{children:(0,i.jsx)("p",{children:"My approach to development revolves around clean, maintainable code and a user-first mindset. I start by understanding the project\u2019s requirements and target audience before diving into the design and development process. I believe that a website should not only look good but also function smoothly across all devices. Every line of code I write is meant to ensure speed, accessibility, and responsiveness, making sure the final product exceeds expectations."})})]}),(0,i.jsx)("div",{className:"about_show_mobileOnly",children:(0,i.jsx)("img",{src:nn,alt:"My Approach"})})]}),(0,i.jsxs)("div",{className:"About_container",children:[(0,i.jsxs)("div",{className:"About_Details_box",children:[(0,i.jsx)("h2",{className:"About_container-heading",children:(0,i.jsx)(It,{children:"Why I Love Front-End Development"})}),(0,i.jsx)(Kt,{children:(0,i.jsx)("p",{children:"Front-end development allows me to merge my love for design and coding. I enjoy taking static designs and transforming them into fully interactive web experiences that engage users. The ever-evolving nature of front-end technologies keeps me motivated to keep learning, and I embrace the challenges that come with building complex, performance-driven websites."})})]}),(0,i.jsx)("div",{className:"About_container_img1",children:(0,i.jsx)("img",{src:rn,alt:"Front-End Development"})})]}),(0,i.jsxs)("div",{className:"About_container",children:[(0,i.jsx)("div",{className:"About_container_img1",children:(0,i.jsx)("img",{src:an,alt:"Continuous Learning"})}),(0,i.jsxs)("div",{className:"About_Details_box",children:[(0,i.jsx)("h2",{className:"About_container-heading",children:(0,i.jsx)(It,{children:"Continuous Learning"})}),(0,i.jsx)(Kt,{children:(0,i.jsx)("p",{children:"In the fast-paced world of web development, staying updated is key. I am constantly learning and experimenting with new tools and frameworks to sharpen my skills and stay ahead of industry trends. From exploring new libraries to following the latest best practices, I am committed to continuous growth and delivering cutting-edge solutions."})})]}),(0,i.jsx)("div",{className:"about_show_mobileOnly",children:(0,i.jsx)("img",{src:an,alt:"Continuous Learning"})})]})]})}),ln=()=>(0,i.jsxs)("div",{style:{backgroundColor:"black"},children:[(0,i.jsx)(Jt,{}),(0,i.jsx)(on,{}),(0,i.jsx)(d,{})]});const sn=function(){return(0,i.jsxs)("div",{style:{backgroundColor:"black"},children:[(0,i.jsx)(s,{}),(0,i.jsx)(ln,{})]})},un=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:l}=t;n(e),r(e),a(e),o(e),l(e)}))};o.createRoot(document.getElementById("root")).render((0,i.jsx)(r.StrictMode,{children:(0,i.jsx)(sn,{})})),un()})();
//# sourceMappingURL=main.45693d41.js.map