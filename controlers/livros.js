const modeloLivro = require("../schemas/livroSchemas.js")

async function getLivros(req, res) {
    try {
        const livros = await modeloLivro.find({})
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getLivro(req, res) {
    try {
        const livro = await modeloLivro.findById(req.params.id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postLivro(req, res) {
    try {
        const livroNovo = await modeloLivro.create(req.body)
        res.status(201)
        res.json({message: "livro criado", livro: livroNovo})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function patchLivro(req, res) {
    try {
        await modeloLivro.findByIdAndUpdate(req.params.id, req.body)
        res.json({message: "livro atualizado"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function deleteLivros(req, res) {
    try {
       await modeloLivro.findByIdAndDelete(req.params.id)
       res.json({message: "livro deletado"})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivros
}