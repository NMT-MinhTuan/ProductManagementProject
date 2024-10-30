const express = require('express');
const routes = require("./Routers/Clients/index_router")
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.set("views","./Views");
app.set("view engine", "pug");
app.use(express.static('public'));

routes(app);

app.listen(port,()=>{
    console.log(`Đang hoạt động ở port ${port}`);
})