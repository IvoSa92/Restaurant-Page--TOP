(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.querySelector(".actualContainer");e.removeChild(t)};console.log("hello"),document.querySelector("#content"),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.className="actualContainer";const n=document.createElement("div");n.className="buttonContainer";const c=document.createElement("h1");c.innerHTML="Mr Taco Heaven";const o=document.createElement("button");o.innerHTML="Menu",o.className="menuButton";const a=document.createElement("button");a.className="homeButton",a.innerHTML="Home";const m=document.createElement("button");m.innerHTML="Contact",m.className="contactButton";const r=document.createElement("img");r.className="homeImg",r.src="../home.jpg";const u=document.createElement("p");u.innerHTML="Lets taste Heaven!",n.append(a,o,m),t.append(r,u),e.append(c,n,t)})(),document.querySelector(".menuButton").addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.className="actualContainer";const n=document.createElement("h1");n.innerHTML="Burrito";const c=document.createElement("img");c.src="../burrito.jpg",c.style.width="500px";const o=document.createElement("p");o.innerHTML="Taste our delicious burritos",t.append(n,c,o),e.append(t)})()})),document.querySelector(".homeButton").addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.className="actualContainer";const n=document.createElement("img");n.className="homeImg",n.src="../home.jpg";const c=document.createElement("p");c.innerHTML="Lets taste Heaven!",t.append(n,c),e.append(t)})()})),document.querySelector(".contactButton").addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.className="actualContainer";const n=document.createElement("h1");n.innerHTML="Mr Taco Contact";const c=document.createElement("p");c.innerHTML="Telephone: 789 666 878";const o=document.createElement("p");o.innerHTML="E-Mail: taco@salsa.yes";const a=document.createElement("p");a.innerHTML="Open from: 6am to 2pm",t.append(n,c,o,a),e.appendChild(t)})()}))})();