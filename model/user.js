const {Schema, model} = require('mongoose');

//建立用户Schame
const userSchame = new Schema({
    // 用户名
    name: {
        type: String,
        required: true
    },
    // 密码
    password: {
        type: String,
        required: true,
        // select控制查询过程中是否显示此字段
        select: false
    },
});

// 创建用户模型
const UserModel = model('User', userSchame);

module.exports = UserModel;