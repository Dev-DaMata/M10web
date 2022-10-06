import enderecoDAO from "../DAO/enderecoDAO.js";

const enderecoController = (app)=>{
    app.get("/endereco", async (req, res) => {
        try{
            const resp = await enderecoDAO.lista()
            res.status(resp.codigo).json(resp)
        } catch (error) {
            res.status(error.codigo).json(error)
        }
        });

    app.get("/endereco/:id", async (req, res) =>{
            try{
                const id = parseInt(req.params.id);
                const resp = await enderecoDAO.listaPorId(id)
                res.status(resp.codigo).json(resp)
            } catch (error) {
                res.status(error.codigo).json(error)
            }
        });

    app.post("/endereco", async(req, res) => {
            let endereco = req.body
            try {
                const resp = await enderecoDAO.adiciona(endereco)
                res.status(resp.codigo).json(resp)
            } catch (error) {
                res.status(error.codigo).json(error)
            }
        });

    app.put("/endereco/:id", async(req, res)=>{
            try {
                const id = parseInt(req.params.id)
                const endereco = req.body
                const resp = await enderecoDAO.altera(id, endereco)
                res.status(resp.codigo).json(resp)
            } catch (error) {
                res.status(error.codigo).json(error)
            }
        })

        app.delete("/endereco/:id", async(req, res)=>{
            try {
                const id = parseInt(req.params.id)
                const resp = await enderecoDAO.deleta(id)
                res.status(resp.codigo).json(resp)
            } catch (error) {
                res.status(error.codigo).json(error)
            }
        })
}
export default enderecoController