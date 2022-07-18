var util = require('./util');

module.exports = function work(workContainerId) {
  var container = document.querySelector('#' + workContainerId + ' .work-items');
  var viewMoreButton = (container) ? container.querySelector('#view-more-work-button') : null;

  if (viewMoreButton)
    viewMoreButton
      .addEventListener('click', function (e) {
        e.preventDefault();
        util.addClass(container, 'work-expanded');
      });
};
