// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_userservice_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type userservice.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_CreateUserResponse(arg) {
  if (!(arg instanceof user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type userservice.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_CreateUserResponse(buffer_arg) {
  return user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type userservice.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_GetUserResponse(arg) {
  if (!(arg instanceof user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type userservice.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_GetUserResponse(buffer_arg) {
  return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/userservice.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.CreateUserResponse,
    requestSerialize: serialize_userservice_CreateUserRequest,
    requestDeserialize: deserialize_userservice_CreateUserRequest,
    responseSerialize: serialize_userservice_CreateUserResponse,
    responseDeserialize: deserialize_userservice_CreateUserResponse,
  },
  getUser: {
    path: '/userservice.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.GetUserResponse,
    requestSerialize: serialize_userservice_GetUserRequest,
    requestDeserialize: deserialize_userservice_GetUserRequest,
    responseSerialize: serialize_userservice_GetUserResponse,
    responseDeserialize: deserialize_userservice_GetUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
