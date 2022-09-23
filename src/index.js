console.log("Hello world")
let contentDiv = document.getElementById("content")

import logic from './logic.js';

makeTheForm("addTaskForm");
refreshDisplay();

function makeTheForm(formId){
    const form = document.createElement('form');
    form.setAttribute("id", formId);
    contentDiv.appendChild(form);
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
                console.log("wow");
            });
        };
    });
}

function displayProjects(){
    const projectsListParagraph = document.createElement('p');
    projectsListParagraph.setAttribute("id", "projectsListParagraph");
    projectsListParagraph.innerText = "projects: ";
    contentDiv.appendChild(projectsListParagraph);
    logic.getProjectsArray().forEach((element, index) => {
        createProjectSpan(element.title, index)
    })
}

function createProjectSpan(title, index){
    const spancontainer = document.createElement('span');
    spancontainer.setAttribute("data-index",index);
        const span = document.createElement('span');
        span.innerText = title + ", ";
        span.addEventListener("click", function(e){
            logic.switchProject(title);
            refreshDisplay();
        });
        spancontainer.appendChild(span);
        xButton(spancontainer,logic.deleteProject);
    document.getElementById("projectsListParagraph").appendChild(spancontainer);
}

function displayCurrentProject(){
    const projectTitleParagraph = document.createElement('p');
    projectTitleParagraph.setAttribute("id", "projectTitleParagraph");
    const currentProjectTitle = logic.getProjectTitle();
    projectTitleParagraph.innerText += `Current Project: ${currentProjectTitle}`
    contentDiv.appendChild(projectTitleParagraph);
}

function displayTasks(){
    const taskListParagraph = document.createElement('p');
    taskListParagraph.setAttribute("id", "taskListParagraph");
    taskListParagraph.innerText = "tasks: ";
    logic.getProjectArray().forEach((element, index) => {
        const span = document.createElement('span');
        span.setAttribute("data-index",index);
        span.innerText += element.title;
        xButton(span,logic.deleteTask);
        taskListParagraph.appendChild(span);
    })
    contentDiv.appendChild(taskListParagraph);
}

function unDisplay(){
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
    unDisplay();
    displayCurrentProject();
    displayTasks();
    displayProjects();
}

function xButton(parent,functionality){
    const button = document.createElement('button');
    button.innerText = "x";
    parent.appendChild(button);
    button.addEventListener("click", function(e){
        functionality(parent.getAttribute("data-index"));
        refreshDisplay();
    })
}