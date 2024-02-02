//Создайте HTML-страницу с кнопкой. 
//При клике на кнопку измените текст элемента с id "target" на "Привет, мир!" 
//с использованием JavaScript и DOM.

const rootNode = document.querySelector("#root");
rootNode.style.margin = "100px";

const buttonNode = document.createElement("button");
buttonNode.innerText = "click me!";

const pNode = document.createElement("p");
pNode.id = "target";
pNode.innerText = "Look carefully!";
pNode.style.cssText = "border: 1px solid black; width: 100px; padding:10px";

rootNode.append(buttonNode, pNode);

buttonNode.addEventListener("click", ()=> {
    if (pNode.innerText === "Look carefully!") {
        pNode.innerText = "Привет, мир!";
    } else {
        pNode.innerText = "Look carefully!";
    };
});


