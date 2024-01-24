import grpc from "grpc";
import mongoose from "mongoose";
import { UserServiceService } from "./protos/out/user/user_grpc_pb";
import { UserService } from "./implementations/user";

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB as string)
  .then(() => {
    console.log("db connected succesfully!");
    const server = new grpc.Server()
    server.addService(UserServiceService, new UserService())
    server.bind('0.0.0.0:3001', grpc.ServerCredentials.createInsecure())
    console.log('server started')
    server.start()
  })
  .catch((err) => console.log("eror while connecting to the db: ", err));

// const server= new grpc.Server()
