(this["webpackJsonpmovie-website"]=this["webpackJsonpmovie-website"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/img-01.1009d234.jpg"},33:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Josee.96bbf335.jpg"},34:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/img-3.07e03eb6.jpg"},35:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(16),a=c.n(s),l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))},r=(c(24),c(4)),o=c(2),j=c(8),h=c(0),d=[{dislay:"Trang ch\u1ee7",path:"/"},{dislay:"Phim b\u1ed9",path:"/phimbo"},{dislay:"Phim l\u1ebb",path:"/phimle"},{dislay:"Phim ho\u1ea1t h\xecnh",path:"/phimhoathinh"},{dislay:"Phim chi\u1ebfu r\u1ea1p",path:"/phimchieurap"}],m=function(){var e=Object(o.f)().pathname,t=d.findIndex((function(t){return t.path===e})),c=Object(i.useRef)(null),n=function(){return c.current.classList.toggle("active")},s=Object(i.useState)(""),a=Object(j.a)(s,2),l=a[0],m=a[1];return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("div",{className:"header__logo",children:Object(h.jsx)("span",{children:"Melon."})}),Object(h.jsxs)("div",{className:"header__menu",ref:c,children:[Object(h.jsx)("div",{className:"header__menu__close",onClick:n,children:Object(h.jsx)("i",{className:"fas fa-times"})}),d.map((function(e,c){return Object(h.jsx)(r.b,{to:e.path,className:"header__menu__item ".concat(c===t?"active":""),onClick:n,children:e.dislay},c)}))]}),Object(h.jsxs)("div",{className:"header__tool",children:[Object(h.jsxs)("div",{className:"header__tool__search",children:[Object(h.jsx)("input",{type:"text",required:!0,onKeyPress:function(e){"Enter"===e.key&&(window.location="/timkiem/".concat(e.target.value))},onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("i",{className:"fa fa-search",onClick:function(){""!=l&&(window.location="/timkiem/".concat(l))}})]}),Object(h.jsx)("i",{className:"fas fa-bars",onClick:n})]})]})},b=c(9),u=function(e){return document.title="Melon - "+e.title,Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(h.jsx)(h.Fragment,{children:e.children})};u.propTypes={title:c.n(b).a.string.isRequired};var O=u,x=c(14),p=c.n(x),f=c(19),v=n.a.createContext({films:{},listFilms:{},isLoading:!0}),_=function(e){var t=Object(i.useState)(!0),c=Object(j.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)([]),l=Object(j.a)(a,2),r=l[0],o=l[1],d=Object(i.useState)([]),m=Object(j.a)(d,2),b=m[0],u=m[1],O=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2oFTNJUT6t5JD4jhXCXoil0nWVvdJpEtd21LLi4_MW-_5i-Rd8LpSl3UA");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,o(c.phim),u(b.concat(c.phim.phimbo,c.phim.phimle,c.phim.phimhoathinh,c.phim.phimchieurap)),s(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){O()}),[]),Object(h.jsx)(v.Provider,{value:{films:r,listFilms:b,isLoading:n},children:e.children})},g=function(e){return Object(h.jsx)("div",{className:"section__title",children:e.children})},C=function(e){return Object(h.jsx)("div",{className:"section__body",children:e.children})},N=function(e){return Object(h.jsx)("div",{className:"section",children:e.children})},w=function(e){var t=e.data,c=Object(i.useState)(t.episode.length>=1?t.episode[0].url:""),n=Object(j.a)(c,2),s=n[0],a=n[1],l=Object(i.useState)(t.episode.length>=1?t.episode[0].episode:""),r=Object(j.a)(l,2),o=r[0],d=r[1];return Object(i.useEffect)((function(){a(t.episode.length>=1?t.episode[0].url:""),d(t.episode.length>=1?t.episode[0].episode:"")}),[t]),t.episode.length>=1?Object(h.jsxs)("div",{className:"film-view",children:[Object(h.jsx)("div",{className:"film-view__video",children:Object(h.jsx)("iframe",{src:s,allowFullScreen:!0,frameBorder:"0",width:"100%",height:"600"})}),Object(h.jsx)("div",{className:"film-view__title",children:Object(h.jsxs)("p",{children:[t.title," ",Object(h.jsx)("span",{children:t.episode.length>1?" - T\u1eadp ".concat(o):""})]})}),Object(h.jsxs)("div",{className:"film-view__episode",children:[Object(h.jsx)("p",{children:"T\u1eadp phim"}),t.episode.length<2?Object(h.jsx)("button",{className:"film-view__episode__btn active",children:"FULL"}):t.episode.map((function(e,t){return Object(h.jsx)("button",{className:"film-view__episode__btn ".concat(o===e.episode?"active":""),onClick:function(){a(e.url),d(e.episode)},children:e.episode},t)}))]})]}):Object(h.jsx)(N,{children:Object(h.jsx)(g,{children:"Phim kh\xf4ng kh\u1ea3 d\u1ee5ng"})})},y=function(e){var t=e.col?"grid-col-".concat(e.col):"",c={gap:e.gap?"".concat(e.gap,"rem"):"0"},i=e.mdCol?"grid-col-md-".concat(e.mdCol):"",n=e.smCol?"grid-col-sm-".concat(e.smCol):"",s=e.smCol?"grid-col-xs-".concat(e.xsCol):"";return Object(h.jsx)("div",{className:"grid ".concat(t," ").concat(i," ").concat(n," ").concat(s),style:c,children:e.children})},k=function(e){var t=e.data;return Object(h.jsx)(r.b,{to:"/phim/".concat(t.title),children:Object(h.jsxs)("div",{className:"film-card",children:[Object(h.jsx)("img",{className:"film-card__image",src:t.imageUrl,alt:""}),Object(h.jsx)("div",{className:"film-card__contain",children:Object(h.jsx)("h3",{className:"film-card__contain__title",children:t.title})})]})})},P=function(e){var t=Object(i.useContext)(v).listFilms,c=function(e){return t.find((function(t){return t.title===e}))}(Object(o.g)().title),n=function(e,t){var c=t.length-e,i=Math.floor(Math.random()*(c-0)+0);return t.slice(i,i+e)};return Object(i.useEffect)((function(){window.scrollTo(0,0)}),n(8,t)),Object(h.jsxs)(O,{title:c.title,children:[Object(h.jsx)(w,{data:c}),Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"C\xf3 th\u1ec3 b\u1ea1n c\u0169ng th\xedch"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:n(8,t).map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]})]})},T=function(e){var t=e.animate?"btn-animate":"";return Object(h.jsxs)("button",{className:"btn ".concat(t),onClick:e.onClick?function(){return e.onClick()}:null,children:[Object(h.jsx)("span",{className:"btn__txt",children:e.children}),e.icon?Object(h.jsx)("span",{className:"btn__icon",children:Object(h.jsx)("i",{className:"".concat(e.icon)})}):null]})},L=function(e){return Object(h.jsxs)("div",{className:"hero-slider__item ".concat(e.active?"active":""),children:[Object(h.jsx)("div",{className:"hero-slider__item__info",children:Object(h.jsxs)("div",{className:"hero-slider__item__info__container",children:[Object(h.jsx)("h1",{className:"hero-slider__item__info__container__title",children:e.item.title}),Object(h.jsx)(r.b,{to:"/phim/".concat(e.item.title),children:Object(h.jsx)(T,{animate:!0,icon:"far fa-play-circle",children:"Xem phim"})})]})}),Object(h.jsx)("div",{className:"hero-slider__item__image",children:Object(h.jsx)("img",{src:e.item.imageUrl,alt:""})})]})},F=function(e){var t=e.data,c=Object(i.useState)(0),n=Object(j.a)(c,2),s=n[0],a=n[1],l=Object(i.useCallback)((function(){var e=s+1===t.length?0:s+1;a(e)}),[s,t]);return Object(i.useEffect)((function(){var e=setInterval((function(){l()}),5e3);return function(){clearInterval(e)}}),[l]),Object(h.jsxs)("div",{className:"hero-slider",children:[t.map((function(e,t){return Object(h.jsx)(L,{item:e,active:t===s},t)})),Object(h.jsx)("div",{className:"hero-slider__prev",onClick:function(){var e=s-1<0?t.length-1:s-1;a(e)},children:Object(h.jsx)("i",{className:"fas fa-chevron-left"})}),Object(h.jsx)("div",{className:"hero-slider__next",onClick:l,children:Object(h.jsx)("i",{className:"fas fa-chevron-right"})})]})},S=c(32).default,M=[{category:"Phim t\xecnh c\u1ea3m",episode:[{episode:"",url:"https://em.iq.com/player.html?id=10818unqfk8&lid=23&lang=vi_vn&mod=vn&ad_config=1",type:"iframe"}],imageUrl:c(33).default,title:"Jos\xe9e, N\xe0ng Th\u01a1 C\u1ee7a T\xf4i - Josee (2020)",url:"https://www.ssphim.net/p/xem-phim-josee-nang-tho-cua-toi-josee-2020"},{category:"Phim h\xe0nh \u0111\u1ed9ng",episode:[{url:"https://streamtape.com/e/AKM82eW0wMUXdY3/",type:"iframe"}],imageUrl:c(34).default,title:"Train To Busan 2: B\xe1n \u0110\u1ea3o Peninsula",url:"https://www.ssphim.net/p/xem-phim-train-to-busan-2-ban-dao-peninsula"},{category:"Phim t\xecnh c\u1ea3m",episode:[{url:"https://ok.ru/videoembed/2485419510510",type:"iframe"}],imageUrl:S,title:"Em C\u1ee7a Th\u1eddi Ni\xean Thi\u1ebfu - Better Days",url:"https://www.ssphim.net/p/xem-phim-em-cua-thoi-nien-thieu-better-days"}],E=function(){var e=Object(i.useContext)(v).films,t=function(e,t){var c=t.length-e,i=Math.floor(Math.random()*(c-0)+0);return t.slice(i,i+e)};return Object(h.jsxs)(O,{title:"Trang ch\u1ee7",children:[Object(h.jsx)(F,{data:M}),Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"Phim hay"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:t(12,e.phimchieurap).map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]}),Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"Phim b\u1ed9"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:t(12,e.phimbo).map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]}),Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"Phim ho\u1ea1t h\xecnh"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:t(12,e.phimhoathinh).map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]})]})},U=function(){var e=Object(i.useContext)(v).films;return Object(h.jsx)(O,{title:"Phim b\u1ed9",children:Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"Phim b\u1ed9"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:e.phimbo.map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]})})},J=function(){var e=Object(i.useContext)(v).films;return Object(h.jsx)(O,{title:"Phim ho\u1ea1t h\xecnh",children:Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"Phim ho\u1ea1t h\xecnh"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:e.phimhoathinh.map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]})})},q=function(){var e=Object(i.useContext)(v).films;return Object(h.jsx)(O,{title:"Phim chi\u1ebfu r\u1ea1p",children:Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"Phim chi\u1ebfu r\u1ea1p"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:e.phimchieurap.map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]})})},B=function(){var e=Object(i.useContext)(v).films;return Object(h.jsx)(O,{title:"Phim l\u1ebb",children:Object(h.jsxs)(N,{children:[Object(h.jsx)(g,{children:"Phim l\u1ebb"}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:e.phimle.map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]})})},I=function(){var e=Object(i.useContext)(v).listFilms,t=Object(o.g)().ten;return Object(h.jsx)(O,{title:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm",children:Object(h.jsxs)(N,{children:[Object(h.jsxs)(g,{children:['K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm "',t,'"']}),Object(h.jsx)(C,{children:Object(h.jsx)(y,{col:4,mdCol:3,smCol:2,xsCol:1,gap:2,children:e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).map((function(e,t){return Object(h.jsx)(k,{data:e},t)}))})})]})})},A=function(){return Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:E}),Object(h.jsx)(o.a,{path:"/phimbo",component:U}),Object(h.jsx)(o.a,{path:"/phimle",component:B}),Object(h.jsx)(o.a,{path:"/phimchieurap",component:q}),Object(h.jsx)(o.a,{path:"/phimhoathinh",component:J}),Object(h.jsx)(o.a,{path:"/timkiem/:ten",component:I}),Object(h.jsx)(o.a,{path:"/phim/:title",component:P})]})},R=function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("div",{className:"footer__logo",children:Object(h.jsx)("span",{children:"Melon."})}),Object(h.jsx)("div",{className:"footer__copyright",children:Object(h.jsxs)("span",{children:["All rights reserved \xa9 ",(new Date).getFullYear()," "]})}),Object(h.jsxs)("div",{className:"footer__icon",children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fab fa-instagram"})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fab fa-facebook"})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fab fa-youtube"})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fab fa-twitter"})})]})]})},D=function(){var e=Object(i.useContext)(v).isLoading,t=Object(i.useRef)(null);window.onscroll=function(){window.scrollY>80?t.current.classList.add("active"):t.current.classList.remove("active")};var c=function(){window.scrollTo(0,0)};return e?Object(h.jsx)("div",{className:"loader",children:Object(h.jsxs)("div",{className:"lds-facebook",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})}):Object(h.jsx)(r.a,{children:Object(h.jsx)(o.a,{render:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{className:"main",children:Object(h.jsx)(A,{})}),Object(h.jsx)("div",{className:"scroll-to-top",ref:t,onClick:c,children:Object(h.jsx)("i",{className:"fas fa-chevron-up"})}),Object(h.jsx)(R,{})]})}})})};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(_,{children:Object(h.jsx)(D,{})})}),document.getElementById("root")),l()}},[[35,1,2]]]);
//# sourceMappingURL=main.502ff650.chunk.js.map