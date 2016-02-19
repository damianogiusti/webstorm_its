angular.module('myApp')
    .controller('editController', function ($scope, $state, $stateParams) {
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);

        $scope.name = currentObj.name;
        $scope.description = currentObj.description;
        $scope.price = currentObj.price;
        $scope.category = currentObj.category;

        $scope.updateValues = function () {
            dataAccess.update({
                id: $scope.id,
                name: $scope.name,
                description: $scope.description,
                price: $scope.price,
                category: $scope.category
            });
            $state.go('home');
        };

        $scope.deleteValues = function () {
            dataAccess.delete($scope.id);
            $state.go('home');
        };
    });