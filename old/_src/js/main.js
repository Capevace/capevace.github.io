var slider = require('./slider');
var work = require('./work');
var ready = require('./util').ready;
// var backgroundCanvas = require('./background-canvas');

ready(function () {
  slider('project-slider');
  work('work');
  //setupFadeOut();
  //
  // backgroundCanvas('background-canvas-container');
});