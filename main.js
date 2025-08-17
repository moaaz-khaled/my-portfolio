

let Menu = document.querySelector(".menu-toggle");
let List = document.querySelector(".navbar ul");

Menu.addEventListener("click" , () =>{
    List.classList.toggle('active');
})