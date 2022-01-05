const Router = require('koa-router');
const { create} = require('../controlls/user')
const router = new Router({
  prefix: '/users'
})

router.post('/', create)

module.exports = router
