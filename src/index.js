console.log("Hello world")


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
        displayInput(textInput.value);
        form.reset();
    });
}
function displayInput(input){
    const paragraph = document.createElement('p');
    paragraph.innerText = input;
    form.appendChild(paragraph);
}