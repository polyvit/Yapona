(this.webpackJsonpyapona_sushi=this.webpackJsonpyapona_sushi||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={form:"SubmitOrder_form__ahgfk",control:"SubmitOrder_control__1RO7u",actions:"SubmitOrder_actions__MszR7",submit:"SubmitOrder_submit__10bs_",invalid:"SubmitOrder_invalid__1WNdc"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={meals:"MealList_meals__2UmhC","meals-appear":"MealList_meals-appear__2f8-f",loading:"MealList_loading__ZMJLQ","http-error":"MealList_http-error__2KTGd"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={"promo-text":"PromoText_promo-text__1ujlQ"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),r=(n(28),n(2)),i=n(1),s=n.n(i),o=n.p+"static/media/sushi.a2b4b921.jpg",j=n(18),d=n.n(j),u=n(11),l=n.n(u),m=n(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=s.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){},clearCart:function(){}}),x=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(O),o=s.items.reduce((function(e,t){return e+t.amount}),0);Object(i.useEffect)((function(){if(0!==s.items.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s.items]);var j="".concat(l.a.button," ").concat(c?l.a.bump:"");return Object(m.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(m.jsx)("span",{className:l.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(m.jsx)("span",{className:l.a.badge,children:o})]})},p=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)("h1",{children:"\u042f\u043f\u043e\u043d\u0430 \u043a\u0443\u0445\u043d\u044f"}),Object(m.jsx)(x,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:d.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"\u0421\u0443\u0448\u0438"})})]})},h=n(20),f=n.n(h),_=function(){return Object(m.jsxs)("section",{className:f.a["promo-text"],children:[Object(m.jsx)("h2",{children:"\u041e\u043d\u043b\u0430\u0439\u043d \u0421\u0443\u0448\u0438 \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f"}),Object(m.jsx)("p",{children:"\u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f - \u044d\u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0443\u0448\u0438-\u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0441\u0443\u0448\u0438 \u0438 \u0441\u0430\u0448\u0438\u043c\u0438, \u0440\u043e\u043b\u043b\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u043b\u044e\u0434\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0432\u0430\u0440\u043e\u0432"}),Object(m.jsx)("p",{children:"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0430\u043c\u044b\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u0440\u0438\u0434\u0430\u044e\u0442 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0432\u043a\u0443\u0441 \u0431\u043b\u044e\u0434\u0430\u043c, \u0434\u0430\u0440\u044f\u0442 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0442\u0440\u0430\u043f\u0435\u0437\u044b"})]})},v=n(6),C=n(13),N=n(14),y=n.n(N),g=n(21),M=n.n(g),I=function(e){return Object(m.jsx)("div",{className:M.a.card,children:e.children})},S=n(15),w=n.n(S),k=n(22),H=n.n(k),A=n(3),E=n(23),F=n.n(E),R=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:F.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(A.a)({ref:t},e.input))]})})),T=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(m.jsxs)("form",{className:H.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value;0===n.trim().length||+n<1||+n>10?a(!1):e.onAddToCart(+n)},children:[Object(m.jsx)(R,{input:{type:"number",id:"".concat(e.id),min:"1",step:"1",defaultValue:"1"},label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",ref:s}),Object(m.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),!c&&Object(m.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442 1 \u0434\u043e 10"})]})},D=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(i.useContext)(O);return Object(m.jsxs)("li",{className:w.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:w.a.description,children:e.description}),Object(m.jsx)("div",{className:w.a.price,children:t})]}),Object(m.jsx)("div",{children:Object(m.jsx)(T,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,price:e.price,amount:t})},id:e.id})})]})};var B=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(r.a)(a,2),o=s[0],j=s[1],d=Object(i.useState)(),u=Object(r.a)(d,2),l=u[0],b=u[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://yapona-project-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),j(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){j(!1),b(e.message)}))}),[]),o)return Object(m.jsx)("section",{className:y.a.loading,children:Object(m.jsx)("p",{children:"\u0418\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"})});if(l)return Object(m.jsx)("section",{className:y.a["http-error"],children:Object(m.jsx)("p",{children:l})});var O=n.map((function(e){return Object(m.jsx)(D,{name:e.name,description:e.description,price:e.price,id:e.id},e.id)}));return Object(m.jsx)("section",{className:y.a.meals,children:Object(m.jsx)(I,{children:Object(m.jsx)("ul",{children:O})})})};var L=function(){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsx)(B,{})]})},P=n(4),J=n.n(P),Q=n(16),z=n.n(Q),U=function(e){return Object(m.jsx)("div",{className:z.a.backdrop,onClick:e.onHideCart})},V=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("divc",{className:z.a.content,children:e.children})})},K=document.getElementById("overlays"),W=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[a.a.createPortal(Object(m.jsx)(U,{onHideCart:e.onHideCart}),K),a.a.createPortal(Object(m.jsx)(V,{children:e.children}),K)]})},Z=n(7),$=n.n(Z),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:$.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:$.a.summary,children:[Object(m.jsx)("span",{className:$.a.price,children:t}),Object(m.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:$.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},G=n(8),X=n.n(G),Y=function(e){return""!==e.trim()},ee=function(e){var t=Object(i.useState)({name:!0,city:!0,address:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),j=Object(i.useRef)(),d=function(e){return"".concat(X.a.control," ").concat(c[e]?"":X.a.invalid)};return Object(m.jsxs)("form",{className:X.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=j.current.value,i=Y(n),d=Y(c),u=Y(r);a({name:i,city:d,address:u}),i&&d&&u&&e.onSubmit({name:n,city:c,address:r})},children:[Object(m.jsxs)("div",{className:d("name"),children:[Object(m.jsx)("label",{htmlFor:"name",children:"\u0418\u043c\u044f"}),Object(m.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(m.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})]}),Object(m.jsxs)("div",{className:d("city"),children:[Object(m.jsx)("label",{htmlFor:"city",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(m.jsx)("input",{type:"text",id:"city",ref:o}),!c.city&&Object(m.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"})]}),Object(m.jsxs)("div",{className:d("address"),children:[Object(m.jsx)("label",{htmlFor:"address",children:"\u0410\u0434\u0440\u0435\u0441"}),Object(m.jsx)("input",{type:"text",id:"address",ref:j}),!c.address&&Object(m.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"})]}),Object(m.jsxs)("div",{className:X.a.actions,children:[Object(m.jsx)("button",{className:X.a.submit,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})},te=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)(!1),j=Object(r.a)(o,2),d=j[0],u=j[1],l=Object(i.useState)(!1),b=Object(r.a)(l,2),x=b[0],p=b[1],h=Object(i.useContext)(O),f="$".concat(Math.abs(h.totalAmount).toFixed(2)),_=h.items.length>0,N=function(e){h.removeItem(e)},y=function(e){h.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},g=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://yapona-project-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedMeals:h.items})});case 3:u(!1),p(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(m.jsx)("ul",{className:J.a["cart-items"],children:h.items.map((function(e){return Object(m.jsx)(q,{name:e.name,price:e.price,amount:e.amount,onAdd:y.bind(null,e),onRemove:N.bind(null,e.id)},e.id)}))}),I=Object(m.jsxs)("div",{className:J.a.actions,children:[Object(m.jsx)("button",{className:J.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),_&&Object(m.jsx)("button",{className:J.a.button,onClick:function(){a(!0)},children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]}),S=Object(m.jsxs)(s.a.Fragment,{children:[M,Object(m.jsxs)("div",{className:J.a.total,children:[Object(m.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e"}),Object(m.jsx)("span",{children:f})]}),c&&Object(m.jsx)(ee,{onSubmit:g,onCancel:e.onHideCart}),!c&&I]}),w=Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("p",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b"}),Object(m.jsx)("div",{className:J.a.actions,children:Object(m.jsx)("button",{className:J.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]});return Object(m.jsxs)(W,{onHideCart:e.onHideCart,children:[!d&&!x&&S,d&&Object(m.jsx)("p",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f"}),x&&w]})},ne=n(19),ce={items:[],totalAmount:0},ae=function(e,t){if("ADD_ITEM"===t.type){var n,c,a=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[r];return i?(n=Object(A.a)(Object(A.a)({},i),{},{amount:i.amount+t.item.amount}),(c=Object(ne.a)(e.items))[r]=n):(n=Object(A.a)({},t.item),c=e.items.concat(n)),{items:c,totalAmount:a}}if("REMOVE_ITEM"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),j=e.items[o],d=e.totalAmount-j.price;if(1===j.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(A.a)(Object(A.a)({},j),{},{amount:j.amount-1});(s=Object(ne.a)(e.items))[o]=u}return{items:s,totalAmount:d}}return t.type,ce},re=function(e){var t=Object(i.useReducer)(ae,ce),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD_ITEM",item:e})},removeItem:function(e){a({type:"REMOVE_ITEM",id:e})},clearCart:function(){a({type:"CLEAR_CART"})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var ie=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(re,{children:[n&&Object(m.jsx)(te,{onHideCart:function(){c(!1)}}),Object(m.jsx)(p,{onShowCart:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(L,{})})]})};a.a.render(Object(m.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.e55420b8.chunk.js.map