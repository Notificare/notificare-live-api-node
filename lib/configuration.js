/**
 * Configuration container
 */

class Configuration {

    /**
     * Create a new configuration
     * @param {String} privateKey
     * @param {String} publicKey
     * @constructor
     */
    constructor(privateKey, publicKey) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }

}

module.exports = Configuration;