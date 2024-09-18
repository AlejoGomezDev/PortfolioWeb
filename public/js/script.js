import hamburguerMenu from "./menu-hamburguesa.js";

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('header').offsetHeight;
    const offsetTop = target.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  hamburguerMenu(".panel-btn",".panel", ".menu a");

  const lenguajesButton = document.querySelector('.languageBTN');
  const herramientasButton = document.querySelector('.ToolsBTN');
  const lenguajesDiv = document.querySelector('.lenguajes');
  const herramientasDiv = document.querySelector('.herramientas');
  const buttons = document.querySelectorAll('.buttons button');

  lenguajesDiv.style.display = 'grid';
  herramientasDiv.style.display = 'none';

  lenguajesButton.addEventListener('click', () => {
    lenguajesDiv.style.display = 'grid';
    herramientasDiv.style.display = 'none';
    buttons.forEach(button => button.classList.remove('active'));
    lenguajesButton.classList.add('active');
  });

  herramientasButton.addEventListener('click', () => {
    lenguajesDiv.style.display = 'none';
    herramientasDiv.style.display = 'grid';
    buttons.forEach(button => button.classList.remove('active'));
    herramientasButton.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var nameElement = document.getElementById("name");
  var computedWidth = nameElement.scrollWidth + "px";
  nameElement.style.width = computedWidth;
});