/**
 *  一级分类&二级分类创建
 */

const createModel = require('../middleware')
const { SchemaTypes } = require('mongoose')
const schema = {
    name: { type: String },
    parent: { type: SchemaTypes.ObjectId, ref: 'Categorise' }
}
const virtuals = [{
    name: 'news',
    options: {
        ref: 'Categorise',
        localField: 'parent',
        foreignField: '_id'
    }
}]

module.exports = createModel('FirstLvCategories', schema, virtuals)