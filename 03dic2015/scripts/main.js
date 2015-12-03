/**
 * Created by damiano on 03/12/15.
 */
/*
 var test =(function() {
 var p = $('#pnl');

 alert('Elementi trovati: ' + p.length);

 });

 $(document).ready(test);

 */


// questo blocco di codice verrà eseguito al caricamento di pagina
$(function () {
    var p = $('#pnl');
    var txt = $('#txtText');
    var btn = $('#btn');

    btn.on('click', function () {

        var text = txt.val();

        p.text(text);

        if (text.indexOf('<script') >= 0) {
            p.addClass('alert');
            p.addClass('animated infinite hinge');
            txt.addClass('animated infinite flip');
            btn.addClass('animated infinite wobble');
        }
        else {
            p.removeClass('alert');
            p.removeClass('animated infinite wobble');
        }
    });
})
