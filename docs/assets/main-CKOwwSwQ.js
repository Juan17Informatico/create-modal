(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const z=`<section class="home">\r
    <div class="title">\r
        <h1>Modals</h1>\r
    </div>\r
    <div class="modal-btn-container">\r
        <div class="sub-container">\r
            <p class="p-modal display-inline-b">Modal Success</p>\r
            <div class="btn-container display-inline-b">\r
                <button class="btn-action" id="btn-success">Open</button>\r
            </div>\r
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">\r
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\r
            </svg>\r
        </div>\r
    </div>\r
    <div class="modal-btn-container">\r
        <div class="sub-container">\r
            <p class="p-modal display-inline-b">Modal error</p>\r
            <div class="btn-container display-inline-b">\r
                <button class="btn-action" id="btn-error">Open</button>\r
            </div>\r
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">\r
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>\r
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>\r
              </svg>\r
        </div>\r
    </div>\r
    <div class="modal-btn-container">\r
        <div class="sub-container">\r
            <p class="p-modal display-inline-b">Modal Form</p>\r
            <div class="btn-container display-inline-b">\r
                <button class="btn-action" id="btn-form">Open</button>\r
            </div>\r
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">\r
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>\r
              </svg>\r
        </div>\r
    </div>\r
    <div class="modal-btn-container">\r
        <div class="sub-container">\r
            <p class="p-modal display-inline-b">Modal Info</p>\r
            <div class="btn-container display-inline-b">\r
                <button class="btn-action" id="btn-info">Open</button>\r
            </div>\r
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">\r
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>\r
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>\r
              </svg>\r
        </div>\r
    </div>\r
</section>\r
<section id="modal-containers"></section>\r
<div class="overlay hidden"></div>\r
`,y=o=>{if(!o)throw new Error("No hay ID para crear contenedor");const t=document.createElement("div");t.setAttribute("id",o),t.setAttribute("class","modal-container hidden");const r=document.createElement("div");r.setAttribute("class","modal-btn-container-close");const s=document.createElement("button");s.setAttribute("id",`cerrar-${o}`);const{svgIcon:e,pathIcon:n}=F();e.appendChild(n),s.appendChild(e),r.appendChild(s),t.appendChild(r);const i=document.createElement("div");return i.setAttribute("class","modal-contain"),t.appendChild(i),[t,i,s]},F=()=>{const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("width","24"),o.setAttribute("height","24"),o.setAttribute("fill","currentColor"),o.classList.add("bi","bi-x-lg"),o.setAttribute("viewBox","0 0 16 16");const t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d","M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"),{pathIcon:t,svgIcon:o}},L=({id:o,title:t,icon:r,text:s="",form:e=void 0,closeBtn:n=void 0},i)=>{const u=document.createElement("h2"),h=document.createElement("img"),f=document.createElement("p"),a=document.createElement("button");f.innerText=s,u.innerText=t,h.src=r,a.innerText=n,a.setAttribute("id",o),i.append(h,u,f);const m=document.createElement("button"),p=document.createElement("form");return e&&(p.setAttribute("id",e.id),e.preguntas.forEach(l=>{const v=document.createElement("input");v.tpye=l.typeInput,v.placeholder="...",v.name=l.name,v.id=l.id;const g=document.createElement("label");g.innerText=l.label,p.append(g,v)}),m.setAttribute("class","btn-modal"),m.type=e.typeSubmit,m.innerText="Enviar",p.appendChild(m),i.appendChild(p)),i.appendChild(a),[a,m,p]},C={success:{id:"success",title:"Guardado",icon:"/img/check.png",text:"Mensaje enviado con exito",closeBtn:"Cerrar",form:void 0},error:{id:"error",title:"Error",icon:"/img/error.png",text:"Error al enviar solicitud",closeBtn:"Cerrar",form:void 0},quiz:{id:"quiz",title:"Cuestionario",icon:"/img/question.png",text:"Responde lo siguiente:",closeBtn:"Cerrar",form:{id:"abc",preguntas:[{label:"¿Cuál es tu nombre?",typeInput:"text",name:"name",id:"name"},{label:"¿Cuáles son tus apellidos?",typeInput:"text",name:"lastname",id:"lastname"},{label:"¿Cuantos años tienes?",typeInput:"number",name:"age",id:"age"}],typeSubmit:"submit"}},info:{id:"info",title:"Información",icon:"/img/info.png",text:"Esto es un modal informativo",closeBtn:"Cerrar",form:void 0}},N=o=>{o.innerHTML=z;const t=document.querySelector("#modal-containers"),r=document.querySelector(".overlay"),s=document.getElementById("btn-success"),e=document.getElementById("btn-error"),n=document.getElementById("btn-form"),i=document.getElementById("btn-info"),[u,h,f]=y("success"),[a,m,p]=y("error"),[l,v,g]=y("quiz"),[E,B,I]=y("info");t.appendChild(u),t.appendChild(a),t.appendChild(l),t.appendChild(E);const[M]=L(C.success,h),[x]=L(C.error,m),[A,S,T]=L(C.quiz,v),[k]=L(C.info,B),w=c=>{c.classList.remove("hidden"),r.classList.remove("hidden")},d=c=>{c.classList.add("modal-closing"),c.addEventListener("animationend",()=>{c.classList.add("hidden"),r.classList.add("hidden"),c.classList.remove("modal-closing")},{once:!0})};s.addEventListener("click",()=>w(u)),e.addEventListener("click",()=>w(a)),n.addEventListener("click",()=>w(l)),i.addEventListener("click",()=>w(E)),f.addEventListener("click",()=>d(u)),p.addEventListener("click",()=>d(a)),g.addEventListener("click",()=>d(l)),I.addEventListener("click",()=>d(E)),M.addEventListener("click",()=>d(u)),x.addEventListener("click",()=>d(a)),A.addEventListener("click",()=>d(l)),k.addEventListener("click",()=>d(E)),S.addEventListener("click",c=>{c.preventDefault();const b=document.getElementById("name").value,O=document.getElementById("lastname").value,q=document.getElementById("age").value;alert(`Hola ${b} ${O}, 
tienes ${q}`)}),window.addEventListener("click",c=>{if(c.target===r)for(let b=0;b<t.children.length;b++)t.children[b].classList.contains("hidden")||d(t.children[b])})},P=document.getElementById("app");N(P);
