import React__default from 'react';
import PropTypes from 'prop-types';
import SvgAdd from './add.js';
import SvgAddSharp from './add-sharp.js';
import SvgAddOutline from './add-outline.js';
import SvgAddCircle from './add-circle.js';
import SvgAddCircleSharp from './add-circle-sharp.js';
import SvgAddCircleOutline from './add-circle-outline.js';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */

function lowerCase(str) {
  return str.toLowerCase();
}

var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]; // Remove all non-word characters.

var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */

function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.splitRegexp,
      splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a,
      _b = options.stripRegexp,
      stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b,
      _c = options.transform,
      transform = _c === void 0 ? lowerCase : _c,
      _d = options.delimiter,
      delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length; // Trim the delimiter from around the output string.

  while (result.charAt(start) === "\0") start++;

  while (result.charAt(end - 1) === "\0") end--; // Transform each token independently.


  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */

function replace(input, re, value) {
  if (re instanceof RegExp) return input.replace(re, value);
  return re.reduce(function (input, re) {
    return input.replace(re, value);
  }, input);
}

function pascalCaseTransform(input, index) {
  var firstChar = input.charAt(0);
  var lowerChars = input.substr(1).toLowerCase();

  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return "_" + firstChar + lowerChars;
  }

  return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
  if (options === void 0) {
    options = {};
  }

  return noCase(input, __assign({
    delimiter: "",
    transform: pascalCaseTransform
  }, options));
}

function dotCase(input, options) {
  if (options === void 0) {
    options = {};
  }

  return noCase(input, __assign({
    delimiter: "."
  }, options));
}

function paramCase(input, options) {
  if (options === void 0) {
    options = {};
  }

  return dotCase(input, __assign({
    delimiter: "-"
  }, options));
}

var Icons = {};
Icons["Add"] = SvgAdd;
Icons["AddSharp"] = SvgAddSharp;
Icons["AddOutline"] = SvgAddOutline;
Icons["AddCircle"] = SvgAddCircle;
Icons["AddCircleSharp"] = SvgAddCircleSharp;
Icons["AddCircleOutline"] = SvgAddCircleOutline;

function classNames(_ref) {
  var name = _ref.name,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  var base = 'icon ion-icon';
  return "".concat(base, " ").concat(name, " ").concat(className);
}

function IonIcon(props) {
  var name = props.name,
      className = props.className,
      rest = _objectWithoutProperties(props, ["name", "className"]);

  var Component = Icons[pascalCase(name)];
  return /*#__PURE__*/React__default.createElement(Component, _extends({}, rest, {
    className: classNames({
      name: name,
      className: className
    })
  }));
}

IonIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(Icons).map(paramCase))
};
IonIcon.defaultProps = {
  name: ''
};

export default IonIcon;
