import model from './product.schema'
import { ProductType } from './product.types'

//define um serviço que irá manipular os dados
//vai fazer o CRUD, ou seja, é a regra de negócios

export class ProductService {

        async CriarProduto (produto: ProductType){
            return await model.create (produto)

        }//método create

        async listarTodosProdutos(){
            //const listaPokemon = await fetch ("http://localhost:portaserverpokemonnoserver/rota")
            return await model.find()//find é o método do mongoose que retorna todos os registros
        }



        async produtoPorId (id: any){
            const produtoPorId = await model.findById (id)
            return produtoPorId

        }

        async buscarProdutoPorNome (nomeParametro: any){
            const buscarPorNome = await model.find ({nome:nomeParametro})//chave valor nome com o valor que ta recebendo
            return buscarPorNome

        }

        async atualizarProduto (id: any, dataBody: ProductType){
            const produtoAtualizado = await model.findOneAndUpdate (
                {_id:id},//filtro
                {nome: dataBody.nome,
                quantidade: dataBody.quantidade,
                valor: dataBody.valor},//informações para substituir ou adicionar
                {new:true})
        return produtoAtualizado
        }

        async deletarProduto (idParametro: any){
            await model.findOneAndDelete ({_id: idParametro})
            return ("Produto deletado com sucesso")
        }

}