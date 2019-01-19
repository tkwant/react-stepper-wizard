import React, { Component } from 'react'
import Stepper from '../../src/components/Stepper'
import Template1 from './templatesExample1/Template1'
import Template2 from './templatesExample1/Template2'
import Template3 from './templatesExample1/Template3'
import Template4 from './templatesExample1/Template4'
class Example1 extends Component {
  constructor() {
    super()

    this.state = {
      templateData1: {
        verified: false,
        name: null,
        age: null

      },
      templateData2: {
        verified: false,
        name: null,
        age: null

      },
      templateData3: {
        verified: false,
        name: null,
        age: null
      },
      templateData4: {
        verified: false,
        name: null,
        age: null
      },
      currentStep: 0
    }

    // only icon or text possible not both
    this.stepperData={
      //style is optional
      style: {
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
      },
      steps:[
        {
          text: '1',
          icon: 'fa-server',
          shapeBorderColor: 'green',
          shapeBackgroundColor: 'white',
          shapeContentColor: 'green',
        },
        {
          text: '2',
          icon: 'fa-server',
          shapeBorderColor: '#f4b042',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#f4b042',
        },
        {
          text: '3',
          icon: ' fa-home',
          shapeBorderColor: '#4f6cc1',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#4f6cc1',
        },
        {
          text: '4',
          icon: 'fa-check',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
        }
      ]
    }

    
    this.updateState = this.updateState.bind(this)
    this.changeCurrentStep = this.changeCurrentStep.bind(this)

  }


  updateState(newState) {
    this.setState({newState})
  }


  changeCurrentStep(newStep) {
    this.setState({ newStep })
  }



  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 updateState={this.updateState} data={this.state.templateData1} />)
      case 1: return (<Template2 updateState={this.updateState} data={this.state.templateData2} />)
      case 2: return (<Template3 updateState={this.updateState} data={this.state.templateData3} />)
      case 3: return (<Template4 updateState={this.updateState} data={this.state.templateData4} />)
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
          stepperData={this.stepperData}
          state={this.state}
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


