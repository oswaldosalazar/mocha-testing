const chai = require('chai')
const supertest = require('supertest')

const app = require('../app')

const should = chai.should()
const api = supertest(app)

describe('Sending a POST to /api/subs', function () {
    describe('should succeed', function () {
        it('in substracting two numbers together', function(done) {
            api.post('/api/subs')
                .send({
                    num1: 10,
                    num2: 2
                })
                .expect(200)
                .end(function (err, res) {
                    if(err) return done(err)
                    res.body.result.should.be.equal(8)
                    done()
                })
        })
    })
    describe('should fail', function () {
        it('when nothing is sent in ', function (done) {
            api.post('/api/subs')
            .expect(432)
            .end(function (err, res) {
                if(err) return done(err)
                res.body.message.should.be.equal('No data fool')
                done()
            })
        })
    })
})
