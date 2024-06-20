import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('Connected!'));;

const collectionName = 'users';
const documents: { name: string }[] = [];

for (let i = 0; i < 10_000_000; i++) {
  const randomString = Math.random().toString(36).substring(2, 10);
  documents.push({ name: randomString });
}

// insert на уровне 6-8к запросов в секунду происходит

mongoose.connection.collection(collectionName)
    .insertMany(documents).then((result: mongoose.InsertManyResult<Document>) => {
        console.log(`Inserted ${result.insertedCount} documents`);
    }).catch((err: mongoose.CallbackError) => {
        console.error(err);
    });