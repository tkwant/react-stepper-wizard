'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template1 = function (_Component) {
    _inherits(Template1, _Component);

    function Template1(props) {
        _classCallCheck(this, Template1);

        var _this = _possibleConstructorReturn(this, (Template1.__proto__ || Object.getPrototypeOf(Template1)).call(this, props));

        _this.state = {
            isGoing: false,
            numberOfGuests: 2
        };

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }

    _createClass(Template1, [{
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;

            if (value) {
                this.props.changeStepEnabled(0, true);
            } else {
                this.props.changeStepEnabled(0, false);
            }
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'Is going:',
                    _react2.default.createElement('input', {
                        name: 'isGoing',
                        type: 'checkbox',
                        checked: this.state.isGoing,
                        onChange: this.handleInputChange })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'label',
                    null,
                    'Number of guests:',
                    _react2.default.createElement('input', {
                        name: 'numberOfGuests',
                        type: 'number',
                        value: this.state.numberOfGuests,
                        onChange: this.handleInputChange })
                )
            );
        }
    }]);

    return Template1;
}(_react.Component);

exports.default = Template1;