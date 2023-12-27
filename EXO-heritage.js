/*

- coder la classe Person
    - propriétés: firstName, lastName, age, state
    - constructor(firstName, lastName, age) // state = "vivant" par défaut
    - méthode toString() et sayHello()
    - (pas de getter/setter)

- coder la classe Vampire, qui hérite de Person.
    - constructor(firstName, lastName, age) // mais state = "mort-vivant" !

- Enfait, les Vampires ont un super pouvoir : ils peuvent savoir à tout moment combien il y a de vampires dans le monde
    - on ajoute donc un propriété dans notre classe vampire : nbVampires : on utilise une propriété STATIC
*/

class Person {
    firstName;
    lastName;
    age;
    state = 'vivant';

    constructor(firstNameParam, lastNameParam, ageParam) {
        this.firstName = firstNameParam;
        this.lastName = lastNameParam;
        this.age = ageParam;
    }

    toString() {
        return `Je m'apelle ${this.firstName} ${this.lastName}, j'ai ${this.age} ans, et je suis ${this.state}.`;
    }

    sayHello() {
        console.log(this.toString());
    }
}

const louis = new Person('Louis', 'Delarue', 20);
louis.sayHello();
// console.log(louis);


class Vampire extends Person {
    state = "mort-vivant";
    static nbVampires = 0;

    constructor(firstNameParam, lastNameParam, ageParam) {
        super(firstNameParam, lastNameParam, ageParam);

        // chaque fois qu'on passe dans le constructeur (chaque fois q'un vampire est instancié) : on incrément de 1 le compteur de vampires
        Vampire.nbVampires++;
    }

    // on surcharge la méthode toString(), pour que les vampires, après s'être présenter, annoncent leur nombres
    // super.toString() execute la méthode toString de la classe parente
    toString() {
        return super.toString() + `\nNous sommes ${Vampire.nbVampires} vampires dans le monde;`;
    }
}

const vlad = new Vampire('Vlad', 'Dracula', 200);
vlad.sayHello();
// vlad.nbVampires; // = 1

const olivia = new Vampire('Olivia', 'Moore', 250);
olivia.sayHello();
// olivia.nbVampires; // = 1

console.log(Vampire.nbVampires);

const autre = new Vampire('autre', 'vampire', 330);
autre.sayHello();