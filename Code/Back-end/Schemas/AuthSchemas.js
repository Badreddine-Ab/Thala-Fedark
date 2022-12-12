const { ApolloServer, gql } = require('apollo-server-express');
const User = require('../Models/userModel');
const Role = require('../Models/roleUserModel');
const bycrpt = require('bcryptjs');
const crypto = require('crypto');
const { sendEmail } = require('../Utils/sendEmail');


const typeDefs = gql`
    type User{
        id : Int,
        name : String,
        email : String,
        password : String,
        role : String
    }
    type AuthPayload{
        user : User
        token : String
    }
    type Query{
        hello : String
    }
    type Mutation{
        signup(name : String!, email : String! , password : String!, role : String!) : User
    }
`;

const resolvers = {
    Query: {
        hello: () => "hello world"
    },
    Mutation: {
        signup: async (_, args) => {
            try {
                const { name, email, password, role } = args;
                if (!name || !email || !password || !role) {
                    throw new Error('Please enter all fields');
                }
                const already_exist = await User.findOne({ where: { email } });
                if (already_exist) {
                    throw new Error('Email already exist');
                }
                const roles = await Role.findOne({ where: { role } });
                if (!roles) {
                    throw new Error('Role not exist');
                }
                const salt = await bycrpt.genSalt(10)
                const haschedPassword = await bycrpt.hash(password, salt)
                const user = await User.create({
                    name,
                    email,
                    password: haschedPassword,
                    emailToken: crypto.randomBytes(64).toString('hex'),
                    isVerified: false,
                    roleId: roles.id,
                });
                await sendEmail(user);
                return user;
            } catch (error) {
                throw error;
            }
        }
    }
}


module.exports = { typeDefs, resolvers }