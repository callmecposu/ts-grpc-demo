// package: postservice
// file: post/post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Post extends jspb.Message { 
    getId(): string;
    setId(value: string): Post;
    getTitle(): string;
    setTitle(value: string): Post;
    getBody(): string;
    setBody(value: string): Post;
    getAuthorId(): string;
    setAuthorId(value: string): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        id: string,
        title: string,
        body: string,
        authorId: string,
    }
}

export class GetPostRequest extends jspb.Message { 
    getPostId(): string;
    setPostId(value: string): GetPostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostRequest): GetPostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostRequest;
    static deserializeBinaryFromReader(message: GetPostRequest, reader: jspb.BinaryReader): GetPostRequest;
}

export namespace GetPostRequest {
    export type AsObject = {
        postId: string,
    }
}

export class CreatePostRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreatePostRequest;
    getBody(): string;
    setBody(value: string): CreatePostRequest;
    getAuthorId(): string;
    setAuthorId(value: string): CreatePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
    static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
    export type AsObject = {
        title: string,
        body: string,
        authorId: string,
    }
}
