const Role = require('../Models/roleUserModel')
const roles = ['Manager','client']

async function creatRoleDefalut (){
    let count = await Role.count({});
    if(count == 0){
        for(let i = 0 ; i < roles.length ; i++){
            const role = new Role({role: roles[i]})
            await role.save()
        }
    }
}

module.exports = creatRoleDefalut