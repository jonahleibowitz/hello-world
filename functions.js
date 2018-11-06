
function helloconsole() {
  console.log("Hello, World");
}

function hellopopup() {
  alert ("Hello, World");
}

function hellobrowser() {
  var p=document.getElementById("HelloWorld");
  p.innerHTML="Hello, World";
}

function hellostranger() {
  var name= prompt("Enter your name : ", "your name here");
  alert ("Hello " + name);
}
