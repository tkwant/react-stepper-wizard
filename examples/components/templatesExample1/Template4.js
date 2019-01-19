import React, { Component } from 'react'




class Template4 extends Component {
    constructor(props) {
        super(props);
        this.previousStep = this.previousStep.bind(this)

    }



    previousStep(){
        this.props.changeCurrentStep(2)

    }



    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button>SEND</button>
                <button onClick={this.previousStep}>Previous</button>
                <br />
                <button onClick={this.nextStep}>Next</button>
            </div>
        );
    }
}



export default Template4