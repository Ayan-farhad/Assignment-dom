
let p1 = prompt("Enter the first number:"); 
let p2 = prompt("Enter the second number:"); 

let sum = parseFloat(p1) + parseFloat(p2);

let resultParagraph = document.createElement("p");
resultParagraph.textContent = "Value: " + p1 + " + " + p2 + " = " + sum;

document.body.appendChild(resultParagraph);
