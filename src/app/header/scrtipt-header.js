function abrirCarrinho() {
    var modal = document.getElementById('modalCarrinho');
    modal.style.display = 'block';
 
}

function fecharCarrinho() {
    var modal = document.getElementById('modalCarrinho');
    modal.style.display = 'none';
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
    var modal = document.getElementById('modalCarrinho');
    if (event.target === modal) {
        modal.style.display = 'none';
        
    }
};

// cadastroCep()

function proximaEtapa(){
    var cep = document.getElementById(`cep`)
    var carrinhoProdutos = document.getElementById(`carrinho-produtos`)
    var etapa2 = document.getElementById(`etapa2`)
    var linha2 = document.getElementById(`linha-2`)
    var buttonVoltarCarrinho = document.getElementById(`buttonVoltarCarrinho`)
    var valorProdutosCarrinho = document.getElementById(`valorProdutosCarrinho`)

    if(cep.style.display === 'none'|| cep.style.display === ''){
        cep.style.display = 'block' 
        carrinhoProdutos.style.display = 'none'
        etapa2.style.backgroundColor = ' var(--color-green)'
        etapa2.style.color = 'white'
        linha2.style.display = 'none'
        buttonVoltarCarrinho.style.display = 'block'
        valorProdutosCarrinho.style.display = 'none'
    }
    else{
        cep.style.display === 'none' 
       
        
    }
}

function voltar(){
    var cep = document.getElementById(`cep`)
    var carrinhoProdutos = document.getElementById(`carrinho-produtos`)
    var etapa2 = document.getElementById(`etapa2`)
    var linha2 = document.getElementById(`linha-2`)
    var buttonVoltarCarrinho = document.getElementById(`buttonVoltarCarrinho`)
    var valorProdutosCarrinho = document.getElementById(`valorProdutosCarrinho`)

    if(carrinhoProdutos.style.display === 'none'|| carrinhoProdutos.style.display === ''){
        cep.style.display = 'none' 
        carrinhoProdutos.style.display = 'block'
        etapa2.style.backgroundColor = 'none'
        etapa2.style.backgroundColor = ' #f0f0f0'
        etapa2.style.color = 'var(--color-text)'
        linha2.style.display = 'block'
        buttonVoltarCarrinho.style.display = 'none'
        // ///////////////////////////////
        // valorProdutosCarrinho.style.display = 'block'
        valorProdutosCarrinho.style.display ='flex'
    }
    else{
        cep.style.display === 'none' 
        
        
    }
}


 // Função para atualizar o valor do carrinho
 function atualizarValorProdutosCarrinho() {
    var valorProdutosCarrinho = document.getElementById('valorProdutosCarrinho');
    if (valorProdutosCarrinho !== null) {
        var produtosNoCarrinho = JSON.parse(localStorage.getItem('produtosNoCarrinho')) || [];
        var total = 0;
        var carrinhoHTML = '';

        for (const produto of produtosNoCarrinho) {
            total += parseFloat(produto.valor);
            carrinhoHTML += `<div>${produto.nome} - R$ ${produto.valor} <button class="removerProduto" data-index="${produtosNoCarrinho.indexOf(produto)}">Remover</button></div>`;
           
        }

        valorProdutosCarrinho.innerHTML = `Total: R$ ${total.toFixed(2)}`;
        document.getElementById('carrinho').innerHTML = carrinhoHTML;
    } else {
        console.error("Elemento 'valorProdutosCarrinho' não encontrado.");
    }
}

// Chamada da função ao carregar a página
window.addEventListener('load', function() {
    atualizarValorProdutosCarrinho();
    
});




atualizarValorProdutosCarrinho();

document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('removerProduto')) {
        var index = event.target.dataset.index;
        removerProdutoDoCarrinho(index);
    }
});

function removerProdutoDoCarrinho(index) {
    var produtosNoCarrinho = JSON.parse(localStorage.getItem('produtosNoCarrinho')) || [];
    produtosNoCarrinho.splice(index, 1);
    localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho));
    // Após remover o produto, atualize o valor do carrinho
    atualizarValorProdutosCarrinho();
}


