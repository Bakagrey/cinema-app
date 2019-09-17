import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    timeWrapper: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    time: {
      color: '#fff',
      border: '2px solid #f5821e',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '5px',
      '&:hover':{
          backgroundColor: '#f5821e'
      }
    }
  }));

  export default useStyles;