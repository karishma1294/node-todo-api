
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //deleteMany

  // db.collection('Todos').deleteMany({text:'Eat dinner'}).then((result)=>{
  //   console.log(result);
  // });


  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result)=>{
  //   console.log(result);
  // })

  //fineOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('5a37edaf1eff8b0a44581b71')
  }).then((result)=>{
    console.log(result);
  })

  db.collection('Users').deleteMany({name: 'KK'}).then((result)=>{
    console.log("Deleted Users");
    console.log(result);
  })
  db.close();
});
