const { ApolloServer } = require("apollo-server-express");
const { where, Op } = require("sequelize");
const promotion = require("../../Models/promotionModel");
const user = require("../../Models/userModel");

module.exports = {
  Query: {
    QueryPromotion: async () => {
      return await promotion.findAll({
        order: [["id", "DESC"]],
      });
    },
  },

  Mutation: {
    AddPromotion: async (_, args) => {
      try {
        const { valeur, dateExpiration, token } = args;
       

        // if (!valeur || !dateExpiration || !token)
        //   throw new Error("Please remplire tous les champs");
          const createpromotion = await promotion.create({
            valeur: valeur,
            dateExpiration: dateExpiration,
            token:token,
          });
        //   if(createpromotion)
        return true;
      } catch (error) {
        throw error;
      }
    },
    

    updatePromotion: async (_, args) => {
      try {
        const { id } = args;
        if (await promotion.update( { where: { id: id } }))
          return true;
        else return false;
      } catch (e) {
        throw e;
      }
    },
    deletePromotion: async (_, args) => {
      try {
        if (await promotion.destroy({ where: args })) return true;
        else return false;
      } catch (e) {
        throw e;
      }
    },
  },

};
