/**
 * Created by damiano on 18/01/16.
 */

angular.module('myApp', [])
    .controller('IndexController', function ($scope) {

        $scope.name = 'Damiano';

        $scope.reset = function () {
            $scope.name = '';
        };

        $scope.products = [
            {id: 1, code: 'abc1', description: 'prodotto1'},
            {id: 2, code: 'abc2', description: 'prodotto2'},
            {id: 3, code: 'abc3', description: 'prodotto3'},
            {id: 4, code: 'abc4', description: 'prodotto4'}
        ];

        $scope.delete = function (product, index) {
            if (confirm('Sicuro di cancellare ' + product.description + '?')) {
                $scope.products.splice(index, 1);
            }
        };

    });

