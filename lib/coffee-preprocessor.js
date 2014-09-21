var coffee = require('broccoli-coffee'),
    extend = require('underscore').extend;

function CoffeePreprocessor(options) {
  this.name = 'ember-cli-coffeescript';
  this.ext = 'js';
  this.options = options || {};
}

CoffeePreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  var options = extend(this.options,
  {
    bare: true,
    srcDir: inputPath,
    destDir: outputPath
  });

  return coffee(tree, this.options);
};

module.exports = CoffeePreprocessor;