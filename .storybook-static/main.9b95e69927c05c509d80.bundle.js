(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{126:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return dissociate}));const dissociate=key=>obj=>{const result=Object.assign(obj);return delete result[key],result}},127:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(6);var _button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(58);__webpack_require__.d(__webpack_exports__,"a",(function(){return _button_Button__WEBPACK_IMPORTED_MODULE_1__.a}))},280:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),emotion_theming_browser_esm=__webpack_require__(43);class Theme{constructor(){this.sizes={0:"0",1:"0.5rem",2:"1rem",3:"2rem",4:"4rem",5:"8rem",6:"16rem"},this.fonts={body:"system-ui, sans-serif",heading:'"Avenir Next", sans-serif',monospace:"Menlo, monospace"},this.colors={text:"#000",background:"#fff",primary:"#33e",secondary:"#faa"},this.radii={normal:10,round:2e3},this.shadows={normal:"0 0 10px rgba(0, 0, 0, 0.5)"},this.disclosures={default:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween"}},drawer:{initial:{opacity:0,x:"-100%"},animate:{opacity:1,x:0},exit:{opacity:0,y:"-100%"},transition:{type:"tween"}}},this.timings={toast:5e3}}static getInstance(){return Theme.instance||(Theme.instance=new Theme),Theme.instance}}var themes_default=Theme.getInstance(),ThemeDecorator=function(storyFn){return react_default.a.createElement(emotion_theming_browser_esm.a,{theme:themes_default},storyFn())};ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",methods:[],displayName:"ThemeDecorator"};__webpack_exports__.a=ThemeDecorator;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/themeDecorator.js"]={name:"ThemeDecorator",docgenInfo:ThemeDecorator.__docgenInfo,path:".storybook/themeDecorator.js"})},283:function(module,exports,__webpack_require__){__webpack_require__(284),__webpack_require__(396),module.exports=__webpack_require__(397)},305:function(module,exports){},397:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(177),_themeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(280);__webpack_require__(43);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(584),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.a)}.call(this,__webpack_require__(398)(module))},58:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),_box_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);const Button=props=>Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.b)(_box_Box__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({css:{color:"primary"},m:2,as:"button"},props),props.children)},584:function(module,exports,__webpack_require__){var map={"./Box.stories.tsx":585,"./Button.stories.tsx":586,"./Drawer.stories.tsx":604,"./PageProgress.stories.tsx":605,"./Progress.stories.tsx":599,"./ProgressProvider.stories.tsx":606,"./Text.stories.tsx":600,"./Toast.stories.tsx":601,"./ToastProvider.stories.tsx":607};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=584},585:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"box",(function(){return box}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_box_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);__webpack_exports__.default={component:_src_box_Box__WEBPACK_IMPORTED_MODULE_1__.a,title:"Box"};const box=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_box_Box__WEBPACK_IMPORTED_MODULE_1__.a,{p:3,bg:"secondary"},"Box")},586:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"button",(function(){return button}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(58),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(279);__webpack_exports__.default={component:_src_button_Button__WEBPACK_IMPORTED_MODULE_1__.a,title:"Button"};const button=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_button_Button__WEBPACK_IMPORTED_MODULE_1__.a,{style:{color:"primary"},p:2,bg:"secondary",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Button")},59:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Progress}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_box_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);const Progress=({value:value=100})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_box_Box__WEBPACK_IMPORTED_MODULE_1__.a,{height:"2",bg:"gray","aria-valuemin":0,"aria-valuemax":0,"aria-valuenow":value,"aria-valuetext":`${value}%`,role:"progressbar"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_box_Box__WEBPACK_IMPORTED_MODULE_1__.a,{style:{transform:`translateX(-${100-value}%)`},height:"2",width:"100%",bg:"tomato"}))},599:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"progress",(function(){return progress}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_progress_Progress__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59);__webpack_exports__.default={component:_src_progress_Progress__WEBPACK_IMPORTED_MODULE_1__.a,title:"Progress"};const progress=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_progress_Progress__WEBPACK_IMPORTED_MODULE_1__.a,{value:80},"Progress")},6:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Box}));var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(281),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_styled_system_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(124);const Box=Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.a)("div")({boxSizing:"border-box",minWidth:0},props=>Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.a)(props.style),Object(styled_system__WEBPACK_IMPORTED_MODULE_1__.c)(styled_system__WEBPACK_IMPORTED_MODULE_1__.g,styled_system__WEBPACK_IMPORTED_MODULE_1__.b,styled_system__WEBPACK_IMPORTED_MODULE_1__.d,styled_system__WEBPACK_IMPORTED_MODULE_1__.h,styled_system__WEBPACK_IMPORTED_MODULE_1__.a,styled_system__WEBPACK_IMPORTED_MODULE_1__.f,styled_system__WEBPACK_IMPORTED_MODULE_1__.e))},600:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"text",(function(){return text}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(87);__webpack_exports__.default={component:_src_text_Text__WEBPACK_IMPORTED_MODULE_1__.a,title:"Text"};const text=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_text_Text__WEBPACK_IMPORTED_MODULE_1__.a,null,"Text")},601:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toast",(function(){return toast}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_toast_Toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(88);__webpack_exports__.default={component:_src_toast_Toast__WEBPACK_IMPORTED_MODULE_1__.a,title:"Toast"};const toast=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_toast_Toast__WEBPACK_IMPORTED_MODULE_1__.a,{id:"toast",message:"Toast"})},602:function(module,exports,__webpack_require__){var map={"./Close":[282,0],"./Close.tsx":[282,0]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function webpackAsyncContextKeys(){return Object.keys(map)},webpackAsyncContext.id=602,module.exports=webpackAsyncContext},604:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Box=__webpack_require__(6),react_dom=__webpack_require__(120);const Portal=({target:target=document.body,key:key,children:children})=>Object(react_dom.createPortal)(children,target,key);var Disclosure=__webpack_require__(69),emotion_theming_browser_esm=__webpack_require__(43),index_browser=__webpack_require__(125),index_browser_default=__webpack_require__.n(index_browser);const Drawer=({open:open=!0,key:key=index_browser_default()(),children:children})=>{const theme=Object(emotion_theming_browser_esm.b)();return react_default.a.createElement(Portal,null,react_default.a.createElement(Disclosure.a,{animation:theme.disclosures.drawer},open&&react_default.a.createElement(Box.a,{width:"6",boxShadow:"normal",key:key},children)))};var Button=__webpack_require__(58);__webpack_require__.d(__webpack_exports__,"drawer",(function(){return drawer}));__webpack_exports__.default={component:Drawer,title:"Drawer"};const drawer=()=>{const[open,setOpen]=Object(react.useState)(!1);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Button.a,{onClick:()=>setOpen(!open)},"toggle"),react_default.a.createElement(Drawer,{open:open},"drawer"))}},605:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Progress=__webpack_require__(59),Box=__webpack_require__(6);const PageProgress=({})=>{const[progress,setProgress]=Object(react.useState)(0),source=document.scrollingElement;let timer;const updateProgress=()=>{timer&&cancelAnimationFrame(timer),timer=requestAnimationFrame(()=>setProgress(Math.floor(source.scrollTop/(source.scrollHeight-source.clientHeight)*100)))};return Object(react.useEffect)(()=>(addEventListener("scroll",updateProgress),addEventListener("resize",updateProgress),()=>{removeEventListener("scroll",updateProgress),removeEventListener("resize",updateProgress),clearTimeout(timer)}),[]),react_default.a.createElement(Box.a,{position:"fixed",top:"0",left:"0",right:"0"},react_default.a.createElement(Progress.a,{value:progress}))};__webpack_require__.d(__webpack_exports__,"pageProgress",(function(){return pageProgress}));__webpack_exports__.default={component:PageProgress,title:"PageProgress"};const pageProgress=()=>react_default.a.createElement("div",{style:{height:2e3}},react_default.a.createElement(PageProgress,null))},606:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Progress=__webpack_require__(59),Disclosure=__webpack_require__(69),helpers=__webpack_require__(126);const ProgressContext=Object(react.createContext)(null),ProgressProvider=({children:children})=>{const[operations,setOperations]=Object(react.useState)({}),[active,setActive]=Object(react.useState)(!1);return Object(react.useEffect)(()=>setActive(Object.keys(operations).length>0),[operations]),react_default.a.createElement(ProgressContext.Provider,{value:{active:active,start:id=>setOperations(currentOperations=>Object.assign(Object.assign({},currentOperations),{[id]:!0})),stop:id=>setOperations(currentOperations=>Object.assign({},Object(helpers.a)(id)(currentOperations)))}},react_default.a.createElement(ProgressIndicator,null),children)},ProgressIndicator=()=>{const{active:active}=Object(react.useContext)(ProgressContext);return react_default.a.createElement(Disclosure.a,null,active&&react_default.a.createElement(Progress.a,null))};var src=__webpack_require__(127);__webpack_require__.d(__webpack_exports__,"progressProvider",(function(){return progressProvider}));__webpack_exports__.default={component:ProgressProvider,title:"ProgressProvider"};const progressProvider=()=>react_default.a.createElement(ProgressProvider,null,react_default.a.createElement(Controls,null)),Controls=()=>{const{active:active,start:start,stop:stop}=Object(react.useContext)(ProgressContext);return react_default.a.createElement(src.a,{onClick:()=>active?stop("storybook"):start("storybook")},active?"stop":"start")}},607:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Toast=__webpack_require__(88),helpers=__webpack_require__(126),Disclosure=__webpack_require__(69);const ToastContext=Object(react.createContext)(null),ToastProvider=({children:children})=>{const[toasts,setToasts]=Object(react.useState)({});return react_default.a.createElement(ToastContext.Provider,{value:{toasts:toasts,add:({message:message},id)=>setToasts(currentToasts=>Object.assign(Object.assign({},currentToasts),{[id]:{message:message}})),remove:id=>setToasts(currentToasts=>Object.assign({},Object(helpers.a)(id)(currentToasts)))}},react_default.a.createElement(Toaster,null),children)},Toaster=()=>{const{toasts:toasts,remove:remove}=Object(react.useContext)(ToastContext);return react_default.a.createElement(Disclosure.a,null,Object.entries(toasts).map(([id,{message:message}])=>react_default.a.createElement(Toast.a,{key:id,id:id,message:message,remove:()=>remove(id)})))};var src=__webpack_require__(127),index_browser=__webpack_require__(125),index_browser_default=__webpack_require__.n(index_browser);__webpack_require__.d(__webpack_exports__,"toastProvider",(function(){return toastProvider}));__webpack_exports__.default={component:ToastProvider,title:"ToastProvider"};const toastProvider=()=>react_default.a.createElement(ToastProvider,null,react_default.a.createElement(Controls,null)),Controls=()=>{const{add:add}=Object(react.useContext)(ToastContext);return react_default.a.createElement(src.a,{onClick:()=>add({message:"Toast!"},index_browser_default()())},"Toast")}},69:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Disclosure}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(178),emotion_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43);const Disclosure=({animation:animation,key:key,children:children})=>{const{disclosures:disclosures}=Object(emotion_theming__WEBPACK_IMPORTED_MODULE_2__.b)();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(child,index)=>{var _a,_b;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.b.div,Object.assign({key:`${key}-${_b=null===(_a=child)||void 0===_a?void 0:_a.key,null!=_b?_b:index}`},Object.assign({},null!=animation?animation:disclosures.default)),child)}))}},87:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Text}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_box_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);const Text=({children:children})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_box_Box__WEBPACK_IMPORTED_MODULE_1__.a,{as:"p"},children)},88:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Box=__webpack_require__(6),Text=__webpack_require__(87);const Icon_Icon=({icon:icon})=>{const Icon=Object(react.lazy)(()=>__webpack_require__(602)(`./${icon}`));return react_default.a.createElement(Box.a,{width:"3",height:"3"},react_default.a.createElement(react.Suspense,{fallback:react_default.a.createElement(react_default.a.Fragment,null)},react_default.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},react_default.a.createElement(Icon,null))))},Close=({onClick:onClick})=>react_default.a.createElement(Box.a,{onClick:onClick,as:"button"},react_default.a.createElement(Icon_Icon,{icon:"Close"}));var emotion_theming_browser_esm=__webpack_require__(43);__webpack_require__.d(__webpack_exports__,"a",(function(){return Toast}));const Toast=({message:message,children:children,id:id,remove:remove})=>{const{timings:timings}=Object(emotion_theming_browser_esm.b)();return Object(react.useEffect)(()=>{const removeTimer=setTimeout(()=>remove(id),timings.toast);return()=>clearTimeout(removeTimer)},[]),react_default.a.createElement(Box.a,{borderRadius:"normal",backgroundColor:"tomato"},react_default.a.createElement(Text.a,null,message),children,remove&&id&&react_default.a.createElement(Close,{onClick:()=>remove(id)}))}}},[[283,2,3]]]);
//# sourceMappingURL=main.9b95e69927c05c509d80.bundle.js.map