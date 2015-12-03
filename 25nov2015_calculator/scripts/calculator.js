/**
 * Created by damiano on 23/11/15.
 */

var div_display = $("#display");
var numbers = ['', ''];     // numbers[0]: primo valore, risultato ; numbers[1]: secondo valore
var current_num = '';
var current_op = null;
var flag = true;

document.body.onload = (function () {
    var altezza = document.documentElement.clientHeight;
    //document.getElementById("calculator").style.height = altezza + "px";
});

$('.number').on('click', function () {
    var value = $(this).html();
    number(value);
});


function number(n) {
    // se non ho un operando
    // inserisco nella posizione 0
    if (current_op == null && flag) {
        numbers[0] += n.toString();
        pdisplay(numbers[0]);
    }

    // altrimenti inserisco nella posizione 1
    else {
        numbers[1] += n.toString();
        pdisplay(numbers[1]);
    }
}

$('.operator').on('click', function () {
    var value = $(this).html();
    if (value == '=')
        evaluate_calc();
    else if (value == 'C')
        init();
    else
        operator(value);
});


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
            pdisplay(display() + ' ' + op);

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

function pdisplay(arg) {
    console.log(arg)
    div_display.html(arg);
}

function display() {
    return div_display.html();
}

function init_display() {
    div_display.html("&nbsp;");
}

function init() {
    numbers = ['', ''];
    current_num = '';
    current_op = null;
    flag = true;
    init_display();
}

function evaluate_calc() {
    if (numbers[0] != '' && numbers[1] != '') {
        if (numbers[1] == '0') {
            if (numbers[0] == '0')
                pdisplay("Indeterminato");
            else
                pdisplay("Impossibile");
        }
        else {
            numbers[0] = current_op(parseFloat(numbers[0], 10), parseFloat(numbers[1], 10)).toString();
            pdisplay(numbers[0]);
        }
    }
    else
        pdisplay(numbers[0]);
    numbers[1] = '';
    current_op = null;
    flag = false;
}
