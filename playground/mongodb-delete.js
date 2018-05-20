// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // });
    //findOne and Delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // });

    // db.collection('Users').deleteMany({name:'Phairoj'});
    // new ObjectID('5afe9d9510ee5804559ed23b')}
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5afe9d9510ee5804559ed23b')}).then((res)=>{
        console.log(JSON.stringify(res,undefined,2));
    },(err) =>{
        console.log('Unable to fetch User ',err);
    });

     db.close();
});