/**
 * Configuration container
 */

var Configuration = (function() {

    /**
     * Create a new configuration
     * @param {String} privateKey
     * @param {String} publicKey
     * @constructor
     */
    function Configuration(privateKey, publicKey) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }

    return Configuration;

})();

module.exports = Configuration;