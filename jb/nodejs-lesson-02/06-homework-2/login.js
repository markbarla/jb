const fs = require('fs')
const util = require('util')
const md5 = require(`md5`)
const verify = async (user)=>{
    const fileName = "users.json"
    const readFile = util.promisify(fs.readFile)

    try{
        const userFromFile = JSON.parse(await readFile(fileName))
        if(user.name === userFromFile.name ||  md5(user.password) === userFromFile.password ){
            console.log(`the user is same life in the file`)
        }
        else{
            console.log('there is no similarity between the user in file and user')
        }
    }catch(e){
        console.error(e)
    }
}


exports.verify = verify;