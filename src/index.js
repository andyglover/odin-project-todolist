console.log("Hello world")

import logic from './logic.js';

const form = document.createElement('form'); //create form
createInput();
createButton();
document.getElementById("content").appendChild(form); //append form
configureButton();

function createInput(){
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "textInput");
    form.appendChild(input);
    return input;
}
function createButton(){
    const button = document.createElement('button');
    button.innerText = "submit";
    button.setAttribute("type", "submit");
    button.setAttribute("id", "submitButton");
    form.appendChild(button);
}
function configureButton(){
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", function(e){
        e.preventDefault()
        const textInput = document.querySelector('#textInput');
        // displayInput(textInput.value);
        logic.addTask(textInput.value);
        clearTasks();
        displayTasks();
        form.reset();
    });
}
function displayTasks(){
    const paragraph = document.createElement('p');
    paragraph.setAttribute("id", "taskListParagraph");
    logic.getProject().forEach(element => paragraph.innerText += element.title + ", ")
    form.appendChild(paragraph);
}
function clearTasks(){
    if(document.getElementById("taskListParagraph")){
        document.getElementById("taskListParagraph").remove();
    }
}