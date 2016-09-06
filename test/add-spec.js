const chai = require('chai')
const supertest = require('supertest')

const app = require('../app')

const should = chai.should()
const api = supertest(app)

describe('Sending a POST to /api/add', function () {
    describe('should succeed', function () {
        it('in adding two numbers together', function (done) {
            api.post('/api/add')
                .send({
                    num1: 5,
                    num2: 2
                })
                .expect(200)
                .end(function (err, res) {
                    if(err) return done(err)
                    res.body.result.should.be.equal(7)
                    done()
                })
        })
    })
    describe('should fail', function () {
        it('when nothing is sent in ', function (done) {
            api.post('/api/add')
            .expect(432)
            .end(function (err, res) {
                if(err) return done(err)
                res.body.message.should.be.equal('No data fool')
                done()
            })
        })
    })
})
