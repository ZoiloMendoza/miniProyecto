const collar = document.getElementById('collar');
const keyRow = document.getElementsByClassName('keyboard');
let collarColores = ['color1','color2','color3','color4','color5','color6'];

window.elegirColor = (color,id) => {
    collarColores.map((collarColor) => {
        if(collarColor === id) {
            collar.style.background = color;
        }
    })
}

window.elegirColork = (color,id) => {
    let keys = Array.from(keyRow);
    keys.forEach((key) => {
            key.style.color = color;
    }) 
}
