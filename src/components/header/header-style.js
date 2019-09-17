import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    topSection: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    topSectionLabel: {
        textAlign: 'right',
        color: '#f5821e',
        padding: '20px',
        '& h4': {
            fontWeight: 'bold',
            lineHeight: '28px'
        },
        '& a': {
            textDecoration: 'none',
            color: '#f5821e'
        }
    },
    topSectionUser: {
        color: 'white',
        padding: '20px'
    }
  }));

  export default useStyles;