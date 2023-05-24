import express, { response } from "express";
import fetch from 'node-fetch'

const app = express()

//Rota para consultar a API
app.get('/produto', (req, res) => {
  const queryParams = req.query;
  const url = new URL('http://makeup-api.herokuapp.com/api/v1/products.json');
  url.search = new URLSearchParams(queryParams);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
})

/* PERGUNTA 2
Essa rota aceita requisições HTTP GET no caminho /marcelle/produtos e retorna a quantidade de produtos da marca
Marcelle na API. Para testar essa rota usando o Postman, basta abrir o aplicativo, criar uma nova requisição,
 selecionar o método GET e inserir a URL http://localhost:3000/marcelle/produtos. Em seguida, clique em "Send"
  e você receberá a resposta com a quantidade de produtos da marca Marcelle.
*/
app.get('/marcelle/produtos', (req, res) => {
  const queryParams = {
    brand: 'Marcelle'
  };
  const url = new URL('http://makeup-api.herokuapp.com/api/v1/products.json');
  url.search = new URLSearchParams(queryParams);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const quantidade = data.length;
      res.send(`A quantidade de produtos da marca Marcelle é ${quantidade}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
})

/* PERGUNTA 3 - Qual é a marca do produto jungle matte? */
app.get('/jungle-matte', (req, res) => {
  const queryParams = {
    product_name: 'Jungle Matte'    
  };
  const url = new URL('http://makeup-api.herokuapp.com/api/v1/products.json');
  url.search = new URLSearchParams(queryParams);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const brands = data.map(product => product.brand);
      res.send(`As marcas do produto Jungle Matte são: ${brands.join(', ')}`);
      // const product = data[0];
      // const brand = product.brand;
      // res.send(`A marca do produto Jungle Matte é ${brand}`);
      
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
})



// Inicialixação do servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000')
})








