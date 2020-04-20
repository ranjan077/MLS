import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import StepWrapper from '../styles/StepWrapper'

class GetWieght extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weight: props.state,
            weightError: false,
        }
    }
    getPayload = () => {
        const {weight} = this.state;
        return {
            weigh: weight
        }
    }
    validate() {
        const {weight} = this.state;
        let isValid = true;
        if(!weight || (!parseInt(weight) || weight <= 0)) {
            this.setState({
                weightError: true,
            });
            isValid = false;
        }
        return isValid;
    }
    render() {
        const {weight, weightError} = this.state;
        return (
            <StepWrapper>
                <Paper>
                    <Typography variant="h5" >Enter weight</Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" 
                                label="weight" 
                                variant="outlined" 
                                value={weight}
                                onChange={(e) => 
                                    {   const value = e.target.value;
                                        this.setState({...this.state, weight: value, weightError: (weight && parseInt(weight) && weight > 0) ? false: true})
                                    }}
                                helperText={weightError ? "Weight is required" : ""}
                                error={weightError ? true : false}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </StepWrapper>
        )
    }
    
}

export default GetWieght
