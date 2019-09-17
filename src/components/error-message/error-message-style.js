import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      marginTop: '50px'
    },
    madeBy: {
      color: '#f5821e',
    },
    author: {
      color: '#fff',
    },
    icon: {
        color: '#f5821e',
        fontSize: '60px'
    }
  }));

  export default useStyles;