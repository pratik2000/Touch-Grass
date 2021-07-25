mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/touch-grass', {
  
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,

 
}).then(
  () => {console.log("connection sucessful!");}
).catch((e) => {
  console.log("no connection");
} 
  
);
