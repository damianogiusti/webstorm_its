var routerApp = angular.module('myApp', ['ui.router', 'angularMoment']);


routerApp.config(function ($stateProvider, $urlRouterProvider) {
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
        .state('articolo', {
            url: '/articolo/:id/',
            templateUrl: 'pages/articoloView.html',
            controller: 'articoloController'
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


function data() {
    var temp = [];


    for (var i = 0; i < 123; ++i) {
        var commenti = [];
        for (var com = 0; com < Math.floor(Math.random() * 99) + 1; ++com) {
            commenti.push({
                autore: 'Pippo',
                testo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos eaque modi nam quas, tempora vero. Aspernatur deleniti, error explicabo illum ipsum laborum neque obcaecati sunt vero! Inventore, molestias odio.',
                email: 'pippo@oppip.to',
                data: new Date().getTime() + Math.floor(Math.random() * 1000000000)
            });
        }
        var tags = ['Android', 'iOS', 'Hi Tech', 'News', 'Sicurezza'];
        temp.push({
            id: (i + 1),
            titolo: 'Articolo' + (1 + i),
            autore: 'Giovanni ' + (i + 1),
            dataIns: new Date().getTime() + Math.floor(Math.random() * 1000000000),
            tags: [tags.splice(Math.floor(Math.random() * 5), 1)[0], tags.splice(Math.floor(Math.random() * 5), 1)[0]],
            corpo: eval("function mia () { var s = \"\"; for (var k=0; k<12; ++k)" +
                "s+=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos eaque modi nam quas, tempora vero. Aspernatur deleniti, error explicabo illum ipsum laborum neque obcaecati sunt vero! Inventore, molestias odio.'; " +
                "return s.trim();} mia();"),
            commenti: commenti
        });
    }
    /*
     var temp = [
     {id: 1, name: 'prodotto 1', category: 'A', price: 123.4, description: 'prodotto A'},
     {id: 2, name: 'prodotto 2', category: 'B', price: 123.4, description: 'prodott B'},
     {id: 3, name: 'prodotto 3', category: 'A', price: 123.4, description: 'prodott C'},
     {id: 4, name: 'prodotto 4', category: 'B', price: 123.4, description: 'prodott D'},
     {id: 5, name: 'prodotto 5', category: 'A', price: 123.4, description: 'prodott E'},
     {id: 6, name: 'prodotto 6', category: 'B', price: 123.4, description: 'prodottone F'}
     ];*/

    var result = new Object();

    var l = localStorage.getItem('products');
    if (l)
        temp = JSON.parse(l);

    result.getAll = function () {

        return temp.sort(function (a, b) {
            return a.dataIns < b.dataIns;
        });
    };

    result.getFirstRange = function (range) {
        return temp.sort(function (a, b) {
            return a.dataIns < b.dataIns;
        }).slice(0, range);
    }

    result.getById = function (id) {
        for (var i = 0; i < temp.length; i++) {
            var x = temp[i];
            if (x.id == id)
                return x;
        }

        return null;
    };

    result.update = function (obj) {
        if (obj != null) {
            for (var i = 0; i < temp.length; i++) {
                var x = temp[i];
                if (x.id == obj.id) {
                    temp[i] = obj;
                    localStorage.setItem('products', angular.toJson(temp));
                    return;
                }
            }
        }
    };

    result.insert = function (obj) {
        if (obj != null) {
            if (temp.length == 0)
                obj.id = 1;
            else
                obj.id = temp[temp.length - 1].id + 1;
            temp.push(obj);
            localStorage.setItem('products', angular.toJson(temp));
        }
    };

    result.delete = function (id) {
        for (var i = 0; i < temp.length; i++) {
            var x = temp[i];
            if (x.id == id) {
                temp.splice(i, 1);
                return;
            }
        }
    };

    return result;
};

var dataAccess = data();

var products = dataAccess.getAll();

var product = dataAccess.getById(1);









