import"./assets/styles-3886e26d.js";const t=document.querySelector(".feedback-form"),n="feedback-form-state",r={email:"",message:""};c();t.addEventListener("input",m);t.addEventListener("submit",s);function s(e){if(e.preventDefault(),!t.elements.email.value||!t.elements.message.value){alert("Please fill in both fields");return}console.log("Submitted data:",r),localStorage.removeItem(n),t.reset()}function m(e){const{name:o,value:a}=e.target;r[o]=a.trim(),localStorage.setItem(n,JSON.stringify(r))}function c(){try{const e=localStorage.getItem(n);if(!e)return;const o=JSON.parse(e);for(const[a,l]of Object.entries(o))t.elements[a].value=l,r[a]=l}catch(e){console.error("Error parsing localStorage data:",e)}}
//# sourceMappingURL=commonHelpers2.js.map
