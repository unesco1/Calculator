const calculation = document.querySelector('.calculation');
const result = document.querySelector('.result');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const plus = document.querySelector('.plus');
const divide = document.querySelector('.divide');
const decrease = document.querySelector('.decrease');
const multiply = document.querySelector('.multiply');
const equal = document.querySelector('.equal');
const ac = document.querySelector('.AC');
const del = document.querySelector('.DEL');
const comma = document.querySelector('.comma');
var isTrue = true;

function myNumber() {
    if (result.textContent === "0" || isTrue != true) {
        result.textContent = this.value;
        isTrue = true;
    } else result.textContent += this.value    
}

zero.addEventListener("click", myNumber);
one.addEventListener("click", myNumber);
two.addEventListener("click", myNumber);
three.addEventListener("click", myNumber);
four.addEventListener("click", myNumber);
five.addEventListener("click", myNumber);
six.addEventListener("click", myNumber);
seven.addEventListener("click", myNumber);
eight.addEventListener("click", myNumber);
nine.addEventListener("click", myNumber);


ac.onclick = function() {
    calculation.textContent = "";
    result.textContent = "0";
}

del.onclick = function() {

    if (result.textContent.indexOf('=') != "-1") {

        calculation.textContent = "";
        result.textContent = "";
    } else if (result.textContent != "0") {
        result.innerHTML = result.textContent.slice(0, -1);
    }
}

function myCalcul() {

    let findCalcul = calculation.textContent.split(" ");

    if (findCalcul[3] === "=") {

        calculation.textContent = result.textContent + this.value;
        result.textContent = "";
        isTrue = false;

    } else if (findCalcul[1] === "+") {

        result.textContent = Number(findCalcul[0]) + Number(result.textContent);
        calculation.textContent = result.textContent + this.value;
        isTrue = false;

    } else if (findCalcul[1] === "-") {
        
        result.textContent = Number(findCalcul[0]) - Number(result.textContent);
        calculation.textContent = result.textContent + this.value;
        isTrue = false;

    } else if (findCalcul[1] === "*") {

        result.textContent = Number(findCalcul[0]) * Number(result.textContent);
        calculation.textContent = result.textContent + this.value;
        isTrue = false;

    } else if (findCalcul[1] === "÷") {

        result.textContent = Number(findCalcul[0]) / Number(result.textContent);
        calculation.textContent = result.textContent + this.value;
        isTrue = false;

    } else {

        calculation.textContent += result.textContent + this.value;
        result.textContent = "";
        isTrue = false;
    }
}

plus.addEventListener("click", myCalcul);
divide.addEventListener("click", myCalcul);
decrease.addEventListener("click", myCalcul);
multiply.addEventListener("click", myCalcul);

equal.onclick = function() {

    let findCalcul = calculation.textContent.split(" ");

     if (findCalcul[1] === "+" && result.textContent !== "") {

        calculation.textContent = findCalcul[0] + " + " + result.textContent + this.value;
        result.textContent = Number(findCalcul[0]) + Number(result.textContent);
        isTrue = false;   
  
    } else if (findCalcul[1] === "-" && result.textContent !== "") {
        
        calculation.textContent = findCalcul[0] + " - " + result.textContent + this.value;
        result.textContent = Number(findCalcul[0]) - Number(result.textContent);
        isTrue = false;

    } else if (findCalcul[1] === "*" && result.textContent !== "") {

        calculation.textContent = findCalcul[0] + " * " + result.textContent + this.value;
        result.textContent = Number(findCalcul[0]) * Number(result.textContent);
        isTrue = false;

    } else if (findCalcul[1] === "÷" && result.textContent !== "") {

        calculation.textContent = findCalcul[0] + " ÷ " + result.textContent + this.value;
        result.textContent = Number(findCalcul[0]) / Number(result.textContent);
        isTrue = false;

    } else {

        return calculation.textContent;
    }
}

comma.onclick = function() {

    if (result.textContent.indexOf(".") == "-1") {

        console.log("good")
        result.textContent += comma.value;
    }
}