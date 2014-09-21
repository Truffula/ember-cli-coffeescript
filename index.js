'use strict';
var path = require('path');
var CoffeePreprocessor = require('./lib/coffee-preprocessor');

function CoffeescriptAddon(project) {
  this._project = project;
  this.name     = 'Ember CLI Coffeescript Addon';
}

CoffeescriptAddon.prototype.blueprintsPath = function() {
  return path.join(__dirname, 'blueprints');
};

CoffeescriptAddon.prototype.included = function(app) {
  var options = app.options;

  this.app = app;

  options.coffeeOptions = options.coffeeOptions || {};

  // Roll the coffeelintOptions and coffeeOptions into one to pass them through.

  if (options.coffeelintOptions && !options.coffeeOptions.coffeelintOptions) {
    options.coffeeOptions.coffeelintOptions = options.coffeelintOptions;
    delete options.coffeelintOptions;
  }

  var plugin = new CoffeePreprocessor(app.options.coffeeOptions);

  this.app.registry.add('js', plugin);
};

// This is just here because it was required in ember-cli v0.0.37.
// To be removed when compatibility breaks.
CoffeescriptAddon.prototype.treeFor = function() {};

module.exports = CoffeescriptAddon;