import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
try{
    console.log('server starting ... ');
    const port = process.env.PORT;
    app.listen(port, () => console.log(`Server running on port ${port}`));
}catch(e){
    console.error(e);
    process.exit(1);
}