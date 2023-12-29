import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import seedRouter from './Router/seedRouter.js';
import productRouter from './Router/productRouter.js';
import orderRouter from './Router/orderRouter.js';
import cors from 'cors';
import path from "path";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI)
.then( ()=> { console.log('connected to db successfully.');
}).catch( (err) =>{
    console.log(err.message);
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/seed', seedRouter)
app.use( '/api/products', productRouter )
app.use( '/api/orders', orderRouter )


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res)=> res.sendFile(path.join(__dirname, '/frontend/build/index.html')));


app.use( (err, req, res, next)=> {
  res.status(500).send( { message: err.message });
});

const port = process.env.PORT || 5555;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});

