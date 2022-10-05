import usuariosModel from "../model/usuariosModel.js"

const usuariosController = (app)=>{
    app.get("/usuarios", (req, res) => {
        usuariosModel.lista(res)
    })
};
export default usuariosController