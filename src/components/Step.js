import React, { Component } from 'react'
import { throws } from 'assert';

class Step extends Component {
    constructor(props) {
        super()
        console.log('-------------step-----------------------');
        console.log(props);
        console.log('------------------------------------');
        // styling
        this.stepOuterStyle = {
            width: `${100 / props.numberOfSteps}`
        }

        this.shapeStyle = Object.assign({}, props.style.shape);
        this.shapeStyle.height = this.shapeStyle.size
        this.shapeStyle.width = this.shapeStyle.size
        this.shapeStyle.borderColor = props.step.shapeBorderColor
        this.shapeStyle.backgroundColor= props.step.shapeBackgroundColor

        this.shapeContentStyle = {
                fontSize: `${this.shapeStyle.size / 2.2}px`,
                lineHeight: `${this.shapeStyle.size}px`,
                color: props.step.shapeContentColor
            
        }
        if(props.lineLeft){
            this.lineLeftStyle = Object.assign({}, props.style.line);
            this.lineLeftStyle.top = this.shapeStyle.size / 2
            this.lineLeftStyle.marginRight = this.shapeStyle.size/2 + this.shapeStyle.borderWidth +this.lineLeftStyle.padding
        }
        if(props.lineRight){
            this.lineRightStyle = Object.assign({}, props.style.line);
            this.lineRightStyle.top = this.shapeStyle.size / 2
            this.lineRightStyle.marginLeft = this.shapeStyle.size/2 + this.shapeStyle.borderWidth +this.lineRightStyle.padding
        }

        delete this.shapeStyle.size

        this.setCurrentStep = this.setCurrentStep.bind(this)
    }
    renderLineRight() {
        if (this.props.lineRight) {
            return (
                <div style={this.lineRightStyle} className='lineRight'>
                </div>
            )
        } else {
            return (null)
        }
    }
    renderLineLeft() {
        if (this.props.lineLeft) {
            return (
                <div style={this.lineLeftStyle} className='lineLeft'>
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
            <div style={this.stepOuterStyle} className='stepOuter'>
                <div data-ref={this.props.id} style={this.shapeStyle} className=' shape disabled' onClick={this.setCurrentStep}>
                    <i style={this.shapeContentStyle} className={`shapeContent fa ${this.props.step.icon}`}>{this.props.step.icon?'':this.props.step.text}</i>
                </div>
                {this.renderLineRight()}
                {this.renderLineLeft()}
            </div>
        )
    }
}

export default Step