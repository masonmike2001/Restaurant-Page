(()=>{"use strict";const e=document.querySelector("#content");!function t(n){switch(e.firstChild&&function(){for(;e.firstChild;)e.removeChild(e.lastChild)}(),function(){let t=[],n=[];for(let e=0;e<4;e++)t[e]=document.createElement("div");t[0].classList.add("section"),t[0].id="branding",t[1].classList.add("menu-background"),t[2].classList.add("menu"),t[3].classList.add("center-img");for(let e=0;e<4;e++)n[e]=document.createElement("h2"),n[e].classList.add("menu-link");n[0].textContent="Home",n[1].textContent="Menus",n[2].textContent="Reservations",n[3].textContent="Contact",e.appendChild(t[1]),e.appendChild(t[0]),t[1].appendChild(t[2]),t[2].appendChild(n[0]),t[2].appendChild(n[1]),t[2].appendChild(t[3]),t[2].appendChild(n[2]),t[2].appendChild(n[3]);let d=document.createElement("img"),o=document.createElement("h1");o.textContent="Gekdonalds",d.classList.add("medium-img"),d.classList.add("circle"),d.src="../assets/geck.png",d.alt="gizmo",t[3].appendChild(d),t[3].appendChild(o)}(),function(){let t=[],n=document.createElement("div");n.id="tab-row",e.appendChild(n),console.log("Before for");for(let e=0;e<2;e++)t[e]=document.createElement("button"),t[e].classList.add("page-btn"),0===e?t[e].classList.add("left"):t[e].classList.add("right"),n.appendChild(t[e]);let d=[],o=document.createElement("div");o.id="indicator-row",e.appendChild(o);for(let e=0;e<3;e++)d[e]=document.createElement("button"),d[e].classList.add("page-indicator"),o.appendChild(d[e])}(),function(){const e=document.querySelectorAll(".menu-link");document.querySelectorAll(".button"),console.log(e.length);for(let n=0;n<e.length;n++)e[n].addEventListener("click",(function(e){t(n)}))}(),n){case 0:console.log("Loads front page"),document.querySelector(".left").classList.add("inactive"),document.querySelector(".right").classList.remove("inactive");break;case 1:console.log("Loads menu page");break;case 2:console.log("Loads reservation page");break;case 3:console.log("Loads contact page"),document.querySelector(".right").classList.add("inactive"),document.querySelector(".left").classList.remove("inactive")}}(0)})();