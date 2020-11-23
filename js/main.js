const openMenu = function () {
    const burger = document.querySelector('.hamburger');
    const fullScreenMenu = document.querySelector('.fullscreen-menu');
    const body = document.querySelector('body');
    
         
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        burger.classList.toggle('hamburger--active');
        body.classList.toggle('body-active-menu');
        fullScreenMenu.classList.toggle('fullscreen-menu--active');
    });     
}();

