angular.module('myApp')
    .controller('detailsController', function($scope, $state, $stateParams){
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);

        $scope.name = currentObj.name;
        $scope.description = currentObj.description;
        $scope.price = currentObj.price;
        $scope.category = currentObj.category;

    });