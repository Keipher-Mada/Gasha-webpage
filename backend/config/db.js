import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect('mongodb+srv://kdubber17:14751367133@cluster0.vlr6fsq.mongodb.net/Gasha')
    .then(() => console.log('DB Connected'));
};
