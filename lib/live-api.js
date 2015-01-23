/**
 * LiveApi main file
 */

var Configuration = require('./configuration'),
    HttpGateway = require('./http-gateway');

var LiveApi = (function() {

    /**
     * Create a new LiveAPI client
     * @param {String} privateKey
     * @param {String} publicKey
     * @constructor
     */
    function LiveApi(privateKey, publicKey) {
        this.configuration = new Configuration(privateKey, publicKey);
        this.httpGateway = new HttpGateway(this.configuration);
    }

    return LiveApi;

})();

module.exports = LiveApi;