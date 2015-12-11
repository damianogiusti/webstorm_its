/**
 * Created by damiano on 10/12/15.
 */

var allimg;
var i = 0;
var prec = 0;

var nextPic = function () {
    prec = i;
    i = (i + 1) % 4;
    $(allimg[i]).slideDown();
    $(allimg[i]).removeClass('hidden');

    $(allimg[prec]).slideDown();
};

$(function () {
    allimg = $('img');
    window.setInterval(nextPic, 4000);
});

$('img').on('click', nextPic);