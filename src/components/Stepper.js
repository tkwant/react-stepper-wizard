import React, { Component } from 'react'
import Step from './Step'
import './step.scss'
import 'font-awesome/css/font-awesome.css';

class Stepper extends Component {
    constructor(props) {
        super()
        this.updateView(props)
    }
    updateView(props) {
        const steps = props.stepperData.steps
        let next = true
        for (let [i, el] of Object.keys(steps).entries()) {
            if (i == 0) {
                steps[0].enabled = true
            }
            if (steps[el].verified && next) {
                if (i < steps.length -1) {
                    steps[i + 1].enabled = true
                }

            } else {
                next = false
                if (i < steps.length -1) {
                    steps[i + 1].enabled = false
                }
            }
        }

        
        if(!steps[props.stepperData.currentStep].enabled){
            this.props.changeCurrentStep(props.stepperData.currentStep -1)
        }
    }

    componentWillReceiveProps(props) {
        this.updateView(props)
    }



    render() {
        const isStyleSet = this.props.stepperData.style
        return (
            <div style={isStyleSet ? this.props.stepperData.style.container : ''} className='container-stepper-wizard'>
                {this.props.stepperData.steps.map((step, i) => <Step
                    key={i}
                    step={step}
                    id={i}
                    style={this.props.stepperData.style}
                    numberOfSteps={this.props.stepperData.steps.length}
                    currentStep={this.props.stepperData.currentStep}
                    lineRight={i == this.props.stepperData.steps.length - 1 ? false : true}
                    lineLeft={i ? true : false}
                    changeCurrentStep={this.props.changeCurrentStep}
                />)}
            </div>
        )
    }

}

export default Stepper