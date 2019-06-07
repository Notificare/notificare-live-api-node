/**
 * Http Gateway to process Live API calls
 */

const Crypto = require('./util/crypto');

class HttpGateway  {

    /**
     * Create a new Http Gateway
     * @param {Configuration} configuration
     * @constructor
     */
    constructor(configuration) {
        this.configuration = configuration;
    }

    /**
     * Return a verification string to be sent as a response to the LiveAPI
     * @param {String} publicKey
     * @param {String} challenge
     * @returns {String}
     */
    verify(publicKey, challenge) {
        if (publicKey === this.configuration.publicKey) {
            return Crypto.generateHmacBase64String(challenge, this.configuration.privateKey);
        } else {
            throw new Error("invalid public key");
        }
    }

    /**
     * Validate the signature of a payload
     * @param {String} publicKey
     * @param {String} payload
     * @param {String} signature
     * @returns {Boolean}
     */
    validate(publicKey, payload, signature) {
        if (publicKey === this.configuration.publicKey) {
            const calculatedHmac = Crypto.generateHmacBase64String(payload, this.configuration.privateKey);
            return Crypto.compareHmac(calculatedHmac, signature);
        } else {
            throw new Error("invalid public key");
        }
    }
}
module.exports = HttpGateway;