import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import { PubSub } from "apollo-server-express";

// ApolloServer는 스키마와 리졸버가 반드시 필요함
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        // ws에는 HTTP HEADERS가 존재하지 않기 때문에 if문 추가
        if (req) {
            return {

            };
        }
    },
});

const pubsub = new PubSub();
const app = express();
server.applyMiddleware({ app });

//app이 http위에서 동작하도록
const httpServer = http.createServer(app);
//subscription을 실행시키도록
server.installSubscriptionHandlers(httpServer);

// listen 함수로 웹 서버 실행
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
