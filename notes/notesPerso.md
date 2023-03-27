variable → va stocker des données spécifiques

→ respecte pas forcement l’ordre du code

Déclarer variable avec let et pas const

```jsx
let age = 30 //Bonne facon

const age = 20 //Erreur
```

Tableau :

```jsx
const tableau = [1, 2, 3]
```

types de données :

- string : text
- number : nombres
- boolean : vrai ou faux
- array : plusieurs valeurs sur 1 variable
- object : données complexes

```jsx
const uneChaine = 'hello';

const autreChaine = "blabla";

const anotherChaine = `kalkal`;
```

```jsx
let number = 123; let text3 = nombre.toString
```

→ pour un quote dans le code mettre un \ avant

.concat → ajouter une chaine de caractère à variable une string déjà existante 

// → commentaire


.length → retourne variable modifier

.toLowerCase → affiche en minuscule 

.toUpperCase → affiche en maj

.slice → envoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine


array 

→ Reste valide avec const et let
```jsx

monTableau = [];

monTableau[0] = valeur1;

monTableau[1] = valeur2;
```

.push : pour ajouter une valeur au tableau

.splice : Pour supprimer une valeur du tableau

``` jsx
const soustraire(a, b) ⇒ {

return a - b;

}

// Meme fonction écrite différemment 

const soustraire = (a, b) ⇒ a-b;
``` 