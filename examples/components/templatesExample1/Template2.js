import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


// Using Redux would be a better solution to store State
// or store state in App component
let state = {
    email: "",
    password: ""
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
        if(e.currentTarget.name === "email"){
            this.setState({
                email: e.currentTarget.value
            })
        }else{
            this.setState({
                password: e.currentTarget.value
            })
        }
    }


    componentDidUpdate(){
        if(this.state.email && this.state.password){
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
            <div >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                            <Input onInput={this.handleInputChange} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" defaultValue= {this.state.email} />
                        </FormGroup>


                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input onInput={this.handleInputChange} type="password" name="password" id="examplePassword" placeholder="don't tell!" defaultValue= {this.state.password} />
                        </FormGroup>
                    </Form>



                </div>

                <br/>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>        
                    <Button onClick={this.previousStep} style={{marginRight:"5px"}} color="danger">Previous</Button>{' '}
                    <Button onClick={this.nextStep} style={{marginLeft:"5px"}} color="success">Next</Button>{' '}
                </div>
            </div>
        );
    }
}



export default Template2