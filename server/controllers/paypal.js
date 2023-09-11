// const User = require('../models/user')
// const Cart = require("../models/cart")
// const Product = require("../models/product")
// const Coupon= require("../models/coupon")
// const Payment= require("../models/payment")
// const paypal= require("paypal-rest-sdk")


// exports.savepayment = async (req,res)=>{
// try {
    

//     // Create a new payment document
//     const payment = new Payment({
//       paymentId: req.body.paymentId,
//       payer:req.body.payer,
//       email: req.body.payer.email,
//       payer_id: req.body.payer.payer_id,
//       status: req.body.status,
//     });

//     // Save the payment document to MongoDB
//     const updatepayment = await payment.save();

//     res.status(200).json(updatepayment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// }


// // exports.capturePayment = async(req,res)=> {
// //     const { orderID } = req.body;
// //     try {
// //       const captureData = await paypal.capturePayment(orderID);
// //       res.json(captureData);
// //     } catch (err) {
// //       res.status(500).send(err.message);
// //     }
// //   };
