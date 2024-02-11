
const keys = document.querySelectorAll(".key");
const outputPreview = document.getElementById("outputPreview");
const outputResult = document.getElementById("outputResult");

// const keys = document.querySelector('.clear');
// let res = keys.getAttribute("data-key");
// const res = keys.dataset.key;
// outputPreview.innerHTML += value;
// .key.operator
// elemento.className += " col-md-6";
// "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0" || "00" || "."

for (let key of keys){
   const value = key.dataset.key;

   key.addEventListener("click", ()=> {
   
      if(value == "AC"){
         outputPreview.innerHTML = "";
      } else {
         outputPreview.innerHTML += value;
      }

      

   });
}