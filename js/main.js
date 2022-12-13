const sizeCollar = document.getElementsByClassName('sizeC');
const collar = document.getElementById('collar');
const keyRow = document.getElementsByClassName('keyboard');
const keyboardContainer = document.querySelector('.keyboard-container');
const borrar = document.getElementById('delete');
let historico = [];
let color = '#702F6E';

elegirTam = (e) => {
    e.preventDefault();
    let medidas = Array.from(sizeCollar);
    medidas.forEach((medida) =>{
        medida.style.background = '#ffffff';
        if(medida.innerText === e.target.innerText){
            e.target.style.background = '#c3b8b8e8';
        }
    })
}

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
    if(claseLetra == 'keyboard' && historico.length < 9){
        const elemento = `<div style="font-family: 'Bungee'; font-size: 65px;
        font-weight: bolder; color: ${color}; width: 11%; height: 45px; display: flex; justify-content: center;
        align-items: center; gap: 1px ; padding-bottom: 2px">${letra}</div>`;
        collar.insertAdjacentHTML('beforeend', elemento);
        historico.push(elemento);
    }
}

function borrandoItem (e) {
    e.preventDefault();
    if(collar.children.length > 0){
        collar.removeChild(collar.lastChild);
    }
    if(historico.length > 0){
        historico.pop();
    }
}