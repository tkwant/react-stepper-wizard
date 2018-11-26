import React, { Component } from 'react'
import Step from './Step'
import './step.scss'
import 'font-awesome/css/font-awesome.min.css';
class Stepper extends Component {
    constructor(props) {
        super()
        console.log('-----------Stepper props-------------------------');
        console.log(props);
        console.log('------------------------------------');
    }

    changeStepEnabled(){
        console.log('------------------------------------');
        console.log("HELLO");
        console.log('------------------------------------');
    }

    changeCurrentStep(){
        console.log('------------------------------------');
        console.log("HELLO2");
        console.log('------------------------------------');
    }

    render() {
        let steps = this.props.steps

        return (
            <div className='container'>
                {steps.map((step, i) => <Step
                    step = {step}
                    style = {this.props.style}
                    lineRight={i==steps.length-1?false:true}
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