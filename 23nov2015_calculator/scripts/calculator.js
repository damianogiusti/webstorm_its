/**
 * Created by damiano on 23/11/15.
 */

var display = document.getElementById("display");
var numbers = ['', ''];     // numbers[0]: primo valore, risultato ; numbers[1]: secondo valore
var current_num = '';
var current_op = null;
var flag = true;

document.body.onload=(function() {
    var altezza = document.documentElement.clientHeight;
    //document.getElementById("calculator").style.height = altezza + "px";
});

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
        if (current_op != null && numbers[1] != '') {
            evaluate_calc();
        }
 
        if (current_op == null) {
            display.innerHTML += " " + op;

            switch (op.trim()) {
                case '+':
                    current_op = function (a, b) {
                        return a + b;
                    };
                    break;
                case '-':
                    current_op = function (a, b) {
                        return a - b;
                    };
                    break;
                case '*':
                    current_op = function (a, b) {
                        return a * b;
                    };
                    break;
                case '/':
                    current_op = function (a, b) {
                        return a / b;
                    };
                    break;
            }
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
    flag = true;
    init_display();
}

function evaluate_calc() {
    numbers[0] = current_op(parseFloat(numbers[0], 10), parseFloat(numbers[1], 10)).toString();
    numbers[1] = '';
    current_op = null;
    flag = false;
    init_display();
    // console.log(numbers);
    display.innerHTML = numbers[0];
}
