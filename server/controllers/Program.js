import mongoose from "mongoose";
import Exercises from "../models/Exercise.js";


export async function insertProgram(){
    const exercises = await Exercises.find({}, "_id name").exec();
}

export default insertProgram; 