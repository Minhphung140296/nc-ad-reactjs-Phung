var person = /** @class */ (function () {
    function person() {
        var _this = this;
        this.firstname = '';
        this.lastname = '';
        this.sayHi = function () {
            return "Hi " + _this.firstname + " " + _this.lastname;
        };
    }
    return person;
}());
var person1 = new person();
person1.firstname = 'Le';
person1.lastname = 'Phung';
console.log(person1.sayHi());
