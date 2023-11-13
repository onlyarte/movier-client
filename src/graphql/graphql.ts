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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type CreateListInput = {
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type List = {
  __typename?: 'List';
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  movies: Array<Movie>;
  owner: User;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  importMoviesFromImdb: Scalars['Boolean'];
  pullMovie: Scalars['Boolean'];
  pushMovie: Scalars['Boolean'];
  saveList: Scalars['Boolean'];
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


export type MutationImportMoviesFromImdbArgs = {
  imdbIds: Array<Scalars['String']>;
  listId: Scalars['String'];
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

export type ListDataFragment = { __typename?: 'List', id: string, title: string, description?: string | null, owner: { __typename?: 'User', id: string, name: string }, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null, year?: number | null }> };

export type ListQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ListQuery = { __typename?: 'Query', list?: { __typename?: 'List', id: string, title: string, description?: string | null, owner: { __typename?: 'User', id: string, name: string }, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null, year?: number | null }> } | null };

export type CreateListMutationVariables = Exact<{
  input: CreateListInput;
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList: { __typename?: 'List', id: string } };

export type DeleteListMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteListMutation = { __typename?: 'Mutation', deleteList: boolean };

export type UpdateListMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateListInput;
}>;


export type UpdateListMutation = { __typename?: 'Mutation', updateList: { __typename?: 'List', id: string, title: string, description?: string | null } };

export type SaveListMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type SaveListMutation = { __typename?: 'Mutation', saveList: boolean };

export type UnsaveListMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnsaveListMutation = { __typename?: 'Mutation', unsaveList: boolean };

export type PushMovieMutationVariables = Exact<{
  listId: Scalars['String'];
  movieId: Scalars['Int'];
}>;


export type PushMovieMutation = { __typename?: 'Mutation', pushMovie: boolean };

export type PullMovieMutationVariables = Exact<{
  listId: Scalars['String'];
  movieId: Scalars['Int'];
}>;


export type PullMovieMutation = { __typename?: 'Mutation', pullMovie: boolean };

export type ProviderDataFragment = { __typename?: 'Provider', id: number, providerName: string, providerLogoUrl: string };

export type ProvidersDataFragment = { __typename?: 'Providers', id: number, flatrate?: Array<{ __typename?: 'Provider', id: number, providerName: string, providerLogoUrl: string }> | null, rent?: Array<{ __typename?: 'Provider', id: number, providerName: string, providerLogoUrl: string }> | null, buy?: Array<{ __typename?: 'Provider', id: number, providerName: string, providerLogoUrl: string }> | null };

export type MovieProvidersQueryVariables = Exact<{
  id: Scalars['Int'];
  region: Scalars['String'];
}>;


export type MovieProvidersQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', id: number, providers?: { __typename?: 'Providers', id: number, flatrate?: Array<{ __typename?: 'Provider', id: number, providerName: string, providerLogoUrl: string }> | null, rent?: Array<{ __typename?: 'Provider', id: number, providerName: string, providerLogoUrl: string }> | null, buy?: Array<{ __typename?: 'Provider', id: number, providerName: string, providerLogoUrl: string }> | null } | null } };

export type MovieQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MovieQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', id: number, imdbId?: string | null, title: string, description?: string | null, poster?: string | null, year?: number | null, countries: Array<string>, genres: Array<string>, directors: Array<string>, writers: Array<string>, stars: Array<string>, rating?: number | null, trailerUrl?: string | null } };

export type SearchQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null, year?: number | null, genres: Array<string> }> };

export type UserListDataFragment = { __typename?: 'List', id: string, title: string, cover?: string | null, updatedAt: any, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null }> };

export type UserDataFragment = { __typename?: 'User', id: string, email: string, name: string, photoUrl: string, following: Array<{ __typename?: 'User', id: string, name: string }>, followers: Array<{ __typename?: 'User', id: string, name: string }>, lists: Array<{ __typename?: 'List', id: string, title: string, cover?: string | null, updatedAt: any, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null }> }>, savedLists: Array<{ __typename?: 'List', id: string, title: string, cover?: string | null, updatedAt: any, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null }> }> };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, name: string, photoUrl: string, following: Array<{ __typename?: 'User', id: string, name: string }>, followers: Array<{ __typename?: 'User', id: string, name: string }>, lists: Array<{ __typename?: 'List', id: string, title: string, cover?: string | null, updatedAt: any, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null }> }>, savedLists: Array<{ __typename?: 'List', id: string, title: string, cover?: string | null, updatedAt: any, movies: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null }> }> } | null };

export const ListDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"List"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]} as unknown as DocumentNode<ListDataFragment, unknown>;
export const ProviderDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerName"}},{"kind":"Field","name":{"kind":"Name","value":"providerLogoUrl"}}]}}]} as unknown as DocumentNode<ProviderDataFragment, unknown>;
export const ProvidersDataFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProvidersData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Providers"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flatrate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderData"}}]}}]}},...ProviderDataFragmentDoc.definitions]} as unknown as DocumentNode<ProvidersDataFragment, unknown>;
export const UserListDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserListData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"List"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}}]}}]}}]} as unknown as DocumentNode<UserListDataFragment, unknown>;
export const UserDataFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserListData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"savedLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserListData"}}]}}]}},...UserListDataFragmentDoc.definitions]} as unknown as DocumentNode<UserDataFragment, unknown>;
export const ListDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListData"}}]}}]}},...ListDataFragmentDoc.definitions]} as unknown as DocumentNode<ListQuery, ListQueryVariables>;
export const CreateListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateListMutation, CreateListMutationVariables>;
export const DeleteListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteListMutation, DeleteListMutationVariables>;
export const UpdateListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateListInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateListMutation, UpdateListMutationVariables>;
export const SaveListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SaveListMutation, SaveListMutationVariables>;
export const UnsaveListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnsaveList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unsaveList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<UnsaveListMutation, UnsaveListMutationVariables>;
export const PushMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PushMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pushMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listId"}}},{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}}]}]}}]} as unknown as DocumentNode<PushMovieMutation, PushMovieMutationVariables>;
export const PullMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PullMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listId"}}},{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}}]}]}}]} as unknown as DocumentNode<PullMovieMutation, PullMovieMutationVariables>;
export const MovieProvidersDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MovieProviders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"region"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"region"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProvidersData"}}]}}]}}]}},...ProvidersDataFragmentDoc.definitions]} as unknown as DocumentNode<MovieProvidersQuery, MovieProvidersQueryVariables>;
export const MovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Movie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imdbId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"countries"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"writers"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"trailerUrl"}}]}}]}}]} as unknown as DocumentNode<MovieQuery, MovieQueryVariables>;
export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}}]}}]}}]} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;
export const UserDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserData"}}]}}]}},...UserDataFragmentDoc.definitions]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;