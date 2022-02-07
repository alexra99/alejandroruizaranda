"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarExtendedContainer = exports.OpenLinksButton = exports.Logo = exports.NavbarLinkExtended = exports.NavbarLink = exports.NavbarLinkContainer = exports.NavbarInnerContainer = exports.RightContainer = exports.LeftContainer = exports.NavbarContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media (min-width: 700px) {\n    display: none;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 70px;\n  height: 50px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 45px;\n  cursor: pointer;\n  @media (min-width: 700px) {\n    display: none;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px;\n  max-width: 180px;\n  height: auto;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: x-large;\n  font-family: Arial, Helvetica, sans-serif;\n  text-decoration: none;\n  margin: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: x-large;\n  font-family: Arial, Helvetica, sans-serif;\n  text-decoration: none;\n  margin: 10px;\n  @media (max-width: 700px) {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 30%;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 50px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 70%;\n  display: flex;\n  align-items: center;\n  padding-left: 5%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 700px) {\n    height: 80px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarContainer = _styledComponents["default"].nav(_templateObject(), function (props) {
  return props.extendNavbar ? "100vh" : "80px";
});

exports.NavbarContainer = NavbarContainer;

var LeftContainer = _styledComponents["default"].div(_templateObject2());

exports.LeftContainer = LeftContainer;

var RightContainer = _styledComponents["default"].div(_templateObject3());

exports.RightContainer = RightContainer;

var NavbarInnerContainer = _styledComponents["default"].div(_templateObject4());

exports.NavbarInnerContainer = NavbarInnerContainer;

var NavbarLinkContainer = _styledComponents["default"].div(_templateObject5());

exports.NavbarLinkContainer = NavbarLinkContainer;
var NavbarLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject6());
exports.NavbarLink = NavbarLink;
var NavbarLinkExtended = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject7());
exports.NavbarLinkExtended = NavbarLinkExtended;

var Logo = _styledComponents["default"].img(_templateObject8());

exports.Logo = Logo;

var OpenLinksButton = _styledComponents["default"].button(_templateObject9());

exports.OpenLinksButton = OpenLinksButton;

var NavbarExtendedContainer = _styledComponents["default"].div(_templateObject10());

exports.NavbarExtendedContainer = NavbarExtendedContainer;