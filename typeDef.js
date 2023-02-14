import { gql } from "apollo-server-express";

const typeDefs = gql`
  """
  Un usuario registrado en el sistema
  """
  type User {
    id: ID
    username: String
    email: String
    password: String
  }

  """
  Consultas disponibles
  """
  type Query {
    """
    Obtiene todos los usuarios registrados
    """
    getAllUsers: [User]

    """
    Obtiene un usuario por ID
    """
    getUserById(id: ID!): User
  }

  """
  Mutaciones disponibles
  """
  type Mutation {
    """
    Crea un nuevo usuario
    """
    createUser(username: String!, email: String!, password: String!): User

    """
    Elimina un usuario existente
    """
    deleteUser(id: ID!): User

    """
    Actualiza los detalles de un usuario existente
    """
    updateUser(id: ID!, username: String, email: String, password: String): User
  }
`;

export default typeDefs;
