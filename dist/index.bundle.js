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
createButton();
document.getElementById("content").appendChild(form); //append form
configureButton();

function createInput(){
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "textInput");
    form.appendChild(input);
    return input;
}
function createButton(){
    const button = document.createElement('button');
    button.innerText = "submit";
    button.setAttribute("type", "submit");
    button.setAttribute("id", "submitButton");
    form.appendChild(button);
}
function configureButton(){
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", function(e){
        e.preventDefault()
        const textInput = document.querySelector('#textInput');
        // displayInput(textInput.value);
        _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(textInput.value);
        clearTasks();
        displayTasks();
        form.reset();
    });
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
    function addTask(input){
        project.push(new Task(input));
        console.log(project);
    }
    function Task(title) {
        this.title = title;
    }
    function getProject(){
        return project;
    }
    return { addTask, getProject };
})());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9CLDZDQUE2QztBQUM3QztBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGRcIilcblxuaW1wb3J0IGxvZ2ljIGZyb20gJy4vbG9naWMuanMnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyAvL2NyZWF0ZSBmb3JtXG5jcmVhdGVJbnB1dCgpO1xuY3JlYXRlQnV0dG9uKCk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9ybSk7IC8vYXBwZW5kIGZvcm1cbmNvbmZpZ3VyZUJ1dHRvbigpO1xuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dCgpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHRJbnB1dFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRCdXR0b25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuZnVuY3Rpb24gY29uZmlndXJlQnV0dG9uKCl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dElucHV0Jyk7XG4gICAgICAgIC8vIGRpc3BsYXlJbnB1dCh0ZXh0SW5wdXQudmFsdWUpO1xuICAgICAgICBsb2dpYy5hZGRUYXNrKHRleHRJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpe1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrTGlzdFBhcmFncmFwaFwiKTtcbiAgICBsb2dpYy5nZXRQcm9qZWN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHBhcmFncmFwaC5pbm5lclRleHQgKz0gZWxlbWVudC50aXRsZSArIFwiLCBcIilcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5mdW5jdGlvbiBjbGVhclRhc2tzKCl7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFBhcmFncmFwaFwiKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RQYXJhZ3JhcGhcIikucmVtb3ZlKCk7XG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGxvZ2ljICgpIHtcbiAgICBsZXQgcHJvamVjdCA9IFtdO1xuICAgIGZ1bmN0aW9uIGFkZFRhc2soaW5wdXQpe1xuICAgICAgICBwcm9qZWN0LnB1c2gobmV3IFRhc2soaW5wdXQpKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFRhc2sodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KCl7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICByZXR1cm4geyBhZGRUYXNrLCBnZXRQcm9qZWN0IH07XG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9