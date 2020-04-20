import React, {Component} from 'react'
import {Consumer} from '../../features/shipping-label-maker/store/ShippingLabelMakerContext'
import Progress from './Progress';
import Nav from '../../features/shipping-label-maker/components/Nav.jsx';


class  Wizard extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            activeStep: 0,
            progress: 0,
        }
        this.totalSteps = props.steps.length;
        this.stepRef = React.createRef();
        
    }
    setActiveStep = (activeStep) => {
        this.setState({
            activeStep,
        });
    }
    setProgress = (progress) => {
        this.setState({
            progress,
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.activeStep !== this.state.activeStep;
    }
    
      
    render() {
        const props = this.props;
        const Header = props.header;
        const Step = props.steps[this.state.activeStep];
        const onComplete  = props.onComplete;
        return (
            <Consumer>
                {
                    ({state, dispatch}) => {
                        const submitStep = (activeStep) => {
                            if(this.stepRef.current) {
                                let isValid = true;
                                if(this.stepRef.current.validate) {
                                    isValid = this.stepRef.current.validate();
                                }
                                if(!isValid) {
                                    return;
                                }
                                this.setActiveStep(activeStep);
                                const payload = this.stepRef.current.getPayload();
                                dispatch({
                                    type:'shippinginfo',
                                    payload
                                });
                                let progress = (activeStep/ this.totalSteps) * 100;
                                this.setProgress(progress)
                            }
                        }
                        const stepKey = Object.keys(state).reduce((acc, key, index) => {
                            acc[index] = key;
                            return acc;
                        }, {});

                        const onConfirm = (activeStep) => {
                            if(this.stepRef.current) {
                                const payload = this.stepRef.current.getPayload();
                                dispatch({
                                    type:'shippinginfo',
                                    payload
                                });
                                onComplete();
                            }
                        }
                        return (
                            <>
                                <Header></Header>
                                <Progress variant="determinate" value={this.state.progress}/>
                                <Step ref={this.stepRef} state={state[stepKey[this.state.activeStep]]}></Step>
                                <Nav submitStep={submitStep} activeStep={this.state.activeStep} totalSteps={this.totalSteps} onConfirm={onConfirm}></Nav>
                            </>
                        );
                    }
                }
                
            </Consumer>
        )
    }
}

export default React.memo(Wizard);

