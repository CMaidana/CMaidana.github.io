window.addEventListener('DOMContentLoaded', event => {
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach((c) => {

        c.addEventListener('click', () => {
            document.getElementById('form-modal').classList.remove('is-active');
        });
    });

    (function () {
        emailjs.init({
            publicKey: "alQyTAhe863Gi-j4w",
        });
    })();

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const submitButton = document.getElementById('submit-button');
        const modal = document.getElementById('form-modal');
        submitButton.disabled = true;
        submitButton.classList.add('is-loading');

        emailjs.sendForm('mapesoftware', 'template_uz69bup', this)
            .then(() => {
                submitButton.disabled = false;
                submitButton.classList.remove('is-loading');
                modal.classList.add('is-active');
            }, (error) => {
                submitButton.disabled = false;
                submitButton.classList.remove('is-loading');
                modal.classList.add('is-active');
            });
    });
});