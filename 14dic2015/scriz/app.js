/**
 * Created by damiano on 14/12/15.
 */

angular.module('myApp', [])
    .controller('MainController', function ($scope) {
        $scope.testo = 'Damiano';

        $scope.reset = function () {
            if (confirm('Sicuro di voler sbiancare la casella?'))
                $scope.testo = '';
        }

        $scope.products = [
            {name: 'prodotto1', description: "DeSCRIZione prodotto 1", id: 1},
            {name: 'prodotto2', description: "DeSCRIZione prodotto 2", id: 2},
            {name: 'prodotto3', description: "DeSCRIZione prodotto 3", id: 3},
            {name: 'prodotto4', description: "DeSCRIZione prodotto 4", id: 4}
        ];

        $scope.deleteProduct = function (product, index) {
            if (confirm('Sicuro di voler cancellare il prodotto ' + $scope.products[index].name + '?'))
                $scope.products.splice(index, 1);
        }

    });
