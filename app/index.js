
class Person {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        return `hello my name is ${this.name}`;
    }

}
class SuperPerson extends Person {
    constructor(name, catchPhrase){
        super(name);
        this.catchPhrase= catchPhrase;
    }
    sayPhrase(){
        return this.catchPhrase;
    }
    sayBye(){
        return `bye bye mf my name is ${this.name}`;
    }
    sayHello(){
        return super.sayHi() + ' and I\'m a bad mofo';
    }
} 



const ryan = new SuperPerson('ryan', 'i like tacos');

console.log('ryan: ', ryan.sayHi());

console.log('ryan: ', ryan.sayBye());

console.log('ryan: ', ryan.sayPhrase());

console.log('ryan: ' + ryan.sayHello()); 