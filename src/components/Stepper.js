import React, { Component } from 'react'
import Step from './Step'
import './step.scss'
import 'font-awesome/css/font-awesome.min.css';
import { throws } from 'assert';
class Stepper extends Component {
    constructor(props) {
        super()
        const steps =props.stepperData.steps  
        for (let [i, el] of Object.keys(steps).entries()){
            if(i == 0){
                steps[0].enabled = true
            }else{
                steps[i+1].enabled = false
            }
            if(steps[el].data.verified){
                steps[i+1].enabled = true
            }else{
                break
            }
        }
    }

    render() {
        const isStyleSet = this.props.stepperData.style                
        return (
            <div style={isStyleSet?this.props.stepperData.style.container:''} className='container'>
                {this.props.stepperData.steps.map((step, i) => <Step
                    key= {i}
                    step = {step}
                    id= {i}
                    style = {this.props.stepperData.style}
                    numberOfSteps= {this.props.stepperData.steps.length}
                    currentStep={this.props.stepperData.currentStep}
                    lineRight={i==this.props.stepperData.steps.length-1?false:true}
                    lineLeft={i?true:false}
                    changeCurrentStep={this.props.changeCurrentStep}
                />)}
            </div>
        )
    }

}

export default Stepper