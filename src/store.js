// Import necessary dependencies
import { createStore } from 'vuex';

// Create a new Vuex store instance
const store = createStore({
    state() {
        return {
            // Define your application's state here
            books: [
                { "id": '1', "title": 'book', "description": 'Lorem', "price": '20' },
                { "id": '2', "title": 'abcd', "description": 'Loremd', "price": '200' },
                { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
                { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
                { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },
            ],
            home: [
                { "id": '1', "title": 'book', "description": 'Lorem', "price": '20' },
                { "id": '2', "title": 'abcd', "description": 'Loremd', "price": '200' },
                { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
                { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
                { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },
            ],
            orders: [
                { "id": '1', "title": 'book', "description": 'Lorem', "price": '20' },
                { "id": '2', "title": 'abcd', "description": 'Loremd', "price": '200' },
                { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
                { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
                { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },
            ],
            users: [
                { "id": '1', "username": 'hanzla', "email": 'hanzala@gmail.com' },
                { "id": '2', "username": 'hanzlaa', "email": 'hanzalaaa@gmail.com' },
                { "id": '3', "username": 'hanzlaaa', "email": 'hanzalaa@gmail.com' },
                { "id": '4', "username": 'hanzlaaaa', "email": 'hanzalaaaaaa@gmail.com' },
            ],
            userorders: [
                { "id": '1', "title": 'userbook', "description": 'Lorem', "price": '20' },
                { "id": '2', "title": 'abcd', "description": 'Loremd', "price": '200' },
                { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
                { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
                { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },
            ]
        };
    },
    mutations: {
        // Mutations for updating the state data can be defined here
        // For example, to update the counter:
        increment(state) {
            state.counter++;
        },
        // You can define more mutations as needed for your application
    },
    actions: {
        async fetchHomeData({ commit }) {
            try {
                // Simulate an API call to fetch home data (replace with your actual API call)
                const uri = "http://10.0.10.220:8080/api";
                const url = uri + '/register';
                console.log(url);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'  },
                    body: JSON.stringify({ username: username.value, email: email.value, password: password.value, }),
                });
                const data = await response.json();
                commit('setHome', data);
            } catch (error) {
                console.error('Error fetching home data:', error);
            }
        },
        getters: {
            // Getters for accessing and computing derived state can be defined here
            // For example, to get the doubled counter value:
            doubledCounter(state) {
                return state.counter * 2;
            },
            // You can define more getters as needed for your application
        },
    });

// Export the Vuex store instance
export default store;
