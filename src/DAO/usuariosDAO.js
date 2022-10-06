import conexao from "../infra/conexao.js";

class usuarioDAO{

    static adiciona(usuarios){
            const sql = 'INSERT INTO usuarios SET nome = ?, sobrenome = ?, email = ?, telefone = ?, cpf = ?';
            return new Promise((resolve, reject)=>{
                conexao.query(sql,             [
                    usuarios.nome,
                    usuarios.sobrenome,
                    usuarios.email,
                    usuarios.telefone,
                    usuarios.cpf
                ],(erro)=>{
                    if(erro){
                        reject({
                            "codigo": 409,
                            "status": "conflict",
                            "mensagem": erro.sqlMessage,
                            "dados": erro
                        })
                    }else{
                        resolve({                      
                                "codigo": 200,
                                "status": "sucesso",
                                "mensagem": `O usuario foi inserido com sucesso`,
                                "dados": [
                                    ...Object.values(usuarios)
                                ]                       
                        })
                    }
                })
            })
        
    }

    static lista(res){
        const sql = 'SELECT * FROM usuarios'
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
                        "mensagem": "Aqui esta a lista com todos os usuarios",
                        "dados": [
                            ...Object.values(resultados)
                        ]                       
                })
                }
            })
        })
    }

    static listaPorId(id, res){
        const sql = `SELECT * FROM usuarios WHERE id_usuario=${id}`
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
                        "mensagem": "Listado apenas um usuario",
                        "dados": usuario
                    })
                }
            })
        })
    }

}
export default usuarioDAO