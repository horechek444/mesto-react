(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo.2b1f7ee5.svg"},14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(19),a(13)),u=a(6),p=a.n(u),s=a(9),l=a(1),_=a(10),m=a.n(_);var d=function(){return o.a.createElement("header",{className:"header page__header"},o.a.createElement("a",{className:"logo header__logo opacity",href:"../../public/index.html"},o.a.createElement("img",{className:"logo__image",src:m.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u041c\u0435\u0441\u0442\u043e"})))},f=o.a.createContext(),b=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,c=e.onCardDelete,r=o.a.useContext(f),i=t.owner._id===r._id,u=t.likes.some((function(e){return e._id===r._id}));return o.a.createElement("li",{className:"pictures__item"},o.a.createElement("button",{className:"".concat(i?"button pictures__delete pictures__delete_show opacity":"button pictures__delete opacity"),type:"button",onClick:function(){c(t)}}),o.a.createElement("img",{className:"pictures__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),o.a.createElement("div",{className:"pictures__cover"},o.a.createElement("p",{className:"pictures__title"},t.name),o.a.createElement("div",{className:"pictures__like-cover"},o.a.createElement("button",{className:"".concat(u?"button pictures__like pictures__like_active opacity":"button pictures__like opacity"),type:"button",onClick:function(){n(t)}}),o.a.createElement("span",{className:"pictures__like-counter"},t.likes.length))))},h=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,c=e.onCardClick,r=e.onCardLike,i=e.onCardDelete,u=e.cards,p=o.a.useContext(f);return o.a.createElement("main",{className:"content page__content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__cover"},o.a.createElement("div",{className:"avatar profile__avatar",onClick:t,style:{backgroundImage:"url(".concat(p.avatar,")")}}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__position"},o.a.createElement("h1",{className:"profile__title"},p.name),o.a.createElement("button",{className:"button button_edit profile__button opacity",type:"button",onClick:a})),o.a.createElement("p",{className:"profile__subtitle"},p.about))),o.a.createElement("button",{className:"button button_add opacity",type:"button",onClick:n})),o.a.createElement("section",{className:"pictures"},o.a.createElement("ul",{className:"pictures__list"},u.map((function(e){return o.a.createElement(b,{key:e._id,onCardClick:c,card:e,onCardLike:r,onCardDelete:i})})))))};var v=function(){return o.a.createElement("footer",{className:"footer page__footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},E=function(e){var t=e.name,a=e.isOpen,n=e.onClose,c=e.title,r=e.children,i=e.onSubmit;return o.a.createElement("section",{className:"".concat(a?"popup popup_type_".concat(t," popup_opened"):"popup popup_type_".concat(t)),onMouseUp:function(e){e.target===e.currentTarget&&a&&n()}},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"button popup__close opacity",type:"button",onClick:n}),o.a.createElement("h2",{className:"popup__title"},c),o.a.createElement("form",{className:"popup__form form_type_".concat(t),action:"#",name:"".concat(t),onSubmit:i,noValidate:!0},r)))},y=a(3),g=a(2),k=function(e){var t=function(t){return e.reduce((function(e,a){return e[a]=t,e}),{})},a=o.a.useState(t(!1)),n=Object(l.a)(a,2),c=n[0],r=n[1],i=o.a.useState(t("")),u=Object(l.a)(i,2),p=u[0],s=u[1],_=o.a.useState(t("")),m=Object(l.a)(_,2),d=m[0],f=m[1];return{isValid:c,setIsValid:r,inputValue:p,setInputValue:s,validationMessage:d,setValidationMessage:f,handleInputChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(g.a)(Object(g.a)({},p),{},Object(y.a)({},a,n))),r(Object(g.a)(Object(g.a)({},c),{},Object(y.a)({},a,e.target.validity.valid))),f(Object(g.a)(Object(g.a)({},d),{},Object(y.a)({},a,e.target.validationMessage)))},fieldsEnumeration:t}},C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,c=e.isLoading,r=k(["name","about"]),i=r.isValid,u=r.setIsValid,p=r.inputValue,s=r.setInputValue,l=r.validationMessage,_=r.setValidationMessage,m=r.handleInputChange,d=r.fieldsEnumeration,b=o.a.useContext(f);return o.a.useEffect((function(){s({name:b.name||"",about:b.about||""}),u(d(!0)),_(d(""))}),[b,t,s,u,_]),o.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:p.name,about:p.about})}},o.a.createElement("div",{className:"popup__cover"},o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{className:"".concat(l.name?"popup__input popup__input_type_name popup__input_type_error":"popup__input popup__input_type_name"),type:"text",name:"name",value:p.name,onChange:m,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"20",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]+$",required:!0}),o.a.createElement("span",{className:"".concat(i.name?"popup__error":"popup__error popup__error_type_active")},l.name)),o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{className:"".concat(l.about?"popup__input popup__input_type_about popup__input_type_error":"popup__input popup__input_type_about"),type:"text",name:"about",value:p.about,onChange:m,placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",minLength:"2",maxLength:"200",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]+$",required:!0}),o.a.createElement("span",{className:"".concat(i.about?"popup__error":"popup__error popup__error_type_active")},l.about))),o.a.createElement("input",{className:"".concat(i.name&&i.about?"button popup__submit":"button popup__submit popup__submit_type_disabled"),type:"submit",value:"".concat(c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"}))},N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,c=e.isLoading,r=k(["avatar"]),i=r.isValid,u=r.setIsValid,p=r.inputValue,s=r.setInputValue,l=r.validationMessage,_=r.setValidationMessage,m=r.handleInputChange,d=r.fieldsEnumeration,f=o.a.useRef(null);return o.a.useEffect((function(){s(d("")),u(d(!1)),_(d(""))}),[t,s,u,_]),o.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:f.current.value})}},o.a.createElement("div",{className:"popup__cover popup__cover_type_avatar"},o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{ref:f,className:"".concat(l.avatar?"popup__input popup__input_type_avatar popup__input_type_error":"popup__input popup__input_type_avatar"),type:"url",name:"avatar",value:p.avatar,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:m,required:!0}),o.a.createElement("span",{className:"".concat(i.avatar?"popup__error":"popup__error popup__error_type_active")},l.avatar))),o.a.createElement("input",{className:"".concat(i.avatar?"button popup__submit":"button popup__submit popup__submit_type_disabled"),type:"submit",value:"".concat(c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"}))},O=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,c=e.isLoading,r=k(["name","link"]),i=r.isValid,u=r.setIsValid,p=r.inputValue,s=r.setInputValue,l=r.validationMessage,_=r.setValidationMessage,m=r.handleInputChange,d=r.fieldsEnumeration;return o.a.useEffect((function(){s(d("")),u(d(!1)),_(d(""))}),[t,s,u,_]),o.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:p.name,link:p.link})}},o.a.createElement("div",{className:"popup__cover"},o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{className:"".concat(l.name?"popup__input popup__input_type_title popup__input_type_error":"popup__input popup__input_type_title"),type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]+$",required:!0,value:p.name,onChange:m}),o.a.createElement("span",{className:"".concat(i.name?"popup__error":"popup__error popup__error_type_active")},l.name)),o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{className:"".concat(l.link?"popup__input popup__input_type_link popup__input_type_error":"popup__input popup__input_type_link"),type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:p.link,onChange:m}),o.a.createElement("span",{className:"".concat(i.link?"popup__error":"popup__error popup__error_type_active")},l.link))),o.a.createElement("input",{className:"".concat(i.link&&i.name?"button popup__submit":"button popup__submit popup__submit_type_disabled"),type:"submit",value:"".concat(c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"}))},j=function(e){var t=e.card,a=e.onClose,n=e.isOpen,c=e.onCardDelete,r=e.isLoading;return o.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"prevent",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),c(t)}},o.a.createElement("input",{className:"button popup__submit",type:"submit",name:"submit",value:"".concat(r?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430")}))},U=function(e){var t=e.card,a=e.isOpen,n=e.onClose;return o.a.createElement("section",{className:"".concat(a?"popup popup_type_picture popup_opened":"popup popup_type_picture"),onMouseUp:function(e){e.target===e.currentTarget&&n()}},o.a.createElement("div",{className:"popup__container popup__container_type_picture"},o.a.createElement("button",{className:"button popup__close opacity",type:"button",onClick:n}),o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("img",{className:"popup__image",src:t.link,alt:t.name}),o.a.createElement("figcaption",{className:"popup__caption"},t.name))))},S=a(11),L=a(12),V=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(S.a)(this,e),this.baseUrl=a,this.headers=n}return Object(L.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"createCard",value:function(e){return fetch("".concat(this.baseUrl,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"dislikeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setAvatar",value:function(e){return fetch("".concat(this.baseUrl,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14/",headers:{authorization:"015c5709-d89c-4f94-866c-ab8c6888fc92","Content-Type":"application/json"}}),P=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=o.a.useState(!1),r=Object(l.a)(c,2),u=r[0],_=r[1],m=o.a.useState(!1),b=Object(l.a)(m,2),E=b[0],y=b[1],g=o.a.useState(!1),k=Object(l.a)(g,2),S=k[0],L=k[1],P=o.a.useState(!1),I=Object(l.a)(P,2),x=I[0],A=I[1],D=o.a.useState(!1),M=Object(l.a)(D,2),w=M[0],T=M[1],q=o.a.useState([]),J=Object(l.a)(q,2),z=J[0],Z=J[1],$=o.a.useState([]),H=Object(l.a)($,2),R=H[0],B=H[1],F=o.a.useState(!1),G=Object(l.a)(F,2),K=G[0],Q=G[1],W=function(){var e=Object(s.a)(p.a.mark((function e(){var t,a,n,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([V.getUserInfo(),V.getCards()]);case 3:t=e.sent,a=Object(l.a)(t,2),n=a[0],o=a[1],B(o),Z(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();o.a.useEffect((function(){W()}),[]);var X=function(){n(!1),_(!1),y(!1),L(!1),T(!1),A(!1)},Y=function(e){"Escape"===e.key&&X()};o.a.useEffect((function(){return document.addEventListener("keydown",Y,!1),function(){document.removeEventListener("keydown",Y,!1)}}));return o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__cover"},o.a.createElement(f.Provider,{value:z},o.a.createElement(d,null),o.a.createElement(h,{onEditAvatar:function(){n(!0)},onEditProfile:function(){_(!0)},onAddPlace:function(){y(!0)},onCardClick:function(e){A(!0),T(e)},onCardLike:function(e){(e.likes.some((function(e){return e._id===z._id}))?V.dislikeCard(e._id):V.likeCard(e._id)).then((function(t){var a=R.map((function(a){return a._id===e._id?t:a}));B(a)})).catch((function(e){console.log("".concat(e))}))},onCardDelete:function(e){L(!0),T(e)},cards:R}),o.a.createElement(v,null),o.a.createElement(C,{isOpen:u,onClose:X,onUpdateUser:function(e){Q(!0),V.setUserInfo(e).then((function(e){Z(e),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(O,{isOpen:E,onClose:X,onAddPlace:function(e){Q(!0),V.createCard(e).then((function(e){B([].concat(Object(i.a)(R),[e])),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(N,{isOpen:a,onClose:X,onUpdateAvatar:function(e){Q(!0),V.setAvatar(e).then((function(e){Z(e),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(j,{isOpen:S,onClose:X,card:w,onCardDelete:function(e){Q(!0),V.deleteCard(e._id).then((function(){var t=R.filter((function(t){return t._id!==e._id}));B(t),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(U,{isOpen:x,onClose:X,card:w}))))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ff644e39.chunk.js.map