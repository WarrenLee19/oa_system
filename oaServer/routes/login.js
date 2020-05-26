/**
 * Created by lee on 2020.
 */
module.exports = app => {
    const express=require('express')
    // const jwt=require('jsonwebtoken')
    // const auser=require('../model/user')
    // const assert=require('http-assert')
    const router = express.Router(
      {mergeParams:true}
    )
    //登录检验件 
    const authMiddleware=async (req, res,next) => {
      const token=String(req.headers.authorization||'').split(' ').pop()
      assert(token,401,"请先登录(缺JWT TOKEN)")
      const {id}=jwt.verify(token,app.get('secret'))
      assert(id,401,"无效的jwt token")
      req.user=await auser.findById(id)  
      assert(req.user,401,"请先登录")     
      await next();
    }
 router.post('/', async (req, res) => {
    const modelName=require('inflection').classify(req.params.resource)
    const Model=require(`../model/${modelName}`)
    const model = await Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const modelName=require('inflection').classify(req.params.resource)
    const Model=require(`../model/${modelName}`)
    const model = await Model.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })
  router.get('/', async (req, res) => {
    
    const modelName=require('inflection').classify(req.params.resource)
    console.log(123)
    const Model=require(`../model/${modelName}`)
    console.log(Model)
    const items = await Model.find().populate('parent').limit(10)
    res.send(items)
  })
  //删除
  router.delete('/:id', async (req, res) => {
    const modelName=require('inflection').classify(req.params.resource)
    const Model=require(`../model/${modelName}`)
   await Model.findByIdAndDelete(req.params.id,req.body)
    res.send({
        success:true
    })
  })
  router.get('/:id', async (req, res) => {
    const modelName=require('inflection').classify(req.params.resource)
    const Model=require(`../model/${modelName}`)
    const model = await Model.findById(req.params.id)
    res.send(model)
  })
    // app.use('/admin/api/rest/:resource',authMiddleware,router)
    // app.use('/rest/:resource',authMiddleware,router)
    app.use('/rest/:resource',router)
    // const multer=require('multer')
    // const upload=multer({dest:__dirname+'/../../upload'})
    
    // app.post('/admin/api/upload',authMiddleware
    // ,
    // upload.single('file'),async (req,res)=>{
    //   const file=req.file
    //   file.url=`http://localhost:4000/upload/${file.filename}`
    //   res.send(file)
    // })
    app.post('/admin/api/shenhe/:id',async (req,res)=>{
      const {isOk}=req.body
      const Model=require(`../model/todo1`)
      console.log(req.body)
      const model = await Model.findByIdAndUpdate(req.params.id,req.body)
      
      console.log(model)
    
      res.send(model)
    })
    app.get('/admin/init',async (req,res)=>{
      
      const model=require(`../model/baseList`)
      // console.log(model.users)
      const Model=model.users
      const items = await Model.find().populate('parent')
      // 
     res.send(items)
     
    
      // res.send(Model)
    })
    app.post('/admin/api/login',async (req,res)=>{
      const model=require(`../model/baseList`).users
      const {name,password}=req.body
      //根据用户名找用户，
      // console.log(auser)
      console.log(model)
      const user=await model.findOne({name})
      console.log(user)
      // const _id=user._id
      //http-assert报错
      // assert(user,422,'用户不存在')
      if(!user){
        return res.status(422).send({
          message:'用户不存在'
        })
      }

      //检验密码，
    //  const isValid= require('bcrypt').compareSync(password,user.password)
      var isValid=false
      console.log(password)
      if(password==user.password){
        isValid=true
      }
      // assert(isValid,422,"密码错误")
      if(!isValid){
       return res.status(422).send({
         message:"密码错误"
       })
     } 
     //返回token
     
     //这里的app.get，一个参数表示获取配置，二个参数表示请求
     const token=jwt.sign({id:user._id}, app.get('secret'))
     //返回还可以返回用户名，用于“欢迎您，某某用户”
     res.send({token})
    })
    //错误处理函数
    app.use(async (err,req,res,next)=>{
      res.status(err.statusCode || 500).send({
        message:err.message
      })
    })
}
