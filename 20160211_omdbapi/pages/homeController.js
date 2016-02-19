angular.module('myApp')
    .controller('homeController', function ($scope, $state, $http) {

        $scope.titolo = '';
        $scope.numeroPagina = 1;
        $scope.numeroPagine = 0;

        $scope.query = function () {
            console.log && console.log('chiamato');
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?s=' + $scope.titolo + '&page=' + $scope.numeroPagina
            }).then(function (res) {
                console.log && console.log(res.data.Response);
                if (res.data.Response == 'True') {
                    $scope.elencoFilm = res.data.Search;
                    $scope.numeroRisultati = res.data.totalResults;
                    $scope.numeroPagine = Math.ceil($scope.numeroRisultati / 10);
                } else {
                    alert(res.data.Error);
                }
            }, function (res) {

            });
        };

        $scope.next = function () {
            ++$scope.numeroPagina;
            $scope.query();
        };
        $scope.previous = function () {
            --$scope.numeroPagina;
            $scope.query();
        };

        $scope.goToContact = function () {
            $state.go('contact');
        };

        $scope.goToFirst = function () {
            $state.go('details', {id: 1});
        };

        //$scope.list = dataAccess.getAll();

    });