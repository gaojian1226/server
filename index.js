const express = require('express')
const port = '3000'

const app = express();

app.use(require('cors')())
app.use(express.json())
    // 加入admin的路由
require('./routes/admin/index')(app)
require('./plugins/db')(app)

app.listen(port, () => {
    console.log(` serve is running on http://localhost:${port} `)
})