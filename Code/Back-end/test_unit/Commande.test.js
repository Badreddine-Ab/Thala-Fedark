const supertest = require('supertest')
const app = require('../server')


describe("test for Add commande function", () => {
    //when email and password is missing
    describe("vide input", () => {
        test('vide input ', async () => {
            const response = await supertest(app).post('/graphql').send({
                query: `mutation{
                    AddCommand( prixTota:"", quantite: "",idUser:"") {
                    user {
                        prixTotal
                        quantite
                        idUser
                    }
                }
            }`
            })
            expect(response.body.errors[0].message).toBe('Please remplire tous les champs')
        })
    })

    describe("add test ", () => {
        test('commend ', async () => {
            const response = await supertest(app).post('/graphql').send({
                query: `mutation{
                    AddCommand( prixTota:100, quantite:2,idUser:2) {
                    user {
                        prixTotal
                        quantite
                        idUser
                    }
                }
            }`
            })
            expect(response.body.errors[0].message).toBe(ture)
        })
    })

})