if(process.env.NODE_ENV === "production"){
    global.config = require("./prod.json");
}else {
    global.config = require("./dev.json");
};

console.log(`DataBase Name : ${global.config.database.name}`)