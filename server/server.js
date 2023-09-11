const path = require('path')
const express= require('express')
const mongoose= require('mongoose')
const morgan= require('morgan')
const bodayParser = require('body-parser')
const cors=  require('cors')
const {readdirSync}= require("fs")
// const paypal = require("paypal-rest-sdk")
require('dotenv').config()

//import routes
// const authRoutes=require('./routes/auth')


const app=express()


// database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
.then(()=>console.log("DB CONNECTED"))
.catch(err =>console.log('DB CONNECTION ERR',err))

//middleware

app.use(morgan("dev"));
app.use(bodayParser.json())
app.use(cors());


//paypal routes



//route middleware
// console.log(readdirSync("./routes").map((r)=> console.log(r)))
// readdirSync("./routes").map((r)=>
//  app.use("/api",require("./routes/"+r)))

app.use("/api",require("./routes/admin.js"))
app.use("/api",require("./routes/authen.js"))
app.use("/api",require("./routes/categoryRoutes.js"))
app.use("/api",require("./routes/cloudinary.js"))
app.use("/api",require("./routes/coupon.js"))
app.use("/api",require("./routes/product.js"))
app.use("/api",require("./routes/stripe.js"))
app.use("/api",require("./routes/subRoutes.js"))
app.use("/api",require("./routes/user.js"))


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req,res) => 
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    })
}




//port

const port=process.env.PORT || 8000;
app.listen(port,()=> console.log(`Server is running on port ${port}`));