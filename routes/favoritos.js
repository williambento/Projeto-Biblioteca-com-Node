const { Router } = require("express")
const { getFavoritos, postFavoritos, deletFavoritos} = require("../controlers/favoritos")

const router = Router()

router.get("/", getFavoritos)

router.post("/:id", postFavoritos)

router.delete("/:id", deletFavoritos)

module.exports = router