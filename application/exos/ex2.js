//var tableau
const monTableau = [1, 3, 6, 2, 32, 43, 12, 53, 42];

// je declare une variable qui va contenir le nombre maximal
let maxNumber = 0;

// fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

// Je parcours mon tableau 
for (let i = 0; i < monTableau.length; i++) {

    if (monTableau[i] > maxNumber) {
        maxNumber = monTableau[i]
    }

}
console.log('resultat de mon algo ' ,maxNumber);


// fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

const max = (tableau) => {
    let maxNumber = 0;

    // fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

    // Je parcours mon tableau 
    for (let i = 0; i < tableau.length; i++) {

        if (tableau[i] > maxNumber) {
            maxNumber = tableau[i]
        }

    }
    return maxNumber;
}


const leMaxNumber = max(monTableau)
console.log('resultat de ma fonction: ', leMaxNumber)