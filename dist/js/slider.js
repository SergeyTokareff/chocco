(function () {
    let slideActive = 1;
    let slideCount = $('#slider__items').children().length;
    let translateWidth = 0;

    $(document).ready(function () {
        $('#left').click(function (e) {
            e.preventDefault();
            prevSlide();
        });

        $('#right').click(function (e) {
            e.preventDefault();
            nextSlide();
        });
    });

    function nextSlide() {
        if (slideActive == slideCount || slideActive <= 0 || slideActive > slideCount) {
            $('#slider__items').css('transform', 'translate(0, 0)');
            slideActive = 1;
        } else {
            translateWidth = -$('#slider__items').width() * slideActive;
            $('#slider__items').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideActive++;
        }    
    }

    function prevSlide() {
        if (slideActive == 1 || slideActive <= 0 || slideActive > slideCount) {
            translateWidth = -$('#slider__items').width() * (slideCount - 1);
            $('#slider__items').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideActive = slideCount;
            } else {
                translateWidth = -$('#slider__items').width() * (slideActive - 2);
            $('#slider__items').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
                slideActive--;
            }    
    }    
})();


