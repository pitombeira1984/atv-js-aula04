function jogarParOuImpar() {
    let continuarJogando = true;

    while (continuarJogando) {
        // Solicitar ao jogador para escolher par ou ímpar
        let escolha = prompt("Você escolhe 'par' ou 'ímpar'? (Digite 'par' ou 'ímpar')").toLowerCase();

        // Validar entrada do jogador
        if (escolha !== 'par' && escolha !== 'ímpar') {
            console.log("Escolha inválida. Por favor, digite 'par' ou 'ímpar'.");
            continue; // Reiniciar o loop se a entrada for inválida
        }

        // Gerar um número aleatório de 1 a 6 para simular o lançamento de um dado
        let dado = Math.floor(Math.random() * 6) + 1;
        console.log(`O dado rolou: ${dado}`);

        // Determinar se o resultado é par ou ímpar
        let resultado = (dado % 2 === 0) ? 'par' : 'ímpar';

        // Verificar se a escolha do jogador corresponde ao resultado
        if (escolha === resultado) {
            console.log("Parabéns! Você ganhou!");
        } else {
            console.log("Que pena! Você perdeu.");
        }

        // Perguntar ao jogador se deseja continuar jogando
        let resposta = prompt("Deseja jogar novamente? (Digite 'sim' ou 'não')").toLowerCase();
        if (resposta !== 'sim') {
            continuarJogando = false;
            console.log("Obrigado por jogar! Até a próxima.");
        }
    }
}

// Iniciar o jogo
jogarParOuImpar();
