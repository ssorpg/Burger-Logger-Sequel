// FUNCTIONS
function pageSetup(user_name) {
    $('.initVis').toggleClass('visible').addClass('invisible');
    $('.initInvis').toggleClass('invisible').addClass('visible');
    $('.logInName').text('Logged in as: ' + user_name);
}



// EVENT LISTENERS
$(document).ready(function () {
    let user_name = localStorage.getItem('burgerUsername');

    if (user_name) {
        pageSetup(user_name);
    }
    else {
        $('.user_name').val(sessionStorage.getItem('burgerUsername'));
    }

    $('.userName').submit(event => {
        event.preventDefault();

        $.ajax('/api/users', {
            method: 'POST',
            data: $(event.target).serialize()
        })
            .then(res => {
                user_name = $('.user_name').val();
                localStorage.setItem('burgerUsername', user_name);

                pageSetup(user_name);
            });
    });

    $('.newBurger').submit(event => {
        event.preventDefault();

        $.ajax('/api/burgers', {
            method: 'POST',
            data: $(event.target).serialize()
        })
            .then(res => {
                location.reload();
            });
    });

    $('.eatBurger').on('click', event => {
        const id = $(event.target).data('id');
        user_name = localStorage.getItem('burgerUsername');

        $.ajax('/api/burgers/' + id + '?devoured_by=' + user_name, {
            method: 'PUT'
        })
            .then(() => {
                location.reload();
            });
    });

    $('.logOut').on('click', () => {
        sessionStorage.setItem('burgerUsername', user_name);
        localStorage.removeItem('burgerUsername');
        location.reload();
    });
});