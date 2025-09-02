import mongoose, { Schema } from "mongoose";

const ExerciseSchema = new mongoose.Schema(
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

        bodypart: {
            type: Array,
            required: true,
        },

        recorded:{
            type: Boolean,
            default: false,
        },

        personalRecord:{

            weight:{

                type:Array,   
                of: Schema.Types.Double
            },

            time:{
                type: Array,
                of: Date
            }
        }

    }, {timestamps: true}
);

export default mongoose.model("Exercise", ExerciseSchema);