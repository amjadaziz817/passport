import  mongoose, {Schema} from 'mongoose';

export const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  age: Number,
  email: String,
});