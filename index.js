const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");

dotenv.config();

const PORT = process.env.PORT;

const mongoose = require("mongoose");

//connect DB

mongoose
  .connect(process.env.MONGOOSEDB_RUL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json());

//database seeder router
app.use("/api/seed", databaseSeeder);


//api/users/login
app.use("/api/users", userRoute);

//route for products
app.use("/api/products", productRoute);

//route for orders
app.use("/api/orders", orderRoute);

app.listen(PORT || 8080, () => {
  console.log(`server listening on port ${PORT}`);
});

//mongodb+srv://paulaferreyra24:<l4uNgLZdiJH6uJlb>@cluster0.gmhce.mongodb.net/react-node-app
