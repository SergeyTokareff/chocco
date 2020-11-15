(function () {
    const burger = document.querySelector('.hamburger');
    const fullScreenMenu = document.querySelector('.fullscreen-menu');
    const body = document.querySelector('body');
    const topPlank = document.querySelector('.hamburger__plank--top');
    const middlePlank = document.querySelector('.hamburger__plank--middle');
    const bottomPlank = document.querySelector('.hamburger__plank--bottom');
    
    burger.addEventListener('click', function (e) {
        e.preventDefault();
        fullScreenMenu.classList.toggle('active');
        body.classList.toggle('body-active-menu');
        topPlank.classList.toggle('hamburger__plank--top-active');
        middlePlank.classList.toggle('hamburger__plank--middle-active');
        bottomPlank.classList.toggle('hamburger__plank--bottom-active');
    });
})();

