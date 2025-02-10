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

document.addEventListener("keyup",(e)=>{
  if(e.target.matches(".contact-form [required]")){
    let $input = e.target,
    pattern = $input.pattern;

    if(pattern && $input.value !== ""){
      let regex = new RegExp(pattern);
      if(!regex.exec($input.value))return;
    }
  }
})
var $contactForm = document.getElementById("contact-form");
var $input = document.querySelectorAll("#contact-form [required]");
var $formError = document.querySelector(".contact-form-error");
var $formResponse = document.querySelector(".contact-form-response");
var $submitBtn = document.querySelector("#submit");

function validarForm() {
  let isValid = true;
  $input.forEach(($input) => {
    let pattern = $input.pattern;
    let value = $input.value;

    if (pattern && value !== "") {
      let regex = new RegExp(pattern);
      if (!regex.test(value)) {
        isValid = false;
      }
    }
  });

  return isValid;
}
document.addEventListener("submit",(e)=>{
  e.preventDefault();

  if(!validarForm()){
    $formError.classList.remove("none");
    $formResponse.classList.add("none");
    return;
  }
  else{
    $formError.classList.add("none");
    $submitBtn.value = "Enviando...";
    $submitBtn.classList.add("disabled");
  }
  fetch("https://formsubmit.co/ajax/alejongomez@gmail.com",{
    method:"POST",
    body: new FormData(e.target)
  })
  .then(res=> res.ok?res.json(): Promise.reject(res))
  .then(json=>{
    $formResponse.classList.remove("none");
    $contactForm.reset();
    $submitBtn.classList.remove("disabled");
    $submitBtn.value = "Enviar";
    setTimeout(() => {
      $formResponse.classList.add("none");
    }, 2000);
  })
  .catch(err=>{
    console.log(err);
    $submitBtn.disabled = false;
    $submitBtn.value = "Enviar";
    $submitBtn.classList.remove("disabled");
  })

  
  
})