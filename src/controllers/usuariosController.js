import usuariosModel from "../model/usuariosModel.js"

const usuariosController = (app)=>{
    app.get("/usuarios", (req, res) => {
        usuariosModel.lista(res)
    });

    app.get("/usuarios/:id", (req, res) =>{
        const id = parseInt(req.params.id);
        usuariosModel.listaPorId(id, res)
    });

    app.post("/usuarios", (req, res) => {
        var usuario = req.body
        usuariosModel.adiciona(usuario, res)
    });

    app.put("/usuarios/:id", (req, res)=>{
        var id = parseInt(req.params.id)
        var usuario = req.body
        usuariosModel.altera(id, usuario, res)
    })
};
export default usuariosController