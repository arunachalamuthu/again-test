const express =require('express')
const router =express.Router()

router.use(express.json())
router.get('/',async(req,res)=>{
    console.log('call');
    try {
        res.json({

            status:200,
            message:"vanagam"
        })
    } catch (error) {
        console.log(error);

        return res.status(500).send("server error")
    }
})

module.exports =router;