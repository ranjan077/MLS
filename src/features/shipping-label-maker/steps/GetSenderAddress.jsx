import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import StepWrapper from '../styles/StepWrapper'
class GetSenderAddress extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: props.state.name,
            street: props.state.street,
            city: props.state.city,
            state: props.state.state,
            zip: props.state.zip,
            nameError: false,
            streetError: false,
            cityError: false,
            stateError: false,
            zipError: false,
        }
    }
    

    getPayload = () => {
        const {name, street, city, state, zip} = this.state;
        return {
            from: {
                name,
                street,
                city,
                state,
                zip
            }
        }
    }
    validate() {
        const {name, street, city, state, zip} = this.state;
        let isValid = true;
        if(!name) {
            this.setState({
                nameError: true,
            });
            isValid = false;
        }
        if(!street) {
            this.setState({
                streetError: true,
            });
            isValid = false;
        }
        if(!city) {
            this.setState({
                cityError: true,
            });
            isValid = false;
        }
        if(!state) {
            this.setState({
                stateError: true,
            });
            isValid = false;
        }
        if(!zip || (!parseInt(zip))) {
            this.setState({
                zipError: true,
            });
            isValid = false;
        }
        return isValid;
    }
    render() {
        const {name, street, city, state, zip} = this.state;
        const {nameError, streetError, cityError, stateError, zipError} = this.state;
        return (
            <StepWrapper>
                <Paper>
                    <Typography variant="h5" >Enter Sender's address</Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField  
                                label="Name" 
                                variant="outlined" 
                                value={name}
                                onChange={(e) => {this.setState({...this.state, name: e.target.value, nameError: e.target.value ? false: true})}}
                                helperText={nameError ? "Name is required" : ""}
                                error={nameError ? true : false}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField  
                                label="Street" 
                                variant="outlined" 
                                value={street}
                                onChange={(e) => {this.setState({...this.state, street: e.target.value, streetError: e.target.value ? false: true})}}
                                helperText={streetError ? "Street is required" : ""}
                                error={streetError ? true : false}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField  
                                label="City" 
                                variant="outlined" 
                                value={city}
                                onChange={(e) => {this.setState({...this.state, city: e.target.value, cityError: e.target.value ? false: true})}}
                                helperText={cityError ? "City is required" : ""}
                                error={cityError ? true : false}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField  
                                label="State" 
                                variant="outlined" 
                                value={state}
                                onChange={(e) => {this.setState({...this.state, state: e.target.value, stateError: e.target.value ? false: true})}}
                                helperText={stateError ? "State is required" : ""}
                                error={stateError ? true : false}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField  
                                label="Zip" 
                                variant="outlined" 
                                value={zip}
                                onChange={(e) => {this.setState({...this.state, zip: e.target.value, zipError: e.target.value ? false: true})}}
                                helperText={zipError ? "Zip is required" : ""}
                                error={zipError ? true : false}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </StepWrapper>
        )
    } 
}

export default GetSenderAddress;


