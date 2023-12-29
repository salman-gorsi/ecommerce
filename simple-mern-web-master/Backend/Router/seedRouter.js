import express from 'express';
import jDotModel from '../Models/jDotModel.js';
import data from '../productsapi.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) =>{
  await jDotModel.remove({});
  const createdProducts = await jDotModel.insertMany(data.Products);
    res.send( {createdProducts} )
});

export default seedRouter;