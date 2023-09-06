
//-------------------------------------------------------------------------
// document.getElementById("demo").innerHTML = "hello";

// for (let i = 0; i < 200; i++) {
//     var n=i;
//    let item= document.querySelector('#parent:nth-child(i)');
//    let firstitem=item.children.item(0).innerHTML=i;
//    let seconditem=item.children.item(1).innerHTML=result;
// }

// function root() {
//   let root;
//   function f(x) {
//     return 100 * x + 50;
//   }
//   let x = -100;
//   for (let i = x; i < 100; i = i + 0.5) {


//     let result = f(i);
    
    

//       if (result == 0) {
//         root = i;
//       }
    
    
//   }
// }
// const Parser = require('expr-eval').Parser;

// const parser = new Parser();
// let expr = parser.parse('2 * x + 1');
//     console.log(expr.evaluate({ x: 3 })); // 7
// document.getElementById('parent').append('<tr><td></td><td></td></tr>');

function root( z,gap,eqn) { 
    let length=(2*z)/(gap);
    let x=-z; 


    function f(y) {
        x=y
        return eval(eqn)
      }

    for (let i = 0; i < length+2; i++) {
      let parentelement=document.getElementById('parent');
    let newelement=document.createElement('tr');
    newelement.innerHTML='<td></td><td></td>';
    parentelement.appendChild(newelement);

      
    }

    for (let i = 1; i < length+2; i++) {
    //defining function
    

      let nresult=f(x);
      result=nresult.toPrecision(4);
      y=x.toPrecision(4);
      if(result<0.00001&&result>-0.00001){
        result=0;
      }
       

   let item= document.querySelector('#parent').children.item(i);
   
    
   if(y<0.00001&&y>-0.00001){
    let firstitem=item.children.item(0).innerHTML=0;
  }else firstitem=item.children.item(0).innerHTML=y;
   
   let seconditem=item.children.item(1).innerHTML=result;
   if(result<0.01&&result>-0.01){
    item.children.item(0).style.background="rgb(139, 218, 102)";
    item.children.item(1).style.background="rgb(139, 218, 102)";
    item.children.item(0).style.color="#fff";
    item.children.item(1).style.color="#fff"

   }
   x=(x+gap);
       
}
}
const btn =document.getElementById("i1btn");
let num,gap1;
function getVal(e) {
    // e.preventDefault();
    
    
    let num1=document.getElementById('i1num').value;
    let gap1=document.getElementById('i1gap').value;
    let eqn1=document.getElementById('i1eqn').value;
    let num2=parseFloat(num1);
    let gap2=parseFloat(gap1);
    root(num2,gap2,eqn1);
    const btn =document.getElementById("i1btn");
    btn.removeEventListener("click",getVal);
    btn.addEventListener("click",getVal);
    
    

}
btn.addEventListener("click",getVal);
let ebtn=document.getElementById('i1erase')
ebtn.addEventListener("click",eraser);
function eraser() {
  var table1=document.getElementById('parent');
 let lengthoftable =table1.children.length;
    for (let i = lengthoftable;i>1; i--) {
      if (i!=1||i!=0) {
        
     
      let tokill=table1.childNodes[i];
      tokill.parentNode.removeChild(tokill);
      console.log(i);
    }
   }
}



//--------------------------------------------------------------------


// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// let xMax = canvas.height = canvas.width;
// let yMax = xMax;
// ctx.transform(1, 0, 0, -1, 0, canvas.height)

// let slope = 1.2;
// let intercept = 70;

// const xArray = [50,60,70,80,90,100,110,120,130,140,150];
// const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// // Plot Scatter
// ctx.fillStyle = "red";
// for (let i = 0; i < xArray.length-1; i++) {
//   let x = xArray[i]*xMax/150;
//   let y = yArray[i]*yMax/15;
//   ctx.beginPath();
//   ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
//   ctx.fill();
// }

// // Plot Line
// ctx.beginPath();
// ctx.moveTo(0, intercept);
// ctx.lineTo(xMax, xMax * slope + intercept);
// ctx.stroke();