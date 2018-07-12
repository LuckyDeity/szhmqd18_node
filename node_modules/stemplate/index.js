/**
 * Escape the given string of `html`.
 * 
 * Taken from Jade (https://github.com/visionmedia/jade)
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var escapeHtml = function escape(html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

module.exports = function (text, objectHash) {
    text = text || "";
    objectHash = objectHash || {};
    var escapeRegex = /(?:#\{([^}]+)+\})+?/g;
    var escapeReplace = function (placeholder, configVar) {
        if (typeof objectHash[configVar] !== 'undefined') {
          return escapeHtml(objectHash[configVar]);
        } else {
          return escapeHtml(placeholder);
        }
    };
    var literalRegex = /(?:!\{([^}]+)+\})+?/g;
    var literalReplace = function (placeholder, configVar) {
        if (typeof objectHash[configVar] !== 'undefined') {
          return objectHash[configVar];
        } else {
          return placeholder;
        }
    };
    return text
      .replace(escapeRegex, escapeReplace)
      .replace(literalRegex, literalReplace);
};
