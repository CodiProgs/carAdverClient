/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Car = {
  __typename?: 'Car';
  bodyType: Scalars['String']['output'];
  brand?: Maybe<Make>;
  fuelType: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  images: Scalars['String']['output'];
  mileage: Scalars['String']['output'];
  model?: Maybe<Model>;
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
  registration: Scalars['Float']['output'];
  transmission: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type CreateCarResponse = {
  __typename?: 'CreateCarResponse';
  car?: Maybe<Car>;
  error?: Maybe<ErrorType>;
};

export type CreateMakeResponse = {
  __typename?: 'CreateMakeResponse';
  error?: Maybe<ErrorType>;
  make?: Maybe<Make>;
};

export type CreateModelResponse = {
  __typename?: 'CreateModelResponse';
  error?: Maybe<ErrorType>;
  model?: Maybe<Model>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<ErrorType>;
  user: User;
};

export type Make = {
  __typename?: 'Make';
  id: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Model = {
  __typename?: 'Model';
  brand?: Maybe<Make>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar: CreateCarResponse;
  createMake: CreateMakeResponse;
  createModel: CreateModelResponse;
  login: LoginResponse;
  logout: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  register: RegisterResponse;
  updateEmail: UpdateResponse;
  updatePassword: UpdateResponse;
  updateType: UpdateResponse;
  updateUser: UpdateResponse;
};


export type MutationCreateCarArgs = {
  createCarInput: CreateCarDto;
};


export type MutationCreateMakeArgs = {
  createMakeInput: CreateMakeDto;
};


export type MutationCreateModelArgs = {
  createModelInput: CreateModelDto;
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};


export type MutationUpdateEmailArgs = {
  updateEmailInput: UpdateEmailDto;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordDto;
};


export type MutationUpdateTypeArgs = {
  updateTypeInput: UpdateTypeDto;
};


export type MutationUpdateUserArgs = {
  updateInput: UpdateDto;
};

export type Query = {
  __typename?: 'Query';
  getAllCarByMake: Array<Car>;
  getAllCars: Array<Car>;
  getAllMakes: Array<Make>;
  getCarById: Car;
  getModelsAll: Array<Model>;
  getUserById: GetUserByIdResponse;
  getUsersByType: Array<User>;
  hello: Scalars['String']['output'];
};


export type QueryGetAllCarByMakeArgs = {
  makeId: Scalars['Float']['input'];
};


export type QueryGetCarByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUsersByTypeArgs = {
  type: Scalars['String']['input'];
};

export type RegisterDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  surname: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type UpdateDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  surname: Scalars['String']['input'];
};

export type UpdateResponse = {
  __typename?: 'UpdateResponse';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  cars?: Maybe<Array<Car>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCarDto = {
  bodyType: Scalars['String']['input'];
  brandId: Scalars['Int']['input'];
  fuelType: Scalars['String']['input'];
  images: Scalars['String']['input'];
  mileage: Scalars['Int']['input'];
  modelId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  registration: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateMakeDto = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateModelDto = {
  makeId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type GetUserByIdResponse = {
  __typename?: 'getUserByIdResponse';
  user?: Maybe<User>;
};

export type UpdateEmailDto = {
  email: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type UpdatePasswordDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateTypeDto = {
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateCarMutationVariables = Exact<{
  bodyType: Scalars['String']['input'];
  brandId: Scalars['Int']['input'];
  fuelType: Scalars['String']['input'];
  images: Scalars['String']['input'];
  mileage: Scalars['Int']['input'];
  modelId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  registration: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
}>;


export type CreateCarMutation = { __typename?: 'Mutation', createCar: { __typename?: 'CreateCarResponse', car?: { __typename?: 'Car', id: number, images: string } | null } };

export type CreateMakeMutationVariables = Exact<{
  name: Scalars['String']['input'];
  image: Scalars['String']['input'];
}>;


export type CreateMakeMutation = { __typename?: 'Mutation', createMake: { __typename?: 'CreateMakeResponse', make?: { __typename?: 'Make', name: string, image: string } | null } };

export type CreateModelMutationVariables = Exact<{
  name: Scalars['String']['input'];
  makeId: Scalars['Int']['input'];
}>;


export type CreateModelMutation = { __typename?: 'Mutation', createModel: { __typename?: 'CreateModelResponse', model?: { __typename?: 'Model', name: string, id: number, brand?: { __typename?: 'Make', id: number, name: string } | null } | null } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user: { __typename?: 'User', id: number, name: string, surname: string, email: string, image: string, phone?: string | null, location?: string | null, type: string } } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: string };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  surname: Scalars['String']['input'];
  image: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', user?: { __typename?: 'User', id: number, name: string, email: string, surname: string, image: string, type: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  surname: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string, image: string, location?: string | null, name: string, phone?: string | null, surname: string } | null } };

export type UpdateEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
  id: Scalars['Int']['input'];
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string } | null } };

export type UpdatePasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string } | null } };

