
const properties = [
 {id:1,title:"Modern 4 Bedroom Residence",location:"East Legon, Accra",type:"House",status:"For Sale",purpose:"Buy",price:1900000,currency:"GHS",bedrooms:4,bathrooms:4,parking:2,size:"450 sqm",image:"https://images.unsplash.com/photo-1781512436292-f2687f67f605?auto=format&fit=crop&fm=jpg&q=82&w=1800",description:"A contemporary residence with generous living areas, private outdoor space and carefully considered finishes.",amenities:["Fitted kitchen","Security","Garden","Parking"]},
 {id:2,title:"Contemporary Cantonments Apartment",location:"Cantonments, Accra",type:"Apartment",status:"For Rent",purpose:"Rent",price:9000,currency:"GHS",bedrooms:3,bathrooms:3,parking:2,size:"210 sqm",image:"https://images.unsplash.com/photo-1775733924031-521cd86c69cc?auto=format&fit=crop&fm=jpg&q=82&w=1800",description:"A refined apartment positioned for convenient city living with modern finishes and excellent natural light.",amenities:["Gym","Security","Parking","Generator"]},
 {id:3,title:"Prime Residential Land",location:"East Legon Hills, Accra",type:"Land",status:"For Sale",purpose:"Buy",price:950000,currency:"GHS",bedrooms:0,bathrooms:0,parking:0,size:"0.35 acre",image:"https://images.unsplash.com/photo-1759845565036-cbecbcfcb8e2?auto=format&fit=crop&fm=jpg&q=82&w=1800",description:"A strategically located residential plot suitable for a private home or carefully planned development.",amenities:["Documented","Road access","Utilities nearby"]},
 {id:4,title:"Executive Townhouse",location:"Labone, Accra",type:"Townhouse",status:"For Sale",purpose:"Buy",price:2450000,currency:"GHS",bedrooms:4,bathrooms:4,parking:2,size:"360 sqm",image:"https://images.unsplash.com/photo-1758448756207-54505680d130?auto=format&fit=crop&fm=jpg&q=82&w=1800",description:"A modern townhouse combining privacy, location and comfortable family living.",amenities:["Fitted kitchen","Private garden","Security","Parking"]},
 {id:5,title:"Commercial Office Suite",location:"Airport City, Accra",type:"Office",status:"For Rent",purpose:"Rent",price:18000,currency:"GHS",bedrooms:0,bathrooms:2,parking:8,size:"290 sqm",image:"https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&fm=jpg&q=82&w=1800",description:"Flexible commercial accommodation suited to professional teams seeking a central business address.",amenities:["Reception","Parking","Security","Backup power"]},
 {id:6,title:"Premium Family Villa",location:"Spintex, Accra",type:"Villa",status:"For Sale",purpose:"Buy",price:3200000,currency:"GHS",bedrooms:5,bathrooms:5,parking:3,size:"620 sqm",image:"https://images.unsplash.com/photo-1744094982586-c70f736bda12?auto=format&fit=crop&fm=jpg&q=82&w=1800",description:"A spacious villa designed around family living, entertaining and privacy.",amenities:["Pool","Garden","Security","Staff quarters"]}
];

function money(p){return `${p.currency} ${p.price.toLocaleString()}`}
function propertyCard(p){
 return `<article class="property-card">
   <a href="property-details.html?id=${p.id}">
    <div class="card-image"><img src="${p.image}" alt="${p.title}" loading="lazy"><span class="status">${p.status}</span></div>
    <div class="card-body"><span class="tag">${p.type} · ${p.location}</span><h3>${p.title}</h3>
    <div class="price">${money(p)}</div><div class="meta">${p.bedrooms?`${p.bedrooms} Beds · ${p.bathrooms} Baths · `:""}${p.size}</div>
    <div class="card-row"><span class="text-link">View Property →</span><span class="meta">${p.purpose}</span></div></div>
   </a>
 </article>`;
}
