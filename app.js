
// const keys = document.querySelectorAll(".key");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.querySelectorAll("[data-clear]");
const equalBtn = document.querySelector("[data-equal]");

const outputPreview = document.getElementById("outputPreview");   //arriba
const outputResult = document.getElementById("outputResult");     //abajo

// FUNCIONES
const clearAllOp = () =>{
   clearBtn.addEventListener("click",()=>{
      outputPreview.innerText = "";
      outputResult.innerText = "";
   });
}

numberBtns.forEach((num) =>{
   num.addEventListener("click", ()=>{
      outputPreview.innerText += num.innerText;
      console.log(num.innerText);
   });
})





// const keys = document.querySelector('.clear');
// let res = keys.getAttribute("data-key");
// const res = keys.dataset.key;
// outputPreview.innerHTML += value;
// .key.operator
// elemento.className += " col-md-6";
// "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0" || "00" || "."

// for (let key of keys){
//    const value = key.dataset.key;
//    let expReg = /\d/g;

//    key.addEventListener("click", ()=> {
//       if(value == "AC"){
//          outputPreview.innerHTML = "";
//       } else {
//          outputPreview.innerHTML += value;
//       }   
//    });

//    console.log(expReg.exec(value))
//    // console.log(Array.of(value))
// }
