(()=>{"use strict";const e=document.querySelector("#content");!function t(n){switch(e.firstChild&&function(){for(;e.firstChild;)e.removeChild(e.lastChild)}(),function(){let t=[],n=[];for(let e=0;e<4;e++)t[e]=document.createElement("div");t[0].classList.add("section"),t[0].id="branding",t[1].classList.add("menu-background"),t[2].classList.add("menu"),t[3].classList.add("center-img");for(let e=0;e<4;e++)n[e]=document.createElement("h2"),n[e].classList.add("menu-link");n[0].textContent="Home",n[1].textContent="Menus",n[2].textContent="Reservations",n[3].textContent="Contact",e.appendChild(t[1]),e.appendChild(t[0]),t[1].appendChild(t[2]),t[2].appendChild(n[0]),t[2].appendChild(n[1]),t[2].appendChild(t[3]),t[2].appendChild(n[2]),t[2].appendChild(n[3]);let d=document.createElement("img"),a=document.createElement("h1");a.textContent="GekDonalds",d.classList.add("medium-img"),d.classList.add("circle"),d.src="assets/geck.png",d.alt="gizmo",t[3].appendChild(d),t[3].appendChild(a)}(),function(){let n=[],d=document.createElement("div");d.id="indicator-row",e.appendChild(d);for(let e=0;e<4;e++)n[e]=document.createElement("button"),n[e].classList.add("page-indicator"),n[e].addEventListener("click",(function(){t(e)})),d.appendChild(n[e])}(),function(){const e=document.querySelectorAll(".menu-link");console.log(e.length);for(let n=0;n<e.length;n++)e[n].addEventListener("click",(function(){t(n)}))}(),n){case 0:(()=>{console.log("Loads front page");let e=document.querySelector("#content"),t=document.querySelector("#branding"),n=[document.createElement("div"),document.createElement("div")],d=[],a=[],o=document.createElement("em"),c=document.createElement("hr");for(let e=0;e<7;e++)d[e]=document.createElement("h3");for(let e=0;e<2;e++)a[e]=document.createElement("button");d[7]=document.createElement("h1"),d[7].classList.add("pic-text"),d[7].classList.add("center"),d[7].textContent="Flippin' up the finest dang burgers in Massachusetts since 2020.",t.appendChild(d[7]),a[0].id="reservation-btn",a[0].classList.add("button"),a[0].textContent="Make a reservation!",a[1].id="menu-btn",a[1].classList.add("button"),a[1].textContent="Check out the menu!",t.appendChild(a[0]),n[0].classList.add("section"),n[0].id="hours",n[1].id="hours-list",e.appendChild(n[0]),n[0].appendChild(n[1]),o.textContent="To better accomodate our leopard gecko patrons, hours have been updated!",n[1].appendChild(o),n[1].appendChild(c),d[0].textContent="Monday: 5:45am to 8:30am",d[1].textContent="Tuesday: 5:45pm - 8:30pm",d[2].textContent="Wednesday: 5:45am to 8:30am",d[3].textContent="Thursday: 5:45pm - 8:30pm",d[4].textContent="Friday: 5:45am to 8:30am",d[5].textContent="Saturday: 5:45pm - 8:30pm",d[6].textContent="Sunday: CLOSED (even geckos need their beauty sleep)";for(let e=0;e<6;e++)n[1].appendChild(d[e])})(),document.querySelector(".left").classList.add("inactive"),document.querySelector(".right").classList.remove("inactive");for(let e=0;e<4;e++)document.querySelectorAll(".page-indicator")[e].classList.remove("focus");document.querySelectorAll(".page-indicator")[0].classList.add("focus"),document.querySelector(".button").addEventListener("click",(function(){t(2)}));break;case 1:(()=>{console.log("Loads menu page");let e=document.querySelector("#branding"),t=[],n=[],d=[],a=[];for(let e=0;e<5;e++)t[e]=document.createElement("div");t[0].id="menu-sheet",t[1].id="burgers",t[1].classList.add("grid-square"),t[2].id="sandwiches",t[2].classList.add("grid-square"),t[3].id="sides",t[3].classList.add("grid-square"),e.appendChild(t[0]),t[0].appendChild(t[1]),t[0].appendChild(t[2]),t[0].appendChild(t[3]);for(let e=0;e<3;e++)n[e]=document.createElement("h2"),d[e]=document.createElement("p"),a[e]=document.createElement("img"),t[e+1].appendChild(n[e]),t[e+1].appendChild(d[e]),t[e+1].appendChild(a[e]);n[0].textContent="GekDouble ($3.99)",n[1].textContent="GekChigen ($2.99)",n[2].textContent="Glass of GekWater ($0.99)",d[0].textContent="A scrumptious cricket burger and fries meal. ",d[1].textContent="Please note, this is not chicken! This is chigen, a gecko-safe insect burger! Who needs an impossible burger now?",d[2].textContent="Now, this isn't just any water... this is GekWater! Includes a collectible water cup with the face of a certain insurance salesgecko extraordinaire!"})();for(let e=0;e<4;e++)document.querySelectorAll(".page-indicator")[e].classList.remove("focus");document.querySelectorAll(".page-indicator")[1].classList.add("focus");break;case 2:(()=>{console.log("Loads reservation page");let e=document.querySelector("#branding"),t=[],n=[];t[0]=document.createElement("div"),n[0]=document.createElement("h1"),t[0].id="menu-sheet",t[0].classList.add("grid-square"),n[0].textContent="UNDER CONSTRUCTION!",e.appendChild(t[0]),t[0].appendChild(n[0])})();for(let e=0;e<4;e++)document.querySelectorAll(".page-indicator")[e].classList.remove("focus");document.querySelectorAll(".page-indicator")[2].classList.add("focus");break;case 3:(()=>{console.log("Loads contact page");let e=document.querySelector("#branding"),t=[],n=[],d=[],a=[];for(let e=0;e<5;e++)t[e]=document.createElement("div");t[0].id="menu-sheet";for(let e=0;e<3;e++)t[e+1].classList.add("grid-square");t[2].classList.add("grid-square"),t[3].classList.add("grid-square"),e.appendChild(t[0]),t[0].appendChild(t[1]),t[0].appendChild(t[2]),t[0].appendChild(t[3]);for(let e=0;e<3;e++)n[e]=document.createElement("h2"),d[e]=document.createElement("p"),a[e]=document.createElement("img"),t[e+1].appendChild(n[e]),t[e+1].appendChild(d[e]),t[e+1].appendChild(a[e]);n[0].textContent="Gizmo Gecko",d[0].textContent="Email: gizmogecko@geckdonalds.com",d[1].textContent="Reachable at any time during business hours. If you have any positive feedback or just want to chat, Gizmo's your gecko!"})(),document.querySelector(".right").classList.add("inactive"),document.querySelector(".left").classList.remove("inactive");for(let e=0;e<4;e++)document.querySelectorAll(".page-indicator")[e].classList.remove("focus");document.querySelectorAll(".page-indicator")[3].classList.add("focus")}}(0)})();