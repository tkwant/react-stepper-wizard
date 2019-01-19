import React, {Component} from 'react'


// Using Redux would be a better solution to store State
// or store state in App component
let state = {
    age: "",
    name: ""
};


class Template2 extends Component{
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


    componentDidUpdate(){
        if(this.state.name && this.state.age != 0){
            this.props.verify(1,true)
        }else{
            this.props.verify(1,false)
        }

    }

    nextStep(){

        this.props.changeCurrentStep(2)
    }

    previousStep(){
        this.props.changeCurrentStep(0)

    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <form>
                <br />
                <label>
                    Hobby:
              <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <br />
                <label>
                    How many cats do you have?:
              <input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleInputChange} />
                </label>
            </form>
            <button onClick={this.previousStep}>Previous</button>
            <br/>
            <button onClick={this.nextStep}>Next</button>

            </div>
        );
    }
}



export default Template2