const key = 'dbfc14e3b5b71dccb386bde48dd0504b';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,

    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,

    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,

    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,

    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,

    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    
    requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,

    requestSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_network=213`,

    requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`
};

export default requests

