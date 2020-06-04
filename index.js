// Write your code here!

// let element = document.querySelector("p#greeting");
// element.innerHTML = 'Hello, DOM!'

// element.style.backgroundColor = '#27647B';

// element.style.textAlign = 'center';
// ul.style.textAlign = 'left'


// let header = document.getElementById("main#main");
// header.remove();
let elementMain = document.querySelector("main#main");
elementMain.remove();


var newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Arv is the champion";


// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Creating and Inserting DOM Elements</title>
//   </head>
//   <script type="application/javascript">
//   </script>
//   <body>
//     <main id="main"></main>
//     <script type="text/javascript" src="index.js"></script>
//   </body>
// </html>
