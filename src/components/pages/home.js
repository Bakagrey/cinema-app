import React,{useState} from 'react';
import NavigationTabs from '../styled-tabs/styled-tabs';
import Backdrop from '../../images/homepage_backdrop.jpg';
import MovieConteiner from '../../components/movie-conteiner/movie-conteiner';
import Information from '../../components/information/information';
import Other from '../../components/other/other';
import useStyles from './home-style';

const HomePage = () => {
    const [activeTab = 0, setActiveTab] = useState(0);
    const classes = new useStyles();
    return(
       <div className={classes.homePageContainer}>
           <img src={Backdrop} className={classes.image}/>
           <div className={classes.menuContainer}>
            <NavigationTabs  tabClick={(id) => setActiveTab(id)} itemsArray={["MOVIES","INFORMATION","OTHER"]}/>
            {
                activeTab === 0 ? <MovieConteiner />  : activeTab === 1 ? <Information /> : <Other />
            }
           </div>
           
       </div>
    );
}



export default HomePage;