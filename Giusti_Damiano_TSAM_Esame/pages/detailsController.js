angular.module('myApp')
    .controller('detailsController', function ($scope, $state, $stateParams, dataAccess) {
        $scope.person = dataAccess.getById($stateParams.id);
        console.log && console.log($scope.person);
    });