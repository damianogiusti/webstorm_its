angular.module('myApp')
    .controller('editController', function ($scope, $state, $stateParams, dataAccess) {

        $scope.oldPerson = dataAccess.getById($stateParams.id);

        // clona l'oggetto creando un'istanza diversa
        $scope.person = JSON.parse(JSON.stringify($scope.oldPerson));

        $('#birthday').datepicker({
            dateFormat: 'yy-mm-d'
        });

        $scope.person.birthday = new Date($scope.person.birthday);
        console.log($scope.person.birthday);

        $scope.saveChanges = function () {
            dataAccess.update($scope.person);
            $state.go('details', {id: $scope.person.id});
        }
    });