import React, { Component } from 'react'
import { throws } from 'assert';


// Using Redux would be a better solution to store State
// or store state in App component



class Template1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(e) {
        if(e.currentTarget.name === "age"){
            this.setState({
                age: e.currentTarget.value
            })
        }else{
            this.setState({
                name: e.currentTarget.value
            })
        }
    }

    componentWillMount(props){
        console.log('------------------------------------');
        console.log(props);
        console.log('------------------------------------');
        this.update()
    }

    componentDidUpdate(){
        this.update()
    }
    update(){
        if(this.state.age && this.state.name){
            this.props.changeStepEnabled(1, true)
       }else{
           this.props.changeStepEnabled(1, false)
           this.props.changeStepEnabled(2, false)
           this.props.changeStepEnabled(3, false)
       }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
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