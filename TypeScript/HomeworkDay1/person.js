var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.firstname = '';
        this.lastname = '';
        this.sayHi = function () {
            return "Hi " + _this.firstname + " " + _this.lastname;
        };
    }
    return Person;
}());
var person1 = new Person();
person1.firstname = 'Le';
person1.lastname = 'Phung';
console.log(person1.sayHi());
var Person1 = /** @class */ (function () {
    function Person1() {
        var _this = this;
        this.firstname1 = '';
        this.lastname1 = '';
        this.sayHi = function () {
            return "Hi " + _this.firstname1 + " " + _this.lastname1;
        };
    }
    return Person1;
}());
//ke thua Person1
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person1));
// ke thua Employee
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.salary = 0;
        return _this;
    }
    return Company;
}(Employee));
var c1 = new Company(); //Tao 1 company rong 
c1.firstname1 = 'Le';
c1.lastname1 = 'Phung';
console.log(c1.sayHi()); // Hi Le Phung
//---------------------------------------------------//
//create function 3 callback hell (3x) which use interface
//Cac buoc chuan bi lam 1 chiec banh burger:
// Get ingredients (we’re gonna assume it’s a beef burger)
// Cook the beef
// Get burger buns
// Put the cooked beef between the buns
// Serve the burger
// const makeBurger =()=>{
//     getBeef(function(beef){
//         //we can only cook beef after we can it 
//         cookBeef(beef, function(cookedBeef){
//             getBuns(function(buns){
//                 //Put patty in Buns
//                 putBeefBetweenBuns(buns, beef, function(burger){
//                     //Serve the burger
//                     nextStep(burger)
//                 })
//             })
//         })
//     })
// }
// // make and serve the burger
// makeBurger(function(burger){
//     serve(burger);
// })
function ThucDay(viecnaodo) {
    viecnaodo();
}
function DanhRang(viecnaodo) {
    viecnaodo();
}
function DiAnSang(viecnaodo) {
    viecnaodo();
}
function main() {
    ThucDay(function () {
        DanhRang(function () {
            DiAnSang(function () {
                console.log("OMG!!!!");
            });
        });
    });
}
