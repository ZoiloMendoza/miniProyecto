const collar = document.getElementById('collar');
const keyRow = document.getElementsByClassName('keyboard');


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
}
