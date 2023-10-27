const users = require("../models/userModel");

//user reg
const userReg=async(req,res)=>{
    const {name,email,psw}=req.body

    let preUser=await users.findOne({email})
   
        if(preUser){
        res.status(400).json("User already existing")
        }
    else{
        
        let newUser= new users({
            name,
            email,
            psw,
            image:[]
        })
        await newUser.save()
        res.status(200).json(newUser)
        }
        
    }


const userLogin=async(req,res)=>{
    const {email,psw}=req.body

    let user=await users.findOne({email,psw})
    if(user){
        res.status(200).json(user)

    }
    else{
        res.status(400).json("User not found")
    }
}

const addImage=async(req,res)=>{
    const image=req.file.filename
    const {email}=req.body

    let user=await users.findOne({email})
      

    if(user){

        user.image.push(image)
        user.save()
        
        
        res.status(200).json("Image saved")
    }
    else{
        res.status(400).json("User not found")
    }

}

const getImage=async(req,res)=>{
   const {email}=req.body


   let user =await users.findOne({email})
   if(user){
    res.status(200).json(user.image)

   }
   else{
    res.status(400).json("User not found")
   }

}

    module.exports={
        userReg,
        userLogin,
        addImage,
        getImage
    }
