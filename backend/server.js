import express from 'express';
import data from './data';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {

    res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    res.send(product);
    if (product) 
        res.send(product);
    else
        res.status(404).send({msg: "Product not Found"})
    
});

app.listen(5000, () => {
    console.log('SERVER STARTED AT http://localhost:5000');
})