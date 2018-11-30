// Example without disable Steps

import React, { Component } from 'react'
import Stepper from '../../dist/components/Stepper'
import Template1 from './templatesExample2/Template1'
import Template2 from './templatesExample2/Template2'
import Template3 from './templatesExample2/Template3'
import Template4 from './templatesExample2/Template4'
import Template5 from './templatesExample2/Template5'
import Template6 from './templatesExample2/Template6'
import Template7 from './templatesExample2/Template7'
import Template8 from './templatesExample2/Template8'
import Template9 from './templatesExample2/Template9'



class Example2 extends Component {
  constructor() {
    super()
    //style is optional
    this.style = {
      container: {
        paddingTop: 24,          //pixel
        paddingBottom: 24,       //pixel
      },
      shape: {
        size: 40,
        borderWidth: 4,
        borderRadius: '50%',
      },
      line: {
        borderWidth: 3,
        borderColor: 'gray',
        padding: 0
      }
    }

    // only icon or text possible not both
    this.state = {
      steps: [
        {
          text: '1',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '2',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '3',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '4',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '5',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '6',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '7',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '8',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        },
        {
          text: '9',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: true
        }
      ],
      currentStep: 0
    }
    this.changeCurrentStep = this.changeCurrentStep.bind(this)
  }




  changeCurrentStep(currentStep) {
    this.setState({ currentStep })
  }



  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 />)
      case 1: return (<Template2 />)
      case 2: return (<Template3 />)
      case 3: return (<Template4 />)
      case 4: return (<Template5 />)
      case 5: return (<Template6 />)
      case 6: return (<Template7 />)
      case 7: return (<Template8 />)
      case 8: return (<Template9 />)



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

export default Example2