import { createElement } from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 32,
  d: "M256 112v288M400 256H112"
});

function SvgAddOutline(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, props), _ref);
}

export default SvgAddOutline;
