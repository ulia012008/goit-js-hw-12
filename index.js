import{a as w,S as x}from"./assets/vendor-DeburH-4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="49488951-e375fee229e59287138537a31",L="https://pixabay.com/api/";async function p(t,s=1){try{return(await w.get(L,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12,page:s}})).data}catch(o){throw console.error("Error fetching images:",o),o}}const d=document.querySelector(".gallery");let q=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(){d.innerHTML=""}function y(t,s=!1){s||f();const o=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:h,comments:g,downloads:b})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${i}" alt="${r}" class="gallery-image"  width="360" height="200"/>
        </a>
        <div class="info">
        <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${a}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${h}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${g}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${b}</p>
          
            </li>
        </ul>
        </div>
      </li>`).join("");d.innerHTML=o,q.refresh()}const v=document.querySelector("#search-form");document.querySelector(".gallery");const l=document.querySelector(".load-more"),c=document.querySelector(".message");let u="",n=1;const P=15;let m=0;l.style.display="none";async function $(t){if(t.preventDefault(),u=t.currentTarget.elements["search-text"].value.trim(),!!u){n=1,f(),l.style.display="none",c.textContent="";try{const s=await p(u,n);if(m=s.totalHits,s.hits.length===0){c.textContent="No images found. Try another search!";return}y(s.hits),l.style.display="block"}catch{c.textContent="Something went wrong. Please try again later."}}}async function C(){n+=1;try{const t=await p(u,n);(t.hits.length===0||n*P>=m)&&(l.style.display="none",c.textContent="We're sorry, but you've reached the end of search results."),y(t.hits,!0),E()}catch(t){console.error(t)}}function E(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}v.addEventListener("submit",$);l.addEventListener("click",C);
//# sourceMappingURL=index.js.map
