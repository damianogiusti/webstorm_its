var routerApp = angular.module('myApp', ['ui.router', 'angularMoment']);


routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/homeView.html',
            controller: 'homeController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contactView.html',
            controller: 'contactController'
        })
        .state('details', {
            url: '/details/:id',
            templateUrl: 'pages/detailsView.html',
            controller: 'detailsController'
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'pages/editView.html',
            controller: 'editController'
        })
        .state('delete', {
            url: '/delete/:id',
            templateUrl: 'pages/deleteView.html',
            controller: 'deleteController'
        })
        .state('insert', {
            url: '/insert/',
            templateUrl: 'pages/insertView.html',
            controller: 'insertController'
        })
    ;
});












function data(){
    var temp = [
        {id: 1, name: 'prodotto 1', category:'A', price: 123.4, description: 'prodotto A'},
        {id: 2, name: 'prodotto 2', category:'B', price: 123.4, description: 'prodott B'}
    ];

    var result = new Object();

    result.getAll = function(){
        return temp;
    };

    result.getById = function(id){
        for(var i= 0; i < temp.length; i++){
            var x = temp[i];
            if(x.id == id)
                return x;
        }

        return null;
    };

    result.update = function(obj){
        if(obj != null) {
            for (var i = 0; i < temp.length; i++) {
                var x = temp[i];
                if (x.id == obj.id) {
                    temp[i] = obj;
                    return;
                }
            }
        }
    };

    result.insert = function(obj){
        if(obj != null) {
            if(temp.length == 0)
                obj.id = 1;
            else
                obj.id =  temp[temp.length - 1].id + 1;
            temp.push(obj);
        }
    };

    result.delete = function(id){
        for(var i= 0; i < temp.length; i++){
            var x = temp[i];
            if(x.id == id){
                temp.splice(i, 1);
                return;
            }
        }
    };

    return result;
};

var dataAccess = data();

//var products = dataAccess.getAll();

//var product = dataAccess.getById(1);









