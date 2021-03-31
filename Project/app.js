'use strict'
// Button reference
const switcher = document.querySelector('.btn');

//When the button is clicked - Event listener and handler
switcher.addEventListener('click', function() {
    // Toggle to switch modes
    document.body.classList.toggle('dark-theme')

    // Colour of the button changes according to the following conditions
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
});

const text = document.querySelector('.hogwarts');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char == splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}