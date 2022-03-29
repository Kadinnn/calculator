const calcBox = document.getElementById("calc-box");
let displayNumber = 0;

document.getElementById("1").addEventListener("click", makeNumber);
document.getElementById("2").addEventListener("click", makeNumber);
document.getElementById("3").addEventListener("click", makeNumber);
document.getElementById("4").addEventListener("click", makeNumber);
document.getElementById("5").addEventListener("click", makeNumber);
document.getElementById("6").addEventListener("click", makeNumber);
document.getElementById("7").addEventListener("click", makeNumber);
document.getElementById("8").addEventListener("click", makeNumber);
document.getElementById("9").addEventListener("click", makeNumber);
document.getElementById("0").addEventListener("click", makeNumber);
document.getElementById("+").addEventListener("click", makeNumber);
document.getElementById("-").addEventListener("click", makeNumber);
document.getElementById("x").addEventListener("click", makeNumber);
document.getElementById("/").addEventListener("click", makeNumber);
document.getElementById("()").addEventListener("click", makeNumber)
document.getElementById("<").addEventListener("click", makeNumber);
document.getElementById(">").addEventListener("click", makeNumber);
document.getElementById("c").addEventListener("click", makeNumber);
document.getElementById("e").addEventListener("click", makeNumber);

function makeNumber(e) {
 
if(e.target.id>="0" && e.target.id<="9")  {
if((displayNumber===0))
    displayNumber=e.target.id;
 } else{
     displayNumber += e.target.id;
}
console.log(number);
}