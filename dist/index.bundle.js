"use strict";
(self["webpackChunkodin_project_todolist"] = self["webpackChunkodin_project_todolist"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
console.log("Hello world")
let contentDiv = document.getElementById("content")

;

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
        _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(textInput.value);
        refreshDisplay();
        document.getElementById(formId).reset();
    });
}

function configureNewProjectButton(){
    const newProjectButton = document.querySelector('#newProjectButton');
    newProjectButton.addEventListener("click", function(e){
        e.preventDefault();
        if(!document.getElementById("newProjectForm")){
            makeAForm("newProjectForm","submit project name",_logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject);         
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
    _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach((element, index) => {
        createProjectSpan(element.title, index)
    })
}

function createProjectSpan(title, index){
    const spancontainer = document.createElement('span');
    spancontainer.setAttribute("data-index",index);
        const span = document.createElement('span');
        span.innerText = title + ", ";
        span.addEventListener("click", function(e){
            _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].switchProject(title);
            refreshDisplay();
        });
        spancontainer.appendChild(span);
        xButton(spancontainer,_logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject);
    document.getElementById("projectsListParagraph").appendChild(spancontainer);
}

function displayCurrentProject(){
    const projectTitleParagraph = document.createElement('p');
    projectTitleParagraph.setAttribute("id", "projectTitleParagraph");
    const currentProjectTitle = _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTitle();
    projectTitleParagraph.innerText += `Current Project: ${currentProjectTitle}`
    contentDiv.appendChild(projectTitleParagraph);
}

function displayTasks(){
    const taskListParagraph = document.createElement('p');
    taskListParagraph.setAttribute("id", "taskListParagraph");
    taskListParagraph.innerText = "tasks: ";
    _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectArray().forEach((element, index) => {
        const span = document.createElement('span');
        span.setAttribute("data-index",index);
        span.innerText += element.title;
        xButton(span,_logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask);
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

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function logic () {
    let projects = [];
    let currentProject;
    addProject("default");
    
    function addTask(input){
        currentProject.array.push(new Task(input));
    }

    function addProject(title){
        projects.push(new Project(title));
        currentProject = projects.find(x => x.title == title);
    }

    function switchProject(title){
        currentProject = projects.find(x => x.title == title);
    }

    function Task(title) {
        this.title = title;
    }

    function Project(title){
        this.title = title;
        this.array = [];
    }

    function getProjectsArray(){
        return projects;
    }
    function getProjectArray(){
        return currentProject.array;
    }

    function getProjectTitle(){
        return currentProject.title;
    }

    function deleteTask(index){
        currentProject.array.splice(index, 1);
    }
    function deleteProject(index){
        if(projects.length>1){
            projects.splice(index, 1);
            if(projects.indexOf(currentProject)==-1){
                currentProject=projects[0]
            }
        }
    }

    return { currentProject, addTask, deleteTask, deleteProject, getProjectsArray, getProjectArray, getProjectTitle, addProject, switchProject };
})());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxDQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDREQUFnQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQXNCO0FBQzFCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQW1CO0FBQy9CO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCLCtEQUFtQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRUFBcUI7QUFDckQsMkRBQTJELG9CQUFvQjtBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFnQjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2pLQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGRcIilcbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbmltcG9ydCBsb2dpYyBmcm9tICcuL2xvZ2ljLmpzJztcblxubWFrZVRoZUZvcm0oXCJhZGRUYXNrRm9ybVwiKTtcbnJlZnJlc2hEaXNwbGF5KCk7XG5cbmZ1bmN0aW9uIG1ha2VUaGVGb3JtKGZvcm1JZCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGZvcm1JZCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBjcmVhdGVUZXh0SW5wdXQoXCJ0ZXh0SW5wdXRcIiwgZm9ybUlkKTtcbiAgICBjcmVhdGVTdWJtaXRCdXR0b24oXCJzdWJtaXRCdXR0b25cIixcInN1Ym1pdCB0YXNrXCIsZm9ybUlkKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKFwibmV3UHJvamVjdEJ1dHRvblwiLCBmb3JtSWQpOyAgICAgXG4gICAgY29uZmlndXJlTmV3VGFza1N1Ym1pdEJ1dHRvbihmb3JtSWQpO1xufVxuXG5mdW5jdGlvbiBtYWtlQUZvcm0oZm9ybUlkLGJ1dHRvbklubmVyVGV4dCxmdW5jdGlvbmFsaXR5KXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgZm9ybUlkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbGV0IHRleHRJbnB1dE5hbWUgPSBmb3JtSWQgKyBcInRleHRJbnB1dFwiO1xuICAgIGNyZWF0ZVRleHRJbnB1dCh0ZXh0SW5wdXROYW1lLCBmb3JtSWQpO1xuICAgIGxldCBidXR0b25OYW1lID0gZm9ybUlkICsgXCJzdWJtaXRCdXR0b25cIjtcbiAgICBjcmVhdGVTdWJtaXRCdXR0b24oYnV0dG9uTmFtZSwgYnV0dG9uSW5uZXJUZXh0LCBmb3JtSWQpO1xuICAgIGNvbmZpZ3VyZVN1Ym1pdEJ1dHRvbihidXR0b25OYW1lLHRleHRJbnB1dE5hbWUsZnVuY3Rpb25hbGl0eSk7XG4gICAgcmVmcmVzaERpc3BsYXkoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dElucHV0KGlucHV0SWQsZm9ybUlkKXtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24oYnV0dG9uSWQsaW5uZXJUZXh0LGZvcm1JZCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEJ1dHRvbihidXR0b25JZCxmb3JtSWQpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIm5ldyBwcm9qZWN0XCI7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGJ1dHRvbklkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY29uZmlndXJlTmV3UHJvamVjdEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBjb25maWd1cmVTdWJtaXRCdXR0b24oYnV0dG9uSWQsdGV4dElucHV0TmFtZSxmdW5jdGlvbmFsaXR5KXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25JZCk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmdW5jdGlvbmFsaXR5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRleHRJbnB1dE5hbWUpLnZhbHVlKTtcbiAgICAgICAgcmVmcmVzaERpc3BsYXkoKTtcbiAgICB9KSBcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlTmV3VGFza1N1Ym1pdEJ1dHRvbihmb3JtSWQpe1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCdXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0SW5wdXQnKTtcbiAgICAgICAgbG9naWMuYWRkVGFzayh0ZXh0SW5wdXQudmFsdWUpO1xuICAgICAgICByZWZyZXNoRGlzcGxheSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLnJlc2V0KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZU5ld1Byb2plY3RCdXR0b24oKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3RCdXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKSl7XG4gICAgICAgICAgICBtYWtlQUZvcm0oXCJuZXdQcm9qZWN0Rm9ybVwiLFwic3VibWl0IHByb2plY3QgbmFtZVwiLGxvZ2ljLmFkZFByb2plY3QpOyAgICAgICAgIFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybXN1Ym1pdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvd1wiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKXtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdHNMaXN0UGFyYWdyYXBoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNMaXN0UGFyYWdyYXBoXCIpO1xuICAgIHByb2plY3RzTGlzdFBhcmFncmFwaC5pbm5lclRleHQgPSBcInByb2plY3RzOiBcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RzTGlzdFBhcmFncmFwaCk7XG4gICAgbG9naWMuZ2V0UHJvamVjdHNBcnJheSgpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3RTcGFuKGVsZW1lbnQudGl0bGUsIGluZGV4KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTcGFuKHRpdGxlLCBpbmRleCl7XG4gICAgY29uc3Qgc3BhbmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIixpbmRleCk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGl0bGUgKyBcIiwgXCI7XG4gICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgbG9naWMuc3dpdGNoUHJvamVjdCh0aXRsZSk7XG4gICAgICAgICAgICByZWZyZXNoRGlzcGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BhbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgeEJ1dHRvbihzcGFuY29udGFpbmVyLGxvZ2ljLmRlbGV0ZVByb2plY3QpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNMaXN0UGFyYWdyYXBoXCIpLmFwcGVuZENoaWxkKHNwYW5jb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlUGFyYWdyYXBoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGl0bGUgPSBsb2dpYy5nZXRQcm9qZWN0VGl0bGUoKTtcbiAgICBwcm9qZWN0VGl0bGVQYXJhZ3JhcGguaW5uZXJUZXh0ICs9IGBDdXJyZW50IFByb2plY3Q6ICR7Y3VycmVudFByb2plY3RUaXRsZX1gXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKXtcbiAgICBjb25zdCB0YXNrTGlzdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrTGlzdFBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tMaXN0UGFyYWdyYXBoXCIpO1xuICAgIHRhc2tMaXN0UGFyYWdyYXBoLmlubmVyVGV4dCA9IFwidGFza3M6IFwiO1xuICAgIGxvZ2ljLmdldFByb2plY3RBcnJheSgpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLGluZGV4KTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgKz0gZWxlbWVudC50aXRsZTtcbiAgICAgICAgeEJ1dHRvbihzcGFuLGxvZ2ljLmRlbGV0ZVRhc2spO1xuICAgICAgICB0YXNrTGlzdFBhcmFncmFwaC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3RQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiB1bkRpc3BsYXkoKXtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzTGlzdFBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNMaXN0UGFyYWdyYXBoXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0UGFyYWdyYXBoXCIpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hEaXNwbGF5KCl7XG4gICAgdW5EaXNwbGF5KCk7XG4gICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0KCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHhCdXR0b24ocGFyZW50LGZ1bmN0aW9uYWxpdHkpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcInhcIjtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBmdW5jdGlvbmFsaXR5KHBhcmVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcbiAgICAgICAgcmVmcmVzaERpc3BsYXkoKTtcbiAgICB9KVxufSIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBsb2dpYyAoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuICAgIGFkZFByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFRhc2soaW5wdXQpe1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcnJheS5wdXNoKG5ldyBUYXNrKGlucHV0KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QodGl0bGUpKTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCh4ID0+IHgudGl0bGUgPT0gdGl0bGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFRhc2sodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFByb2plY3QodGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0c0FycmF5KCl7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEFycmF5KCl7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdC5hcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpe1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGluZGV4KXtcbiAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoPjEpe1xuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGlmKHByb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpPT0tMSl7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3Q9cHJvamVjdHNbMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGN1cnJlbnRQcm9qZWN0LCBhZGRUYXNrLCBkZWxldGVUYXNrLCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0c0FycmF5LCBnZXRQcm9qZWN0QXJyYXksIGdldFByb2plY3RUaXRsZSwgYWRkUHJvamVjdCwgc3dpdGNoUHJvamVjdCB9O1xufSkoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9