import mongoose from 'mongoose';

async function dbConnect() {
  console.log('process.env.DATABASE_URI', process.env.DATABASE_URI);
  if (mongoose.connection.readyState < 1) {
    await mongoose.connect(process.env.DATABASE_URI as string);
  }
}

export default dbConnect;
