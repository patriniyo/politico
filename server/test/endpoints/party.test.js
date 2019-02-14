import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('parties endpoints test', () => {
  describe('Invalid_Endpoints', () => {
    it('should return Error Ressource not Found', (done) => {
      chai.request(app)
        .get('/api/v1/Invalid-path/')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.status.should.equal(404);
          done();
        });
    });
  });
  describe('POST/ create party', () => {
    const party = {
      name: 'Democratic Patry',
      hqAddress: 'Kigal',
      logoUrl: '/logo.jpeg'
    };
    it('should create a political party', (done) => {
      chai.request(app)
        .post('/api/v1/parties/')
        .send(party)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.status.should.equal(201);
          res.body.data[0].should.be.an('object');
          done();
        });
    });
    it('should return error party is already created', (done) => {
      chai.request(app)
        .post('/api/v1/parties/')
        .send(party)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.status.should.equal(400);
          res.body.should.have.property('error');
          done();
        });
    });
  });
  describe('GET/ Parties', () => {
    it('should return all parties', (done) => {
      chai.request(app)
        .get('/api/v1/parties/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal(200);
          done();
        });
    });
    it('should return specific party', (done) => {
      chai.request(app)
        .get('/api/v1/parties/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal(200);
          res.body.data.should.be.an('array');
          done();
        });
    });
    it('should return Party Not found', (done) => {
      chai.request(app)
        .get('/api/v1/parties/2')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.status.should.equal(404);
          res.body.should.have.property('error');
          done();
        });
    });
  });

  describe('PATCH/ Parties', () => {
    const party = {
      name: 'Republican Party',
      hqAddress: 'Kigal',
      logoUrl: '/logo.jpeg'
    };
    it('should update the party', (done) => {
      chai.request(app)
        .patch('/api/v1/parties/1')
        .send(party)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal(200);
          done();
        });
    });
    it('should return error party not found!', (done) => {
      chai.request(app)
        .patch('/api/v1/parties/invalid_party')
        .send(party)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.status.should.equal(404);
          done();
        });
    });
  });
  describe('DELETE/ Parties', () => {
    it('should delete the party', (done) => {
      chai.request(app)
        .delete('/api/v1/parties/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal(200);
          done();
        });
    });
    it('should return the party not found ', (done) => {
      chai.request(app)
        .delete('/api/v1/parties/1')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.status.should.equal(404);
          done();
        });
    });
  });
});


