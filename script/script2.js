//Создайте HTML-страницу, в которой присутствует кнопка. 
//При нажатии на нее текст кнопки меняется на случайное число от 5 до 15.

const rootNode = document.querySelector("#root");
rootNode.style.margin = "100px";

const buttonNode = document.createElement("button");
buttonNode.style.cssText = "width: 50px; height: 50px";
buttonNode.innerText = "any text";

buttonNode.addEventListener("click",()=>{
    const n = Math.round((Math.random()*11+5));//случайное целое число от 5 до 15
    buttonNode.innerText = n;
});

rootNode.append(buttonNode);

