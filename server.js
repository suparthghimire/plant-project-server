const express = require("express");
const path = require("path");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const app = express();
const YAML = require("yamljs");
/* To Parse JSON Requests */
app.use(express.json());
/* To Parse Requests as String or Array */
app.use(express.urlencoded({ extended: false }));
/* Set Public Folder To Store Publicly Availabel Files and Images  */
app.use(express.static(path.join(__dirname, "public")));

/* PORT That The Server Runs On */
const PORT = process.env.PORT || 3000;

/* Swagger UI Documentation */
// const swagger_docs = swaggerJsDoc(require("./config").swagger_options);
const swagger_docs = YAML.load("./swagger-docs.yaml");

/* Routes */
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swagger_docs));

app.use("/admin/", require("./routes/admin"));

/* Listen To Port and Start Server */
app.listen(PORT, () => {
  console.log(`Server Started At Port: ${PORT}`);
});
