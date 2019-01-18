import React, { Component } from 'react'
import Step from './Step'
import './step.scss'
import 'font-awesome/css/font-awesome.min.css';
import { throws } from 'assert';
class Stepper extends Component {
    constructor(props) {
        super()

        this.updateView(props)
        this.changeStepEnabled = this.changeStepEnabled.bind(this)
        this.saveStateData = this.saveStateData.bind(this)
    }

    changeStepEnabled(stepIndex, enabled) {
        console.log('------------------------------------');
        console.log("golum");
        console.log('------------------------------------');
    }

    saveStateData(stepIndex, newState){
        console.log('------------------------------------');
        console.log("zzzzzzzzz");
        console.log('------------------------------------');
    }

    updateView(props) {

        const obj = {
            style: props.style,
            steps: props.steps
        }
        if (!this.state) {
            this.state = obj
        } else {
            this.setState(obj)
        }
    }
    componentWillReceiveProps(props) {
        this.updateView(props)
    }

    renderContent() {
        let element = React.cloneElement(
            this.props.steps[this.props.currentStep].content,
            {
                saveStateData: this.props.saveStateData,
                changeStepEnabled: this.props.changeStepEnabled
            }
        )
        return element
        //return this.props.steps[this.props.currentStep].content
        // switch (this.props.currentStep) {
        //   case 0: return (<Template1 changeStepEnabled={this.changeStepEnabled} />)
        //   case 1: return (<Template2 changeStepEnabled={this.changeStepEnabled} />)
        //   case 2: return (<Template3 changeStepEnabled={this.changeStepEnabled} />)
        //   case 3: return (<Template4 changeStepEnabled={this.changeStepEnabled} />)
        // }
    }


    render() {
        const isStyleSet = this.state.style
        return (
            <div>
                <div style={isStyleSet ? this.state.style.container : ''} className='container'>
                    {this.state.steps.map((step, i) => <Step
                        key={i}
                        step={step}
                        id={i}
                        style={this.state.style}
                        numberOfSteps={this.state.steps.length}
                        currentStep={this.props.currentStep}
                        lineRight={i == this.state.steps.length - 1 ? false : true}
                        lineLeft={i ? true : false}
                        changeCurrentStep={this.props.changeCurrentStep}
                    />)}
                </div>
                {this.renderContent()}
            </div>
        )
    }
}

export default Stepper