const itens = require("../../dados/itens.json")

function subtotais() {
    itens.forEach(item => {
        item.subtotal = item.quantidade * item.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id) + 1
    itens.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subtotais()
    res.json(itens)
}

const alterar = (req, res) => {
    const { id } = req.body
    const index = itens.findIndex(i => i.id == id)
    if (index !== -1) {
        itens[index] = { ...itens[index], ...req.body }
        return res.status(200).json(itens[index])
    }
    res.status(404).json({ mensagem: "Item não encontrado" })
}

const excluir = (req, res) => {
    const { id } = req.body
    const index = itens.findIndex(i => i.id == id)
    if (index !== -1) {
        itens.splice(index, 1)
        return res.status(204).send()
    }
    res.status(404).json({ mensagem: "Item não encontrado" })
}

module.exports = {
    criar, listar, alterar, excluir
}