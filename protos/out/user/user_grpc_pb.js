// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_user_pb = require('../user/user_pb.js');

function serialize_userservice_CreateUserRequest(arg) {
  if (!(arg instanceof user_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type userservice.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_CreateUserRequest(buffer_arg) {
  return user_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_GetUserRequest(arg) {
  if (!(arg instanceof user_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type userservice.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_GetUserRequest(buffer_arg) {
  return user_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_GetUsersResponse(arg) {
  if (!(arg instanceof user_user_pb.GetUsersResponse)) {
    throw new Error('Expected argument of type userservice.GetUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_GetUsersResponse(buffer_arg) {
  return user_user_pb.GetUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_User(arg) {
  if (!(arg instanceof user_user_pb.User)) {
    throw new Error('Expected argument of type userservice.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_User(buffer_arg) {
  return user_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/userservice.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.GetUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_userservice_GetUserRequest,
    requestDeserialize: deserialize_userservice_GetUserRequest,
    responseSerialize: serialize_userservice_User,
    responseDeserialize: deserialize_userservice_User,
  },
  createUser: {
    path: '/userservice.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.CreateUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_userservice_CreateUserRequest,
    requestDeserialize: deserialize_userservice_CreateUserRequest,
    responseSerialize: serialize_userservice_User,
    responseDeserialize: deserialize_userservice_User,
  },
  getUsers: {
    path: '/userservice.UserService/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.User,
    responseType: user_user_pb.GetUsersResponse,
    requestSerialize: serialize_userservice_User,
    requestDeserialize: deserialize_userservice_User,
    responseSerialize: serialize_userservice_GetUsersResponse,
    responseDeserialize: deserialize_userservice_GetUsersResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
