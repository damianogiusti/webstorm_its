angular.module('myApp')
    .controller('homeController', function ($scope, $state, $http) {

        $scope.showPB = true;
        $scope.list = [];

        $http({
            method: 'GET',
            url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
        }).then(function (resp) {

            $scope.list = resp.data.features;
            /*
             (function loop(i) {
             if (i < resp.data.features.length) {
             window.setTimeout(function () {
             $scope.list.push(resp.data.features[i]);
             console.log(resp.data.features[i].properties.title)
             loop(i + 1);
             }, 10);
             }
             })(0);
             */
            $scope.showPB = false;

            /*
             resp.data.features.forEach(function (x) {
             window.setTimeout(function () {
             $scope.list.push(x);
             }, 5000);
             });
             //var url = 'http://earthquake.usgs.gov/fdsnws/event/1/query?eventid=' + $scope.list + '&format=geojson'
             */
        }, function (resp) {
            $scope.showPB = false;
        });
    });