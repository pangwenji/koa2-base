const mongoose = require('mongoose');
const config = require('./index');
mongoose.connect(config.mongooseUrl, 
    { useNewUrlParser: true }
,
    () => { 
        console.log('θΏζ₯ζε')
    }
)
const db = mongoose.connection;
db.on('error',
    () => { 
       console.log('error')
    }
)
db.on('open',
    () => { 
      console.log('open')
    }
)