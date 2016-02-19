/**
 * Created by damiano on 25/01/16.
 */

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/homeView.html', // percorso del file della pagina html da caricare
            controller: 'homeController'        //
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contactView.html', // percorso del file della pagina html da caricare
            controller: 'contactController'        //
        })
    ;

});

