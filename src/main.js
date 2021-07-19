const circ = document.getElementsByClassName('circ');
const colors = ['green', 'red', 'yellow', 'blue'];
const memo = [];
let currentLevel = 1;
let press = [];

function handleColors() {
    let isOn = false;
    for (let i = 1; i <= currentLevel; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById(randomColor).style.filter = 'blur(10px)';
        memo.push(randomColor);
    }
}

function pressByUser(e) {
    const id = e.target.id;
    press.push(id);
    console.log(press);
}

function levelUp() {
    ++currentLevel;
}

for (let i of circ) {
    i.addEventListener('click', pressByUser);
}

setTimeout(handleColors, 1000);
