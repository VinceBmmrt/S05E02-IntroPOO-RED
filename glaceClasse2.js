/******************************************
 * transformation en getter/setter special JS
******************************************/

class Glace {
    // (inconvénient : on est obligé de renommer les props avec un underscore (_prop))
    _taille;
    _parfums = [];
  
    constructor(tailleParam=1, parfumsParam=[]) {
        this._taille = tailleParam;
        this._parfums = parfumsParam;
        // puis plus tard on enlève les "_" ici, c'est les setter qui seront utilisés par le constructor.
    };
  
    // avec la version JavaScript (qu'on va voir ci dessous), on pourra utiliser la syntaxe :
    // maGlace.taille = 3; (au lieu de : maGlace.setTaille(3);)
    // et ajouter quand même un check sur le type, pour n'avoir que des nombres :

    // La syntaxe "set" permet de lier une propriété d'un objet à une fonction qui sera appelée à chaque tentative de modification de cette propriété.
    set taille(value) {
        if (!Number.isInteger(value)) {
            throw Error("La taille doit être un chiffre !");
        } else {
            this._taille = value;
        }
    };
  
    get taille(){
        return this._taille;
    };


    // Getter personnalisable
    // La syntaxe 'get' permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété.
    get listParfums() {
        return this._parfums.join(', ');
    };
    // parfumsList devient une nouvelle propriété 
    // on peut écrire :
    // console.log(maGlace.listParfums); // => fraise, vanille

    // on peut l'utiliser dans notre méthode afficherGlace : 
    afficherGlace() {
        return `Taille de la glace : ${this._taille}, parfums: ${this.listParfums}`;
    };
    // console.log(maGlace.afficherGlace());
  
};

