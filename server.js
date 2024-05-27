const express = require('express');
const app = express();
const cors = require('cors');

const port = 3010;
const host = '127.0.0.1';

const mongoose =require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://kavinduedirisinghe7:4fyXL8xa7CREB8c3@cluster0.iigdoxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connect = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log("connected to mongodb")

    }
    catch(error){
        console.log(error)

    }
};
connect();





const server =app.listen(port,host,()=>{
    console.log(`Server is running on port ${port}`);
});



app.use('/api', router);
