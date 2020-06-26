interface Iperson{
    firstname: string
    lastname: string
    sayHi: () =>string
}

class Person implements Iperson{
    firstname= '';
    lastname='';
    sayHi= () =>{
        return `Hi ${this.firstname} ${this.lastname}`
    }
}

const person1 = new Person();
person1.firstname = 'Le';
person1.lastname = 'Phung';

console.log(person1.sayHi());
  //--------------------------------------------------------//
  //create 3 class with interface which uses interface
interface Iperson1{
    firstname1: string
    lastname1: string
    sayHi: () =>string
}

class Person1 implements Iperson1{
    firstname1= '';
    lastname1='';
    sayHi= () =>{
        return `Hi ${this.firstname1} ${this.lastname1}`
    }
}
interface IEmployee{
    department: string
    }
    //ke thua Person1
class Employee extends Person1 implements IEmployee{
    department:''
}
interface ICompany{
    salary: number
}
// ke thua Employee
class Company extends Employee implements ICompany{
    salary = 0
}

const c1 = new Company();//Tao 1 company rong 
c1.firstname1 = 'Le'  
c1.lastname1 = 'Phung'
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

function ThucDay(viecnaodo){
    viecnaodo();
}

function DanhRang(viecnaodo){
    viecnaodo();
}
function DiAnSang(viecnaodo){
    viecnaodo();
}
function main (){
    ThucDay(function(){
        DanhRang(function(){
            DiAnSang(function(){
                console.log("OMG!!!!");
            });
        });
    });
}
