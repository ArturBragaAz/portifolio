let sobre=document.getElementById("sobre")
let projetos=document.getElementById("projetos")
let abs=document.getElementById("abs")

function sobre1(){
    sobre.scrollIntoView({behavior:"smooth"})
}
function projetos1(){
   abs.scrollIntoView({behavior:"smooth"})
}



var typed = new Typed('#banana', {
    strings: ['sou garoto de Programa.', 'Estudante do Cotemig',"Eu sou um..."],
    typeSpeed: 50,
    loop:true
  });



  let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

function dark(){
    let body=document.getElementById("body")
    body.classList.toggle("darkMode")
}








