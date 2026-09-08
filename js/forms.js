
document.addEventListener("DOMContentLoaded",()=>{
 const params=new URLSearchParams(location.search), prop=params.get("property");
 const propertyField=document.querySelector("#property");
 if(propertyField&&prop) propertyField.value=prop;
});
