import express from 'express';
import bodyParser from 'body-parser';
import parties from './routes/parties';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/parties', parties);

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Resources not found'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`the server has started on ${PORT}`));

export default app;
