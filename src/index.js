console.log("Hello world")
let contentDiv = document.getElementById("content")

import logic from './logic.js';

makeTheForm("addTaskForm");
refreshDisplay();

function makeTheForm(formId){
    const form = document.createElement('form'); //create form
    form.setAttribute("id", formId);
    contentDiv.appendChild(form); //append form
    createTextInput("textInput", formId);
    createSubmitButton("submitButton","submit task",formId);
    createNewProjectButton("newProjectButton", formId);     
    configureNewTaskSubmitButton(formId);
}

function makeAForm(formId,buttonInnerText,functionality){
    const form = document.createElement('form');
    form.setAttribute("id", formId);
    document.getElementById("content").appendChild(form);
    let textInputName = formId + "textInput";
    createTextInput(textInputName, formId);
    let buttonName = formId + "submitButton";
    createSubmitButton(buttonName, buttonInnerText, formId);
    configureSubmitButton(buttonName,textInputName,functionality);
    refreshDisplay();
}

function createTextInput(inputId,formId){
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", inputId);
    document.getElementById(formId).appendChild(input);
    return input;
}

function createSubmitButton(buttonId,innerText,formId){
    const button = document.createElement('button');
    button.innerText = innerText;
    button.setAttribute("type", "submit");
    button.setAttribute("id", buttonId);
    document.getElementById(formId).appendChild(button);
}

function createNewProjectButton(buttonId,formId){
    const button = document.createElement('button');
    button.innerText = "new project";
    button.setAttribute("id", buttonId);
    document.getElementById(formId).appendChild(button);
    configureNewProjectButton();
}

function configureSubmitButton(buttonId,textInputName,functionality){
    const submitButton = document.getElementById(buttonId);
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        functionality(document.getElementById(textInputName).value);
        refreshDisplay();
    }) 
}

function configureNewTaskSubmitButton(formId){
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        const textInput = document.querySelector('#textInput');
        // displayInput(textInput.value);
        logic.addTask(textInput.value);
        refreshDisplay();
        document.getElementById(formId).reset();
    });
}

function configureNewProjectButton(){
    const newProjectButton = document.querySelector('#newProjectButton');
    newProjectButton.addEventListener("click", function(e){
        e.preventDefault();
        if(!document.getElementById("newProjectForm")){
            makeAForm("newProjectForm","submit project name",logic.addProject);         
            document.getElementById("newProjectFormsubmitButton").addEventListener("click", function(e){
                document.getElementById("newProjectForm").remove();
            });
        };
    });
}

function displayProjects(){
    const projectsListParagraph = document.createElement('p');
    projectsListParagraph.setAttribute("id", "projectsListParagraph");
    projectsListParagraph.innerText = "projects: "
    logic.getProjectsArray().forEach(element => projectsListParagraph.innerText += element.title + ", ")
    contentDiv.appendChild(projectsListParagraph);
}
function displayTasks(){
    const projectTitleParagraph = document.createElement('p');
    projectTitleParagraph.setAttribute("id", "projectTitleParagraph");
    const currentProjectTitle = logic.getProjectTitle();
    projectTitleParagraph.innerText += `Current Project: ${currentProjectTitle}`
    contentDiv.appendChild(projectTitleParagraph);

    const taskListParagraph = document.createElement('p');
    taskListParagraph.setAttribute("id", "taskListParagraph");
    taskListParagraph.innerText = "tasks: "
    logic.getProjectArray().forEach(element => taskListParagraph.innerText += element.title + ", ")
    contentDiv.appendChild(taskListParagraph);
}

function unDisplayTasks(){
    if(document.getElementById("projectsListParagraph")){
        document.getElementById("projectsListParagraph").remove();
    }
    if(document.getElementById("projectTitleParagraph")){
        document.getElementById("projectTitleParagraph").remove();
    }
    if(document.getElementById("taskListParagraph")){
        document.getElementById("taskListParagraph").remove();
    }
}

function refreshDisplay(){
    unDisplayTasks();
    displayTasks();
    displayProjects();
}