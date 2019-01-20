import React, { Component } from 'react'

import { Button, FormGroup,  Input } from 'reactstrap';

// Using Redux would be a better solution to store State
// or store state in App component
let state = {
    age: "",
};


class Template3 extends Component {
    constructor(props) {
        super(props);
        this.state = state

        this.handleInputChange = this.handleInputChange.bind(this);
        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)

    }
    componentWillUnmount() {
        state = this.state
    }

    handleInputChange(e) {
        if (e.currentTarget.name === "age") {
            this.setState({
                age: e.currentTarget.value
            })
        }
    }

    componentDidUpdate() {
        if (this.state.age) {
            this.props.verify(2, true)
        } else {
            this.props.verify(2, false)
        }

    }

    nextStep() {

        this.props.changeCurrentStep(3)
    }

    previousStep() {
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
                        <Input type="number" name="age" placeholder="Age" onInput={this.handleInputChange} defaultValue={this.state.age} />
                    </FormGroup>
                </div>

                <br />

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Button onClick={this.previousStep} style={{marginRight:"5px"}} color="danger">Previous</Button>{' '}
                    <Button onClick={this.nextStep} style={{ marginRight: "5px" }} color="success">Next</Button>{' '}

                </div>


            </div>
        );
    }
}



export default Template3