import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
      color: '#fff'
    },
    container: {
        marginTop: theme.spacing(4)
    },
    shortInfo: {
        color: '#50556f',
        fontWeight: 'bold',
        marginTop: theme.spacing(1)
    },
    movieWraper: {
        backgroundColor: '#171d31',
        marginTop: theme.spacing(2),
        display: 'flex',
        borderRadius: '20px',
        justifyContent:'space-around',
    },    
    movieImage: {
        width: '30%',
        padding: '20px 0px',
        objectFit: 'scale-down'
    },
    movieText: {
        color: '#fff'
    },
    movieTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '20px 0px'
    },
    buttonToBuy: {
        backgroundColor: '#f5821e',
        color: [['#fff'],'!important'],
    },
    table: {
        padding: '20px 0px',
        color: '#fff',
        width: '30%',
        '& td:nth-child(1) p':{
            color:'#f5821e',
            fontWeight: 'bold'
        },
        '& tr': {
            height: '40px'
        }
    },
    movieTextContainer: {
        overflow:'overlay',
        maxHeight: '700px',
        marginBottom: '20px'
    },
    '@media (max-width: 786px)': {
        movieWraper:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        movieTextWrapper: {
            width:'100%'
        },
        table: {
            width: '100%'
        }
    }
  }));

  export default useStyles;