import{d as J,m as Z,a5 as G,C as M,O as T,a6 as A,a7 as Q,a8 as S,i as nn}from"./entry.f940a57c.js";const ln=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,en=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,on=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function tn(n,e){if(n!=="__proto__"&&!(n==="constructor"&&e&&typeof e=="object"&&"prototype"in e))return e}function rn(n,e={}){if(typeof n!="string")return n;const o=n.toLowerCase().trim();if(o==="true")return!0;if(o==="false")return!1;if(o==="null")return null;if(o==="nan")return Number.NaN;if(o==="infinity")return Number.POSITIVE_INFINITY;if(o!=="undefined"){if(!on.test(n)){if(e.strict)throw new SyntaxError("Invalid JSON");return n}try{return ln.test(n)||en.test(n)?JSON.parse(n,tn):JSON.parse(n)}catch(t){if(e.strict)throw t;return n}}}class k{constructor(e,o,t){this.property=e,this.normal=o,t&&(this.space=t)}}k.prototype.property={};k.prototype.normal={};k.prototype.space=null;function U(n,e){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new k(o,t,e)}function P(n){return n.toLowerCase()}class m{constructor(e,o){this.property=e,this.attribute=o}}m.prototype.space=null;m.prototype.boolean=!1;m.prototype.booleanish=!1;m.prototype.overloadedBoolean=!1;m.prototype.number=!1;m.prototype.commaSeparated=!1;m.prototype.spaceSeparated=!1;m.prototype.commaOrSpaceSeparated=!1;m.prototype.mustUseProperty=!1;m.prototype.defined=!1;let an=0;const u=v(),g=v(),I=v(),l=v(),p=v(),b=v(),h=v();function v(){return 2**++an}const O=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:g,commaOrSpaceSeparated:h,commaSeparated:b,number:l,overloadedBoolean:I,spaceSeparated:p},Symbol.toStringTag,{value:"Module"})),w=Object.keys(O);class L extends m{constructor(e,o,t,r){let a=-1;if(super(e,o),R(this,"space",r),typeof t=="number")for(;++a<w.length;){const i=w[a];R(this,w[a],(t&O[i])===O[i])}}}L.prototype.defined=!0;function R(n,e,o){o&&(n[e]=o)}const un={}.hasOwnProperty;function x(n){const e={},o={};let t;for(t in n.properties)if(un.call(n.properties,t)){const r=n.properties[t],a=new L(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,o[P(t)]=t,o[P(a.attribute)]=t}return new k(e,o,n.space)}const z=x({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),B=x({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function _(n,e){return e in n?n[e]:e}function F(n,e){return _(n,e.toLowerCase())}const j=x({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:F,properties:{xmlns:null,xmlnsXLink:null}}),N=x({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:g,ariaAutoComplete:null,ariaBusy:g,ariaChecked:g,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:p,ariaCurrent:null,ariaDescribedBy:p,ariaDetails:null,ariaDisabled:g,ariaDropEffect:p,ariaErrorMessage:null,ariaExpanded:g,ariaFlowTo:p,ariaGrabbed:g,ariaHasPopup:null,ariaHidden:g,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:p,ariaLevel:l,ariaLive:null,ariaModal:g,ariaMultiLine:g,ariaMultiSelectable:g,ariaOrientation:null,ariaOwns:p,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:g,ariaReadOnly:g,ariaRelevant:null,ariaRequired:g,ariaRoleDescription:p,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:g,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),sn=x({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:F,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:b,acceptCharset:p,accessKey:p,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:p,autoFocus:u,autoPlay:u,capture:u,charSet:null,checked:u,cite:null,className:p,cols:l,colSpan:null,content:null,contentEditable:g,controls:u,controlsList:p,coords:l|b,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:I,draggable:g,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:p,height:l,hidden:u,high:l,href:null,hrefLang:null,htmlFor:p,httpEquiv:p,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:p,itemRef:p,itemScope:u,itemType:p,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:l,pattern:null,ping:p,placeholder:null,playsInline:u,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:p,required:u,reversed:u,rows:l,rowSpan:l,sandbox:p,scope:null,scoped:u,seamless:u,selected:u,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:g,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:g,width:l,wrap:null,align:null,aLink:null,archive:p,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:g,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:l,security:null,unselectable:null}}),cn=x({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:_,properties:{about:h,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:p,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:b,g2:b,glyphName:b,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:h,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:p,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:h,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:h,rev:h,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:h,requiredFeatures:h,requiredFonts:h,requiredFormats:h,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:h,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:h,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:h,to:null,transform:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),pn=/^data[-\w.:]+$/i,E=/-[a-z]/g,dn=/[A-Z]/g;function gn(n,e){const o=P(e);let t=e,r=m;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&pn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(E,hn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!E.test(a)){let i=a.replace(dn,fn);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}r=L}return new r(t,e)}function fn(n){return"-"+n.toLowerCase()}function hn(n){return n.charAt(1).toUpperCase()}const mn=U([B,z,j,N,sn],"html");U([B,z,j,N,cn],"svg");const H=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],D="default",V=/^@|^v-on:/,q=/^:|^v-bind:/,W=/^v-model/,yn=["select","textarea","input"],Tn=J({name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},async setup(n){var r,a,i;const{content:{tags:e={}}}=Z().public,o=G().isEnabled();let t=((r=n.value)==null?void 0:r.body)||n.value;return n.excerpt&&((a=n.value)!=null&&a.excerpt)&&(t=n.value.excerpt),t&&await Ln(t,{tags:{...e,...M(((i=n.value)==null?void 0:i._components)||{}),...n.components}}),{debug:o,tags:e}},render(n){var y;const{tags:e,tag:o,value:t,excerpt:r,components:a,debug:i}=n;if(!t)return null;let s=(t==null?void 0:t.body)||t;r&&(t!=null&&t.excerpt)&&(s=t.excerpt);const c={...t,tags:{...e,...M((t==null?void 0:t._components)||{}),...a}};let d=c.component||o;return typeof c.component=="object"&&(d=c.component.name),d=X(d),T(d,{...(y=c.component)==null?void 0:y.props,...this.$attrs,"data-content-id":i?t._id:void 0},$(s,T,c,c))}});function vn(n,e,o,t={}){var c;if(n.type==="text")return e(S,n.value);if(n.tag==="script")return e(S,K(n));const r=n.tag,a=typeof((c=n.props)==null?void 0:c.__ignoreMap)>"u"&&o.tags[r]||r;if(n.tag==="binding")return bn(n,e,o,t);const i=X(a);typeof i=="object"&&(i.tag=r);const s=xn(n,o);return e(i,s,$(n,e,o,{...t,...s}))}function K(n){var e,o;return n.type==="text"?n.value:(e=n.children)!=null&&e.length?`<${n.tag}>${((o=n.children)==null?void 0:o.map(K).join(""))||""}</${n.tag}>`:`<${n.tag}>`}function bn(n,e,o,t={}){var c;const r={...t,$route:()=>nn(),$document:o,$doc:o},a=/\.|\[(\d+)\]/,s=((c=n.props)==null?void 0:c.value.trim().split(a).filter(Boolean)).reduce((d,y)=>y in d?typeof d[y]=="function"?d[y]():d[y]:{},r);return e(S,s)}function $(n,e,o,t){const a=(n.children||[]).reduce((s,c)=>{if(!On(c))return s[D].push(c),s;const d=Pn(c);return s[d]=s[d]||[],s[d].push(...c.children||[]),s},{[D]:[]});return Object.entries(a).reduce((s,[c,d])=>(d.length&&(s[c]=()=>{const y=d.map(f=>vn(f,e,o,t));return Dn(y)}),s),{})}function xn(n,e){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(W.test(a)&&!yn.includes(o))return Sn(a,i,r,e);if(a==="v-bind")return kn(a,i,r,e);if(V.test(a))return Cn(a,i,r,e);if(q.test(a))return wn(a,i,r,e);const{attribute:s}=gn(mn,a);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function Sn(n,e,o,t){const r=f=>+f,a=f=>f.trim(),i=f=>f,s=n.replace(W,"").split(".").filter(f=>f).reduce((f,Y)=>(f[Y]=!0,f),{}),c="value",d=s.lazy?"change":"input",y=s.number?r:s.trim?a:i;return o[c]=C(e,t),o.on=o.on||{},o.on[d]=f=>t[e]=y(f),o}function kn(n,e,o,t){const r=C(e,t);return o=Object.assign(o,r),o}function Cn(n,e,o,t){return n=n.replace(V,""),o.on=o.on||{},o.on[n]=()=>C(e,t),o}function wn(n,e,o,t){return n=n.replace(q,""),o[n]=C(e,t),o}const X=n=>{if(!H.includes(n)&&!(n!=null&&n.render)){const e=A(Q(n),!1);if(typeof e=="object")return e}return n};function C(n,e){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof o>"u"?rn(n):o}function Pn(n){let e="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){e=o.split(/[:#]/,2)[1];break}return e||D}function On(n){return n.tag==="template"}function Dn(n){const e=[];for(const o of n){const t=e[e.length-1];o.type===S&&(t==null?void 0:t.type)===S?t.children=t.children+o.children:e.push(o)}return e}async function Ln(n,e){const o=Array.from(new Set(t(n,e)));await Promise.all(o.map(async r=>{if(r!=null&&r.render)return;const a=A(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){var c;if(r.type==="text"||r.tag==="binding")return[];const i=typeof((c=r.props)==null?void 0:c.__ignoreMap)>"u"&&a.tags[r.tag]||r.tag,s=[];r.type!=="root"&&!H.includes(i)&&s.push(i);for(const d of r.children||[])s.push(...t(d,a));return s}}export{Tn as default};
