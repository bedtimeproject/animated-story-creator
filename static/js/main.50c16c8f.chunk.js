(this["webpackJsonpanimated-story-creator"]=this["webpackJsonpanimated-story-creator"]||[]).push([[0],{24:function(n,t,a){},43:function(n,t,a){},45:function(n,t,a){},46:function(n,t,a){},47:function(n,t,a){},48:function(n,t,a){},52:function(n,t,a){},53:function(n,t,a){},54:function(n,t,a){"use strict";a.r(t);var e=a(1),c=a.n(e),o=a(13),i=a.n(o),s=(a(24),a(7)),r=a(17);a(43);function l(n){return"#"===n.slice(0,1)&&(n=n.slice(1)),3===n.length&&(n=n.split("").map((function(n){return n+n})).join("")),(299*parseInt(n.substr(0,2),16)+587*parseInt(n.substr(2,2),16)+114*parseInt(n.substr(4,2),16))/1e3>=128?"black":"white"}var d=a(0);function p(n){var t=n.children,a=n.background,e=n.index,c=100/(n.stanzaCount+2);return Object(d.jsxs)("div",{children:[Object(d.jsx)("style",{children:"\n        #stanza".concat(e," {\n          animation-name: stanza").concat(e,";\n          animation-duration: 1s;\n          animation-timing-function: ease-in-out;\n        }\n\n        @keyframes stanza").concat(e," {\n          0% {\n            top: 100vh;\n          }\n          ").concat(e>0?"".concat((e-.5)*c,"% {\n              top: 100vh;\n            }"):"","\n          ").concat(e*c,"% {\n            top: 34vh;\n          }\n          ").concat((e+.5)*c,"% {\n            top: 34vh;\n          }\n          ").concat((e+1)*c,"% {\n            top: -100vh;\n          }\n          100% {\n            top: -100%;\n          }\n        }\n      ")}),Object(d.jsx)("div",{id:"stanza"+e,className:"ScrollAnimation-Stanza-Container",style:{backgroundColor:a,color:l(a)},children:t})]})}a(45);function u(n,t,a,e){return"@keyframes stanza".concat(n,"fade").concat(t," {\n    0% {\n      opacity: 0;\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0;\n    }\n  }")}function j(n,t,a,e){return"@keyframes stanza".concat(n,"slidedown").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateY(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateY(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateY(50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateY(150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateY(200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateY(200px);\n    }\n  }")}function b(n,t,a,e){return"@keyframes stanza".concat(n,"slideup").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateY(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateY(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateY(-50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateY(-150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateY(-200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateY(-200px);\n    }\n  }")}function m(n,t,a,e){return"@keyframes stanza".concat(n,"slideleft").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateX(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateX(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateX(-50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateX(-150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateX(-200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(-200px);\n    }\n  }")}function h(n,t,a,e){return"@keyframes stanza".concat(n,"slideright").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateX(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateX(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateX(50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateX(150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateX(200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(200px);\n    }\n  }")}function x(n,t,a,e){return"@keyframes stanza".concat(n,"slidedownleft").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateX(0) translateY(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateX(0) translateY(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateX(-50px) translateY(50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateX(-150px) translateY(150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateX(-200px) translateY(200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(-200px) translateY(200px);\n    }\n  }")}function f(n,t,a,e){return"@keyframes stanza".concat(n,"slidedownright").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateX(0) translateY(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateX(0) translateY(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateX(50px) translateY(50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateX(150px) translateY(150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateX(200px) translateY(200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(200px) translateY(200px);\n    }\n  }")}function g(n,t,a,e){return"@keyframes stanza".concat(n,"slideupleft").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateX(0) translateY(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateX(0) translateY(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateX(-50px) translateY(-50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateX(-150px) translateY(-150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateX(-200px) translateY(-200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(-200px) translateY(-200px);\n    }\n  }")}function O(n,t,a,e){return"@keyframes stanza".concat(n,"slideupright").concat(t," {\n    0% {\n      opacity: 0;\n      transform: translateX(0) translateY(0);\n    }\n    ").concat(n>0?"".concat((n-.5)*e,"% {\n        opacity: 0;\n        transform: translateX(0) translateY(0);\n      }"):"","\n    ").concat(n*e,"% {\n      opacity: 1;\n      transform: translateX(50px) translateY(-50px);\n    }\n    ").concat((n+.5*a)*e,"% {\n      opacity: 1;\n      transform: translateX(150px) translateY(-150px);\n    }\n    ").concat((n+1*a)*e,"% {\n      opacity: 0;\n      transform: translateX(200px) translateY(-200px);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(200px) translateY(-200px);\n    }\n  }")}var y=a.p+"static/media/AlaskaFlag.7e7b0af5.svg",v=a.p+"static/media/CaliforniaFlag.43c77053.svg",k=a.p+"static/media/CitySkyline.3adf5732.svg",C=a.p+"static/media/Corn.ee3a958f.svg",z=a.p+"static/media/Grass.aca7e4d2.svg",S=a.p+"static/media/Surfboard.9b7fcbfe.svg",w=a.p+"static/media/Swimsuit.5a1ae745.svg",X=a.p+"static/media/Umbrella.8a69f215.svg",Y=a.p+"static/media/WaveOutline.afcbc1c9.svg",B=a.p+"static/media/BlueFlowers.835c7e42.svg",F=a.p+"static/media/CaveEntrance.79821ad1.svg",N=a.p+"static/media/CherryPie.5cb58bd8.svg",A=a.p+"static/media/Constellation1.af64ddd2.svg",M=a.p+"static/media/BlueKite.7fc7089e.svg",D=a.p+"static/media/Ramen.2873e3b9.svg",P=a.p+"static/media/Town.d82e6146.svg",I=a.p+"static/media/Treasure.14ad7938.svg",T=a.p+"static/media/Mountain.14b161b9.svg",E=a.p+"static/media/Sun.9a0bbc72.svg",L=a.p+"static/media/ActionBox.abbb1e96.svg",R=a.p+"static/media/Bed.9577669f.svg",U=a.p+"static/media/Constellation2.b9083cbe.svg",W=a.p+"static/media/Constellation3.de858f71.svg",H=a.p+"static/media/FullMoon.b1438497.svg",G=a.p+"static/media/Mountains.34c12af4.svg",q=a.p+"static/media/MountEverest.89cbb7f2.svg",J=a.p+"static/media/MusicNotes.6b696369.svg",K=a.p+"static/media/Oak.670a17e9.svg",V=a.p+"static/media/Penny.cf8190a2.svg",Q=a.p+"static/media/PinkPoodle.e574ece7.svg",Z=a.p+"static/media/Shrub1.8a8c754f.svg",$=a.p+"static/media/Shrub2.61269abb.svg";function _(n){var t=n.children,a=n.index,e=n.imageIndex,c=n.stanzaCount,o=n.animation,i=void 0===o?"fade":o,s=n.positionX,r=n.positionY,l=n.stanzaDuration,p=100/(c+2);return Object(d.jsxs)("div",{children:[Object(d.jsx)("style",{children:"\n        #stanza".concat(a,"Image").concat(e," {\n          animation-name: stanza").concat(a).concat(i).concat(e,";\n          animation-duration: 1s;\n          animation-timing-function: ease-in-out;\n        }\n\n        #stanza").concat(a,"Image").concat(e," img {\n          height: 250px;\n        }\n\n        ").concat("fade"===i?u(a,e,l,p):"","\n\n        ").concat("slidedown"===i?j(a,e,l,p):"","\n\n        ").concat("slideup"===i?b(a,e,l,p):"","\n\n        ").concat("slideleft"===i?m(a,e,l,p):"","\n\n        ").concat("slideright"===i?h(a,e,l,p):"","\n\n        ").concat("slidedownleft"===i?x(a,e,l,p):"","\n\n        ").concat("slidedownright"===i?f(a,e,l,p):"","\n\n        ").concat("slideupleft"===i?g(a,e,l,p):"","\n\n        ").concat("slideupright"===i?O(a,e,l,p):"","\n      ")}),Object(d.jsx)("div",{id:"stanza".concat(a,"Image").concat(e),className:"ScrollAnimation-StanzaImage-Container",style:{right:{left:"45%",center:"25%",right:"5%"}[s],top:{top:"5%",center:"30%",bottom:"55%"}[r]},children:Object(d.jsx)("img",{src:{"Alaska Flag":y,"California Flag":v,"City Skyline":k,Corn:C,Grass:z,Surfboard:S,Swimsuit:w,Umbrella:X,"Wave Outline":Y,"Blue Flowers":B,"Cave Entrance":F,"Cherry Pie":N,"Constellation 1":A,Kite:M,Ramen:D,Town:P,Treasure:I,Mountain:T,Sun:E,"Action Box":L,Bed:R,"Constellation 2":U,"Constellation 3":W,"Full Moon":H,Mountains:G,"Mount Everest":q,"Music Notes":J,Oak:K,Penny:V,"Pink Poodle":Q,"Shrub 1":Z,"Shrub 2":$}[t],alt:t})})]})}function nn(n){var t=n.stanzaBackgroundColor,a=n.stanzas,e=n.defaultBackgroundColor,c=n.stanzaType,o=void 0===c?"default":c,i=100/(a.length+2);return Object(d.jsxs)("div",{children:[Object(d.jsx)("style",{children:"\n        #page {\n          animation-name: scrollBody;\n          animation-duration: 1s;\n          animation-timing-function: ease-in-out;\n        }\n\n        @keyframes scrollBody {\n          ".concat(function(){var n="";return a.forEach((function(t,a){n+="".concat((a+1)*i,"% {\n          background: ").concat(t.background?t.background:e,"\n        }\n        ").concat((a+1.5)*i,"% {\n          background: ").concat(t.background?t.background:e,"\n        }\n        ")})),n}(),"\n        }\n      ")}),a.map((function(n,c){var i;return Object(d.jsxs)("div",{children:[{default:Object(d.jsx)(p,{index:c+1,background:t,stanzaCount:a.length,bodyBackground:n.background?n.background:e,children:n.stanza})}[o],null===(i=n.images)||void 0===i?void 0:i.map((function(n,t){return Object(d.jsx)(_,{index:c+1,imageIndex:t,stanzaCount:a.length,animation:n.animation,positionX:n.positionX,positionY:n.positionY,stanzaDuration:n.stanzaCount,children:n.component},""+c+t)}))]},c)}))]})}function tn(n){var t=n.children,a=n.bodyStyleMinHeight;return Object(e.useEffect)((function(){function n(){document.body.style.setProperty("--scroll",window.pageYOffset/(document.querySelector("#page").offsetHeight-window.innerHeight))}return document.querySelector("#page").style.minHeight=a,n(),window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n),document.querySelector("#page").style.minHeight="",document.body.style.removeProperty("--scroll")}}),[a]),Object(d.jsxs)("div",{className:"ScrollAnimation-Container",children:[Object(d.jsx)("style",{children:"\n        :root * {\n          /* Pause the animation */\n          animation-play-state: paused;\n          /* Bind the animation to scroll */\n          animation-delay: calc(var(--scroll) * -1s);\n          /* These last 2 properites clean up overshoot weirdness */\n          animation-iteration-count: 1;\n          animation-fill-mode: both;\n        }\n      "}),t]})}a(46);function an(n){var t=n.children,a=n.background,e=n.stanzaCount,c=(n.backlink,100/(e+2));return Object(d.jsxs)("div",{children:[Object(d.jsx)("style",{children:"\n        #attribution {\n          animation-name: attribution;\n          animation-duration: 1s;\n          animation-timing-function: ease-in-out;\n        }\n\n        @keyframes attribution {\n          0% {\n            top: 100vh;\n          }\n          ".concat((e+1)*c,"% {\n            top: 100vh;\n          }\n          100% {\n            top: 25vh;\n          }\n        }\n      ")}),Object(d.jsx)("div",{className:"ScrollAnimation-Attribution-Container",style:{backgroundColor:a},id:"attribution",children:Object(d.jsx)("div",{className:"ScrollAnimation-Attribution-Border",style:{color:l(a)},children:t})})]})}a(47);function en(n){var t=n.children,a=n.background,e=n.author;return Object(d.jsx)("div",{className:"ScrollAnimation-Title-Container",style:{backgroundColor:a},children:Object(d.jsxs)("div",{className:"ScrollAnimation-Title-Border",style:{color:l(a)},children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)("h2",{children:e})]})})}a(48);function cn(n){var t=n.story,a=n.backgroundColor,e="#8bc9e4";return Object(d.jsx)("div",{id:"page",className:"Content-Wrap",children:Object(d.jsxs)(tn,{bodyStyleMinHeight:"".concat(100*t.length,"vh"),children:[Object(d.jsx)(en,{background:e,author:"FostyWally",children:"A Scroll Animation"}),Object(d.jsx)(nn,{stanzas:t,stanzaBackgroundColor:e,defaultBackgroundColor:a,stanzaType:"default"}),Object(d.jsxs)(an,{background:e,stanzaCount:t.length,backlink:"/poems/tales/",children:[Object(d.jsx)("p",{children:"Written by FostyWally"}),Object(d.jsx)("p",{children:"Animated by Captain Code \ud83d\ude0e"})]})]})})}var on=a(3);a(52);function sn(n){var t=n.story,a=n.setStory,c=n.backgroundColor,o=n.setBackgroundColor,i=Object(e.useState)(null),r=Object(s.a)(i,2),l=r[0],p=r[1];function u(){if(null!=l){var n=new FileReader;n.onload=j,n.readAsText(l)}else alert("Upload a file first!")}function j(n){var t=JSON.parse(n.target.result);a(t)}function b(){var n=JSON.stringify(t),a=new Blob([n]),e=URL.createObjectURL(a),c=document.querySelector("#downloadLink");c.href=e,c.click()}return Object(d.jsx)("div",{className:"Form-Container",children:Object(d.jsx)(on.d,{initialValues:{stanzas:t},enableReinitialize:!0,onSubmit:function(n){a(n.stanzas)},children:function(n){var t=n.values;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(on.c,{children:[Object(d.jsxs)("div",{className:"Form",children:[Object(d.jsx)("div",{children:"[Default Stanza Background Color]"}),Object(d.jsx)("input",{value:c,onChange:function(n){return o(n.target.value)}}),Object(d.jsx)(on.b,{name:"stanzas",children:function(n){return Object(d.jsxs)("div",{children:[t.stanzas.length?t.stanzas.map((function(t,a){return Object(d.jsxs)("div",{className:"Form-Stanza-Container",children:[Object(d.jsx)("button",{type:"button",className:"secondary",onClick:function(){return n.remove(a)},children:"X"}),Object(d.jsxs)("label",{htmlFor:"stanzas.".concat(a,".stanza"),className:"blue",children:["Stanza ",a+1]}),Object(d.jsx)(on.a,{name:"stanzas.".concat(a,".stanza"),placeholder:"Enter your stanza text here.",as:"textarea",rows:"6",cols:"30"}),Object(d.jsx)(on.b,{name:"stanzas.".concat(a,".images"),children:function(n){return Object(d.jsxs)(d.Fragment,{children:[t.images.length?t.images.map((function(t,e){return Object(d.jsxs)("fieldset",{className:"Form-Stanza-Container",children:[Object(d.jsx)("button",{type:"button",className:"secondary",onClick:function(){n.remove(e)},children:"X"}),Object(d.jsxs)("legend",{className:"blue",children:["Image ",e+1]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"stanzas.".concat(a,".images.").concat(e,".component"),children:"image"}),Object(d.jsxs)(on.a,{name:"stanzas.".concat(a,".images.").concat(e,".component"),as:"select",children:[Object(d.jsxs)("optgroup",{label:"Newport Nebraska",children:[Object(d.jsx)("option",{children:"Alaska Flag"}),Object(d.jsx)("option",{children:"California Flag"}),Object(d.jsx)("option",{children:"City Skyline"}),Object(d.jsx)("option",{children:"Corn"}),Object(d.jsx)("option",{children:"Grass"}),Object(d.jsx)("option",{children:"Surfboard"}),Object(d.jsx)("option",{children:"Swimsuit"}),Object(d.jsx)("option",{children:"Umbrella"}),Object(d.jsx)("option",{children:"Wave Outline"})]}),Object(d.jsxs)("optgroup",{label:"Guide to Sunset",children:[Object(d.jsx)("option",{children:"Action Box"}),Object(d.jsx)("option",{children:"Bed"}),Object(d.jsx)("option",{children:"Blue Flowers"}),Object(d.jsx)("option",{children:"Cave Entrance"}),Object(d.jsx)("option",{children:"Cherry Pie"}),Object(d.jsx)("option",{children:"Constellation 1"}),Object(d.jsx)("option",{children:"Constellation 2"}),Object(d.jsx)("option",{children:"Constellation 3"}),Object(d.jsx)("option",{children:"Full Moon"}),Object(d.jsx)("option",{children:"Kite"}),Object(d.jsx)("option",{children:"Mountain"}),Object(d.jsx)("option",{children:"Mountains"}),Object(d.jsx)("option",{children:"Mount Everest"}),Object(d.jsx)("option",{children:"Music Notes"}),Object(d.jsx)("option",{children:"Oak"}),Object(d.jsx)("option",{children:"Penny"}),Object(d.jsx)("option",{children:"Pink Poodle"}),Object(d.jsx)("option",{children:"Ramen"}),Object(d.jsx)("option",{children:"Shrub 1"}),Object(d.jsx)("option",{children:"Shrub 2"}),Object(d.jsx)("option",{children:"Sun"}),Object(d.jsx)("option",{children:"Town"}),Object(d.jsx)("option",{children:"Treasure"})]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"stanzas.".concat(a,".images.").concat(e,".positionY"),children:"positionY"}),Object(d.jsxs)(on.a,{name:"stanzas.".concat(a,".images.").concat(e,".positionY"),as:"select",children:[Object(d.jsx)("option",{value:"top",children:"Top"}),Object(d.jsx)("option",{value:"center",children:"Center"}),Object(d.jsx)("option",{value:"bottom",children:"Bottom"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"stanzas.".concat(a,".images.").concat(e,".positionX"),children:"positionX"}),Object(d.jsxs)(on.a,{name:"stanzas.".concat(a,".images.").concat(e,".positionX"),as:"select",children:[Object(d.jsx)("option",{value:"left",children:"Left"}),Object(d.jsx)("option",{value:"center",children:"Center"}),Object(d.jsx)("option",{value:"right",children:"Right"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"stanzas.".concat(a,".images.").concat(e,".animation"),children:"animation"}),Object(d.jsxs)(on.a,{name:"stanzas.".concat(a,".images.").concat(e,".animation"),as:"select",children:[Object(d.jsx)("option",{value:"fade",children:"Fade"}),Object(d.jsx)("option",{value:"slidedown",children:"Slide Down"}),Object(d.jsx)("option",{value:"slideup",children:"Slide Up"}),Object(d.jsx)("option",{value:"slideleft",children:"Slide Left"}),Object(d.jsx)("option",{value:"slideright",children:"Slide Right"}),Object(d.jsx)("option",{value:"slidedownleft",children:"Slide Down Left"}),Object(d.jsx)("option",{value:"slidedownright",children:"Slide Down Right"}),Object(d.jsx)("option",{value:"slideupleft",children:"Slide Up Left"}),Object(d.jsx)("option",{value:"slideupright",children:"Slide Up Right"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"stanzas.".concat(a,".images.").concat(e,".stanzaCount"),children:"Stanza Count"}),Object(d.jsx)(on.a,{name:"stanzas.".concat(a,".images.").concat(e,".stanzaCount"),type:"number"})]})]},a+""+e)})):null,Object(d.jsx)("button",{type:"button",onClick:function(){return n.push({component:void 0,positionX:"center",positionY:"center",animation:"fade",stanzaCount:1})},children:"Add Image"})]})}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"stanzas.".concat(a,".stanza"),children:"Background"}),Object(d.jsx)(on.a,{name:"stanzas.".concat(a,".background"),type:"text"})]})]},a)})):null,Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return n.push({stanza:"",images:[],background:c})},children:"Add Stanza"})})]})}})]}),Object(d.jsxs)("div",{className:"Save-Button-Container",children:[Object(d.jsx)("input",{className:"File-Upload",type:"file",accept:"application/json",onChange:function(n){return p(n.target.files[0])}}),Object(d.jsx)("button",{type:"button",className:"Save-Button",onClick:u,children:"Upload"}),Object(d.jsx)("button",{type:"button",className:"Save-Button",onClick:b,children:"Download"}),Object(d.jsx)("button",{type:"submit",className:"Save-Button Green-Button",children:"Render"})]}),Object(d.jsx)("a",{style:{display:"none"},download:"story".concat((new Date).toLocaleDateString()).concat((new Date).toLocaleTimeString(),".json"),href:"",id:"downloadLink",children:"download it"})]})})}})})}a(53);function rn(){var n=Object(e.useState)([]),t=Object(s.a)(n,2),a=t[0],c=t[1],o=Object(e.useState)("#DDDDDD"),i=Object(s.a)(o,2),l=i[0],p=i[1];return Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(r.slide,{pageWrapId:"page",outerContainerId:"wrapper",children:Object(d.jsx)(sn,{story:a,setStory:c,backgroundColor:l,setBackgroundColor:p})}),Object(d.jsx)(cn,{story:a,backgroundColor:l})]})}function ln(){return Object(d.jsx)("div",{children:Object(d.jsx)(rn,{})})}i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ln,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.50c16c8f.chunk.js.map