// package: userservice
// file: user/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_user_pb from "../user/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
    createUser: IUserServiceService_ICreateUser;
    getUsers: IUserServiceService_IGetUsers;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<user_user_pb.GetUserRequest, user_user_pb.User> {
    path: "/userservice.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_user_pb.User>;
    responseDeserialize: grpc.deserialize<user_user_pb.User>;
}
interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<user_user_pb.CreateUserRequest, user_user_pb.User> {
    path: "/userservice.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<user_user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<user_user_pb.User>;
    responseDeserialize: grpc.deserialize<user_user_pb.User>;
}
interface IUserServiceService_IGetUsers extends grpc.MethodDefinition<user_user_pb.User, user_user_pb.GetUsersResponse> {
    path: "/userservice.UserService/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_pb.User>;
    requestDeserialize: grpc.deserialize<user_user_pb.User>;
    responseSerialize: grpc.serialize<user_user_pb.GetUsersResponse>;
    responseDeserialize: grpc.deserialize<user_user_pb.GetUsersResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getUser: grpc.handleUnaryCall<user_user_pb.GetUserRequest, user_user_pb.User>;
    createUser: grpc.handleUnaryCall<user_user_pb.CreateUserRequest, user_user_pb.User>;
    getUsers: grpc.handleUnaryCall<user_user_pb.User, user_user_pb.GetUsersResponse>;
}

export interface IUserServiceClient {
    getUser(request: user_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    getUsers(request: user_user_pb.User, callback: (error: grpc.ServiceError | null, response: user_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: user_user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: user_user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: user_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_user_pb.User, callback: (error: grpc.ServiceError | null, response: user_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
}
