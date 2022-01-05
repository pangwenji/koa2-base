
class ResultMapper { 
    //统一封装错误成果
    async errorResult(msg) { 
        if(msg){
            return {
                status: '4000',
                message:msg
            }
       }
    }
}

module.exports = new ResultMapper();