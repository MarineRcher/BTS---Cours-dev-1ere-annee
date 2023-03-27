// Écrivez une fonction qui prend un tableau de chaînes de caractères 
//et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

const chaine = ["Hello World", "Bonjour", "Hola", "Halo"];

const triPhrase = (chaine) => {
 
    return chaine.sort();
    
 }

const sortTriPhrase = triPhrase(chaine)
console.log(sortTriPhrase);


