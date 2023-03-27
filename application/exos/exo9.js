


//tableau qui contient la phrase
const chaine = "hello world";

//fonction qui va enlever les voyelles d'une phrase
const numberVoyelles = (chaine) => {
  //déclaration de ce que sont les voyelles
    const voyelles = "aeiouAEIOU";
    // variable qui va contenir la phrase sans voyelles
    let returnVoyelles = 0;

    //boucle for
    for (let i = 0; i < chaine.length; i++) {

      // variable caractère tableau
      const char = chaine[i];

      //vérification si il y a des voyelles
      if (voyelles.includes(char)) {

       returnVoyelles ++;
      }
    }
    return returnVoyelles;
  }

  const returnNumberVoyelles = numberVoyelles(chaine)
  console.log(returnNumberVoyelles);