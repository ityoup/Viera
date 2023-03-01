const btn = document.getElementById('btn1');
const border = document.getElementById('card1');


btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Comprado';
});

border.addEventListener('click', function handleClick() {
  border.style.border = " solid #0000FF";
});

const btn2 = document.getElementById('btn2');
const border2 = document.getElementById('card2');


btn2.addEventListener('click', function handleClick() {
  btn2.textContent = 'Comprado';
});
border2.addEventListener('click', function handleClick() {
  border2.style.border = " solid #0000FF ";
});

const btn3 = document.getElementById('btn3');
const border3 = document.getElementById('card3');



btn3.addEventListener('click', function handleClick() {
  btn3.textContent = 'Comprado';
});
border3.addEventListener('click', function handleClick() {
  border3.style.border = "solid #0000FF ";
});