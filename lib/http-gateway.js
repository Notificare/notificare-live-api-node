/**
 * Http Gateway to process Live API calls
 */

var Crypto = require('./util/crypto');

var HttpGateway = (function() {

    /**
     * Create a new Http Gateway
     * @param {Configuration} configuration
     * @constructor
     */
    function HttpGateway(configuration) {
        this.configuration = configuration;
    }

    /**
     * Return a verification string to be sent as a response to the LiveAPI
     * @param {String} publicKey
     * @param {String} challenge
     * @returns {String}
     */
    HttpGateway.prototype.verify = function(publicKey, challenge) {
        if (publicKey == this.configuration.publicKey) {
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
    HttpGateway.prototype.validate = function(publicKey, payload, signature) {
        if (publicKey == this.configuration.publicKey) {
            var calculatedHmac = Crypto.generateHmacBase64String(payload, this.configuration.privateKey);
            return Crypto.compareHmac(calculatedHmac, signature);
        } else {
            throw new Error("invalid public key");
        }
    }

    return HttpGateway;
})();

module.exports = HttpGateway;