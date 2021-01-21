var hamburgermenu = document.querySelector('.buttonmenu');
var hetMenu = document.querySelector('.hamburgermenu');
console.log (hamburgermenu);

hamburgermenu.addEventListener('click', openMenu);

function openMenu() {
  document.body.classList.toggle('toonMenu');
}

 

