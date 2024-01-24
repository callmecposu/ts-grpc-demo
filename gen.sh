npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./protos/out \
--grpc_out=./protos/out \
--ts_out=./protos/out \
--proto_path=./protos/src \
./protos/src/post/post.proto \
./protos/src/user/user.proto
