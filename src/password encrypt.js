const fs = require('fs');
const path = require('path');
const crypto = require('crypto'); // comes with node


exports.encryptPassword=(initiatorPassword)=>{
    //read your cert to a buffer
    const certFile = fs.readFileSync(path.join(__dirname, '../my_certificate.cer'));

    //create X509Certificate from the buffer
    const cert = new crypto.X509Certificate(certFile);

    //extract public key from X509Certificate
    const publicKey=cert.publicKey

    // encrypt your password
    securityCredential = crypto.publicEncrypt(publicKey,initiatorPassword).toString('base64');
    console.log(securityCredential);

    return securityCredential;
}

