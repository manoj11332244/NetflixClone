import express from 'express'
import dotenv from 'dotenv'
import databaseconnnection from './utils/database.js'
import cookieParser from 'cookie-parser'

databaseconnnection()

dotenv.config({
    path:'.env'
})


const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())



app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port ${process.env.PORT}`)
})