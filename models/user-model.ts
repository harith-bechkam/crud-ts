import mongoose, { Document, Schema, model } from 'mongoose';

// Create the interface
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
}

// Create the schema
const UserSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: "updatedAt"
    }
});


// Create and export user model
// export const UserModel = model<IUser>("User", UserSchema);
export default mongoose.model<IUser>("User", UserSchema)