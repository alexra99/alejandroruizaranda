"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ms = _interopRequireDefault(require("../img/portImages/ms.png"));

var _react_styled = _interopRequireDefault(require("../img/portImages/react_styled.png"));

var _maya = _interopRequireDefault(require("../img/portImages/maya-4.jpg"));

var _maya2 = _interopRequireDefault(require("../img/portImages/maya-3.jpg"));

var _maze = _interopRequireDefault(require("../img/maze.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var portfolios = [{
  id: 1,
  category: 'Python',
  image: _maze["default"],
  link1: 'https://github.com/alexra99/MAZE_SOLVER',
  title: 'MAZE SOLVER',
  tec: 'Python, Json',
  text: 'Programa para generar y resolver laberintos mediante Inteligencia Artificial.'
}, {
  id: 2,
  category: 'Python',
  image: _maya2["default"],
  link1: 'https://www.google.com',
  link2: 'https://www.google.com',
  title: 'How To Animate In Maya',
  text: 'Number one Animation Application'
}, {
  id: 3,
  category: 'Javascript',
  image: _maya2["default"],
  link1: 'https://www.google.com',
  link2: 'https://www.google.com',
  title: 'How To Animate In Maya',
  text: 'Number one Animation Application'
}, {
  id: 4,
  category: 'Animation',
  image: _maya["default"],
  link1: 'https://www.google.com',
  link2: 'https://www.google.com',
  title: 'How To Use Blender',
  text: 'Free Animation Software'
}, {
  id: 5,
  category: 'Animation',
  image: _maya["default"],
  link1: 'https://www.google.com',
  link2: 'https://www.google.com',
  title: 'How To Use Blender',
  text: 'Free Animation Software'
}, {
  id: 6,
  category: 'React JS',
  image: _react_styled["default"],
  link1: 'https://www.google.com',
  link2: 'https://www.google.com',
  title: 'Responsive Portfolio Website',
  text: 'Created using different technologies such as Material UI, Styled-Components and more...'
}, {
  id: 7,
  category: 'CSS',
  image: _ms["default"],
  link1: 'https://www.google.com',
  link2: 'https://www.google.com',
  title: 'Microsoft Website Clone',
  text: 'Created using HTML and CSS'
}];
var _default = portfolios;
exports["default"] = _default;