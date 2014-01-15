module.exports = function routes() {
    
    this.root('home#index');
    
    // Home routes
    this.resources('home', { only: [ 'index'] });
    
    // Account routes
    this.resource('account');
    this.match('register', 'account#new', { via: 'get' });
    this.match('register', 'account#create', { via: 'post' });
    this.match('login', 'account#login', { via: 'get' });
    this.match('login', 'account#authenticate', { via: 'post' });
    this.match('logout', 'account#logout');
};
