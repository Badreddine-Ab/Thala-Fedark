const {ApolloServer}=require('apollo-server-express');
const Commande = require('../../Models/commandeModel');


module.exports = {
    Query: {
        Querycommande: async ()=> {  
            return await Commande.findAll({})
        } 
    },

    Mutation: {
        AddCommand: async (_ , args) => {
            try{
                let {prixTotal,quantite,idUser}= args
                if(!prixTotal || !quantite || !etat){
                    throw new Error('Please remplire tous les champs')
                }
                return await Commande.create({prixTotal:prixTotal,quantite:quantite,etat:"en attend",idUser:idUser})
            }catch(error){
                throw error
            }
        } 
    }

}

module.exports = { resolverCommand }