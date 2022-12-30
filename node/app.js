const express = require("express");
const { randomUUID } = require("crypto");
const app = express();

app.use(express.json());

const products = [];

/*
 *POST => Inserir produtos
 *GET => Buscar produtos
 *PUT => Alterar produtos
 *DELETE => Deletar produtos
 */

/*
 *body sempre que quero enviar dados para minha aplicação
 *params /products/:id sempre que quero buscar um produto especifico (parametros de rota)
 *query => /product?id=123
 */

app.post("/products", (request, response) => {
  const { name, price } = request.body;

  const product = {
    name,
    price,
    id: randomUUID(),
  };

  products.push(product);

  return response.json(product);
});

app.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));
