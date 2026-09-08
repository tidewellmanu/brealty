
document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#featured-grid"); if(grid) grid.innerHTML=properties.slice(0,3).map(propertyCard).join("");
 const search=document.querySelector("#home-search");
 if(search) search.addEventListener("submit",e=>{
   e.preventDefault();
   const q=document.querySelector("#q").value.trim(), type=document.querySelector("#type").value, purpose=document.querySelector("#purpose").value;
   const match=properties.filter(p=>(!q||`${p.title} ${p.location}`.toLowerCase().includes(q.toLowerCase()))&&(!type||p.type===type)&&(!purpose||p.purpose===purpose));
   sessionStorage.setItem("franleansSearch",JSON.stringify(match.map(p=>p.id)));
   location.href="properties.html";
 });
});