export type UpdateTypeMutationVariables = Exact<{
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type UpdateTypeMutation = { __typename?: 'Mutation', updateType: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string, type: string } | null } };

export type GetAllCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCarsQuery = { __typename?: 'Query', getAllCars: Array<{ __typename?: 'Car', id: number, name: string, price: string, images: string, model?: { __typename?: 'Model', id: number, name: string } | null, brand?: { __typename?: 'Make', id: number, name: string } | null }> };

export type GetAllCarByMakeQueryVariables = Exact<{
  makeId: Scalars['Float']['input'];
}>;


export type GetAllCarByMakeQuery = { __typename?: 'Query', getAllCarByMake: Array<{ __typename?: 'Car', id: number, name: string, price: string, images: string, model?: { __typename?: 'Model', id: number, name: string } | null }> };

export type GetAllMakesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMakesQuery = { __typename?: 'Query', getAllMakes: Array<{ __typename?: 'Make', name: string, image: string, id: number }> };

export type GetCarByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetCarByIdQuery = { __typename?: 'Query', getCarById: { __typename?: 'Car', name: string, bodyType: string, fuelType: string, images: string, mileage: string, price: string, registration: number, transmission: string, brand?: { __typename?: 'Make', id: number, name: string } | null, model?: { __typename?: 'Model', name: string } | null, user?: { __typename?: 'User', id: number, name: string, surname: string, location?: string | null, createdAt: any, email: string, phone?: string | null, type: string, image: string } | null } };

export type GetModelsAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModelsAllQuery = { __typename?: 'Query', getModelsAll: Array<{ __typename?: 'Model', name: string, id: number, brand?: { __typename?: 'Make', id: number, name: string } | null }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'getUserByIdResponse', user?: { __typename?: 'User', createdAt: any, phone?: string | null, location?: string | null, name: string, surname: string, email: string, id: number, image: string, type: string, cars?: Array<{ __typename?: 'Car', id: number, name: string, images: string, price: string, model?: { __typename?: 'Model', name: string } | null }> | null } | null } };

export type GetUserByTypeQueryVariables = Exact<{
  type: Scalars['String']['input'];
}>;


export type GetUserByTypeQuery = { __typename?: 'Query', getUsersByType: Array<{ __typename?: 'User', name: string, surname: string, id: number, image: string, email: string, createdAt: any, location?: string | null, cars?: Array<{ __typename?: 'Car', name: string, id: number }> | null }> };


