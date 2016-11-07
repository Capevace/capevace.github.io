var smoothScroll = require('smooth-scroll');
var slider = require('./slider');
var work = require('./work');
var ready = require('./util').ready;
// var backgroundCanvas = require('./background-canvas');

smoothScroll.init({
  offset: 40,
});

ready(function () {
  slider('project-slider');
  work('work');
  // backgroundCanvas('background-canvas-container');
});
