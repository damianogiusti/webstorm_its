angular.module('starter.controllers', [])

  .controller('SearchCtrl', function ($scope, $http) {

    $scope.ricerca = {
      isRunning: false,
      queryCitta: '',
      cities: []
    };

    $scope.queryChanged = function () {
      //console.log && console.log($scope.ricerca.queryCitta);
      if ($scope.ricerca.isRunning)
        $scope.ricerca.cities = [];
      if (!$scope.ricerca.isRunning) {
        $scope.ricerca.isRunning = true;
        console.log && console.log('lanciato');
        window.setTimeout(function () {
          $scope.ricerca.isRunning = false;
          //console.log && console.log('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.ricerca.queryCitta + '&type=like&appid=ab9dda77fc3cb406d5e591417f29a141');
          $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/find?q=' + $scope.ricerca.queryCitta + '&type=like&lang=IT&appid=ab9dda77fc3cb406d5e591417f29a141'

          }).then(function (resp) {
            $scope.ricerca.cities = resp.data.list;
            console.log && console.log(resp.data.list.length);
          }, function (resp) {
            console.log && console.log('Cities not found');
          });

          console.log && console.log('terminato');
          console.log && console.log($scope.ricerca.cities.length);
        }, 3000);

      }
    };

  })

  .controller('WeatherCtrl', function ($scope, $stateParams, $http) {

    $scope.meteo = {
      id: $stateParams.cityId,
      citta: null
    };

    console.log && console.log();

    $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?id=' + $scope.meteo.id + '&lang=it&appid=ab9dda77fc3cb406d5e591417f29a141'
    }).then(function (resp) {
      $scope.meteo.citta = resp.data;
      console.log && console.log('http://api.openweathermap.org/data/2.5/weather?id=' + $scope.meteo.id + '&lang=it&appid=ab9dda77fc3cb406d5e591417f29a141');
    }, function (resp) {
      console.log && console.log('non funziona il get dei dati dettaglio');
    });

  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
