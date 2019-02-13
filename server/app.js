import express from 'express';
import bodyParser from 'body-parser';
// import Party from './controllers/party';
// import Office from './controllers/office';
import parties from './routes/party';
import offices from './routes/office';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/parties', parties);
app.use('/api/v1/offices', offices);

// app.post('/api/v1/parties', Party.createParty);
// app.get('/api/v1/parties', Party.getAllParties);
// app.get('/api/v1/parties/:id', Party.getSpecificParty);
// app.put('/api/v1/parties/:id', Party.updateParty);
// app.delete('/api/v1/parties/:id', Party.deleteParty);
// app.post('/api/v1/offices', Office.createPoliticalOffice);
// app.get('/api/v1/offices', Office.getAllPoliticalOffices);
// app.get('/api/v1/offices/:id', Office.getSpecificOffice);
/* app.use('/api/v1/parties', parties); */

/* app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Resources not found'
  });
}); */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`the server has started on ${PORT}`));

export default app;
