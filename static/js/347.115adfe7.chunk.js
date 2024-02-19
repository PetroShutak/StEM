"use strict";(self.webpackChunkstem=self.webpackChunkstem||[]).push([[347],{6625:(n,e,r)=>{r.d(e,{A:()=>j});var o,t,i=r(5043),a=r(3216),s=r(9456),l=r(2012),c=r(1724),d=r(2778),p=r(3111),x=r(9292),y=r(394),h=r(5598),u=r(7528),g=r(4512);const m=g.Ay.div(o||(o=(0,u.A)(["\n  font-size: 16px;\n  font-weight: 600;\n  font-family: var(--font-family-secondary);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),b=g.Ay.button(t||(t=(0,u.A)(["\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--bg-secondary);\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"])));var f=r(579);const v=n=>{let{productId:e}=n;const r=(0,s.wA)(),o=(0,s.d4)(d.Nk).find((n=>n.id===e));return o?(0,f.jsx)("div",{children:(0,f.jsxs)(m,{children:[(0,f.jsx)(b,{onClick:()=>{return n=o.id,void(o.quantity>1?r((0,x.s4)({id:n,changeQuantity:-1})):1===o.quantity&&(r((0,x.s4)({id:n,changeQuantity:-1})),r((0,x.EG)({id:n})),(0,l.Cu)()));var n},children:"-"}),(0,f.jsx)("p",{children:o.quantity}),(0,f.jsx)(b,{onClick:()=>{return n=o.id,void r((0,x.s4)({id:n,changeQuantity:1}));var n},children:"+"})]})}):null},j=n=>{let{id:e,name:r,brand:o,price:t,image:u}=n;const[g,m]=(0,i.useState)(!1),[b,j]=(0,i.useState)(!1),[A,k]=(0,i.useState)(!1),w=(0,s.d4)(d.Cp),C=(0,s.d4)(d.Nk),F=(0,s.wA)(),S=(0,a.zy)();return(0,f.jsxs)(p.q7,{children:[(0,f.jsxs)("div",{children:[w.includes(e)?(0,f.jsx)(p.$A,{onClick:()=>{return n=e,F((0,c.C5)(n)),void(0,l.am)();var n}}):(0,f.jsx)(p.Zu,{onClick:()=>{return n=e,F((0,c.Gm)(n)),void(0,l.uj)();var n}}),(P=u,/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(P)?(0,f.jsx)(p.X$,{src:u,alt:r,width:"100%",height:"100%"}):(0,f.jsx)(p.X$,{src:h,alt:r,width:"100%",height:"100%"})),(0,f.jsxs)(p.cL,{onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[(0,f.jsx)(p.Dh,{to:"/catalog/".concat(e),state:{from:S},onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,f.jsxs)(p.bU,{children:[r," - ",o]})}),A&&(0,f.jsx)(p.ix,{children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"})]}),(0,f.jsxs)(p.NM,{children:[t," \u20b4"]}),(0,f.jsxs)("div",{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[(0,f.jsx)(p.UN,{onClick:()=>(n=>{const e={id:n};C.some((e=>e.id===n))?(F((0,x.EG)(e)),(0,l.Cu)(),1===C.length&&F((0,x.Jv)())):m(!0)})(e)}),b&&(0,f.jsx)(p.m_,{children:C.some((n=>n.id===e))?"\u0417\u0430\u0431\u0440\u0430\u0442\u0438 \u0437 \u043a\u043e\u0448\u0438\u043a\u0430":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043a\u043e\u0448\u0438\u043a"})]})]}),(0,f.jsx)(p.R2,{children:(0,f.jsx)(v,{productId:e})}),(0,f.jsx)(y.A,{showModal:g,setShowModal:m,handleConfirmAddToShoppingList:(n,e,r)=>{F((0,x.vH)({id:n,price:t,quantity:e})),F((0,x.ML)(r)),m(!1),(0,l.bV)()},id:e,price:t})]});var P}},797:(n,e,r)=>{r.d(e,{A:()=>p});r(5043);var o,t,i=r(6625),a=r(7528),s=r(4512);const l=s.Ay.div(o||(o=(0,a.A)(["\n  background-color: inherit;\n"]))),c=s.Ay.div(t||(t=(0,a.A)(["\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 15px;\n  @media screen and (min-width: 768px) {\n    margin: 0 auto;\n    // padding-bottom: 100px;\n  }\n"])));var d=r(579);const p=n=>{let{products:e}=n;return(0,d.jsx)(l,{children:(0,d.jsx)(c,{children:e.map((n=>{let{_id:e,name:r,brand:o,model:t,description:a,price:s,image:l,category:c,subcategory:p,raiting:x,country:y}=n;return(0,d.jsx)(i.A,{id:e,name:r,image:l,description:a,price:s,category:c,subcategory:p,brand:o,model:t,raiting:x,country:y},e)}))})})}},7298:(n,e,r)=>{r.r(e),r.d(e,{default:()=>jn});var o,t,i,a,s,l,c,d,p,x=r(5043),y=r(9456),h=r(2778),u=r(7528),g=r(4512),m=r(4966);const b=g.Ay.div(o||(o=(0,u.A)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  gap: 40px;\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]))),f=g.Ay.div(t||(t=(0,u.A)(["\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  // border: 1px solid red;\n  width: 300px;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),v=g.Ay.div(i||(i=(0,u.A)(["\n  // border: 1px solid green;\n  @media screen and (max-width: 768px) {\n    border: none;\n  }\n"]))),j=g.Ay.h1(a||(a=(0,u.A)(["\n  color: var(--text-color-primary-black);\n  font-family: var(--font-family-secondary);\n"]))),A=g.Ay.p(s||(s=(0,u.A)(["\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),k=(0,g.Ay)(m.ZaL)(l||(l=(0,u.A)(["\n  font-size: 30px;\n  padding: 0;\n  color: var(--text-color-primary-black);\n  cursor: pointer;\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),w=g.Ay.div(c||(c=(0,u.A)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),C=g.Ay.button(d||(d=(0,u.A)(["\n  padding: 10px 20px;\n  margin: 0 auto;\n  display: block;\n  justify-content: center;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--bg-secondary);\n  color: var(--text-color-primary-white);\n\n  &:hover {\n    background-color: var(--bg-secondary-hover);\n  }\n"]))),F=g.Ay.div(p||(p=(0,u.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: var(--text-color-primary-black);\n  font-family: var(--font-family-secondary);\n"])));var S,P,z,M,N,B,E,L,R,T;const q=g.Ay.div(S||(S=(0,u.A)(["\n  border: 1px solid var(--bg-secondary);\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  @media screen and (min-width: 768px) {\n    height: 80vh;\n    overflow: scroll;\n    scroll-behavior: smooth;\n    scrollbar-width: none;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n    position: sticky;\n    top: 0;\n  }\n"]))),D=g.Ay.h2(P||(P=(0,u.A)(["\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  text-align: center;\n  text-transform: uppercase;\n"]))),G=g.Ay.h3(z||(z=(0,u.A)(["\n  margin-bottom: 10px;\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  // text-transform: uppercase;\n"]))),I=g.Ay.div(M||(M=(0,u.A)(["\n  display: flex;\n  align-items: center;\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  margin-bottom: 10px;\n  gap: 10px;\n"]))),Q=g.Ay.input(N||(N=(0,u.A)(["\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  appearance: none;\n  border: 1px solid var(--bg-secondary);\n  border-radius: 2px;\n  outline: none;\n  transition: 0.3s;\n  position: relative;\n  &:checked {\n    border: 1px solid var(--bg-secondary);\n    background-color: var(--bg-secondary);\n    &:after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 10px;\n      height: 10px;\n      background-color: var(--text-color-primary-white);\n      border-radius: 2px;\n    }\n  }\n"]))),V=g.Ay.div(B||(B=(0,u.A)(["\n  display: flex;\n  align-items: center;\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  margin-bottom: 10px;\n  gap: 10px;\n"]))),Z=g.Ay.input(E||(E=(0,u.A)(["\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  appearance: none;\n  border: 1px solid var(--bg-secondary);\n  border-radius: 2px;\n  outline: none;\n  transition: 0.3s;\n  position: relative;\n  &:checked {\n    border: 1px solid var(--bg-secondary);\n    background-color: var(--bg-secondary);\n    &:after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 10px;\n      height: 10px;\n      background-color: var(--text-color-primary-white);\n      border-radius: 2px;\n    }\n  }\n"]))),$=g.Ay.button(L||(L=(0,u.A)(["\n  padding: 10px 20px;\n  margin-top: 20px;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--bg-secondary);\n  color: var(--text-color-primary-white);\n\n  &:hover {\n    background-color: var(--bg-secondary-hover);\n  }\n"]))),O=(g.Ay.input(R||(R=(0,u.A)(["\n  width: 100%;\n"]))),g.Ay.p(T||(T=(0,u.A)(["\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  margin-bottom: 10px;\n"]))));r(1207);var U=r(6848),W=r(579);const X=n=>{let{products:e,applyBrandFilter:r,applyCountryFilter:o,applyPriceFilter:t,closeModal:i,resetFilters:a}=n;const[s,l]=(0,x.useState)([]),[c,d]=(0,x.useState)([]),[p,y]=(0,x.useState)([]),[h,u]=(0,x.useState)([]),[g,m]=(0,x.useState)([0,1e3]);(0,x.useEffect)((()=>{const n=Array.from(new Set(e.map((n=>n.brand)))).sort(((n,e)=>n.localeCompare(e)));l(n);const r=Array.from(new Set(e.map((n=>n.country))));y(r)}),[e]);const b=n=>e.filter((e=>e.brand===n)).length,f=n=>e.filter((e=>e.country===n)).length;return(0,W.jsxs)(q,{children:[(0,W.jsx)(D,{children:"\u0424\u0456\u043b\u044c\u0442\u0440\u0438"}),(0,W.jsxs)("div",{children:[(0,W.jsx)(G,{children:"\u0411\u0440\u0435\u043d\u0434\u0438"}),s.map((n=>(0,W.jsxs)(I,{children:[(0,W.jsx)(Q,{type:"checkbox",id:n,name:n,checked:c.includes(n),onChange:()=>(n=>{const e=[...c];if(e.includes(n)){const r=e.indexOf(n);e.splice(r,1)}else e.push(n);d(e)})(n)}),(0,W.jsxs)("label",{htmlFor:n,children:[n," (",b(n),")"]})]},n)))]}),(0,W.jsxs)("div",{children:[(0,W.jsx)(G,{children:"\u041a\u0440\u0430\u0457\u043d\u0430-\u0432\u0438\u0440\u043e\u0431\u043d\u0438\u043a"}),p.map((n=>(0,W.jsxs)(V,{children:[(0,W.jsx)(Z,{type:"checkbox",id:n,name:n,checked:h.includes(n),onChange:()=>(n=>{const e=[...h];if(e.includes(n)){const r=e.indexOf(n);e.splice(r,1)}else e.push(n);u(e)})(n)}),(0,W.jsxs)("label",{htmlFor:n,children:[n," (",f(n),")"]})]},n)))]}),(0,W.jsxs)("div",{children:[(0,W.jsx)(G,{children:"\u0426\u0456\u043d\u0430"}),(0,W.jsxs)("div",{children:[(0,W.jsxs)(O,{children:["\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0430 \u0446\u0456\u043d\u0430: ",g[0]]}),(0,W.jsxs)(O,{children:["\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0446\u0456\u043d\u0430: ",g[1]]})]}),(0,W.jsx)(U.A,{min:0,max:5e4,value:g,onChange:m,range:!0})]}),(0,W.jsx)($,{onClick:()=>{r(c),o(h),t(g[0],g[1]),"function"===typeof i&&i(),window.scrollTo({top:0,behavior:"smooth"})},children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 \u0444\u0456\u043b\u044c\u0442\u0440"}),(0,W.jsx)(C,{onClick:()=>{d([]),u([]),m([0,1e3]),a(),window.scrollTo({top:0,behavior:"smooth"}),"function"===typeof i&&i()},children:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438 \u0444\u0456\u043b\u044c\u0442\u0440\u0438"})]})};var _,H,J=r(9146),K=r(797);const Y=g.Ay.div(_||(_=(0,u.A)(["\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: auto;\n  left: ",";\n  background-color: var(--text-color-primary-white);\n  transition: left 0.3s ease-in-out;\n  z-index: 1000;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n"])),(n=>{let{"data-isvisible":e}=n;return e?"0":"-100%"})),nn=g.Ay.button(H||(H=(0,u.A)(["\n  color: var(--text-color-primary-black);\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 36px;\n  font-weight: bold;\n"])));var en,rn,on,tn;const an=g.Ay.div(en||(en=(0,u.A)(["\n  font-family: var(--font-family-secondary);\n  color: var(--text-color-primary-black);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 10px;\n  border: 1px solid var(--bg-secondary);\n  border-radius: 8px;\n  margin-bottom: 20px;\n  // @media screen and (max-width: 767px) {\n  //   display: none;\n  // }\n"]))),sn=g.Ay.h2(rn||(rn=(0,u.A)(["\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 10px;\n"]))),ln=g.Ay.p(on||(on=(0,u.A)(["\n  font-size: 16px;\n  padding: 0 20px;\n  text-align: center;\n  line-height: 1.5;\n  font-weight: 400;\n  margin-bottom: 20px;\n"]))),cn=g.Ay.button(tn||(tn=(0,u.A)(["\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: var(--bg-secondary);\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--bg-secondary-hover);\n  }\n"])));var dn=r(3216);const pn=()=>{const n=(0,dn.Zp)();return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(an,{children:[(0,W.jsx)(sn,{children:"\u041b\u0430\u0441\u043a\u0430\u0432\u043e \u043f\u0440\u043e\u0441\u0438\u043c\u043e!"}),(0,W.jsx)(ln,{children:"\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044c, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0456\u0457, \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0431\u043e\u043d\u0443\u0441\u0438 \u0456 \u0437\u043d\u0438\u0436\u043a\u0438."}),(0,W.jsx)(cn,{onClick:()=>{n("/login")},children:"\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044c \u0432 \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0438\u0439 \u043a\u0430\u0431\u0456\u043d\u0435\u0442"})]})})};var xn=r(3978);const yn=n=>{let{isVisible:e,onClose:r,filterProps:o}=n;const t=(0,y.d4)(xn.Ep),{allProducts:i,applyBrandFilter:a,applyCountryFilter:s,applyPriceFilter:l,resetFilters:c}=o,d=()=>{r()};return(0,W.jsxs)(Y,{"data-isvisible":e,children:[!t&&(0,W.jsx)(pn,{}),(0,W.jsx)(X,{applyFilters:()=>{d()},products:i,applyBrandFilter:a,applyCountryFilter:s,applyPriceFilter:l,closeModal:d,resetFilters:c}),(0,W.jsx)(nn,{onClick:r,children:"\xd7"})]})};var hn,un=r(2157),gn=r.n(un),mn=r(4697);const bn=g.Ay.div(hn||(hn=(0,u.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 20px;\n  @media screen and (max-width: 767px) {\n    justify-content: center;\n  }\n"]))),fn={control:(n,e)=>({...n,cursor:"pointer",border:"1px solid var(--bg-secondary)",backgroundColor:"white",color:"var(text-color-primary-black)","&:hover":{borderColor:"var(--bg-secondary)"},width:"250px",borderRadius:"8px",fontSize:"16px",fontWeight:"500",outline:"none",fontFamily:"var(--font-family-secondary)"}),option:(n,e)=>({...n,cursor:"pointer",backgroundColor:e.isSelected?"var(--bg-secondary)":"white",color:"var(text-color-primary-black)","&:hover":{backgroundColor:"var(--bg-secondary)",color:"white"},fontSize:"16px",fontWeight:"500",outline:"none",fontFamily:"var(--font-family-secondary)"}),menu:(n,e)=>({...n,width:"260px",backgroundColor:"white",color:"#333",border:"1px solid var(--bg-secondary)",borderRadius:"8px",outline:"none",fontFamily:"var(--font-family-secondary)"})},vn=n=>{let{sortProductByPrice:e,sortProductByRaiting:r}=n;return(0,W.jsx)(bn,{children:(0,W.jsx)(mn.Ay,{placeholder:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438...",isSearchable:!1,styles:fn,options:[{value:"1",label:"\u0432\u0456\u0434 \u0434\u0435\u0448\u0435\u0432\u0448\u0438\u0445 \u0434\u043e \u0434\u043e\u0440\u043e\u0436\u0447\u0438\u0445"},{value:"2",label:"\u0432\u0456\u0434 \u0434\u043e\u0440\u043e\u0436\u0447\u0438\u0445 \u0434\u043e \u0434\u0435\u0448\u0435\u0432\u0448\u0438\u0445"},{value:"3",label:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456"}],onChange:n=>{const o=n.value;"1"===o?e("asc"):"2"===o?e("desc"):"3"===o&&r("asc")}})})},jn=()=>{const n=(0,y.d4)(xn.Ep),e=(0,y.d4)(h.Ks),[r,o]=(0,x.useState)(e),t=(0,y.d4)(h.Nz),i=(0,y.d4)(h.nT),[a,s]=(0,x.useState)([]),[l,c]=(0,x.useState)([]),[d,p]=(0,x.useState)(0),[u,g]=(0,x.useState)(1e3),[m,S]=(0,x.useState)(!1),[P,z]=(0,x.useState)(!0),[M,N]=(0,x.useState)(1),B=9*M,E=B-9,L=r.slice(E,B),R=()=>{S((n=>!n))};(0,x.useEffect)((()=>{let n=[...e];a.length>0&&(n=n.filter((n=>a.includes(n.brand)))),l.length>0&&(n=n.filter((n=>l.includes(n.country)))),0===d&&1e3===u||(n=n.filter((n=>n.price>=d&&n.price<=u))),N(1),o(n)}),[e,a,l,d,u]);const T=n=>{s(n)},q=n=>{c(n)},D=(n,e)=>{p(n),g(e)};let G=(0,W.jsx)(j,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u0456\u0432"});!P&&r.length>0&&(G=(0,W.jsxs)(F,{children:[(0,W.jsx)("h2",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438:"}),(0,W.jsxs)("p",{children:["\u0417\u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",r.length]})]}));const I=(0,x.useCallback)((()=>{s([]),c([]),p(0),g(1e3),z(!0)}),[]);(0,x.useEffect)((()=>{0===a.length&&0===l.length&&0===d&&1e3===u?z(!0):z(!1)}),[a,l,d,u]);return(0,W.jsxs)(b,{children:[(0,W.jsx)(yn,{isVisible:m,onClose:R,filterProps:{allProducts:e,applyBrandFilter:T,applyCountryFilter:q,applyPriceFilter:D,resetFilters:I}}),(0,W.jsxs)(f,{children:[!n&&(0,W.jsx)(pn,{}),(0,W.jsx)(X,{products:e,applyBrandFilter:T,applyCountryFilter:q,applyPriceFilter:D,resetFilters:I})]}),(0,W.jsxs)(v,{children:[(0,W.jsxs)(w,{children:[G,(0,W.jsx)(k,{onClick:R})]}),r.length>0&&(0,W.jsx)(vn,{sortProductByPrice:n=>{const e=[...r].sort(((e,r)=>"asc"===n?e.price-r.price:r.price-e.price));o(e)},sortProductByRaiting:n=>{const e=[...r].sort(((e,r)=>"desc"===n?e.raiting-r.raiting:r.raiting-e.raiting));o(e)}}),0===r.length?(0,W.jsxs)("div",{children:[(0,W.jsx)(A,{children:"\u041d\u0435\u043c\u0430\u0454 \u0442\u043e\u0432\u0430\u0440\u0456\u0432, \u0449\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u044e\u0442\u044c \u0432\u0438\u0431\u0440\u0430\u043d\u0438\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0456\u044f\u043c"}),(0,W.jsx)(C,{onClick:I,children:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438 \u0444\u0456\u043b\u044c\u0442\u0440\u0438"})]}):(0,W.jsx)(K.A,{products:L}),r.length>0&&(0,W.jsx)(gn(),{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil(r.length/9),marginPagesDisplayed:1,pageRangeDisplayed:2,containerClassName:"pagination",activeClassName:"active",onPageChange:n=>{let{selected:e}=n;N(e+1),window.scrollTo({top:0,behavior:"smooth"})},disableInitialCallback:!0,previousClassName:1===M?"disabled":"",nextClassName:M===Math.ceil(r.length/9)?"disabled":""})]}),i&&(0,W.jsx)("h2",{children:"\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),t&&!i&&(0,W.jsx)(J.A,{})]})}}}]);
//# sourceMappingURL=347.115adfe7.chunk.js.map