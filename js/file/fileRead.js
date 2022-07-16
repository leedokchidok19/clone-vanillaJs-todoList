const input = document.querySelector('#inputFile');
let pre = document.querySelector('#output');

function handleChange() {

    let file = new FileReader();
    file.onload = () => pre.textContent = file.result;
    file.readAsText(this.files[0]);
}

function loadFile() {
    input.addEventListener('change', handleChange);
}

function init() {
    loadFile();
}

init();