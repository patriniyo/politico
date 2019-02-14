import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Offices endpoints test', () => {
  describe('POST/ create office', () => {
    const office = {
      name: 'Democratic Patry',
      type: 'Parliament'
    };
    it('should create an office', (done) => {
      chai.request(app)
        .post('/api/v1/offices/')
        .send(office)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.status.should.equal(201);
          res.body.data[0].should.be.an('object');
          done();
        });
    });
    it('should return error office is already created', (done) => {
      chai.request(app)
        .post('/api/v1/offices/')
        .send(office)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.status.should.equal(400);
          res.body.should.have.property('error');
          done();
        });
    });
  });
  describe('GET/ Parties', () => {
    it('should return all offices', (done) => {
      chai.request(app)
        .get('/api/v1/offices/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal(200);
          done();
        });
    });
    it('should return specific office', (done) => {
      chai.request(app)
        .get('/api/v1/offices/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal(200);
          res.body.data.should.be.an('array');
          done();
        });
    });
    it('should return Office Not found', (done) => {
      chai.request(app)
        .get('/api/v1/offices/2')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.status.should.equal(404);
          res.body.should.have.property('error');
          done();
        });
    });
  });
});