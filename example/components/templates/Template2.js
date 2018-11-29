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
    componentWillMount(){
        this.update()
    }
    componentDidUpdate(){
        this.update()
    }
    update(){
        if(this.state.age && this.state.name){
            this.props.changeStepEnabled(2, true)
       }else{
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
            </div>
        );
    }
}



export default Template2