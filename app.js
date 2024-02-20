
const keys = document.querySelectorAll("[data-key]");
// const operators = document.querySelectorAll(".operators");

const outputPreview = document.getElementById("outputPreview");   //arriba
const outputResult = document.getElementById("outputResult");     //abajo

// FUNCIONES

for (let key of keys){
   const value = key.dataset.key;
   // const operators = ["-", "+", "/", "%"];

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
            outputResult.innerText = eval(outputPreview.innerText);
         }
         catch(err) {
            outputPreview.innerText = "Error, vuelva a intentar";
            console.log(err)
         }
      }
      else {
         outputPreview.innerText += value;
      }
   });

}

// if(value == "-" || "+" || "/" || "%"){
//    outputPreview.classList.add("operator");
// }
// outputPreview.innerText += value;