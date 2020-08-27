const pickMovies = (flightLength, movieLengths) => {

    const movieLengthsSeen = new Set();
    console.log(movieLengthsSeen);

    for(let i =0; i<movieLengths.length; i++){
        const firstMovieLength = movieLengths[i];
        const matchingSecondMovieLength = flightLength - firstMovieLength;

        if(movieLengthsSeen.has(matchingSecondMovieLength)){
            return true;
        }
        movieLengthsSeen.add(firstMovieLength);
        console.log(movieLengthsSeen);
    }
    return false;
}

//returns true if there are 2 numbers in movieLengths whose sum equals to flightLength
// console.log(pickMovies(1, [2, 4]));
// console.log(pickMovies(6, [2, 4]));
console.log(pickMovies(7, [1, 2, 3, 4, 5, 6]));