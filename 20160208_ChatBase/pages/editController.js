angular.module('myApp')
    .controller('editController', function($scope, $state, $stateParams){
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);

        $scope.name = currentObj.name;

        $scope.updateClick = function(){
            var obj = new Object();
            obj.id = $scope.id;
            obj.name = $scope.name;
            // ...
            dataAccess.update(obj);
            $state.go('home');
        };

    });