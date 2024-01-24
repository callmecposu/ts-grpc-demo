import { handleUnaryCall, status } from "grpc";
import { IUserServiceServer } from "../protos/out/user/user_grpc_pb";
import {
  CreateUserRequest,
  GetUserRequest,
  GetUsersResponse,
  User,
} from "../protos/out/user/user_pb";
import { UserModel } from "../models/user";

const protoMessageToMongoDocument = (protoMsg: any) => {
    protoMsg._id = protoMsg.id
    delete protoMsg.id
}

const cleanUpFilter = (k: any, v: any) => {
    if (!v) return false;
    if (Array.isArray(v) && v.length === 0) return false;
    if (typeof v === 'object' && v !== null && Object.keys(v).length === 0) return false;
    return true;
}

export class UserService implements IUserServiceServer {
  getUser: handleUnaryCall<GetUserRequest, User> = (call, callback) => {
    const response = new User();
    callback(null, response);
  };

  getUsers: handleUnaryCall<User, GetUsersResponse> = async (call, callback) => {
    const request = call.request;
    var reqUser:any = request.toObject();
    protoMessageToMongoDocument(reqUser)
    console.log(reqUser)
    const cleanUser = Object.fromEntries(Object.entries(reqUser).filter(([k, v]) => cleanUpFilter(k,v)))
    console.log(cleanUser)
    const result = await UserModel.find(cleanUser)
    console.log(result)
    const response = new GetUsersResponse()
    response.setUsersList(result.map(x => {
        const user = new User
        user.setId(x._id)
        user.setPassword(x.password)
        user.setUsername(x.username)
        user.setPostIdsList(x.postIDs)
        return user;
    }))
    callback(null, response)
  }

  createUser: handleUnaryCall<CreateUserRequest, User> = async (
    call,
    callback
  ) => {
    const request = call.request;
    try {
      const user = new UserModel({
        username: request.getUsername(),
        password: request.getPassword(),
        postIdsList: [],
      });
      const savedUser = await user.save();
      const response = new User();
      response.setId(savedUser._id.toString());
      response.setUsername(savedUser.username);
      response.setPassword(savedUser.password);
      response.setPostIdsList(savedUser.postIDs);
      callback(null, response);
    } catch (err: any) {
      console.log(err);
      callback(
        {
          code: status.INTERNAL,
          details: err.message,
          name: err.message,
          message: err.message,
        },
        null
      );
    }
  };
}
