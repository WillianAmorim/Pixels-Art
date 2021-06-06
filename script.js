const color0 = document.getElementsByClassName('color')[0];
color0.style.backgroundColor = 'black';

const color1 = document.getElementsByClassName('color')[1];
color1.style.backgroundColor = 'yellow';

const color2 = document.getElementsByClassName('color')[2];
color2.style.backgroundColor = 'blue';

const color3 = document.getElementsByClassName('color')[3];
color3.style.backgroundColor = 'purple';

// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

document.getElementsByClassName("color")[0].classList.add("selected")