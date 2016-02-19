angular.module('myApp')
    .controller('detailsController', function ($scope, $state, $stateParams, $http) {
        // $scope.id = $stateParams.id;
        // var currentObj = dataAccess.getById($stateParams.id);

        $scope.showPB = true;

        $http({
            method: 'GET',
            url: 'http://earthquake.usgs.gov/fdsnws/event/1/query?eventid=' + $stateParams.id + '&format=geojson'
        }).then(function (res) {
            $scope.earthquake = res.data;
            console.log('http://earthquake.usgs.gov/fdsnws/event/1/query?eventid=' + $stateParams.id + '&format=geojson');
            $scope.showPB = false;
        }, function () {
            $scope.showPB = false;
        });
        /*
         $scope.ENRICO = [
         'http://tremenza.it/wp-content/uploads/2015/12/papi.jpg',
         'http://cdn.gossipetv.com/wp-content/uploads/2014/11/enrico-papi-.jpg',
         'http://i.imgur.com/H8hOGtG.jpg',
         'http://www.ivid.it/fotogallery/imagesearch/images/papi_enrico_conduttore_014_jpg_verg.jpg',
         'http://media.tvblog.it/e/enr/enricopapi.jpg',
         'http://www.ivid.it/fotogallery/imagesearch/images/prendere_o_lasciare_007_jpg_hkvx.jpg'
         ];

         $scope.objName = currentObj.name;
         $scope.objCategory = currentObj.category;
         $scope.objPrice = currentObj.price;
         $scope.objDescription = currentObj.description;
         */
    });