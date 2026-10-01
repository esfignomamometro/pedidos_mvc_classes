const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")
const Produto = require("./controllers/produto")
const Item = require("./controllers/item")

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/', rotaInicial)

// Clientes
router.post('/clientes', Cliente.criar)
router.get('/clientes', Cliente.listar)
router.put('/clientes', Cliente.alterar)
router.delete('/clientes', Cliente.excluir)

// Pedidos
router.post('/pedidos', Pedido.criar)
router.get('/pedidos', Pedido.listar)
router.put('/pedidos', Pedido.alterar)
router.delete('/pedidos', Pedido.excluir)

// Produtos
router.post('/produtos', Produto.criar)
router.get('/produtos', Produto.listar)
router.put('/produtos', Produto.alterar)
router.delete('/produtos', Produto.excluir)

// Itens
router.post('/itens', Item.criar)
router.get('/itens', Item.listar)
router.put('/itens', Item.alterar)
router.delete('/itens', Item.excluir)

module.exports = router