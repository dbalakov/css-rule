var css = require('css');

module.exports = function cssRules(cssString) {
    var result = [];
    (css.parse(cssString).stylesheet.rules || []).forEach(function(rule) {
        var rules = (cssRules.RULE ? cssRules.RULE(rule) : rule) || rule;
        result = result.concat(Array.isArray(rules) ? rules : [ rules ]);
    });

    return css.stringify({ stylesheet: { rules: result } });
};