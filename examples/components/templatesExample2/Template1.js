import React, { Component } from 'react'

let state = {
    age: "",
    name: ""
};


class Template1 extends Component {
    constructor(props) {
        super(props);
        this.state = state
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        if (e.currentTarget.name === "age") {
            this.setState({
                age: e.currentTarget.value
            })
        } else {
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form>
                    <br />
                    <label>
                        Name:
              <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Age:
              <input
                            name="age"
                            type="number"
                            value={this.state.age}
                            onChange={this.handleInputChange} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Template1