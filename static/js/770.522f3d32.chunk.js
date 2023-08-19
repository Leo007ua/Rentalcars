"use strict";(self.webpackChunkrentalcars=self.webpackChunkrentalcars||[]).push([[770],{9464:function(n,r,e){e.d(r,{Z:function(){return $}});var t,o,i,a,c=e(9439),s=e(2791),l=e(168),d=e(5867),u=d.ZP.div(t||(t=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n\n  .modal-content {\n    background-color: white;\n    border-radius: 24px;\n    width: 541px;\n    height: 752px;\n    padding: 20px;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n    position: relative;\n\n    img {\n      width: 469px;\n      height: 314px;\n      object-fit: cover;\n      border-radius: 12px;\n      margin: 15px 36px;\n    }\n\n    h2 {\n        margin: 15px 40px;\n    }\n\n    p {\n        margin: 15px 40px;\n    }\n    span {\n      margin: 15px 40px;\n      \n    }\n  }\n"]))),p=d.ZP.button(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  border: none;\n  background: none;\n  font-size: 24px;\n  cursor: pointer;\n"]))),f=e(1413),x=e(4925),h=d.ZP.button(i||(i=(0,l.Z)(["\n  padding: 12px 99px;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  transition: box-shadow 0.3s ease, background-color 0.3s ease;\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 47px -18px rgba(0, 0, 0, 0.75);\n    background-color: rgba(240, 255, 255, 0.8);\n  }\n\n  &.no-border {\n    margin-top: 5px;\n    border-radius: 12px;\n    background-color: #fff;\n    border: none;\n    cursor: pointer;\n    /* font-size: 20px; */\n    color: ",";\n  }\n  &.primary {\n    padding: 12px 99px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 12px;\n    background-color: #3470ff;\n    border: none;\n    color: #fff;\n    font-family: Manrope;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    &:hover,\n    &:focus {\n      background-color: #0b44cd;\n    }\n  }\n  &.secondary {\n    width: 168px;\n    margin-top: 20px;\n    border: none;\n    padding: 12px 50px;\n    background-color: #ff9e1f;\n    border-radius: 12px;\n    background-color: #3470ff;\n    color: var(--white, #fff);\n    font-family: Manrope;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 20px;\n    margin-left: 40px;\n    &:hover,\n    &:focus {\n      background-color: #0b44cd;\n    }\n  }\n  &.hearts {\n    width: 18px;\n    height: 18px;\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    background-color: transparent;\n  }\n"])),(function(n){return"true"===n.isfavorite?"red":"black"})),g=d.ZP.button(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: transparent;\n"]))),b=e(184),j=["children","variant"];var v=function(n){var r=n.children,e=n.variant,t=void 0===e?"none":e,o=(0,x.Z)(n,j);return(0,b.jsx)(h,(0,f.Z)((0,f.Z)({className:t},o),{},{children:r}))};var m,y,k=function(n){var r=n.onCloseModal,e=n.car;(0,s.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);var t=e.model,o=e.type,i=e.year,a=e.img,c=e.make,l=e.rentalPrice,d=e.rentalCompany,f=e.functionalities,x=e.address;return(0,b.jsx)(u,{className:"overlay",onClick:function(n){n.target===n.currentTarget&&r()},children:(0,b.jsxs)("div",{className:"modal-content",children:[(0,b.jsx)(p,{onClick:r,children:"\xd7"}),(0,b.jsx)("div",{children:(0,b.jsx)("img",{src:a,alt:t})}),(0,b.jsxs)("h2",{children:[c," ",(0,b.jsx)("span",{children:t})]}),(0,b.jsxs)("p",{children:["Rental Price: ",l]}),(0,b.jsxs)("p",{children:["Year: ",i]}),(0,b.jsxs)("p",{children:["Rental Company: ",d]}),(0,b.jsxs)("p",{children:["Address: ",x]}),(0,b.jsxs)("p",{children:["Type: ",o]}),(0,b.jsx)("span",{children:"Accessories and functionalities:"}),(0,b.jsxs)("p",{children:[" ",f.join(", ")]}),(0,b.jsx)("a",{href:"tel:+380730000000",target:"_blank",rel:"noopener noreferrer",children:(0,b.jsx)(v,{type:"button",variant:"secondary",children:"Rental car"})})]})})},Z=e(9434),w=e(5995),C=d.ZP.img(m||(m=(0,l.Z)(["\n  width: 100%;\n  height: 268px;\n  border-radius: 14px;  \n"]))),P=d.ZP.li(y||(y=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 274px;\n  \n  justify-content: space-between;\n\n  span {\n    color: #3470ff;\n  }\n"]))),z=e(8820),E=function(n){var r=n.onBtnHeartClick,e=n.heartColor,t=n.isFavorite;return(0,b.jsx)(g,{type:"button",onClick:r,children:t||e?(0,b.jsx)(z.M_L,{size:18,color:"rgba(52, 112, 255, 1)"}):(0,b.jsx)(z.lo,{size:18,color:"rgba(67, 63, 63, 0.8)"})})},M=e(4683),$=function(n){var r=n.car,e=(0,s.useState)(!1),t=(0,c.Z)(e,2),o=t[0],i=t[1],a=r.id,l=r.model,d=r.type,u=r.year,p=r.img,f=r.make,x=r.rentalPrice,h=r.rentalCompany,g=r.functionalities,j=r.address,m=(0,Z.v9)(M.W),y=(0,Z.v9)(M.$),z=(0,Z.I0)(),$=m.find((function(n){return n.id===a})),L=y.find((function(n){return n.id===a})),A=(0,s.useState)(!1),F=(0,c.Z)(A,2),N=F[0],R=F[1];(0,s.useEffect)((function(){N&&R(!N)}),[N]);return(0,b.jsxs)(P,{children:[(0,b.jsx)(C,{src:p,alt:l,loading:"lazy"}),(0,b.jsx)(E,{onBtnHeartClick:function(){if(R(!N),L){var n=y.filter((function(n){return n.id!==a}));z((0,w.Zh)(n))}else z((0,w.ad)($))},heartColor:N,isFavorite:L}),(0,b.jsxs)("h3",{children:[f," ",(0,b.jsx)("span",{children:l}),", ",u]}),(0,b.jsx)("p",{children:x}),(0,b.jsxs)("p",{children:[j," | ",h," | ",d," | ",l," | ",a," |"," ",g[0]]}),(0,b.jsx)(v,{type:"button",variant:"primary",onClick:function(){i(!0)},children:"Learn more"}),o&&(0,b.jsx)(k,{car:r,onCloseModal:function(){return i(!1)}})]})}},770:function(n,r,e){e.r(r),e.d(r,{default:function(){return k}});var t,o,i,a,c=e(9439),s=e(2791),l=e(168),d=e(5867),u=d.ZP.ul(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 29px;\n  row-gap: 50px;\n  list-style: none;\n"]))),p=e(9464),f=d.ZP.ul(o||(o=(0,l.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),x=d.ZP.li(i||(i=(0,l.Z)(["\n  margin: 0 5px;\n"]))),h=d.ZP.button(a||(a=(0,l.Z)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  font-size: 16px;\n  transition: background-color 0.3s ease-in-out;\n\n  ","\n"])),(function(n){return n.$active&&"\n    background-color: #007bff;\n    color: #fff;\n    border-radius: 5px;\n  "})),g=e(184),b=function(n){var r=n.currentPage,e=n.totalCars,t=n.carsPerPage,o=n.onPageChange,i=Math.ceil(e/t);return(0,g.jsx)(f,{children:Array.from({length:i},(function(n,r){return r+1})).map((function(n){return(0,g.jsx)(x,{children:(0,g.jsx)(h,{$active:r===n?"true":void 0,onClick:function(){return o(n)},children:n})},n)}))})},j=function(n){var r=n.cars,e=(0,s.useState)(1),t=(0,c.Z)(e,2),o=t[0],i=t[1],a=8*o,l=a-8,d=r.slice(l,a);return(0,g.jsxs)("div",{children:[(0,g.jsx)(u,{children:(null===d||void 0===d?void 0:d.length)&&d.map((function(n){return(0,g.jsx)(p.Z,{car:n},n.id)}))}),(0,g.jsx)(b,{currentPage:o,totalCars:r.length,carsPerPage:8,onPageChange:function(n){i(n)}})]})},v=e(9434),m=e(6836),y=e(4683),k=function(){var n=(0,v.I0)(),r=(0,v.v9)(y.W);return(0,s.useEffect)((function(){r||n((0,m.$)())}),[n,r]),(0,g.jsx)(g.Fragment,{children:r&&(0,g.jsx)(j,{cars:r})})}},4683:function(n,r,e){e.d(r,{$:function(){return o},W:function(){return t}});var t=function(n){return n.catalog.cars},o=function(n){return n.favorite.favoriteCars}}}]);
//# sourceMappingURL=770.522f3d32.chunk.js.map