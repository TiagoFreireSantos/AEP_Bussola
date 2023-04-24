import ProductModel from '../product/product.schema'
import StockModel from './stock.schema'
import { ProductType } from '../product/product.types'

export class StockService {

    async criarStock(){
        const produtosList: ProductType[] = await ProductModel.find()
        const estoque = produtosList.map ((item: ProductType)=>{
            let produtoComEstoque = {
                nome: item.nome,
                quantidade: item.quantidade,
                valor: item.valor,
                stockValue: Number (item.quantidade) * Number (item.valor)
            }
            return produtoComEstoque
        })
        const salvarEstoque = await StockModel.insertMany (estoque)
        return salvarEstoque

    }

    async calcularTotalStock(){
        const produtosList = await StockModel.find()
        const valorStock = produtosList.reduce((soma, acumulador)=>{
            return soma + acumulador.stockValue!

        },0)

        return valorStock

    }

    async escreverArquivo(){
        const produtoList = await ProductModel.find()
        try{
            const fs = require ('fs/promises');
            fs.writeFile ('produtos.json', JSON.stringify (produtoList, null, 2))
            return "Arquivo gerado"

        } catch (err){
            return "!"
        }
    }

    async lerArquivo(){
        try{
        const fs = require ('fs/promises');
        const minhaLista = fs.readFile ('produtos.json', "utf-8")
        return minhaLista

    } catch (err) {
        return err
    }

    }
}
