import React, { Component } from 'react'
import { throws } from 'assert';

class Step extends Component {
    constructor(props) {
        super()
        console.log('--------------props----------------------');
        console.log(props);
        console.log('------------------------------------');
        // styling
        const size = props.style.shape.size
        this.state = {
            steperOuterStyle: {
                width:`${100 / props.numberOfSteps}`
            },
            shapeStyle: {
                height:size,
                width: size,
                borderWidth: props.style.shape.borderWidth,
                borderRadius: props.style.shape.borderRadius,
                borderColor: props.step.shapeBorderColor,
                backgroundColor: props.currentStep == props.id ? props.step.shapeBorderColor:props.step.shapeBackgroundColor
            },
            shapeContentStyle: {
                fontSize: `${size / 2.2}px`,
                lineHeight: `${size}px`,
                color: props.currentStep == props.id ?props.step.shapeBackgroundColor :props.step.shapeContentColor
            },
            lineLeftStyle:{
                borderWidth: props.style.line.borderWidth,
                borderColor: props.style.line.borderColor,
                padding: props.style.line.padding,
                top: size/2,
                marginRight: size/2 + props.style.shape.borderWidth +props.style.line.padding
            },
            lineRightStyle:{
                borderWidth: props.style.line.borderWidth,
                borderColor: props.style.line.borderColor,
                padding: props.style.line.padding,
                top: size/2,
                marginLeft: size/2 + props.style.shape.borderWidth +props.style.line.padding
            }
        }
        this.setCurrentStep = this.setCurrentStep.bind(this)
    }
    // componentWillUpdate(props) {
    //         this.setCurrentStepView(props)
    // }

    componentWillReceiveProps(props){
        this.setCurrentStepView(props)
    }

    setCurrentStepView(props){

        if (props.currentStep === props.id) {
            this.setState({
                shapeStyle:{
                    ...this.state.shapeStyle,
                    backgroundColor: props.step.shapeBorderColor,
                },
                shapeContentStyle:{
                    ...this.state.shapeContentStyle,
                    color: props.step.shapeBackgroundColor
                }
            })
            // this.shapeStyle.backgroundColor = props.step.shapeBorderColor
            // this.shapeContentStyle.color = '#fff'
        }else{
            this.setState({
                shapeStyle:{
                    ...this.state.shapeStyle,
                    backgroundColor: props.step.shapeBackgroundColor,
                },
                shapeContentStyle:{
                    ...this.state.shapeContentStyle,
                    color: props.step.shapeBorderColor
                }
            })
        }
    }

    renderLineRight() {
        if (this.props.lineRight) {
            return (
                <div style={this.state.lineRightStyle} className='lineRight'>
                </div>
            )
        } else {
            return (null)
        }
    }
    renderLineLeft() {
        if (this.props.lineLeft) {
            return (
                <div style={this.state.lineLeftStyle} className='lineLeft'>
                </div>
            )
        } else {
            return (null)
        }
    }
    setCurrentStep(e) {
        const newCurrentStep = e.currentTarget.getAttribute('data-ref')
        this.props.changeCurrentStep(parseInt(newCurrentStep))
    }

    render() {
        return (
            <div style={this.state.steperOuterStyle} className='stepOuter'>
                <div data-ref={this.props.id} style={this.state.shapeStyle} className=' shape disabled' onClick={this.setCurrentStep}>
                    <i style={this.state.shapeContentStyle} className={`shapeContent fa ${this.props.step.icon}`}>{this.props.step.icon ? '' : this.props.step.text}</i>
                </div>
                {this.renderLineRight()}
                {this.renderLineLeft()}
            </div>
        )
    }
}

export default Step