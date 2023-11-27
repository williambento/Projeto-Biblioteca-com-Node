const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivros } = require("../controlers/livros")

const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivro)

router.post("/", postLivro)

router.patch("/:id", patchLivro)

router.delete("/:id", deleteLivros)

module.exports = router