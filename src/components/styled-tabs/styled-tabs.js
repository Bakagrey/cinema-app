import React from 'react';
import Typography from '@material-ui/core/Typography';
import {StyledTabs,StyledTab,useStyles} from './styled-tabs-style';
export default function NavigationTabs({tabClick,itemsArray}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
      tabClick(newValue);
    }
  
    return (
      <div className={classes.root}>
        <div>
          <StyledTabs value={value} onChange={handleChange} className={classes.tabs} aria-label="styled tabs example">
            {
              itemsArray.map((text,idx)=>{
                return <StyledTab label={text} key={idx}/>
              })
            }
          </StyledTabs>
          <Typography className={classes.padding} />
        </div>
      </div>
    );
  }