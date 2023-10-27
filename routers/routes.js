const express=require('express')
const { userReg, userLogin, addImage, getImage } = require('../controlers/logic')
const upload = require('../middleware/multerMiddleware')

const router =new express.Router()


//user register
router.post('/user/register',userReg)

//user login
router.post('/user/login',userLogin)

//image add
router.patch('/user/image/add',upload.single('user_image'),addImage)

//get image
router.post('/get/image',getImage)




module.exports=router