const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true

    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true

    },
    psw:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:Array
    }
})

const users=new mongoose.model('users',userSchema)
module.exports=users