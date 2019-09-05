const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos')
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID('5d70dd1a465207f9386a7fa7')
  //     },
  //     {
  //       $set: {
  //         completed: true,
  //         text: 'Eat Breakfast'
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => console.log(result));

  db.collection('Users')
    .findOneAndUpdate(
      {
        _id: ObjectID('5d6fb295662dd516f88a1d7a')
      },
      {
        $inc: { age: 1 },
        $set: { name: 'Karthik' }
      },
      {
        returnOriginal: false
      }
    )
    .then(res => console.log(res));
  // db.close();
});
