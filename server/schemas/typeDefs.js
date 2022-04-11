const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: User
    }
    input saveBookInput {
        model: String
        description: String
        image: String
        carId: ID!
    }
    type User {
            _id: ID
            username: String
            email: String
            carCount: Int
            savedCars: [Cars]
    }
    
    type Car {
        model: String
        description: String
        image: String
        carId: ID
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: String!, password: String!) : Auth
        addUser(username: String!, email: String!, password: String!) : Auth
        saveCar(car: saveCarInput) : User
        removeCar(carId: String!) : User
    }
    `;

    module.exports = typeDefs;