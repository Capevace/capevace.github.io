module.exports.ready = function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

module.exports.addClass = function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else
    element.className += ' ' + className;
};

module.exports.removeClass = function removeClass(element, className) {
  if (element.classList)
    element.classList.remove(className);
  else
    element.className = element.className.replace(
      new RegExp(
        '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
        'gi'
      ),
      ' '
    );
};
