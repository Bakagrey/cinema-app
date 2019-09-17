import React,{useState} from 'react';
import Movie from '../../components/movie/movie';
import MovieList from '../../components/movie-list/movie-list';

const MovieConteiner = () => {
    const [movieId, selectMovie] = useState(1);
    return(
        <div>
            <MovieList selectMovie={(id)=>selectMovie(id)}/>
            <Movie movieId={movieId}/>            
        </div>
    );
}

export default MovieConteiner;