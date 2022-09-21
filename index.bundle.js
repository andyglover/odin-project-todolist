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
createInput();
createSubmitButton();
createNewListButton();
document.getElementById("content").appendChild(form); //append form
configureSubmitButton();
configureNewListButton();

function createInput(){
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "textInput");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9CLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBMEI7QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOURBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZFwiKVxuXG5pbXBvcnQgbG9naWMgZnJvbSAnLi9sb2dpYy5qcyc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7IC8vY3JlYXRlIGZvcm1cbmNyZWF0ZUlucHV0KCk7XG5jcmVhdGVTdWJtaXRCdXR0b24oKTtcbmNyZWF0ZU5ld0xpc3RCdXR0b24oKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmb3JtKTsgLy9hcHBlbmQgZm9ybVxuY29uZmlndXJlU3VibWl0QnV0dG9uKCk7XG5jb25maWd1cmVOZXdMaXN0QnV0dG9uKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dElucHV0XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBpbnB1dDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbigpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ1dHRvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5mdW5jdGlvbiBjcmVhdGVOZXdMaXN0QnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwibmV3IGxpc3RcIjtcbiAgICAvLyBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdMaXN0QnV0dG9uXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cbmZ1bmN0aW9uIGNvbmZpZ3VyZVN1Ym1pdEJ1dHRvbigpe1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCdXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0SW5wdXQnKTtcbiAgICAgICAgLy8gZGlzcGxheUlucHV0KHRleHRJbnB1dC52YWx1ZSk7XG4gICAgICAgIGxvZ2ljLmFkZFRhc2sodGV4dElucHV0LnZhbHVlKTtcbiAgICAgICAgY2xlYXJUYXNrcygpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29uZmlndXJlTmV3TGlzdEJ1dHRvbigpe1xuICAgIGNvbnN0IG5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3TGlzdEJ1dHRvbicpO1xuICAgIG5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxvZ2ljLnByb21wdEZvclByb2plY3ROYW1lKCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coKTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpe1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrTGlzdFBhcmFncmFwaFwiKTtcbiAgICBsb2dpYy5nZXRQcm9qZWN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHBhcmFncmFwaC5pbm5lclRleHQgKz0gZWxlbWVudC50aXRsZSArIFwiLCBcIilcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5mdW5jdGlvbiBjbGVhclRhc2tzKCl7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RQYXJhZ3JhcGhcIikucmVtb3ZlKCk7XG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGxvZ2ljICgpIHtcbiAgICBsZXQgcHJvamVjdCA9IFtdO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkVGFzayhpbnB1dCl7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnB1c2gobmV3IFRhc2soaW5wdXQpKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBUYXNrKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KCl7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IFtdO1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHRpdGxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9tcHRGb3JQcm9qZWN0TmFtZSgpe1xuICAgICAgICBsZXQgaW5wdXQgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIsXCJQcm9qZWN0XCIpO1xuICAgICAgICBpZihpbnB1dCAhPSBudWxsKXtcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVGFzaywgZ2V0UHJvamVjdCwgY3JlYXRlTmV3UHJvamVjdCwgcHJvbXB0Rm9yUHJvamVjdE5hbWUgfTtcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=