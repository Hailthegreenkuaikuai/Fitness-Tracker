import mongoose, { Schema } from "mongoose";

const WorkoutSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        session: {
            type: String,
            required: true,
        },

        exercise: {

            type: Array,
            of: {
                Exercise:{
                    id : {
                        type: mongoose.Schema.Types.ObjectId, 
                        ref: "Exercise",
                        required: true
                    },
                    sets: {
                        type: Array,
                        of:{
                            weight:{
                                type: Schema.Types.Double,
                                required: true,
                            },
                            reps:{
                                type: Number,
                                required: true,
                            }
                        }
                    }
                }
            },
        },

        date: {
            type: Date, 
            default: Date.now,
        }

}, {timestamps: true});

export default mongoose.model("Workout", WorkoutSchema)