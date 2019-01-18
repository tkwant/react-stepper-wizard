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

    this.template1 = <Template1 changeStepEnabled={this.changeStepEnabled} />
    this.template2 = <Template2 changeStepEnabled={this.changeStepEnabled} /> 
    this.template3 = <Template3 changeStepEnabled={this.changeStepEnabled} />
    this.template4 = <Template4 changeStepEnabled={this.changeStepEnabled} />
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
    console.log('------------this.template1------------------------');
    console.log(this.template1);
    console.log('------------------------------------');
    switch (this.state.currentStep) {
      case 0: return (this.template1)
      case 1: return (this.template2)
      case 2: return (this.template3)
      case 3: return (this.template4)


    }
    // return (
    //   <div>
    //     <Template1  style={this.state.currentStep === 0 ? {} : { display: 'none' }} changeStepEnabled={this.changeStepEnabled} />
    //     <Template2 style={this.state.currentStep === 1 ? {} : { display: 'none' }} changeStepEnabled={this.changeStepEnabled} />
    //     <Template3 style={this.state.currentStep === 2 ? {} : { display: 'none' }} changeStepEnabled={this.changeStepEnabled} />
    //     <Template4 style={this.state.currentStep === 3 ? {} : { display: 'none' }} changeStepEnabled={this.changeStepEnabled} />
    //   </div>
    // )
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


