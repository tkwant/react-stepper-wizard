import React, { Component } from 'react'
import Example1 from './components/Example1'
import Example2 from './components/Example2'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>

                <Example1 />
                <br />
                <br />



                <h1> Example 2</h1>
                <Example2 />
            </div>
        )
    }
}


export default App