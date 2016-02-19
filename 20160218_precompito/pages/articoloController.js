angular.module('myApp')
    .controller('articoloController', function ($scope, $state, $stateParams) {
        $scope.id = $stateParams.id;
        $scope.articolo = dataAccess.getById($stateParams.id);

        $scope.commentiMostrati = 4;
        $scope.commenti = $scope.articolo.commenti.slice(0, $scope.commentiMostrati);

        $scope.piuCommenti = function () {
            $scope.commentiMostrati += 4;
            $scope.commenti = $scope.articolo.commenti.slice(0, $scope.commentiMostrati);
        };
        
        //$scope.ENRICO = [
        //    'http://tremenza.it/wp-content/uploads/2015/12/papi.jpg',
        //    'http://cdn.gossipetv.com/wp-content/uploads/2014/11/enrico-papi-.jpg',
        //    'http://i.imgur.com/H8hOGtG.jpg',
        //    'http://www.ivid.it/fotogallery/imagesearch/images/papi_enrico_conduttore_014_jpg_verg.jpg',
        //    'http://media.tvblog.it/e/enr/enricopapi.jpg',
        //    'http://www.ivid.it/fotogallery/imagesearch/images/prendere_o_lasciare_007_jpg_hkvx.jpg'
        //];
    });