const express = require("express");
const path = require("path");
const app = express();

/* To Parse JSON Requests */
app.use(express.json());
/* To Parse Requests as String or Array */
app.use(express.urlencoded({ extended: false }));
/* Set Public Folder To Store Publicly Availabel Files and Images  */
app.use(express.static(path.join(__dirname, "public")));

/* PORT That The Server Runs On */
const PORT = process.env.PORT || 3000;

/* Listen To Port and Start Server */
app.listen(PORT, () => {
  console.log(`Server Started At Port: ${PORT}`);
});
