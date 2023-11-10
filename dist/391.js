"use strict";(self.webpackChunkstretchline=self.webpackChunkstretchline||[]).push([[391],{2391:(e,t,n)=>{n.r(t);var r=n(7329),a=n(2950),l=n.n(a),o=n(2181),c=n.n(o),i=n(5128),m=n(2137),s=n(6156),u=n(4699),d=n(7757),p=n.n(d),E=n(6651),f=n(6720),h=n(9226),g=n(3972),Z=n(2588),b=n(9397),x=n(2734),y=function(){return localStorage.getItem("TOKENS")},v=function(){return JSON.parse(localStorage.getItem("TOKENS"))},P=function(){return JSON.parse(localStorage.getItem("themeMode"))},w=n(7425),S=n.n(w)().create({baseURL:"http://localhost:5000/melioraa/api"}),O=function(){var e=(0,m.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(),t.config,e.abrupt("return",Promise.reject(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();S.interceptors.request.use((function(e){return function(e){var t=v();return t&&!e.headers.Authorization&&(e.headers.Authorization=t?"Bearer "+t.AccessToken:null),e}(e)}),(function(e){return Promise.reject(e)})),S.interceptors.response.use((function(e){return e}),(function(e){return O(e)}));var k=n(9186),C=n(948),j=n(1796),M=n(8543);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=(0,C.ZP)(M.ZP)((function(e){var t=e.theme;return{"label + &":{marginTop:t.spacing(3)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:"#2b2b2b"===t.palette.mode,border:"1px solid #ced4da",fontSize:16,placeholderColor:"white",padding:"10px 12px",transition:t.transitions.create(["border-color","background-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{boxShadow:"".concat((0,j.Fq)(t.palette.primary.main,.25)," 0 0 0 0.2rem"),borderColor:t.palette.primary.main}}}}));const D=function(e){var t=(0,x.Z)(),n=(0,a.useState)({email:"",password:""}),r=(0,u.Z)(n,2),o=r[0],c=r[1],i=(0,a.useState)(""),d=(0,u.Z)(i,2),y=d[0],v=d[1],P=(0,a.useState)(!1),w=(0,u.Z)(P,2),S=w[0],O=w[1],C=function(e){c((function(t){return R(R({},t),{},(0,s.Z)({},e.target.name,e.target.value))}))},j=function(){var e=(0,m.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==o.email&&""!==o.password){e.next=4;break}return v("Please fill all the fields"),e.abrupt("return");case 4:try{r={username:"test"},localStorage.setItem("userDetails",JSON.stringify(r)),n={username:"test"},localStorage.setItem("userPermissions",JSON.stringify(n)),"test",localStorage.setItem("TOKENS",JSON.stringify("test")),window.location.href="/home",O(!1)}catch(e){O(!1),v(e.response?"Invalid Username or Password":e.message)}case 5:case"end":return e.stop()}var n,r}),e)})));return function(t){return e.apply(this,arguments)}}();return l().createElement(E.ZP,{container:!0,component:"main",sx:{height:"100vh"}},l().createElement(f.ZP,null),l().createElement(E.ZP,{item:!0,xs:12,sm:6,md:6},l().createElement(h.Z,{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",style:{background:"#000"}},l().createElement(h.Z,{p:4,sx:(0,s.Z)({width:500},t.breakpoints.down("md"),{width:"100%"})},l().createElement(h.Z,{mb:3},l().createElement(g.Z,{variant:"h4",sx:{fontWeight:t.typography.fontWeightBold,color:"white"},align:"center"},"Stretchline")),l().createElement(h.Z,{my:5},l().createElement(g.Z,{variant:"h6",sx:{color:"#646A78"},align:"center"},"USER LOGIN")),l().createElement("form",{noValidate:!0,onSubmit:j},""!==y?l().createElement(Z.Z,{severity:"error"},y):"",l().createElement(h.Z,null,l().createElement(k.FormLabel,{sx:{color:"white"}}," User Name"),l().createElement(A,{placeholder:"User Name",id:"bootstrap-input",variant:"outlined",margin:"normal",fullWidth:!0,name:"email",autoFocus:!0,value:o.email,onChange:C,sx:{borderColor:"white",color:"white"}}),l().createElement("br",null),l().createElement("br",null),l().createElement(k.FormLabel,{sx:{color:"white"}}," Password"),l().createElement(A,{placeholder:"Password",variant:"outlined",margin:"normal",fullWidth:!0,name:"password",type:"password",value:o.password,onChange:C,sx:{borderColor:"white",color:"white"}})),l().createElement("br",null),l().createElement(b.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",sx:{margin:t.spacing(3,0,2),backgroundColor:"#5048e5","&:hover":{backgroundColor:"rgb(76,68,228)"}},disabled:S},"Log In"))))),l().createElement(E.ZP,{item:!0,xs:!1,sm:6,md:6,style:{background:"#20314E"}},l().createElement("div",{style:{backgroundImage:"url(/login-image.png)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%"}})))};var T=n(3808),I=n(8396),z=n(4799),B=n(326),N=n(9206),W=100,L=["#8dc63f","#034ea2","#92278f","#ec008c","#00c0f3"],U=n(8884),H=n(4486),q=n(3931),Y=n(3540),_=n(5398),G=n(5817),J=n(9346),K=n(244),Q=n(1075),V=n(5131),X=n.n(V),$=n(7720),ee=n(2624),te=n(8843),ne=n(9861),re=n(8619),ae=n(8885),le=n(9334);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ce=(0,C.ZP)(N.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100% - ".concat(W,"px)"),marginLeft:"".concat(W,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})}));const ie=function(e){var t=e.handleDrawerOpen,n=e.open,r=e.handleMobileDrawerOpen,o=e.isFullScreen,c=(e.setIsFullScreen,e.setOpen,e.appThemeMode,e.setAppThemeMode,(0,a.useState)(null)),i=(0,u.Z)(c,2),m=i[0],s=i[1],d=Boolean(m),p=(0,a.useState)(X()().format("hh:mm A")),E=(0,u.Z)(p,2),f=E[0],Z=E[1],b=(0,a.useState)(X()().format("YYYY/MM/DD")),x=(0,u.Z)(b,2),y=x[0],v=x[1];(0,a.useEffect)((function(){var e=setInterval((function(){Z(X()().format("hh:mm A")),v(X()().format("YYYY/MM/DD"))}),1e4);return function(){return clearInterval(e)}}),[]);var P=function(){s(null)};return l().createElement(l().Fragment,null,!o&&l().createElement(ce,{position:"fixed",open:n,elevation:4},l().createElement(T.Z,null,l().createElement(k.Hidden,{smDown:!0},l().createElement(z.Z,{color:"inherit","aria-label":"open drawer",onClick:t,edge:"start",sx:{mr:2}},l().createElement(B.Z,null))),l().createElement(k.Hidden,{smUp:!0},l().createElement(z.Z,{color:"inherit","aria-label":"open drawer",onClick:r,edge:"start",sx:{mr:2}},l().createElement(B.Z,null))),l().createElement(g.Z,{variant:"h6",sx:{flexGrow:1,color:"text.primary"}}),l().createElement(te.Z,{sx:{mr:-3}},l().createElement(ne.ZP,{disablePadding:!0,sx:{mr:2}},l().createElement(re.Z,null,l().createElement(le.Z,{primary:"Shift P2P : "}),l().createElement(ae.Z,{sx:{color:"#1de9b6"}},l().createElement(ee.Z,null))))),l().createElement(te.Z,{sx:{mr:-3}},l().createElement(ne.ZP,{disablePadding:!0,sx:{mr:2}},l().createElement(re.Z,null,l().createElement(le.Z,{primary:" Overall P2P : "}),l().createElement(ae.Z,{sx:{color:"#1de9b6"}},l().createElement(ee.Z,null))))),l().createElement(g.Z,{variant:"subtitle1",sx:{ml:1,mr:3}},"Run time : 18 h"),l().createElement(g.Z,{variant:"subtitle1",sx:{ml:1,mr:3}},"Stop time : 12 h"),l().createElement(K.Z,null),l().createElement(g.Z,{variant:"subtitle1",sx:{ml:1,mr:3}},f),l().createElement(Q.Z,null),l().createElement(g.Z,{variant:"subtitle1",sx:{ml:1,mr:1}},y),l().createElement(z.Z,{size:"large","aria-label":"show 5 new notifications",color:"inherit",sx:{mr:2}},l().createElement(J.Z,{badgeContent:5,color:"error"},l().createElement(G.Z,null))),l().createElement(h.Z,null,l().createElement(g.Z,{textAlign:"center",sx:{ml:1,mr:3}},"EPF"),l().createElement(g.Z,{sx:{ml:1,mr:3}},"2400")),l().createElement(z.Z,{onClick:function(e){s(e.currentTarget)},edge:"start","aria-controls":d?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0},l().createElement(U.Z,{sx:{width:32,height:32}},l().createElement(_.Z,null))," "),l().createElement(H.Z,{anchorEl:m,id:"account-menu",open:d,onClose:P,onClick:P,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"}},l().createElement(q.Z,null,"John Doe"),l().createElement(q.Z,null,"Shift A"),l().createElement($.Z,null),l().createElement(q.Z,{onClick:function(){localStorage.removeItem("TOKENS"),localStorage.removeItem("userDetails"),localStorage.removeItem("userPermissions"),window.location="/login"}},l().createElement(ae.Z,null,l().createElement(Y.Z,{fontSize:"small"})),"Logout")))))};var me=n(9058);const se=function(e){var t=e.route,n=(0,i.useLocation)().pathname,r=(0,i.useNavigate)(),a=t.id,o=(t.label,t.path),c=t.icon,m=function(){return 1===a?"#F5634A":2===a?"#2E80FE":3===a?"#6EB8F6":4===a?"#F7C560":5===a?"#8280F2":6===a?"#FE5869":7===a?"#54BF8E":8===a?"#D05AFF":"#2E80FE"};return l().createElement(re.Z,{selected:n.includes(o),onClick:function(){return r(o)},sx:{"&:hover":{backgroundColor:m()},"&.Mui-selected":{backgroundColor:m()},"&.Mui-selected:hover":{backgroundColor:m()},p:2,backgroundColor:m()}},l().createElement(ae.Z,{sx:{color:"#ffffff",svg:(0,s.Z)({width:"35px",height:"35px"},"width","100%"),width:"100%"}},c))};var ue=n(2509),de=n(181),pe=n(3508);const Ee=function(e){var t=e.route,n=(0,i.useLocation)().pathname,r=(0,a.useState)(!1),o=(0,u.Z)(r,2),c=o[0],m=o[1],s=(0,i.useNavigate)(),d=(t.id,t.label),p=t.children,E=t.path,f=t.icon,h=function(e){var t="";return e.split("/").filter((function(e){return e&&!e.startsWith(":")})).map((function(e){return t=t+"/"+e})).toString(),t};return(0,a.useEffect)((function(){p.forEach((function(e){n.includes(h(E+e.path))&&m(!0)}))}),[]),l().createElement(l().Fragment,null,l().createElement(re.Z,{onClick:function(){m(!c)}},l().createElement(ae.Z,{sx:{color:"#ffffff"}},f),l().createElement(le.Z,{primary:d,sx:{color:"#ffffff"}}),c?l().createElement(de.Z,{sx:{color:"#ffffff"}}):l().createElement(pe.Z,{sx:{color:"#ffffff"}})),l().createElement(ue.Z,{in:c,timeout:"auto",unmountOnExit:!0},l().createElement(te.Z,{component:"div",disablePadding:!0},p.map((function(e,t){if(!e.hideFromSidebar)return l().createElement(re.Z,{sx:{pl:4,"&:hover":{backgroundColor:"rgba(35,39,47,255)"},"&.Mui-selected":{backgroundColor:"rgba(80, 72, 229, 0.16)"},"&.Mui-selected:hover":{backgroundColor:"rgba(80, 72, 229, 0.16)"}},key:t,selected:n.includes(h(E+e.path)),onClick:function(){return s(E+e.path)}},l().createElement(ae.Z,{sx:{color:"#ffffff"}},e.icon),l().createElement(le.Z,{primary:e.label,sx:{color:"#ffffff"}}))})))))};var fe=n(1987);function he(e){return l().createElement(h.Z,{sx:{minWidth:100,textAlign:"center",backgroundColor:e.backcolor,p:1,borderRadius:2}},l().createElement(g.Z,{sx:{fontSize:36}},e.Text1),l().createElement(g.Z,{sx:{fontWeight:"bold"},color:"text.secondary"},e.Text2))}var ge=n(2122),Ze=n(1253),be=n(2623),xe=n(8492),ye=n(4781),ve=n(5697),Pe=n.n(ve),we=n(4666),Se=n(7645),Oe=n(5713),ke=n(594),Ce=["children","onClose"],je=(0,C.ZP)(we.Z)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function Me(e){var t=e.children,n=e.onClose,r=(0,Ze.Z)(e,Ce);return a.createElement(Se.Z,(0,ge.Z)({sx:{m:0,p:2}},r),t,n?a.createElement(z.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}}},a.createElement(ke.Z,null)):null)}function Fe(){var e=a.useState(!1),t=(0,u.Z)(e,2),n=t[0],r=t[1],l=function(){r(!1)};return a.createElement(a.Fragment,null,a.createElement(je,{onClose:l,"aria-labelledby":"customized-dialog-title",open:n,fullWidth:!0,maxWidth:"md"},a.createElement(Me,{id:"customized-dialog-title",onClose:l,variant:"h5"},"Defect image"),a.createElement(Oe.Z,null,a.createElement(k.Box,{sx:{justifyContent:"center",width:"100%",display:"flex ",p:1}},a.createElement("img",{src:"/assets/defect.jpg",style:{width:"100%"}})))),a.createElement(be.Z,{sx:{display:"flex",borderRadius:3,height:"100%",p:2}},a.createElement(k.CardActionArea,null,a.createElement(xe.Z,null,a.createElement(k.Box,{sx:{justifyContent:"space-between",display:"flex"}},a.createElement(g.Z,{gutterBottom:!0,variant:"h5",sx:{ml:-2,mt:-2}},"Original combo"),a.createElement(g.Z,{sx:{mr:-2,mt:-2}},a.createElement(b.Z,{variant:"contained",onClick:function(){r(!0)}},"Defect image")))),a.createElement(k.Box,null,a.createElement(ye.Z,{component:"img",height:"130",image:"/assets/orgin.jpg",alt:"green iguana"})))))}Me.propTypes={children:Pe().node,onClose:Pe().func.isRequired};var Re=n(9809);function Ae(){var e=a.useState(!0),t=(0,u.Z)(e,2),n=t[0],r=t[1],l=a.useState(!1),o=(0,u.Z)(l,2),c=o[0],i=o[1],m=a.useState(!0),s=(0,u.Z)(m,2),d=s[0],p=s[1];return a.createElement(be.Z,{sx:{display:"flex",borderRadius:3,height:"100%"}},a.createElement(xe.Z,null,a.createElement(g.Z,{sx:{mb:.5,p:1,mt:-1},variant:"h5"},"Production types"),a.createElement(h.Z,{sx:{p:1}},a.createElement(h.Z,{sx:{justifyContent:"space-between",display:"flex"}},a.createElement(g.Z,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0},"Mini bulk"),a.createElement(g.Z,{sx:{mt:-1}},a.createElement(Re.Z,{checked:n,onChange:function(e){r(e.target.checked)},inputProps:{"aria-label":"controlled"}}))),a.createElement(h.Z,{sx:{justifyContent:"space-between",display:"flex"}},a.createElement(g.Z,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0},"Pilot"),a.createElement(g.Z,{sx:{mt:-1}},a.createElement(Re.Z,{checked:c,onChange:function(e){i(e.target.checked)},inputProps:{"aria-label":"controlled"}}))),a.createElement(h.Z,{sx:{justifyContent:"space-between",display:"flex"}},a.createElement(g.Z,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0},"Launch orders"),a.createElement(g.Z,{sx:{mt:-1}},a.createElement(Re.Z,{checked:d,onChange:function(e){p(e.target.checked)},inputProps:{"aria-label":"controlled"}}))))))}var De=n(8377);function Te(){return a.createElement(be.Z,{sx:{display:"flex",borderRadius:3}},a.createElement(k.CardActionArea,null,a.createElement(xe.Z,null,a.createElement(g.Z,{gutterBottom:!0,variant:"h5",component:"div"},"Instructions sheet"),a.createElement(De.Z,{sx:{textAlign:"center"}},a.createElement("img",{src:"/assets/pdf/Instruction sheet-1.jpg",style:{width:"100%"}})))))}function Ie(){return l().createElement(h.Z,{p:2},l().createElement(E.ZP,{container:!0,alignItems:"stretch",spacing:2},l().createElement(E.ZP,{item:!0,md:2.4,xs:12},l().createElement(he,{Text1:765,Text2:"RPM",backcolor:"#54BF8E"})),l().createElement(E.ZP,{item:!0,md:2.4,xs:12},l().createElement(he,{Text1:"76%",Text2:"EFFICIENCY",backcolor:"#F7C560"})),l().createElement(E.ZP,{item:!0,md:2.4,xs:12},l().createElement(he,{Text1:244.1,Text2:"METERAGE",backcolor:"#54BF8E"})),l().createElement(E.ZP,{item:!0,md:2.4,xs:12},l().createElement(he,{Text1:10,Text2:"WARP BREAKAGE",backcolor:"#FE5869"})),l().createElement(E.ZP,{item:!0,md:2.4,xs:12},l().createElement(he,{Text1:12,Text2:"WEFT BREAKAGE",backcolor:"#54BF8E"})),l().createElement(E.ZP,{item:!0,md:8,xs:12},l().createElement(Fe,null)),l().createElement(E.ZP,{item:!0,md:4,xs:12},l().createElement(Ae,null)),l().createElement(E.ZP,{item:!0,md:12,xs:12},l().createElement(Te,null))))}var ze=n(6867);function Be(){return a.createElement(be.Z,{variant:"outlined",sx:{borderRadius:3,maxHeight:60}},a.createElement(ze.Z,{sx:{p:1},avatar:a.createElement(U.Z,{sx:{bgcolor:"#1de9b6"},"aria-label":"recipe"},"W"),title:"Add waste type",subheader:a.createElement(g.Z,{sx:{color:"#1de9b6",fontSize:12}},"Wasste type & quantity")}))}var Ne=n(7672),We=n(5316),Le=["children","value","index"],Ue=["children","onClose"];function He(e){var t=e.children,n=e.value,r=e.index,l=(0,Ze.Z)(e,Le);return a.createElement("div",(0,ge.Z)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},l),n===r&&a.createElement(h.Z,{sx:{p:1}},a.createElement(g.Z,null,t)))}function qe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}He.propTypes={children:Pe().node,index:Pe().number.isRequired,value:Pe().number.isRequired};var Ye=(0,C.ZP)(we.Z)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function _e(e){var t=e.children,n=e.onClose,r=(0,Ze.Z)(e,Ue);return a.createElement(Se.Z,(0,ge.Z)({sx:{m:0,p:2}},r),t,n?a.createElement(z.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}}},a.createElement(ke.Z,null)):null)}function Ge(e){var t=a.useState(0),n=(0,u.Z)(t,2),r=n[0],l=n[1];return a.createElement("div",null,a.createElement(Ye,{onClose:e.handleClose,"aria-labelledby":"customized-dialog-title",open:e.open,maxWidth:"lg"},a.createElement(Oe.Z,null,a.createElement(h.Z,{p:1},a.createElement(_e,{id:"customized-dialog-title",onClose:e.handleClose,variant:"h5"},"Elastic specification"),a.createElement(h.Z,{sx:{width:"100%"}},a.createElement(h.Z,{sx:{borderColor:"divider"}},a.createElement(Ne.Z,{value:r,onChange:function(e,t){l(t)},"aria-label":"basic tabs example"},a.createElement(We.Z,(0,ge.Z)({label:" SHEET 1"},qe(0))),a.createElement(We.Z,(0,ge.Z)({label:"SHEET 2"},qe(1))))),a.createElement(He,{value:r,index:0},a.createElement(h.Z,{sx:{}},a.createElement("img",{src:"/assets/pdf/Elastic spec sheet page 1.jpg",style:{width:"100%"}}))),a.createElement(He,{value:r,index:1},a.createElement(h.Z,null,a.createElement("img",{src:"/assets/pdf/Elastic spec sheet page 2.jpg",style:{width:"100%"}}))))))))}_e.propTypes={children:Pe().node,onClose:Pe().func.isRequired};var Je=["children","onClose"],Ke=(0,C.ZP)(we.Z)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function Qe(e){var t=e.children,n=e.onClose,r=(0,Ze.Z)(e,Je);return a.createElement(Se.Z,(0,ge.Z)({sx:{m:0,p:2}},r),t,n?a.createElement(z.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}}},a.createElement(ke.Z,null)):null)}function Ve(e){return a.createElement("div",null,a.createElement(Ke,{onClose:e.handleClose,"aria-labelledby":"customized-dialog-title",open:e.open,maxWidth:"md",fullWidth:!0},a.createElement(Qe,{id:"customized-dialog-title",onClose:e.handleClose,variant:"h5"},"Machine details"),a.createElement(Oe.Z,null,a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,xs:12,md:6},a.createElement(fe.Z,null,a.createElement(h.Z,{sx:{p:2}},a.createElement(g.Z,{varient:"h4"},"Operator details"),a.createElement("br",null),a.createElement(g.Z,{sx:{textAlign:"center"}},a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7kEuK-5064Q5gbJVlyo9BSQtZOoeLW_K-Ek9VCgk&s",width:200})),a.createElement(g.Z,{varient:"h4",sx:{textAlign:"center"}},"Setha hallam"),a.createElement("br",null),a.createElement("br",null),a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"User name: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"@serajohnson"))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"EPF number: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"86467865"))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Email: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"sarejahson@gmail.com"))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Role: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Project manager"))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Shift: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Day-shift"))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Contact: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"08383883 "))),a.createElement($.Z,{sx:{mt:1}})))))),a.createElement(E.ZP,{item:!0,xs:12,md:6},a.createElement(fe.Z,{sx:{height:"100%"}},a.createElement(h.Z,{p:2,sx:{display:"-ms-inline-flexbox"}},a.createElement(g.Z,{varient:"h4",mb:2},"Machine details"),a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Quality: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"5j05368 "))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Shift P2P: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,{sx:{color:"#1de9b6"}},a.createElement(ee.Z,null)))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Overall P2P: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,{sx:{color:"#1de9b6"}},a.createElement(ee.Z,null)))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"RPM: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"765 "))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Efficiency: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"76% "))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Meterage: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"244.1  "))),a.createElement($.Z,{sx:{mt:1}})),a.createElement(E.ZP,{item:!0,md:12},a.createElement(E.ZP,{container:!0,spacing:2},a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"Run time: ")),a.createElement(E.ZP,{item:!0,md:6},a.createElement(g.Z,null,"18 h "))),a.createElement($.Z,{sx:{mt:1}}))))))))))}function Xe(){var e=a.useState(!1),t=(0,u.Z)(e,2),n=t[0],r=t[1],l=a.useState(!1),o=(0,u.Z)(l,2),c=o[0],i=o[1];return a.createElement(a.Fragment,null,a.createElement(Ge,{handleClose:function(){r(!1)},open:n}),a.createElement(Ve,{handleClose:function(){i(!1)},open:c}),a.createElement(h.Z,null,a.createElement(fe.Z,{variant:"outlined",sx:{}},a.createElement(h.Z,{sx:{p:1}},a.createElement(fe.Z,{sx:{backgroundColor:"#F5634A",height:130}},a.createElement(k.Typography,{sx:{textAlign:"center",color:"black",p:2,fontSize:30}},"ALTERATION"),a.createElement(k.Typography,{sx:{textAlign:"center",color:"#616161",mt:-2,p:.1,fontSize:17}},"MACHINE STATUS"),a.createElement(k.Typography,{sx:{textAlign:"center",color:"#616161",p:.1,fontSize:17}},"S_04"))),a.createElement(h.Z,{sx:{flexGrow:1,p:1},display:"grid",gap:2},a.createElement(a.Fragment,null,a.createElement(be.Z,{variant:"outlined",sx:{borderRadius:1,maxHeight:60,bgcolor:"#dcedc8"},onClick:function(){i(!0)}},a.createElement(k.Typography,{sx:{textAlign:"center",color:"black",fontSize:25,p:1,fontWeightMedium:1300}},"Machine details"))),a.createElement(a.Fragment,null,a.createElement(be.Z,{variant:"outlined",sx:{borderRadius:1,maxHeight:60,bgcolor:"#dcedc8"},onClick:function(){r(!0)}},a.createElement(k.Typography,{sx:{textAlign:"center",color:"black",fontSize:25,p:1,fontWeightMedium:1300}},"Elastic specification"))),a.createElement(Be,null),a.createElement(Be,null),a.createElement(Be,null),a.createElement(Be,null)),a.createElement(h.Z,{sx:{justifyContent:"center",width:"100%",display:"flex ",mt:3,mb:2}},a.createElement(h.Z,{width:"200px",height:"200px",sx:{backgroundColor:"#ffffff"}},a.createElement(ye.Z,{component:"img",height:"100%",width:"100%",image:"/assets/Qr.png",alt:"Paella dish"}))))))}function $e(e){return l().createElement(l().Fragment,null,l().createElement(E.ZP,{container:!0,spacing:0},l().createElement(E.ZP,{item:!0,md:9.5,xs:12},l().createElement(Ie,null)),l().createElement(E.ZP,{item:!0,md:2.5,xs:12},l().createElement(Xe,null))))}Qe.propTypes={children:Pe().node,onClose:Pe().func.isRequired},(0,C.ZP)(fe.Z)((function(e){return{padding:e.theme.spacing(3),cursor:"pointer",height:"100%"}}));var et=n(6638),tt=n(4130),nt=n(984),rt=n(6024),at=n(762),lt=n(3203),ot=n(7437),ct=n(1523),it=l().lazy((function(){return n.e(969).then(n.t.bind(n,5969,23))})),mt=l().lazy((function(){return n.e(327).then(n.t.bind(n,4327,23))})),st=l().lazy((function(){return n.e(217).then(n.t.bind(n,6217,23))}));const ut=[{id:1,label:"Home",path:"/home",main:!0,component:l().createElement($e,null),icon:l().createElement(et.Z,null),children:[]},{id:2,label:"Waste Management",path:"/waste-management",main:!0,external:!0,component:l().createElement(it,null),icon:l().createElement(tt.Z,null),children:[]},{id:3,label:"Alteration",path:"/alteration",main:!0,external:!0,component:l().createElement(mt,null),icon:l().createElement(nt.Z,null),children:[]},{id:4,label:"Maintenance",path:"/maintenance",main:!0,external:!0,component:l().createElement(st,null),icon:l().createElement(rt.Z,null),children:[]},{id:5,label:"Beam changing",path:"/beam-changing",main:!0,external:!0,component:l().createElement(l().Fragment,null),icon:l().createElement(at.Z,null),children:[]},{id:6,label:"Cleaning",path:"/cleaning",main:!0,external:!0,component:l().createElement(l().Fragment,null),icon:l().createElement(lt.Z,null),children:[]},{id:7,label:"Quality improvement",path:"/quality-improvement",main:!0,external:!0,component:l().createElement(l().Fragment,null),icon:l().createElement(ot.Z,null),children:[]},{id:8,label:"Preparation",path:"/preparation",main:!0,external:!0,component:l().createElement(l().Fragment,null),icon:l().createElement(ct.Z,null),children:[]}];function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?dt(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Et=(0,C.ZP)("div")((function(e){var t=e.theme;return pt(pt({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end",borderBottom:"1px solid rgba(255, 255, 255, 0.12)"})}));const ft=function(){var e=(0,x.Z)();return l().createElement(h.Z,{sx:{background:e.palette.background.paper}},l().createElement(Et,null,l().createElement(h.Z,{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},l().createElement("img",{src:"/stretchline_logo.png",alt:"",style:{width:90}}))),l().createElement(te.Z,{sx:{width:"100%",maxWidth:360,background:e.palette.background.paper},component:"nav","aria-labelledby":"nested-list-subheader"},ut.map((function(e,t){return e.children.length&&e.children.filter((function(e){return!e.hideFromSidebar})).length?l().createElement(Ee,{route:e,key:t}):e.hideFromSidebar?void 0:l().createElement(se,{route:e,key:t})}))))},ht=function(e){var t=e.open,n=e.handleDrawerOpen,r=e.handleMobileDrawerOpen,a=e.mobileOpen,o=e.window,c=void 0!==o?function(){return o().document.body}:void 0,i=(0,x.Z)(),m=function(){return l().createElement(h.Z,{flex:1,display:"flex",alignItems:"flex-end",sx:{background:i.palette.background.paper}},l().createElement(h.Z,{sx:{width:1}},l().createElement(h.Z,{display:"flex"},L.map((function(e,t){return l().createElement(h.Z,{sx:{height:8,width:.2,background:e},key:t})}))),l().createElement(h.Z,{display:"flex",justifyContent:"center",width:"100%"},l().createElement("img",{src:"/xo-logo-new.png",alt:"",style:{width:95}}))))};return l().createElement(h.Z,{component:"nav",sx:{width:{sm:W},flexShrink:{sm:0}},"aria-label":"mailbox folders"},l().createElement(me.ZP,{container:c,variant:"temporary",open:a,onClose:r,ModalProps:{keepMounted:!0},elevation:0,sx:{"& .MuiDrawer-paper":{boxSizing:"border-box",width:W,background:i.palette.background.paper,borderRight:"1px solid rgba(255, 255, 255, 0.12)"}}},l().createElement(ft,null),m()),l().createElement(me.ZP,{sx:{width:W,flexShrink:0,"& .MuiDrawer-paper":{width:W,boxSizing:"border-box",background:i.palette.background.paper,borderRight:"1px solid rgba(255, 255, 255, 0.12)"}},variant:"persistent",anchor:"left",open:t,onClose:n,elevation:2},l().createElement(ft,null),m()))};var gt=n(8850),Zt=n(6235),bt=n(4723);function xt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(0,C.ZP)(bt.Z)((function(e){var t=e.theme;return{userSelect:"none",cursor:"pointer",color:t.palette.text.primary,fontWeight:t.typography.fontWeightRegular,"& .MuiChip-icon":{fontSize:20}}}));var yt=(0,C.ZP)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xt(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(W,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})}));const vt=function(e){var t=e.children,n=e.appThemeMode,r=e.setAppThemeMode,o=(e.route,e.childRoute,(0,x.Z)()),c=(0,a.useState)(!1),i=(0,u.Z)(c,2),m=i[0],s=i[1],d=(0,a.useState)(!0),p=(0,u.Z)(d,2),E=p[0],f=p[1],g=(0,I.Z)(o.breakpoints.down("sm")),Z=(0,a.useState)(!1),b=(0,u.Z)(Z,2),y=b[0],v=b[1],P=function(){f((function(e){return!e}))},w=function(){s((function(e){return!e}))};return(0,a.useEffect)((function(){g&&f(!1)}),[g]),(0,a.useEffect)((function(){JSON.parse(localStorage.getItem("fullscreen"))&&(v(!0),f(!1))}),[]),l().createElement(h.Z,{sx:{display:"flex"}},l().createElement(ie,{handleDrawerOpen:P,open:E,handleMobileDrawerOpen:w,isFullScreen:y,setIsFullScreen:v,setOpen:f,appThemeMode:n,setAppThemeMode:r}),l().createElement(ht,{open:E,handleDrawerOpen:P,handleMobileDrawerOpen:w,mobileOpen:m}),l().createElement(yt,{open:E,sx:{p:0}},!y&&l().createElement(l().Fragment,null,l().createElement(T.Z,null)),t),y&&l().createElement(l().Fragment,null,l().createElement(gt.Z,{sx:{position:"fixed",top:16,left:16},"aria-label":"sidebar-fab",size:"small",onClick:function(){return s(!0)},color:"primary"},l().createElement(B.Z,null)),l().createElement(gt.Z,{sx:{position:"fixed",top:16,right:16},"aria-label":"fullscreen-fab",size:"small",onClick:function(){document.fullscreenElement&&document.exitFullscreen(),g||f(!0),v(!1),localStorage.removeItem("fullscreen")},color:"primary"},l().createElement(Zt.Z,null))))};var Pt=n(5974),wt=n(9617);const St=function(e){var t,n=e.children,r=e.route,o=e.childRoute,c=(0,a.useState)("dark"),i=(0,u.Z)(c,2),m=i[0],s=i[1];return(0,a.useEffect)((function(){P()&&s(P())}),[]),l().createElement(Pt.Z,{theme:(t=m,(0,wt.Z)({palette:{mode:t,primary:{main:"#2d81fe"},secondary:{main:"#bb70e6"},background:{paper:"light"===t?"#ffffff":"#2f334e",default:"light"===t?"#f9fafc":"#282a41"},common:{background:"light"===t?"#f0f0f0":"#262b39"}},components:{MuiAppBar:{styleOverrides:{root:{background:"light"===t?"#ffffff":"#2f334e"}}},MuiIconButton:{styleOverrides:{root:{color:"light"===t?"#2f334e":"#ffffff"}}}},typography:{fontFamily:["Poppins","Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"',"-apple-system","BlinkMacSystemFont",'"Segoe UI"'].join(",")}}))},l().createElement(f.ZP,null),l().createElement(vt,{appThemeMode:m,setAppThemeMode:s,route:r,childRoute:o},n))};function Ot(e){var t=e.children,n=e.route,r=e.childRoute;return y()?l().createElement(St,{route:n,childRoute:r},t):l().createElement(i.Navigate,{to:"/login"})}var kt=n(8147),Ct=n(4603),jt=n(9113),Mt=n.n(jt),Ft=(0,Ct.combineReducers)({}),Rt=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__||Ct.compose,At=(0,Ct.createStore)(Ft,Rt((0,Ct.applyMiddleware)(Mt())));const Dt=function(e){return l().createElement(kt.Provider,{store:At},e.children)};var Tt=n(6610),It=n(5991),zt=n(379),Bt=n(6070),Nt=n(7608);const Wt=function(e){(0,zt.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,Nt.Z)(t);if(n){var a=(0,Nt.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,Bt.Z)(this,e)});function a(e){var t;return(0,Tt.Z)(this,a),(t=r.call(this,e)).state={hasError:!1},t}return(0,It.Z)(a,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?l().createElement(Z.Z,{severity:"error"},"Something went wrong!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(l().Component);var Lt=n(5889),Ut=n(6489);function Ht(e){return l().createElement(Lt.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:!0},l().createElement(Ut.Z,{color:"inherit"}))}function qt(e){var t=e.children,n=e.route,r=e.childRoute;return y()?l().createElement(a.Suspense,{fallback:l().createElement(Ht,null)},l().createElement(Wt,null,l().createElement(St,{route:n,childRoute:r},t))):l().createElement(i.Navigate,{to:"/login"})}var Yt=function(){return(0,a.useEffect)((function(){"/"===window.location.pathname&&(window.location="/home")}),[]),l().createElement(l().StrictMode,null,l().createElement(i.BrowserRouter,null,l().createElement(Dt,null,l().createElement(i.Routes,null,l().createElement(i.Route,{exact:!0,path:"/login",element:l().createElement(D,null)}),ut.map((function(e){var t=[],n=[];return e.main&&(n=[l().createElement(i.Route,{key:e.id,path:e.path,element:e.external?l().createElement(qt,{route:e},e.component):l().createElement(Ot,{route:e},e.component)})]),e.children.length&&(t=e.children.map((function(t){return l().createElement(i.Route,{key:t.id,path:e.path+t.path,element:t.external?l().createElement(qt,{route:e,childRoute:t},t.component):l().createElement(Ot,{route:e,childRoute:t},t.component)})}))),[].concat((0,r.Z)(n),(0,r.Z)(t))}))))))};c().render(l().createElement(Yt,null),document.getElementById("app"))}}]);