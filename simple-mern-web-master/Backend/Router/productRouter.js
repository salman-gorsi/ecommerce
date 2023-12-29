import express from 'express';
import jDotModel from '../Models/jDotModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res)=>{
    const result = await jDotModel.find();
    res.send(result);
});
productRouter.get('/slug/:slug', async (req, res)=>
{
    const resultedProduct = await jDotModel.findOne( {slug: req.params.slug} );
    if(resultedProduct){
        res.send(resultedProduct);
    } else{
        res.status(404).send({message: 'You entered wrong Info' });
    }
});

productRouter.get('/:id', async (req, res)=>
{
    const resultedProduct = await jDotModel.findById(req.params.id);
    if(resultedProduct){
        res.send(resultedProduct);
    } else{
        res.status(404).send({message: 'You entered wrong Info' });
    }
});



export default productRouter;

