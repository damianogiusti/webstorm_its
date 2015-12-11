/**
 * Starts an animate.css and jQuery based animation on an html element
 * @param e html element
 * @param a1 animate.css IN class like 'animated [infinite] classname'
 * @param a2 animate.css OUT class like 'animated [infinite] classname'
 */
function notificationAnim(e, a1, a2) {
    e.show();
    e.addClass(a1);

    window.setTimeout(function () {
        e.removeClass(a1);
        e.addClass(a2);

        window.setTimeout(function () {
            e.hide();
            e.removeClass(a2)
        }, 1000);
    }, 3000);
}