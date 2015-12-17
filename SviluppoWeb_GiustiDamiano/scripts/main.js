/**
 * Created by damiano on 17/12/15.
 */
var container = $('.container');
var win = $(window);

$(function () {
    container.height(win.height() - 45);
})

win.resize(function () {
    container.height(win.height() - 45);
})
