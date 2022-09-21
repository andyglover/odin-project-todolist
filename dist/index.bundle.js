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
    taskListParagraph.innerText = "tasks: "
    _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectArray().forEach(element => taskListParagraph.innerText += element.title + ", ")
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
        console.log(`Current project: ${currentProject.title}`);
        console.log(currentProject.array);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxDQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDREQUFnQjtBQUM3RTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQW1CO0FBQzNCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRUFBcUI7QUFDckQsMkRBQTJELG9CQUFvQjtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFxQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdElBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUMsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZFwiKVxubGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuaW1wb3J0IGxvZ2ljIGZyb20gJy4vbG9naWMuanMnO1xuXG5tYWtlVGhlRm9ybShcImFkZFRhc2tGb3JtXCIpO1xucmVmcmVzaERpc3BsYXkoKTtcblxuZnVuY3Rpb24gbWFrZVRoZUZvcm0oZm9ybUlkKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgZm9ybUlkKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGNyZWF0ZVRleHRJbnB1dChcInRleHRJbnB1dFwiLCBmb3JtSWQpO1xuICAgIGNyZWF0ZVN1Ym1pdEJ1dHRvbihcInN1Ym1pdEJ1dHRvblwiLFwic3VibWl0IHRhc2tcIixmb3JtSWQpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oXCJuZXdQcm9qZWN0QnV0dG9uXCIsIGZvcm1JZCk7ICAgICBcbiAgICBjb25maWd1cmVOZXdUYXNrU3VibWl0QnV0dG9uKGZvcm1JZCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VBRm9ybShmb3JtSWQsYnV0dG9uSW5uZXJUZXh0LGZ1bmN0aW9uYWxpdHkpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBmb3JtSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBsZXQgdGV4dElucHV0TmFtZSA9IGZvcm1JZCArIFwidGV4dElucHV0XCI7XG4gICAgY3JlYXRlVGV4dElucHV0KHRleHRJbnB1dE5hbWUsIGZvcm1JZCk7XG4gICAgbGV0IGJ1dHRvbk5hbWUgPSBmb3JtSWQgKyBcInN1Ym1pdEJ1dHRvblwiO1xuICAgIGNyZWF0ZVN1Ym1pdEJ1dHRvbihidXR0b25OYW1lLCBidXR0b25Jbm5lclRleHQsIGZvcm1JZCk7XG4gICAgY29uZmlndXJlU3VibWl0QnV0dG9uKGJ1dHRvbk5hbWUsdGV4dElucHV0TmFtZSxmdW5jdGlvbmFsaXR5KTtcbiAgICByZWZyZXNoRGlzcGxheSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0SW5wdXQoaW5wdXRJZCxmb3JtSWQpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dElkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbihidXR0b25JZCxpbm5lclRleHQsZm9ybUlkKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBidXR0b25JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKGJ1dHRvbklkLGZvcm1JZCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwibmV3IHByb2plY3RcIjtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBjb25maWd1cmVOZXdQcm9qZWN0QnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZVN1Ym1pdEJ1dHRvbihidXR0b25JZCx0ZXh0SW5wdXROYW1lLGZ1bmN0aW9uYWxpdHkpe1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbklkKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZ1bmN0aW9uYWxpdHkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGV4dElucHV0TmFtZSkudmFsdWUpO1xuICAgICAgICByZWZyZXNoRGlzcGxheSgpO1xuICAgIH0pIFxufVxuXG5mdW5jdGlvbiBjb25maWd1cmVOZXdUYXNrU3VibWl0QnV0dG9uKGZvcm1JZCl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRJbnB1dCcpO1xuICAgICAgICBsb2dpYy5hZGRUYXNrKHRleHRJbnB1dC52YWx1ZSk7XG4gICAgICAgIHJlZnJlc2hEaXNwbGF5KCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkucmVzZXQoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlTmV3UHJvamVjdEJ1dHRvbigpe1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdEJ1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpKXtcbiAgICAgICAgICAgIG1ha2VBRm9ybShcIm5ld1Byb2plY3RGb3JtXCIsXCJzdWJtaXQgcHJvamVjdCBuYW1lXCIsbG9naWMuYWRkUHJvamVjdCk7ICAgICAgICAgXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3Jtc3VibWl0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpe1xuICAgIGNvbnN0IHByb2plY3RzTGlzdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0c0xpc3RQYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c0xpc3RQYXJhZ3JhcGhcIik7XG4gICAgcHJvamVjdHNMaXN0UGFyYWdyYXBoLmlubmVyVGV4dCA9IFwicHJvamVjdHM6IFwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0UGFyYWdyYXBoKTtcbiAgICBsb2dpYy5nZXRQcm9qZWN0c0FycmF5KCkuZm9yRWFjaChlbGVtZW50ID0+IGNyZWF0ZVByb2plY3RTcGFuKGVsZW1lbnQudGl0bGUpKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U3Bhbih0aXRsZSl7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IHRpdGxlICsgXCIsIFwiO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBsb2dpYy5zd2l0Y2hQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgcmVmcmVzaERpc3BsYXkoKVxuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0xpc3RQYXJhZ3JhcGhcIikuYXBwZW5kQ2hpbGQoc3Bhbik7fVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKXtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlUGFyYWdyYXBoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGl0bGUgPSBsb2dpYy5nZXRQcm9qZWN0VGl0bGUoKTtcbiAgICBwcm9qZWN0VGl0bGVQYXJhZ3JhcGguaW5uZXJUZXh0ICs9IGBDdXJyZW50IFByb2plY3Q6ICR7Y3VycmVudFByb2plY3RUaXRsZX1gXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVQYXJhZ3JhcGgpO1xuXG4gICAgY29uc3QgdGFza0xpc3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0xpc3RQYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrTGlzdFBhcmFncmFwaFwiKTtcbiAgICB0YXNrTGlzdFBhcmFncmFwaC5pbm5lclRleHQgPSBcInRhc2tzOiBcIlxuICAgIGxvZ2ljLmdldFByb2plY3RBcnJheSgpLmZvckVhY2goZWxlbWVudCA9PiB0YXNrTGlzdFBhcmFncmFwaC5pbm5lclRleHQgKz0gZWxlbWVudC50aXRsZSArIFwiLCBcIilcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0UGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gdW5EaXNwbGF5VGFza3MoKXtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzTGlzdFBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNMaXN0UGFyYWdyYXBoXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0UGFyYWdyYXBoXCIpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hEaXNwbGF5KCl7XG4gICAgdW5EaXNwbGF5VGFza3MoKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBsb2dpYyAoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuICAgIGFkZFByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFRhc2soaW5wdXQpe1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcnJheS5wdXNoKG5ldyBUYXNrKGlucHV0KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2plY3Q6ICR7Y3VycmVudFByb2plY3QudGl0bGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdCh0aXRsZSkpO1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoeCA9PiB4LnRpdGxlID09IHRpdGxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gVGFzayh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RzQXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0QXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LmFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RUaXRsZSgpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3QudGl0bGU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSBbXTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSB0aXRsZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrLCBnZXRQcm9qZWN0c0FycmF5LCBnZXRQcm9qZWN0QXJyYXksIGdldFByb2plY3RUaXRsZSwgYWRkUHJvamVjdCwgc3dpdGNoUHJvamVjdCB9O1xufSkoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9