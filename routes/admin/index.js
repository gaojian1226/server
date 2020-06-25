/**
 * admin 接口路由
 */
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    router.post('/categorise', async(req, res) => {
        const data = await Category.create(req.body)
        res.send(data)
    })
    router.get('/categorise/list', async(req, res) => {
        const data = await Category.find()
        console.log(data)
        res.send(data)
    })
    router.get('/categorise/del/:id', async(req, res) => {
        console.log(req.params)
        const id = req.params.id || '';
        const data = await Category.findByIdAndDelete(id)
        res.send(data);
    })
    app.use('/admin/api', router)
}