import conexao from "../infra/conexao.js";

class usuariosModel{
    
    static modela(obj){
        return new Promise((resolve, reject)=>{
            if(this.valida(obj.email)){
                resolve({
                    nome: obj.nome,
                    sobrenome: obj.sobrenome,
                    email: obj.email,
                    telefone: obj.telefone,
                    cpf: obj.cpf
                })
            }else{
                reject({
                    "codigo": 400,
                    "status": "bad-request",
                    "mensagem": "email invalido",
                    "dados": obj
                })
            }
        })
        
    }

    static valida(email){
        let regex_validation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
        if(regex_validation.test(email)){
            return true   
        }else{
            return false
        }

        
    }



    static deleta(id, res, usuario){
        const sql = 'DELETE FROM usuarios WHERE id_usuario=?'

        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({
                    "codido": 200,
                    "status": "sucesso",
                    "mensagem": `Deletado apenas o usuario de id:${id}`,
                    "dados": resultado
                })
            
            }
        })
    }
}
export default usuariosModel