import express from 'express';
import jDotModel from '../Models/jDotModel.js';
import confirmModel from '../Models/OrderModel.js';

const orderRouter = express.Router();

orderRouter.post('/', async (req, res)=>{
const newOrder = new confirmModel({
    orderItems: req.body.orderItems.map( (x)=>({ ...x, product: x._id})),
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemsSubTotal: req.body.itemsSubTotal,
    itemsTax: req.body.itemsTax,
    itemsTotal: req.body.itemsTotal,
})
const order= await newOrder.save();
res.status(201).send( {message: 'New Order has been created', order})
});

orderRouter.get('/fetchdata', async(req, res)=>{
    const getData = await confirmModel.find();
    res.send(getData);
})

export default orderRouter;