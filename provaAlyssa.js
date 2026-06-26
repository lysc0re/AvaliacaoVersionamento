// Mini-mundo: Loja de Informatica

// - 1 
class Produto {
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;

    }
}

// - 2
let produtos [
    new Produto = "IPhone 17 Pro", 17000, 200;
    new Produto = "Pc Gamer", 5000, 150;
    new Produto = "Notebook Asus", 2000, 100;
    new Produto = "Notebook Positivo", 1200, 500;
    new Produto = "Tablet Samsung S20", 1600, 150;
    new Produto = "Smartphone Samsung A20", 1000, 3;
    new Produto = "Smartphone Motorola", 800, 10;
]

 // - 3
function calcularValorEstoque(produtos) {
 let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i] preco*quantidade;
    }
    return total;
}



 // - 4
 for (let respostos = 0; respostos < produtos.length; respostos++) {
    if (produtos.quantidade >= 5);
      console.log("Repor Estoque!"); 
    } else {
            console.log("Estoque Ok!");
 }


// - 5
let maiorValor = 0;
 while (maiorValor => 500;) {
    console.log(maiorValor);
    (maiorValor < produtos.length)
    maiorValor++;
 }
 
// extras
 for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
}

// - 6 
 console.log("Valor total do estoque:" ${total});
 console.log("Produto com estoque de maior valor" ${maiorValor});
 console.log("Produtos que precisam ser respostos:"${respostos});
