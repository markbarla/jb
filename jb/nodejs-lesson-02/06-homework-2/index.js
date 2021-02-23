const {verify} = require('./login')
const {addUser} = require('./register')

const user = {name:"Moishe",password:"123"}

addUser({...user})//we need to send copy of the object else the password will change when i do user.password = md5(user.password) because it referance
verify(user)
