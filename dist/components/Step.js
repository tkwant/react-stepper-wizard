'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
    _inherits(Step, _Component);

    function Step(props) {
        _classCallCheck(this, Step);

        var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this));

        _this.updateView(props);
        _this.setCurrentStep = _this.setCurrentStep.bind(_this);
        return _this;
    }

    _createClass(Step, [{
        key: 'updateView',
        value: function updateView(props) {
            var size = props.style.shape.size;
            var obj = {
                steperOuterStyle: {
                    width: '' + 100 / props.numberOfSteps
                },
                shapeStyle: {
                    height: size,
                    width: size,
                    borderWidth: props.style.shape.borderWidth,
                    borderRadius: props.style.shape.borderRadius,
                    borderColor: props.step.shapeBorderColor,
                    backgroundColor: props.currentStep == props.id ? props.step.shapeBorderColor : props.step.shapeBackgroundColor
                },
                shapeContentStyle: {
                    fontSize: size / 2.2 + 'px',
                    lineHeight: size + 'px',
                    color: props.currentStep == props.id ? props.step.shapeBackgroundColor : props.step.shapeContentColor
                },
                lineLeftStyle: {
                    borderWidth: props.style.line.borderWidth,
                    borderColor: props.style.line.borderColor,
                    padding: props.style.line.padding,
                    top: size / 2,
                    marginRight: size / 2 + props.style.shape.borderWidth + props.style.line.padding
                },
                lineRightStyle: {
                    borderWidth: props.style.line.borderWidth,
                    borderColor: props.style.line.borderColor,
                    padding: props.style.line.padding,
                    top: size / 2,
                    marginLeft: size / 2 + props.style.shape.borderWidth + props.style.line.padding
                },
                disabledStyle: {
                    height: size + props.style.shape.borderWidth * 2,
                    width: size + props.style.shape.borderWidth * 2
                },
                enabled: props.step.enabled
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
        key: 'renderLineRight',
        value: function renderLineRight() {
            if (this.props.lineRight) {
                return _react2.default.createElement('div', { style: this.state.lineRightStyle, className: 'lineRight' });
            } else {
                return null;
            }
        }
    }, {
        key: 'renderLineLeft',
        value: function renderLineLeft() {
            if (this.props.lineLeft) {
                return _react2.default.createElement('div', { style: this.state.lineLeftStyle, className: 'lineLeft' });
            } else {
                return null;
            }
        }
    }, {
        key: 'setCurrentStep',
        value: function setCurrentStep(e) {
            if (!e.currentTarget.children[1]) {
                var newCurrentStep = e.currentTarget.getAttribute('data-ref');
                this.props.changeCurrentStep(parseInt(newCurrentStep));
            }
        }
    }, {
        key: 'renderDisabled',
        value: function renderDisabled() {
            if (!this.state.enabled) {
                return _react2.default.createElement('div', { style: this.state.disabledStyle, className: 'disabled' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.state.steperOuterStyle, className: 'stepOuter' },
                _react2.default.createElement(
                    'div',
                    { 'data-ref': this.props.id, style: this.state.shapeStyle, className: 'shape', onClick: this.setCurrentStep },
                    _react2.default.createElement(
                        'i',
                        { style: this.state.shapeContentStyle, className: 'shapeContent fa ' + this.props.step.icon },
                        this.props.step.icon ? '' : this.props.step.text
                    ),
                    this.renderDisabled()
                ),
                this.renderLineRight(),
                this.renderLineLeft()
            );
        }
    }]);

    return Step;
}(_react.Component);

exports.default = Step;