import styled from 'styled-components'

const StepWrapper  = styled.div`
    width: 500px;
    margin: 20px auto;
    h5:not(.shipping-label) {
        padding: 33px;
        background-color: #3f51b5;
        color: white;
    }
    h5 {
        text-align: left;
    }
    .MuiGrid-container {
        padding: 20px 0;
    }
    .weight-form-control {
        width: 100%;
        margin-left: 20px;
    }

    .shipping-label-img {
        width: 100%;
        height: 200px;
    }
    
    .shipping-label-from, .shipping-label-to {
        border: 1px solid #d0caca;
        border-radius: 10px;
        flex-basis: 48%;
        text-align: left;
        box-sizing: border-box;
        padding: 10px;
    }
    .shipping-label-container {
        justify-content: space-between;
    }
    .shipping-label-home-icon {
        width: 40px;
        height: 40px;
        float: right;
    }
    .shipping-label-header {
        display: flex;
    }
    .shipping-label {
        flex-basis: 50%;
    }
    .shipping-label-home-icon-con {
        flex-basis: 50%;
    }
`
export default  StepWrapper;