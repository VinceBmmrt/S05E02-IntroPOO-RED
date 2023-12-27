/*
Coder une class "Vehicle".

Propriétés:
- nbWheels (nombre de roues)
- enginePower (puissance du moteur)
- isStarted (est-ce que le véhicule est démarré ?)

Méthodes:
- `constructor(nbWheels, enginePower)` (isStarted est false par défaut)
- getters et setters pour toutes les propriétés (pas de conditions dans les setters)
- `start()` et `stop()` : démarre et arrête le véhicule
- `toString()` : renvoie "véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}."

*/

class Vehicle {
    _nbWheels;
    _enginePower;
    _isStarted;

    constructor(nbWheelsParam, enginePowerParam) {
        this.nbWheels = nbWheelsParam;
        this.enginePower = enginePowerParam;
        this.isStarted = false;
    }

    // GETTER & SETTER pour toutes les props :
    // nbWheels
    get nbWheels() {
        // cette fonction est executée lorsu'on accède à la propriété nbWheels d'un instance de la classe
        // donc quandon fait : par exemple maVoiture.nbWheels
        // console.log("quelqu'un essaie d'éccéder aunombre de roues de la voiture");
        return this._nbWheels
    }
    set nbWheels(value) {
        this._nbWheels = value;
    }
    // enginePower
    get enginePower() {
        return this._enginePower
    }
    set enginePower(value) {
        this._enginePower = value;
    }
    // isStarted
    get isStarted() {
        return this._isStarted
    }
    set isStarted(value) {
        this._isStarted = value;
    }

    //  Méthodes supplémentaires
    start() {
        this.isStarted = true;
    }

    stop() {
        this.isStarted = false;
    }

    toString() {
        // cette méthode renvoie "véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}."
        const vehicleState = this.isStarted ? 'est démarré.' : "n'est pas démarré."
        // opérateur ternaire 
        // condition ? conditionVraie : conditionFausse (merci Vincent !)
        const string = `Véhicule à ${this.nbWheels} roues, de pouissance ${this.enginePower}, ${vehicleState}`;
        return string;
    }
}


const maTotoMobile = new Vehicle(4, 90);
console.log(maTotoMobile);

console.log(`ma voiture à ${maTotoMobile.nbWheels} roues`);

maTotoMobile.start();
console.log(maTotoMobile);

console.log(maTotoMobile.toString());
maTotoMobile.stop();
console.log(maTotoMobile.toString());

// j'instancie un autre véhicule
const maMoto = new Vehicle(2, 50);
console.log(maMoto.toString());


// j'exporte ma classe pour y avoir accès dans d'autres fichiers
module.exports = Vehicle;