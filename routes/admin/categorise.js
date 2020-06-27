/**
 * admin 接口路由
 */

// 项目管理路由
module.exports = (app, router) => {
    const Model = require('../../models/Category');

    // 查询分类列表
    router.get('/list', async(req, res) => {
        const data = await Model.find()
        res.send(data)
    })


    // 查询分类信息详情
    router.get('/detail/:id', async(req, res) => {
        const data = await Model.findById(req.params.id)
        res.send(data)
    })

    // 根据id删除分类
    router.delete('/del/:id', async(req, res) => {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(data);
    })

    // 根绝id编辑
    router.post('/edit', (req, res) => {
        Model.findByIdAndUpdate(req.body._id, req.body, {}, function(err, doc) {
            if (err) {
                console.log(err)
            } else {
                console.log(doc)
                res.send(doc)
            }
        })
    })

    // 创建分类信息
    router.post('/create', async(req, res) => {
        const data = await Model.create(req.body)
        res.send(data)
    })


    app.use('/admin/api/categorise', router)
}