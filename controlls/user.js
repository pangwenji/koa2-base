const UserModel = require('../model/user');
const {errorResult } = require('../utils/result');
class Users { 
    //增加用户
    async create(ctx) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required:true
            },
            password: {
                type: 'string',
                required:true 
            }
        })
        const { name } = ctx.request.body;
        const repeatUser = await UserModel.findOne({ name: name });
        console.log(repeatUser,'xxx')
        // if (repeatUser) { 
        //    let result= await errorResult('用户已经存在，请换一个')
        //     ctx.body = result;
        // }
        // const user = await new UserModel(ctx.request.body).save();
        // console.log(user)
        // ctx.body = user;
    }
}
module.exports = new Users();