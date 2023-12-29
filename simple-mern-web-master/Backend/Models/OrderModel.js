import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const confirmSchema = new Schema({
    orderItems:[
        {
            slug: {type: String, required: true },
            name: {type: String, required: true },
            quantity: {type: String, required: true },
            price: {type: String, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
       ref: 'jDotModel',
        required: true },
        }
    ],
    shippingAddress:{
        fname:{type: String, required: true},
        lname:{type: String, required: true},
        address:{type: String, required: true},
        city:{type: String, required: true},
        postal:{type: String, required: true},
        country:{type: String, required: true},
        email:{type: String, required: true},
        phoneNum:{type: String, required: true},
    },
    paymentMethod: {type: String, required: true},
   
    itemsSubTotal: {type: Number, required:true},
    itemsTax: {type: Number, required:true},
    itemsTotal: {type: Number, required:true},
    },{
    timestamps: true
})
const confirmModel= mongoose.model("confirmModel", confirmSchema);
export default confirmModel;