/**
 * Created by damiano on 14/12/15.
 */

angular.module('myapp', [])
    .controller('MainController', function ($scope) {

        $scope.frasi = [];

        $scope.inserisciFrase = function () {
            $scope.frasi.push({text: $scope.testo});
            $scope.testo = '';
        };

        $scope.eliminaFrase = function (index) {
            $scope.frasi.splice(index, 1);
        }

    });
