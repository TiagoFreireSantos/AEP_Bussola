import {Request, Response} from 'express'
import {ProductService} from './product.service'

class ProductController{

    async criarProduto (req: Request, res: Response){

        const product = await new ProductService().CriarProduto (req.body)

        return res.status (200).json (product)
    }

    async listarProdutos (req: Request, res: Response){
        
        const productList = await new ProductService().listarTodosProdutos()
        return res.status(200).json(productList)

    }

    async buscarProdutoPeloId (req: Request, res: Response){

        const product = await new ProductService().produtoPorId (req.params.id)//id aqui ta vindo do :id do routes
        return res.status(200).json(product)
    }//colocar a rota /ida

    async buscarProdutoPorNome (req: Request, res: Response){

        const porNome = await new ProductService().buscarProdutoPorNome (req.query.meu_nome)
        return res.status (200).json(porNome)
    }//query contém as informações da consulta de uma URL
    //colocar rota?meu_nome=Tiago

    async atualizarProduto (req: Request, res: Response){
        const atualizar = await new ProductService().atualizarProduto (req.params.id, req.body)
        return res.status(200).json (atualizar)

    }

    async deletarProduto(req: Request, res: Response){
        const deletado = await new ProductService().deletarProduto (req.params.id)
        return res.status(200).json (deletado)

    }

    


}//req contém as informações que irá pro banco. O res é a resposta e é usada para enviar a resposta pro cliente

export default new ProductController()
