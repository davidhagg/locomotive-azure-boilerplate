var express = require('express');

module.exports = function() {
    this.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

    this.set('db-uri', 'mongodb://username:password@localhost:39058/locomotive-azure-boilerplate');
    this.set('view options', {
        pretty: true
    });
};