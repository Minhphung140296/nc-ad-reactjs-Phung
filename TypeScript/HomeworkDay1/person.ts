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
