const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod;

async function connect() {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
  };
  await mongoose.connect(uri, mongooseOpts);
}

async function close() {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
}

async function clear() {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
}

module.exports = {
  connect,
  close,
  clear,
};
