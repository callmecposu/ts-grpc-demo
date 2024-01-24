import { throws } from "assert";
import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document{
    username: string,
    password:string,
    postIDs: string[];
}

const userSchema: Schema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    postIdsList: [
        {
            type:Schema.Types.ObjectId, ref: 'Post'
        }
    ]
})

export const UserModel = mongoose.model<UserDocument>('User', userSchema)