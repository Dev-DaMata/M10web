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
}
export default usuarioDAO