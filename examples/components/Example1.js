import React, { Component } from 'react'
import Stepper from '../../dist/components/Stepper'
import Template1 from './templatesExample1/Template1'
import Template2 from './templatesExample1/Template2'
import Template3 from './templatesExample1/Template3'
import Template4 from './templatesExample1/Template4'
class Example1 extends Component {
  constructor() {
    super()
    //style is optional
    this.style = {
      container: {
        paddingTop: 24,          //pixel
        paddingBottom: 24,       //pixel
      },
      shape: {
        size: 100,
        borderWidth: 4,
        borderRadius: '50%',
      },
      line: {
        borderWidth: 3,
        borderColor: 'gray',
        padding: 30
      }
    }

    // only icon or text possible not both
    this.state = {
      steps: [
        {
          text: '1',
          icon: 'fa-server',
          shapeBorderColor: 'green',
          shapeBackgroundColor: 'white',
          shapeContentColor: 'green',
          enabled: true
        },
        {
          text: '2',
          icon: 'fa-server',
          shapeBorderColor: '#f4b042',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#f4b042',
          enabled: false
        },
        {
          text: '3',
          icon: ' fa-home',
          shapeBorderColor: '#4f6cc1',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#4f6cc1',
          enabled: false
        },
        {
          text: '4',
          icon: 'fa-check',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: false
        }
      ],
      currentStep: 0
    }
    this.changeCurrentStep = this.changeCurrentStep.bind(this)
    this.changeStepEnabled = this.changeStepEnabled.bind(this)

  }


  changeStepEnabled(stepIndex, enabled) {
    const steps = this.state.steps
    if (steps[stepIndex].enabled != enabled) {
      steps[stepIndex].enabled = enabled
      this.setState({ steps })
    }
  }


  changeCurrentStep(currentStep) {
    this.setState({ currentStep })
  }



  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 changeStepEnabled={this.changeStepEnabled} />)
      case 1: return (<Template2 changeStepEnabled={this.changeStepEnabled} />)
      case 2: return (<Template3 changeStepEnabled={this.changeStepEnabled} />)
      case 3: return (<Template4 changeStepEnabled={this.changeStepEnabled} />)


    }
  }

  render() {
    return (
      <div>
        <hr
          style={{
            color: 'gray',
            backgroundColor: 'gray',
            height: 1
          }}
        />
        <Stepper
          style={this.style}
          steps={this.state.steps}
          currentStep={this.state.currentStep}
          changeCurrentStep={this.changeCurrentStep}
        />
        <hr
          style={{
            color: 'gray',
            backgroundColor: 'gray',
            height: 1
          }}
        />
        <br/>
        <br/>
        <br/>
        <br/>


        {this.renderContent()}
      </div>
    )
  }
}

export default Example1


