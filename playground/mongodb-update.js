// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new  ObjectID('5b013cce198a835444627a2c')
    // } , {
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:true
    // }).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new  ObjectID('5afe8d89f1ff0e03b1194baa')
    } , {
        $set:{
            name:'Phairoj'
        },
        $inc:{ //	Increments the value of the field by the specified amount.
            age : 1
        }
    },{
        returnOriginal:true
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log('Unable to fetch todos ',err);
    });


     db.close();
});