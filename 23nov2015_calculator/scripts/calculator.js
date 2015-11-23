/**
 * Created by damiano on 23/11/15.
 */

var display = document.getElementById("display");
var numbers = ['', ''];     // numbers[0]: primo valore, risultato ; numbers[1]: secondo valore
var current_num = '';
var current_op = null;
var flag = true;

function number(n) {
    // se non ho un operando
    // inserisco nella posizione 0
    if (current_op == null && flag) {
        numbers[0] += n.toString();
        display.innerHTML = numbers[0];
    }

    // altrimenti inserisco nella posizione 1
    else {
        numbers[1] += n.toString();
        display.innerHTML = numbers[1];
    }
}

function operator(op) {
    // se ho gia inserito una cifra
    if (numbers[0] != '') {

        // se ho gia messo un operatore
        // valuto l'espressione finora inserita
        // e mostro il risultato
        if (current_op != null) {
            evaluate_calc();
        }

        // se non ho gia messo un operatore
        /*else
            numbers[0] = numbers[1];*/

        //numbers[1] = '';

        display.innerHTML += " " + op;

        switch (op.trim()) {
            case '+': current_op = function(a,b) { return a+b; };
                break;
            case '-': current_op = function(a,b) { return a-b; };
                break;
            case '*': current_op = function(a,b) { return a*b; };
                break;
            case '/': current_op = function(a,b) { return a/b; };
                break;
        }
    }
}

function init_display() {
    display.innerHTML = "&nbsp;";
}

function init() {
    numbers = ['',''];
    current_num = '';
    current_op = null;
    init_display();
}

function evaluate_calc() {
    numbers[0] = current_op(parseInt(numbers[0], 10), parseInt(numbers[1], 10)).toString();
    numbers[1] = '';
    current_op = null;
    flag = false;
    init_display();

    display.innerHTML = numbers[0];
}
