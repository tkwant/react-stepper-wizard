import React, { Component } from 'react'

import { Button } from 'reactstrap';



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
                <Button onClick={this.previousStep}  color="danger">Previous</Button>{' '}
            </div>
        );
    }
}



export default Template4