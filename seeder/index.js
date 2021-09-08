require("dotenv").config();
const { Seeder } = require("mongo-seeding");

const config = {
  database: process.env.MONGO_URL + process.env.MONGO_DB,
  dropDatabase: true,
};

const seeder = new Seeder(config);
const path = require("path");
const collections = seeder.readCollectionsFromPath(
  path.resolve("./seeder/data")
);

seeder
  .import(collections)
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log("Error", err);
  });
