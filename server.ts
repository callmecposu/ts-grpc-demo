import grpc, { ServiceDefinition, UntypedServiceImplementation } from "grpc";
import {
  IUserServiceServer,
  UserServiceService,
} from "./protos/out/user_grpc_pb";
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserRequest,
  GetUserResponse,
  User,
} from "./protos/out/user_pb";

const server = new grpc.Server();

let users: User.AsObject[] = [
  {
    id: 1,
    username: "callmecposu",
    password: "123",
  },
  {
    id: 2,
    username: "jimbert_analo",
    password: "456",
  },
  {
    id: 3,
    username: "vlad_guzli",
    password: "789",
  },
];

const createUserFromObject = (userObj: User.AsObject): User => {
  const user: any = new User();
  for (let field in userObj) {
    user[`set${field.charAt(0).toUpperCase() + field.slice(1)}`](
      (userObj as any)[field]
    );
  }
  return user as User;
};

class UserService implements IUserServiceServer {
  createUser: grpc.handleUnaryCall<CreateUserRequest, CreateUserResponse> = (
    call,
    callback
  ) => {
    const request = call.request;
    // const newUser: User = new User();
    // newUser.setId(users.length + 1)
    // newUser.setUsername(request.getUsername())
    // newUser.setPassword(request.getPassword())
    const newUser = createUserFromObject({
      id: users.length + 1,
      username: request.getUsername(),
      password: request.getPassword(),
    });
    users.push(newUser.toObject());
    const response = new CreateUserResponse();
    response.setUser(newUser);
    callback(null, response);
  };
  getUser: grpc.handleUnaryCall<GetUserRequest, GetUserResponse> = (
    call,
    callback
  ) => {
    const response = new GetUserResponse()
    callback(null, response)
  };
}

server.addService(UserServiceService, new UserService())
server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure())
server.start()
