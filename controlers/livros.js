const { getTodosLivros, getLivroId, insereLivro, modificaLivro, deletaLivro } = require("../servicos/livros")

function getLivros(req, res) {
    try {
        const livro = getTodosLivros()
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)){
            const livro = getLivroId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID Invalido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido!")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatorio!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)){
            const modificacao = req.body
            modificaLivro(modificacao, id)
            res.send("Alteração feita com sucesso!")
        } else {
            res.status(422)
            res.send("ID Invalido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivros(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)){
            deletaLivro(id)
            res.send("Livro deletado com sucesso!")
        } else {
            res.status(422)
            res.send("ID Invalido!")
        }
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