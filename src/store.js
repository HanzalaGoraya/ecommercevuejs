// Import Vue and Vuex
import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            home: [],    // Array for home data
            books: [{ id: '1', title: 'abc', description: 'Lorem', price: '20' },
            { id: '2', title: 'abcd', description: 'Loremd', price: '200' },
            { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
            { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
            { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },],   // Array for books data
            catalog: [], // Array for catalog data
            userorders: [],
            adminorders: [
                { id: '10', userid: '01', status: 'pending' },
                { id: '11', userid: '02', status: 'completed' },
                { id: '12', userid: '03', status: 'pending' },
                { id: '13', userid: '01', status: 'pending' },

            ],  // Array for orders data
            users: [],   // Array for users data
        }
    },
    mutations: {
        // Mutations for updating the state data can be defined here
        // For example:
        SET_HOME(state, data) {
            state.home = data;
        },
        SET_BOOKS(state, data) {
            state.books = data;
        },
        SET_CATALOG(state, data) {
            state.catalog = data;
        },
        SET_ORDERS(state, data) {
            state.orders = data;
        },
        SET_USERS(state, data) {
            state.users = data;
        },
    },
    actions: {
        // Actions for fetching and updating data can be defined here
        // For example, you can make API calls and commit mutations to update the state.
        // Here's a simplified example:
        async fetchHomeData({ commit }) {
            try {
                // Make an API call to fetch home data
                const response = await fetch('/api/home');
                const data = await response.json();
                commit('SET_HOME', data);
            } catch (error) {
                console.error('Error fetching home data:', error);
            }
        },
        // Similar actions can be defined for other data arrays (books, catalog, orders, users).
    },
    getters: {
        // Getters for accessing and computing derived state can be defined here
        // For example, to get the total number of books:
        totalBooks(state) {
            return state.books.length;
        },
        getBooks(state) {
            return state.books;
        },
        getadminorders(state) {
            return state.adminorders;
        },
        // Similar getters can be defined for other data arrays.
    },

})



// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         home: [],    // Array for home data
//         books: [],   // Array for books data
//         catalog: [], // Array for catalog data
//         orders: [],  // Array for orders data
//         users: [],   // Array for users data
//     },
//     mutations: {
//         // Mutations for updating the state data can be defined here
//         // For example:
//         SET_HOME(state, data) {
//             state.home = data;
//         },
//         SET_BOOKS(state, data) {
//             state.books = data;
//         },
//         SET_CATALOG(state, data) {
//             state.catalog = data;
//         },
//         SET_ORDERS(state, data) {
//             state.orders = data;
//         },
//         SET_USERS(state, data) {
//             state.users = data;
//         },
//     },
//     actions: {
//         // Actions for fetching and updating data can be defined here
//         // For example, you can make API calls and commit mutations to update the state.
//         // Here's a simplified example:
//         async fetchHomeData({ commit }) {
//             try {
//                 // Make an API call to fetch home data
//                 const response = await fetch('/api/home');
//                 const data = await response.json();
//                 commit('SET_HOME', data);
//             } catch (error) {
//                 console.error('Error fetching home data:', error);
//             }
//         },
//         // Similar actions can be defined for other data arrays (books, catalog, orders, users).
//     },
//     getters: {
//         // Getters for accessing and computing derived state can be defined here
//         // For example, to get the total number of books:
//         totalBooks(state) {
//             return state.books.length;
//         },
//         // Similar getters can be defined for other data arrays.
//     },
// });
