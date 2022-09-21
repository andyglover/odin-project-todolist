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

;

makeTheForm("addTaskForm");

function makeTheForm(formId){
    const form = document.createElement('form'); //create form
    form.setAttribute("id", formId);
    document.getElementById("content").appendChild(form); //append form
    createTextInput("textInput", formId);
    createSubmitButton("submitButton","submit task",formId);
    createNewProjectButton("newProjectButton", formId);     
    configureNewTaskSubmitButton(formId);
    configureNewProjectButton();
}

function makeAForm(formId,buttonInnerText){
    const form = document.createElement('form');
    form.setAttribute("id", formId);
    document.getElementById("content").appendChild(form);
    let textInputName = formId + "textInput";
    createTextInput(textInputName, formId);
    let buttonName = formId + "submitButton";
    createSubmitButton(buttonName, buttonInnerText, formId);
    configureSubmitButton(buttonName,textInputName);
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
        _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(textInput.value);
        unDisplayTasks();
        displayTasks(formId);
        document.getElementById(formId).reset();
    });
}
function configureNewProjectButton(){
    const newProjectButton = document.querySelector('#newProjectButton');
    newProjectButton.addEventListener("click", function(e){
        e.preventDefault();
        // logic.promptForProjectName();
        makeAForm("newProjectForm","submit project name");

    });
    console.log();
}
function displayTasks(formId){
    const projectTitleParagraph = document.createElement('p');
    projectTitleParagraph.setAttribute("id", "projectTitleParagraph");
    const currentProjectTitle = _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTitle();
    projectTitleParagraph.innerText += `Current Project: ${currentProjectTitle}`
    document.getElementById(formId).appendChild(projectTitleParagraph);

    const taskListParagraph = document.createElement('p');
    taskListParagraph.setAttribute("id", "taskListParagraph");
    _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectArray().forEach(element => taskListParagraph.innerText += element.title + ", ")
    document.getElementById(formId).appendChild(taskListParagraph);
}
function unDisplayTasks(){
    if(document.getElementById("projectTitleParagraph")){
        document.getElementById("projectTitleParagraph").remove();
    }
    if(document.getElementById("taskListParagraph")){
        document.getElementById("taskListParagraph").remove();
    }
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
    let defaultProject = new Project("default");
    let currentProject = defaultProject;
    
    function addTask(input){
        currentProject.array.push(new Task(input));
        console.log(`Current project: ${currentProject.title}`);
        console.log(currentProject.array);
    }
    
    function addProject(title){
        projects.push(new Project(title));
    }

    function Task(title) {
        this.title = title;
    }

    function Project(title){
        this.title = title;
        this.array = [];
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
    // function promptForProjectName(){
    //     let input = prompt("Project name?","Project");
    //     if(input != null){
    //         createNewProject(input);
    //     }
    // }

    return { addTask, getProjectArray, getProjectTitle,createNewProject,  };
})());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9COztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUFxQjtBQUNyRCwyREFBMkQsb0JBQW9CO0FBQy9FOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakdBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvbGlzdC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkXCIpXG5cbmltcG9ydCBsb2dpYyBmcm9tICcuL2xvZ2ljLmpzJztcblxubWFrZVRoZUZvcm0oXCJhZGRUYXNrRm9ybVwiKTtcblxuZnVuY3Rpb24gbWFrZVRoZUZvcm0oZm9ybUlkKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyAvL2NyZWF0ZSBmb3JtXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBmb3JtSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmb3JtKTsgLy9hcHBlbmQgZm9ybVxuICAgIGNyZWF0ZVRleHRJbnB1dChcInRleHRJbnB1dFwiLCBmb3JtSWQpO1xuICAgIGNyZWF0ZVN1Ym1pdEJ1dHRvbihcInN1Ym1pdEJ1dHRvblwiLFwic3VibWl0IHRhc2tcIixmb3JtSWQpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oXCJuZXdQcm9qZWN0QnV0dG9uXCIsIGZvcm1JZCk7ICAgICBcbiAgICBjb25maWd1cmVOZXdUYXNrU3VibWl0QnV0dG9uKGZvcm1JZCk7XG4gICAgY29uZmlndXJlTmV3UHJvamVjdEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBtYWtlQUZvcm0oZm9ybUlkLGJ1dHRvbklubmVyVGV4dCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGZvcm1JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGxldCB0ZXh0SW5wdXROYW1lID0gZm9ybUlkICsgXCJ0ZXh0SW5wdXRcIjtcbiAgICBjcmVhdGVUZXh0SW5wdXQodGV4dElucHV0TmFtZSwgZm9ybUlkKTtcbiAgICBsZXQgYnV0dG9uTmFtZSA9IGZvcm1JZCArIFwic3VibWl0QnV0dG9uXCI7XG4gICAgY3JlYXRlU3VibWl0QnV0dG9uKGJ1dHRvbk5hbWUsIGJ1dHRvbklubmVyVGV4dCwgZm9ybUlkKTtcbiAgICBjb25maWd1cmVTdWJtaXRCdXR0b24oYnV0dG9uTmFtZSx0ZXh0SW5wdXROYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dElucHV0KGlucHV0SWQsZm9ybUlkKXtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuZnVuY3Rpb24gY3JlYXRlU3VibWl0QnV0dG9uKGJ1dHRvbklkLGlubmVyVGV4dCxmb3JtSWQpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGJ1dHRvbklkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKGJ1dHRvbklkLGZvcm1JZCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwibmV3IHByb2plY3RcIjtcbiAgICAvLyBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cbmZ1bmN0aW9uIGNvbmZpZ3VyZVN1Ym1pdEJ1dHRvbihidXR0b25JZCx0ZXh0SW5wdXROYW1lKXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25JZCk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZXh0SW5wdXROYW1lKS52YWx1ZSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlTmV3VGFza1N1Ym1pdEJ1dHRvbihmb3JtSWQpe1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCdXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0SW5wdXQnKTtcbiAgICAgICAgLy8gZGlzcGxheUlucHV0KHRleHRJbnB1dC52YWx1ZSk7XG4gICAgICAgIGxvZ2ljLmFkZFRhc2sodGV4dElucHV0LnZhbHVlKTtcbiAgICAgICAgdW5EaXNwbGF5VGFza3MoKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKGZvcm1JZCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkucmVzZXQoKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNvbmZpZ3VyZU5ld1Byb2plY3RCdXR0b24oKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3RCdXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBsb2dpYy5wcm9tcHRGb3JQcm9qZWN0TmFtZSgpO1xuICAgICAgICBtYWtlQUZvcm0oXCJuZXdQcm9qZWN0Rm9ybVwiLFwic3VibWl0IHByb2plY3QgbmFtZVwiKTtcblxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCk7XG59XG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoZm9ybUlkKXtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlUGFyYWdyYXBoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGl0bGUgPSBsb2dpYy5nZXRQcm9qZWN0VGl0bGUoKTtcbiAgICBwcm9qZWN0VGl0bGVQYXJhZ3JhcGguaW5uZXJUZXh0ICs9IGBDdXJyZW50IFByb2plY3Q6ICR7Y3VycmVudFByb2plY3RUaXRsZX1gXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVQYXJhZ3JhcGgpO1xuXG4gICAgY29uc3QgdGFza0xpc3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0xpc3RQYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrTGlzdFBhcmFncmFwaFwiKTtcbiAgICBsb2dpYy5nZXRQcm9qZWN0QXJyYXkoKS5mb3JFYWNoKGVsZW1lbnQgPT4gdGFza0xpc3RQYXJhZ3JhcGguaW5uZXJUZXh0ICs9IGVsZW1lbnQudGl0bGUgKyBcIiwgXCIpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZCh0YXNrTGlzdFBhcmFncmFwaCk7XG59XG5mdW5jdGlvbiB1bkRpc3BsYXlUYXNrcygpe1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVQYXJhZ3JhcGhcIikucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RQYXJhZ3JhcGhcIikpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0UGFyYWdyYXBoXCIpLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBsb2dpYyAoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFRhc2soaW5wdXQpe1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcnJheS5wdXNoKG5ldyBUYXNrKGlucHV0KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2plY3Q6ICR7Y3VycmVudFByb2plY3QudGl0bGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QodGl0bGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBUYXNrKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmFycmF5ID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEFycmF5KCl7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdC5hcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gW107XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdGl0bGU7XG4gICAgfVxuICAgIC8vIGZ1bmN0aW9uIHByb21wdEZvclByb2plY3ROYW1lKCl7XG4gICAgLy8gICAgIGxldCBpbnB1dCA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIixcIlByb2plY3RcIik7XG4gICAgLy8gICAgIGlmKGlucHV0ICE9IG51bGwpe1xuICAgIC8vICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChpbnB1dCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrLCBnZXRQcm9qZWN0QXJyYXksIGdldFByb2plY3RUaXRsZSxjcmVhdGVOZXdQcm9qZWN0LCAgfTtcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=