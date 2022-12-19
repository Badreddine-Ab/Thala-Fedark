const { ApolloServer } = require("apollo-server-express");
const Commande = require("../Models/commandeModel");
const user = require("../Models/userModel");

const resolvers = {
  Query: {
    Querycommande: async () => {
      return await Commande.findAll({});
    },
  },

  Mutation: {
    AddCommand: async (_, args) => {
      try {
        const { prixTotal, quantite,id } = args;

        if (!prixTotal || !quantite ||id ) {
          throw new Error("Please remplire tous les champs");
        }
        return await Commande.create({
          prixTotal: prixTotal,
          quantite: quantite,
          etat: "en attend",
          userId:id
        });
        
      } catch (error) {
        throw error;
      }
    },


    updateCommand:async(_,args)=>{
        try{
          const {id,etat}=  args
          if(await Commande.update({id: id},{ etat:etat})) return true

        }catch(e){
            throw e
        }
    //    await updateCommand(id: ID, etat: Boolean): Boolean

    }
  },
};

module.exports = { resolvers };
