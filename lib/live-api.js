/**
 * LiveApi main file
 */

const Configuration = require('./configuration'),
    HttpGateway = require('./http-gateway');

class LiveApi {

    /**
     * Create a new LiveAPI client
     * @param {String} privateKey
     * @param {String} publicKey
     * @constructor
     */
    constructor(privateKey, publicKey) {
        this.configuration = new Configuration(privateKey, publicKey);
        this.httpGateway = new HttpGateway(this.configuration);
    }
}

module.exports = LiveApi;