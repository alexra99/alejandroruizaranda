"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = exports.FooterLink = exports.Row = exports.Column = exports.Container = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nfont-size: 24px;\ncolor: #fff;\nmargin-bottom: 40px;\nfont-weight: bold;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ncolor: #fff;\nmargin-bottom: 20px;\nfont-size: 18px;\ntext-decoration: none;\n\n&:hover {\n\tcolor: green;\n\ttransition: 200ms ease-in;\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(185px, 1fr));\ngrid-gap: 20px;\n\n@media (max-width: 1000px) {\n\tgrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(200px, 1fr));\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\ntext-align: left;\nmargin-left: 60px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmax-width: 500px;\n\tmargin: 0 auto;\n\t/* background: red; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\npadding: 15px 60px;\nbackground: black;\nposition: absolute;\nbottom: 0;\nwidth: 100%;\n\n\n@media (max-width: 700px) {\n\tpadding: 30px 30px;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents["default"].div(_templateObject());

exports.Box = Box;

var Container = _styledComponents["default"].div(_templateObject2());

exports.Container = Container;

var Column = _styledComponents["default"].div(_templateObject3());

exports.Column = Column;

var Row = _styledComponents["default"].div(_templateObject4());

exports.Row = Row;

var FooterLink = _styledComponents["default"].a(_templateObject5());

exports.FooterLink = FooterLink;

var Heading = _styledComponents["default"].p(_templateObject6());

exports.Heading = Heading;