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
        size: 60,
        borderWidth: 4,
        borderColor: '#42f6f4',
        borderRadius: '50%',
        backgroundColor: '#96acce'
      },
      line: {
        borderWidth: 3,
        color: '#b2b8c1',
        padding: 4
      },
      shapeContent:{
        color: '#ff1d00'
      }
    }

    // only icon or text possible not both
    this.steps = [
      {
        text: '1',
     //   icon: 'fa-address-book',
        enabled: true
      },
      {
        text: '2',
     //   icon: 'fa-address-book',
        enabled: false
      },
      {
        text: '3',
     //   icon: 'fa-address-book',
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





