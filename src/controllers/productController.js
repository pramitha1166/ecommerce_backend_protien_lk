const express = require('express')
const { listAllProductService, getSingleProduct, listProductsByCategory } = require('../services/productService')


const router = express.Router()

router.get('/getall', async(req,res) => {
    try {
        const result = await listAllProductService()
        res.status(200).json({result})
    } catch (err) {
        res.status(400).json({err})
    }
    
})

router.get('/single/:id', async(req,res) => {
    try {
        const result = await getSingleProduct(req.params.id)
        res.status(200).json({result})
    } catch (err) {
        res.status(400).json({err})
    }
})

router.get('/list/product/category/:id', async(req,res) => {
    try {
        const result = await listProductsByCategory(req.params.id)
        res.status(200).json({result})
    } catch (err) {
        res.status(400).json({err})
    }
})

module.exports = router