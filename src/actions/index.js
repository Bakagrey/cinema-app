const moviesLoaded = (newMovies) => {
    return {
        type: 'MOVIES_LOADED',
        value: newMovies
    }
};

export {
    moviesLoaded
};