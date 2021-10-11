import React, { Component } from 'react'
import Stepper from '../../dist/react-stepper-wizard'
import Template1 from './templatesExample1/Template1'
import Template2 from './templatesExample1/Template2'
import Template3 from './templatesExample1/Template3'
import Template4 from './templatesExample1/Template4'
import { Container, Row, Col,FormGroup, Label, Input  } from 'reactstrap';

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
          padding: 10
        }
      },
      currentStep: 0,
      textLineHeight: 30, 
      steps: [
        {
          text: '1',
          icon: 'fa-server',
          shapeBorderColor: 'green',
          shapeBackgroundColor: 'white',
          shapeContentColor: 'green',
          verified: false,
          bottomText: "Schritt 1"
        },
        {
          text: '2',
          icon: 'fa-server',
          shapeBorderColor: '#f4b042',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#f4b042',
          verified: false,
          topText: "Schritt 2"
        },
        {
          text: '3',
          icon: ' fa-home',
          shapeBorderColor: '#4f6cc1',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#4f6cc1',
          verified: false,
          topText: "Schritt 3",
          bottomText: "Schritt 3"
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
      case 1: return (<Template2 verify={this.verify} changeCurrentStep={this.changeCurrentStep} />)
      case 2: return (<Template3 verify={this.verify} changeCurrentStep={this.changeCurrentStep} />)
      case 3: return (<Template4 verify={this.verify} changeCurrentStep={this.changeCurrentStep} />)
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
      <Container fluid>
        <h1>Example 1</h1>
        <Row>
          <Col style={{ border: "3px solid black", overflowX: "scroll", padding: "0px" }} xs="3">

          </Col>
          <Col style={{ border: "3px solid black" }} xs="9" >

            <Stepper
              stepperData={this.state}
              changeCurrentStep={this.changeCurrentStep}
            />
            {this.renderGrayLine()}
            <br />
            <br />
            {this.renderContent()}
            <br/>
        <br/>
          </Col>
        </Row>

      </Container>

    )
  }
}

export default Example1


