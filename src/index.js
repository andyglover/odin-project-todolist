console.log("Hello world")

import logic from './logic.js';

const form = document.createElement('form'); //create form
form.setAttribute("id", "addTaskForm");
createTextInput("textInput");
createSubmitButton();
createNewListButton();
document.getElementById("content").appendChild(form); //append form
configureSubmitButton();
configureNewListButton();

function createTextInput(id){
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", id);
    form.appendChild(input);
    return input;
}
function createSubmitButton(){
    const button = document.createElement('button');
    button.innerText = "submit";
    button.setAttribute("type", "submit");
    button.setAttribute("id", "submitButton");
    form.appendChild(button);
}
function createNewListButton(){
    const button = document.createElement('button');
    button.innerText = "new list";
    // button.setAttribute("type", "submit");
    button.setAttribute("id", "newListButton");
    form.appendChild(button);
}
function configureSubmitButton(){
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        const textInput = document.querySelector('#textInput');
        // displayInput(textInput.value);
        logic.addTask(textInput.value);
        clearTasks();
        displayTasks();
        form.reset();
    });
}
function configureNewListButton(){
    const newListButton = document.querySelector('#newListButton');
    newListButton.addEventListener("click", function(e){
        e.preventDefault();
        logic.promptForProjectName();
    });
    console.log();
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