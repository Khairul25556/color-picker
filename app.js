let btn = document.querySelector('button');

let h2 = document.querySelector('h2');
let div = document.querySelector('div');
btn.addEventListener('click', function() {
    h2.innerText = getRandomColor();
    console.log('color updated');
    div.style.backgroundColor = getRandomColor();
    div.style.boxShadow = `0px 0px 20px ${getRandomColor()}`;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

setInterval(() => {
    btn.style.backgroundColor = getRandomColor();
}, 500); 