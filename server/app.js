const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('./config');
const https = require('https')
// 创建保存session的仓库
var store = new MongoDBStore({
  uri: config.mongodbUrl,
  collection: 'session'
});
 
// Catch errors
store.on('error', function(error) {
  console.log(error);
});
 
const app = express();

app.use('/static', express.static('./static'));

// 处理请求的session
app.use(require('express-session')({
    secret: 'hello world',
    name: 'SESSION_ID',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));
  





app.use(bodyParser());


app.use('/api/user', require('./routers/userRouter'));

app.get("/api/search/city",(req,res)=>{
  res.json({
      code:0,
      message: "ok",
      data:require("./data/city.json")
  })
})
app.get("/api/search/detail",(req,res)=>{
  res.json({
      code:0,
      message: "ok",
      data:require("./data/searchDetail.json")
  })
})


app.get('/api/list',(req,res)=>{
  console.log('有请求过来')
  res.json({
      state:1,
      message:'ok',
      data:require('./data/list.json')
  });
})

//如果是listmore开头
app.use('/listmore',(req,res)=>{
  
  https.get('https://m.lagou.com/listmore.json'+(req.url.replace(/\//,'')),(response)=>{
      let result = '';
      response.on('data',data=>{
          result+= data;
      })
      response.on('end',()=>{
          res.json(JSON.parse(result));
      })
  })
  .end();
});



// 连接数据库
mongoose.connect(config.mongodbUrl, (error)=>{
    if(error){
        console.log('连接数据库失败');
    }else{
        console.log('连接数据库成功');
        // 启动服务器
        app.listen(9000, (error)=>{
            if(error)
                console.log('启动失败');
            else
                console.log('启动成功');
        })
    }
})
