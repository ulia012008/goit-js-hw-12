import{a as S,S as L,i as n}from"./assets/vendor-BfjKTZs6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&y(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function y(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const q="49488951-e375fee229e59287138537a31",x="https://pixabay.com/api/";async function f(r,s=1){try{return(await S.get(x,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}catch(a){throw console.error("Error fetching images:",a),a}}const u=document.querySelector(".gallery");let v=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(r,s=!1){const a=r.map(({webformatURL:y,largeImageURL:e,tags:t,likes:o,views:h,comments:b,downloads:w})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${y}" alt="${t}" class="gallery-image"  width="360" height="200"/>
        </a>
        <div class="info">
        <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${o}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${h}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${b}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${w}</p>
          
            </li>
        </ul>
        </div>
      </li>`).join("");s?u.insertAdjacentHTML("beforeend",a):u.innerHTML=a,v.refresh()}function E(){u.innerHTML=""}const P=document.querySelector("#search-form");document.querySelector(".gallery");const l=document.querySelector(".load-more"),$=document.querySelector(".message"),c=document.querySelector(".loader");let d="",i=1;const g=15;let p=0;l.style.display="none";c.style.display="none";async function H(r){if(r.preventDefault(),d=r.currentTarget.elements["search-text"].value.trim(),!d){n.warning({title:"Warning",message:"Please enter a search query!"});return}i=1,E(),l.style.display="none",c.style.display="block",$.textContent="";try{const s=await f(d,i);if(p=s.totalHits,s.hits.length===0){n.error({title:"Error",message:"No images found. Try another search!"});return}m(s.hits),p>g&&(l.style.display="block")}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}}async function I(){i+=1,l.style.display="none",c.style.display="block";try{const r=await f(d,i);m(r.hits,!0),i*g>=p?(l.style.display="none",n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):l.style.display="block",M()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}}function M(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}P.addEventListener("submit",H);l.addEventListener("click",I);
//# sourceMappingURL=index.js.map
