module.exports = (app, router) => {
    require('./categorise')(app, router)
    require('./Lv')(app, router)
}