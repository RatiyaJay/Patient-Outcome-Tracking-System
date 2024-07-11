const express = require("express");
const app = express();
const connectDB = require("./config/db");
// Use express.json() to parse JSON request bodies
app.use(express.json());
connectDB();
// Use the authentication routes
app.use(require("./routes/authroutes"));
app.use('/product',require("./routes/productroutes"));
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
