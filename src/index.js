console.log("Hello world")

//create div
const element = document.createElement('div');
//create input
const input = document.createElement('input');
input.setAttribute("type", "text");
element.appendChild(input);
//create button
const button = document.createElement('button');
button.innerText = "submit";
element.appendChild(button);
button.addEventListener("click", function(e){
    e.preventDefault()
  });
//append div
document.getElementById("content").appendChild(element);