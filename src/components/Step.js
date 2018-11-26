import React, { Component } from 'react'
import { throws } from 'assert';

class Step extends Component {
    constructor(props) {
        super()
        console.log('-----------step props-------------------------');
        console.log(props);
        console.log('------------------------------------');
    }
    renderLineRight(){
        if(this.props.lineRight){
            return(
                <div className='lineRight'>
                </div>
            )
        }else{
            return (null)
        }
    }
    renderLineLeft(){
        if(this.props.lineLeft){
            return(
                <div className='lineLeft'>
                </div>
            )
        }else{
            return (null)
        }
    }
    shapeOnClick(){
        console.log('------------------------------------');
        console.log("CLicked");
        console.log('------------------------------------');
    }

    render() {
        return (
            <div className='stepOuter'>
                <div className=' stepShape disabled' onClick={this.props.changeCurrentStep}>
                    <i className="shapeContent fa fa-fw fa-spinner fa-spin"></i>
                </div>
                {this.renderLineRight()}
                {this.renderLineLeft()}
            </div>
        )
    }
}

export default Step