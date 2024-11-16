import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
try{

    app.get('/receive', async (req, res) => {
          return res.status(200).send('RabbitMQ channel is not initialized !!!! OKK updated very nice updated once again');
    });


    app.get('/db', async (req, res) => {
        try {
          const conn = await mongoose.connect(process.env.MONGODB_URI);
          if (conn) {
            res.status(200).send(`Connected to DB. Environment: ${process.env.NODE_ENV}, Port: ${process.env.PORT}, DB: ${process.env.MONGODB_URI} `);
          }
        } catch (err) {
          res.send(`Environment: ${process.env.NODE_ENV}, Port: ${process.env.PORT}, DB: ${process.env.MONGODB_URI}, Error: ${err}`);
        }
    })   

    console.log('server starting ... ');
    const port = process.env.PORT;
    app.listen(port, () => console.log(`Server running on port ${port}`));
}catch(e){
    console.error(e);
    process.exit(1);
}