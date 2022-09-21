console.log("Hello world")

import logic from './logic.js';

makeTheForm("addTaskForm");

function makeTheForm(formId){
    const form = document.createElement('form'); //create form
    form.setAttribute("id", formId);
    document.getElementById("content").appendChild(form); //append form
    createTextInput("textInput", formId);
    createSubmitButton("submitButton", formId);
    createNewListButton("newListButton", formId);     
    configureNewTaskSubmitButton(formId);
    configureNewListButton();
}

function makeAForm(formId){
    const form = document.createElement('form');
    form.setAttribute("id", formId);
    document.getElementById("content").appendChild(form);
    let textInputName = formId + "textInput";
    createTextInput(textInputName, formId);
    let buttonName = formId + "submitButton";
    createSubmitButton(buttonName, formId);
    configureSubmitButton(buttonName,textInputName);
    //listener just will return value
    ////test with console log
    //kill form
}

function createTextInput(inputId,formId){
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", inputId);
    document.getElementById(formId).appendChild(input);
    return input;
}
function createSubmitButton(buttonId,formId){
    const button = document.createElement('button');
    button.innerText = "submit";
    button.setAttribute("type", "submit");
    button.setAttribute("id", buttonId);
    document.getElementById(formId).appendChild(button);
}
function createNewListButton(buttonId,formId){
    const button = document.createElement('button');
    button.innerText = "new list";
    // button.setAttribute("type", "submit");
    button.setAttribute("id", buttonId);
    document.getElementById(formId).appendChild(button);
}
function configureSubmitButton(buttonId,textInputName){
    const submitButton = document.getElementById(buttonId);
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        console.log(document.getElementById(textInputName).value);
    })
}

function configureNewTaskSubmitButton(formId){
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        const textInput = document.querySelector('#textInput');
        // displayInput(textInput.value);
        logic.addTask(textInput.value);
        clearTasks();
        displayTasks(formId);
        document.getElementById(formId).reset();
    });
}
function configureNewListButton(){
    const newListButton = document.querySelector('#newListButton');
    newListButton.addEventListener("click", function(e){
        e.preventDefault();
        // logic.promptForProjectName();
        makeAForm("newListForm");

    });
    console.log();
}
function displayTasks(formId){
    const paragraph = document.createElement('p');
    paragraph.setAttribute("id", "taskListParagraph");
    logic.getProject().forEach(element => paragraph.innerText += element.title + ", ")
    document.getElementById(formId).appendChild(paragraph);
}
function clearTasks(){
    if(document.getElementById("taskListParagraph")){
        document.getElementById("taskListParagraph").remove();
    }
}