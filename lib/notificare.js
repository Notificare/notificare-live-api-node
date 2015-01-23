var HttpGateway = require('./http-gateway');


module.exports = {
    httpGateway: function() {
        return new HttpGateway();
    }
};