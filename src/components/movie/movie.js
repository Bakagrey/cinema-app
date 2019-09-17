import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './movie-style';
import Button from '@material-ui/core/Button';
import dataBind from '../hoc/data-bind';
import Modal from '../modal/modal';
import dateFormat from '../../utils/date-format';

const Movie = ({movieId, cinemaService}) => {
    const movie = cinemaService.getMovieById(movieId)[0];
    const [isModalOpen,setModalOpen] = useState(false);
    const classes = new useStyles();
    return (
        <div className={classes.container}>
            <Modal isModalOpen={isModalOpen} closeModal={()=>{setModalOpen(false)}} movie={movie}/>
            <Typography variant="h4" className={classes.title}>{movie.name}</Typography>
            <Typography className={classes.shortInfo}>{movie.runningTime} min | Age: {movie.age}+</Typography>
            <div className={classes.movieWraper}>
                <img src={movie.image} className={classes.movieImage}/>
                <div className={classes.movieTextWrapper}>
                    <div className={classes.movieTextContainer}>
                    <Typography className={classes.movieText}>{movie.content}</Typography>
                    </div>
                        <Button className={classes.buttonToBuy} onClick={()=>{
                            setModalOpen(true);
                        }}>Buy Tickets</Button>
                </div>
                <table className={classes.table}>
                    <tbody>
                    <tr>
                        <td>
                        <Typography>Running time</Typography>
                        </td>
                        <td>
                        <Typography>{movie.runningTime} min</Typography>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Typography>Release date</Typography>
                        </td>
                        <td>
                        <Typography>{dateFormat(movie.releaseDate)}</Typography>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Typography>Genre</Typography>
                        </td>
                        <td>
                        <Typography>{movie.genre}</Typography>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default dataBind()(Movie);