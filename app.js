import express from 'express';

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('server is running');
});

app.post('/test', (req, res) => {
    const content = req.body;
    res.status(201).send(content);
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});