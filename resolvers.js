import UserModel from './models/userModel.js';

const resolvers = {
  Query: {
    getAllUsers: async () => UserModel.find(),
    getUserById: async (_, { id }) => UserModel.findById(id),
  },
  Mutation: {
    createUser: async (_, args) => {
      const newUser = await UserModel.create(args);
      return newUser;
    },
    deleteUser: async (_, { id }) => {
      const deletedUser = await UserModel.findByIdAndDelete(id);
      return deletedUser;
    },
    updateUser: async (_, { id, ...args }) => {
      const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        args,
        { new: true }
      );
      if (!updatedUser) {
        throw new Error(`El usuario con id ${id} no ha sido encontrado`);
      }
      return updatedUser;
    },
  },
};

export default resolvers;