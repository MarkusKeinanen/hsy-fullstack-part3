(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),u=t.n(c),o=t(4),i=t(2),l=t(3),s=t.n(l),m="/api/persons",d=function(){return s.a.get(m).then((function(e){return e.data}))},f=function(e){return s.a.post(m,e).then((function(e){return e.data}))},b=function(e){return s.a.delete(m+"/".concat(e)).then((function(e){return e.data}))},v=function(e,n){return s.a.put(m+"/".concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.message,t=e.classString;return null===n?null:r.a.createElement("div",{className:"notification ".concat(t)},n)},p=function(e){var n=e.filter,t=e.setFilter;return r.a.createElement(r.a.Fragment,null,"filter shown with",r.a.createElement("input",{value:n,onChange:function(e){return t(e.currentTarget.value)}}))},h=function(e){var n=e.newName,t=e.setNewName,a=e.newNumber,c=e.setNewNumber,u=e.addPerson;return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:n,onChange:function(e){return t(e.currentTarget.value)}}),r.a.createElement("br",null),"number:",r.a.createElement("input",{value:a,onChange:function(e){return c(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.persons,t=e.filter,a=e.deletePerson;return n.filter((function(e){var n=t.toLowerCase();return e.name.toLowerCase().includes(n)||e.number.toLowerCase().includes(n)})).map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("p",{style:{display:"inline-block"}},e.name," ",e.number),r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))}))},E=function(){var e=Object(a.useState)(null),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),s=l[0],m=l[1],E=Object(a.useState)(""),N=Object(i.a)(E,2),j=N[0],O=N[1],S=Object(a.useState)(""),y=Object(i.a)(S,2),C=y[0],k=y[1],P=Object(a.useState)({visible:!1,message:"",classString:"success"}),L=Object(i.a)(P,2),F=L[0],T=L[1];Object(a.useEffect)((function(){d().then((function(e){c(e)}))}),[]);var A=function(e){T(Object(o.a)(Object(o.a)({},e),{},{visible:!0})),setTimeout((function(){T({visible:!1})}),5e3)};return null===t?"Loading data...":r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),F.visible&&r.a.createElement(w,F),r.a.createElement(p,{filter:s,setFilter:m}),r.a.createElement("h2",null,"Add a new number"),r.a.createElement(h,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===j.toLowerCase()}));if(void 0===n||window.confirm("".concat(j," is already added to phonebook, do you want to replace the old number with a new one?"))){var a={name:j,number:C};n?v(n.id,a).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e}))),A({message:"Number updated: ".concat(e.name," ").concat(e.number),classString:"success"})})).catch((function(e){A({message:"Failed to update - ".concat(a.name," was not found on server"),classString:"error"})})):f(a).then((function(e){c(t.concat(e)),A({message:"Person added: ".concat(e.name," ").concat(e.number),classString:"success"})}))}},newName:j,setNewName:O,newNumber:C,setNewNumber:k}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{persons:t,filter:s,deletePerson:function(e){window.confirm("Are you sure you want to delete person ".concat(e.name," ").concat(e.number,"?"))&&b(e.id).then((function(){var n=t.filter((function(n){return n.id!==e.id}));c(n),A({message:"Person ".concat(e.name," was deleted."),classString:"success"})})).catch((function(n){A({message:"Failed to delete - ".concat(e.name," was not found on server"),classString:"error"})}))}}))};t(37);u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c2ed1595.chunk.js.map