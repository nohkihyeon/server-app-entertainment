import movies from '../database/movies';
import directors from '../database/directors';

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => {
            return movies.filter(movie => movie.id === id)[0];
        },
        directors: () => directors,
        director: (_, { name }) => {
            return directors.filter(director => director.name == name)[0];
        }
    },
    Mutation: {
        addMovie: (_, { title, release, director, budget, actor, rating }) => {
            // 영화 제목 중복 검사
            if (movies.find(movie => movie.title === title)) return null;

            // 데이터베이스에 추가
            const newMovie = {
                id: movies.length + 1,
                title,
                release,
                director,
                budget,
                actor,
                rating
            };
            movies.push(newMovie);
            return newMovie;
        }
    },
    // Actor: {
    //     directors(actor, args, context) {
    //         // return directors for all movies the actor had a role
    //         return context.data.director.getDirectorsByMovies(actor.movies);
    //     }
    // },
    Director: {}
};

export default resolvers;