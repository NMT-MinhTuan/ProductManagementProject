const product_router = require("./product_router.js");
const home_router = require("./home.router.js");
const contact_router = require("./contact.router.js");
module.exports = (applica)=>{
    applica.use('/',home_router);
    applica.use("/products",product_router);
    applica.use("/contacts",contact_router);
}

