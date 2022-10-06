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

>http://localhost:3000/usuarios/2

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "Listado apenas um usuario",
	"dados": {
		"id_usuario": 4,
		"nome": "guilherme",
		"sobrenome": "silva",
		"email": "gcordeiro77@gmail.com",
		"telefone": "716475512",
		"cpf": "41283799549"
	}
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
	"nome": "Hudson",
	"sobrenome": "Lima",
	"email": "hudlima@gmail.com",
	"telefone": "716475512",
	"cpf": "41283379549"
}
```

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "O usuario foi inserido com sucesso",
	"dados": [
		"Hudson",
		"Lima",
		"hudlima@gmail.com",
		"716475512",
		"41283379549"
	]
}
```
---
- **DELETE /usuarios/id**

Verbo responsavel por excluir o usuario do banco de dados

Esquema da requisição:

>http://localhost:3000/usuarios/5

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "Deletado usuario de id:5",
	"dados": "Deletado"
}
```
---
- **PUT /usuarios/id**

Verbo responsavel pela atualização do usuario

Esquema da requisição:

>http://localhost:3000/usuarios/6

No json:

```json
{
	"nome": "Hudson",
	"sobrenome": "Uchoa",
	"email": "hudlima@gmail.com",
	"telefone": "716475512",
	"cpf": "41283379549"
}
```
Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "usuario alterado com sucesso",
	"dados": {
		"nome": "Hudson",
		"sobrenome": "Uchoa",
		"email": "hudlima@gmail.com",
		"telefone": "716475512",
		"cpf": "41283379549"
	}
}
```
---
### Endereços

- **GET /endereco**

Confira os endereços registrados no banco de dados

Esquema da requisição:

> http://localhost:3000/endereco

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "Aqui esta a lista com todos os endereços dos usuarios",
	"dados": [
		{
			"id_endereco_usuario": 1,
			"id_usuario": 2,
			"logradouro": "rua das mangueiras",
			"numero": "1455",
			"cidade": "atibaia",
			"uf": "sp",
			"cep": "64835986",
			"bairro": "bairro das lagoas",
			"complemento": "não tem "
		},
		{
			"id_endereco_usuario": 2,
			"id_usuario": 4,
			"logradouro": "rua das mangueiras",
			"numero": "1455",
			"cidade": "atibaia",
			"uf": "sp",
			"cep": "64835986",
			"bairro": "bairro das rochas",
			"complemento": "não tem "
		}
	]
}
```
- **GET /endereco/id**

Buscar um endereço no banco de dados a pardir de um id

Esquema da requisição:

>http://localhost:3000/endereco/1

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "Listado apenas um endereço",
	"dados": {
		"id_endereco_usuario": 1,
		"id_usuario": 2,
		"logradouro": "rua das mangueiras",
		"numero": "1455",
		"cidade": "atibaia",
		"uf": "sp",
		"cep": "64835986",
		"bairro": "bairro das lagoas",
		"complemento": "não tem "
	}
}
```
---
- **POST /endereco**

Verbo responsavel por adicionar endereços no banco de dados

Esquema da requisição:

>http://localhost:3000/endereco

No json:
```json
{
	"id_usuario": "4",
	"logradouro": "rua das mangueiras",
	"numero": "1455",
	"cidade": "atibaia",
	"uf": "sp",
	"cep": "64835986",
	"bairro": "bairro das rochas",
	"complemento": "não tem "
}
```

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "O completo foi inserido com sucesso",
	"dados": [
		"4",
		"rua das mangueiras",
		"1455",
		"atibaia",
		"sp",
		"64835986",
		"bairro das rochas",
		"não tem "
	]
}
```
---
- **DELETE /endereco/id**

Verbo responsavel por excluir o endereço do banco de dados 

Esquema da requisição:

> http://localhost:3000/endereco/2

Esquema da resposta:

```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "Endereço com o id:2 deletado",
	"dados": "Deletado"
}
```
- **PUT /endereço/id**
- 
- Verbo responsavel pela atualização do endereço por id

Esquema da requisição:

>http://localhost:3000/endereco/1

No json:

```json
{
	"id_endereco_usuario": 2,
	"id_usuario": 6,
	"logradouro": "rua das cobras",
	"numero": "5",
	"cidade": "itatiba",
	"uf": "sp",
	"cep": "64835176",
	"bairro": "bairro das garças",
	"complemento": "não tem "
}
```
Esquema da resposta:
```json
{
	"codigo": 200,
	"status": "sucesso",
	"mensagem": "endereço alterado com sucesso",
	"dados": {
		"id_endereco_usuario": 2,
		"id_usuario": 6,
		"logradouro": "rua das cobras",
		"numero": "5",
		"cidade": "itatiba",
		"uf": "sp",
		"cep": "64835176",
		"bairro": "bairro das garças",
		"complemento": "não tem "
	}
}
```
---
