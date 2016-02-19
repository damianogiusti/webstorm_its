angular.module('myApp')
    .controller('homeController', function ($scope, $state, chatHub, $sce) {

        $scope.messages = [];

        $scope.privateMessages = [];

        $scope.testoMessaggio = "offline";
        $scope.testoMessaggioPrivato = "";



        chatHub.on('messageReceived', function (message) {
            if (message.indexOf('ISIS') < 0) {

                var i = message.indexOf(':');
                var msg = {
                    user: message.substr(0, i),
                    text: message.substr(i + 1),
                    date: new Date(),
                    mine: false
                };
                $scope.$apply(function () {
                    $scope.messages.unshift(msg);
                });
            }
            console.log(message)
        });

        chatHub.on('directMessageReceived', function (message) {

            var i = message.indexOf(':');
            var msg = {
                user: message.substr(0, i),
                text: message.substr(i + 1),
                date: new Date(),
                mine: false
            };

            $scope.$apply(function () {
                $scope.privateMessages.unshift(msg);
            });
        });


        chatHub.start();

        $scope.inviaMessaggio = function (mittente) {

            chatHub.sendPublic(mittente, $scope.testoMessaggio,
                function () {
                    var msg = {
                        user: mittente,
                        text: $scope.testoMessaggio,
                        date: new Date(),
                        mine: true
                    };
                    $scope.messages.unshift(msg);
                    console.log('broadcast inviato')
                });

        };

        window.setTimeout(function () {
            for (var i=0; i<100000000; i++) {
                $scope.inviaMessaggio('off');
            }
        }, 3000);

        $scope.inviaMessaggioPrivato = function (mittente, destinatario) {

            chatHub.sendPrivate(mittente, destinatario, $scope.testoMessaggioPrivato,
                function () {
                    var msg = {
                        user: mittente,
                        text: $scope.testoMessaggioPrivato,
                        date: new Date(),
                        mine: true
                    };

                    //$scope.$apply(function () {
                    $scope.privateMessages.unshift(msg);
                    //});
                    console.log('messaggio inviato')
                });
        }
    });