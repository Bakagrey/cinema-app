import React,{useState} from 'react';
import dataBind from '../../hoc/data-bind';
import TimeSelect from './time-select/time-select';
import dateFormat from '../../../utils/date-format';
import CinemaRoom from './cinema-room/cinema-room';
import {connect} from 'react-redux';

const ModalContent = ({cinemaService,addToCart,ticketsInCart,movie,isModalOpen,boughtTickets}) => {
    const days = new Array(3).fill('').map((day,idx)=>{
        const date = new Date();
        return dateFormat(date.setDate(date.getDate() + idx));
    });
    const times = cinemaService.getMoviesTime();
    const [timeDetails, setTime] = useState({movieDate:days[0]});
    if(!isModalOpen && timeDetails.movieTime){
        setTime({...timeDetails,movieTime:null})
    }
    return(
        timeDetails.movieTime ? <CinemaRoom 
        addToCart={
            (tickets)=>{addToCart(tickets)
                setTime({...timeDetails,movieTime:null})
            }            
        } 
        ticketsInCart={ticketsInCart} 
        movie={movie} 
        timeDetails={timeDetails}
        boughtTickets={boughtTickets}
        /> : <TimeSelect 
            days={days} 
            tabClick={(id) => {
            setTime({...timeDetails,movieDate:days[id]})
    }}
        timeClick={
        (t)=>{
            setTime({...timeDetails,movieTime:t});
        }
    }
        times={times}/>
    );
};

const mapStateToProps = ({ticketsToBuy,boughtTickets}) => {
    return{
        ticketsInCart: ticketsToBuy,
        boughtTickets: boughtTickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (tickets) => {
            dispatch({
                type: 'TICKETS_ADD_TO_CART',
                value: tickets
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(dataBind()(ModalContent));