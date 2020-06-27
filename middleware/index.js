// 动态创建model
module.exports = (modelName, Schema, virtuals = []) => {
    const mongoose = require('mongoose');
    const SchemaEx = new mongoose.Schema(Schema)
    if (virtuals && virtuals.length) {
        virtuals.forEach(el => {
            SchemaEx.virtual(el.name, {
                ...el.options
            })
        })
    }
    const Model = mongoose.model(modelName, SchemaEx)
    return Model;
}