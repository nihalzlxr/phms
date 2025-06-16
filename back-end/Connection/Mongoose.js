const mongoose= require('mongoose');


const connection = async () => { 
    try{
        const connect=await mongoose.connect('mongodb+srv://cevhostelmess05:cevhostelmess05@cluster0.gywnenk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-shard-0&ssl=true')
        console.log('MongoDB connected successfully'); 
    }
    catch(err){
        console.log('MongoDB connection failed', err);
    }} 

    module.exports=connection;   