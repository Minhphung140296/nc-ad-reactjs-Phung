interface Iperson{
    firstname: string
    lastname: string
    sayHi: () =>string
}

class person implements Iperson{
    firstname= '';
    lastname='';
    sayHi= () =>{
        return `Hi ${this.firstname} ${this.lastname}`
    }
}

const person1 = new person();
person1.firstname = 'Le';
person1.lastname = 'Phung';

console.log(person1.sayHi());
