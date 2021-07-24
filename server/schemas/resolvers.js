const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { userId } = context;

const resolvers = {
  Query: {
    getAll: () =>
            new Promise(
                async (resolve, reject) =>
                    await Destination.find({}, (err, destination) =>
                        err ? reject(err) : resolve(destination))),
        getUsers: () =>
            new Promise(
                async (resolve, reject) =>
                    await User.find({}, (err, users) =>
                        err
                            ? reject(err)
                            : resolve(users))),
        getUserDestination: (id) =>
            new Promise(
                async (resolve, reject) =>
                    await Destination.find({ owner_id: id }, (err, destinations) =>
                            err ? reject(err) : resolve(destinations)
                              )),
                              
    getDestination: async (parent, args, context) =>
    await context.models.Destination.queries.getAll(),
    
    getUsers: async (parent, args, context) =>
    await context.models.Destination.queries.getUsers(),

    getUserDestination: async (parent, args, context) =>
    await context.models.Destination.queries.getUserDestination(),
  },

  Mutation: {

    /**this post mutation is likely to throw an error review later */
    post: async (parent, args, context, info) =>
    await context.prisma.link.create({data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } }
    }}),

    addDestination: async (parent, args, context) =>
    await context.models.Destination.mutations.addDestination(JSON.parse(JSON.stringify(args.destination))),

    addUser: async (parent, args, context) =>
    await context.models.Destination.mutations.addUser(JSON.parse(JSON.stringify(args.user))),

    addUser: async (parent, { firstName, lastName, username, email, password }, context) => {
      const user = await User.create({ firstName, lastName, username, email, password });
      const token = signToken(user);    
      return { token, user };
    },

    signin: async(parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      
      if(!user) {
        throw new AuthenticationError('the email or password is incorrect!');
      }
      const correctPw = await user.isCorrectPassword(password);
      
      if (!correctPw) {
        throw new AuthenticationError('wrong email or Password!');
      }
      
      const token = signToken(user);
      return { token, user };
    },

  },
};

module.exports = resolvers;