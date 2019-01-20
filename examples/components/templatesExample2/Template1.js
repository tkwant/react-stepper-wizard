import React, { Component } from 'react'
import { FormGroup, Input } from 'reactstrap';

let state = {
    name: ""
};


class Template1 extends Component {
    constructor(props) {
        super(props);
        this.state = state
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        if (e.currentTarget.name === "name") {
            this.setState({
                name: e.currentTarget.value
            })
        }
    }

    componentWillUnmount() {
        state = this.state
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
                    <Input name="name" placeholder="1" onInput={this.handleInputChange} defaultValue= {this.state.name} />
                </FormGroup>
                </div>
            </div>
        );
    }
}

export default Template1