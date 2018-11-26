import React, { Component } from 'react'
import Step from './Step'
import './step.scss'
import 'font-awesome/css/font-awesome.min.css';
class Stepper extends Component {
    constructor(props) {
        super()
        this.style = props.style
        this.steps = props.steps


    }

    changeStepEnabled(){

    }

    changeCurrentStep(newStep){

    }

    render() {
        console.log(this)
        return (
            <div style={this.style.container} className='container'>
                {this.steps.map((step, i) => <Step
                    step = {step}
                    id= {i}
                    style = {this.style}
                    numberOfSteps= {this.steps.length}
                    lineRight={i==this.steps.length-1?false:true}
                    lineLeft={i?true:false}
                    changeCurrentStep={this.props.changeCurrentStep}
                />)}

                {/* <div className='stepOuter' >
                    <div className='stepShape' >
                        <i className="shapeContent fa fa-spinner fa-spin"></i>
                    </div>
                    <div className='lineLeft'>
                    </div>
                    <div className='lineRight'>
                    </div>
                </div>
                <div className='stepOuter'>
                    <div className='stepShape'>
                        <i className="shapeContent fa fa-fw fa-spinner fa-spin"></i>
                    </div>
                    <div className='lineLeft'>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Stepper