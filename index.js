require('dotenv').config()

//server creation
const express=require('express')
const cors=require('cors')
const router=require('./routers/routes')



const server=express()


server.use(cors())
server.use(express.json())
server.use(router)

require('./connections/connections')

const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`____image Server Connected At Port ${port}____`);
})