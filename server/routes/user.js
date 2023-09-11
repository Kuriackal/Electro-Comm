const express = require('express')

const router = express.Router();

//middlewares
const { authCheck } = require("../middlewares/auth")


//controllers
const {
     userCart,
     getUserCart,
     emptyCart,
     saveAddress,
     applyCouponToUserCart,
     createOrder,
     orders,
     addToWishlist,
     wishlist,
     removeFromWishlist,
     createCashOrder
     } = require("../controllers/user")

router.post('/user/cart', authCheck, userCart);// to save the cart in database
router.get('/user/cart',authCheck,getUserCart)// to get the cart in database
router.delete("/user/cart",authCheck,emptyCart)
router.post("/user/address", authCheck,saveAddress)


router.post("/user/order",authCheck,createOrder)
router.post("/user/cash-order",authCheck,createCashOrder)// cash on deleivery
router.get('/user/order',authCheck,orders)


//coupon
router.post('/user/cart/coupon',authCheck,applyCouponToUserCart)

//wishlist
router.post('/user/wishlist',authCheck,addToWishlist)
router.get('/user/wishlist',authCheck,wishlist)
router.put("/user/wishlist/:productId",authCheck,removeFromWishlist)

// router.get("/user",(req,res)=>{    
//     res.json({
//             data:"heyy u hit user API endpoints",
//         })
// })

module.exports = router;