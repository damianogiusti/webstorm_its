/**
 * Created by damiano on 25/01/16.
 */

angular.module('routerApp')
    .controller('homeController', function ($scope, $state) {

    $scope.message = 'Ti trovi nella pagina home';

        $scope.gotoContact = function () {
            $state.go('contact');
        }
})
