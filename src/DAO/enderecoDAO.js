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

    static listaPorId(id){
        const sql = `SELECT * FROM enderecos_usuario WHERE id_endereco_usuario=${id}`
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (erro, resultado) =>{
                const usuario = resultado[0]
                if(erro){
                    reject({
                        "codigo": 400,
                        "status": "bad-request",
                        "mensagem": "erro interno",
                        "dados": erro
                    })
                }else{
                    resolve({
                        "codigo": 200,
                        "status": "sucesso",
                        "mensagem": "Listado apenas um endereço",
                        "dados": usuario
                    })
                }
            })
        })
    }
}
export default enderecoDAO