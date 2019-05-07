const request = require('supertest')
const assert = require('chai').assert

const url = 'http://localhost:5000';

describe('Test GET API Register Employess', () => {

  describe('GET Employee', () => {

    it('test employees', (done) => {
      request(url)
        .get('/employees/')
        .end((err, res) => {
          assert.isNull(err);
          assert.equal(res.status, 200)
          assert.equal(res.body[0].name, 'TesterPortoMeetup')
          assert.equal(res.body[0].nif, 999888777)
          assert.equal(res.body[0].address, 'MTP')
          done()
        })
    });

    it('test employees not found', (done) => {
      request(url)
        .get('/employees/?name=TesterQAS')
        .end((err, res) => {
          assert.isNull(err);
          assert.equal(res.status, 404)
          done()
        })
    });

    it('test employees non-existent route', (done) => {
      request(url)
        .get('/portmeetup')
        .end((err, res) => {
          assert.isNull(err);
          assert.equal(res.status, 404)
          done()
        })
    });
  });
});
