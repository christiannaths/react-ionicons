'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

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

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref = /*#__PURE__*/React.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 32,
  d: "M256 112v288M400 256H112"
});

function SvgAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    strokeWidth: "64px",
    stroke: "currentColor"
  }, props), _ref);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$1 = /*#__PURE__*/React.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeWidth: 32,
  d: "M256 112v288M400 256H112"
});

function SvgAddSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    strokeWidth: "64px",
    stroke: "currentColor"
  }, props), _ref$1);
}

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var _ref$2 = /*#__PURE__*/React.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 32,
  d: "M256 112v288M400 256H112"
});

function SvgAddOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    strokeWidth: "64px",
    stroke: "currentColor"
  }, props), _ref$2);
}

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var _ref$3 = /*#__PURE__*/React.createElement("path", {
  d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"
});

function SvgAddCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    strokeWidth: "64px",
    stroke: "currentColor"
  }, props), _ref$3);
}

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var _ref$4 = /*#__PURE__*/React.createElement("path", {
  d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm96 224h-80v80h-32v-80h-80v-32h80v-80h32v80h80z"
});

function SvgAddCircleSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    strokeWidth: "64px",
    stroke: "currentColor"
  }, props), _ref$4);
}

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var _ref$5 = /*#__PURE__*/React.createElement("path", {
  d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z",
  fill: "none",
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 32
});

var _ref2 = /*#__PURE__*/React.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 32,
  d: "M256 176v160M336 256H176"
});

function SvgAddCircleOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    strokeWidth: "64px",
    stroke: "currentColor"
  }, props), _ref$5, _ref2);
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
      className = _ref$className === void 0 ? "" : _ref$className;
  var base = "icon ion-icon";
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
  name: ""
};

exports.IonIcon = IonIcon;
exports.default = IonIcon;
