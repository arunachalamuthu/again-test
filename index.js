const express =require('express')
const product =require('./api/product.js')
const app=express()

const PORT=process.env.PORT || 5050

app.use('/api/product',product)
app.listen(PORT,()=>{
    console.log('server start ');
})