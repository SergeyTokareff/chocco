const sections = $('section');
const display = $('.maincontent');

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;
sections.first().addClass('active');

const viewportScroller = () => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    return {
        next() {
            if (nextSection.length) {
                performTransition(nextSection.index());
            }
        },
        
        prev() {
            if (prevSection.length) {
                performTransition(prevSection.index());
                }
            },    
        }    
};

const performTransition = (sectionEq) => {
    const fixedMenuItem = $('.fixed-menu__item');
    
    if (inScroll === false) {
        inScroll = true;

        const transitionOver = 1000;
        const mouseInertiaOver = 300;
        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr('data-sidemenu-theme');
        const sideMenu = $('.fixed-menu');

        if (menuTheme == 'dark') {
            sideMenu.addClass('fixed-menu--dark');
        } else {
            sideMenu.removeClass('fixed-menu--dark');
        }

        display.css({
            transform: `translateY(${position}%)`,
        });
        sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
        
        
        setTimeout(() => {
            inScroll = false;  
            $(fixedMenuItem).removeClass('fixed-menu__item--active');
            fixedMenuItem.eq(sectionEq).addClass('fixed-menu__item--active');
        }, transitionOver + mouseInertiaOver);
    }
};

$(window).on('wheel', (e) => {
    const deltaY = e.originalEvent.deltaY;
    const scroller = viewportScroller();

    if (deltaY > 0) {
        scroller.next();
    }
    
    if (deltaY < 0){
        scroller.prev();
    }
});

$(window).on('keydown', (e) => {
    const keyCode = e.originalEvent.keyCode;
    const tagName = e.target.tagName.toLowerCase();
    const scroller = viewportScroller();
    
    if (tagName !== 'input' && tagName !== 'textarea') {
        if (keyCode === 40) {
            scroller.next();
        }

        if (keyCode === 38) {
            scroller.prev();
        }
    }    
});

$('.wrapper').on('touchmove', e => e.preventDefault());

$('[data-scroll-to]').click(e => {
    e.preventDefault();

    
    const currentData = $(e.currentTarget);    
    const target = currentData.attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${target}]`);
    
    performTransition(reqSection.index());   

});


if (isMobile) {
    //  https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
    $("body").swipe({
        swipe: function(event, direction) {
            const scroller = viewportScroller();
            let scrollDirection = "";

            if (direction === 'up') {
                scrollDirection = 'next';
            }

            if (direction === 'down') {
                scrollDirection = 'prev';
            }

            scroller[scrollDirection]();
        }
  });
}


  