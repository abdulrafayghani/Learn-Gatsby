const { gql, ApolloServer } = require('apollo-server-lambda');
const faundadb = require('faunadb'),
  q = faundadb.query;
require('dotenv').config();

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: async () => {
      try {
        const client = new faundadb.Client({
          secret: "fnAD4IW6sbACAQ0wKthWg-tYMCxzhiL8iPyhBZK4",
        });

        const result = await client.query(
          q.Get(q.Ref(q.Collection("products"), "279361562008879621"))
        );
          console.log(result)
        return result.data.name;
      } catch (err) {
        return err.toString();
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler();
