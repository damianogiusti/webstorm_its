angular.module('myApp')
    .controller('homeController', function ($scope, $state) {
        $scope.message = 'Ti trovi in home page, ancora per poco.';

        $scope.goToContact = function () {
            $state.go('contact');
        };

        $scope.goToFirst = function () {
            $state.go('details', {id: 1});
        };

        $scope.list = dataAccess.getAll();

    });