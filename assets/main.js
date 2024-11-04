function criaCartao(tema, pergunta, reposta) {
    const container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="cartao-conteudo">
                    <h3>${tema}</h3>
                    <div class="cartao-conteudo-pergunta">
                       ${pergunta}
                    </div>
                    <div class="cartao-conteudo-resposta">
                        ${reposta}
                    </div>
                </div>
                `
    container.appendChild(cartao)
}
criaCartao('Historia', 'Em que ano se iniciou-se guerra do vietnã?', 'em 1955')
criaCartao('comedia', 'por que a galinha atravesou a rua?','para chegar ao outro lado')
