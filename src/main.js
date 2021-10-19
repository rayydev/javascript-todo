let addTODOButton = document.getElementById('AddTODO');
let TODOContainer = document.getElementById('TODOContainer');
let inputfield = document.getElementById('InputField');

addTODOButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    TODOContainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function () {
        TODOContainer.removeChild(paragraph);
    })
})
