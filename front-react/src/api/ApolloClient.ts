import { ApolloClient, InMemoryCache } from '@apollo/client';
//import { setContext } from '@apollo/client/link/context';

//import { ACCESS_TOKEN } from '../constants/authKeys';

const apolloClient = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
});

// const httpLink = createHttpLink({
// 	uri: `${process.env.STRAPI_API_URL}/graphql`
// });

// const authLink = setContext((_, { headers }) => {
// 	// get the authentication token from local storage if it exists
// 	const token = localStorage.getItem(ACCESS_TOKEN);
// 	// return the headers to the context so httpLink can read them
// 	return {
// 		headers: {
// 			...headers,
// 			//authorization: token ? `Bearer ${token}` : ''
// 		}
// 	};
// });

// const apolloClient = new ApolloClient({
// 	cache: new InMemoryCache(),
// 	link: authLink.concat(httpLink)
// });

export default apolloClient;
