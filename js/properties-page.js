
document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#property-grid"), count=document.querySelector("#count");
 const q=document.querySelector("#filter-q"), type=document.querySelector("#filter-type"), purpose=document.querySelector("#filter-purpose"), sort=document.querySelector("#sort");
 function render(){
  let list=[...properties], query=(q?.value||"").toLowerCase();
  if(query) list=list.filter(p=>`${p.title} ${p.location} ${p.type}`.toLowerCase().includes(query));
  if(type?.value) list=list.filter(p=>p.type===type.value);
  if(purpose?.value) list=list.filter(p=>p.purpose===purpose.value);
  if(sort?.value==="low") list.sort((a,b)=>a.price-b.price);
  if(sort?.value==="high") list.sort((a,b)=>b.price-a.price);
  if(sort?.value==="new") list=list.sort((a,b)=>b.id-a.id);
  count.textContent=`${list.length} properties found`;
  grid.innerHTML=list.length?list.map(propertyCard).join(""):`<div class="empty">No properties match your search. Try changing your filters.</div>`;
 }
 [q,type,purpose,sort].forEach(x=>x&&x.addEventListener("input",render));
 const saved=JSON.parse(sessionStorage.getItem("franleansSearch")||"[]");
 if(saved.length){q.value=""; sessionStorage.removeItem("franleansSearch")}
 render();
});
