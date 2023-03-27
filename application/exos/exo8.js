// Écrivez une fonction qui prend une chaîne de caractères et
// renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

const chaine = "Bienvenue"


function chaineMaj(str) {
    const voyelles = ['a', 'e', 'i', 'o', 'u'];
    let newChaine = '';
    for (let i = 0; i < str.length; i++) {
      if (voyelles.includes(str[i])) {
        newChaine += str[i].toUpperCase();
      } else {
        newChaine += str[i];
      }
    }
    return newChaine;
  }

  


const sortChaineMaj = chaineMaj(chaine);
console.log(sortChaineMaj);