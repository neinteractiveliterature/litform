"use strict";(self.webpackChunk_neinteractiveliterature_litform=self.webpackChunk_neinteractiveliterature_litform||[]).push([[852],{"./.yarn/__virtual__/@storybook-components-virtual-dc21461387/0/cache/@storybook-components-npm-6.4.22-4910759d22-c558f9148a.zip/node_modules/@storybook/components/dist/esm/tooltip/WithTooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithToolTipState:()=>WithToolTipState,WithTooltip:()=>WithToolTipState,WithTooltipPure:()=>WithTooltipPure});__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/web.dom-collections.for-each.js");var react=__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),esm=__webpack_require__("./.yarn/__virtual__/@storybook-theming-virtual-c3b227d3dc/0/cache/@storybook-theming-npm-6.4.22-2db7c3ecdb-bb95f7fa40.zip/node_modules/@storybook/theming/dist/esm/index.js"),global_window=__webpack_require__("./.yarn/cache/global-npm-4.4.0-888ee8033d-9c057557c8.zip/node_modules/global/window.js"),window_default=__webpack_require__.n(global_window),objectWithoutPropertiesLoose=__webpack_require__("./.yarn/cache/@babel-runtime-npm-7.14.0-fba2a32266-257dc25943.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./.yarn/cache/@babel-runtime-npm-7.14.0-fba2a32266-257dc25943.zip/node_modules/@babel/runtime/helpers/esm/extends.js"),inheritsLoose=__webpack_require__("./.yarn/cache/@babel-runtime-npm-7.14.0-fba2a32266-257dc25943.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),react_dom=__webpack_require__("./.yarn/__virtual__/react-dom-virtual-9dfef75ec4/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js"),ManagerReferenceNodeContext=react.createContext(),ManagerReferenceNodeSetterContext=react.createContext();function Manager(_ref){var children=_ref.children,_React$useState=react.useState(null),referenceNode=_React$useState[0],setReferenceNode=_React$useState[1],hasUnmounted=react.useRef(!1);react.useEffect((function(){return function(){hasUnmounted.current=!0}}),[]);var handleSetReferenceNode=react.useCallback((function(node){hasUnmounted.current||setReferenceNode(node)}),[]);return react.createElement(ManagerReferenceNodeContext.Provider,{value:referenceNode},react.createElement(ManagerReferenceNodeSetterContext.Provider,{value:handleSetReferenceNode},children))}var utils=__webpack_require__("./.yarn/__virtual__/react-popper-virtual-c82d36e7ec/0/cache/react-popper-npm-2.2.5-6e86e4bf1e-915fcf08e1.zip/node_modules/react-popper/lib/esm/utils.js"),usePopper=__webpack_require__("./.yarn/__virtual__/react-popper-virtual-c82d36e7ec/0/cache/react-popper-npm-2.2.5-6e86e4bf1e-915fcf08e1.zip/node_modules/react-popper/lib/esm/usePopper.js"),NOOP=function NOOP(){},NOOP_PROMISE=function NOOP_PROMISE(){return Promise.resolve(null)},EMPTY_MODIFIERS=[];function Popper(_ref){var _ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,_ref$strategy=_ref.strategy,strategy=void 0===_ref$strategy?"absolute":_ref$strategy,_ref$modifiers=_ref.modifiers,modifiers=void 0===_ref$modifiers?EMPTY_MODIFIERS:_ref$modifiers,referenceElement=_ref.referenceElement,onFirstUpdate=_ref.onFirstUpdate,innerRef=_ref.innerRef,children=_ref.children,referenceNode=react.useContext(ManagerReferenceNodeContext),_React$useState=react.useState(null),popperElement=_React$useState[0],setPopperElement=_React$useState[1],_React$useState2=react.useState(null),arrowElement=_React$useState2[0],setArrowElement=_React$useState2[1];react.useEffect((function(){(0,utils.k$)(innerRef,popperElement)}),[innerRef,popperElement]);var options=react.useMemo((function(){return{placement,strategy,onFirstUpdate,modifiers:[].concat(modifiers,[{name:"arrow",enabled:null!=arrowElement,options:{element:arrowElement}}])}}),[placement,strategy,onFirstUpdate,modifiers,arrowElement]),_usePopper=(0,usePopper.D)(referenceElement||referenceNode,popperElement,options),state=_usePopper.state,styles=_usePopper.styles,forceUpdate=_usePopper.forceUpdate,update=_usePopper.update,childrenProps=react.useMemo((function(){return{ref:setPopperElement,style:styles.popper,placement:state?state.placement:placement,hasPopperEscaped:state&&state.modifiersData.hide?state.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:state&&state.modifiersData.hide?state.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:styles.arrow,ref:setArrowElement},forceUpdate:forceUpdate||NOOP,update:update||NOOP_PROMISE}}),[setPopperElement,setArrowElement,placement,state,styles,update,forceUpdate]);return(0,utils.$p)(children)(childrenProps)}var warning=__webpack_require__("./.yarn/cache/warning-npm-4.0.3-291e921d6d-4f2cb6a957.zip/node_modules/warning/warning.js"),warning_default=__webpack_require__.n(warning);function Reference(_ref){var children=_ref.children,innerRef=_ref.innerRef,setReferenceNode=react.useContext(ManagerReferenceNodeSetterContext),refHandler=react.useCallback((function(node){(0,utils.k$)(innerRef,node),(0,utils.DL)(setReferenceNode,node)}),[innerRef,setReferenceNode]);return react.useEffect((function(){return function(){return(0,utils.k$)(innerRef,null)}})),react.useEffect((function(){warning_default()(Boolean(setReferenceNode),"`Reference` should not be used outside of a `Manager` component.")}),[setReferenceNode]),(0,utils.$p)(children)({ref:refHandler})}var TooltipContext=react.createContext({}),callAll=function callAll(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return fns.forEach((function(fn){return fn&&fn.apply(void 0,args)}))}},canUseDOM=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},setRef=function setRef(ref,node){if("function"==typeof ref)return ref(node);null!=ref&&(ref.current=node)},Tooltip=function(_Component){function Tooltip(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).observer=void 0,_this.tooltipRef=void 0,_this.handleOutsideClick=function(event){if(_this.tooltipRef&&!_this.tooltipRef.contains(event.target)){var parentOutsideClickHandler=_this.context.parentOutsideClickHandler,_this$props=_this.props,hideTooltip=_this$props.hideTooltip;(0,_this$props.clearScheduled)(),hideTooltip(),parentOutsideClickHandler&&parentOutsideClickHandler(event)}},_this.handleOutsideRightClick=function(event){if(_this.tooltipRef&&!_this.tooltipRef.contains(event.target)){var parentOutsideRightClickHandler=_this.context.parentOutsideRightClickHandler,_this$props2=_this.props,hideTooltip=_this$props2.hideTooltip;(0,_this$props2.clearScheduled)(),hideTooltip(),parentOutsideRightClickHandler&&parentOutsideRightClickHandler(event)}},_this.addOutsideClickHandler=function(){document.body.addEventListener("touchend",_this.handleOutsideClick),document.body.addEventListener("click",_this.handleOutsideClick)},_this.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",_this.handleOutsideClick),document.body.removeEventListener("click",_this.handleOutsideClick)},_this.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",_this.handleOutsideRightClick)},_this.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",_this.handleOutsideRightClick)},_this.getTooltipRef=function(node){_this.tooltipRef=node,setRef(_this.props.innerRef,node)},_this.getArrowProps=function(props){return void 0===props&&(props={}),(0,esm_extends.Z)({},props,{style:(0,esm_extends.Z)({},props.style,_this.props.arrowProps.style)})},_this.getTooltipProps=function(props){return void 0===props&&(props={}),(0,esm_extends.Z)({},props,_this.isTriggeredBy("hover")&&{onMouseEnter:callAll(_this.props.clearScheduled,props.onMouseEnter),onMouseLeave:callAll(_this.props.hideTooltip,props.onMouseLeave)},{style:(0,esm_extends.Z)({},props.style,_this.props.style)})},_this.contextValue={isParentNoneTriggered:"none"===_this.props.trigger,addParentOutsideClickHandler:_this.addOutsideClickHandler,addParentOutsideRightClickHandler:_this.addOutsideRightClickHandler,parentOutsideClickHandler:_this.handleOutsideClick,parentOutsideRightClickHandler:_this.handleOutsideRightClick,removeParentOutsideClickHandler:_this.removeOutsideClickHandler,removeParentOutsideRightClickHandler:_this.removeOutsideRightClickHandler},_this}(0,inheritsLoose.Z)(Tooltip,_Component);var _proto=Tooltip.prototype;return _proto.componentDidMount=function componentDidMount(){var _this2=this;if((this.observer=new MutationObserver((function(){_this2.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var _this$context=this.context,removeParentOutsideClickHandler=_this$context.removeParentOutsideClickHandler,removeParentOutsideRightClickHandler=_this$context.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),removeParentOutsideClickHandler&&removeParentOutsideClickHandler(),removeParentOutsideRightClickHandler&&removeParentOutsideRightClickHandler()}},_proto.componentDidUpdate=function componentDidUpdate(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},_proto.componentWillUnmount=function componentWillUnmount(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var _this$context2=this.context,isParentNoneTriggered=_this$context2.isParentNoneTriggered,addParentOutsideClickHandler=_this$context2.addParentOutsideClickHandler,addParentOutsideRightClickHandler=_this$context2.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!isParentNoneTriggered&&addParentOutsideClickHandler&&addParentOutsideClickHandler(),!isParentNoneTriggered&&addParentOutsideRightClickHandler&&addParentOutsideRightClickHandler()}},_proto.render=function render(){var _this$props3=this.props,arrowProps=_this$props3.arrowProps,placement=_this$props3.placement,tooltip=_this$props3.tooltip;return react.createElement(TooltipContext.Provider,{value:this.contextValue},tooltip({arrowRef:arrowProps.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement,tooltipRef:this.getTooltipRef}))},_proto.isTriggeredBy=function isTriggeredBy(event){var trigger=this.props.trigger;return trigger===event||Array.isArray(trigger)&&trigger.includes(event)},Tooltip}(react.Component);Tooltip.contextType=TooltipContext;var TooltipTrigger=function(_Component){function TooltipTrigger(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).state={tooltipShown:_this.props.defaultTooltipShown},_this.hideTimeout=void 0,_this.showTimeout=void 0,_this.popperOffset=void 0,_this.setTooltipState=function(state){var cb=function cb(){return _this.props.onVisibilityChange(state.tooltipShown)};_this.isControlled()?cb():_this.setState(state,cb)},_this.clearScheduled=function(){clearTimeout(_this.hideTimeout),clearTimeout(_this.showTimeout)},_this.showTooltip=function(_ref){var pageX=_ref.pageX,pageY=_ref.pageY;_this.clearScheduled();var state={tooltipShown:!0};_this.props.followCursor&&(state=(0,esm_extends.Z)({},state,{pageX,pageY})),_this.showTimeout=window.setTimeout((function(){return _this.setTooltipState(state)}),_this.props.delayShow)},_this.hideTooltip=function(){_this.clearScheduled(),_this.hideTimeout=window.setTimeout((function(){return _this.setTooltipState({tooltipShown:!1})}),_this.props.delayHide)},_this.toggleTooltip=function(_ref2){var pageX=_ref2.pageX,pageY=_ref2.pageY,action=_this.getState()?"hideTooltip":"showTooltip";_this[action]({pageX,pageY})},_this.clickToggle=function(event){event.preventDefault();var pageX=event.pageX,pageY=event.pageY,action=_this.props.followCursor?"showTooltip":"toggleTooltip";_this[action]({pageX,pageY})},_this.contextMenuToggle=function(event){event.preventDefault();var pageX=event.pageX,pageY=event.pageY,action=_this.props.followCursor?"showTooltip":"toggleTooltip";_this[action]({pageX,pageY})},_this.getTriggerProps=function(props){return void 0===props&&(props={}),(0,esm_extends.Z)({},props,_this.isTriggeredBy("click")&&{onClick:callAll(_this.clickToggle,props.onClick),onTouchEnd:callAll(_this.clickToggle,props.onTouchEnd)},_this.isTriggeredBy("right-click")&&{onContextMenu:callAll(_this.contextMenuToggle,props.onContextMenu)},_this.isTriggeredBy("hover")&&(0,esm_extends.Z)({onMouseEnter:callAll(_this.showTooltip,props.onMouseEnter),onMouseLeave:callAll(_this.hideTooltip,props.onMouseLeave)},_this.props.followCursor&&{onMouseMove:callAll(_this.showTooltip,props.onMouseMove)}),_this.isTriggeredBy("focus")&&{onFocus:callAll(_this.showTooltip,props.onFocus),onBlur:callAll(_this.hideTooltip,props.onBlur)})},_this}(0,inheritsLoose.Z)(TooltipTrigger,_Component);var _proto=TooltipTrigger.prototype;return _proto.componentWillUnmount=function componentWillUnmount(){this.clearScheduled()},_proto.render=function render(){var _this2=this,_this$props=this.props,children=_this$props.children,tooltip=_this$props.tooltip,placement=_this$props.placement,trigger=_this$props.trigger,getTriggerRef=_this$props.getTriggerRef,modifiers=_this$props.modifiers,closeOnReferenceHidden=_this$props.closeOnReferenceHidden,usePortal=_this$props.usePortal,portalContainer=_this$props.portalContainer,followCursor=_this$props.followCursor,getTooltipRef=_this$props.getTooltipRef,mutationObserverOptions=_this$props.mutationObserverOptions,restProps=(0,objectWithoutPropertiesLoose.Z)(_this$props,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),popper=react.createElement(Popper,(0,esm_extends.Z)({innerRef:getTooltipRef,placement,modifiers:[{name:"followCursor",enabled:followCursor,phase:"main",fn:function fn(data){_this2.popperOffset=data.state.rects.popper}}].concat(modifiers)},restProps),(function(_ref3){var ref=_ref3.ref,style=_ref3.style,placement=_ref3.placement,arrowProps=_ref3.arrowProps,isReferenceHidden=_ref3.isReferenceHidden,update=_ref3.update;if(followCursor&&_this2.popperOffset){var _this2$state=_this2.state,pageX=_this2$state.pageX,pageY=_this2$state.pageY,_this2$popperOffset=_this2.popperOffset,width=_this2$popperOffset.width,height=_this2$popperOffset.height,x=pageX+width>window.pageXOffset+document.body.offsetWidth?pageX-width:pageX,y=pageY+height>window.pageYOffset+document.body.offsetHeight?pageY-height:pageY;style.transform="translate3d("+x+"px, "+y+"px, 0"}return react.createElement(Tooltip,(0,esm_extends.Z)({arrowProps,closeOnReferenceHidden,isReferenceHidden,placement,update,style,tooltip,trigger,mutationObserverOptions},{clearScheduled:_this2.clearScheduled,hideTooltip:_this2.hideTooltip,innerRef:ref}))}));return react.createElement(Manager,null,react.createElement(Reference,{innerRef:getTriggerRef},(function(_ref4){var ref=_ref4.ref;return children({getTriggerProps:_this2.getTriggerProps,triggerRef:ref})})),this.getState()&&(usePortal?(0,react_dom.createPortal)(popper,portalContainer):popper))},_proto.isControlled=function isControlled(){return void 0!==this.props.tooltipShown},_proto.getState=function getState(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},_proto.isTriggeredBy=function isTriggeredBy(event){var trigger=this.props.trigger;return trigger===event||Array.isArray(trigger)&&trigger.includes(event)},TooltipTrigger}(react.Component);TooltipTrigger.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function noop(){},placement:"right",portalContainer:canUseDOM()?document.body:null,trigger:"hover",usePortal:canUseDOM(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};const react_popper_tooltip=TooltipTrigger;__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./.yarn/unplugged/core-js-npm-3.12.1-6d1063bc86/node_modules/core-js/modules/es.array.concat.js");var memoizerific=__webpack_require__("./.yarn/cache/memoizerific-npm-1.11.3-3cd7adb7ec-d51bdc3ed8.zip/node_modules/memoizerific/memoizerific.js"),memoizerific_default=__webpack_require__.n(memoizerific),esm_utils=__webpack_require__("./.yarn/__virtual__/@storybook-theming-virtual-c3b227d3dc/0/cache/@storybook-theming-npm-6.4.22-2db7c3ecdb-bb95f7fa40.zip/node_modules/@storybook/theming/dist/esm/utils.js");function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _templateObject,_templateObject2,match=memoizerific_default()(1e3)((function(requests,actual,value){var fallback=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return actual.split("-")[0]===requests?value:fallback})),Arrow=esm.zo.div({position:"absolute",borderStyle:"solid"},(function(_ref){var placement=_ref.placement,x=0,y=0;switch(!0){case placement.startsWith("left")||placement.startsWith("right"):y=8;break;case placement.startsWith("top")||placement.startsWith("bottom"):x=8}return{transform:"translate3d(".concat(x,"px, ").concat(y,"px, 0px)")}}),(function(_ref2){var theme=_ref2.theme,color=_ref2.color,placement=_ref2.placement;return{bottom:"".concat(match("top",placement,-8,"auto"),"px"),top:"".concat(match("bottom",placement,-8,"auto"),"px"),right:"".concat(match("left",placement,-8,"auto"),"px"),left:"".concat(match("right",placement,-8,"auto"),"px"),borderBottomWidth:"".concat(match("top",placement,"0",8),"px"),borderTopWidth:"".concat(match("bottom",placement,"0",8),"px"),borderRightWidth:"".concat(match("left",placement,"0",8),"px"),borderLeftWidth:"".concat(match("right",placement,"0",8),"px"),borderTopColor:match("top",placement,theme.color[color]||color||"light"===theme.base?(0,esm_utils.tG)(theme.background.app):(0,esm_utils.r5)(theme.background.app),"transparent"),borderBottomColor:match("bottom",placement,theme.color[color]||color||"light"===theme.base?(0,esm_utils.tG)(theme.background.app):(0,esm_utils.r5)(theme.background.app),"transparent"),borderLeftColor:match("left",placement,theme.color[color]||color||"light"===theme.base?(0,esm_utils.tG)(theme.background.app):(0,esm_utils.r5)(theme.background.app),"transparent"),borderRightColor:match("right",placement,theme.color[color]||color||"light"===theme.base?(0,esm_utils.tG)(theme.background.app):(0,esm_utils.r5)(theme.background.app),"transparent")}})),Wrapper=esm.zo.div((function(_ref3){return{display:_ref3.hidden?"none":"inline-block",zIndex:2147483647}}),(function(_ref4){var theme=_ref4.theme,color=_ref4.color;return _ref4.hasChrome?{background:theme.color[color]||color||"light"===theme.base?(0,esm_utils.tG)(theme.background.app):(0,esm_utils.r5)(theme.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*theme.appBorderRadius,fontSize:theme.typography.size.s1}:{}})),Tooltip_Tooltip=function Tooltip(_ref5){var placement=_ref5.placement,hasChrome=_ref5.hasChrome,children=_ref5.children,arrowProps=_ref5.arrowProps,tooltipRef=_ref5.tooltipRef,arrowRef=_ref5.arrowRef,color=_ref5.color,props=_objectWithoutProperties(_ref5,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return react.createElement(Wrapper,_extends({hasChrome,placement,ref:tooltipRef},props,{color}),hasChrome&&react.createElement(Arrow,_extends({placement,ref:arrowRef},arrowProps,{color})),children)};function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function WithTooltip_extends(){return(WithTooltip_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function WithTooltip_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function WithTooltip_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}Tooltip_Tooltip.displayName="Tooltip",Tooltip_Tooltip.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var WithTooltip_document=window_default().document,TargetContainer=esm.zo.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(props){return"hover"===props.mode?"default":"pointer"})),TargetSvgContainer=esm.zo.g(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  cursor: ",";\n"])),(function(props){return"hover"===props.mode?"default":"pointer"})),WithTooltipPure=function WithTooltipPure(_ref){var svg=_ref.svg,trigger=_ref.trigger,placement=(_ref.closeOnClick,_ref.placement),modifiers=_ref.modifiers,hasChrome=_ref.hasChrome,_tooltip=_ref.tooltip,children=_ref.children,tooltipShown=_ref.tooltipShown,onVisibilityChange=_ref.onVisibilityChange,props=WithTooltip_objectWithoutProperties(_ref,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),Container=svg?TargetSvgContainer:TargetContainer;return react.createElement(react_popper_tooltip,{placement,trigger,modifiers,tooltipShown,onVisibilityChange,tooltip:function tooltip(_ref2){var getTooltipProps=_ref2.getTooltipProps,getArrowProps=_ref2.getArrowProps,tooltipRef=_ref2.tooltipRef,arrowRef=_ref2.arrowRef,tooltipPlacement=_ref2.placement;return react.createElement(Tooltip_Tooltip,WithTooltip_extends({hasChrome,placement:tooltipPlacement,tooltipRef,arrowRef,arrowProps:getArrowProps()},getTooltipProps()),"function"==typeof _tooltip?_tooltip({onHide:function onHide(){return onVisibilityChange(!1)}}):_tooltip)}},(function(_ref3){var getTriggerProps=_ref3.getTriggerProps,triggerRef=_ref3.triggerRef;return react.createElement(Container,WithTooltip_extends({ref:triggerRef},getTriggerProps(),props),children)}))};WithTooltipPure.displayName="WithTooltipPure",WithTooltipPure.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var WithToolTipState=function WithToolTipState(_ref4){var startOpen=_ref4.startOpen,onChange=_ref4.onVisibilityChange,rest=WithTooltip_objectWithoutProperties(_ref4,["startOpen","onVisibilityChange"]),_useState2=_slicedToArray((0,react.useState)(startOpen||!1),2),tooltipShown=_useState2[0],setTooltipShown=_useState2[1],onVisibilityChange=(0,react.useCallback)((function(visibility){onChange&&!1===onChange(visibility)||setTooltipShown(visibility)}),[onChange]);return(0,react.useEffect)((function(){var hide=function hide(){return onVisibilityChange(!1)};WithTooltip_document.addEventListener("keydown",hide,!1);var iframes=Array.from(WithTooltip_document.getElementsByTagName("iframe")),unbinders=[];return iframes.forEach((function(iframe){var bind=function bind(){try{iframe.contentWindow.document&&(iframe.contentWindow.document.addEventListener("click",hide),unbinders.push((function(){try{iframe.contentWindow.document.removeEventListener("click",hide)}catch(e){}})))}catch(e){}};bind(),iframe.addEventListener("load",bind),unbinders.push((function(){iframe.removeEventListener("load",bind)}))})),function(){WithTooltip_document.removeEventListener("keydown",hide),unbinders.forEach((function(unbind){unbind()}))}})),react.createElement(WithTooltipPure,WithTooltip_extends({},rest,{tooltipShown,onVisibilityChange}))};WithToolTipState.displayName="WithToolTipState"},"./.yarn/cache/warning-npm-4.0.3-291e921d6d-4f2cb6a957.zip/node_modules/warning/warning.js":module=>{var warning=function(){};module.exports=warning}}]);