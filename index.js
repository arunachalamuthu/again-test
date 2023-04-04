const express =require('express')
const product =require('./api/product.js')
const cors=require('cors')
const path=require('path')

const app=express()
app.use(cors())

// const public=path.resolve(__dirname,'/public')
// app.use(public,express.static('/static'))

app.use(express.static(path.join(__dirname+"/public/static")))
app.use(express.json())

const PORT=process.env.PORT || 5050
app.use('/api/product',product)
app.listen(PORT,()=>{
    console.log('server start ');
})