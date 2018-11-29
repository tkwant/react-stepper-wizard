import React, { Component } from 'react'
import { throws } from 'assert';

class Template1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(value){
            this.props.changeStepEnabled(0, true)
        }else{
            this.props.changeStepEnabled(0, false)

        }
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <form>
                <label>
                    Is going:
              <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
              <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default Template1