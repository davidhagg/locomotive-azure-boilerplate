var express = require('express');
var ejslocals = require('ejs-locals');
var passport = require('passport');
var mongoose = require('mongoose');
var locomotiveMongoose = require('locomotive-mongoose');

module.exports = function() {
    this.set('views', __dirname + '/../../app/views');
    this.engine('ejs', ejslocals);
    this.set('view engine', 'ejs');

    this.use(express.logger());
    this.use(express.cookieParser());
    this.use(express.bodyParser());
    this.use(express.session({secret: 'BE86F40878A44A9E84F788DAEED236DE'}));
    
    this.use(passport.initialize());
    this.use(passport.session());

    this.use(this.router);
    this.use(express.static(require('path').resolve(__dirname + "/../../public")));

    this.datastore(locomotiveMongoose);
};