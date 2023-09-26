<template>
  <v-app>


    <v-app-bar app class="color-blue-lighten-3">
      <v-spacer></v-spacer>
      <div><v-toolbar-title class="text-blue">User Dashboard</v-toolbar-title></div>
      <v-spacer></v-spacer>
      <v-toolbar-title class="title" @click="clickevent('home')">Home </v-toolbar-title>
      <v-toolbar-title class="title" @click="clickevent('books')">Books </v-toolbar-title>
      <v-toolbar-title class="title" @click="clickevent('catelog')">Catelog </v-toolbar-title>
      <v-toolbar-title class="title" @click="clickevent('orders')">Orders </v-toolbar-title>


      <v-text-field v-model="search" label="Search" single-line hide-details class="title"></v-text-field>

      <v-btn class="title" density="compact" icon="mdi-magnify"></v-btn>
      <v-spacer></v-spacer>


      <v-btn density="compact" icon="mdi-cart"></v-btn>
      <v-btn text @click="logout">Logout</v-btn>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-account" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item>

            <v-list-item-title>Welcome</v-list-item-title>
            <v-list-item-title>Ali Ashraf</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title @click="clickevent('home')">Home</v-list-item-title>
            <v-list-item-title @click="clickevent('books')">Books</v-list-item-title>
            <v-list-item-title @click="clickevent('catelog')">Catelog</v-list-item-title>
            <v-list-item-title @click="clickevent('orders')">Orders</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>



    <div class="my-10 mx-10 py-10">


      <div v-if="home1">
        <h1>HomePage</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in books" :key="book.id" cols="12" sm="6" md="6" lg="3">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="books1">
        <h1>BooksPage</h1>
      </div>

      <div v-if="catelog1">
        <h1>CatelogPage</h1>
      </div>


      <div v-if="orders1">
        <h1>OrdersPage</h1>
      </div>


    </div>



  </v-app>
</template>

<script>
import navbar from '../layouts/Navbar.vue'
import card from '../components/card.vue'
export default {
  components: { navbar, card },
  props: {},
  data() {
    return {
      home1: true,
      books1: false,
      catelog1: false,
      orders1: false,
      home: [],
      books: [],
      catelog: [],
      orders: [],
      search: '',
      books: [
        { "id": '1', "title": 'abc', "description": 'Lorem', "price": '20' },
        { "id": '2', "title": 'abcd', "description": 'Loremd', "price": '200' },
        { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
        { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
        { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },
      ]




    }

  },
  methods: {
    clickevent(name) {
      console.log(name);
      if (name === 'home') {
        this.home1 = true;
        this.books1 = false;
        this.catelog1 = false;
        this.orders1 = false;
      }
      else if (name === 'books') {
        this.home1 = false;
        this.books1 = true;
        this.catelog1 = false;
        this.orders1 = false;

      }
      else if (name === 'catelog') {
        this.home1 = false;
        this.books1 = false;
        this.catelog1 = true;
        this.orders1 = false;

      }
      else if (name === 'orders') {
        this.home1 = false;
        this.books1 = false;
        this.catelog1 = false;
        this.orders1 = true;

      }

    },
    logout() {

    },
    cart() {

    },


  },
  mounted() {

  },
  compued() {

  },



}
</script>

<style scoped>
/* Add any custom styles for your Navbar here */

/* Media query for screens smaller than 600px */
@media (max-width: 800px) {
  .toggle-icon {
    display: inline-block;
    /* Show the hamburger icon */
    font-size: 12em;
  }

  .title {
    display: none;
    /* Hide the title */
  }

  .logout-btn {
    font-size: 12px;
    /* Reduce the font size of the Logout button */
  }
}

/* Add more media queries and styles as needed for other screen sizes */
</style>