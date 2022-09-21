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
        makeAForm("newProjectForm","submit project name");
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9COztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRUFBcUI7QUFDckQsMkRBQTJELG9CQUFvQjtBQUMvRTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpRUFBcUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuR0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUJBQXFCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZFwiKVxuXG5pbXBvcnQgbG9naWMgZnJvbSAnLi9sb2dpYy5qcyc7XG5cbm1ha2VUaGVGb3JtKFwiYWRkVGFza0Zvcm1cIik7XG5cbmZ1bmN0aW9uIG1ha2VUaGVGb3JtKGZvcm1JZCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgLy9jcmVhdGUgZm9ybVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgZm9ybUlkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9ybSk7IC8vYXBwZW5kIGZvcm1cbiAgICBjcmVhdGVUZXh0SW5wdXQoXCJ0ZXh0SW5wdXRcIiwgZm9ybUlkKTtcbiAgICBjcmVhdGVTdWJtaXRCdXR0b24oXCJzdWJtaXRCdXR0b25cIixcInN1Ym1pdCB0YXNrXCIsZm9ybUlkKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKFwibmV3UHJvamVjdEJ1dHRvblwiLCBmb3JtSWQpOyAgICAgXG4gICAgY29uZmlndXJlTmV3VGFza1N1Ym1pdEJ1dHRvbihmb3JtSWQpO1xuICAgIGNvbmZpZ3VyZU5ld1Byb2plY3RCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gbWFrZUFGb3JtKGZvcm1JZCxidXR0b25Jbm5lclRleHQpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBmb3JtSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBsZXQgdGV4dElucHV0TmFtZSA9IGZvcm1JZCArIFwidGV4dElucHV0XCI7XG4gICAgY3JlYXRlVGV4dElucHV0KHRleHRJbnB1dE5hbWUsIGZvcm1JZCk7XG4gICAgbGV0IGJ1dHRvbk5hbWUgPSBmb3JtSWQgKyBcInN1Ym1pdEJ1dHRvblwiO1xuICAgIGNyZWF0ZVN1Ym1pdEJ1dHRvbihidXR0b25OYW1lLCBidXR0b25Jbm5lclRleHQsIGZvcm1JZCk7XG4gICAgY29uZmlndXJlU3VibWl0QnV0dG9uKGJ1dHRvbk5hbWUsdGV4dElucHV0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRJbnB1dChpbnB1dElkLGZvcm1JZCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VibWl0QnV0dG9uKGJ1dHRvbklkLGlubmVyVGV4dCxmb3JtSWQpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGJ1dHRvbklkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oYnV0dG9uSWQsZm9ybUlkKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJuZXcgcHJvamVjdFwiO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBidXR0b25JZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG5mdW5jdGlvbiBjb25maWd1cmVTdWJtaXRCdXR0b24oYnV0dG9uSWQsdGV4dElucHV0TmFtZSl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGV4dElucHV0TmFtZSkudmFsdWUpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZU5ld1Rhc2tTdWJtaXRCdXR0b24oZm9ybUlkKXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dElucHV0Jyk7XG4gICAgICAgIC8vIGRpc3BsYXlJbnB1dCh0ZXh0SW5wdXQudmFsdWUpO1xuICAgICAgICBsb2dpYy5hZGRUYXNrKHRleHRJbnB1dC52YWx1ZSk7XG4gICAgICAgIHVuRGlzcGxheVRhc2tzKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyhmb3JtSWQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLnJlc2V0KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZU5ld1Byb2plY3RCdXR0b24oKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3RCdXR0b24nKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtYWtlQUZvcm0oXCJuZXdQcm9qZWN0Rm9ybVwiLFwic3VibWl0IHByb2plY3QgbmFtZVwiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKGZvcm1JZCl7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUaXRsZVBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RUaXRsZVBhcmFncmFwaFwiKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gbG9naWMuZ2V0UHJvamVjdFRpdGxlKCk7XG4gICAgcHJvamVjdFRpdGxlUGFyYWdyYXBoLmlubmVyVGV4dCArPSBgQ3VycmVudCBQcm9qZWN0OiAke2N1cnJlbnRQcm9qZWN0VGl0bGV9YFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlUGFyYWdyYXBoKTtcblxuICAgIGNvbnN0IHRhc2tMaXN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tMaXN0UGFyYWdyYXBoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0xpc3RQYXJhZ3JhcGhcIik7XG4gICAgbG9naWMuZ2V0UHJvamVjdEFycmF5KCkuZm9yRWFjaChlbGVtZW50ID0+IHRhc2tMaXN0UGFyYWdyYXBoLmlubmVyVGV4dCArPSBlbGVtZW50LnRpdGxlICsgXCIsIFwiKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuYXBwZW5kQ2hpbGQodGFza0xpc3RQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiB1bkRpc3BsYXlUYXNrcygpe1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlUGFyYWdyYXBoXCIpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVQYXJhZ3JhcGhcIikucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RQYXJhZ3JhcGhcIikpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0UGFyYWdyYXBoXCIpLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBsb2dpYyAoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgYWRkUHJvamVjdChcImRlZmF1bHRcIik7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCh4ID0+IHgudGl0bGUgPT0gXCJkZWZhdWx0XCIpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFRhc2soaW5wdXQpe1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hcnJheS5wdXNoKG5ldyBUYXNrKGlucHV0KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2plY3Q6ICR7Y3VycmVudFByb2plY3QudGl0bGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdCh0aXRsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFRhc2sodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFByb2plY3QodGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0QXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LmFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RUaXRsZSgpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3QudGl0bGU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSBbXTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSB0aXRsZTtcbiAgICB9XG4gICAgLy8gZnVuY3Rpb24gcHJvbXB0Rm9yUHJvamVjdE5hbWUoKXtcbiAgICAvLyAgICAgbGV0IGlucHV0ID0gcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiLFwiUHJvamVjdFwiKTtcbiAgICAvLyAgICAgaWYoaW5wdXQgIT0gbnVsbCl7XG4gICAgLy8gICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KGlucHV0KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHJldHVybiB7IGFkZFRhc2ssIGdldFByb2plY3RBcnJheSwgZ2V0UHJvamVjdFRpdGxlLGNyZWF0ZU5ld1Byb2plY3QsICB9O1xufSkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==