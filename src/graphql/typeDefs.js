import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    release: Int!
    director: Director
    budget: String
    actors: [Actor]
    rating: Int!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
    directors: [Director]!
    director(name: String!): Director
  }

  type Mutation {
    addMovie(title: String!, release: Int!, director: String, budget: String, actor: String rating: Int!): Movie!
  }

  type Actor {
    name: String
    birthday: String
    country: String
    " should directors not be part of the Movie? "
    director: [Director]
  }

  type Director {
    name: String
    birthday: String
    country: String
  }
`;

export default typeDefs;