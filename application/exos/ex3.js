//Écrivez une fonction qui prend une chaîne de caractères 
//et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

//tableau qui contient la phrase
const chaine = "hello world";

//fonction qui va enlever les voyelles d'une phrase
const sansVoyelles = (chaine) => {
  //déclaration de ce que sont les voyelles
    const voyelles = "aeiouAEIOU";
    // variable qui va contenir la phrase sans voyelles
    let newChaine = "";

    //boucle for
    for (let i = 0; i < chaine.length; i++) {

      // variable caractère tableau
      const char = chaine[i];

      //vérification si il y a des voyelles
      if (!voyelles.includes(char)) {
        newChaine += char;
      }
    }
    return newChaine;
  }

  const returnPhrase = sansVoyelles(chaine)
  console.log(returnPhrase);