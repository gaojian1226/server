const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mongo-test', {
    useNewUrlParser: true
})


const CategorySchema = new mongoose.Schema({
        name: { type: String }
    })
    // 虚拟外键查询
CategorySchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'category'
})

const Category = mongoose.model('Category', CategorySchema)

const Post = mongoose.model('Post', new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
}))

async function mian() {
    // await Category.insertMany([{
    //         name: 'nodejs'
    //     },
    //     {
    //         name: 'vuejs'
    //     }
    // ])
    // const nodejsId = await Category.findOne({ name: 'nodejs' })
    // const vuejsId = await Category.findOne({ name: 'vuejs' })
    // console.log(nodejsId, vuejsId)
    // await Post.insertMany([{
    //         title: 'nodejs从入门到高阶',
    //         body: '全栈开发',
    //         category: nodejsId
    //     }, {
    //         title: 'vue全家桶',
    //         body: 'vuejs开发',
    //         category: nodejsId
    //     }])
    // const po1 = await Post.find().populate()
    // const p2 = await Post.findOneAndDelete({ category: nodejsId })
    // const po3 = Post.find().lean()
    // console.log(po3)
    // console.log(p2)
    console.log(await Post.find().populate('posts'))

}
mian()