import { Router } from "express";
import productController from "./product/product.controller";
import stockController from "./stock/stock.controller";

const routes = Router()

routes.post ('/novo-produto', productController.criarProduto)

routes.get ('/lista-produto', productController.listarProdutos)

routes.get ('/produto/:id', productController.buscarProdutoPeloId)

routes.get ('/produto-nome', productController.buscarProdutoPorNome)

routes.put ('/atualizar-produto/:id', productController.atualizarProduto)

routes.delete ('/produto-deletado/:id', productController.deletarProduto)

//********************************************************************* */

routes.get ('/adicionar-stock', stockController.adicionarStock)

routes.get ('/total-stock', stockController.calcularTotalStock)

routes.get ('/escrever-arquivo', stockController.escreverArquivo)


export default routes