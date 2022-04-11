const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({_id: context.user._id});
            }
            throw new AuthenticationError('Not logged in')
        }
    },
    Mutation: {
        addUser: async (parent, {username, email, password }) => {
            const user = await User.create({username, email, password});
            const token = signToken(user);

            return {token, user} ;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);
            return {token, user};
        },
        saveCar: async (parent, {car}, context) => {
            if (context.user){
                const userUpdated = await User.findOneAndUpdate(
                    {_id: context.user.id},
                    { $push: {savedCars: car}},
                    { new:true }
                )
                return userUpdated;
            }
            throw new AuthenticationError('You need to be logged in')

        },
        removeCar: async (parent, {carId}, context) => {
            if (context.user) {
                const userUpdated = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: {savedCars: {carId: carId}}},
                    {new:true }
                )
                return userUpdated;
            }
        }
    }
}

module.exports = resolvers;