const { ApolloServer, gql } = require('apollo-server-express');
const User = require('../Models/userModel');
const Role = require('../Models/roleUserModel');
const bycrpt = require('bcryptjs');
const crypto = require('crypto');
const generateToken = require('../Utils/generateToken')
const ls = require('local-storage');
const jwt = require('jsonwebtoken');
const { sendEmail, forgetPassword } = require('../Utils/sendEmail');




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
        login(email : String!, password : String!) : AuthPayload
        foregetPassword(email : String!) : String

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
        },
        // login: async (_, args) => {
        //     try {
        //         const { email, password } = args;
        //         if (!email || !password) {
        //             throw new Error('Please enter all fields');
        //         }
        //         const user = await User.findOne({ where: { email } });
        //         if (!user) {
        //             throw new Error('User not exist');
        //         }
        //         const isMatch = await bycrpt.compare(password, user.password);
        //         if (!isMatch) {
        //             throw new Error('Invalid password');
        //         }
        //         if (user && isMatch && !user.isVerified) {
        //             throw new Error('Please verify your email');
        //         }
        //         if (user && isMatch && user.isVerified) {
        //             var token = generateToken(user.id, user.email, user.name);
        //             ls('token', token);
        //         }
        //         return { user, token };
        //     } catch (error) {
        //         throw error;
        //     }
        // },
        login: async (_, args) => {
            try {
                const { email, password } = args;
                if (!email || !password) {
                    throw new Error('Please enter all fields');
                }
                const user = await User.findOne({ where: { email } });
                if (!user) {
                    throw new Error('User not exist');
                }
                const isMatch = await bycrpt.compare(password, user.password);
                if (!isMatch) {
                    throw new Error('Invalid password');
                }
                if (user && isMatch && !user.isVerified) {
                    throw new Error('Please verify your email');
                }
                if (user && isMatch && user.isVerified) {
                    var token = generateToken(user.id, user.email, user.name);
                    ls('token', token);
                }
                return { user, token };
            } catch (error) {
                throw error;
            }
        },
        foregetPassword: async (_, args) => {
            try {
                const { email } = args;
                if (!email) {
                    throw new Error('email is required');
                }
                const user = await User.findOne({ where: { email } });
                if (!user) {
                    throw new Error('User not exist');
                }
                else {
                    await forgetPassword(user);
                    user.emailToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
                }
            } catch (error) {
                throw error;
            }
        },
    }
}


module.exports = { typeDefs, resolvers }