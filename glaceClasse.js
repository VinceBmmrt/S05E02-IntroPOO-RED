// on crée notre première classe : la classe Glace
// par convention on nom de classe commence toujours par une majuscule
// on la déclare avec le mot clé 'class' suivi de son nom, et d'une paire d'accolades
class Glace {
    // on déclare des propriétés à notre classe (pas de mot clé let ou const ou var)
    taille;
    // on peut assigner une valeur dirrectement à la création (ici par exemple un tableau vide)
    // attention c'est bien un = et pas ":" (on est dans une classe pas dans un objet)
    parfums = [];

    // on ajoute un constructeur (bonne pratique, on le mets avant les autres méthodes)
    // c'est une méthode particulière qui est apellée lors de l'instanciation de la classe : au moment où on utilise le mot clé "new"
    // attention le mot clé "constructor" est imposé par JS (il n'est pas jean-michelisable = on ne peut pas l'apeller comme on veut)
    constructor(tailleParam='', parfumsParam=[]) {
        // this.taille = tailleParam;
        // ou mieux, pour vérifier le type, on utilise le setter qu'on a ajouté :
        this.setTaille(tailleParam);

        this.parfums = parfumsParam; 
    };
    // grâce au constructeur, on peut créer une nouvelle glace et initialises ses propriétés dirrectement dans les parenthèses après le new, comme ceci :
    // const glace3 = new Glace(2, ['vanille', 'chocolat']);


    // GETTER et SETTER
    // on ajoute une méthode apellée SETTER qui permet de modifier la propriété "taille" en ajoutant des vérifictions de type par exemple
    setTaille(tailleParam) {
        // on vérifie que tailleParam soit bien un number
        if (Number.isInteger(tailleParam)) {
            this.taille = tailleParam;
        } else {
            console.log("La taille doit être une chiffre !");
            // ou throw Error("La taille doit être une chiffre !");
        }
    };

    // bonne pratique : créer aussi un GETTER qui permet de récupérer la valeur d'une propriété
    // BUT : faciliter le switch avec d'autres languages pour lesquels les getter/setter sont obligatoires, car les propriétés de l'instance sont privées ("private")
    getTaille() {
        return this.taille;
    };

    // Note : on pourrait faire aussi un getter et un setter pour la propriété parfuns


    // on peut ajouter une méthode : l'objet qui sortira du "moule" Glace aura accès à cette méthode
    // dans une classe pas besoin du mot clé fonction, on mets juste les accolades
    afficherGlace() {
        // comment récupérer les propriétés de l'instance ? => avec le mot clé "this"
        // this = l'instance courante
        return `Voici une glace de taille ${this.taille}, avec les parfums : ${this.parfums.join(', ')}.`;
    };

    ajouterParfum(parfum) {
        this.parfums.push(parfum);
        this.taille = this.taille + 1;
    };
}

// on crée une instance de la classe Glace = un objet qui "sort" du moule "Glace"
const glace1 = new Glace();

// je veux maintenant donner une valeur à la propriété taille de ma glace
// => glace1 : c'est un objet js tout ce qu'il y a de plus classique
// on peut moidifier ses propriétés comme on sait déja faire :
glace1.taille = 3;
glace1.ajouterParfum('framboise');

console.log(glace1.afficherGlace());

// on crée une autre glace
const glace2 = new Glace();
console.log(glace2.afficherGlace());

// le but d'un constructeur c'est de pouvoir faire ceci :
const glace3 = new Glace(2, ['vanille', 'chocolat']);
console.log(glace3.afficherGlace());

// on essaye ça :
glace3.taille = "toto"; 
console.log(glace3.afficherGlace());
// ça marche ! Aie aie oun voudrait empêcher ça
// on voudrait ajouter une vérification au moment où quelqu'un essaie de modifier la proriété taille, pour vérifier qu'on mets bien un chiffre
// pour éviter ça on ajouter dans la classe un SETTER (voir plus haut)

// maintenant on peut faire :
glace3.setTaille("toto"); // j'ai bien une erreur dans la console, et la taille n'est pas modifiée
glace3.setTaille(5); // là ça marche, la taille de ma glace3 est mise à jour
console.log(glace3.afficherGlace());