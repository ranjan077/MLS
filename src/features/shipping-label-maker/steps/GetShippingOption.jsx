import React, {Component} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import StepWrapper from '../styles/StepWrapper'

class GetShippingOption extends  Component {
    constructor(props) {
        super(props)
    
        this.state = {
            shippingOption: props.state,
        }
    }
    getPayload = () => {
        const {shippingOption} = this.state;
        return {
            shippingOption
        }
    }
    render() {
        const {shippingOption} = this.state;
        return (
            <StepWrapper>
                <Paper>
                    <Typography variant="h5" >Enter shipping option</Typography>
                    <Grid container>
                        <Grid item xs={6}>
                        <FormControl variant="outlined" className="weight-form-control">
                            <InputLabel>Shipping option</InputLabel>
                            <Select onChange={(e) => {
                                this.setState({
                                    shippingOption: e.target.value
                                });
                            }}
                            value={`${shippingOption}`}
                            label="Shipping option">
                                <MenuItem value='ground'>ground</MenuItem>
                                <MenuItem value='priority'>priority</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
            </StepWrapper>
        );
    }
    
}

export default GetShippingOption;
