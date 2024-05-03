import{c as oo,r as w,o as ao,a as I,b as n,d as m,e as Q,f as fe,i as to,g as no,h as ke,u as ro,j as Se,k as lo,l as k,t as io,m as so,w as me,n as oe,p as co,q as be,s as uo,v as ae,x as f,V as ho,y as vo,z as fo,A as mo,T as bo,B as K,C as X,D as ge,E as go,F as po,G as wo,H as _,I as $,J as D,N as xo,K as yo,L as Ce,M as pe,O as ko,P as So,Q as Co,_ as Ro}from"./index-2e4b119e.js";import{N as zo}from"./Modal-1877bd65.js";const To={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},Vo=t=>{const l="rgba(0, 0, 0, .85)",x="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:c,primaryColor:s,baseColor:d,cardColor:S,modalColor:b,popoverColor:C,borderRadius:z,fontSize:F,opacityDisabled:H}=t;return Object.assign(Object.assign({},To),{fontSize:F,markFontSize:F,railColor:c,railColorHover:c,fillColor:s,fillColorHover:s,opacityDisabled:H,handleColor:"#FFF",dotColor:S,dotColorModal:b,dotColorPopover:C,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:l,indicatorBoxShadow:x,indicatorTextColor:d,indicatorBorderRadius:z,dotBorder:`2px solid ${c}`,dotBorderActive:`2px solid ${s}`,dotBoxShadow:""})},Bo={name:"Slider",common:oo,self:Vo},Mo=Bo;function we(t){return window.TouchEvent&&t instanceof window.TouchEvent}function xe(){const t=w(new Map),l=x=>c=>{t.value.set(x,c)};return ao(()=>{t.value.clear()}),[t,l]}const Do=I([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[m("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),m("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),m("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[Q("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),m("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),m("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),m("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),I("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[Q("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),m("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[Q("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[Q("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[I("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),I("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[I("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[m("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[m("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[fe()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[m("top",`
 margin-bottom: 12px;
 `),m("right",`
 margin-left: 12px;
 `),m("bottom",`
 margin-top: 12px;
 `),m("left",`
 margin-right: 12px;
 `),fe()]),to(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),no(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Io=0,_o=Object.assign(Object.assign({},Se.props),{to:ae.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ye=ke({name:"Slider",props:_o,setup(t){const{mergedClsPrefixRef:l,namespaceRef:x,inlineThemeDisabled:c}=ro(t),s=Se("Slider","-slider",Do,Mo,t,l),d=w(null),[S,b]=xe(),[C,z]=xe(),F=w(new Set),H=lo(t),{mergedDisabledRef:N}=H,te=k(()=>{const{step:e}=t;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let a=0;return o.includes(".")&&(a=o.length-o.indexOf(".")-1),a}),Y=w(t.defaultValue),Re=io(t,"value"),W=so(Re,Y),g=k(()=>{const{value:e}=W;return(t.range?e:[e]).map(ce)}),ne=k(()=>g.value.length>2),ze=k(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),re=k(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),p=w(-1),le=w(-1),T=w(-1),V=w(!1),A=w(!1),q=k(()=>{const{vertical:e,reverse:o}=t;return e?o?"top":"bottom":o?"right":"left"}),Te=k(()=>{if(ne.value)return;const e=g.value,o=E(t.range?Math.min(...e):t.min),a=E(t.range?Math.max(...e):e[0]),{value:r}=q;return t.vertical?{[r]:`${o}%`,height:`${a-o}%`}:{[r]:`${o}%`,width:`${a-o}%`}}),Ve=k(()=>{const e=[],{marks:o}=t;if(o){const a=g.value.slice();a.sort((h,v)=>h-v);const{value:r}=q,{value:i}=ne,{range:u}=t,y=i?()=>!1:h=>u?h>=a[0]&&h<=a[a.length-1]:h<=a[0];for(const h of Object.keys(o)){const v=Number(h);e.push({active:y(v),label:o[h],style:{[r]:`${E(v)}%`}})}}return e});function Be(e,o){const a=E(e),{value:r}=q;return{[r]:`${a}%`,zIndex:o===p.value?1:0}}function ie(e){return t.showTooltip||T.value===e||p.value===e&&V.value}function Me(e){return V.value?!(p.value===e&&le.value===e):!0}function De(e){var o;~e&&(p.value=e,(o=S.value.get(e))===null||o===void 0||o.focus())}function Ie(){C.value.forEach((e,o)=>{ie(o)&&e.syncPosition()})}function se(e){const{"onUpdate:value":o,onUpdateValue:a}=t,{nTriggerFormInput:r,nTriggerFormChange:i}=H;a&&ge(a,e),o&&ge(o,e),Y.value=e,r(),i()}function de(e){const{range:o}=t;if(o){if(Array.isArray(e)){const{value:a}=g;e.join()!==a.join()&&se(e)}}else Array.isArray(e)||g.value[0]!==e&&se(e)}function G(e,o){if(t.range){const a=g.value.slice();a.splice(o,1,e),de(a)}else de(e)}function J(e,o,a){const r=a!==void 0;a||(a=e-o>0?1:-1);const i=re.value||[],{step:u}=t;if(u==="mark"){const v=P(e,i.concat(o),r?a:void 0);return v?v.value:o}if(u<=0)return o;const{value:y}=te;let h;if(r){const v=Number((o/u).toFixed(y)),R=Math.floor(v),Z=v>R?R:R-1,ee=v<R?R:R+1;h=P(o,[Number((Z*u).toFixed(y)),Number((ee*u).toFixed(y)),...i],a)}else{const v=$e(e);h=P(e,[...i,v])}return h?ce(h.value):o}function ce(e){return Math.min(t.max,Math.max(t.min,e))}function E(e){const{max:o,min:a}=t;return(e-a)/(o-a)*100}function _e(e){const{max:o,min:a}=t;return a+(o-a)*e}function $e(e){const{step:o,min:a}=t;if(Number(o)<=0||o==="mark")return e;const r=Math.round((e-a)/o)*o+a;return Number(r.toFixed(te.value))}function P(e,o=re.value,a){if(!(o!=null&&o.length))return null;let r=null,i=-1;for(;++i<o.length;){const u=o[i]-e,y=Math.abs(u);(a===void 0||u*a>0)&&(r===null||y<r.distance)&&(r={index:i,distance:y,value:o[i]})}return r}function ue(e){const o=d.value;if(!o)return;const a=we(e)?e.touches[0]:e,r=o.getBoundingClientRect();let i;return t.vertical?i=(r.bottom-a.clientY)/r.height:i=(a.clientX-r.left)/r.width,t.reverse&&(i=1-i),_e(i)}function Fe(e){if(N.value||!t.keyboard)return;const{vertical:o,reverse:a}=t;switch(e.key){case"ArrowUp":e.preventDefault(),U(o&&a?-1:1);break;case"ArrowRight":e.preventDefault(),U(!o&&a?-1:1);break;case"ArrowDown":e.preventDefault(),U(o&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),U(!o&&a?1:-1);break}}function U(e){const o=p.value;if(o===-1)return;const{step:a}=t,r=g.value[o],i=Number(a)<=0||a==="mark"?r:r+a*e;G(J(i,r,e>0?1:-1),o)}function He(e){var o,a;if(N.value||!we(e)&&e.button!==Io)return;const r=ue(e);if(r===void 0)return;const i=g.value.slice(),u=t.range?(a=(o=P(r,i))===null||o===void 0?void 0:o.index)!==null&&a!==void 0?a:-1:0;u!==-1&&(e.preventDefault(),De(u),Ne(),G(J(r,g.value[u]),u))}function Ne(){V.value||(V.value=!0,K("touchend",document,L),K("mouseup",document,L),K("touchmove",document,O),K("mousemove",document,O))}function j(){V.value&&(V.value=!1,X("touchend",document,L),X("mouseup",document,L),X("touchmove",document,O),X("mousemove",document,O))}function O(e){const{value:o}=p;if(!V.value||o===-1){j();return}const a=ue(e);G(J(a,g.value[o]),o)}function L(){j()}function Ae(e){p.value=e,N.value||(T.value=e)}function Ee(e){p.value===e&&(p.value=-1,j()),T.value===e&&(T.value=-1)}function Pe(e){T.value=e}function Ue(e){T.value===e&&(T.value=-1)}me(p,(e,o)=>void oe(()=>le.value=o)),me(W,()=>{if(t.marks){if(A.value)return;A.value=!0,oe(()=>{A.value=!1})}oe(Ie)}),co(()=>{j()});const he=k(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:a,fillColor:r,fillColorHover:i,handleColor:u,opacityDisabled:y,dotColor:h,dotColorModal:v,handleBoxShadow:R,handleBoxShadowHover:Z,handleBoxShadowActive:ee,handleBoxShadowFocus:je,dotBorder:Oe,dotBoxShadow:Le,railHeight:Qe,railWidthVertical:Ke,handleSize:Xe,dotHeight:Ye,dotWidth:We,dotBorderRadius:qe,fontSize:Ge,dotBorderActive:Je,dotColorPopover:Ze},common:{cubicBezierEaseInOut:eo}}=s.value;return{"--n-bezier":eo,"--n-dot-border":Oe,"--n-dot-border-active":Je,"--n-dot-border-radius":qe,"--n-dot-box-shadow":Le,"--n-dot-color":h,"--n-dot-color-modal":v,"--n-dot-color-popover":Ze,"--n-dot-height":Ye,"--n-dot-width":We,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":Ge,"--n-handle-box-shadow":R,"--n-handle-box-shadow-active":ee,"--n-handle-box-shadow-focus":je,"--n-handle-box-shadow-hover":Z,"--n-handle-color":u,"--n-handle-size":Xe,"--n-opacity-disabled":y,"--n-rail-color":o,"--n-rail-color-hover":a,"--n-rail-height":Qe,"--n-rail-width-vertical":Ke,"--n-mark-font-size":e}}),B=c?be("slider",void 0,he,t):void 0,ve=k(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:a,indicatorTextColor:r,indicatorBorderRadius:i}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":a,"--n-indicator-color":o,"--n-indicator-text-color":r}}),M=c?be("slider-indicator",void 0,ve,t):void 0;return{mergedClsPrefix:l,namespace:x,uncontrolledValue:Y,mergedValue:W,mergedDisabled:N,mergedPlacement:ze,isMounted:uo(),adjustedTo:ae(t),dotTransitionDisabled:A,markInfos:Ve,isShowTooltip:ie,shouldKeepTooltipTransition:Me,handleRailRef:d,setHandleRefs:b,setFollowerRefs:z,fillStyle:Te,getHandleStyle:Be,activeIndex:p,arrifiedValues:g,followerEnabledIndexSet:F,handleRailMouseDown:He,handleHandleFocus:Ae,handleHandleBlur:Ee,handleHandleMouseEnter:Pe,handleHandleMouseLeave:Ue,handleRailKeyDown:Fe,indicatorCssVars:c?void 0:ve,indicatorThemeClass:M==null?void 0:M.themeClass,indicatorOnRender:M==null?void 0:M.onRender,cssVars:c?void 0:he,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){var t;const{mergedClsPrefix:l,themeClass:x,formatTooltip:c}=this;return(t=this.onRender)===null||t===void 0||t.call(this),f("div",{class:[`${l}-slider`,x,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},f("div",{class:`${l}-slider-rail`},f("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?f("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(s=>f("div",{key:s.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:s.active}],style:s.style}))):null,f("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((s,d)=>{const S=this.isShowTooltip(d);return f(ho,null,{default:()=>[f(vo,null,{default:()=>f("div",{ref:this.setHandleRefs(d),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(s,d),onFocus:()=>{this.handleHandleFocus(d)},onBlur:()=>{this.handleHandleBlur(d)},onMouseenter:()=>{this.handleHandleMouseEnter(d)},onMouseleave:()=>{this.handleHandleMouseLeave(d)}},fo(this.$slots.thumb,()=>[f("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&f(mo,{ref:this.setFollowerRefs(d),show:S,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===ae.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>f(bo,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var b;return S?((b=this.indicatorOnRender)===null||b===void 0||b.call(this),f("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof c=="function"?c(s):s)):null}})})]})})),this.marks?f("div",{class:`${l}-slider-marks`},this.markInfos.map(s=>f("div",{key:s.label,class:`${l}-slider-mark`,style:s.style},s.label))):null))}}),$o=t=>(So("data-v-7463008f"),t=t(),Co(),t),Fo=$o(()=>Ce("div",{class:"quality-tip"},'"ios"用户如果保存不了，请调整下面的参数',-1)),Ho=ke({__name:"ImageQualityDialog",props:{imageSize:{default:10},imageQuality:{default:10}},emits:["update:show","submit"],setup(t,{emit:l}){const x=t,c=w(0),s=w(0);go(()=>{c.value=x.imageSize,s.value=x.imageQuality});async function d(){l("submit",{size:c.value,quality:s.value}),l("update:show",!1)}function S(b){l("update:show",b)}return(b,C)=>(po(),wo(D(zo),ko(b.$attrs,{onUpdateShow:S,preset:"dialog",title:"图片质量"}),{action:_(()=>[$(D(xo),{type:"primary",onClick:d},{default:_(()=>[yo("确定")]),_:1})]),default:_(()=>[Fo,Ce("div",null,[$(D(pe),{label:"图片大小"},{default:_(()=>[$(D(ye),{value:c.value,"onUpdate:value":C[0]||(C[0]=z=>c.value=z),min:0,max:10},null,8,["value"])]),_:1}),$(D(pe),{label:"图片质量"},{default:_(()=>[$(D(ye),{value:s.value,"onUpdate:value":C[1]||(C[1]=z=>s.value=z),min:0,max:10},null,8,["value"])]),_:1})])]),_:1},16))}});const Eo=Ro(Ho,[["__scopeId","data-v-7463008f"]]);export{Eo as default};
