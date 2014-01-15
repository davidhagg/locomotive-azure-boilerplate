var locomotive = require('locomotive');
var passport = require('passport');
var authentication = require('connect-ensure-login');
var Controller = locomotive.Controller;
var Account = require('../models/account');
var AccountController = new Controller();

// GET /account
//

AccountController.before('show', authentication.ensureLoggedIn());
AccountController.show = function() {
  this.userName = this.req.user;
  this.render();
};

// GET /register
//

AccountController.new = function() {
  this.render();
};

// GET /login
//

AccountController.login = function() {
  this.render();
};

// POST /register
//

AccountController.create = function() {
    var account = new Account();

    account.email = this.param('email');
    account.password = this.param('password');
    account.name.first = this.param('name.first');
    account.name.last = this.param('name.last');

    var self = this;
    account.save(function(err) {
        if (err)
            return self.redirect(self.urlFor({ action: 'new' }));

        return self.redirect(self.urlFor({ action: 'login' }));
    });
};

// POST /login
//

AccountController.authenticate = function() {
  passport.authenticate('local', {
    successRedirect: this.urlFor({ action: 'show' }),
    failureRedirect: this.urlFor({ action: 'login' }) }
  )(this.__req, this.__res, this.__next);
};

// GET /logout
//

AccountController.logout = function() {
  this.req.logout();
  this.redirect('/');
};

module.exports = AccountController;