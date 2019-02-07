import express from 'express';
import bodyParser from 'body-parser';
import Party from './controllers/party';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/v1/parties', Party.createParty);

/* app.use('/api/v1/parties', parties); */

/* app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Resources not found'
  });
}); */

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.info(`the server has started on ${PORT}`));

export default app;
