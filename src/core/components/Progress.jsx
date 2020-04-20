import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const Progress = withStyles({
    root: {
      height: 20,
      backgroundColor: '#dee2f9',
      width: 500,
      marginTop: 30,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#3f51b5',
    },
  })(LinearProgress);

export default Progress;
