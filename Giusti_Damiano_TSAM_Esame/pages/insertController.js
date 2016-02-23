angular.module('myApp')
    .controller('insertController', function ($scope, $state, dataAccess) {
        
        $('#birthday').datepicker({
            dateFormat: 'yy-mm-d'
        });

        $scope.addPerson = function () {
            if ($scope.person != null) {
                //console.log && console.log($scope.person.birthday)
                dataAccess.insert($scope.person);
                $state.go('home');
            }
        }

    });