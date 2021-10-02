var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var plus = document.getElementById("plus");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var minus = document.getElementById("minus");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var times = document.getElementById("times");
var zero = document.getElementById("zero");
var clear = document.getElementById("clear");
var enter = document.getElementById("enter");
var divide = document.getElementById("divide");
var answer = document.getElementById("answer");

let number = '';
let typed = []

function isNumber(text){
    if(!isNaN(text)){
        return true;
    }
}

function isOperator(text){
    if(text == "+" || text == "-" || text == "x" || text == "/"){
        return true;
    }
}

function add(a, b){
    return parseInt(a) + parseInt(b);
}

function sub(a, b){
    return parseInt(a) - parseInt(b);
}

function mult(a, b){
    return parseInt(a) * parseInt(b);
}

function div(a, b){
    if(b == 0){
        return "error"
    } else 
    console.log(parseInt(a)/parseInt(b))
    return parseInt(a)/parseInt(b);
}

function calculate(typedValues){
    let i = 0;
    let ans = "";
    while(i < Object.keys(typedValues).length){
        if(i == 0){
            ans = typedValues[0].element;
        }
        if(typedValues[i+1].operator == '+'){
            ans = add(ans, typedValues[i+2].element);
        }
        if(typedValues[i+1].operator == '-'){
            ans = sub(ans, typedValues[i+2].element);
        }
        if(typedValues[i+1].operator == 'x'){
            ans = mult(ans, typedValues[i+2].element);
        }
        if(typedValues[i+1].operator == '/'){
            ans = div(ans, typedValues[i+2].element);
        }
        i = i + 3;
    }
    return ans;
}


function onClick(e){
    let text = e.target.innerHTML;
    if(isNumber(text)){
        number = number + text;
    }
    if(isOperator(text)){
        typed.push({element:number});
        typed.push({operator:text});
        number = '';
    }
    if(text == "C"){
        typed = [];
        a = "";
        number = "";
        answer.innerHTML = "";
    }
    if(text == "E"){
        typed.push({element:number})
        let b = calculate(typed);
        typed = [];
        typed.push({element:b});
        answer.innerHTML = b;
    }

}

one.addEventListener("click", onClick);
two.addEventListener("click", onClick);
three.addEventListener("click", onClick);
four.addEventListener("click", onClick);
plus.addEventListener("click", onClick);
five.addEventListener("click", onClick);
six.addEventListener("click", onClick);
minus.addEventListener("click", onClick);
seven.addEventListener("click", onClick);
eight.addEventListener("click", onClick);
nine.addEventListener("click", onClick);
times.addEventListener("click", onClick);
zero.addEventListener("click", onClick);
clear.addEventListener("click", onClick);
enter.addEventListener("click", onClick);
divide.addEventListener("click", onClick);

