import gql from "graphql-tag";
export const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    inStock: Boolean!
    price: Float!
  }
  type Query {
    allProducts: [Product!]!
    procuctById(id: ID!): Product!
  }
  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product
    deleteProduct(id: ID!): Boolean
    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      inStock: Boolean
    ): Product
  }
`;
