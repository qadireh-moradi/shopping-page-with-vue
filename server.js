const express = require('express'); //Line 1
var bodyParser = require('body-parser');
const { ClientRequest } = require('http');

const app = express(); //Line 2
// app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({}))


const port = process.env.PORT || 5000; //Line 3

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

  
// create a GET route
app.get('/server/productlist', (req, res) => { //Line 9
    const result = [
        {
        "id" : 100,
        "name": "Apple | 1KG",
        "cost": "35$",
        "unit":"1 kg",
        "image":"images/apple.jpg"
    
    },
    {
        "id" : 101,
        "name": "Orange | 1KG",
        "cost": "89$",
        "unit":"1 kg",
        "image":"images/orange.jpg"
    
    },
    {
        "id" : 102,
        "name": "Pineapple | 1KG",
        "cost": "85$",
        "unit":"1 kg",
        "image":"images/pineapple.jpg"
    
    },
    {
        "id" : 103,
        "name": "Blueberry | 1KG",
        "cost": "44$",
        "unit":"1 kg",
        "image":"images/blueberry.jpg"
    
    },
    {
        "id" : 104,
        "name": "Avacado | 1KG",
        "cost": "42$",
        "unit":"1 kg",
        "image":"images/avacado.jpg"
    
    }
    ];
      res.json(result);
}); //Line 11

app.post('/server/addToBasket',function(req, res) { 
    const products = [
        {
        "id" : 100,
        "name": "Apple | 1KG",
        "cost": "35$",
        "unit":"1 kg",
        "image":"images/apple.jpg"
    
    },
    {
        "id" : 101,
        "name": "Orange | 1KG",
        "cost": "89$",
        "unit":"1 kg",
        "image":"images/orange.jpg"
    
    },
    {
        "id" : 102,
        "name": "Pineapple | 1KG",
        "cost": "85$",
        "unit":"1 kg",
        "image":"images/pineapple.jpg"
    
    },
    {
        "id" : 103,
        "name": "Blueberry | 1KG",
        "cost": "44$",
        "unit":"1 kg",
        "image":"images/blueberry.jpg"
    
    },
    {
        "id" : 104,
        "name": "Avacado | 1KG",
        "cost": "42$",
        "unit":"1 kg",
        "image":"images/avacado.jpg"
    
    }
    ];
    
   const clientData = req.body ;
   const pid = clientData.id
   let arr = products.filter((product) => parseInt(product.id) == parseInt(pid));
   arr[0].count= clientData.count
   arr[0].cost= clientData.count * parseInt(arr[0].cost.slice(0, -1))
    res.json({"message":"ok", "res":arr});
})

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6