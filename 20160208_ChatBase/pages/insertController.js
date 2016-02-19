angular.module('myApp')
    .controller('insertController', function($scope, $state){

        $scope.name = '';

        $scope.updateClick = function(){
            var obj = new Object();
            obj.id = -1;
            obj.name = $scope.name;
            // ...
            dataAccess.insert(obj);
            $state.go('home');
        };

    });