import {model, Schema} from "mongoose"; //model cria o modelo de dados e o Schema define a estrutura

//o Schema irá definir a estrutura do banco de dados (forma e formato)

const ProductSchema = new Schema ({
    nome: {require: true, type: String}, //obrigatório do tipo String
    quantidade: {type: Number}, //não obrigatório do tipo number
    valor: {type: Number}

}, {

    timestamps: true

    }
) //o primeiro parâmetro é o objeto e o segundo é o de configuração timestamps

export default model ('Product', ProductSchema)//nome da tabela no banco e o que vai ter

