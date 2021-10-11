import React, { Component } from 'react'

class Step extends Component {
    constructor(props) {
        super()
        this.updateView(props)
        this.setCurrentStep = this.setCurrentStep.bind(this)
    }

    updateView(props){                
        const shapeStyle= props.style.shape
        const lineStyle = props.style.line
        const size = shapeStyle.size        
        const textSpacing = props.textLineHeight? (props.textLineHeight * 2): 0
        const obj = {
            steperOuterStyle: {
                width:`${100 / props.numberOfSteps}`
            },
            shapeStyle: {
                height:size,
                width: size,
                borderWidth: shapeStyle.borderWidth,
                borderRadius: shapeStyle.borderRadius,
                borderColor: props.step.shapeBorderColor,
                backgroundColor: props.currentStep == props.id ? props.step.shapeBorderColor:props.step.shapeBackgroundColor
            },
            shapeContentStyle: {
                fontSize: `${size / 2.2}px`,
                lineHeight: `${size}px`,
                color: props.currentStep == props.id ?props.step.shapeBackgroundColor :props.step.shapeContentColor
            },
            lineLeftStyle:{
                borderWidth: lineStyle.borderWidth,
                borderColor: lineStyle.borderColor,
                padding: lineStyle.padding,
                top: (textSpacing + size)/2,
                marginRight: size/2 + shapeStyle.borderWidth +lineStyle.padding
            },
            lineRightStyle:{
                borderWidth: lineStyle.borderWidth,
                borderColor: lineStyle.borderColor,
                padding: lineStyle.padding,
                top: (textSpacing + size)/2,
                marginLeft: size/2 + shapeStyle.borderWidth +lineStyle.padding
            },
            disabledStyle:{
                height:size + shapeStyle.borderWidth*2,
                width: size + shapeStyle.borderWidth*2,

            },
            enabled: props.step.enabled
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

    renderLineRight() {
        if (this.props.lineRight) {
            return (
                <div style={this.state.lineRightStyle} className='line-right-stepper-wizard'>
                </div>
            )
        } else {
            return (null)
        }
    }
    renderLineLeft() {
        if (this.props.lineLeft) {
            return (
                <div style={this.state.lineLeftStyle} className='line-left-stepper-wizard'>
                </div>
            )
        } else {
            return (null)
        }
    }
    setCurrentStep(e) {
        if(!e.currentTarget.children[1]){
            const newCurrentStep = e.currentTarget.getAttribute('data-ref')
            this.props.changeCurrentStep(parseInt(newCurrentStep))
        }

    }

    renderDisabled(){
        if(!this.state.enabled){
            return <div style = {this.state.disabledStyle} className='disabled-stepper-wizard'></div>
        }
    }
    
    render() {
        console.log("this.props")
        console.log(this.props)
        return (
            <div style={this.state.steperOuterStyle} className='step-outer-stepper-wizard'>
               <div style={{height: this.props.textLineHeight?this.props.textLineHeight: 0, lineHeight: 2, textAlign: 'center'}}>
                    {this.props.topText?this.props.topText: <span>&#8203;</span>}
                </div>
                <div data-ref={this.props.id} style={this.state.shapeStyle} className='shape-stepper-wizard' onClick={this.setCurrentStep}>
                    <i style={this.state.shapeContentStyle} className={`shapeContent fa ${this.props.step.icon}`}>{this.props.step.icon ? '' : this.props.step.text}</i>
                    {this.renderDisabled()}
                </div>
                <div style={{ height: this.props.textLineHeight?this.props.textLineHeight: 0, lineHeight: 2, textAlign: 'center'}}>
                    {this.props.bottomText?this.props.bottomText: <span>&#8203;</span>}
                </div>
                {this.renderLineRight()}
                {this.renderLineLeft()}
            </div>
        )
    }
}

export default Step