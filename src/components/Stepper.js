import React, { Component } from 'react'
import Step from './Step'
import './step.scss'
import 'font-awesome/css/font-awesome.min.css';
import { throws } from 'assert';
class Stepper extends Component {
    constructor(props) {
        super()
        this.updateView(props)
    }

    updateView(props){
        const obj = {
            style: props.style,
            steps: props.steps
        }
        if(!this.state){
            this.state = obj
        }else{
            this.setState(obj)
        }
    }
    componentWillReceiveProps(props){
        this.updateView(props)
    }

    render() {
        const isStyleSet = this.state.style
        return (
            <div style={isStyleSet?this.state.style.container:''} className='container'>
                {this.state.steps.map((step, i) => <Step
                    key= {i}
                    step = {step}
                    id= {i}
                    style = {this.state.style}
                    numberOfSteps= {this.state.steps.length}
                    currentStep={this.props.currentStep}
                    lineRight={i==this.state.steps.length-1?false:true}
                    lineLeft={i?true:false}
                    changeCurrentStep={this.props.changeCurrentStep}
                />)}
            </div>
        )
    }
}

export default Stepper