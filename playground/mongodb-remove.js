const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '5b0675ad22fb6e972a30e341'}).then((todo)=>{

// })
// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5b0675ad22fb6e972a30e341').then((todo)=>{
    console.log(todo);
});