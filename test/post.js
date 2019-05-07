const request = require('supertest')
const assert = require('chai').assert

const url = 'http://localhost:5000';

let fullemployee = {
  'name':'Tester Porto Meetup',
  'nif':233566899,
  'address':'PTM 35'
};

let employeeName = {
  'nif':233566899,
  'address':'PTM 35'
};

let fullemployeeNif = {
  'name':'Tester Porto Meetup',
  'address':'PTM 35'
};

describe('Test POST API Register Employess', () => {
  
  describe('POST Employee', () => {
    
    it('test post full employees', (done) => {
      request(url)
      .post('/employees')
      .set('Content-type', 'application/json')
      .send(fullemployee)
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 201)
        assert.equal(res.body.name, 'Tester Porto Meetup')
        assert.equal(res.body.nif, 233566899)
        assert.equal(res.body.address, 'PTM 35')
        done()
      })
    });
    
    it('test post employees without name', (done) => {
      request(url)
      .post('/employees')
      .set('Content-type', 'application/json')
      .send(employeeName)
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 400)
        assert.equal(res.body, 'name is required.')
        done()
      })
    });
    
    it('test post employees without nif', (done) => {
      request(url)
      .post('/employees')
      .set('Content-type', 'application/json')
      .send(fullemployeeNif)
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 400)
        assert.equal(res.body, 'nif is required.')
        done()
      })
    });
  });
});