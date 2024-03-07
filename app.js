const keys = document.querySelectorAll("[data-key]");
const outputPreview = document.getElementById("outputPreview");
const outputResult = document.getElementById("outputResult");

for (let key of keys){
   const value = key.dataset.key;

   key.addEventListener("click", ()=> {
      if(value == "AC"){
         outputPreview.innerText = "";
         outputResult.innerText = "";
      }
      else if(value == "blackspace"){
         outputPreview.innerText = outputPreview.innerText.slice(0,-1);
      }
      else if(value == "="){
         try {
            outputResult.className += " resultado";
            outputResult.innerText = eval(outputPreview.innerText);
            outputPreview.innerText = "";
         }
         catch(err) {
            outputPreview.innerText = "";
            outputResult.innerText = "Error, vuelva a intentar";
            console.log(err)
         }
      }
      else {
         outputResult.innerText = "";
         outputPreview.innerText += value;
      }
   });
}