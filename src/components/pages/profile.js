import React,{useState} from 'react';
import {connect} from 'react-redux';
import useStyles from './profile-style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withSnackbar } from 'notistack';



const ProfilePage = ({username,profileChange,enqueueSnackbar}) => {
    const [profileName,profileNameChange] = useState();
    const classes = new useStyles();
    return(
        <div className={classes.profileContainer}>
            <TextField
            required
            id="person_id"
            label="Имя пользователя"
            className={classes.textField}
            variant="outlined"
            margin="normal"
            onChange={(event)=>{profileNameChange(event.target.value)}}
      />
      <Button variant="contained" className={classes.button} onClick={()=>{
         proceedToChangeName(profileChange, profileName,enqueueSnackbar);
      }}>Save</Button>
        </div>
    );
}

const proceedToChangeName = (action,value,snackbar) => {
    if(!value ||  value.length === 0){
        snackbar('Вы не ввели имя',{ 
            variant: 'error',
        });
        return;
    }
    if(value.length > 25){
        snackbar('Слишком большое имя',{ 
            variant: 'error',
        });
        return;
    }
    action(value);
    snackbar('Имя пользователя изменено',{ 
       variant: 'success',
   });
}

const mapStateToProps = ({username}) => {
    return {
        username:username
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        profileChange: (name) => {
            dispatch({
                type: 'PERSON_CHANGE',
                value: name
            });
        }
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));