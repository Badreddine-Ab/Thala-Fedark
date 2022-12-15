const {ApolloServer}=require('apollo-server-express');
const Commande = require('../Models/commandeModel');


const resolverCommand = {
    Query: {
        Querycommande: async ()=> {  
            return await Commande.findAll({})
        } 
    },

    Mutation: {
        AddCommand: async (_,args) => {
            try{
                const{prixTotal,quantite,etat,idUser}=args
                if(!prixTotal || !quantite || !etat){
                    throw new Error('Please remplire tous les champs')
                }
                return await Commande.create({prixTotal:prixTotal,quantite:quantite,etat:etat,idUser:idUser})
            }catch(error){
                throw error
            }
        } 
    }

}

module.exports = { resolverCommand }