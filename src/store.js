// Import necessary dependencies
import { createStore } from 'vuex';

// Create a new Vuex store instance
const store = createStore({
    state() {
        return {
            // Define your application's state here
            books: [],
            home: [],
            orders: [],
            users: [],
            userorders: [],
        };
    },
    // mutations: {
    //     // Mutations for updating the state data can be defined here
    //     // For example, to update the counter:
    //     // updatebooks(state, data) {
    //     //     state.books = data;
    //     // },

    //     // You can define more mutations as needed for your application
    // },
    // actions: {
    //     // fetchhomedata() {
    //     //     //     // Send a GET request to fetch products using Axios with the authentication token in the headers
    //     //     //     axios.get('http://10.0.10.220:8080/api/book', {
    //     //     //         // headers: {
    //     //     //         //     // 'Authorization': `Bearer ${store.getters.firstUserToken}`, // Use a computed getter to access the token property of the first user
    //     //     //         // },
    //     //     //     })
    //     //     //         .then((response) => {
    //     //     //             // Handle the response data
    //     //     //             commit('updatebooks', response.data);
    //     //     //             console.log('Fetched products:', products);
    //     //     //             // Do something with the fetched products
    //     //     //         })
    //     //     //         .catch((error) => {
    //     //     //             // Handle errors
    //     //     //             console.error('Error fetching products:', error);
    //     //     //         });
    //     //     // },
    //     // },
    //     getters: {
    //         // Getters for accessing and computing derived state can be defined here
    //         // For example, to get the doubled counter value:
    //         // doubledCounter(state) {
    //         //     return state.counter * 2;
    //         // },
    //         // firstUserToken(state) {
    //         //     return state.users[0].token; // This getter will only return the token property if the users state property is not empty
    //         // },
    //         // getbooks(state) {
    //         //     return fetchhomedata; // This getter will only return the token property if the users state property is not empty
    //         // },
    //         // You can define more getters as needed for your application
    //     },
    //}
});

// Export the Vuex store instance
export default store;