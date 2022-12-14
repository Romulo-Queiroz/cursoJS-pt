const express = require("express");
const crypto = require("crypto");
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
    id: crypto.randomBytes(16).toString("hex"),
  };

  products.push(product);

  return response.json(product);
});

app.get("/products", (request, response) => {
  return response.json(products);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;

  const product = products.find((product) => product.id === id);

  return response.json(product);
});

app.put("/products/:id", (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };
  return response.json({ message: "Produto alterado com sucesso" });
});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;

  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);

  return response.json({ message: "Produto deletado com sucesso" });
});
app.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));
