const { model } = require('../../models/firstLv');

module.exports = (app, router) => {
    const inflection = require('inflection');
    // 创建分类
    router.post('/create-category', async(req, res) => {
        const data = await req.model.create(req.body)
        res.send(data)
    })

    // 查询一级分类列表
    router.get('/query-categorise', async(req, res) => {
        req.model.find()
        res.send(data)
    })

    app.use('/admin/api/reset/:resource', (req, res, next) => {
        const filePath = `../../models/${inflection.classify(req.params.resource)}`;
        const model = require(filePath);
        req.model = model
        next()
    }, router)
}