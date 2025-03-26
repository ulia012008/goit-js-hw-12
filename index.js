import{a as L,S as q,i as n}from"./assets/vendor-BfjKTZs6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&y(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function y(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const x="49488951-e375fee229e59287138537a31",v="https://pixabay.com/api/";async function p(t,s=1){try{return(await L.get(v,{params:{key:x,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12,page:s}})).data}catch(a){throw console.error("Error fetching images:",a),a}}const m=document.querySelector(".gallery");let E=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(){m.innerHTML=""}function g(t,s=!1){s||f();const a=t.map(({webformatURL:y,largeImageURL:e,tags:r,likes:o,views:b,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${y}" alt="${r}" class="gallery-image"  width="360" height="200"/>
        </a>
        <div class="info">
        <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${o}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${b}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${w}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${S}</p>
          
            </li>
        </ul>
        </div>
      </li>`).join("");m.innerHTML=a,E.refresh()}const P=document.querySelector("#search-form");document.querySelector(".gallery");const l=document.querySelector(".load-more"),$=document.querySelector(".message"),c=document.querySelector(".loader");let u="",i=1;const h=15;let d=0;l.style.display="none";c.style.display="none";async function I(t){if(t.preventDefault(),u=t.currentTarget.elements["search-text"].value.trim(),!u){n.warning({title:"Warning",message:"Please enter a search query!"});return}i=1,f(),l.style.display="none",c.style.display="block",$.textContent="";try{const s=await p(u,i);if(d=s.totalHits,s.hits.length===0){n.error({title:"Error",message:"No images found. Try another search!"});return}g(s.hits),d>h&&(l.style.display="block")}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}}async function O(){i+=1,l.style.display="none",c.style.display="block";try{const t=await p(u,i);t.hits.length===0||i*h>=d?(l.style.display="none",n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):l.style.display="block",g(t.hits,!0),H()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}}function H(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}P.addEventListener("submit",I);l.addEventListener("click",O);
//# sourceMappingURL=index.js.map
