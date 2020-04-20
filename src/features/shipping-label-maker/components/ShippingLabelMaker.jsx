import React, { useReducer, useState, useCallback } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Provider } from '../store/ShippingLabelMakerContext'
import Wizard from '../../../core/components/wizard';
import reducer from '../reducer/shippingLabelMakerReducer';
import GetSenderAddress from '../steps/GetSenderAddress';
import GetRecieverAddress from '../steps/GetRecieverAddress'
import GetWieght from '../steps/GetWieght';
import GetShippingOption from '../steps/GetShippingOption';
import ShippingLabel from '../components/ShippingLabel'

function  ShippingLabelMaker() {
    const from = {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
    };
    const to = {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
    };
    const weigh = '';
    const shippingOption = 'ground';
    const initialState = {to, from ,weigh, shippingOption};
    const  [state, dispatch] = useReducer(reducer, initialState);
    
    const header = (props) => {
        return (
            <div className="header">
                <Typography variant="h2" style={{color: '#3f51b5'}}>Shipping Label Maker</Typography>
            </div>
        );
    }
    const steps = [GetRecieverAddress, GetSenderAddress, GetWieght, GetShippingOption];
    const [showLabel, setShowLabel] = useState(false);
    const onComplete = () => {
        setShowLabel(true);
    }
    const goHome = () => {
        setShowLabel(false);
    }
    const onCompleteCallBack = useCallback(onComplete);
    return  <Provider value={{state, dispatch}}>
        <Container maxWidth="md">
            { showLabel ?  <ShippingLabel goHome={goHome}/> : <Wizard header={header} steps={steps} onComplete={onCompleteCallBack}/> }
        </Container>
    </Provider>
}

export default  ShippingLabelMaker;