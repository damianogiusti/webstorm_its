/**
 * Created by damiano on 18/01/16.
 */

angular.module('MyApp', [])
    .controller('IndexController', function ($scope) {
        $scope.prodotti = [
            {id: 1, nome: 'prodotto1', descrizione: 'Questo è bellissimo', prezzo: 12, categoria: ''},
            {id: 2, nome: 'prodotto2', descrizione: 'Questo è meno bellissimo', prezzo: 234, categoria: ''},
            {id: 3, nome: 'prodotto3', descrizione: 'Questo è meno bellissimo', prezzo: 234, categoria: ''},
            {id: 4, nome: 'prodotto4', descrizione: 'Questo è meno bellissimo', prezzo: 234, categoria: ''},
            {id: 5, nome: 'prodotto5', descrizione: 'Questo non è bellissimo', prezzo: 34578, categoria: ''}
        ];

        $scope.carrello = [];

        $scope.addToCart = function (p) {
            $scope.carrello.push(p);
        }

        $scope.add = function () {
            $scope.prodotti.push({
                id: $scope.prodotti.length+1,
                nome: $scope.nomeProdotto,
                descrizione: $scope.descrizione,
                prezzo: $scope.prezzo,
                categoria: $scope.categoria
            });
        }
    });
