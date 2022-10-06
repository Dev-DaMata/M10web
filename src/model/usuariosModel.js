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

    static listaPorId(id, res){
        const sql = `SELECT * FROM usuarios WHERE id_usuario=${id}`
        conexao.query(sql, (erro, resultado) =>{
            const usuario = resultado[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({
                    "codido": 200,
                    "status": "sucesso",
                    "mensagem": "Listado apenas um usuario",
                    "dados": usuario
                })
            
            }
        })
    }

    static altera(id, usuario, res){
        console.log(id);
        console.log(usuario);
        const sql = `UPDATE usuarios SET nome = ?, sobrenome = ?, email = ?, telefone = ?, cpf = ? WHERE id_usuario=${id}`
        conexao.query(sql, [usuario.nome, usuario.sobrenome, usuario.email, usuario.telefone, usuario.cpf], (erro)=>{
            console.log(usuario);
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({
                    "codido": 200,
                    "status": "sucesso",
                    "mensagem": `Atualizado apenas o usuario de id:${id}`,
                    "dados": [
                        usuario,
                    ]            
                })
                console.log(usuario);
            }
        } )
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