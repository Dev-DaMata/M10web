import mysql from "mysql2"

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true,
    database: 'm10db'
})

export default conexao