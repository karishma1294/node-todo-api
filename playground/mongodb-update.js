
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').findOneAndUpdate({
  //    _id:new ObjectID('5a37ea115bc22331bc2b1728')
  // },{
  //   $set :{
  //     completed:true
  //   }
  // }).then((result)=>{
  //   console.log(result);
  // });

db.collection('Users').findOneAndUpdate(
{
  name:'K2'
},{
  $set :{
    name:'KK'
  },
  $inc :{
    age :1
  }
},{
  returnOriginal : false
}

).then((result)=>{
  console.log(result);
})



  db.close();
});
