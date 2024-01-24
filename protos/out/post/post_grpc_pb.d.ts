// package: postservice
// file: post/post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as post_post_pb from "../post/post_pb";

interface IPostServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPost: IPostServiceService_IGetPost;
    createPost: IPostServiceService_ICreatePost;
}

interface IPostServiceService_IGetPost extends grpc.MethodDefinition<post_post_pb.GetPostRequest, post_post_pb.Post> {
    path: "/postservice.PostService/GetPost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_post_pb.GetPostRequest>;
    requestDeserialize: grpc.deserialize<post_post_pb.GetPostRequest>;
    responseSerialize: grpc.serialize<post_post_pb.Post>;
    responseDeserialize: grpc.deserialize<post_post_pb.Post>;
}
interface IPostServiceService_ICreatePost extends grpc.MethodDefinition<post_post_pb.CreatePostRequest, post_post_pb.Post> {
    path: "/postservice.PostService/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_post_pb.CreatePostRequest>;
    requestDeserialize: grpc.deserialize<post_post_pb.CreatePostRequest>;
    responseSerialize: grpc.serialize<post_post_pb.Post>;
    responseDeserialize: grpc.deserialize<post_post_pb.Post>;
}

export const PostServiceService: IPostServiceService;

export interface IPostServiceServer {
    getPost: grpc.handleUnaryCall<post_post_pb.GetPostRequest, post_post_pb.Post>;
    createPost: grpc.handleUnaryCall<post_post_pb.CreatePostRequest, post_post_pb.Post>;
}

export interface IPostServiceClient {
    getPost(request: post_post_pb.GetPostRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    getPost(request: post_post_pb.GetPostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    getPost(request: post_post_pb.GetPostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
}

export class PostServiceClient extends grpc.Client implements IPostServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPost(request: post_post_pb.GetPostRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public getPost(request: post_post_pb.GetPostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public getPost(request: post_post_pb.GetPostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_post_pb.Post) => void): grpc.ClientUnaryCall;
}
