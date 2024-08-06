const display = document.getElementById("display");

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

function append(input){
    display.value += input;
}

function Remove(){
    display.value = display.value.slice(0, -1);
}