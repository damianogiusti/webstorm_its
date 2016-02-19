/**
 * Created by damiano on 17/12/15.
 */

var txtDataArrivo = $('#txtDataArrivo');
var txtDataPartenza = $('#txtDataPartenza');
var txtNumPersone = $('#txtNumeroPersone');
var cmbTipoViaggio = $('#cmbTipoViaggio');
var btnPrenota = $('#btnPrenota');

var popupDataArrivo = $('#popupDA');
var popupDataPartenza = $('#popupDP');
var popupNumPersone = $('#popupNP');
var popupTipoViaggio = $('#popupTV');

var popup = $('#popup');

var form = $('form');

$(function () {
    var date = new Date();
    $(txtDataPartenza).datepicker();
    $(txtDataArrivo).datepicker();
    txtDataPartenza.val(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
    txtDataArrivo.val(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
});

btnPrenota.on('click', function () {

    var numP = (txtNumPersone.val().trim() == "" ? 5 : parseInt(txtNumPersone.val().trim(), 10));
    var datap = new Date(txtDataPartenza.val().trim());
    var dataa = new Date(txtDataArrivo.val().trim());
    var tipoV = cmbTipoViaggio.val().trim();

    popupDataPartenza.html(datap.getDate() + '/' + datap.getMonth() + '/' + datap.getFullYear());
    popupDataArrivo.html(dataa.getDate() + '/' + dataa.getMonth() + '/' + dataa.getFullYear());
    popupNumPersone.html(numP);
    popupTipoViaggio.html(tipoV);

    if (numP <= 4 && datap != null && dataa != null && tipoV.length != 0 && tipoV.length != 0) {
        popup.toggle();

        popup.dialog({
            modal: true,
            show: {
                effect: "fade"
            }
        });
    }
    else {
        form.addClass('animated shake');
        window.setTimeout(function () {
            form.removeClass('animated shake');
        }, 1000);
    }
});

txtNumPersone.on('keyup', function () {
    txtNumPersone.removeClass('error-color');
    if (parseInt(txtNumPersone.val(), 10) > 4)
        txtNumPersone.addClass('error-color');
})


