/**
 * Cryptographic utility functions
 */
var crypto = require('crypto');

var HMAC_SHA256_ALGORITHM = 'sha256';

/**
 * Generate a HMAC for the given data
 * @param {String} data
 * @param {String} key
 * @param {String} encoding
 * @returns {String|Buffer} will return a Buffer if no encoding given
 */
function generateHmac(data, key, encoding) {
    var hmac = crypto.createHmac(HMAC_SHA256_ALGORITHM, key);
    hmac.update(data);
    return hmac.digest(encoding);
}

/**
 * Generate a Base64 encoded HMAC for given data
 * @param {String} data
 * @param {String} key
 * @returns {String}
 */
function generateHmacBase64String(data, key) {
    return generateHmac(data, key, 'base64');
}

/**
 * Compare HMACs
 * @param {String|Buffer} hmac1
 * @param {String|Buffer} hmac2
 * @returns {Boolean}
 */
function compareHmac(hmac1, hmac2) {
    if (Buffer.isBuffer(hmac1) && Buffer.isBuffer(hmac2)) {
        return (hmac1.toString('base64') == hmac2.toString('base64'));
    } else if ('string' == typeof hmac1 && 'string' == typeof hmac2) {
        return (hmac1 == hmac2);
    }
    return false;
}

module.exports = {
    generateHmac: generateHmac,
    generateHmacBase64String: generateHmacBase64String,
    compareHmac: compareHmac
};