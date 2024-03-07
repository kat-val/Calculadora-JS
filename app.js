const keys = document.querySelectorAll("[data-key]");
const outputPreview = document.getElementById("outputPreview");
const outputResult = document.getElementById("outputResult");

class Calculadora {
   constructor(num, num2, op, res){
      this.num = num;
      this.num2 = num2;
      this.operador = op;
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

   eliminarNumero(){
      outputPreview.innerText = outputPreview.innerText.slice(0,-1);
   }
   eliminarTodo(){
      outputPreview.innerText = "";
      outputResult.innerText = "";
   }
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