const openMenu = function () {
    const burger = document.querySelector('.hamburger');
    const fullScreenMenu = document.querySelector('.fullscreen-menu');
    const body = document.querySelector('body');
    const links = $('.fullscreen-menu__link');    
         
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        burger.classList.toggle('hamburger--active');
        body.classList.toggle('body-active-menu');
        fullScreenMenu.classList.toggle('fullscreen-menu--active');
    });     

    $(links).each((link) => {
        links.click(e => {
            $('.fullscreen-menu').removeClass('fullscreen-menu--active');
            $(body).removeClass('body-active-menu');
            $(burger).removeClass('hamburger--active');
        });        
    });
}();

