# React-Stepper-Wizard

### Live Demo
http://stepper.tkwant.de/
### Example1
![example](https://github.com/tkwant/react-stepper-wizard/raw/master/example1.png)

____________________________________________________________________________________________________________________

### Example2
![example](https://github.com/tkwant/react-stepper-wizard/raw/master/example2.png)

____________________________________________________________________________________________________________________
## Installation

```npm i react-stepper-wizard```

## Stepper Prop

Prop | Value
------------ | -------------
stepperData | object
changeCurrentStep | function


### StepperData
```
this.state = {
      //style is optional
      style: {
        container: {
          paddingTop: 24,          //pixel
          paddingBottom: 24,       //pixel
        },
        shape: {
          size: 80,
          borderWidth: 4,
          borderRadius: '50%',
        },
        line: {
          borderWidth: 3,
          borderColor: 'gray',
          padding: 30
        }
      },
      currentStep: 0,
      steps: [
        {
          text: '1',
          icon: 'fa-server',
          shapeBorderColor: 'green',
          shapeBackgroundColor: 'white',
          shapeContentColor: 'green',
          verified: false,
        },
        {
          text: '2',
          icon: 'fa-server',
          shapeBorderColor: '#f4b042',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#f4b042',
          verified: false,
        },
        {
          text: '3',
          icon: ' fa-home',
          shapeBorderColor: '#4f6cc1',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#4f6cc1',
          verified: false,
        },
        {
          text: '4',
          icon: 'fa-check',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          verified: false,
        }
      ]
    }
```

## Usage
### App.js
```
import React, { Component } from 'react'
import Stepper from '../../src/index'
import Template1 from './templatesExample1/Template1'
import Template2 from './templatesExample1/Template2'
import Template3 from './templatesExample1/Template3'
import Template4 from './templatesExample1/Template4'

class Example1 extends Component {
  constructor() {
    super()
    // only icon or text possible not both
    this.state = {
      //style is optional
      style: {
        container: {
          paddingTop: 24,          //pixel
          paddingBottom: 24,       //pixel
        },
        shape: {
          size: 80,
          borderWidth: 4,
          borderRadius: '50%',
        },
        line: {
          borderWidth: 3,
          borderColor: 'gray',
          padding: 30
        }
      },
      currentStep: 0,
      steps: [
        {
          text: '1',
          icon: 'fa-server',
          shapeBorderColor: 'green',
          shapeBackgroundColor: 'white',
          shapeContentColor: 'green',
          verified: false,
        },
        {
          text: '2',
          icon: 'fa-server',
          shapeBorderColor: '#f4b042',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#f4b042',
          verified: false,
        },
        {
          text: '3',
          icon: ' fa-home',
          shapeBorderColor: '#4f6cc1',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#4f6cc1',
          verified: false,
        },
        {
          text: '4',
          icon: 'fa-check',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          verified: false,
        }
      ]
    }


    this.verify = this.verify.bind(this)
    this.changeCurrentStep = this.changeCurrentStep.bind(this)

  }


  verify(stepIndex, verified) {      
    const steps = this.state.steps
    if (steps[stepIndex].verified != verified) {
      steps[stepIndex].verified = verified
      this.setState({ steps })
    }
  }


  changeCurrentStep(newStep) {    
    this.setState({ currentStep: newStep })
  }




  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 verify={this.verify} changeCurrentStep={this.changeCurrentStep} />)
      case 1: return (<Template2 verify={this.verify} changeCurrentStep={this.changeCurrentStep}/>)
      case 2: return (<Template3 verify={this.verify}  changeCurrentStep={this.changeCurrentStep}/>)
      case 3: return (<Template4 verify={this.verify} changeCurrentStep={this.changeCurrentStep}/>)
    }
  }

  renderGrayLine() {
    return (
      <hr
        style={{
          color: 'gray',
          backgroundColor: 'gray',
          height: 1
        }}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderGrayLine()}
        <Stepper
          stepperData={this.state}
          changeCurrentStep={this.changeCurrentStep}
        />
        {this.renderGrayLine()}
        <br />
        <br />
        

        {this.renderContent()}
      </div>
    )
  }
}
export default Example1
```
### Template1.js
```
import React, { Component } from 'react'

let state = {
    age: "",
    name: ""
};


class Template1 extends Component {
    constructor(props) {
        super(props);
        this.state = state
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        if (e.currentTarget.name === "age") {
            this.setState({
                age: e.currentTarget.value
            })
        } else {
            this.setState({
                name: e.currentTarget.value
            })
        }
    }

    componentWillUnmount() {
        state = this.state
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form>
                    <br />
                    <label>
                        Name:
              <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Age:
              <input
                            name="age"
                            type="number"
                            value={this.state.age}
                            onChange={this.handleInputChange} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Template1
```
## Example (See Example folder)
to run example

```git clone https://github.com/tkwant/react-stepper-wizard.git```

```cd react-stepper-wizard```

```npm install```

```npm start```

then open Browser: localhost:9001

You can use an icon (font awesome icon)  or text 

To enable all steps, add verified: true to stepper Object

## Contribution
Contributors are welcome

## To Do
Stepper is only in horizontal view possible.

Make stepper also avaiable for vertical view.

Use React Router in example project
