const fs = require("fs")
const md5 = require("md5")
const util = require("util")

const add = async(user)=>{
    const fileName = "users.json"
    user.password = md5(user.password)
    const writeFile = util.promisify(fs.writeFile)
    try{
        const data = await writeFile(fileName,JSON.stringify(user)) 
        console.log(`user save successfully`)

    }catch(e){
        console.error(e)
    }
    
}


exports.addUser = add;