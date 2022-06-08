require("dotenv").config();
const express = require("express");
const app = express();

;(async () => {
app.use("/test", (req, res) => {
  res.send("This is a message from the test endpoint on the server!");
});

app.use(require("./middleware/headers"));
const controllers = require("./controllers");
app.use(express.json());
 /* insert controllers here */

    app.listen(process.env.PORT, () => {
        console.log(`[Server]: App is listening at port: ${process.env.PORT}`);
    });
})();