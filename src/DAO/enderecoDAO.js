import conexao from "../infra/conexao.js";

class enderecoDAO{

    static lista(res){
        const sql = 'SELECT * FROM enderecos_usuario'
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (erro, resultados)=>{
                if(erro){
                    reject({
                        "codigo": 501,
                        "status": "undefined",
                        "mensagem": "erro interno",
                        "dados": erro
                    })
                }else{
                    resolve({                      
                        "codigo": 200,
                        "status": "sucesso",
                        "mensagem": "Aqui esta a lista com todos os endereços dos usuarios",
                        "dados": [
                            ...Object.values(resultados)
                        ]                       
                })
                }
            })
        })
    }
}
export default enderecoDAO