(function () {
    const button = document.querySelectorAll('.team__name');
    const accordion = document.querySelectorAll('.team__accordion');

    $(button).each(function () {
        $(this).click(function (e) {
            e.preventDefault();        
            
            if ($(accordion).not(e.target.nextElementSibling).hasClass('team__accordion--open')) {
                $(accordion).removeClass('team__accordion--open');
            };

            $(e.target.nextElementSibling).toggleClass('team__accordion--open');
                
            if ($(button).not(this).hasClass('triangle-up')) {                
                $(button).removeClass('triangle-up');
            }        
            
            $(this).toggleClass('triangle-up');        
        });    
    });    
})();