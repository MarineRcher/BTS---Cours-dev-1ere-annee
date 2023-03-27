// Écrivez une fonction qui prend un nombre en argument 
// et renvoie une chaîne de caractères représentant ce nombre en mots. 
//Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".


function nombreEnArgument(nombre) {
    const nombresEnMots = [ "","one","two","three","four","five","six","seven","eight", "nine","ten","eleven","twelve","thirteen","fourteen","fiveteen", "sixteen", "seventeen", "eighteen", "nineteen", ];
    const dizainesEnMots = ["", "", "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety",];
    let enMots = "";

    if (nombre === 0) {
      enMots = "zéro";
    } 
    
    else {
      if (nombre >= 100) {
        enMots += nombresEnMots[Math.floor(nombre / 100)] + " cent ";
        nombre %= 100;
      }
      if (nombre >= 20) {
        enMots += dizainesEnMots[Math.floor(nombre / 10)] + "-";
        nombre %= 10;
      }
      if (nombre > 0 || enMots === "") {
        enMots += nombresEnMots[nombre];
      }
    }
    return enMots;
  }

  console.log(nombreEnArgument(92));


