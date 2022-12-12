const collar = document.getElementById('collar');
const keyRow = document.getElementsByClassName('keyboard');
const keyboardContainer = document.querySelector('.keyboard-container');
const borrar = document.getElementById('delete');
let prueba = [];
let color = '#702F6E';

elegirColor = (e) => {
    e.preventDefault();
    collar.style.background = e.target.name;
}

elegirColork = (e) => {
    e.preventDefault();
    let keys = Array.from(keyRow);
    keys.forEach((key) => {
        key.style.color = e.target.name;  
    })
    return color = e.target.name;
}
keyboardContainer.addEventListener('click', agregarItem);
borrar.addEventListener('click', borrandoItem);

function agregarItem (e) {
    e.preventDefault();
    let claseLetra = e.target.classList[0];
    let letra = e.target.innerText;
    if(claseLetra == 'keyboard' && prueba.length < 9){
        const elemento = `<div style="font-family:'Quicksand'; font-size: 65px;
        font-weight: bolder; color: ${color}; width: 11%; height: 45px; display: flex; justify-content: center;
        align-items: center; padding-bottom: 2px">${letra}</div>`;
        collar.insertAdjacentHTML('beforeend', elemento);
        prueba.push(elemento);

    }
}

function borrandoItem (e) {
    e.preventDefault();
    collar.removeChild(collar.lastChild)
}