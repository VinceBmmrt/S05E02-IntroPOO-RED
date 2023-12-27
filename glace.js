// créons un objet
const glace = {
    // avec des propriétés
    taille: 3,
    parfums: ['pistache', 'vanille', 'melon'],
    // et des méthodes
    ajouterParfum: (parfum) => {
        glace.parfums.push(parfum);
        glace.taille = glace.taille + 1;
    },
    afficherGlace: () => {
        return `Voici une glace de taille ${glace.taille}, avec les parfums : ${glace.parfums.join(', ')}.`;
    }
};

// on peut utiliser les méthodes de l'objet
glace.ajouterParfum('chocolat');
console.log(glace.afficherGlace());

// si on veut créer une nouvelle glace, on fait un nouvel objet
const glace2 = {
    taille: 1,
    parfums: ['citron vert'],
}

// je voudrait pouvoir utiliser les mêmes méthodes que celle du premier objet

glace2.ajouterParfum('goyave'); // => erreur, ça ne marche pas, la fonction n'existe pas dans ce deuxième objet.