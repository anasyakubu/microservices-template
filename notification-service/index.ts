const express = require('express');
const bodyParser = require('body-parser');
import { Request, Response } from "express";

const app = express();
app.use(bodyParser.json());

app.post('/notify/email', (req: Request, res: Response) => {
  const { to, subject, message } = req.body;
  console.log(`Sending email to ${to} | Subject: ${subject} | Message: ${message}`);
  res.status(200).json({ message: 'Email sent' });
});

app.listen(4002, () => console.log('Notification Service running on port 4002'));