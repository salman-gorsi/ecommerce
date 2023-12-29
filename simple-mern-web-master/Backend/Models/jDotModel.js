import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pModel = new Schema({
        name: {type: String},
        slug: {type: String},
        embroidered1: {type: String},
        embroidered2: {type: String},
        addOn:{type: String},
        image: {type: String},
        price: {type: Number},
       color: {type: String},
       fabric: {type: String},
       size: {type: String},
       productCateogry: {type: String},
       volume: {type: String},
       procollection: {type: String},
       design: {type: String},
       disclamier: {type: String},
       note:{type: String},
       countInStock: {type: Number},
       brand: {type: String},
       category: {type: String},
       ratings: {type: Number},
       numReviews: {type: Number},
},
{
    timestamps: true,
})

const jDotModel = mongoose.model('jDotModel', pModel);
export default jDotModel;