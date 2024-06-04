let palavra = prompt("Digite uma Palavra:");
let resultado = ""
for (letra of palavra){
    if (!(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ||
    letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U")){
        
        resultado += letra

    }
    
}
console.log(resultado)