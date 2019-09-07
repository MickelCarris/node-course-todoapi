const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = '5d72486d9a168b25c0cbd404';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({ _id: id }).then(todos => console.log('todos', todos));

// Todo.findOne({
//   _id: id
// }).then(todo => console.log('todo', todo));

// Todo.findById(id)
//     .then(todo => {
//       if (!todo) {
//         return console.log('Id not found');
//       }
//       console.log('todo By Id', todo);
//     })
//     .catch(e => console.log(e));

let id = '5d70f899c7677535942c3f83';

if (!ObjectID.isValid(id)) {
  console.log('Invalid ID');
} else {
  User.findById(id)
    .then(user => {
      if (!user) {
        return console.log(`No user found with id: ${id}`);
      }
      console.log('User', JSON.stringify(user, undefined, 2));
    })
    .catch(e => console.log(e));
}
