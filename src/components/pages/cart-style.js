import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cartWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
     table: {
        width: '100%',
        '& thead': {
            backgroundColor: '#f5821e',
            color: '#fff',
            textAlign: 'center'
        },
    },
    checkBox: {
        textAlign: 'center'
    },
    movieRow: {
        backgroundColor: '#fff'
    },
    tableItem: {
        fontWeight: 'bold'
    },
    button: {
         color: '#fff',
         textAlign: 'center',
         marginTop: '30px',
    },
    buttonRemove: {
         color: '#fff',
         textAlign: 'center',
         marginTop: '30px',
         marginLeft: '10px'
    },
    buttonsWrapper: {
        marginTop: '10px',
        display: 'flex'
    }
   }));

   export default useStyles;