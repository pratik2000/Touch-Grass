const resolvers = {
    Query: {
      getDestination: async (parent, args, context) =>
      await context.models.Destination.queries.getAll(),
      
      getUsers: async (parent, args, context) =>
      await context.models.Destination.queries.getUsers(),

      getUserDestination: async (parent, args, context) =>
      await context.models.Destination.queries.getUserDestination(),
    },
    Mutation: {
      addDestination: async (parent, args, context) =>
      await context.models.Destination.mutations.addDestination(JSON.parse(JSON.stringify(args.destination))),

      addUser: async (parent, args, context) =>
      await context.models.Destination.mutations.addUser(JSON.parse(JSON.stringify(args.user))),
    },
  };
  export default resolvers;