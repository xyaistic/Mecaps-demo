// let btn = document.querySelectorAll("#btn")
let display = document.querySelector("#display")



function appendToDisypla(input){
    display.value +=input;
}

function clearDisplay(){
    display.value= ' ';
}
function calculate(){
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        console.log("error aa gayA")
    }
}