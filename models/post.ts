import mongoose, { Schema } from "mongoose";

const postSchema: Schema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    authorID: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    }
})

export const PostModel = mongoose.model('Post', postSchema)