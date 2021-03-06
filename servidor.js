const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue'>Escriba: /productos ó /productoRandom </h1>");
});

let productos = [
    {
      "title": "Microondas",
      "price": 30000,
      "thumbnail": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphhttps://philco.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/m/p/mpd8620.jpgilco.com.ar%2Fmicroondas-philco-20l-digital.html&psig=AOvVaw2Xx6l-mAVdOWC2C8RSMg32&ust=1654280393920000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDEoOywj_gCFQAAAAAdAAAAABAD",
      "id": 1
    },
    {
      "title": "Tostadora",
      "price": 10000,
      "thumbnail": "https://philco.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/9/4/94to20wdh_1_1.jpghttps://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/7/37846-min_1.jpghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fphilco.com.ar%2Ftostadora-2-rebanadas-to20w-philco.html&psig=AOvVaw3s_07GetOnKaJVRIHyq1Uk&ust=1654280351513000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiDh9iwj_gCFQAAAAAdAAAAABAD",
      "id": 2
    },
    {
      "title": "Heladera",
      "price": 80000,
      "thumbnail": "https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hendel.com%2Fheladera-con-freezer-philco-285l-phct290x-inox.html&psig=AOvVaw3wuY7jAgJAXB0vl82-pt65&ust=1654280328522000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjfuM2wj_gCFQAAAAAdAAAAABAD.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635186198000",
      "id": 3
    }
  ]
app.get("/productos", (req, res) => {
  function todosLosProductos() { 
    return productos.map( ( productos ) => productos );}
    res.send(todosLosProductos(productos));
  });

app.get("/productoRandom", (req, res) => {
    function alAzar(productos) {
        return productos[Math.floor(Math.random() * productos.length)]
    }
    res.send(alAzar(productos));
  });
  
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto 8080`);
});
