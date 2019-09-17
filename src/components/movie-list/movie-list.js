import React from 'react';
import dataBind from '../hoc/data-bind';
import useStyles from './movie-list-style';

const MovieList = ({selectMovie,cinemaService}) => {
    const movies = cinemaService.getMovies();
    const classes = new useStyles();
        return (
            <div className={classes.container}>
               { movies.map(function (mov) {
                   return <img src={mov.image}  className={classes.image} key={mov.id} onClick={()=>selectMovie(mov.id)}/>
                })
               }
            </div>
    );
}
export default dataBind()(MovieList);