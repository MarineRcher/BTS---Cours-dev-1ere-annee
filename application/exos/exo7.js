// Écrivez une fonction qui prend un tableau de nombres et 
//renvoie un tableau de nombres triés par ordre décroissant.

const number = [1, 5, 3, 8, 2, 23, 65, 75];

const triNumber = (number) => {
 
    return number.reverse();
    
 }

const sortTriNumber = triNumber(number)
console.log(sortTriNumber);