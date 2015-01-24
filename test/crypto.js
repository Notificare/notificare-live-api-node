var Crypto = require('../lib/util/crypto');
    expect = require('chai').expect;

describe('HMAC', function() {

    var data = 'some simple test data';
    var data2 = 'some other simple test data';
    var key = 'a test key';
    var expected = 'ddDzXOU6EMrITLgRKBIbhBAHxWAZBUj1nTk9Exs5PNE=';

    describe('when generating a HMAC', function() {

        it('should generate the expected hmac', function () {
            var hmac = Crypto.generateHmacBase64String(data, key);
            expect(hmac).to.equal(expected);
        });
    });

    describe('when comparing HMAC Strings', function() {

        it('should return true for equal HMAC', function () {
            var hmac1 = Crypto.generateHmacBase64String(data, key);
            var hmac2 = Crypto.generateHmacBase64String(data, key);
            var compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });

        it('should return false for non-equal HMAC', function () {
            var hmac1 = Crypto.generateHmacBase64String(data, key);
            var hmac2 = Crypto.generateHmacBase64String(data, key);
            var compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });
    });

    describe('when comparing HMAC Buffers', function() {

        it('should return true for equal HMAC', function() {
            var hmac1 = Crypto.generateHmac(data, key);
            var hmac2 = Crypto.generateHmac(data, key);
            var compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });

        it('should return false for non-equal HMAC', function() {
            var hmac1 = Crypto.generateHmac(data, key);
            var hmac2 = Crypto.generateHmac(data2, key);
            var compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.not.be.true;
        });

    });

    describe('when comparing HMAC Buffers with HMAC Strings', function() {

        it('should return true for equal HMAC', function() {
            var hmac1 = Crypto.generateHmacBase64String(data, key);
            var hmac2 = Crypto.generateHmac(data, key);
            var compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });

        it('should return false for non-equal HMAC', function() {
            var hmac1 = Crypto.generateHmacBase64String(data, key);
            var hmac2 = Crypto.generateHmac(data2, key);
            var compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.not.be.true;
        });

    });
});
