import React, { Component } from 'react'
import Stepper from './components/Stepper'
import Template1 from './components/templates/Template1'

class App extends Component {
  constructor() {
    super()
    this.state = {
      steps: [{
        title: 'Step One',
        id:0,
        href: 'http://example1.com',
        enabled: true,
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 1)
        }
      }, {
        title: 'Step Two',
        href: 'http://example2.com',
        id: 1,
        enabled: false,
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 2)
        }
      },
      {
        title: 'Step Three',
        href: 'http://example3.com',
        id: 2,
        enabled: false,
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 3)
        }
      }
      ],
      currentStep: 0,
      style: {
        containerPaddingTop: 24,          //pixel
        containerPaddingBottom: 24,       //pixel
        shapeSize: 100,                   //pixel
        shapeBorderWidth: 5,              //pixel
        shapeBorderColor: '#4286f4',
        shapeBorderRadius: 50,            //percentage
        shapeBackgroundColor: '#96acce',
        lineWidth: 4,                     //pixel
        lineColor: '#b2b8c1',
        linePadding: 10
      }
    }
    this.changeStepEnabled = this.changeStepEnabled.bind(this)
  }


  changeStepEnabled(stepId, enable){
    console.log(this)
    this.setState(prevState =>({
      steps: prevState.steps.map(
        obj => (obj.id === stepId ? Object.assign(obj, {enabled: enable}): obj)
      )
    }))

  }

  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 changeStepEnabled={this.changeStepEnabled}/>)
      case 1: return (<div>Template2</div>)
      case 2: return (<div>Template3</div>)
      case 3: return (<div>Template4</div>)

    }
  }

  render() {
    let { style, steps, currentStep } = this.state
    return (
      <div>
        <Stepper
          style={style}
          steps={steps} activeStep={currentStep} disabledSteps={[2]}
        />
        {this.renderContent()}
      </div>
    )
  }
}

export default App