const keys = document.querySelectorAll("[data-key]");
const outputPreview = document.getElementById("outputPreview");
const outputResult = document.getElementById("outputResult");

class Calculadora {
   constructor(num, num2, res){
      this.num = parseFloat(num);
      this.num2 = parseFloat(num2);
      this.res = res;
   }

   restar(){
      this.num += this.num2;
   }
   sumar(){
      this.num -= this.num2;
   }
   multiplicar(){
      this.num *= this.num2;
   }
   dividir(){
      this.num /= this.num2;
   }
   porcentaje(){
      this.num %= this.num2;
   }

   static eliminarNumero(){
      outputPreview.innerText = outputPreview.innerText.slice(0,-1);
   }
   static eliminarTodo(){
      outputPreview.innerText = "";
      outputResult.innerText = "";
   }
}


for (let key of keys){
   const value = key.dataset.key;

   key.addEventListener("click", ()=> {
      if(value == "AC"){
         Calculadora.eliminarTodo();
      }
      else if(value == "blackspace"){
         Calculadora.eliminarNumero();
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
            console.error(err)
         }
      }
      else {
         outputResult.innerText = "";
         outputPreview.innerText += value;
      }
   });
}

// for (let key of keys){
//    const value = key.dataset.key;

//    key.addEventListener("click", ()=> {
//       if(value == "AC"){
//          outputPreview.innerText = "";
//          outputResult.innerText = "";
//       }
//       else if(value == "blackspace"){
//          outputPreview.innerText = outputPreview.innerText.slice(0,-1);
//       }
//       else if(value == "="){
//          try {
//             outputResult.className += " resultado";
//             outputResult.innerText = eval(outputPreview.innerText);
//             outputPreview.innerText = "";
//          }
//          catch(err) {
//             outputPreview.innerText = "";
//             outputResult.innerText = "Error, vuelva a intentar";
//             console.log(err)
//          }
//       }
//       else {
//          outputResult.innerText = "";
//          outputPreview.innerText += value;
//       }
//    });
// }

// OTROS
   // const operators = ["-", "+", "/", "%"];
   // `<span class="operator">&times; &divide; &percnt;</span>`