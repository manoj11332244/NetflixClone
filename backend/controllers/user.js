import { User } from "../models/userModel";

const Register =async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        if(!fullname || !email || !password){
            return req.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false
            })
        }
        await user.create({
            fullname,email,password
        })
        res.status(200).json({
            message:"Account created successfully",
        })
    } catch (err) {
        console.log(err)
    }
}