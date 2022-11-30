import movies from '../database/movies';

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => {
            return movies.filter(movie => movie.id === id)[0];
        }
    },
    Mutation: {
        addMovie: (_, { title, release, director, budget, rating }) => {
            // 영화 제목 중복 검사
            if (movies.find(movie => movie.title === title)) return null;

            // 데이터베이스에 추가
            const newMovie = {
                id: movies.length + 1,
                title,
                release,
                director,
                budget,
                rating
            };
            movies.push(newMovie);
            return newMovie;
        }
    },
    Subscription: {
        roomUpdates: {
            subscribe: () => pubsub.asyncIterator("NEW_MESSAGE"),
        },
    },
};

export default resolvers;