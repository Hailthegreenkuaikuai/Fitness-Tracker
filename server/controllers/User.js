import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createError } from "../error.js";
import User from "../models/User.js";
import Exercise from "../models/Exercise.js";
import { dateDiff, SBDTotal, totalTrainingSessions, totalSetofWeek, weeklyVolume } from "../function.js";

dotenv.config();

export const UserRegister = async(req, res, next) => {
    try{
        const {email, password, name, image} = req.body;

        const existingUser = await User.findOne({ email }).exec();

        if(existingUser) {
            return next(createError(409, "Email is in use"));
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        
        const user = new User({
            name, 
            email, 
            password: hashedPassword,
            image,
        });

        const createdUser = await user.save();
        const token = jwt.sign({id: createdUser._id}, process.env.JWT_SECRET, {
            expiresIn: "100 years",
        })
        return res.status(200).json({ token, user });
    }catch (err){
        return next(err);
    }
}

export const UserLogin = async(req, res, next) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({ email }).exec();

        if(!user) {
            return next(createError(404, "User not found"));
        }
    
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if(!isPasswordCorrect){
            return next(createError(403, "Incorrect Password"));
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "100 years",
        })
        return res.status(200).json({ token, user });
    }catch (err){
        return next(err);
    }
}

export const getUserDashboard = async (req, res, next) => {
    try{
        const userID = req.user?.id;
        const user = await User.findById(userID);

        if(!user){
            return next(createError(404, "User not found"));
        }

        const totalDay = dateDiff(user['createdAt']);
    
        const SBD = await SBDTotal(userID);
        
        const totalTraining = await totalTrainingSessions(userID);

        const totalBodypartSet = await totalSetofWeek(userID);
 
        const weekVolume = weeklyVolume(userID);

        return res.status(200).json({user});
    }catch(err){
        next(err);
    }
}





