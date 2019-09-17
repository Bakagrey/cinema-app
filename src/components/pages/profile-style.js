import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      '& label': {
          color: '#f5821e'
      },
      '& input': {
          color: '#fff'
      },
      '& fieldset': {
          borderColor: '#f5821e'
      }
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        color: '#fff',
        backgroundColor: '#f5821e',
        width: '300px'
    }
  }));

  export default useStyles;