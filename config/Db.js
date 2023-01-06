import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('strictQuery', false);

mongoose.connect(`${process.env.DATABASE_URL}`, (error) => {
  if (error) console.log(error);
  console.log('Database connect');
});
