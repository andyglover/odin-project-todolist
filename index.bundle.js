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
displayTasks("addTaskForm");

function makeTheForm(formId){
    const form = document.createElement('form'); //create form
    form.setAttribute("id", formId);
    document.getElementById("content").appendChild(form); //append form
    createTextInput("textInput", formId);
    createSubmitButton("submitButton","submit task",formId);
    createNewProjectButton("newProjectButton", formId);     
    configureNewTaskSubmitButton(formId);
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
    button.setAttribute("id", buttonId);
    document.getElementById(formId).appendChild(button);
    configureNewProjectButton();
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
        if(!document.getElementById("newProjectForm")){
        makeAForm("newProjectForm","submit project name");
        }});
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
    addProject("default");
    let currentProject = projects.find(x => x.title == "default");
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUVBQXFCO0FBQ3JELDJEQUEyRCxvQkFBb0I7QUFDL0U7O0FBRUE7QUFDQTtBQUNBLElBQUksaUVBQXFCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckdBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGRcIilcblxuaW1wb3J0IGxvZ2ljIGZyb20gJy4vbG9naWMuanMnO1xuXG5tYWtlVGhlRm9ybShcImFkZFRhc2tGb3JtXCIpO1xuZGlzcGxheVRhc2tzKFwiYWRkVGFza0Zvcm1cIik7XG5cbmZ1bmN0aW9uIG1ha2VUaGVGb3JtKGZvcm1JZCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgLy9jcmVhdGUgZm9ybVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgZm9ybUlkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9ybSk7IC8vYXBwZW5kIGZvcm1cbiAgICBjcmVhdGVUZXh0SW5wdXQoXCJ0ZXh0SW5wdXRcIiwgZm9ybUlkKTtcbiAgICBjcmVhdGVTdWJtaXRCdXR0b24oXCJzdWJtaXRCdXR0b25cIixcInN1Ym1pdCB0YXNrXCIsZm9ybUlkKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKFwibmV3UHJvamVjdEJ1dHRvblwiLCBmb3JtSWQpOyAgICAgXG4gICAgY29uZmlndXJlTmV3VGFza1N1Ym1pdEJ1dHRvbihmb3JtSWQpO1xufVxuXG5mdW5jdGlvbiBtYWtlQUZvcm0oZm9ybUlkLGJ1dHRvbklubmVyVGV4dCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGZvcm1JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGxldCB0ZXh0SW5wdXROYW1lID0gZm9ybUlkICsgXCJ0ZXh0SW5wdXRcIjtcbiAgICBjcmVhdGVUZXh0SW5wdXQodGV4dElucHV0TmFtZSwgZm9ybUlkKTtcbiAgICBsZXQgYnV0dG9uTmFtZSA9IGZvcm1JZCArIFwic3VibWl0QnV0dG9uXCI7XG4gICAgY3JlYXRlU3VibWl0QnV0dG9uKGJ1dHRvbk5hbWUsIGJ1dHRvbklubmVyVGV4dCwgZm9ybUlkKTtcbiAgICBjb25maWd1cmVTdWJtaXRCdXR0b24oYnV0dG9uTmFtZSx0ZXh0SW5wdXROYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dElucHV0KGlucHV0SWQsZm9ybUlkKXtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24oYnV0dG9uSWQsaW5uZXJUZXh0LGZvcm1JZCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEJ1dHRvbihidXR0b25JZCxmb3JtSWQpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIm5ldyBwcm9qZWN0XCI7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGJ1dHRvbklkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY29uZmlndXJlTmV3UHJvamVjdEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBjb25maWd1cmVTdWJtaXRCdXR0b24oYnV0dG9uSWQsdGV4dElucHV0TmFtZSl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGV4dElucHV0TmFtZSkudmFsdWUpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZU5ld1Rhc2tTdWJtaXRCdXR0b24oZm9ybUlkKXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dElucHV0Jyk7XG4gICAgICAgIC8vIGRpc3BsYXlJbnB1dCh0ZXh0SW5wdXQudmFsdWUpO1xuICAgICAgICBsb2dpYy5hZGRUYXNrKHRleHRJbnB1dC52YWx1ZSk7XG4gICAgICAgIHVuRGlzcGxheVRhc2tzKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyhmb3JtSWQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLnJlc2V0KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZU5ld1Byb2plY3RCdXR0b24oKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3RCdXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKSl7XG4gICAgICAgIG1ha2VBRm9ybShcIm5ld1Byb2plY3RGb3JtXCIsXCJzdWJtaXQgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgICB9fSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhmb3JtSWQpe1xuICAgIGNvbnN0IHByb2plY3RUaXRsZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGl0bGVQYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVQYXJhZ3JhcGhcIik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RUaXRsZSA9IGxvZ2ljLmdldFByb2plY3RUaXRsZSgpO1xuICAgIHByb2plY3RUaXRsZVBhcmFncmFwaC5pbm5lclRleHQgKz0gYEN1cnJlbnQgUHJvamVjdDogJHtjdXJyZW50UHJvamVjdFRpdGxlfWBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVBhcmFncmFwaCk7XG5cbiAgICBjb25zdCB0YXNrTGlzdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrTGlzdFBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tMaXN0UGFyYWdyYXBoXCIpO1xuICAgIGxvZ2ljLmdldFByb2plY3RBcnJheSgpLmZvckVhY2goZWxlbWVudCA9PiB0YXNrTGlzdFBhcmFncmFwaC5pbm5lclRleHQgKz0gZWxlbWVudC50aXRsZSArIFwiLCBcIilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKHRhc2tMaXN0UGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gdW5EaXNwbGF5VGFza3MoKXtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0UGFyYWdyYXBoXCIpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKS5yZW1vdmUoKTtcbiAgICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbG9naWMgKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIGFkZFByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoeCA9PiB4LnRpdGxlID09IFwiZGVmYXVsdFwiKTtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRUYXNrKGlucHV0KXtcbiAgICAgICAgY3VycmVudFByb2plY3QuYXJyYXkucHVzaChuZXcgVGFzayhpbnB1dCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ3VycmVudCBwcm9qZWN0OiAke2N1cnJlbnRQcm9qZWN0LnRpdGxlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC5hcnJheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QodGl0bGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBUYXNrKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmFycmF5ID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEFycmF5KCl7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdC5hcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gW107XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdGl0bGU7XG4gICAgfVxuICAgIC8vIGZ1bmN0aW9uIHByb21wdEZvclByb2plY3ROYW1lKCl7XG4gICAgLy8gICAgIGxldCBpbnB1dCA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIixcIlByb2plY3RcIik7XG4gICAgLy8gICAgIGlmKGlucHV0ICE9IG51bGwpe1xuICAgIC8vICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChpbnB1dCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrLCBnZXRQcm9qZWN0QXJyYXksIGdldFByb2plY3RUaXRsZSxjcmVhdGVOZXdQcm9qZWN0LCAgfTtcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=