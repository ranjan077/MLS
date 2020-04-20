import React from 'react'
import { Button } from '@material-ui/core';
import NavWrapper from '../styles/Nav'

function Nav({activeStep, submitStep, totalSteps, onConfirm}) {
    return (
        <NavWrapper>
            {(activeStep > 0) && <Button color="primary"  variant="contained" onClick={() => {submitStep(activeStep -1)}}>Prev</Button>}
            { (activeStep <  ( totalSteps - 1) ) &&  <Button color="primary" variant="contained" onClick={() => {submitStep(activeStep + 1)}}>Next</Button> }
            { (activeStep ===  ( totalSteps - 1) ) &&  <Button color="primary" variant="contained" onClick={() => {onConfirm(activeStep)}}>Comfirm</Button> }
        </NavWrapper>
    )
}

export default Nav
