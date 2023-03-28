const fs = require('fs');
const path = require('path');
const crypto = require('crypto'); // comes with node


exports.encryptPassword = (initiatorPassword) => {
    //read your cert to a buffer
    const certFile = fs.readFileSync(path.join(__dirname, '../ProductionCertificate.cer'));

    //create X509Certificate from the buffer
    const cert = new crypto.X509Certificate(certFile);

    //extract public key from X509Certificate
    const publicKey = cert.publicKey
    // console.log(publicKey.export({ format: 'pem', type: 'spki' }))

  
    //create arrayBufferView from the password
    const encoder = new TextEncoder();
    const arrayBuffer = encoder.encode(initiatorPassword).buffer;
    const arrayBufferView = new Uint8Array(arrayBuffer);

  // encrypt your password
    securityCredential = crypto.publicEncrypt(publicKey, arrayBufferView).toString('base64');
    console.log(securityCredential);

    return securityCredential;
}

