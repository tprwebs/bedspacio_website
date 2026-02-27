import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json({message: 'Hello world!'});
    // console.log('Hello World!');
})


app.listen(5000, () => {
    console.log('Server running in http://localhost:5000')
})
