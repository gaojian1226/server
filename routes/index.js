module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    require('./admin/index')(app, router)
}