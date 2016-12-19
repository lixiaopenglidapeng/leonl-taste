!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.reactTextMask=r(require("react")):e.reactTextMask=r(e.React)}(this,function(e){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=r.MaskedInput=void 0;var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var i=t(6),u=n(i),s=t(5),l=n(s),p=r.MaskedInput=u.default.createClass({displayName:"MaskedInput",propTypes:{mask:i.PropTypes.oneOfType([i.PropTypes.array,i.PropTypes.func,i.PropTypes.shape({mask:i.PropTypes.oneOfType([i.PropTypes.array,i.PropTypes.func]),pipe:i.PropTypes.func})]).isRequired,guide:i.PropTypes.bool,value:i.PropTypes.oneOfType([i.PropTypes.string,i.PropTypes.number]),pipe:i.PropTypes.func,placeholderChar:i.PropTypes.string,onAccept:i.PropTypes.func,onReject:i.PropTypes.func,keepCharPositions:i.PropTypes.bool},componentDidMount:function(){var e=this.props,r=this.props.value;this.textMaskInputElement=(0,l.default)(o({inputElement:this.inputElement},e)),this.textMaskInputElement.update(r)},componentDidUpdate:function(){this.textMaskInputElement.update(this.props.value)},render:function(){var e=this,r=o({},this.props);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.onAccept,delete r.onReject,delete r.keepCharPositions,delete r.value,delete r.onChange,u.default.createElement("input",o({},r,{onInput:this.onChange,defaultValue:this.props.value,ref:function(r){return e.inputElement=r}}))},onChange:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}});r.default=p},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,s=t.previousConformedValue,l=void 0===s?i:s,p=t.placeholderChar,c=void 0===p?a.placeholderChar:p,f=t.placeholder,d=void 0===f?(0,o.convertMaskToPlaceholder)(r,c):f,h=t.currentCaretPosition,v=t.keepCharPositions,m=u===!1&&void 0!==l,y=e.length,g=l.length,C=d.length,P=r.length,b=y-g,T=b>0,k=h+(T?-b:0),O=k+Math.abs(b);if(v===!0&&!T){for(var x=i,j=k;j<O;j++)d[j]===c&&(x+=c);e=e.slice(0,k)+x+e.slice(k,y)}for(var M=e.split(i).map(function(e,r){return{char:e,isNew:r>=k&&r<O}}),V=y-1;V>=0;V--){var w=M[V].char;if(w!==c){var R=V>=k&&g===P;w===d[R?V-b:V]&&M.splice(V,1)}}var _=i,S=!1;e:for(var E=0;E<C;E++){var N=d[E];if(N===c){if(M.length>0)for(;M.length>0;){var I=M.shift(),A=I.char,q=I.isNew;if(A===c&&m!==!0){_+=c;continue e}if(r[E].test(A)){if(v===!0&&q!==!1&&l!==i&&u!==!1&&T){for(var J=M.length,D=null,L=0;L<J;L++){var W=M[L];if(W.char!==c&&W.isNew===!1)break;if(W.char===c){D=L;break}}null!==D?(_+=A,M.splice(D,1)):E--}else _+=A;continue e}S=!0}m===!1&&(_+=d.substr(E,C));break}_+=N}if(m&&T===!1){for(var U=null,z=0;z<_.length;z++)d[z]===c&&(U=z);_=null!==U?_.substr(0,U+1):i}return{conformedValue:_,meta:{someCharsRejected:S}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(3),a=t(1),i=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function i(e){for(var r=[],t=void 0;t=e.indexOf(l),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=a,r.processCaretTraps=i;var u=t(1),s=[],l="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,a=e.currentCaretPosition,i=void 0===a?0:a,u=e.conformedValue,s=e.rawValue,l=e.placeholderChar,p=e.placeholder,c=e.indexesOfPipedChars,f=void 0===c?n:c,d=e.caretTrapIndexes,h=void 0===d?n:d;if(0===i)return 0;var v=s.length,m=t.length,y=p.length,g=u.length,C=v-m,P=C>0,b=0===m,T=C>1&&!P&&!b;if(T)return i;var k=P&&(t===u||u===p),O=0;if(k?O=i-C:!function(){for(var e=u.toLowerCase(),r=s.toLowerCase(),t=r.substr(0,i).split(o),n=t.filter(function(r){return e.indexOf(r)!==-1}),a=n[n.length-1],c=f.map(function(r){return e[r]}),d=c.filter(function(e){return e===a}).length,h=n.filter(function(e){return e===a}).length,v=p.substr(0,p.indexOf(l)).split(o).filter(function(e,r){return e===a&&s[r]!==e}).length,m=v+h+d,y=0,C=0;C<g;C++){var P=e[C];if(O=C+1,P===a&&y++,y>=m)break}}(),P){for(var x=O,j=O;j<=y;j++)if(p[j]===l&&(x=j),p[j]===l||h.indexOf(j)!==-1||j===y)return x}else for(var M=O;M>=0;M--)if(p[M-1]===l||h.indexOf(M)!==-1||0===M)return M}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=e.mask,n=e.guide,o=e.pipe,l=e.placeholderChar,c=void 0===l?h.placeholderChar:l,y=e.onAccept,C=e.onReject,P=e.keepCharPositions,b=void 0!==P&&P;("undefined"==typeof t?"undefined":s(t))===g&&void 0!==t.pipe&&void 0!==t.mask&&(o=t.pipe,t=t.mask);var T={previousConformedValue:m,previousOnRejectRawValue:m},k=void 0,O=void 0;return t instanceof Array&&(k=(0,d.convertMaskToPlaceholder)(t,c)),{state:T,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.value;if(e!==T.previousConformedValue){var l=i(e),h=r.selectionStart,g=T.previousConformedValue,P=void 0;if(("undefined"==typeof t?"undefined":s(t))===v){O=t(l,{currentCaretPosition:h,previousConformedValue:g,placeholderChar:c});var x=(0,d.processCaretTraps)(O),j=x.maskWithoutCaretTraps,M=x.indexes;O=j,P=M,k=(0,d.convertMaskToPlaceholder)(O,c)}else O=t;var V={previousConformedValue:g,guide:n,placeholderChar:c,pipe:o,placeholder:k,currentCaretPosition:h,keepCharPositions:b},w=(0,f.default)(l,O,V),R=w.conformedValue,_=w.meta.someCharsRejected,S=("undefined"==typeof o?"undefined":s(o))===v,E={};S&&(E=o(R,u({rawValue:l},V)),E===!1?E={value:g,rejected:!0}:(0,d.isString)(E)&&(E={value:E}));var N=S?E.value:R,I=(0,p.default)({previousConformedValue:g,conformedValue:N,placeholder:k,rawValue:l,currentCaretPosition:h,placeholderChar:c,indexesOfPipedChars:E.indexesOfPipedChars,caretTrapIndexes:P}),A=N===k&&0===I,q=A?m:N;if(T.previousConformedValue=q,r.value!==q){r.value=q,a(r,I),("undefined"==typeof y?"undefined":s(y))===v&&q!==g&&q!==k&&(T.previousOnRejectRawValue=null,y());var J=l.length<g.length;("undefined"==typeof C?"undefined":s(C))===v&&(_||E.rejected)&&J===!1&&T.previousOnRejectRawValue!==e&&(T.previousOnRejectRawValue=e,C({conformedValue:N,pipeRejection:E.rejected,maskRejection:_}))}}}}}function a(e,r){document.activeElement===e&&e.setSelectionRange(r,r,y)}function i(e){if((0,d.isString)(e))return e;if((0,d.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var l=t(4),p=n(l),c=t(2),f=n(c),d=t(3),h=t(1),v="function",m="",y="none",g="object"},function(r,t){r.exports=e}])});