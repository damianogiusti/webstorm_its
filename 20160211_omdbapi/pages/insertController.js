angular.module('myApp')
    .controller('insertController', function ($scope, $state, $stateParams) {
        /*$scope.id = $stateParams.id;
         var currentObj = dataAccess.getById($stateParams.id);

         $scope.name = currentObj.name;
         $scope.description = currentObj.description;
         $scope.price = currentObj.price;
         $scope.category = currentObj.category;
         */
        $scope.addNewValue = function () {
            dataAccess.insert({
                name: $scope.name,
                description: $scope.description,
                price: $scope.price,
                category: $scope.category
            });
            $state.go('home');
        };
    });