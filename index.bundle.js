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

        form.reset();
    });
}
function displayInput(input){
    const paragraph = document.createElement('p');
    paragraph.innerText = input;
    form.appendChild(paragraph);
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
    return { addTask };
})());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsQ0FBK0I7O0FBRS9CLDZDQUE2QztBQUM3QztBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYTs7QUFFckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGRcIilcblxuaW1wb3J0IGxvZ2ljIGZyb20gJy4vbG9naWMuanMnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyAvL2NyZWF0ZSBmb3JtXG5jcmVhdGVJbnB1dCgpO1xuY3JlYXRlQnV0dG9uKCk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9ybSk7IC8vYXBwZW5kIGZvcm1cblxuY29uZmlndXJlQnV0dG9uKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dElucHV0XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBpbnB1dDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbigpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ1dHRvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5mdW5jdGlvbiBjb25maWd1cmVCdXR0b24oKXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0SW5wdXQnKTtcbiAgICAgICAgLy8gZGlzcGxheUlucHV0KHRleHRJbnB1dC52YWx1ZSk7XG4gICAgICAgIGxvZ2ljLmFkZFRhc2sodGV4dElucHV0LnZhbHVlKTtcblxuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkaXNwbGF5SW5wdXQoaW5wdXQpe1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gaW5wdXQ7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGxvZ2ljICgpIHtcbiAgICBsZXQgcHJvamVjdCA9IFtdO1xuICAgIGZ1bmN0aW9uIGFkZFRhc2soaW5wdXQpe1xuICAgICAgICBwcm9qZWN0LnB1c2gobmV3IFRhc2soaW5wdXQpKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFRhc2sodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICByZXR1cm4geyBhZGRUYXNrIH07XG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9