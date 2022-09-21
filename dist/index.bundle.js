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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9COztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUFxQjtBQUNyRCwyREFBMkQsb0JBQW9CO0FBQy9FOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakdBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGRcIilcblxuaW1wb3J0IGxvZ2ljIGZyb20gJy4vbG9naWMuanMnO1xuXG5tYWtlVGhlRm9ybShcImFkZFRhc2tGb3JtXCIpO1xuXG5mdW5jdGlvbiBtYWtlVGhlRm9ybShmb3JtSWQpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7IC8vY3JlYXRlIGZvcm1cbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGZvcm1JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGZvcm0pOyAvL2FwcGVuZCBmb3JtXG4gICAgY3JlYXRlVGV4dElucHV0KFwidGV4dElucHV0XCIsIGZvcm1JZCk7XG4gICAgY3JlYXRlU3VibWl0QnV0dG9uKFwic3VibWl0QnV0dG9uXCIsXCJzdWJtaXQgdGFza1wiLGZvcm1JZCk7XG4gICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbihcIm5ld1Byb2plY3RCdXR0b25cIiwgZm9ybUlkKTsgICAgIFxuICAgIGNvbmZpZ3VyZU5ld1Rhc2tTdWJtaXRCdXR0b24oZm9ybUlkKTtcbiAgICBjb25maWd1cmVOZXdQcm9qZWN0QnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VBRm9ybShmb3JtSWQsYnV0dG9uSW5uZXJUZXh0KXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgZm9ybUlkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbGV0IHRleHRJbnB1dE5hbWUgPSBmb3JtSWQgKyBcInRleHRJbnB1dFwiO1xuICAgIGNyZWF0ZVRleHRJbnB1dCh0ZXh0SW5wdXROYW1lLCBmb3JtSWQpO1xuICAgIGxldCBidXR0b25OYW1lID0gZm9ybUlkICsgXCJzdWJtaXRCdXR0b25cIjtcbiAgICBjcmVhdGVTdWJtaXRCdXR0b24oYnV0dG9uTmFtZSwgYnV0dG9uSW5uZXJUZXh0LCBmb3JtSWQpO1xuICAgIGNvbmZpZ3VyZVN1Ym1pdEJ1dHRvbihidXR0b25OYW1lLHRleHRJbnB1dE5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0SW5wdXQoaW5wdXRJZCxmb3JtSWQpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dElkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24oYnV0dG9uSWQsaW5uZXJUZXh0LGZvcm1JZCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oYnV0dG9uSWQsZm9ybUlkKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJuZXcgcHJvamVjdFwiO1xuICAgIC8vIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBidXR0b25JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuZnVuY3Rpb24gY29uZmlndXJlU3VibWl0QnV0dG9uKGJ1dHRvbklkLHRleHRJbnB1dE5hbWUpe1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbklkKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRleHRJbnB1dE5hbWUpLnZhbHVlKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmVOZXdUYXNrU3VibWl0QnV0dG9uKGZvcm1JZCl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRJbnB1dCcpO1xuICAgICAgICAvLyBkaXNwbGF5SW5wdXQodGV4dElucHV0LnZhbHVlKTtcbiAgICAgICAgbG9naWMuYWRkVGFzayh0ZXh0SW5wdXQudmFsdWUpO1xuICAgICAgICB1bkRpc3BsYXlUYXNrcygpO1xuICAgICAgICBkaXNwbGF5VGFza3MoZm9ybUlkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5yZXNldCgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29uZmlndXJlTmV3UHJvamVjdEJ1dHRvbigpe1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdEJ1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGxvZ2ljLnByb21wdEZvclByb2plY3ROYW1lKCk7XG4gICAgICAgIG1ha2VBRm9ybShcIm5ld1Byb2plY3RGb3JtXCIsXCJzdWJtaXQgcHJvamVjdCBuYW1lXCIpO1xuXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coKTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhmb3JtSWQpe1xuICAgIGNvbnN0IHByb2plY3RUaXRsZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGl0bGVQYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVQYXJhZ3JhcGhcIik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RUaXRsZSA9IGxvZ2ljLmdldFByb2plY3RUaXRsZSgpO1xuICAgIHByb2plY3RUaXRsZVBhcmFncmFwaC5pbm5lclRleHQgKz0gYEN1cnJlbnQgUHJvamVjdDogJHtjdXJyZW50UHJvamVjdFRpdGxlfWBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVBhcmFncmFwaCk7XG5cbiAgICBjb25zdCB0YXNrTGlzdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrTGlzdFBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tMaXN0UGFyYWdyYXBoXCIpO1xuICAgIGxvZ2ljLmdldFByb2plY3RBcnJheSgpLmZvckVhY2goZWxlbWVudCA9PiB0YXNrTGlzdFBhcmFncmFwaC5pbm5lclRleHQgKz0gZWxlbWVudC50aXRsZSArIFwiLCBcIilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKHRhc2tMaXN0UGFyYWdyYXBoKTtcbn1cbmZ1bmN0aW9uIHVuRGlzcGxheVRhc2tzKCl7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVQYXJhZ3JhcGhcIikpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVBhcmFncmFwaFwiKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RQYXJhZ3JhcGhcIikucmVtb3ZlKCk7XG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGxvZ2ljICgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBhZGRQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSBcImRlZmF1bHRcIik7XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVGFzayhpbnB1dCl7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFycmF5LnB1c2gobmV3IFRhc2soaW5wdXQpKTtcbiAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgcHJvamVjdDogJHtjdXJyZW50UHJvamVjdC50aXRsZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QuYXJyYXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHRpdGxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gVGFzayh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RBcnJheSgpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3QuYXJyYXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdFRpdGxlKCl7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdC50aXRsZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IFtdO1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHRpdGxlO1xuICAgIH1cbiAgICAvLyBmdW5jdGlvbiBwcm9tcHRGb3JQcm9qZWN0TmFtZSgpe1xuICAgIC8vICAgICBsZXQgaW5wdXQgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIsXCJQcm9qZWN0XCIpO1xuICAgIC8vICAgICBpZihpbnB1dCAhPSBudWxsKXtcbiAgICAvLyAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoaW5wdXQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHsgYWRkVGFzaywgZ2V0UHJvamVjdEFycmF5LCBnZXRQcm9qZWN0VGl0bGUsY3JlYXRlTmV3UHJvamVjdCwgIH07XG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9