/**
 * Created by damiano on 11/12/15.
 */

module its {
    export class People {
        firstName:string;
        lastName:string;

        constructor(name:string, surname:string) {
            this.firstName = name;
            this.lastName = surname;
        }
    }
}

var p:its.People = new its.People("Damiano", "Giusti");