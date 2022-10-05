class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarUsuario()
        this.criarEndereco()
        console.log("as tabelas foram criadas");
    }

    criarUsuario(){
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id_usuario int NOT NULL AUTO_INCREMENT, nome varchar(255), sobrenome varchar(255), email varchar(255), telefone varchar(45), cpf varchar(45),primary key (id_usuario))'
    
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Usuario criada com sucesso");
            }
        })
    }

    criarEndereco(){
        const sql = 'CREATE TABLE IF NOT EXISTS enderecos_usuario (id_endereco_usuario int NOT NULL AUTO_INCREMENT, id_usuario int, logradouro varchar(255), numero varchar(45), cidade varchar(255), uf  varchar(2), cep varchar(45), bairro varchar(255), complemento varchar(255), foreign key (id_usuario) REFERENCES usuarios(id_usuario), primary key (id_endereco_usuario))'

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Endereço criada com sucesso");
            }
        })
    }
}


export default Tabelas