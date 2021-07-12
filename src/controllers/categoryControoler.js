const express = require('express')

const router = express.Router()

const {getAllCategories, getAllParentCategories, getAllSubCategories} = require('../services/categoryService')

router.get('/getall', async(req,res) => {
    try {
        const result = await getAllCategories()
        res.status(200).json({result})
    } catch (err) {
        res.status(400).json({err})
    }
})

router.get('/getlAllParentCategories', async(req,res) => {
    try {
        const result = await getAllParentCategories()
        res.status(200).json({result})
    } catch (err) {
        res.status(400).json({err})
    }
})

router.get('/getlAllSubCategories/:id', async(req,res) => {
    try {
        const result = await getAllSubCategories(req.params.id)
        res.status(200).json({result})
    } catch (err) {
        res.status(400).json({err})
    }
})

module.exports = router