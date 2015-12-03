/**
 * Created by damiano on 03/12/15.
 */
/**
 true: cerchio
 false: croce
 */


var player = true;
var matrix;
var count = 0;

$(function () {
    $('.field').on('click', onClickEvent);
    matrix = getMatrix();
});

var onClickEvent = function () {
    if (count < 9) {
        count++;
        $(this).addClass('solid_' + getSolid());

        var result = ended();

        if (result != null)
            alert('ha vinto ' + result[0].className);

        else if (count == 9)
            alert('pareggio');

        player = !player;
    }
};

function getSolid() {
    if (player)
        return 'circle';
    return 'cross';
}

function getMatrix() {
    var matrix = [];
    var container = $('.field');

    for (var i = 0; i < 3; i++) {
        matrix[i] = [];
        for (var j = 0; j < 3; j++) {
            matrix[i][j] = container.get(3 * i + j);
        }
    }

    return matrix;
}

function ended() {
    var result = false;
    var winner = null;
    console.log('try 1');
    for (var i = 0; i < matrix.length; i++) {
        console.log(i);
        //console.log(matrix[i])
        if (tris(matrix[i]))
            return matrix[i];
    }

    console.log('try 2');
    for (var i = 0; i < matrix.length; i++) {
        var array = [matrix[0][i], matrix[1][i], matrix[2][i]];
        if (tris(array))
            return array;
    }

    console.log('try 3');
    var array = [matrix[0][0], matrix[1][1], matrix[2][2]];
    if (tris(array))
        return array;

    console.log('try 4');
    var array = [matrix[2][0], matrix[1][1], matrix[0][2]];
    if (tris(array))
        return array;

    return null;
}

function equals(a, b) {
    return b.className.substr(6) != ""
        && a.className.substr(6) != ""
        && a.className.substr(6) == b.className.substr(6);
}

function tris(vet) {
    return equals(vet[0], vet[1]) && equals(vet[1], vet[2]);
}