export const CreateCarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bodyType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"brandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fuelType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"images"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mileage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registration"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transmission"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCarInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"bodyType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bodyType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"brandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"brandId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fuelType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fuelType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"images"},"value":{"kind":"Variable","name":{"kind":"Name","value":"images"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mileage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mileage"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"modelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modelId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"registration"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registration"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"transmission"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transmission"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCarMutation, CreateCarMutationVariables>;
export const CreateMakeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMake"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMake"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createMakeInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"make"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<CreateMakeMutation, CreateMakeMutationVariables>;
export const CreateModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"makeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createModel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createModelInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"makeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"makeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateModelMutation, CreateModelMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"surname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"surname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surname"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateEmailInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const UpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePasswordInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTypeInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTypeMutation, UpdateTypeMutationVariables>;
export const GetAllCarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllCarsQuery, GetAllCarsQueryVariables>;
export const GetAllCarByMakeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCarByMake"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"makeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCarByMake"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"makeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"makeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllCarByMakeQuery, GetAllCarByMakeQueryVariables>;
export const GetAllMakesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMakes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMakes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetAllMakesQuery, GetAllMakesQueryVariables>;
export const GetCarByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCarById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCarById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fuelType"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"mileage"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"registration"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GetCarByIdQuery, GetCarByIdQueryVariables>;
export const GetModelsAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetModelsAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getModelsAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetModelsAllQuery, GetModelsAllQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"cars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersByType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"cars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByTypeQuery, GetUserByTypeQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Car = {
  __typename?: 'Car';
  bodyType: Scalars['String']['output'];
  brand?: Maybe<Make>;
  fuelType: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  images: Scalars['String']['output'];
  mileage: Scalars['String']['output'];
  model?: Maybe<Model>;
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
  registration: Scalars['Float']['output'];
  transmission: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type CreateCarResponse = {
  __typename?: 'CreateCarResponse';
  car?: Maybe<Car>;
  error?: Maybe<ErrorType>;
};

export type CreateMakeResponse = {
  __typename?: 'CreateMakeResponse';
  error?: Maybe<ErrorType>;
  make?: Maybe<Make>;
};

export type CreateModelResponse = {
  __typename?: 'CreateModelResponse';
  error?: Maybe<ErrorType>;
  model?: Maybe<Model>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<ErrorType>;
  user: User;
};

export type Make = {
  __typename?: 'Make';
  id: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Model = {
  __typename?: 'Model';
  brand?: Maybe<Make>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar: CreateCarResponse;
  createMake: CreateMakeResponse;
  createModel: CreateModelResponse;
  login: LoginResponse;
  logout: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  register: RegisterResponse;
  updateEmail: UpdateResponse;
  updatePassword: UpdateResponse;
  updateType: UpdateResponse;
  updateUser: UpdateResponse;
};


export type MutationCreateCarArgs = {
  createCarInput: CreateCarDto;
};


export type MutationCreateMakeArgs = {
  createMakeInput: CreateMakeDto;
};


export type MutationCreateModelArgs = {
  createModelInput: CreateModelDto;
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};


export type MutationUpdateEmailArgs = {
  updateEmailInput: UpdateEmailDto;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordDto;
};


export type MutationUpdateTypeArgs = {
  updateTypeInput: UpdateTypeDto;
};


export type MutationUpdateUserArgs = {
  updateInput: UpdateDto;
};

export type Query = {
  __typename?: 'Query';
  getAllCarByMake: Array<Car>;
  getAllCars: Array<Car>;
  getAllMakes: Array<Make>;
  getCarById: Car;
  getModelsAll: Array<Model>;
  getUserById: GetUserByIdResponse;
  getUsersByType: Array<User>;
  hello: Scalars['String']['output'];
};


export type QueryGetAllCarByMakeArgs = {
  makeId: Scalars['Float']['input'];
};


export type QueryGetCarByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUsersByTypeArgs = {
  type: Scalars['String']['input'];
};

export type RegisterDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  surname: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type UpdateDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  surname: Scalars['String']['input'];
};

export type UpdateResponse = {
  __typename?: 'UpdateResponse';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  cars?: Maybe<Array<Car>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCarDto = {
  bodyType: Scalars['String']['input'];
  brandId: Scalars['Int']['input'];
  fuelType: Scalars['String']['input'];
  images: Scalars['String']['input'];
  mileage: Scalars['Int']['input'];
  modelId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  registration: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateMakeDto = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateModelDto = {
  makeId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type GetUserByIdResponse = {
  __typename?: 'getUserByIdResponse';
  user?: Maybe<User>;
};

export type UpdateEmailDto = {
  email: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type UpdatePasswordDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateTypeDto = {
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateCarMutationVariables = Exact<{
  bodyType: Scalars['String']['input'];
  brandId: Scalars['Int']['input'];
  fuelType: Scalars['String']['input'];
  images: Scalars['String']['input'];
  mileage: Scalars['Int']['input'];
  modelId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  registration: Scalars['String']['input'];
  transmission: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
}>;


export type CreateCarMutation = { __typename?: 'Mutation', createCar: { __typename?: 'CreateCarResponse', car?: { __typename?: 'Car', id: number, images: string } | null } };

export type CreateMakeMutationVariables = Exact<{
  name: Scalars['String']['input'];
  image: Scalars['String']['input'];
}>;


export type CreateMakeMutation = { __typename?: 'Mutation', createMake: { __typename?: 'CreateMakeResponse', make?: { __typename?: 'Make', name: string, image: string } | null } };

export type CreateModelMutationVariables = Exact<{
  name: Scalars['String']['input'];
  makeId: Scalars['Int']['input'];
}>;


export type CreateModelMutation = { __typename?: 'Mutation', createModel: { __typename?: 'CreateModelResponse', model?: { __typename?: 'Model', name: string, id: number, brand?: { __typename?: 'Make', id: number, name: string } | null } | null } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user: { __typename?: 'User', id: number, name: string, surname: string, email: string, image: string, phone?: string | null, location?: string | null, type: string } } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: string };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  surname: Scalars['String']['input'];
  image: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', user?: { __typename?: 'User', id: number, name: string, email: string, surname: string, image: string, type: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  surname: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string, image: string, location?: string | null, name: string, phone?: string | null, surname: string } | null } };

export type UpdateEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
  id: Scalars['Int']['input'];
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string } | null } };

export type UpdatePasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string } | null } };

export type UpdateTypeMutationVariables = Exact<{
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type UpdateTypeMutation = { __typename?: 'Mutation', updateType: { __typename?: 'UpdateResponse', user?: { __typename?: 'User', email: string, type: string } | null } };

export type GetAllCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCarsQuery = { __typename?: 'Query', getAllCars: Array<{ __typename?: 'Car', id: number, name: string, price: string, images: string, model?: { __typename?: 'Model', id: number, name: string } | null, brand?: { __typename?: 'Make', id: number, name: string } | null }> };

export type GetAllCarByMakeQueryVariables = Exact<{
  makeId: Scalars['Float']['input'];
}>;


export type GetAllCarByMakeQuery = { __typename?: 'Query', getAllCarByMake: Array<{ __typename?: 'Car', id: number, name: string, price: string, images: string, model?: { __typename?: 'Model', id: number, name: string } | null }> };

export type GetAllMakesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMakesQuery = { __typename?: 'Query', getAllMakes: Array<{ __typename?: 'Make', name: string, image: string, id: number }> };

export type GetCarByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetCarByIdQuery = { __typename?: 'Query', getCarById: { __typename?: 'Car', name: string, bodyType: string, fuelType: string, images: string, mileage: string, price: string, registration: number, transmission: string, brand?: { __typename?: 'Make', id: number, name: string } | null, model?: { __typename?: 'Model', name: string } | null, user?: { __typename?: 'User', id: number, name: string, surname: string, location?: string | null, createdAt: any, email: string, phone?: string | null, type: string, image: string } | null } };

export type GetModelsAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModelsAllQuery = { __typename?: 'Query', getModelsAll: Array<{ __typename?: 'Model', name: string, id: number, brand?: { __typename?: 'Make', id: number, name: string } | null }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'getUserByIdResponse', user?: { __typename?: 'User', createdAt: any, phone?: string | null, location?: string | null, name: string, surname: string, email: string, id: number, image: string, type: string, cars?: Array<{ __typename?: 'Car', id: number, name: string, images: string, price: string, model?: { __typename?: 'Model', name: string } | null }> | null } | null } };

export type GetUserByTypeQueryVariables = Exact<{
  type: Scalars['String']['input'];
}>;


export type GetUserByTypeQuery = { __typename?: 'Query', getUsersByType: Array<{ __typename?: 'User', name: string, surname: string, id: number, image: string, email: string, createdAt: any, location?: string | null, cars?: Array<{ __typename?: 'Car', name: string, id: number }> | null }> };


export const CreateCarDocument = gql`
    mutation CreateCar($bodyType: String!, $brandId: Int!, $fuelType: String!, $images: String!, $mileage: Int!, $modelId: Int!, $name: String!, $price: Int!, $registration: String!, $transmission: String!, $userId: Int!) {
  createCar(
    createCarInput: {bodyType: $bodyType, brandId: $brandId, fuelType: $fuelType, images: $images, mileage: $mileage, modelId: $modelId, name: $name, price: $price, registration: $registration, transmission: $transmission, userId: $userId}
  ) {
    car {
      id
      images
    }
  }
}
    `;
export type CreateCarMutationFn = Apollo.MutationFunction<CreateCarMutation, CreateCarMutationVariables>;

/**
 * __useCreateCarMutation__
 *
 * To run a mutation, you first call `useCreateCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarMutation, { data, loading, error }] = useCreateCarMutation({
 *   variables: {
 *      bodyType: // value for 'bodyType'
 *      brandId: // value for 'brandId'
 *      fuelType: // value for 'fuelType'
 *      images: // value for 'images'
 *      mileage: // value for 'mileage'
 *      modelId: // value for 'modelId'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      registration: // value for 'registration'
 *      transmission: // value for 'transmission'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateCarMutation(baseOptions?: Apollo.MutationHookOptions<CreateCarMutation, CreateCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCarMutation, CreateCarMutationVariables>(CreateCarDocument, options);
      }
export type CreateCarMutationHookResult = ReturnType<typeof useCreateCarMutation>;
export type CreateCarMutationResult = Apollo.MutationResult<CreateCarMutation>;
export type CreateCarMutationOptions = Apollo.BaseMutationOptions<CreateCarMutation, CreateCarMutationVariables>;
export const CreateMakeDocument = gql`
    mutation CreateMake($name: String!, $image: String!) {
  createMake(createMakeInput: {name: $name, image: $image}) {
    make {
      name
      image
    }
  }
}
    `;
export type CreateMakeMutationFn = Apollo.MutationFunction<CreateMakeMutation, CreateMakeMutationVariables>;

/**
 * __useCreateMakeMutation__
 *
 * To run a mutation, you first call `useCreateMakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMakeMutation, { data, loading, error }] = useCreateMakeMutation({
 *   variables: {
 *      name: // value for 'name'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateMakeMutation(baseOptions?: Apollo.MutationHookOptions<CreateMakeMutation, CreateMakeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMakeMutation, CreateMakeMutationVariables>(CreateMakeDocument, options);
      }
export type CreateMakeMutationHookResult = ReturnType<typeof useCreateMakeMutation>;
export type CreateMakeMutationResult = Apollo.MutationResult<CreateMakeMutation>;
export type CreateMakeMutationOptions = Apollo.BaseMutationOptions<CreateMakeMutation, CreateMakeMutationVariables>;
export const CreateModelDocument = gql`
    mutation CreateModel($name: String!, $makeId: Int!) {
  createModel(createModelInput: {name: $name, makeId: $makeId}) {
    model {
      name
      id
      brand {
        id
        name
      }
    }
  }
}
    `;
export type CreateModelMutationFn = Apollo.MutationFunction<CreateModelMutation, CreateModelMutationVariables>;

/**
 * __useCreateModelMutation__
 *
 * To run a mutation, you first call `useCreateModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createModelMutation, { data, loading, error }] = useCreateModelMutation({
 *   variables: {
 *      name: // value for 'name'
 *      makeId: // value for 'makeId'
 *   },
 * });
 */
export function useCreateModelMutation(baseOptions?: Apollo.MutationHookOptions<CreateModelMutation, CreateModelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateModelMutation, CreateModelMutationVariables>(CreateModelDocument, options);
      }
export type CreateModelMutationHookResult = ReturnType<typeof useCreateModelMutation>;
export type CreateModelMutationResult = Apollo.MutationResult<CreateModelMutation>;
export type CreateModelMutationOptions = Apollo.BaseMutationOptions<CreateModelMutation, CreateModelMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    user {
      id
      name
      surname
      email
      image
      phone
      location
      type
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $name: String!, $password: String!, $surname: String!, $image: String!, $type: String!) {
  register(
    registerInput: {email: $email, name: $name, password: $password, surname: $surname, image: $image, type: $type}
  ) {
    user {
      id
      name
      email
      surname
      image
      type
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      surname: // value for 'surname'
 *      image: // value for 'image'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($email: String!, $image: String!, $location: String, $name: String!, $phone: String, $surname: String!) {
  updateUser(
    updateInput: {email: $email, image: $image, location: $location, name: $name, phone: $phone, surname: $surname}
  ) {
    user {
      email
      image
      location
      name
      phone
      surname
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      image: // value for 'image'
 *      location: // value for 'location'
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      surname: // value for 'surname'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateEmailDocument = gql`
    mutation UpdateEmail($email: String!, $id: Int!) {
  updateEmail(updateEmailInput: {email: $email, id: $id}) {
    user {
      email
    }
  }
}
    `;
export type UpdateEmailMutationFn = Apollo.MutationFunction<UpdateEmailMutation, UpdateEmailMutationVariables>;

/**
 * __useUpdateEmailMutation__
 *
 * To run a mutation, you first call `useUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailMutation, { data, loading, error }] = useUpdateEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateEmailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmailMutation, UpdateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(UpdateEmailDocument, options);
      }
export type UpdateEmailMutationHookResult = ReturnType<typeof useUpdateEmailMutation>;
export type UpdateEmailMutationResult = Apollo.MutationResult<UpdateEmailMutation>;
export type UpdateEmailMutationOptions = Apollo.BaseMutationOptions<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($password: String!, $email: String!) {
  updatePassword(updatePasswordInput: {password: $password, email: $email}) {
    user {
      email
    }
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateTypeDocument = gql`
    mutation UpdateType($email: String!, $type: String!) {
  updateType(updateTypeInput: {email: $email, type: $type}) {
    user {
      email
      type
    }
  }
}
    `;
export type UpdateTypeMutationFn = Apollo.MutationFunction<UpdateTypeMutation, UpdateTypeMutationVariables>;

/**
 * __useUpdateTypeMutation__
 *
 * To run a mutation, you first call `useUpdateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTypeMutation, { data, loading, error }] = useUpdateTypeMutation({
 *   variables: {
 *      email: // value for 'email'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUpdateTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTypeMutation, UpdateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTypeMutation, UpdateTypeMutationVariables>(UpdateTypeDocument, options);
      }
export type UpdateTypeMutationHookResult = ReturnType<typeof useUpdateTypeMutation>;
export type UpdateTypeMutationResult = Apollo.MutationResult<UpdateTypeMutation>;
export type UpdateTypeMutationOptions = Apollo.BaseMutationOptions<UpdateTypeMutation, UpdateTypeMutationVariables>;
export const GetAllCarsDocument = gql`
    query GetAllCars {
  getAllCars {
    id
    name
    price
    images
    model {
      id
      name
    }
    brand {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllCarsQuery__
 *
 * To run a query within a React component, call `useGetAllCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCarsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCarsQuery, GetAllCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCarsQuery, GetAllCarsQueryVariables>(GetAllCarsDocument, options);
      }
export function useGetAllCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCarsQuery, GetAllCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCarsQuery, GetAllCarsQueryVariables>(GetAllCarsDocument, options);
        }
export type GetAllCarsQueryHookResult = ReturnType<typeof useGetAllCarsQuery>;
export type GetAllCarsLazyQueryHookResult = ReturnType<typeof useGetAllCarsLazyQuery>;
export type GetAllCarsQueryResult = Apollo.QueryResult<GetAllCarsQuery, GetAllCarsQueryVariables>;
export const GetAllCarByMakeDocument = gql`
    query GetAllCarByMake($makeId: Float!) {
  getAllCarByMake(makeId: $makeId) {
    id
    name
    price
    images
    model {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllCarByMakeQuery__
 *
 * To run a query within a React component, call `useGetAllCarByMakeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCarByMakeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCarByMakeQuery({
 *   variables: {
 *      makeId: // value for 'makeId'
 *   },
 * });
 */
export function useGetAllCarByMakeQuery(baseOptions: Apollo.QueryHookOptions<GetAllCarByMakeQuery, GetAllCarByMakeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCarByMakeQuery, GetAllCarByMakeQueryVariables>(GetAllCarByMakeDocument, options);
      }
export function useGetAllCarByMakeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCarByMakeQuery, GetAllCarByMakeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCarByMakeQuery, GetAllCarByMakeQueryVariables>(GetAllCarByMakeDocument, options);
        }
export type GetAllCarByMakeQueryHookResult = ReturnType<typeof useGetAllCarByMakeQuery>;
export type GetAllCarByMakeLazyQueryHookResult = ReturnType<typeof useGetAllCarByMakeLazyQuery>;
export type GetAllCarByMakeQueryResult = Apollo.QueryResult<GetAllCarByMakeQuery, GetAllCarByMakeQueryVariables>;
export const GetAllMakesDocument = gql`
    query GetAllMakes {
  getAllMakes {
    name
    image
    id
  }
}
    `;

/**
 * __useGetAllMakesQuery__
 *
 * To run a query within a React component, call `useGetAllMakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMakesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMakesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMakesQuery, GetAllMakesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMakesQuery, GetAllMakesQueryVariables>(GetAllMakesDocument, options);
      }
export function useGetAllMakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMakesQuery, GetAllMakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMakesQuery, GetAllMakesQueryVariables>(GetAllMakesDocument, options);
        }
export type GetAllMakesQueryHookResult = ReturnType<typeof useGetAllMakesQuery>;
export type GetAllMakesLazyQueryHookResult = ReturnType<typeof useGetAllMakesLazyQuery>;
export type GetAllMakesQueryResult = Apollo.QueryResult<GetAllMakesQuery, GetAllMakesQueryVariables>;
export const GetCarByIdDocument = gql`
    query GetCarById($id: Float!) {
  getCarById(id: $id) {
    name
    bodyType
    brand {
      id
      name
    }
    fuelType
    images
    mileage
    model {
      name
    }
    price
    registration
    transmission
    user {
      id
      name
      surname
      location
      createdAt
      email
      phone
      type
      image
    }
  }
}
    `;

/**
 * __useGetCarByIdQuery__
 *
 * To run a query within a React component, call `useGetCarByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCarByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCarByIdQuery, GetCarByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarByIdQuery, GetCarByIdQueryVariables>(GetCarByIdDocument, options);
      }
export function useGetCarByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarByIdQuery, GetCarByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarByIdQuery, GetCarByIdQueryVariables>(GetCarByIdDocument, options);
        }
export type GetCarByIdQueryHookResult = ReturnType<typeof useGetCarByIdQuery>;
export type GetCarByIdLazyQueryHookResult = ReturnType<typeof useGetCarByIdLazyQuery>;
export type GetCarByIdQueryResult = Apollo.QueryResult<GetCarByIdQuery, GetCarByIdQueryVariables>;
export const GetModelsAllDocument = gql`
    query GetModelsAll {
  getModelsAll {
    name
    id
    brand {
      id
      name
    }
  }
}
    `;

/**
 * __useGetModelsAllQuery__
 *
 * To run a query within a React component, call `useGetModelsAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModelsAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModelsAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetModelsAllQuery(baseOptions?: Apollo.QueryHookOptions<GetModelsAllQuery, GetModelsAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModelsAllQuery, GetModelsAllQueryVariables>(GetModelsAllDocument, options);
      }
export function useGetModelsAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModelsAllQuery, GetModelsAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModelsAllQuery, GetModelsAllQueryVariables>(GetModelsAllDocument, options);
        }
export type GetModelsAllQueryHookResult = ReturnType<typeof useGetModelsAllQuery>;
export type GetModelsAllLazyQueryHookResult = ReturnType<typeof useGetModelsAllLazyQuery>;
export type GetModelsAllQueryResult = Apollo.QueryResult<GetModelsAllQuery, GetModelsAllQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: Float!) {
  getUserById(id: $id) {
    user {
      createdAt
      phone
      location
      name
      surname
      email
      id
      image
      type
      cars {
        id
        name
        images
        price
        model {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserByTypeDocument = gql`
    query GetUserByType($type: String!) {
  getUsersByType(type: $type) {
    name
    surname
    id
    image
    email
    createdAt
    location
    cars {
      name
      id
    }
  }
}
    `;

/**
 * __useGetUserByTypeQuery__
 *
 * To run a query within a React component, call `useGetUserByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetUserByTypeQuery(baseOptions: Apollo.QueryHookOptions<GetUserByTypeQuery, GetUserByTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByTypeQuery, GetUserByTypeQueryVariables>(GetUserByTypeDocument, options);
      }
export function useGetUserByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByTypeQuery, GetUserByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByTypeQuery, GetUserByTypeQueryVariables>(GetUserByTypeDocument, options);
        }
export type GetUserByTypeQueryHookResult = ReturnType<typeof useGetUserByTypeQuery>;
export type GetUserByTypeLazyQueryHookResult = ReturnType<typeof useGetUserByTypeLazyQuery>;
export type GetUserByTypeQueryResult = Apollo.QueryResult<GetUserByTypeQuery, GetUserByTypeQueryVariables>;