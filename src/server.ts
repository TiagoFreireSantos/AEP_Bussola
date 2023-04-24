import app from "./app";


// server.ts irá levantar o servidor. Para tanto, vc vai dizer a porta que ele vai funcionar e usar
//o try cath para capturar o erro se algo der errado
function main (){
    try{

        const porta = 3000;
        app.listen(porta, 'localhost', async () => {

            console.log ('Servidor inicializado na porta', porta)
        })//primeiro argumento é a porta e o segundo é o endereço IP

    } catch (err){

        console.log ('Erro ao inicializar o servidor: ', err)
    }

}

main () //para executar o servidor inicialmente


//npm init
//npm install
//npm install express
//npm install mongoose
