/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  rating?: Maybe<Scalars['Float']>;
  stars: Array<Scalars['String']>;
  title: Scalars['String'];
  trailerUrl?: Maybe<Scalars['String']>;
  writers: Array<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
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

export type GetMovieQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMovieQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', id: number, imdbId?: string | null, title: string, description?: string | null, poster?: string | null, year?: number | null, countries: Array<string>, genres: Array<string>, directors: Array<string>, writers: Array<string>, stars: Array<string>, rating?: number | null, trailerUrl?: string | null } };

export type FindMoviesQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type FindMoviesQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Movie', id: number, title: string, poster?: string | null, year?: number | null, genres: Array<string> }> };


export const GetMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imdbId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"countries"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"writers"}},{"kind":"Field","name":{"kind":"Name","value":"stars"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"trailerUrl"}}]}}]}}]} as unknown as DocumentNode<GetMovieQuery, GetMovieQueryVariables>;
export const FindMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}}]}}]}}]} as unknown as DocumentNode<FindMoviesQuery, FindMoviesQueryVariables>;

export const GetMovieDocument = gql`
    query GetMovie($id: Int!) {
  movie(id: $id) {
    id
    imdbId
    title
    description
    poster
    year
    countries
    genres
    directors
    writers
    stars
    rating
    trailerUrl
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const FindMoviesDocument = gql`
    query FindMovies($input: String!) {
  search(input: $input) {
    id
    title
    poster
    year
    genres
  }
}
    `;

/**
 * __useFindMoviesQuery__
 *
 * To run a query within a React component, call `useFindMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMoviesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindMoviesQuery(baseOptions: Apollo.QueryHookOptions<FindMoviesQuery, FindMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMoviesQuery, FindMoviesQueryVariables>(FindMoviesDocument, options);
      }
export function useFindMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMoviesQuery, FindMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMoviesQuery, FindMoviesQueryVariables>(FindMoviesDocument, options);
        }
export type FindMoviesQueryHookResult = ReturnType<typeof useFindMoviesQuery>;
export type FindMoviesLazyQueryHookResult = ReturnType<typeof useFindMoviesLazyQuery>;
export type FindMoviesQueryResult = Apollo.QueryResult<FindMoviesQuery, FindMoviesQueryVariables>;