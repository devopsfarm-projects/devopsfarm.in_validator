import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {  // Ensure this is exported
  email: string;
  password: string;
  name?: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
});

export default mongoose.model<IUser>('User', userSchema);



// import mongoose, { Document, Schema } from 'mongoose';

// export interface IUser extends Document {
//     name: string;
//     email: string;
//     password: string;
//     role: string;
// }

// const UserSchema: Schema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ['user', 'admin'], default: 'user' },
// });

// export default mongoose.model<IUser>('User', UserSchema);



// import mongoose, { Document, Model } from 'mongoose';
// import bcrypt from 'bcryptjs';

// // Define an interface for the User schema
// interface IUser extends Document {
//     name: string;
//     email: string;
//     password: string;
//     matchPassword(enteredPassword: string): Promise<boolean>;
// }

// // Define the User schema
// const userSchema = new mongoose.Schema<IUser>({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// }, {
//     timestamps: true,
// });

// // Hash the password before saving the user
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// // Method to match the password during login
// userSchema.methods.matchPassword = async function (enteredPassword: string) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// // Export the User model
// const User: Model<IUser> = mongoose.model('User', userSchema);
// export default User;




// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true, // Ensure this field is required
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true, // Ensure email is unique
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// }, {
//   timestamps: true, // Optional: adds createdAt and updatedAt timestamps
// });

// const User = mongoose.model('User', userSchema);

// export default User;













// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// interface IUser extends mongoose.Document {
//   email: string;
//   password: string;
//   matchPassword: (password: string) => Promise<boolean>;
// }

// const UserSchema = new mongoose.Schema<IUser>({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Hash the password before saving the user
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Compare password during login
// UserSchema.methods.matchPassword = async function (enteredPassword: string) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// export default mongoose.model<IUser>('User', UserSchema);






// import mongoose, { Document, Schema, Model } from 'mongoose';
// import bcrypt from 'bcrypt';

// // Define the User interface that extends Mongoose's Document interface
// interface IUser extends Document {
//   email: string;
//   password: string;
//   matchPassword(enteredPassword: string): Promise<boolean>;
// }

// // Define the user schema
// const UserSchema: Schema<IUser> = new Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Pre-save hook to hash the password before saving
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Define the method to compare passwords
// UserSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Create the User model
// const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

// export default User;
