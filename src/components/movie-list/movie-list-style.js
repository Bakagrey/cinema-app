import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container:{
        color:'#fff',
        display:'flex'
    },
    image: {
        height: '100px',
        marginLeft: '10px',
        borderRadius: '5px',        
        border: '1px solid #fff',
        '&:hover':{opacity:'0.7'},
    }
}));

export default useStyles;