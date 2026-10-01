const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id) + 1
    produtos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(produtos)
}

const alterar = (req, res) => {
    const { id } = req.body
    const index = produtos.findIndex(p => p.id == id)
    if (index !== -1) {
        produtos[index] = { ...produtos[index], ...req.body }
        return res.status(200).json(produtos[index])
    }
    res.status(404).json({ mensagem: "Produto não encontrado" })
}

const excluir = (req, res) => {
    const { id } = req.body
    const index = produtos.findIndex(p => p.id == id)
    if (index !== -1) {
        produtos.splice(index, 1)
        return res.status(204).send()
    }
    res.status(404).json({ mensagem: "Produto não encontrado" })
}

module.exports = {
    criar, listar, alterar, excluir
}