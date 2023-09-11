const mongoose= require("mongoose")
const {ObjectId}= mongoose.Schema;

const paymentSchema = new mongoose.Schema({
    
    paymentId:{
        type:String,
        
    },
    payer:{
        email:{
            type:String,
        
            
        },
        payer_id:{
            type: String
        }
    },
    status:{
        type: String,
    }

},
{timestamps:true}
)

module.exports= mongoose.model('Payment',paymentSchema)