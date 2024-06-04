let palavra = prompt("Digite uma Palavra:");

let resultado = "";

for (let i = palavra.length - 1; i >= 0; i--){

    resultado += palavra[i];

}

if (palavra === resultado){

    console.log("A palavra é um palíndromo.")

} else{

    console.log("A palavra não é um palíndromo.")

}