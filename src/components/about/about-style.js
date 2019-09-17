import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    madeBy: {
      color: '#f5821e'
    },
    author: {
      color: '#fff'
    }
  }));

  export default useStyles;