(function () {
    const review = document.querySelectorAll('.review');

    const findBlockByAllias = (allias) => {
        return [...review].filter((item) => {
            return item.dataset.linkedWith === allias;
        });
    }


    $('.feedback__switcher-link').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            const currentItem = this.closest('.feedback__switcher-link');
            const currentData = this.dataset.active;
            const itemToShow = findBlockByAllias(currentData);
            
            if (currentData && currentItem && itemToShow) {
                $('.small-avatar').removeClass('small-avatar--active');
                $('.review').removeClass('review--active');
            }
            
            if (currentData && currentItem) {
                $(currentItem.children).addClass('small-avatar--active');
                $(itemToShow[0]).addClass('review--active');
            }
        });   
});
})();