'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Stepper = require('./components/Stepper');

var _Stepper2 = _interopRequireDefault(_Stepper);

var _Template = require('./components/templates/Template1');

var _Template2 = _interopRequireDefault(_Template);

var _Template3 = require('./components/templates/Template2');

var _Template4 = _interopRequireDefault(_Template3);

var _Template5 = require('./components/templates/Template3');

var _Template6 = _interopRequireDefault(_Template5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    //style is optional
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.style = {
      container: {
        paddingTop: 24, //pixel
        paddingBottom: 24 //pixel
      },
      shape: {
        size: 80,
        borderWidth: 4,
        borderRadius: '50%'
      },
      line: {
        borderWidth: 3,
        borderColor: 'gray',
        padding: 20
      }

      // only icon or text possible not both
    };_this.state = {
      steps: [{
        text: '1',
        icon: 'fa-server',
        shapeBorderColor: 'green',
        shapeBackgroundColor: 'white',
        shapeContentColor: 'green',
        enabled: true
      }, {
        text: '2',
        icon: 'fa-server',
        shapeBorderColor: '#f4b042',
        shapeBackgroundColor: 'white',
        shapeContentColor: '#f4b042',
        enabled: false
      }, {
        text: '3',
        icon: ' fa-home',
        shapeBorderColor: '#4f6cc1',
        shapeBackgroundColor: 'white',
        shapeContentColor: '#4f6cc1',
        enabled: false
      }, {
        text: '4',
        icon: 'fa-check',
        shapeBorderColor: '#ff5b3a',
        shapeBackgroundColor: 'white',
        shapeContentColor: '#ff5b3a',
        enabled: false
      }],
      currentStep: 0
    };
    _this.changeCurrentStep = _this.changeCurrentStep.bind(_this);
    _this.changeStepEnabled = _this.changeStepEnabled.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'changeStepEnabled',
    value: function changeStepEnabled(stepIndex, enabled) {
      var steps = this.state.steps;
      steps[stepIndex].enabled = enabled;
      this.setState({ steps: steps });
    }
  }, {
    key: 'changeCurrentStep',
    value: function changeCurrentStep(currentStep) {
      this.setState({ currentStep: currentStep });
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      switch (this.state.currentStep) {
        case 0:
          return _react2.default.createElement(_Template2.default, { changeStepEnabled: this.changeStepEnabled });
        case 1:
          return _react2.default.createElement(_Template4.default, { changeStepEnabled: this.changeStepEnabled });
        case 2:
          return _react2.default.createElement(_Template6.default, { changeStepEnabled: this.changeStepEnabled });
        case 3:
          return _react2.default.createElement(
            'div',
            null,
            'Template4'
          );

      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Stepper2.default, {
          style: this.style,
          steps: this.state.steps,
          currentStep: this.state.currentStep,
          changeCurrentStep: this.changeCurrentStep
        })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;