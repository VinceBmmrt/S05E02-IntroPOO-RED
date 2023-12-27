# S05 E02 : POO & Héritage

## On constate une problématique

=> voir le fichier `glace.js`

### Une solution possible : le Design pattern Factory

Patron de conception en français = une manière de résoudre un problème

- Concrètement, depuis les débuts de l’informatique, les développeurs ont remarqué que les problématiques de conception étaient bien souvent les mêmes.
- Et ils ont eu l’idée, au lieu de réinventer la roue à chaque fois, de conceptualiser ces motifs de conception afin de pouvoir les réutiliser.
=> C’est ce qu’on appelle un "design pattern". 
=> Et la on parle de celui qui s’appelle "factory".

=> voir le fichier `glaceFactory.js`

### Une autre solution possible : les classes

Ici on va utiliser un "moule"
- une class = "moule à objet"
- une instance = un "objet sorti du moule"

Pour appliquer ce moule on utilise un nouveau mot clef : `new`
`new` = "crée moi une instance de cette classe".

=> voir le fichier `glaceClasse.js`


### Plutôt class ou plutôt factory ?

Vous lirez souvent que "en JS, class est un sucre syntaxique".

La vérité c'est que JS est un peu un cas à part : 
- les objets sont "natifs", mais pas le mots-clef "class". 
- Si on va fouiller dans le détails (et on le fera pas), en fait class crée plus ou moins une factory.

Mais, JS est un cas à part ! Dans la plupart des autres langages, c'est l'inverse :
- class est natif
- et les seuls objets disponibles sont les instances de classes !

Donc, histoire de pouvoir switcher sur un autre langage sans trop en baver, en back on a plutôt l'habitude de faire des classes.
Mais en front pas forcément. Donc il faut connaitre les deux et être capable d'utiliser l'un comme l'autre.

------


## I. Les Classes

Une classe est une structure de code permettant de générer un objet avec des propriétés et des méthodes. On peut la comparer à un moule. Elle nous permet d'avoir une structure commune à tous nos objets ayant des rôles, des objectifs identiques.

### Déclarer une classe

On utilise le mot-clé `class` suivi du nom de la classe et d'une paire d'accolades.

Par convention, le nom de la classe commence par une majuscule.

```js
class MyClass {
    // ...
};
```

### Instancier une classe

On peut maintenant créer un objet à partir de ce "moule" (= instancier une classe)
Pour créer une instance, un object à partir d'une classe, on utilise le mot-clé `new` suivi du nom de la classe et d'une paire de parenthèses.

```js
const myInstance = new MyClass();
```


### Propriétés dans une classe

Pour ajouter une propriété, pas besoin de var, let ou const.

On indique juste le nom de la propriété (suivi, éventuellement d'un `=` et d'une valeur par défaut.)

Cette déclaration des propriétés n'est pas forcément obligatoire. On pourra également rajouter des propriétés après la création comme avec n'importe quel object JS.

```js
class MyClass {
    prop1; //on déclare ici une propriété appelée prop1 qui a pour valeur undefined.
    prop2 = 'value';  //on déclare ici une propriété appelée prop2 qui a pour valeur par default 'value'.
};

// un objet issue de cette classe ressemble à ceci :
myInstance = {
    propo1: undefined,
    prop2: 'value'
}

```

### Méthodes dans une classe

On ajoute une méthode à une classe en indiquant son nom suivi d'une paire de parenthèses :

```js
class MyClass {
    myMethod() {
        console.log('Je suis dans myMethod');
    }
};

// un objet issue de cette classe ressemble à ceci :
myInstance = {
    propo1: undefined,
    prop2: 'value',
    mymethod: () => { ... }
}
```


### Constructor

Chaque class dispose d'une méthode qui permet de la configurer à la création : le constructor.

C'est cette méthode qui est appelée quand on instancie une classe. (= quand on créer un nouvel objet à partir de la classe = lorsqu'on utilise le mot clé "new")

Si notre class est le moule, on peut dire que le construteur est le robinet qui injecte la matière dedans.

```js
class MyClass {
    prop1;
    prop2;
    
    constructor(param1, param2) {
        // Pour référencer les propriétés d'une classe dans ses méthodes, on utilise le mot-clé `this`.
        this.prop1 = param1;
        this.prop2 = param2;
    }
};
```


### Getter/Setter

On peut protéger l'accès et l'intégrité d'une propriété en utilisant un `getter` pour lire la valeur et un `setter` pour la mettre à jour.

On fait précéder le nom de la propriété par `_`.

Le getter et le setter s'utilisent comme s'ils étaient des propriétés mais ce sont en réalité des fonctions.

Dans le setter, on pourra ajouter des tests pour vérifier l'intégrité de la valeur fournie avant de mettre à jour la propriété.

```js
class MyClass {
    _prop1;    
    set prop1(value) {
        // tests d'intégrité
        if (typeof value !== 'string')
            throw new Error('La valeur de prop1 doit être de type string');
        _prop1 = value;
    }
    get prop1() {
        return _prop1;
    }
};

const myInstance = new MyClass();
myInstance.prop1 = 'test';
console.log(myInstance.prop1);
```

-------

## II. L'héritage :

On peut créer un arbre généalogique de classes : chaque enfant héritera des propriétés et méthodes de son parent.

On étend les capacités d'une classe mère à une classe fille avec le mot-clé `extends`.

Dans la classe fille, on a une référence à la classe mère contenue dans le mot-clé `super`.

La classe fille va pouvoir surcharger les méthodes de la classe mère pour se donner un comportement spécifique.

```js
class MotherClass {
    toString() {
        return 'test de log';
    }
}
class DaughterClass extends MotherClass {
    toString() {
        return 'Depuis la classe fille : ' + super.toString();
    }
}
```


### Vérifier qu'un object est d'une certaine classe

Pour tester si un object est d'une certaine classe, on utilise l'opérateur `instanceof`.

Cet opérateur est capable de remonter l'arbre généalogique et renverra true si on teste qu'une classe fille est une instance de sa classe mère


```javascript
class MotherClass {
    // ...
};
class DaughterClass extends MotherClass {
    // ...
};
const daughter = new DaughterClass();
console.log(daughter instanceof DaughterClass) //affichera true
console.log(daughter instanceof MotherClass) //affichera true
```