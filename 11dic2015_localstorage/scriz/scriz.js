/**
 * Created by damiano on 11/12/15.
 */

var thereIsLocalStorage;
var isLogged = false;

var btnlogin = $('#btnLogin');
var btnlogout = $('#btnLogout');

var containerBtnLogin = $('#containerBtnLogin');
var containerBtnLogout = $('#containerBtnLogout');

var brand = $('.navbar-brand');
var notdiv = $('.notification');
var notspan = $('#not-text');

// elementi della form
var txtusername = $('#txtUsername');
var txtpassword = $('#txtPassword');
var btnformlogin = $('#btnFormLogin');

var formlogin = $('#popup');
var errortext = $('.error-text');

var localUser;
var localPass;

$(function () {
    errortext.hide();
    notdiv.hide();

    thereIsLocalStorage = (typeof(Storage) !== "undefined");

    status();
});

btnlogin.on('click', function () {
    formlogin.dialog({
        modal: true
    });
})

btnformlogin.on('click', function () {

    var user = txtusername.val().trim();
    var pass = txtpassword.val().trim();

    // ERRORE NEL LOGIN
    if (user == "" || user == "" || user != pass) {
        formlogin.parent().addClass('animated shake');
        errortext.toggle();

        window.setTimeout(function () {
            errortext.fadeOut();
            formlogin.parent().removeClass('animated shake');
        }, 2000);
    }

    // LOGIN CORRETTO
    else {

        if (thereIsLocalStorage) {
            localStorage.setItem('username', user);
            localStorage.setItem('password', pass);

            formlogin.dialog('close');
            status();
            notify('Accesso effettuato come ' + user.toUpperCase());
        }
        else {
            alert('MAAAAN YR BROWSA SUX');
            window.location = 'https://www.google.it/chrome/browser/desktop/';
        }

    }
});

btnlogout.on('click', function () {
    if (thereIsLocalStorage) {
        localStorage.clear();
        notify('Logout avvenuto con successo!');

        status();

    }
    else {
        alert('MAAAAN YR BROWSA SUX');
        window.location = 'https://www.google.it/chrome/browser/desktop/';
    }
});

function notify(text) {
    notspan.text(text);
    notdiv.fadeIn();

    window.setTimeout(function () {
        notdiv.fadeOut();
    }, 3000);
}

function status() {
    var user = localStorage.getItem('username');
    isLogged = user != null;
    brand.text(user);

    if (isLogged) {
        containerBtnLogin.hide();
        containerBtnLogout.show();
    }
    else {
        containerBtnLogin.show();
        containerBtnLogout.hide();
    }
}
