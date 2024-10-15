/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById('toggle-lang-btn').addEventListener('click', function() {
    // Seleciona todos os textos em português e inglês
    const ptTexts = document.querySelectorAll('.pt');
    const enTexts = document.querySelectorAll('.en');

    // Alterna a visibilidade dos textos
    ptTexts.forEach(function(pt) {
        pt.style.display = (pt.style.display === 'none') ? 'block' : 'none';
    });

    enTexts.forEach(function(en) {
        en.style.display = (en.style.display === 'none') ? 'block' : 'none';
    });

    // Muda o texto do botão dependendo do idioma
    const button = document.getElementById('toggle-lang-btn');
    if (button.textContent === 'Change to English') {
        button.textContent = 'Mudar para Português';
    } else {
        button.textContent = 'Change to English';
    }
});
