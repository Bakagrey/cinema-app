import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    roomContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    button: {
        color: '#fff',
        backgroundColor: '#f5821e',
        marginTop: '10px',
        width:'80%'
    },
    roomRow: {
        display:'flex',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    rowNumber:{
        padding: '5px',
        color: '#50556f',
    },
    rowSits:{
        display:'flex'
    },
    sit:{
        height: '30px',
        width: '30px',
        borderRadius: '20px',
        backgroundColor: '#1aade3',
        '&:hover': {
            border: '3px solid #fff'
        }
    },
    sitSelected:{
        backgroundColor: '#f5821e',
        border: '3px solid #fff'
    },
    sitContainer:{
        height: '40px',
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boughtSit: {
        height: '15px',
        width: '15px',
        backgroundColor: '#295852',
        borderRadius: '20px',
    }
  }));

  export default useStyles;