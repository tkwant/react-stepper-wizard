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
          data = {TemplateData1}
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
          data = {TemplateData2}
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
          data = {TemplateData3}
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
          data = {TemplateData4}
          />
        }
      ],
      currentStep: 0
    }
    this.changeCurrentStep = this.changeCurrentStep.bind(this)
    this.saveStateData = this.saveStateData.bind(this)
    this.changeStepEnabled = this.changeStepEnabled.bind(this)

    this.template1 = <Template1 changeStepEnabled={this.changeStepEnabled} />
    this.template2 = <Template2 changeStepEnabled={this.changeStepEnabled} /> 
    this.template3 = <Template3 changeStepEnabled={this.changeStepEnabled} />
    this.template4 = <Template4 changeStepEnabled={this.changeStepEnabled} />
  }


  saveStateData(newState) {
    console.log('--------newStatenewState----------------------------');
    console.log(newState);
    console.log('------------------------------------');
    // console.log('---------this---------------------------');
    // console.log(this);
    // console.log('------------------------------------');
    // console.log('-----------this2-------------------------');
    // console.log(this);
    // console.log('------------------------------------');
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
    console.log("render");
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


