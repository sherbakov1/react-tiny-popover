!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e){t.exports=require("react")},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Constants={POPOVER_CONTAINER_CLASS_NAME:"react-tiny-popover-container",DEFAULT_PADDING:6,DEFAULT_WINDOW_PADDING:6,FADE_TRANSITION:.35,DEFAULT_ARROW_COLOR:"black",DEFAULT_POSITIONS:["top","left","right","bottom"],EMPTY_CLIENT_RECT:{top:0,left:0,bottom:0,height:0,right:0,width:0}},e.arrayUnique=function(t){return t.filter(function(t,e,o){return o.indexOf(t)===e})}},function(t,e,o){t.exports=o(3)},function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),p=o(4),s=o(1),d=o(5);e.ArrowContainer=d.ArrowContainer;var a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.target=null,e.targetRect=null,e.targetPositionIntervalHandler=null,e.popoverDiv=null,e.positionOrder=null,e.willUnmount=!1,e.willMount=!1,e.onResize=function(t){e.renderPopover()},e.onClick=function(t){var o=e.props,n=o.onClickOutside,i=o.isOpen;e.willUnmount||e.willMount||e.popoverDiv.contains(t.target)||e.target.contains(t.target)||!n||!i||n(t)},e}return i(e,t),e.prototype.componentDidMount=function(){var t=this;window.setTimeout(function(){return t.willMount=!1});var e=this.props,o=e.position,n=e.isOpen;this.target=p.findDOMNode(this),this.positionOrder=this.getPositionPriorityOrder(o),this.updatePopover(n)},e.prototype.componentDidUpdate=function(t){var e=t.isOpen,o=t.position,n=t.content,i=this.props,r=i.isOpen,p=i.content,s=i.position;this.positionOrder=this.getPositionPriorityOrder(this.props.position),e===r&&n===p&&o===s||this.updatePopover(r)},e.prototype.componentWillMount=function(){this.willUnmount=!1,this.willMount=!0},e.prototype.componentWillUnmount=function(){this.willUnmount=!0,this.removePopover()},e.prototype.render=function(){return this.props.children},e.prototype.updatePopover=function(t){if(t){if(!this.popoverDiv||!this.popoverDiv.parentNode){var e=this.props.transitionDuration;this.popoverDiv=this.createContainer(),this.popoverDiv.style.opacity="0",this.popoverDiv.style.transition="opacity "+(e||s.Constants.FADE_TRANSITION)+"s",window.document.body.appendChild(this.popoverDiv),window.addEventListener("resize",this.onResize),window.addEventListener("click",this.onClick)}this.renderPopover()}else this.popoverDiv&&this.popoverDiv.parentNode&&this.removePopover()},e.prototype.renderPopover=function(t){var e=this;void 0===t&&(t=0),t>=this.positionOrder.length?this.removePopover():this.renderWithPosition({position:this.positionOrder[t],targetRect:this.target.getBoundingClientRect()},function(o,n){var i,r=e.props,p=r.disableReposition,s=r.contentLocation;if(o&&!p&&"object"!=typeof s)e.renderPopover(t+1);else{var d=e.props,a=d.contentLocation,l=d.align,u=e.getNudgedPopoverPosition(n),f=u.top,c=u.left,v=n.top,h=n.left,g=e.positionOrder[t],w=p?{top:v,left:h}:{top:f,left:c},y=w.top,P=w.left;if(a){var O=e.target.getBoundingClientRect(),b=e.popoverDiv.firstChild.getBoundingClientRect();y=(i="function"==typeof a?a({targetRect:O,popoverRect:b,position:g,align:l,nudgedLeft:c,nudgedTop:f}):a).top,P=i.left,e.popoverDiv.style.left=P.toFixed()+"px",e.popoverDiv.style.top=y.toFixed()+"px"}else{var m=[y+window.pageYOffset,P+window.pageXOffset],C=m[0],D=m[1];e.popoverDiv.style.left=D.toFixed()+"px",e.popoverDiv.style.top=C.toFixed()+"px"}e.popoverDiv.style.width=null,e.popoverDiv.style.height=null,e.renderWithPosition({position:g,nudgedTop:f-n.top,nudgedLeft:c-n.left,targetRect:e.target.getBoundingClientRect(),popoverRect:e.popoverDiv.firstChild.getBoundingClientRect()},function(){e.startTargetPositionListener(10),"1"!==e.popoverDiv.style.opacity&&(e.popoverDiv.style.opacity="1")})}})},e.prototype.startTargetPositionListener=function(t){var e=this;null===this.targetPositionIntervalHandler&&(this.targetPositionIntervalHandler=window.setInterval(function(){var t=e.target.getBoundingClientRect();e.targetPositionHasChanged(e.targetRect,t)&&e.renderPopover(),e.targetRect=t},t))},e.prototype.renderWithPosition=function(t,e){var o,n=this,i=t.position,r=t.nudgedLeft,d=void 0===r?0:r,a=t.nudgedTop,l=void 0===a?0:a,u=t.targetRect,f=void 0===u?s.Constants.EMPTY_CLIENT_RECT:u,c=t.popoverRect,v=void 0===c?s.Constants.EMPTY_CLIENT_RECT:c,h=this.props,g=h.windowBorderPadding,w=h.content,y=h.align;p.unstable_renderSubtreeIntoContainer(this,(o={position:i,nudgedLeft:d,nudgedTop:l,targetRect:f,popoverRect:v,align:y},"function"==typeof w?w(o):w),this.popoverDiv,function(){var t=n.target.getBoundingClientRect(),o=n.popoverDiv.firstChild.getBoundingClientRect(),r=n.getLocationForPosition(i,t,o),p=r.top,s=r.left;e("top"===i&&p<g||"left"===i&&s<g||"right"===i&&s+o.width>window.innerWidth-g||"bottom"===i&&p+o.height>window.innerHeight-g,{width:o.width,height:o.height,top:p,left:s})})},e.prototype.getNudgedPopoverPosition=function(t){var e=t.top,o=t.left,n=t.width,i=t.height,r=this.props.windowBorderPadding;return{top:e=(e=e<r?r:e)+i>window.innerHeight-r?window.innerHeight-r-i:e,left:o=(o=o<r?r:o)+n>window.innerWidth-r?window.innerWidth-r-n:o}},e.prototype.removePopover=function(){var t=this;if(this.popoverDiv){var e=this.props.transitionDuration;this.popoverDiv.style.opacity="0";var o=function(){!t.willUnmount&&t.props.isOpen&&t.popoverDiv.parentNode||(window.clearInterval(t.targetPositionIntervalHandler),window.removeEventListener("resize",t.onResize),window.removeEventListener("click",t.onClick),t.targetPositionIntervalHandler=null,t.popoverDiv.parentNode&&(t.popoverDiv.parentNode.removeChild(t.popoverDiv),p.unmountComponentAtNode(t.popoverDiv)))};this.willUnmount?o():window.setTimeout(o,1e3*(e||s.Constants.FADE_TRANSITION))}},e.prototype.getPositionPriorityOrder=function(t){if(t&&"string"!=typeof t){if(s.Constants.DEFAULT_POSITIONS.every(function(e){return void 0!==t.find(function(t){return t===e})}))return s.arrayUnique(t);var e=s.Constants.DEFAULT_POSITIONS.filter(function(e){return void 0===t.find(function(t){return t===e})});return s.arrayUnique(t.concat(e))}if(t&&"string"==typeof t){e=s.Constants.DEFAULT_POSITIONS.filter(function(e){return e!==t});return s.arrayUnique([t].concat(e))}},e.prototype.createContainer=function(){var t=this.props,e=t.containerStyle,o=t.containerClassName,n=window.document.createElement("div");return n.style.overflow="hidden",e&&Object.keys(e).forEach(function(t){return n.style[t]=e[t]}),n.className=o,n.style.position="absolute",n.style.top="0",n.style.left="0",n},e.prototype.getLocationForPosition=function(t,e,o){var n,i,r=this.props,p=r.padding,s=r.align,d=e.left+e.width/2,a=e.top+e.height/2;switch(t){case"top":n=e.top-o.height-p,i=d-o.width/2,"start"===s&&(i=e.left),"end"===s&&(i=e.right-o.width);break;case"left":n=a-o.height/2,i=e.left-p-o.width,"start"===s&&(n=e.top),"end"===s&&(n=e.bottom-o.height);break;case"bottom":n=e.bottom+p,i=d-o.width/2,"start"===s&&(i=e.left),"end"===s&&(i=e.right-o.width);break;case"right":n=a-o.height/2,i=e.right+p,"start"===s&&(n=e.top),"end"===s&&(n=e.bottom-o.height)}return{top:n,left:i}},e.prototype.targetPositionHasChanged=function(t,e){return null===t||t.left!==e.left||t.top!==e.top||t.width!==e.width||t.height!==e.height},e.defaultProps={padding:s.Constants.DEFAULT_PADDING,windowBorderPadding:s.Constants.DEFAULT_WINDOW_PADDING,position:["top","right","left","bottom"],align:"center",containerClassName:s.Constants.POPOVER_CONTAINER_CLASS_NAME},e}(r.Component);e.default=a},function(t,e){t.exports=require("react-dom")},function(t,e,o){"use strict";var n=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),r=o(1);e.ArrowContainer=function(t){var e=t.position,o=t.children,p=t.style,s=t.arrowColor,d=void 0===s?r.Constants.DEFAULT_ARROW_COLOR:s,a=t.arrowSize,l=void 0===a?10:a,u=t.arrowStyle,f=t.popoverRect,c=t.targetRect;return i.createElement("div",{style:n({paddingLeft:"right"===e?l:0,paddingTop:"bottom"===e?l:0,paddingBottom:"top"===e?l:0,paddingRight:"left"===e?l:0},p)},i.createElement("div",{style:n({position:"absolute"},function(){var t=2*l,o=c.top-f.top+c.height/2-t/2,n=c.left-f.left+c.width/2-t/2;switch(n=(n=n<0?0:n)+t>f.width?f.width-t:n,o=(o=o<0?0:o)+t>f.height?f.height-t:o,e){case"right":return{borderTop:l+"px solid transparent",borderBottom:l+"px solid transparent",borderRight:l+"px solid "+d,left:0,top:o};case"left":return{borderTop:l+"px solid transparent",borderBottom:l+"px solid transparent",borderLeft:l+"px solid "+d,right:0,top:o};case"bottom":return{borderLeft:l+"px solid transparent",borderRight:l+"px solid transparent",borderBottom:l+"px solid "+d,top:0,left:n};case"top":default:return{borderLeft:l+"px solid transparent",borderRight:l+"px solid transparent",borderTop:l+"px solid "+d,bottom:0,left:n}}}(),u)}),o)}}])});
//# sourceMappingURL=index.js.map