$(function () {
    $('#emailLink').on('click', function (event) {
        event.preventDefault();
        var email = 'nickvercammen397@gmail.com';
        var subject = 'Contact';
        var emailBody = '';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
    });
});
