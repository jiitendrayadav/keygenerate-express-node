var express = require('express');
var app = express(); 
var fs = require('fs');

function PublicKey() {
    var publickey;
    fs.readFile('./your public key file path', (err, data) => {
        (err) => {
            throw err;
        }
        publickey = ddata;
    })
    return publickey;
}

function PrivateKey() {
    var privatekey;
    fs.readFile('./your private key file path', (err, data) => {
        (err) => {
            throw err;
        }
        privatekey = ddata;
    })
    return privatekey;
}

app.get('/' ,(req, res) => {
 
  var yourkey = {
        public: PublicKey(),
        private: PrivateKey()
    }
      
})
