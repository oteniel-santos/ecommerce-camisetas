const produtos = [
    {
      id:1, 
      nome: 'Camiseta Esportiva', 
      descricao: 'Camiseta Time Brasileiro',
      cor: 'Preta',
      foto: 'em branco',
      preco: 600  
    },
    {
        id:2, 
        nome: 'Camiseta Meriva', 
        descricao: 'Camiseta Luxuosa',
        cor: 'Azul',
        foto: 'em branco',
        preco: 800  
      }
]

function listar(){
    return produtos;
}

function salvar(produto){
  produtos.push(produto)
  return produtos
}

module.exports = {listar, salvar}