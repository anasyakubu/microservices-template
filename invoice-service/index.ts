import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.post('/invoice/create', (req, res) => {

  const { userId, amount } = req.body;
  res.status(201).json({ message: 'Invoice created', invoice: { userId, amount } });
});

app.listen(4001, () => console.log('Invoice Service running on port 4001'));