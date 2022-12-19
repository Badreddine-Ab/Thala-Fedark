const {ApolloServer}=require('apollo-server-express');
const Commande = require('../../Models/commandeModel');
const user = require('../../Models/userModel');


module.exports = {
    Query: {
        Querycommande: async ()=> {  
            return await Commande.findAll({})
        } 
    },

    Mutation: {
        AddCommand: async (_, args) => {
          try {
            const {prixTotal,quantite,idUser} = args;
            if (!prixTotal || !quantite || !idUser) {
              throw new Error("Please remplire tous les champs");
            }
            return await Commande.create({prixTotal: prixTotal,quantite: quantite,etat: "en attend",userId:idUser});
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

}
