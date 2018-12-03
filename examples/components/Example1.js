import React, { Component } from 'react'
//import Stepper from '../../dist/components/Stepper'
import Stepper from '../../src/components/Stepper'
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

    // enabled is not in data because selected Template wants to change enabledState of other Steps 

    // only icon or text possible not both

    let TemplateData1= {
      name: "",
      age: ""
    }

    let TemplateData2 = {
      name: "",
      age: ""
    }

    let TemplateData3 = {
      name: "",
      age: ""
    }

    let TemplateData4 = {
      name: "",
      age: ""
    }

    this.state = {
      steps: [
        {
          text: '1',
          icon: 'fa-server',
          shapeBorderColor: 'green',
          shapeBackgroundColor: 'white',
          shapeContentColor: 'green',
          enabled: true,
          data: TemplateData1,
          content: 
          <Template1 
          // data = {TemplateData1}
          index= {0}
          />
        },
        {
          text: '2',
          icon: 'fa-server',
          shapeBorderColor: '#f4b042',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#f4b042',
          enabled: false,
          data: TemplateData2,
          content: 
          <Template2 
          // data = {TemplateData2}
          index= {1}
          />
        },
        {
          text: '3',
          icon: ' fa-home',
          shapeBorderColor: '#4f6cc1',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#4f6cc1',
          enabled: false,
          data: {
            prop1: "zzz",
            prop2: "aaa"
          },
          content: 
          <Template3 
          // data = {TemplateData3}
          index= {2}
          />
        },
        {
          text: '4',
          icon: 'fa-check',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: false,
          data: {
            prop1: "zzz",
            prop2: "aaa"
          },
          content: 
          <Template4 
          // data = {TemplateData4}
          index= {3}
          />
        }
      ],
      currentStep: 0
    }
    this.changeCurrentStep = this.changeCurrentStep.bind(this)
    this.saveStateData = this.saveStateData.bind(this)
    this.changeStepEnabled = this.changeStepEnabled.bind(this)


  }

  // this will always call twice because 
  saveStateData(stepIndex, newState) {
    const steps = this.state.steps
    if(steps[stepIndex].data != newState){
      steps[stepIndex].data = newState
      this.setState({steps})
    }


    // const steps = this.state.steps
    // if (steps[stepIndex].enabled != enabled) {
    //   steps[stepIndex].enabled = enabled
    //   this.setState({ steps })
    // }
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

componentDidUpdate(){
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
          saveStateData={this.saveStateData} 
          changeStepEnabled ={this.changeStepEnabled}
        />
        <hr
          style={{
            color: 'gray',
            backgroundColor: 'gray',
            height: 1
          }}
        />
      </div>
    )
  }
}

export default Example1


