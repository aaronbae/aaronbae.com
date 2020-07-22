const prod = {
  DB: "mongodb://aaronbae:kingoftheworld123@cluster0-shard-00-01-ecnt3.mongodb.net:27017,cluster0-shard-00-01-ecnt3.mongodb.net:27017,cluster0-shard-00-02-ecnt3.mongodb.net:27017?replicaSet=Cluster0-shard-0",
  options: {
    ssl: true,
    sslValidate: false,
    dbName: "aaronbaeDB",
    poolSize: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
};

const dev = {
  DB: 'mongodb://localhost:27017/aaronbaeDB',
  options: { useNewUrlParser: true },
  useUnifiedTopology: true
};

module.exports = process.env.NODE_ENV === "development" ? dev : prod;