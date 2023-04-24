import { Request, Response } from "express";
import {StockService} from './stock.service'
import { setUncaughtExceptionCaptureCallback } from "process";

class StockController{

    async adicionarStock (req: Request, res: Response){
        const stock = await new StockService().criarStock()
        return res.status(200).json(stock)
    } 

    async calcularTotalStock (req: Request, res: Response){
        const totalStock = await new StockService().calcularTotalStock()
        return res.status(200).json(totalStock)

    }

    async escreverArquivo (req: Request, res: Response){
        const resposta = await new StockService().escreverArquivo()
        return res.status(200).json(resposta)

    }

    async lerArquivo(req: Request, res: Response){
        const resposta = await new StockService().lerArquivo()
        return res.status(200).json(resposta)

    }


}

export default new StockController ()