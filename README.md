# Notificare Live API SDK for NodeJS

[![NPM](https://nodei.co/npm/notificare.png)](https://nodei.co/npm/notificare/)

[![npm version](https://badge.fury.io/js/notificare.svg)](http://badge.fury.io/js/notificare) [![Build Status](https://travis-ci.org/Notificare/notificare-live-api-node.png?branch=master)](https://travis-ci.org/Notificare/notificare-live-api-node)

## Installing

```sh
npm install notificare
```

## Usage

```javascript
const Notificare = require('notificare');

const privateKey = 'xxxxxx',
    publicKey = 'yyyyyy';

const liveApiClient = new Notificare.LiveApi(privateKey, publicKey);

const verificationResponse = liveApiClient.httpGateway.verify(incomingPublicKey, challenge);
```


## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.