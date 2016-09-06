const chai = require('chai')
const supertest = require('supertest')

const app = require('../app')

const should = chai.should()
const api = supertest(app)

describe('Sending a POST to /api/mult', function () {
    describe('should succeed', function () {
        it('in multiplying two numbers together', function(done) {
            api.post('/api/mult')
                .send({
                    num1: 8,
                    num2: 7
                })
                .expect(200)
                .end(function (err, res) {
                    if(err) return done(err)
                    res.body.result.should.be.equal(56)
                    done()
                })
        })
    })
    describe('should fail', function () {
        it('when nothing is sent in ', function (done) {
            api.post('/api/mult')
            .expect(432)
            .end(function (err, res) {
                if (err) return done(err)
                res.body.message.should.be.equal('No data fool')
                done()
            })
        })
    })
})
