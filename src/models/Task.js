import {
    Schema,
    model
} from "mongoose";
//task = tarea


const Tarea = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },

    
}, {
    timestamps: true,
    versionKey: false // createdAt, updatedAt
});

export default model("Tarea", Tarea);