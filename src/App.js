import React, {Component} from 'react'
import Stepper from './components/Stepper'


class App extends Component{
    constructor(){
        super()
        this.state={
            steps:[{
                title: 'Step One',
                href: 'http://example1.com',
                onClick: (e) => {
                  e.preventDefault()
                  console.log('onClick', 1)
                }
              }, {
                title: 'Step Two',
                href: 'http://example2.com',
                onClick: (e) => {
                  e.preventDefault()
                  console.log('onClick', 2)
                }
              },
               {
                title: 'Step Three (Disabled)',
                href: 'http://example3.com',
                onClick: (e) => {
                  e.preventDefault()
                  console.log('onClick', 3)
                }
              }
              ],
            currentStep: 0,
            style : {
                containerPaddingTop: 24,          //pixel
                containerPaddingBottom: 24,       //pixel
                shapeSize: 100,                   //pixel
                shapeBorderWidth: 5,              //pixel
                shapeBorderColor: '#4286f4',  
                shapeBorderRadius: 50,            //percentage
                shapeBackgroundColor: '#96acce',
                lineWidth: 4,                     //pixel
                lineColor: '#b2b8c1',
                linePadding: 10
              }

        }
    }
    render(){
        let {style, steps, currentStep} = this.state
        return (
            <Stepper 
            style ={style}
            steps={steps } activeStep={ currentStep } disabledSteps={ [2] }
          />
        )
    }
}

export default App