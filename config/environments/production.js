var express = require('express');

module.exports = function() {
    this.use(express.errorHandler());
    
    this.use(function(req, res, next) {
        res.send(404, 'Sorry cant find that!');
    });
    
    this.set('db-uri', 'mongodb://username:password@localhost:39058/locomotive-azure-boilerplate');
};