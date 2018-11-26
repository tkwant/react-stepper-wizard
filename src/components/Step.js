import React, { Component } from 'react'
import { throws } from 'assert';

class Step extends Component {
    constructor(props) {
        super()
        this.shapeStyle = Object.assign({}, props.style.shape);
        this.lineStyle = Object.assign({}, props.style.line);
        this.shapeStyle.height = this.shapeStyle.size
        this.shapeStyle.width = this.shapeStyle.size
        delete this.shapeStyle.size
        console.log('-----------step props-------------------------');
        console.log(props);
        console.log('------------------------------------');
        this.setCurrentStep = this.setCurrentStep.bind(this)
    }
    renderLineRight(){
        if(this.props.lineRight){
            return(
                <div style={this.lineStyle} className='lineRight'>
                </div>
            )
        }else{
            return (null)
        }
    }
    renderLineLeft(){
        if(this.props.lineLeft){
            return(
                <div style={this.lineStyle} className='lineLeft'>
                </div>
            )
        }else{
            return (null)
        }
    }
    setCurrentStep(e){
        const newCurrentStep= e.currentTarget.getAttribute('data-ref')
        this.props.changeCurrentStep(parseInt(newCurrentStep))
    }

    render() {
        return (
            <div className='stepOuter'>
                <div data-ref={this.props.id} style={this.shapeStyle} className=' stepShape disabled' onClick={this.setCurrentStep}>
                    <i className="shapeContent fa fa-fw fa-spinner fa-spin"></i>
                </div>
                {this.renderLineRight()}
                {this.renderLineLeft()}
            </div>
        )
    }
}

export default Step