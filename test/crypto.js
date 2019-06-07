const Crypto = require('../lib/util/crypto');
    expect = require('chai').expect;

describe('HMAC', function() {

    const data = 'some simple test data';
    const data2 = 'some other simple test data';
    const key = 'a test key';
    const expected = 'ddDzXOU6EMrITLgRKBIbhBAHxWAZBUj1nTk9Exs5PNE=';

    describe('when generating a HMAC', function() {

        it('should generate the expected hmac', function () {
            const hmac = Crypto.generateHmacBase64String(data, key);
            expect(hmac).to.equal(expected);
        });
    });

    describe('when comparing HMAC Strings', function() {

        it('should return true for equal HMAC', function () {
            const hmac1 = Crypto.generateHmacBase64String(data, key);
            const hmac2 = Crypto.generateHmacBase64String(data, key);
            const compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });

        it('should return false for non-equal HMAC', function () {
            const hmac1 = Crypto.generateHmacBase64String(data, key);
            const hmac2 = Crypto.generateHmacBase64String(data, key);
            const compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });
    });

    describe('when comparing HMAC Buffers', function() {

        it('should return true for equal HMAC', function() {
            const hmac1 = Crypto.generateHmac(data, key);
            const hmac2 = Crypto.generateHmac(data, key);
            const compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });

        it('should return false for non-equal HMAC', function() {
            const hmac1 = Crypto.generateHmac(data, key);
            const hmac2 = Crypto.generateHmac(data2, key);
            const compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.not.be.true;
        });

    });

    describe('when comparing HMAC Buffers with HMAC Strings', function() {

        it('should return true for equal HMAC', function() {
            const hmac1 = Crypto.generateHmacBase64String(data, key);
            const hmac2 = Crypto.generateHmac(data, key);
            const compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.be.true;
        });

        it('should return false for non-equal HMAC', function() {
            const hmac1 = Crypto.generateHmacBase64String(data, key);
            const hmac2 = Crypto.generateHmac(data2, key);
            const compare = Crypto.compareHmac(hmac1, hmac2);
            expect(compare).to.not.be.true;
        });

    });
});
