var LiveApi = require('../lib/live-api');
    expect = require('chai').expect;

describe('HttpGateway', function() {

    var data = 'some simple test data',
        data2 = 'some other simple test data',
        privateKey = 'a test key',
        publicKey = 'another test key',
        expected = 'ddDzXOU6EMrITLgRKBIbhBAHxWAZBUj1nTk9Exs5PNE=',
        httpGateway = new LiveApi(privateKey, publicKey).httpGateway;



    describe('when verifying a Live API call', function() {

        it('should return the expected hmac', function () {
            var hmac = httpGateway.verify(publicKey, data);
            expect(hmac).to.equal(expected);
        });

        it('should throw an error for non-matching public key', function () {
            var test = function() {
                var hmac = httpGateway.verify('xxxxxxx', data);
            }
            expect(test).to.throw(Error);
        });

    });

    describe('when validating a Live API call', function() {

        it('should return true for matching signature', function () {
            var response = httpGateway.validate(publicKey, data, expected);
            expect(response).to.be.true;
        });

        it('should return false for non-matching signature', function () {
            var response = httpGateway.validate(publicKey, data, 'AAAA');
            expect(response).to.not.be.true;
        });

        it('should return false for tampered data', function () {
            var response = httpGateway.validate(publicKey, data + '\n', expected);
            expect(response).to.not.be.true;
        });

        it('should throw an error for non-matching public key', function () {
            var test = function() {
                var response = httpGateway.validate('xxxxxxx', data, expected);
            }
            expect(test).to.throw(Error);
        });

    });

});
