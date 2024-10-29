const express = require('express');
const routes = require("./Routers/Clients/index_router")
const app = express();
const port = 3000;

app.set("views","./Views");
app.set("view engine", "pug");

routes(app);

app.listen(port,()=>{
    console.log(`Đang hoạt động ở port ${port}`);
})