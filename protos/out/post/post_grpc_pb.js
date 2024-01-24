// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var post_post_pb = require('../post/post_pb.js');

function serialize_postservice_CreatePostRequest(arg) {
  if (!(arg instanceof post_post_pb.CreatePostRequest)) {
    throw new Error('Expected argument of type postservice.CreatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_CreatePostRequest(buffer_arg) {
  return post_post_pb.CreatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postservice_GetPostRequest(arg) {
  if (!(arg instanceof post_post_pb.GetPostRequest)) {
    throw new Error('Expected argument of type postservice.GetPostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_GetPostRequest(buffer_arg) {
  return post_post_pb.GetPostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postservice_Post(arg) {
  if (!(arg instanceof post_post_pb.Post)) {
    throw new Error('Expected argument of type postservice.Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postservice_Post(buffer_arg) {
  return post_post_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostServiceService = exports.PostServiceService = {
  getPost: {
    path: '/postservice.PostService/GetPost',
    requestStream: false,
    responseStream: false,
    requestType: post_post_pb.GetPostRequest,
    responseType: post_post_pb.Post,
    requestSerialize: serialize_postservice_GetPostRequest,
    requestDeserialize: deserialize_postservice_GetPostRequest,
    responseSerialize: serialize_postservice_Post,
    responseDeserialize: deserialize_postservice_Post,
  },
  createPost: {
    path: '/postservice.PostService/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: post_post_pb.CreatePostRequest,
    responseType: post_post_pb.Post,
    requestSerialize: serialize_postservice_CreatePostRequest,
    requestDeserialize: deserialize_postservice_CreatePostRequest,
    responseSerialize: serialize_postservice_Post,
    responseDeserialize: deserialize_postservice_Post,
  },
};

exports.PostServiceClient = grpc.makeGenericClientConstructor(PostServiceService);
