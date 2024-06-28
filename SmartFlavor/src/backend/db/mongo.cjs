const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

const connectToDatabase = async () => {
    if (!db) {
        await client.connect();
        db = client.db('SmartFlavor');
        console.log('Connected to MongoDB');
    }
    return db;
};

module.exports = { connectToDatabase };
