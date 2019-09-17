import { withStyles,makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    pageContent: {
      display: 'flex',
      justifyContent: 'center'
    },
    bottomShine: {
        height:'200px',
        background: 'linear-gradient(0deg, rgba(78,47,20,1) 0%, rgba(6,13,31,1) 100%)',
        borderBottom: '3px solid #f5821e'
    },
    infoPanel: {
        height: '100px'
    },
  }));

  export default useStyles;