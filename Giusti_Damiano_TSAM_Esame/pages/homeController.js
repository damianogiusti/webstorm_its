
angular.module('myApp')
    .controller('homeController', function($scope, $state, dataAccess){

        $scope.people = dataAccess.getAll();

        $scope.clearStorage = function(){
            localStorage.clear();
        };



    });