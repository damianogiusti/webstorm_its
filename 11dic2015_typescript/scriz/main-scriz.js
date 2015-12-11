/**
 * Created by damiano on 11/12/15.
 */
var its;
(function (its) {
    var People = (function () {
        function People(name, surname) {
            this.firstName = name;
            this.lastName = surname;
        }
        return People;
    })();
    its.People = People;
})(its || (its = {}));
var p = new its.People("Damiano", "Giusti");
