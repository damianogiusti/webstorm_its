angular.module('myApp')
    .controller('detailsController', function ($scope, $state, $stateParams, $http) {
        $scope.id = $stateParams.id;

        $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?i=' + $scope.id
        }).then(function (res) {
            if (res.data.Response == 'True') {
                $scope.film = res.data;
            } else {
                alert(res.data.Error);
            }

        }, function (res) {

        });

        $scope.indietro = function () {
            //$state.go('details', {id: 1});
        };

        $scope.range = function (n) {
            var array = [];
            for (var i = 0; i < Math.round(n); i++)
                array.push(i);
            return array;
        }
    });