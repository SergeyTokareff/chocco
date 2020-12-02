(function () {
    const closeBtn = document.querySelector('.close');
    const modal = $('.modal');
    const modalContent = $('.modal__content');
    const content = modalContent.find('.modal__text');
    const body = $('body');

    const validateFields = (form, fieldsArray) => {
        fieldsArray.forEach(field => {
            field.removeClass('input-error');
            if (field.val().trim() === "") {
                field.addClass('input-error');
            }
        });

        const errorFields = form.find('.input-error');
        return errorFields.length == 0;
    }


    $('.form').submit(e => {
        e.preventDefault();

        const form = $(e.currentTarget);
        const name = form.find("[name='name']");
        const phone = form.find("[name='phone']");
        const comment = form.find("[name='comment']");
        const to = form.find("[name='to']");

        const isValid = validateFields(form, [name, phone, comment, to]);

        
        if (isValid) {
            $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "POST",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
                },
            success: (data) => {
                content.text(data.message);
                $(modal).addClass('overlay__active');
                $(modalContent).addClass('modal__active');
                $(body).addClass('body-active-menu');
            },
            error: (data) => {
                content.text(data.responseJSON.message);
                $(modal).addClass('overlay__active');
                $(modalContent).addClass('modal__active');
                $(body).addClass('body-active-menu');
            }
            });
        }  
    });


    $(closeBtn).click(e => {
        e.preventDefault();
        $(modal).removeClass('overlay__active');
        $(modalContent).removeClass('modal__active');
        $(body).removeClass('body-active-menu');
    });
})();