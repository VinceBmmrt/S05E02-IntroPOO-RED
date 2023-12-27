// j'ai besoin ici de ma classe Vehicle, je la require
const Vehicle = require('./EXO-vehicule.js');

// je crée une nouvelle classe Voiture
// je vais pas tout remettre ce que j'ai déja dans la classe véhicule, après tout une voiture EST une véhicule
// on utilise le mot clé "extends"
class Voiture extends Vehicle {

    // une voiture à la particularité d'avoir toujours 4 roues
    // on veut pouvoir faire : 
    // const maCaisse = new Voiture(120);
    // ne pas préciser le 4
    // pour ceci on fait un constructeur dans notre class Voiture
    constructor(enginPowerParam) {
        // le constructeur d'une classe enfant appelle le contructeur de la classe parent (Véhicle) et on lui passe ce qu'on veut en paramètrs
        // on utilise le mot clé "super"
        super(4, enginPowerParam);
    }

    // on peut aussi surcharger la méthode toString
    toString() {
        return "Voiture : " + super.toString();
    }

}

// on teste 
const maCaisse = new Voiture(120);
maCaisse.start();
console.log(maCaisse.toString());

// on peut tester si un objet est d'une certaine classe : `instanceof`
// cet opérateur `instanceof` est capable de remonter l'arbre généalogique et renverra true si on teste qu'une classe fille est une instance de sa classe mère
console.log(maCaisse instanceof Voiture); // true
console.log(maCaisse instanceof Vehicle); // true


// encore une autre clase 
class Moto extends Vehicle {
    constructor(enginPowerParam) {
        super(2, enginPowerParam);
    };

    toString() {
        return "Moto : " + super.toString();
    }
}

// on teste
const maMobilette = new Moto(50);
console.log(maMobilette.toString());


// ---------------------------------------

// on peut hériter en chaine :
class Clio extends Voiture {
    constructor() {
        super(70);
    }
}

const maPetitClio = new Clio();
// le constructeur de Clio apelle le constructeur de Voiture en lui passant 70 comme puissance, et le constructeur de Voiture apelle le constructeur de Véhicle en lui passant le 70 et 4 pour le nombre de roues
// ()... qui en vrai appelle le constructeur de Object ;) )

console.log(maPetitClio.toString());