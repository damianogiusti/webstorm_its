/**
 * Created by damiano on 11/12/15.
 */

class Person {
    firstName:string;
    lastName:string;

    constructor(name:string, surname:string) {
        this.firstName = name;
        this.lastName = surname;
    }

    getFullName = (prefix:string) => {
        if (prefix)
            return prefix + " " + this.firstName + " " + this.lastName;
        return this.firstName + " " + this.lastName;
    }

}

var p:Person = new Person("Damiano", "Giusti");
alert(p.getFullName("Mr."));
