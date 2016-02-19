/**
 * Created by damiano on 11/02/16.
 */

var benvenuto;
var benvenutoDescr;

$(function () {
    benvenuto = $('#benvenuto')[0];
    benvenutoDescr = $('#benvenutoDescr')[0];


    benvenuto.hide();
    benvenutoDescr.hide();

    window.setTimeout(function () {
        benvenuto.fadeOut();
        window.setTimeout(function () {
            benvenutoDescr.fadeOut();
        }, 700);
    }, 300);
});
