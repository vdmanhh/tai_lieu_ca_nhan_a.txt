const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config();

const app = express();
const {readdirSync} = require("fs")
// /////////////
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useCreateIndex :true,
    useFindAndModify:false,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log("DB connect fail:",err);
})
// /////////////

app.use(morgan("dev"))
app.use(bodyParser.json({ limit : "2mb"}))
app.use(cors())

// ////// router midwear
// app.use("/api",authRoutes)
readdirSync("./router").map(r=>app.use("/api",require('./router/'+r)))
// ////////////
const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`sever is running on port ${port}`))