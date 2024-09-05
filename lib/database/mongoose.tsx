import mongoose, { Mongoose } from 'mongoose';
// import dotenv from "dotenv"
// dotenv.config();



const MONGODB_URL =  process.env.MONGODB_URI ;
console.log(MONGODB_URL)



// interface MongooseConnection {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose

// if(!cached) {
//   cached = (global as any).mongoose = { 
//     conn: null, promise: null 
//   }
// }

export const connectToDatabase = async () => {
  // if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  // cached.promise = 
  //   cached.promise || 
   const connectionInstance= await  mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify'})

  // cached.conn = await cached.promise;
  console.log("connected to database")
  return connectionInstance
  
}