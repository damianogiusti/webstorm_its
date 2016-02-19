'use strict';

angular.module('myApp')
    .service('chatHub',
        function ($rootScope) {

            var connection = $.hubConnection('http://its-chat.dottor.net');
            var proxy = connection.createHubProxy('itsChatHub');

            connection.received(function (data) {
                //console.log(data);
            });

            var self = this;
            this.start = function () {
                connection.start({transport: 'longPolling'})
                    .done(function () {
                        console.log('connessione avviata')
                    })
                    .fail(function () {
                        window.setTimeout(function () {
                            self.start();
                        }, 5000);
                    });
            };
            this.on = function (eventName, callback) {
                proxy.on(eventName, callback);
            };
            this.invoke = function (methodName, callback) {
                proxy.invoke(methodName)
                    .done(function (result) {
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                        });
                    }).fail(function (error) {
                    alert('Invocation  failed. Error: ' + error);
                });
            };
            this.sendPublic = function (from, message, callback) {
                proxy.invoke('sendPublicChatMessage', from, message)
                    .done(function (result) {
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                        });
                    }).fail(function (error) {
                    alert('Invocation  failed. Error: ' + error);
                });
            }
            this.sendPrivate = function (from, to, message, callback) {
                proxy.invoke('sendChatMessage', from, to, message)
                    .done(function (result) {
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                        });
                    }).fail(function (error) {
                    alert('Invocation  failed. Error: ' + error);
                });
            };

        });