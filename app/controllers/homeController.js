var locomotive = require('locomotive');
var Controller = locomotive.Controller;

var HomeController = new Controller();

// GET /
//

HomeController.index = function() {
  this.render();
};

module.exports = HomeController;