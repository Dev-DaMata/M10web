<h1> ⚠️ Status: :construction: </h1>

<h1 align="center">PROCESSO SELETIVO TROPA DIGITAL</h1>

## Tecnologias utilizadas:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Projeto:

Esse projeto consiste na criação de uma api voltada para gerenciar os usuarios e seus endereços

## Pré-requisitos:

- Node.js (v.16.15.0)
- NPM (v.8.18.0)

## Pacotes utilizados:

- Express (v.4.18.1)
- mysql: (v.2.18.1)
- mysql2: (v.2.3.3)
- moment: (v.2.29.4)
- Nodemon (v.2.0.19)
- dotenv (v.16.0.3)
- body-parser (v.1.20.0)

## Instalação:

Para utilizar este projeto de forma local, é necessário fazer um `git clone` em sua máquina. Lembre-se de conferir se você possui instalado o `Node.js` e um gerenciador de arquivos, como o `NPM`. As versões estão citadas acima em `pré-requisitos`.

Para clonar o repositório, digite no terminal da sua máquina:

```
git clone https://github.com/Dev-DaMata/M10web.git
```

Acesse a pasta:
```
cd M10web
```

Instale os pacotes:
```
npm i 
```

Depois é só rodar o projeto:
```
npm start
```

## 💾 Schema do MySQL Workbench
```
CREATE TABLE  usuarios (
    id_usuario int,
    nome varchar(255),
    sobrenome varchar(255),
    email varchar(255) unique,
    telefone varchar(45),
    cpf varchar(45) unique,
    primary key (id_usuario)
);

CREATE TABLE enderecos_usuario (
    id_endereco_usuario int,
    id_usuario int,
    logradouro varchar(255),
    numero varchar(45),
    cidade varchar(255),
    uf  varchar(2),
    cep varchar(45),
    bairro varchar(255),
    complemento varchar(255),
    foreign key (id_usuario) REFERENCES usuarios(id_usuario),
    primary key (id_endereco_usuario)
);
```

# Rotas

### Usuário

- **GET /usuarios**

Confira os usuários registrados no banco de dados 

Esquema da requisição:

>http://localhost:3000/usuarios

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "Aqui esta a lista com todos os usuarios",
	"dados": [
		{
			"id_usuario": 2,
			"nome": "joelma",
			"sobrenome": "silva",
			"email": "joelma@gmail.com",
			"telefone": "716475512",
			"cpf": "41283719549"
		},
		{
			"id_usuario": 4,
			"nome": "guilherme",
			"sobrenome": "silva",
			"email": "gcordeiro77@gmail.com",
			"telefone": "716475512",
			"cpf": "41283799549"
		}
	]
}
```
---
- **GET /usuarios/:id**

Busca um usuário no banco de dados a partir do id

Esquema da requisição:

>http://localhost:3000/usuarios/6

Esquema da resposta:

```json
{
	"id_usuario": 6,
	"nome": "Guilherme",
	"sobrenome": "Cordeiro",
	"email": "gcordeiro773@gmail",
	"telefone": "978452247",
	"cpf": "24512345654"
}
```
---
- **POST /usuarios**

Verbo responsavel por adicionar usuários no banco de dados 

Esquema da requisição:

>http://localhost:3000/usuarios

No json:
```json
{
	"nome": "joelma",
	"sobrenome": "silva",
	"email": "jojo@jeed",
	"telefone": "716475412",
	"cpf": "48657845873"
}
```

Esquema da resposta:

```json
{
	"msg": "O usuário foi adicionado com successo!"
}
```
---
- **DELETE /usuarios**

Verbo responsavel por excluir o usuario do banco de dados

Esquema da requisição:

>http://localhost:3000/usuarios/15

Esquema da resposta:

```json
{
	"O usuario com o id 15, foi deletado com sucesso!"
}
```
---
- **PUT /usuarios**

Verbo responsavel pela atualização do usuario

Esquema da requisição:

>http://localhost:3000/usuarios/6

No json:

```json
{
	"nome": "junin",
	"sobrenome": "silva",
	"email": "junin@htht",
	"telefone": "888475412",
	"cpf": "74512752827"
}
```
Esquema da resposta:

```json
{
	"msg": "O usuario foi alterado com sucesso!"
}
```
---
