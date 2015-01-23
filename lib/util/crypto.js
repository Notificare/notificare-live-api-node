var crypto = require('crypto');

var HMAC_SHA256_ALGORITHM = 'sha256';

function generateHmac(data, key, encoding) {
    var hmac = crypto.createHmac(HMAC_SHA256_ALGORITHM, key);
    hmac.update(data);
    return hmac.digest(encoding);
}

function generateHmacBase64String(data, key) {
    return generateHmac(data, key, 'base64');
}

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