import{a as i,i as f}from"./assets/vendor-0d0b4561.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();i.defaults.headers.common["x-api-key"]="live_gaSA6v5OXWShcooSbIp9kQIJvyc2jgoZfeh1pgDO7Kk6W5Nu2YOVvcgUK7oX47wp";const h=async()=>{try{return(await i.get("https://api.thecatapi.com/v1/breeds")).data}catch{throw new Error("Failed to fetch breeds")}},y=async e=>{try{return(await i.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`)).data[0]}catch{throw new Error("Failed to fetch cat details")}},d=document.querySelector(".breed-select"),l=document.querySelector(".cat-info"),a=document.querySelector(".error"),g=document.querySelector(".cat-image"),S=document.querySelector(".cat-name"),b=document.querySelector(".cat-description"),v=document.querySelector(".cat-temperament");let q;const w=async()=>{try{p(),c(!0);const e=await h();E(e),q=new SlimSelect({select:".breed-select"})}catch(e){m(e.message)}finally{c(!1)}},E=e=>{d.innerHTML=e.map(t=>`<option value="${t.id}">${t.name}</option>`).join("")},L=async e=>{const t=e.target.value;try{c(!0),I(),p();const n=await y(t);O(n)}catch(n){m(n.message)}finally{c(!1)}},O=e=>{const t=e.breeds[0];g.src=e.url,S.textContent=t.name,b.textContent=t.description;const n=`<p><strong>Temperament:</strong> ${t.temperament.split(", ").join(", ")}</p>`;v.innerHTML=n,l.hidden=!1},c=e=>{const t=document.querySelector(".loader");t.hidden=!e,t.style.display=e?"inline-block":"none",d.hidden=e,l.hidden=e},m=e=>{a.textContent=e,a.hidden=!1,f.error({title:"Error",message:e})},I=()=>{a.hidden=!0},p=()=>{l.hidden=!0};d.addEventListener("change",L);w();
//# sourceMappingURL=commonHelpers.js.map