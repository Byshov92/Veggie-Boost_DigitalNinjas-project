(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.openModalBtns.forEach(l=>{l.addEventListener("click",t)}),o.closeModalBtn.addEventListener("click",t);function t(){const l=window.matchMedia("(max-width: 767px)").matches;o.modal.classList.toggle("is-hidden"),!o.modal.classList.contains("is-hidden")&&l&&n()}function n(){const l=document.querySelector(".js-menu-container"),e=document.querySelector(".js-toggle-menu");l.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),document.body.style.overflow="auto"}})();(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-toggle-menu");document.getElementById("check");const n=document.body,l=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),t.classList.toggle("is-open"),e?n.style.overflow="auto":n.style.overflow="hidden"};t.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),n.style.overflow="auto")})})();document.querySelectorAll('a[href*="#"]').forEach(t=>{t.addEventListener("click",()=>{let n=document.getElementById(`${t.getAttribute("data-value")}`).offsetTop;window.scrollTo({top:n,behavior:"smooth"})})});(()=>{const o=document.getElementById("to-top-button");window.onscroll=function(){t()},o.addEventListener("click",n);function t(){document.body.scrollTop>200||document.documentElement.scrollTop>200?o.classList.add("show"):o.classList.remove("show")}function n(){window.scrollTo({top:0,behavior:"smooth"})}})();
