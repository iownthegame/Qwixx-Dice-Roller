(this["webpackJsonpqwixx-dice-roller"]=this["webpackJsonpqwixx-dice-roller"]||[]).push([[0],{12:function(e,i,c){},16:function(e,i,c){},17:function(e,i,c){"use strict";c.r(i);var t=c(0),n=c(1),r=c.n(n),l=c(5),o=c.n(l),d=(c(12),c(4)),a=c(6),s=c(3),f=c.n(s),b=(c(15),c(16),[{id:1,color:"#d13545",disable:!1},{id:2,color:"#f4c34f",disable:!1},{id:3,color:"#5fa645",disable:!1},{id:4,color:"#3263a7",disable:!1},{id:5,color:"#f6f5f1",disable:!1},{id:6,color:"#f6f5f1",disable:!1}]),u=function(e){var i=e.dice,c=e.diceRef,n=e.toggleDiceDisable,r=i.id,l=i.color;return!i.disable&&Object(t.jsx)("div",{className:"my-dice",onClick:function(){return n(i)},children:Object(t.jsx)(f.a,{numDice:1,faceColor:l,dotColor:"#f6f5f1"===l?"black":"#f6f5f1",ref:function(e){return c.current[r-1]=e},disableIndividual:!0})})},j=function(e){var i=e.dices,c=e.diceRef,n=e.toggleDiceDisable;return Object(t.jsx)("div",{children:i.map((function(e){return Object(t.jsx)(u,{dice:e,diceRef:c,toggleDiceDisable:n},e.id)}))})},x=function(e){var i=e.diceRef,c=e.dices;return Object(t.jsx)("button",{id:"roll-button",onClick:function(){c.forEach((function(e,c){e.disable||i.current[c].rollAll()}))},children:"Gooi"})},O=function(e){var i=e.dices,c=e.toggleDiceDisable,n=i.filter((function(e){return e.disable}));return n.length>0&&Object(t.jsx)("div",{id:"trash-can",children:n.map((function(e){return Object(t.jsx)("div",{className:"trash-dice",onClick:function(){return c(e)},children:Object(t.jsx)(f.a,{numDice:1,faceColor:e.color,dotColor:"#f6f5f1"===e.color?"black":"#f6f5f1",disableIndividual:!0,rollTime:0,dieSize:30})})}))})};var h=function(){var e=Object(n.useState)(b),i=Object(a.a)(e,2),c=i[0],r=i[1],l=Object(n.useRef)([]),o=function(e){r(c.map((function(i){return i.id===e.id?Object(d.a)(Object(d.a)({},i),{},{disable:!i.disable}):i})))};return Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)("header",{className:"App-header",children:[Object(t.jsx)("p",{children:"Qwixx Dice Roller"}),Object(t.jsx)(j,{dices:c,diceRef:l,toggleDiceDisable:o}),Object(t.jsx)(x,{diceRef:l,dices:c}),Object(t.jsx)(O,{dices:c,toggleDiceDisable:o})]})})};o.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.67a9c3e3.chunk.js.map