let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar") 

menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active")
}

// function changeLanguage () {
//     var container = document.querySelector('.language-container');
//     var button = document.getElementById('languageButton');
//     var logo = document.getElementById('logo');
//     // var menuIcon = document.getElementById('menu-icon');
//     var homeLink = document.getElementById('homeLink');
//     var aboutLink = document.getElementById('aboutLink');
//     var beveragesLink = document.getElementById('beveragesLink');
//     var othersLink = document.getElementById('othersLink');
//     var contactLink = document.getElementById('contactLink');
//     // Update other elements here
    
//     container.classList.toggle('active');
  
//     if (container.classList.contains('active')) {
//         button.textContent = 'Switch to English';
//         // Change text for other elements to Spanish
//         logo.textContent = "Rosario's Food";
//         // menuIcon.textContent = "Menú";
//         homeLink.textContent = "Inicio";
//         aboutLink.textContent = "Sobre nosotros";
//         beveragesLink.textContent = "Bebidas";
//         othersLink.textContent = "Destacados";
//         contactLink.textContent = "Contactanos ";
        
//         // Update other elements accordingly
//     } else {
//         button.textContent = 'Cambia a Español';
//         // Change text for other elements to English
//         logo.textContent = "Rosarios's Food";
//         // menuIcon.textContent = ""; // Update as needed
//         homeLink.textContent = "Home";
//         aboutLink.textContent = "About us";
//         beveragesLink.textContent = "Drinks";
//         othersLink.textContent = "Others";
//         contactLink.textContent = "Contact us";

//     }
// }