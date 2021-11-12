module.exports = {
  swagger_options: {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Plant Project API",
        version: "1.0.0",
        description: "API For Plant Catalog",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  },
};
