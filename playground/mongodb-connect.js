// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed : false
  // },(error,result)=>{
  //   if(error){
  //     return console.log("Unable to insert todo");
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: 'KK',
    age: 24,
    location: 'bangalore'
  },(err,req)=>{
    if(err){
      return console.log('Unable to insert user detail',err);
    }
    console.log(JSON.stringify(req.ops,undefined,2));
  });
  db.close();
});
