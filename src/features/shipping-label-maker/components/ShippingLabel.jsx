import React, {useContext} from 'react'
import context from '../store/ShippingLabelMakerContext'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StepWrapper from '../styles/StepWrapper'
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import {calcShippingCost, shippingOptions} from '../../../utils/utils'

function ShippingLabel({goHome}) {
    const {state} = useContext(context);
    return (
        <StepWrapper>
            <Card>
                <CardActionArea>
                    <CardMedia
                        image="/shipping.png"
                        title="shiiping  Reptile"
                        className="shipping-label-img"
                    />
                    <CardContent>
                        <div className="shipping-label-header">
                            <Typography variant="h5" component="h5" className="shipping-label">Shipping label</Typography>
                            <div className="shipping-label-home-icon-con">
                                <HomeIcon className="shipping-label-home-icon" onClick={goHome}/>
                            </div>
                        </div>
                        <Grid container className="shipping-label-container">
                            <Grid item xs={6} className="shipping-label-from">
                                <Typography variant="h6" gutterBottom><b>From</b></Typography>
                                {
                                    Object.entries(state.from).map(fields => {
                                        return <Typography key={`from-${fields[0]}`} variant="button" display="block" gutterBottom>{`${fields[0]}: ${fields[1]}`}</Typography>
                                    })
                                }
                            </Grid>
                            <Grid item xs={6} className="shipping-label-to">
                                <Typography variant="h6" gutterBottom><b>To</b></Typography>
                                {
                                    Object.entries(state.to).map(fields => {
                                        return <Typography key={`to-${fields[0]}`} variant="button" display="block" gutterBottom>{`${fields[0]}: ${fields[1]}`}</Typography>
                                    })
                                }
                            </Grid>
                        </Grid>
                        <Grid container className="shipping-label-container">
                            <Grid item xs={6} className="shipping-label-weight">
                                <Typography variant="h6" gutterBottom>Weight <b>{state.weigh} pounds</b></Typography>
                            </Grid>
                            <Grid item xs={6} className="shipping-label-weight">
                                <Typography variant="h6" gutterBottom>Shipping option is <b>{state.shippingOption}</b></Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Total shipping cost is  <b>{calcShippingCost(state.weigh, shippingOptions[state.shippingOption])}$</b></Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </StepWrapper>
    )
}

export default ShippingLabel;
