/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type CreateListInput = {
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type List = {
  __typename?: 'List';
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  movies: Array<Movie>;
  owner: User;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String'];
  user: User;
};

export type Movie = {
  __typename?: 'Movie';
  countries: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  directors: Array<Scalars['String']>;
  genres: Array<Scalars['String']>;
  id: Scalars['Int'];
  imdbId?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  providers?: Maybe<Providers>;
  rating?: Maybe<Scalars['Float']>;
  stars: Array<Scalars['String']>;
  title: Scalars['String'];
  trailerUrl?: Maybe<Scalars['String']>;
  writers: Array<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};


export type MovieProvidersArgs = {
  region: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createList: List;
  deleteList: Scalars['Boolean'];
  followUser: Scalars['Boolean'];
  login: LoginOutput;
  pullMovie: Scalars['Boolean'];
  pushMovie: Scalars['Boolean'];
  saveList: Scalars['Boolean'];
  signup: LoginOutput;
  unfollowUser: Scalars['Boolean'];
  unsaveList: Scalars['Boolean'];
  updateList: List;
};


export type MutationCreateListArgs = {
  input: CreateListInput;
};


export type MutationDeleteListArgs = {
  id: Scalars['String'];
};


export type MutationFollowUserArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationPullMovieArgs = {
  listId: Scalars['String'];
  movieId: Scalars['Int'];
};


export type MutationPushMovieArgs = {
  listId: Scalars['String'];
  movieId: Scalars['Int'];
};


export type MutationSaveListArgs = {
  id: Scalars['String'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUnfollowUserArgs = {
  id: Scalars['String'];
};


export type MutationUnsaveListArgs = {
  id: Scalars['String'];
};


export type MutationUpdateListArgs = {
  id: Scalars['String'];
  input: UpdateListInput;
};

export type Provider = {
  __typename?: 'Provider';
  id: Scalars['Int'];
  providerLogoUrl: Scalars['String'];
  providerName: Scalars['String'];
};

export type Providers = {
  __typename?: 'Providers';
  buy?: Maybe<Array<Provider>>;
  flatrate?: Maybe<Array<Provider>>;
  id: Scalars['Int'];
  rent?: Maybe<Array<Provider>>;
};

export type Query = {
  __typename?: 'Query';
  list?: Maybe<List>;
  movie: Movie;
  search: Array<Movie>;
  user?: Maybe<User>;
};


export type QueryListArgs = {
  id: Scalars['String'];
};


export type QueryMovieArgs = {
  id: Scalars['Int'];
};


export type QuerySearchArgs = {
  input: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  photoUrl: Scalars['String'];
};

export type UpdateListInput = {
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  followers: Array<User>;
  following: Array<User>;
  id: Scalars['ID'];
  lists: Array<List>;
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  savedLists: Array<List>;
};

export type ListQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ListQuery = { __typename?: 'Query', list?: { __typename?: 'List', id: string, title: string, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null, year?: number | null }> } | null };

export type MovieQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MovieQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', id: number, imdbId?: string | null, title: string, description?: string | null, poster?: string | null, year?: number | null, countries: Array<string>, genres: Array<string>, directors: Array<string>, writers: Array<string>, stars: Array<string>, rating?: number | null, trailerUrl?: string | null } };

export type SearchQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null, year?: number | null, genres: Array<string> }> };

export type UserListFragment = { __typename?: 'List', id: string, title: string, cover?: string | null, updatedAt: any, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null }> } & { ' $fragmentName'?: 'UserListFragment' };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, name: string, photoUrl: string, following: Array<{ __typename?: 'User', id: string, name: string }>, followers: Array<{ __typename?: 'User', id: string, name: string }>, lists: Array<(
      { __typename?: 'List' }
      & { ' $fragmentRefs'?: { 'UserListFragment': UserListFragment } }
    )>, savedLists: Array<(
      { __typename?: 'List' }
      & { ' $fragmentRefs'?: { 'UserListFragment': UserListFragment } }
    )> } | null };

export const UserListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"List"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}}]}}]}}]} as unknown as DocumentNode<UserListFragment, unknown>;
export const ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]}}]} as unknown as DocumentNode<ListQuery, ListQueryVariables>;
export const MovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Movie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imdbId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"countries"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"writers"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"trailerUrl"}}]}}]}}]} as unknown as DocumentNode<MovieQuery, MovieQueryVariables>;
export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}}]}}]}}]} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;
export const UserDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"savedLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserList"}}]}}]}}]}},...UserListFragmentDoc.definitions]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;