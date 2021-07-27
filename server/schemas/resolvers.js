const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');
//const  db = require('./config/connection');

const resolvers = {
    Query: {
        greeting: () => {
            return "hello from  TutorialsPoint !!!"
        },

        me: async (parent, arg, context) => {

            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be signed in!');
        },

        users: async () => {
            return User.find();
        },

        user: async (parent, { name }) => {
            return User.findOne({ name });
        },

        
        //resolver function for students returns list
        //getAllUsers: () => db.users.list,
        
        getUser: async (parent, { name }) => {
            return User.findOne({ name });
        },

        
      },

    Mutation: {

        addUser: async (parent, { name, email, password}, context) => {

            const user = await User.create({ name, email, password }).catch((e) => {
                console.log("Error...");
            })

            const token = signToken(user);
            
            return { token, user };
        },

        signIn: async (parent, { email, password }, context) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password!');
            }

            const token = signToken(user);
            return { token, user };
        },

        deleteUser: async (parent, { email, password }, context) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (correctPw) {
                //user and passowrd matches...delete user
                const user = await User.deleteOne({ email });
            } else {
                throw new AuthenticationError('Incorrect Username or Password!');
            }

            const token = signToken(user);
            return { token, user };
        },

        updatePassword: async (parent, { email, password, newpassword }, context) => {
            var user = await User.findOne({ email });
            
            if (newpassword) {
                if (!user) {
                    throw new AuthenticationError('No user with this email found!');
                }
                const correctPw = await user.isCorrectPassword(password);
                var newpasswordHash = await user.GetPassWordHash(password);

                if (correctPw) {
                    //const token = signToken(user);

                    return User.findOneAndUpdate(
                        { _id: user.id },
                        {
                            //$set: { email: newpassword  },
                            //$set: { password: newpassword },
                            $set: { password: newpasswordHash },
                        },
                        {
                            new: true,
                            runValidators: true,
                        }
                    );

                } else {
                    throw new AuthenticationError('Incorrect Username or Password!');
                }
            } else {
                throw new AuthenticationError('Empty Password not accepted');
            }

            return user;

            //const token = signToken(user);
            //return { token, user };
        },

        

    },      
};

module.exports = resolvers;
