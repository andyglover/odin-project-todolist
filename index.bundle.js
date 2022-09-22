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
            });
        };
    });
}

function displayProjects(){
    const projectsListParagraph = document.createElement('p');
    projectsListParagraph.setAttribute("id", "projectsListParagraph");
    projectsListParagraph.innerText = "projects: ";
    contentDiv.appendChild(projectsListParagraph);
    _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsArray().forEach(element => createProjectSpan(element.title))
}

function createProjectSpan(title){
    const span = document.createElement('span');
    span.innerText = title + ", ";
    span.addEventListener("click", function(e){
        _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].switchProject(title);
        refreshDisplay()
    })
    document.getElementById("projectsListParagraph").appendChild(span);}

function displayTasks(){
    const projectTitleParagraph = document.createElement('p');
    projectTitleParagraph.setAttribute("id", "projectTitleParagraph");
    const currentProjectTitle = _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTitle();
    projectTitleParagraph.innerText += `Current Project: ${currentProjectTitle}`
    contentDiv.appendChild(projectTitleParagraph);

    const taskListParagraph = document.createElement('p');
    taskListParagraph.setAttribute("id", "taskListParagraph");
    taskListParagraph.innerText = "tasks: ";
    _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectArray().forEach(element => {
        const span = document.createElement('span');
        span.innerText += element.title;
        xButton(span);
        taskListParagraph.appendChild(span);
    })
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

function xButton(parent){
    const button = document.createElement('button');
    button.innerText = "x";
    parent.appendChild(button);
    button.addEventListener("click", function(e){
        console.log(parent);
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
    
    function createNewProject(title) {
        title = [];
        currentProject = title;
    }

    return { addTask, getProjectsArray, getProjectArray, getProjectTitle, addProject, switchProject };
})());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxDQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDREQUFnQjtBQUM3RTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQW1CO0FBQzNCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRUFBcUI7QUFDckQsMkRBQTJELG9CQUFvQjtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDcEpBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvbGlzdC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkXCIpXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG5pbXBvcnQgbG9naWMgZnJvbSAnLi9sb2dpYy5qcyc7XG5cbm1ha2VUaGVGb3JtKFwiYWRkVGFza0Zvcm1cIik7XG5yZWZyZXNoRGlzcGxheSgpO1xuXG5mdW5jdGlvbiBtYWtlVGhlRm9ybShmb3JtSWQpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBmb3JtSWQpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgY3JlYXRlVGV4dElucHV0KFwidGV4dElucHV0XCIsIGZvcm1JZCk7XG4gICAgY3JlYXRlU3VibWl0QnV0dG9uKFwic3VibWl0QnV0dG9uXCIsXCJzdWJtaXQgdGFza1wiLGZvcm1JZCk7XG4gICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbihcIm5ld1Byb2plY3RCdXR0b25cIiwgZm9ybUlkKTsgICAgIFxuICAgIGNvbmZpZ3VyZU5ld1Rhc2tTdWJtaXRCdXR0b24oZm9ybUlkKTtcbn1cblxuZnVuY3Rpb24gbWFrZUFGb3JtKGZvcm1JZCxidXR0b25Jbm5lclRleHQsZnVuY3Rpb25hbGl0eSl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGZvcm1JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGxldCB0ZXh0SW5wdXROYW1lID0gZm9ybUlkICsgXCJ0ZXh0SW5wdXRcIjtcbiAgICBjcmVhdGVUZXh0SW5wdXQodGV4dElucHV0TmFtZSwgZm9ybUlkKTtcbiAgICBsZXQgYnV0dG9uTmFtZSA9IGZvcm1JZCArIFwic3VibWl0QnV0dG9uXCI7XG4gICAgY3JlYXRlU3VibWl0QnV0dG9uKGJ1dHRvbk5hbWUsIGJ1dHRvbklubmVyVGV4dCwgZm9ybUlkKTtcbiAgICBjb25maWd1cmVTdWJtaXRCdXR0b24oYnV0dG9uTmFtZSx0ZXh0SW5wdXROYW1lLGZ1bmN0aW9uYWxpdHkpO1xuICAgIHJlZnJlc2hEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRJbnB1dChpbnB1dElkLGZvcm1JZCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VibWl0QnV0dG9uKGJ1dHRvbklkLGlubmVyVGV4dCxmb3JtSWQpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGJ1dHRvbklkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oYnV0dG9uSWQsZm9ybUlkKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJuZXcgcHJvamVjdFwiO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBidXR0b25JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGNvbmZpZ3VyZU5ld1Byb2plY3RCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlU3VibWl0QnV0dG9uKGJ1dHRvbklkLHRleHRJbnB1dE5hbWUsZnVuY3Rpb25hbGl0eSl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZnVuY3Rpb25hbGl0eShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZXh0SW5wdXROYW1lKS52YWx1ZSk7XG4gICAgICAgIHJlZnJlc2hEaXNwbGF5KCk7XG4gICAgfSkgXG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZU5ld1Rhc2tTdWJtaXRCdXR0b24oZm9ybUlkKXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dElucHV0Jyk7XG4gICAgICAgIGxvZ2ljLmFkZFRhc2sodGV4dElucHV0LnZhbHVlKTtcbiAgICAgICAgcmVmcmVzaERpc3BsYXkoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5yZXNldCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb25maWd1cmVOZXdQcm9qZWN0QnV0dG9uKCl7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0QnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikpe1xuICAgICAgICAgICAgbWFrZUFGb3JtKFwibmV3UHJvamVjdEZvcm1cIixcInN1Ym1pdCBwcm9qZWN0IG5hbWVcIixsb2dpYy5hZGRQcm9qZWN0KTsgICAgICAgICBcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1zdWJtaXRCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RzTGlzdFBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzTGlzdFBhcmFncmFwaFwiKTtcbiAgICBwcm9qZWN0c0xpc3RQYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJwcm9qZWN0czogXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3RQYXJhZ3JhcGgpO1xuICAgIGxvZ2ljLmdldFByb2plY3RzQXJyYXkoKS5mb3JFYWNoKGVsZW1lbnQgPT4gY3JlYXRlUHJvamVjdFNwYW4oZWxlbWVudC50aXRsZSkpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTcGFuKHRpdGxlKXtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gdGl0bGUgKyBcIiwgXCI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGxvZ2ljLnN3aXRjaFByb2plY3QodGl0bGUpO1xuICAgICAgICByZWZyZXNoRGlzcGxheSgpXG4gICAgfSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzTGlzdFBhcmFncmFwaFwiKS5hcHBlbmRDaGlsZChzcGFuKTt9XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpe1xuICAgIGNvbnN0IHByb2plY3RUaXRsZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGl0bGVQYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVQYXJhZ3JhcGhcIik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RUaXRsZSA9IGxvZ2ljLmdldFByb2plY3RUaXRsZSgpO1xuICAgIHByb2plY3RUaXRsZVBhcmFncmFwaC5pbm5lclRleHQgKz0gYEN1cnJlbnQgUHJvamVjdDogJHtjdXJyZW50UHJvamVjdFRpdGxlfWBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVBhcmFncmFwaCk7XG5cbiAgICBjb25zdCB0YXNrTGlzdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrTGlzdFBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tMaXN0UGFyYWdyYXBoXCIpO1xuICAgIHRhc2tMaXN0UGFyYWdyYXBoLmlubmVyVGV4dCA9IFwidGFza3M6IFwiO1xuICAgIGxvZ2ljLmdldFByb2plY3RBcnJheSgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ICs9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgIHhCdXR0b24oc3Bhbik7XG4gICAgICAgIHRhc2tMaXN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdFBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIHVuRGlzcGxheVRhc2tzKCl7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0xpc3RQYXJhZ3JhcGhcIikpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzTGlzdFBhcmFncmFwaFwiKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVQYXJhZ3JhcGhcIikpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVBhcmFncmFwaFwiKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RQYXJhZ3JhcGhcIikucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWZyZXNoRGlzcGxheSgpe1xuICAgIHVuRGlzcGxheVRhc2tzKCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHhCdXR0b24ocGFyZW50KXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJ4XCI7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50KTtcbiAgICB9KVxufSIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBsb2dpYyAoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuICAgIGFkZFByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFRhc2soaW5wdXQpe1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcnJheS5wdXNoKG5ldyBUYXNrKGlucHV0KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QodGl0bGUpKTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCh4ID0+IHgudGl0bGUgPT0gdGl0bGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFRhc2sodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFByb2plY3QodGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0c0FycmF5KCl7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEFycmF5KCl7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdC5hcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gW107XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdGl0bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVGFzaywgZ2V0UHJvamVjdHNBcnJheSwgZ2V0UHJvamVjdEFycmF5LCBnZXRQcm9qZWN0VGl0bGUsIGFkZFByb2plY3QsIHN3aXRjaFByb2plY3QgfTtcbn0pKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==