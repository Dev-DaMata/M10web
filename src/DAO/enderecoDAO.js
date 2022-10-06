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

    static adiciona(endereco){
        const sql = 'INSERT INTO enderecos_usuario SET id_usuario = ?, logradouro = ?, numero = ?, cidade = ?, uf = ?, cep = ?, bairro = ?, complemento = ?';
        return new Promise((resolve, reject)=>{
            conexao.query(sql,             [
                endereco.id_usuario,
                endereco.logradouro,
                endereco.numero,
                endereco.cidade,
                endereco.uf,
                endereco.cep,
                endereco.bairro,
                endereco.complemento,
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
                            "mensagem": `O completo foi inserido com sucesso`,
                            "dados": [
                                ...Object.values(endereco)
                            ]                       
                    })
                }
            })
        })
    
}

static altera(id, endereco, res){
    const sql = `UPDATE enderecos_usuario SET id_usuario = ?, logradouro = ?, numero = ?, cidade = ?, uf = ?, cep = ?, bairro = ?, complemento = ? WHERE id_endereco_usuario=${id}`
    return new Promise((resolve, reject)=>{
        conexao.query(sql, [endereco.id_usuario, endereco.logradouro, endereco.numero, endereco.cidade, endereco.uf, endereco.cep, endereco.bairro, endereco.complemento], (erro)=>{
            if(erro) {
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
                    "mensagem": "endereço alterado com sucesso",
                    "dados": endereco
                })
            }
        } )
    })
}

static deleta(id){
    const sql = 'DELETE FROM enderecos_usuario WHERE id_endereco_usuario=?'
    return new Promise((resolve, reject)=>{
        conexao.query(sql, id, (erro)=>{
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
                    "mensagem": `Endereço com o id:${id} deletado`,
                    "dados": "Deletado"
                })
            }
        })
    })
}

}
export default enderecoDAO