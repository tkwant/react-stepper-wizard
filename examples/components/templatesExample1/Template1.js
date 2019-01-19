import React, { Component } from 'react'

// verified: false,
// name: null,
// age: null

let state = { 
    name: "", 
    age: ""  
};


class Template1 extends Component {
    constructor(props) {
        super(props);
        this.state = state;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.nextStep = this.nextStep.bind(this)
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

    componentWillUnmount() {
        state = this.state;
      }

    componentDidUpdate(){
        if(this.state.name && this.state.age != 0){
            this.props.verify(0,true)
        }else{
            this.props.verify(0,false)
        }

    }

    nextStep(){
        this.props.changeCurrentStep(1)
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
            <br/>
            <br/>
            <button onClick={this.nextStep}>Next</button>


            </div>
        );
    }
}

export default Template1