angular.module('myApp')
    .controller('deleteController', function($scope, $state, $stateParams, dataAccess){
        $scope.person = dataAccess.getById($stateParams.id);

        $('#dialog').dialog({
            modal: true,
            buttons: {
                "Remove": function() {
                    dataAccess.delete($scope.person.id);
                    $(this).dialog('close');
                    $state.go('home');
                },
                Cancel: function() {
                    $(this).dialog('close');
                    $state.go('details', {id: $scope.person.id});
                }
            }
        });
    });