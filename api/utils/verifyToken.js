import jwt  from "jsonwebtoken";
import { createError } from "../utils/error.js";
import User from "../models/User.js";




export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"you are not authenticated"))
    }


    jwt.verify(token,process.env.jwt, (err,User)=>{
        if(err)
        return next(createError(403,"Token not valid"));

        req.user =user;
        next()
    });

}