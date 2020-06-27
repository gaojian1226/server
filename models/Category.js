const createModel = require('../middleware')
const schema = {
    name: { type: String }
}

module.exports = createModel('Categorise', schema)