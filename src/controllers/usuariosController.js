import usuariosModel from "../model/usuariosModel.js"
import usuariosDAO from "../DAO/usuariosDAO.js";

const usuariosController = (app)=>{
    app.get("/usuarios", async (req, res) => {
    try{
        const resp = await usuariosDAO.lista()
        res.status(resp.codigo).json(resp)
    } catch (error) {
        res.status(error.codigo).json(error)
    }
    });

    app.get("/usuarios/:id", async (req, res) =>{
        try{
            const id = parseInt(req.params.id);
            const resp = await usuariosDAO.listaPorId(id)
            res.status(resp.codigo).json(resp)
        } catch (error) {
            res.status(error.codigo).json(error)
        }
    });

    app.post("/usuarios", async(req, res) => {
        let usuarios = req.body
        try {
            const modelado = await usuariosModel.modela(usuarios)
            const resp = await usuariosDAO.adiciona(modelado)
            res.status(resp.codigo).json(resp)
        } catch (error) {
            res.status(error.codigo).json(error)
        }
    });

    app.put("/usuarios/:id", async(req, res)=>{
        try {
            const id = parseInt(req.params.id)
            const usuarios = req.body
            const modelado = await usuariosModel.modela(usuarios)
            const resp = await usuariosDAO.altera(id, modelado)
            res.status(resp.codigo).json(resp)
        } catch (error) {
            res.status(error.codigo).json(error)
        }
    })

    app.delete("/usuarios/:id", async(req, res)=>{
        try {
            const id = parseInt(req.params.id)
            const resp = await usuariosDAO.deleta(id)
            res.status(resp.codigo).json(resp)
        } catch (error) {
            res.status(error.codigo).json(error)
        }
    })
};
export default usuariosController