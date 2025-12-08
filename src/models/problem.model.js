import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title cannot be empty"],
    },
    description: {
        type: String,
        required: [true, "description cannot be empty"],
    },
    diffucluty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: [true, "Difficulty can be empty"],
        default: "easy",
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                require: true
            }
        }
    ],
    editorial: {
        type: String,
    }
});

const Problem = mongoose.model("Problem", problemSchema);
export default Problem;