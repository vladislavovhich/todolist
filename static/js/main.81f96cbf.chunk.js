(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{23:function(e,t,o){e.exports=o(42)},29:function(e,t,o){},30:function(e,t,o){},36:function(e,t,o){},39:function(e,t,o){},40:function(e,t,o){},42:function(e,t,o){"use strict";o.r(t);var n=o(13),a=o.n(n),c=o(0),i=o.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(28),o(29),o(30);var l=o(8),r=function(){return i.a.createElement("header",{className:"Header"},i.a.createElement("div",{className:"container h-100 d-flex align-items-center justify-content-center"},i.a.createElement("div",{className:"Logo d-flex flex-row align-items-center justify-content-center"},i.a.createElement("div",{className:"mr-1"},"TodoList"),i.a.createElement(l.a,{icon:"clipboard-list",fixedWidth:!0}))))},d=(o(36),o(6)),m=o(19),s=o(3),u={todoItems:[],todoItemDescription:"",todoItemTitle:"",editingTodoItemNumber:-1,hasEditingTodoItem:!1},E=function(e,t){return{type:"todo/ADD_TODO_ITEM",title:e,description:t}},f=function(e,t){return{type:"todo/SET_TODO_ITEM",title:e,description:t}},T=function(e){return{type:"todo/SET_TODO_ITEM_TITLE",value:e}},I=function(e){return{type:"todo/SET_TODO_ITEM_DESCRIPTION",value:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todo/ADD_TODO_ITEM":return Object(s.a)(Object(s.a)({},e),{},{todoItemTitle:"",todoItemDescription:"",todoItems:[].concat(Object(m.a)(e.todoItems),[{title:t.title,description:t.description,completed:!1}])});case"todo/TOGGLE_COMPLETED":return Object(s.a)(Object(s.a)({},e),{},{todoItems:e.todoItems.map((function(e,o){return o===t.index?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))});case"todo/REMOVE_TODO_ITEM":return Object(s.a)(Object(s.a)({},e),{},{todoItems:e.todoItems.filter((function(e,o){return o!==t.index}))});case"todo/SET_TODO_ITEM_DESCRIPTION":return Object(s.a)(Object(s.a)({},e),{},{todoItemDescription:t.value});case"todo/SET_TODO_ITEM_TITLE":return Object(s.a)(Object(s.a)({},e),{},{todoItemTitle:t.value});case"todo/SET_EDITING_TODO_NUMBER":return Object(s.a)(Object(s.a)({},e),{},{hasEditingTodoItem:!0,editingTodoItemNumber:t.index,todoItemDescription:e.todoItems[t.index].description,todoItemTitle:e.todoItems[t.index].title});case"todo/SET_TODO_ITEM":var o=Object(m.a)(e.todoItems);return o[e.editingTodoItemNumber]=Object(s.a)(Object(s.a)({},o[e.editingTodoItemNumber]),{},{title:t.title,description:t.description}),Object(s.a)(Object(s.a)({},e),{},{todoItems:o,editingTodoItemNumber:-1,hasEditingTodoItem:!1,todoItemTitle:"",todoItemDescription:""});default:return e}},_=function(e){return{type:"todo/TOGGLE_COMPLETED",index:e}},p=function(e){return{type:"todo/REMOVE_TODO_ITEM",index:e}},b=function(e){return{type:"todo/SET_EDITING_TODO_NUMBER",index:e}},v=function(e){var t=Object(d.b)(),o=Object(d.c)((function(e){return e.todoPage.hasEditingTodoItem})),n=function(){t(_(e.index))};return i.a.createElement("div",{className:"TodoItem col-12 col-xl-6 col-lg-8 col-md-9 col-sm-10 col-xs-11"},i.a.createElement("div",{className:"d-flex flex-column"},i.a.createElement("div",{className:"TodoItem__top d-flex flex-row justify-content-between"},i.a.createElement("div",{className:"TodoItem__title"},e.title),i.a.createElement("div",{className:"TodoItem__editing d-flex flex-row"},i.a.createElement("button",{onClick:function(){t(b(e.index))},disabled:o},i.a.createElement(l.a,{icon:"cog",fixedWidth:!0})),i.a.createElement("button",{className:"ml-2",onClick:function(){confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443?")&&t(p(e.index))},disabled:o},i.a.createElement(l.a,{icon:"trash-alt",fixedWidth:!0})))),i.a.createElement("div",{className:"TodoItem__mid"},i.a.createElement("div",{className:"TodoItem__description"},e.description)),i.a.createElement("div",{className:"TodoItem__bottom align-self-start"},i.a.createElement("div",{className:"TodoItem__status d-flex flex-row"},e.completed?i.a.createElement("div",{className:"TodoItem__completed d-flex flex-row align-items-center",onClick:n},i.a.createElement("div",{className:"mr-1"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430"),i.a.createElement(l.a,{icon:"check-square"})):i.a.createElement("div",{className:"TodoItem__uncompleted d-flex flex-row align-items-center",onClick:n},i.a.createElement("div",{className:"mr-1"},"\u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430"),i.a.createElement(l.a,{icon:"times-circle"}))))))},x=(o(39),function(e){var t=Object(d.c)((function(e){return e.todoPage.todoItems}));return i.a.createElement("div",{className:"TodoItemsPane d-flex flex-column mt-3"},i.a.createElement("div",{className:"d-flex flex-column align-items-center"},t.map((function(e,t){return i.a.createElement(v,{title:e.title,description:e.description,completed:e.completed,index:t,key:t})}))))}),g=(o(40),E),N=I,j=T,h=f,D=function(e){var t=Object(d.b)(),o=Object(d.c)((function(e){return e.todoPage.todoItemTitle})),n=Object(d.c)((function(e){return e.todoPage.todoItemDescription})),a=Object(d.c)((function(e){return e.todoPage.hasEditingTodoItem}));return i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("div",{className:"col-12 col-xl-6 col-lg-8 col-md-9 col-sm-10 col-xs-11"},i.a.createElement("div",{className:"TodoItemAddPane d-flex flex-column align-items-center"},i.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",className:"TodoItemAddPane__title",autoFocus:!0,value:o,onChange:function(e){t(j(e.target.value))}}),i.a.createElement("textarea",{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",className:"TodoItemAddPane__description mt-2",rows:3,value:n,onChange:function(e){t(N(e.target.value))}}),i.a.createElement("input",{type:"button",value:a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"TodoItemAddPane__addBtn mt-2",onClick:a?function(){t(h(o,n))}:function(){n.trim()&&o.trim()?t(g(o,n)):alert("\u0412\u044b \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u043b\u0438 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f!")}}))))},w=function(e){return i.a.createElement("div",{className:"TodoPanel d-flex flex-column"},i.a.createElement(D,null),i.a.createElement(x,null))},y=function(e){return i.a.createElement("main",{className:"Main py-3"},i.a.createElement("div",{className:"container"},i.a.createElement(w,null)))},M=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r,null),i.a.createElement(y,null))},P=o(12),k=Object(P.b)({todoPage:O}),C=Object(P.c)(k);window.store=C;var S=C,L=o(10),A=o(7),G=o(22);L.b.add(A.e,A.a,A.b,A.c,A.g,A.f,A.d),a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(G.a,null,i.a.createElement(d.a,{store:S},i.a.createElement(M,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.81f96cbf.chunk.js.map