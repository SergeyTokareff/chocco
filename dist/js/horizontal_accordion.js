(function () {
    const menuLink = document.querySelectorAll('.menu__link');
    const menuItem = document.querySelectorAll('.menu__item');
    const bodyWidth = document.querySelector('body');


    const calculateWidth = () => {
        const windowWidth = window.innerWidth;
        const MAX_WIDTH = 524;
        const linksWidth = menuLink[0].offsetWidth;
        const reqWidth = windowWidth - (linksWidth * menuLink.length);

        return reqWidth > MAX_WIDTH ? MAX_WIDTH : reqWidth;
    };

    function closeContent(activeContent) {
        const menuContent = activeContent.querySelector('.menu__content');
        menuContent.style.width = '0px';
        activeContent.classList.remove('active');
    }

    $(menuItem).each(() => { 
        $(menuLink).click(e => {
            e.preventDefault();          
            const active = document.querySelector('.menu__item.active');
            
            if (active) {
                closeContent(active);
                const btnClose = active.querySelector('.menu__content--close');
                $(btnClose).click(e => {
                    e.preventDefault();
                    closeContent(active);
                });
            }

            
            
            if (!active || active.querySelector('.menu__link') !== e.target.closest('.menu__link')) {
                const currentLink = e.target.closest('.menu__link');
                const currentItem = currentLink.closest('.menu__item');
                currentItem.classList.add('active');
                const menuContent = currentItem.querySelector('.menu__content');
                if (bodyWidth.offsetWidth > 480) {
                    menuContent.style.width = calculateWidth() + 'px';
                } else {
                    menuContent.style.width = '100%';
                }   
            }       
        });

        
    }); 
})();
    

