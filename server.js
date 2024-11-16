import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
try{

    app.get('/receive', async (req, res) => {
          return res.status(200).send('RabbitMQ channel is not initialized !!!! OKK');
    });

    console.log('server starting ... ');
    const port = process.env.PORT;
    app.listen(port, () => console.log(`Server running on port ${port}`));
}catch(e){
    console.error(e);
    process.exit(1);
}