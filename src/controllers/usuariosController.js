import usuariosModel from "../model/usuariosModel.js"

const usuariosController = (app)=>{
    app.get("/usuarios", (req, res) => {
        usuariosModel.lista(res)
    });

    app.get("/usuarios/:id", (req, res) =>{
        const id = parseInt(req.params.id);
        usuariosModel.listaPorId(id, res)
    })
};
export default usuariosController