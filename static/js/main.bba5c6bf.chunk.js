(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={btn:"ContactForm_btn__U-P5A"}},11:function(t,e,n){t.exports={wrapper:"App_wrapper__Nkx8Z"}},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(18),n(19),n(12)),o=n(2),u=n(3),l=n(5),b=n(4),d=n(0);var h=function(t){var e=t.title,n=t.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:e}),n]})},j=n(9),m=n(10),p=n.n(m),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={number:"",name:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange})]}),Object(d.jsx)("button",{className:p.a.btn,children:"Add contact"})]})}}]),n}(a.Component),O=n(13),x=n(6),v=n.n(x);function g(t){var e=t.contacts,n=t.onDelete;return Object(d.jsx)("ol",{className:v.a.list,children:e.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:[Object(d.jsxs)("span",{className:v.a.text,children:[t.name,": ",t.number]}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:v.a.btn,children:"Delete"})]})},t.id)}))})}var C=function(t){var e=t.value,n=t.onChange;return Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",value:e,onChange:n})})},S=n(11),y=n.n(S),_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.some((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts."));else{var n={id:Object(O.a)(10),name:e.name,number:e.number};t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(d.jsxs)("div",{className:y.a.wrapper,children:[Object(d.jsx)(h,{title:"Phonebook",children:Object(d.jsx)(f,{onSubmit:this.formSubmitHandler})}),Object(d.jsxs)(h,{title:"Contacts",children:[Object(d.jsx)(C,{value:t,onChange:this.changeFilter}),Object(d.jsx)(g,{contacts:n,onDelete:this.deleteContact})]})]})}}]),n}(a.Component);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={list:"ContactList_list__2oNMs",text:"ContactList_text__1J3gW",btn:"ContactList_btn__3qIgK"}}},[[21,1,2]]]);
//# sourceMappingURL=main.bba5c6bf.chunk.js.map