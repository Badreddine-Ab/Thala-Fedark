const { ApolloServer } = require("apollo-server-express");
const { where, Op } = require("sequelize");
const Commande = require("../../Models/commandeModel");
const user = require("../../Models/userModel");

module.exports = {
  Query: {
    Querycommande: async () => {
      return await product_commande.findAll({
        order: [["id", "DESC"]],
        include:[
          {model: Product ,required: true},
          {model: Commande,required: true,include:user}
        ],
        raw: true,
        nest: true,
      });
    },
    StatistiqueAchats: async (_, args) => {
      let { StartDate, EndDate } = args;
      if (!StartDate || !EndDate) throw new Error("Please remplire tous les Date");
      if (StartDate > EndDate) throw new Error("The end date cannot be earlier than the start date");
      return await Commande.count({ where: { createdAt: { [Op.between]: [StartDate, EndDate]}}});
    },
  },

  Mutation: {
    AddCommand: async (_, args) => {
      try {
        const {quantite, idUser, product } = args;
        const products = await Product.findByPk(product);
        if ( !quantite || !idUser)
          throw new Error("Please remplire tous les champs");
        if (products.stock < quantite) throw new Error("greater quantity!");

        const Commandes = await Commande.create({
          prixTotal: quantite*products.prix,
          quantite: quantite,
          etat: "en attend",
          userId: idUser,
        });
      } catch (error) {
        throw error;
      }
    },

    updateCommand: async (_, args) => {
      try {
        const { id, etat } = args;
        if (await Commande.update({ etat: etat }, { where: { id: id } }))
          return true;
        else return false;
      } catch (e) {
        throw e;
      }
    },
    deleteCommande: async (_, args) => {
      try {
        if (await Commande.destroy({ where: args })) return true;
        else return false;
      } catch (e) {
        throw e;
      }
    },
  },

  Subscription: {
    Selectcommande: async () => {
      return await Commande.findAll({
        order: [["id", "DESC"]],
        include: user,
        raw: true,
        nest: true,
      });
   
    
  },
  }
};
