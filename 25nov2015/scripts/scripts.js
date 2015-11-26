/**
 * Created by damiano on 26/11/15.
 */

var textarea = document.getElementById('textarea');
var div_char_counter = document.getElementById('char-counter');
var div_list = document.getElementById('list');

function charAdded() {
    div_char_counter.innerHTML = textarea.value.length;
}

function btnClicked() {
    if (textarea.value.trim() != "") {
        div_list.innerHTML += '<li>' + textarea.value.trim() + '</li>' + '\r\n';
        textarea.value = "";
        charAdded();
    }
}