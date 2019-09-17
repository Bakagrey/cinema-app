import Lotr from '../images/lordoftherings.jpg';
import Nobody from '../images/nobody.jpg';
import Capitan from '../images/capitan.jpg';

export default class CinemaService{
    movies = [{
        id: 1,
        name: 'Lord of the Rings',
        content: `The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. 
        The story began as a sequel to Tolkiens 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. 
        Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold. 
        The title of the novel refers to the story's main antagonist, the Dark Lord Sauron, who had in an earlier age created the 
        One Ring to rule the other Rings of Power as the ultimate weapon in his campaign to conquer and rule all of Middle-earth. 
        From quiet beginnings in the Shire, a hobbit land not unlike the English countryside, the story ranges across Middle-earth, 
        following the course of the War of the Ring through the eyes of its characters, most notably the hobbits Frodo Baggins, Sam, Merry and Pippin.`,
        runningTime: 120,
        releaseDate: '2012-02-07',
        genre: 'Fantasy',
        age: 18,
        image: Lotr
    },
    {
        id: 2,
        name: `Mr. Nobody`,
        content: `A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? 
        Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.`,
        runningTime: 142,
        releaseDate: '2013-09-26',
        genre: 'Drama, Romance',
        age: 18,
        image: Nobody
    },
    {
        id: 3,
        name: `Captain Fantastic`,
        content: `In the forests of the Pacific Northwest, a father devoted to raising his six kids with a rigorous physical and intellectual 
        education is forced to leave his paradise and enter the world, challenging his idea of what it means to be a parent.`,
        runningTime: 120,
        releaseDate: '2016-08-11',
        genre: 'Drama, Comedy',
        age: 18,
        image: Capitan
    }];
    movieTimes = [
        {
            id: 1,
            time: '11:00'
        },
        {
            id: 2,
            time: '14:30'
        },
        {
            id: 3,
            time: '17:00'
        },
        {
            id: 4,
            time: '22:30'
        }
    ];
    getMoviesTime(){
        return this.movieTimes;
    }
    getMovies(){
        return this.movies;
    }
    getMovieById(id){
        return this.movies.filter(mov=>mov.id === id);
    }
} 