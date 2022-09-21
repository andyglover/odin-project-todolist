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

const form = document.createElement('form'); //create form
form.setAttribute("id", "addTaskForm");
createTextInput("textInput");
createSubmitButton();
createNewListButton();
document.getElementById("content").appendChild(form); //append form
configureSubmitButton();
configureNewListButton();

function createTextInput(id){
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", id);
    form.appendChild(input);
    return input;
}
function createSubmitButton(){
    const button = document.createElement('button');
    button.innerText = "submit";
    button.setAttribute("type", "submit");
    button.setAttribute("id", "submitButton");
    form.appendChild(button);
}
function createNewListButton(){
    const button = document.createElement('button');
    button.innerText = "new list";
    // button.setAttribute("type", "submit");
    button.setAttribute("id", "newListButton");
    form.appendChild(button);
}
function configureSubmitButton(){
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        const textInput = document.querySelector('#textInput');
        // displayInput(textInput.value);
        _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(textInput.value);
        clearTasks();
        displayTasks();
        form.reset();
    });
}
function configureNewListButton(){
    const newListButton = document.querySelector('#newListButton');
    newListButton.addEventListener("click", function(e){
        e.preventDefault();
        _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].promptForProjectName();
    });
    console.log();
}
function displayTasks(){
    const paragraph = document.createElement('p');
    paragraph.setAttribute("id", "taskListParagraph");
    _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProject().forEach(element => paragraph.innerText += element.title + ", ")
    form.appendChild(paragraph);
}
function clearTasks(){
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
    let project = [];
    let currentProject = project;
    
    function addTask(input){
        currentProject.push(new Task(input));
        console.log(currentProject);
    }
    function Task(title) {
        this.title = title;
    }

    function getProject(){
        return currentProject;
    }
    
    function createNewProject(title) {
        title = [];
        currentProject = title;
    }
    function promptForProjectName(){
        let input = prompt("Project name?","Project");
        if(input != null){
            createNewProject(input);
        }
    }

    return { addTask, getProject, createNewProject, promptForProjectName };
})());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9CLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUEwQjtBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvREEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvbGlzdC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkXCIpXG5cbmltcG9ydCBsb2dpYyBmcm9tICcuL2xvZ2ljLmpzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgLy9jcmVhdGUgZm9ybVxuZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tGb3JtXCIpO1xuY3JlYXRlVGV4dElucHV0KFwidGV4dElucHV0XCIpO1xuY3JlYXRlU3VibWl0QnV0dG9uKCk7XG5jcmVhdGVOZXdMaXN0QnV0dG9uKCk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9ybSk7IC8vYXBwZW5kIGZvcm1cbmNvbmZpZ3VyZVN1Ym1pdEJ1dHRvbigpO1xuY29uZmlndXJlTmV3TGlzdEJ1dHRvbigpO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0SW5wdXQoaWQpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuZnVuY3Rpb24gY3JlYXRlU3VibWl0QnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnV0dG9uXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3RCdXR0b24oKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJuZXcgbGlzdFwiO1xuICAgIC8vIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld0xpc3RCdXR0b25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuZnVuY3Rpb24gY29uZmlndXJlU3VibWl0QnV0dG9uKCl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRJbnB1dCcpO1xuICAgICAgICAvLyBkaXNwbGF5SW5wdXQodGV4dElucHV0LnZhbHVlKTtcbiAgICAgICAgbG9naWMuYWRkVGFzayh0ZXh0SW5wdXQudmFsdWUpO1xuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb25maWd1cmVOZXdMaXN0QnV0dG9uKCl7XG4gICAgY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdMaXN0QnV0dG9uJyk7XG4gICAgbmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbG9naWMucHJvbXB0Rm9yUHJvamVjdE5hbWUoKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygpO1xufVxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCl7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tMaXN0UGFyYWdyYXBoXCIpO1xuICAgIGxvZ2ljLmdldFByb2plY3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4gcGFyYWdyYXBoLmlubmVyVGV4dCArPSBlbGVtZW50LnRpdGxlICsgXCIsIFwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKXtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0UGFyYWdyYXBoXCIpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKS5yZW1vdmUoKTtcbiAgICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbG9naWMgKCkge1xuICAgIGxldCBwcm9qZWN0ID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRUYXNrKGlucHV0KXtcbiAgICAgICAgY3VycmVudFByb2plY3QucHVzaChuZXcgVGFzayhpbnB1dCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFRhc2sodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gW107XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdGl0bGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb21wdEZvclByb2plY3ROYW1lKCl7XG4gICAgICAgIGxldCBpbnB1dCA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIixcIlByb2plY3RcIik7XG4gICAgICAgIGlmKGlucHV0ICE9IG51bGwpe1xuICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrLCBnZXRQcm9qZWN0LCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9tcHRGb3JQcm9qZWN0TmFtZSB9O1xufSkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==