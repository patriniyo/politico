import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('parties endpoints test', () => {
  describe('GET/ invalid path', () => {
    it('Should return resource not found', (done) => {
      chai.request(app)
        .get('/invalid_path')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.status.should.equal(404);
          res.body.should.have.property('error').equal('Resources not found');
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
});
