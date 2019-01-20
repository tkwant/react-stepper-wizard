import React, { Component } from 'react'
import { Button, FormGroup, Input } from 'reactstrap';


let state = {
    name: "s",
};


class Template1 extends Component {
    constructor(props) {
        super(props);
        this.state = state;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.nextStep = this.nextStep.bind(this)
    }

    handleInputChange(e) {
        if (e.currentTarget.name === "name") {
            this.setState({
                name: e.currentTarget.value
            })
        } 
    }

    componentWillUnmount() {
        state = this.state;
    }

    componentDidUpdate() {
        if (this.state.name ) {
            this.props.verify(0, true)
        } else {
            this.props.verify(0, false)
        }

    }

    nextStep() {
        this.props.changeCurrentStep(1)
    }




    render() {
        return (
            <div >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input name="name" placeholder="Your Name" onInput={this.handleInputChange} defaultValue= {this.state.name} />
                </FormGroup>
                </div>

                <br/>
                
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>        
                <Button onClick={this.nextStep}  style={{marginRight:"5px"}} color="success">Next</Button>{' '}

                </div>


            </div>

        );
    }
}

export default Template1