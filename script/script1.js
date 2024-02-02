//Создайте HTML-страницу с формой (input и button). 
//При отправке формы выведите в консоль введенное значение из input 
//с использованием JavaScript и DOM.

const rootNode = document.querySelector("#root");
rootNode.style.margin = "100px";

const formNode = document.createElement("form");

const inputNode = document.createElement("input");
inputNode.type = "text";//тип данных для поля ввода

const buttonNode = document.createElement("button");
buttonNode.type = "submit";//тип кнопки- отравка данных
buttonNode.innerText = "Send";

formNode.addEventListener("submit",(event)=>{
    event.preventDefault();//отменяем отправку HTML-запроса)
    console.log(inputNode.value);
    event.target.reset();//очищаем форму 
});

formNode.append(inputNode, buttonNode);
rootNode.append(formNode);