const modeloLivro = require("../schemas/favoritoShema.js")
const livroo = require("../schemas/livroSchemas.js")


async function getFavoritos(req, res) {
    try {
        const favoritos = await modeloLivro.find({})
        res.send(favoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postFavoritos(req, res) {
    try {
        const livro = await livroo.findById(req.params.id)
        const livroNovo = await modeloLivro.create(livro)
        res.json({message: "livro adicionado aos favoritos", livro: livroNovo})
        res.status(201)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function deletFavoritos (req, res) {
    try {
        const id = req.params.id
        await modeloLivro.findByIdAndDelete(req.params.id)
        res.json({message: "livro deletado"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavoritos,
    deletFavoritos
}