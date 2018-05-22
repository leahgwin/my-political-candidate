// this is my personal code I did 
// var element;
// element = document.querySelector("#article--representative");
// console.log(element);
// var node = document.createElement("p");
// var textNode = document.createTextNode("Making Gospel Music Forefront Since 1994.");
// node.appendChild(textNode);
// document.getElementById("#article--representative").appendChild(node);

this is Jisie's code she used as an example
const article = document.getElementById("article--representative")
let paragraphElement = document.createElement("p")
let paragraphText = document.createTextNode("Making Gospel Music Forefront Since 1994.")
paragraphElement.appendChild(paragraphText);
console.log(article);
article.appendChild(paragraphElement);
