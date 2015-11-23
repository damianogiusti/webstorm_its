/**
 * Created by damiano on 23/11/15.
 */
/*
var x = prompt('come ti chiami?');

if (confirm('ciao')) {
    alert('si');
}
else alert('no');
*/

var txt = document.getElementById("txtName");
var pnl = document.getElementById("pnlResult");


function updateText() {

    //txt.style.color = "red";

    pnl.innerHTML = '<p style="color: blue;">' + txt.value + '</p>';    // sostituisce il contenuto html
}
//pnl.innerText = '<p style="color: blue;">' + txt.value + '</p>';    // aggiunge il valore che passo come testo con eventuali escape

updateText();
