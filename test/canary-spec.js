const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const assert = chai.assert

describe('Canary test', function () {
    it('the string hello should say hello', function () {
        const hello = "hello"

        hello.should.be.equal("hello")
    })

    it('typeof string should be a string', function () {
        const str = 'anything'

        str.should.be.a('string')
        expect(str).to.be.a('string')
        assert.typeOf(str, 'string')
    })

})
