'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

require('./step.scss');

require('font-awesome/css/font-awesome.min.css');

var _assert = require('assert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stepper = function (_Component) {
    _inherits(Stepper, _Component);

    function Stepper(props) {
        _classCallCheck(this, Stepper);

        var _this = _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).call(this));

        _this.updateView(props);
        return _this;
    }

    _createClass(Stepper, [{
        key: 'updateView',
        value: function updateView(props) {
            var obj = {
                style: props.style,
                steps: props.steps
            };
            if (!this.state) {
                this.state = obj;
            } else {
                this.setState(obj);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.updateView(props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var isStyleSet = this.state.style;
            return _react2.default.createElement(
                'div',
                { style: isStyleSet ? this.state.style.container : '', className: 'container' },
                this.state.steps.map(function (step, i) {
                    return _react2.default.createElement(_Step2.default, {
                        key: i,
                        step: step,
                        id: i,
                        style: _this2.state.style,
                        numberOfSteps: _this2.state.steps.length,
                        currentStep: _this2.props.currentStep,
                        lineRight: i == _this2.state.steps.length - 1 ? false : true,
                        lineLeft: i ? true : false,
                        changeCurrentStep: _this2.props.changeCurrentStep
                    });
                })
            );
        }
    }]);

    return Stepper;
}(_react.Component);

exports.default = Stepper;