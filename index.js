let element = document.createElement("div");

document.body.appendChild(element);

let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
    let li = document.createElement('li')
    li.innerHTML = (i+1).toString()
    ul.appendChild(li)
}

element.appendChild(ul);

element.style.backgroundColor = 'yellow';

element.style.textAlign = 'center';
ul.style.textAlign = 'left'

element.className = "dog";
element.className = "pet-listing dog"

document.querySelector('#main').remove()

let newHeader = document.createElement("h1");
newHeader.id = 'victory'
document.body.appendChild(newHeader);
newHeader.innerHTML = 'DON-MALLORY is the champion'
