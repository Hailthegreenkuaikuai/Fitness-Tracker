import mongoose, { Schema } from "mongoose";

const ProgramSchema = new mongoose.Schema(
    {
        user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
        },

        name: {
            type: String,
            required: true,
        },

        Exercises:{
                type: Array,
                of: {
                    Exercise:{
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Exercise",
                        required: true,
                    },

                    sets: {
                        type: Number,
                        required: true,
                    },

                    reps: {
                        type: String,
                        required: true,
                    },

                }
        }
        
    },{timestamps: true}
);

export default mongoose.model("Program", ProgramSchema);