import { createElement } from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/createElement("path", {
  d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z",
  fill: "none",
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 32
});

var _ref2 = /*#__PURE__*/createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 32,
  d: "M256 176v160M336 256H176"
});

function SvgAddCircleOutline(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, props), _ref, _ref2);
}

export default SvgAddCircleOutline;
