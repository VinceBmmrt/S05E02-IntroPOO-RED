// on déclare notre usine à glaces (= la Factory)
const glaceFactory = {
    //on ajoute une méthode de fabrication de glace
    // elle prend en param les propriétés qu'on veut configurables pour nos glaces
    createGlace: (taille, parfums) => {
        const nouvelleGlace = {
            taille, 
            parfums,
            ajouterParfum: (parfum) => {
                nouvelleGlace.parfums.push(parfum);
                nouvelleGlace.taille = nouvelleGlace.taille + 1;
            },
            afficherGlace: () => {
                return `Voici une glace de taille ${nouvelleGlace.taille}, avec les parfums : ${nouvelleGlace.parfums.join(', ')}.`;
            }
        }
        // et on retourne l'objet
        return nouvelleGlace;
    }
};

// c'est parti : on fait tourner l'usine, et on fabrique des glaces :

const glace1 = glaceFactory.createGlace(2, ['fraise', 'caramel au beurre salé']);
console.log(glace1.afficherGlace());

// une seconde
const glace2 = glaceFactory.createGlace(1, ['rhum raisin']);
console.log(glace2.afficherGlace());

// les 2 objects ont des propriétés différentes qu'on a passé en argument de la méthode de création de notre machine à glace
// malgré leurs différences, ils patagent les mêmes fonctionnalités, on n'a pas eu à les ré-écrire pour chaque object créé
// l'usine donne ces méthodes à tous les objects qu'elle crée, comme un moule commun à tous les objects
