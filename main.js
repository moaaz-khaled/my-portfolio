let Menu = document.querySelector(".menu-toggle");
let List = document.querySelector(".navbar ul");

Menu.addEventListener("click" , () =>{
    List.classList.toggle('active');
})

const skillBars = document.querySelectorAll('.color');

skillBars.forEach(bar => {
    const percentageText = bar.closest('.lang-container , .personal-skill').querySelector('.percentage').textContent;
    const percentage = parseInt(percentageText, 10);
    bar.style.setProperty('--dynamic-width', `${percentage}%`);
});