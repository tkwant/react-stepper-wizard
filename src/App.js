import React, { Component } from 'react'
import Stepper from './components/Stepper'
import Template1 from './components/templates/Template1'
import Template2 from './components/templates/Template2'
import Template3 from './components/templates/Template3'
class App extends Component {
  constructor() {
    super()
    this.firstStepper = React.createRef()
    //style is optional
    this.stepperStyle = {
      container:{
        paddingTop: 24,          //pixel
        paddingBottom: 24,       //pixel
      },
      shape:{
        size: 80,
        borderWidth: 4,
        borderRadius: '50%',
      },
      line: {
        borderWidth: 3,
        borderColor: 'gray',
        padding: 4
      }
    }

    // only icon or text possible not both
    this.steps = [
      {
        text: '1',
        icon: 'fa-user',
        shapeBorderColor: 'green',
        shapeBackgroundColor: '#fff',
        shapeContentColor: 'green',
        enabled: true
      },
      {
        text: '2',
        icon: 'fa-server',
        shapeBorderColor: '#f4b042',
        shapeBackgroundColor: '#fff',
        shapeContentColor: '#f4b042',
        enabled: false
      },
      {
        text: '3',
        icon: ' fa-home',
        shapeBorderColor: '#4f6cc1',
        shapeBackgroundColor: '#fff',
        shapeContentColor: '#4f6cc1',
        enabled: false
      },
      {
        text: '4',
        icon: 'fa-check',
        shapeBorderColor: '#ff5b3a',
        shapeBackgroundColor: '#fff',
        shapeContentColor: '#ff5b3a',
        enabled: false
      }
    ]
    this.state = {
      currentStep: 0
    }

    this.changeStepEnabled = this.changeStepEnabled.bind(this)
    this.changeCurrentStep = this.changeCurrentStep.bind(this)

  }


  changeStepEnabled() {
    this.firstStepper.current.changeStepEnabled()
  }


  changeCurrentStep(newCurrentStep) {
    console.log('-------------newCurrentStep-----------------------');
    console.log(newCurrentStep);
    console.log('------------------------------------');
    this.setState({
      currentStep: newCurrentStep
    })
    //this.firstStepper.current.changeCurrentStep()
  }



  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 changeStepEnabled={this.changeStepEnabled} />)
      case 1: return (<Template2 changeStepEnabled={this.changeStepEnabled} />)
      case 2: return (<Template3 changeStepEnabled={this.changeStepEnabled} />)
      case 3: return (<div>Template4</div>)

    }
  }



  render() {
    return (
      <div>
        <Stepper
          ref={this.firstStepper}
          style={this.stepperStyle}
          steps={this.steps}
          changeCurrentStep={this.changeCurrentStep}
        />
        {this.renderContent()}
      </div>
    )
  }
}

export default App





