const express =require('express')
const product =require('./api/product.js')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT || 5050
app.use('/api/product',product)
app.listen(PORT,()=>{
    console.log('server start ');
})