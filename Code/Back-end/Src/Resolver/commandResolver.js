const { ApolloServer } = require("apollo-server-express");
const { where, Op } = require("sequelize");
const Commande = require("../../Models/commandeModel");
const user = require("../../Models/userModel");
const product_commande = require("../../Models/produitCommandeModel");
const Product = require("../../Models/productModel");

module.exports = {
  Query: {
    Querycommande: async () => {
      return await Commande.findAll({
        order: [["id", "DESC"]],
        include:user ,
        raw: true,
        nest: true,
      });
    },
    StatistiqueAchats: async (_, args) => {
      let { StartDate, EndDate } = args;
      if (!StartDate || !EndDate)
        throw new Error("Please remplire tous les Date");
      if (StartDate > EndDate)
        throw new Error("The end date cannot be earlier than the start date");
      return await Commande.count({
        where: { createdAt: { [Op.between]: [StartDate, EndDate] } },
      });
    },
  },

  Mutation: {
    AddCommand: async (_, args) => {
      try {
        const { prixTotal, quantite, idUser, product } = args;
        const products = await Product.findByPk(product);
        if (!prixTotal || !quantite || !idUser)
          throw new Error("Please remplire tous les champs");
        if (products.stock < quantite) throw new Error("greater quantity!");

        const Commandes = await Commande.create({
          prixTotal: prixTotal,
          quantite: quantite,
          etat: "en attend",
          userId: idUser,
        });
        await product_commande.create({
          productId: product,
          commandeId: Commandes.id,
        });
        if (Commandes) {
          await Product.update({stock: products.stock - quantite},{ where: { id: product }});
        }

        return true;
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
  },
};
