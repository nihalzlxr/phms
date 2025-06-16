const express= require('express');
const cors = require('cors');
const connection = require('./Connection/Mongoose');
const router = require('./Router');


 
connection()

const app = express();
app.use(express.json());
app.use(cors());
app.use("/",router);

Port=8000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});