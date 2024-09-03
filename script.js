const display = document.getElementById("display");
let count = 0;
function increase(){
    count++;
    display.textContent = count;
}

function decrease(){
    count--;
    display.textContent = count;
}
function reset(){
    count = 0;
    display.textContent = count;
}