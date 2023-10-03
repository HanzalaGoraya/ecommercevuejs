<template>
  <v-app>


    <v-app-bar app class="bg-orange-darken-1 color-blue-lighten-2">
      <v-spacer></v-spacer>
      <div><v-toolbar-title class="text-grey-darken-4"><strong>
            <h1>Admin</h1>
          </strong></v-toolbar-title></div>
      <v-spacer></v-spacer>
      <v-toolbar-title class="title" @click="clickevent('home')">Home </v-toolbar-title>
      <v-toolbar-title class="title" @click="clickevent('orders')">Orders </v-toolbar-title>
      <v-toolbar-title class="title" @click="clickevent('users')">Users </v-toolbar-title>


      <!-- <v-text-field v-model="search" label="Search" single-line hide-details class="title"></v-text-field>

      <v-btn class="title" density="compact" icon="mdi-magnify"></v-btn> -->
      <v-spacer></v-spacer>


      <v-btn text @click="addbook">Add a Book</v-btn>
      <div v-if="addaproduct">
        <addproduct :dialog=addaproduct />
      </div>
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
            <v-list-item-title @click="clickevent('orders')">Orders</v-list-item-title>
            <v-list-item-title @click="clickevent('users')">Users</v-list-item-title>

          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>



    <div class="my-10 mx-10 py-10">


      <div v-if="home">
        <h1>Home</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in books" :key="book.id" cols="12" sm="4" md="3" lg="2">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price"
                  :imageurl="book.cover_image" :delete="true" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="orders">
        <h1>Orders</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in orders1.orders" :key="book.id" cols="12" sm="6" md="6" lg="2">
              <div>
                <v-card class="mx-auto ma-4" max-width="98%" :cardid=id>
                  <v-img src="../assets/noimage.jpg" height="300px" cover />
                  <v-card-title>
                    BookID: {{ book.id }}
                  </v-card-title>
                  <v-card-subtitle>
                    UserID: {{ book.user_id }}
                  </v-card-subtitle>
                  <v-card-subtitle>

                  </v-card-subtitle>

                  <v-expand-transition>
                    <div>
                      <v-divider></v-divider>
                      <v-card-text>
                        price : $ {{ book.total_amount }}
                      </v-card-text>
                      <v-card-text>
                        status : {{ book.status }}
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                  <v-card-actions>
                    <!-- <v-btn color="orange-lighten-2" variant="text" :bookid="id">
                      <span>Product Details</span>
                    </v-btn>
                    <v-btn v-if=this.user color="orange-lighten-2" variant="text" :bookid="id">
                      <span>Add To Wishlist</span>
                    </v-btn> -->
                    <v-btn v-if=this.delete color="orange-lighten-2" variant="text" :bookid="id">
                      <span>Delete</span>
                    </v-btn>

                  </v-card-actions>


                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>

      </div>


      <div v-if="users">
        <h1>Users</h1>

        <div class="d-flex justify-center align-center">
          <v-table class="elevation-5 mt-10 w-75">
            <thead class="">

              <tr>
                <th><v-icon class="">mdi-account</v-icon></th>
                <th class="text-left">ID</th>
                <th class="text-left">Username</th>
                <th class="text-left">Email</th>

              </tr>


            </thead>
            <tbody>
              <tr v-for="item in users1.data" :key="item.id">

                <th><v-icon class="">mdi-account</v-icon></th>
                <th class="text-left">{{ item.id }}</th>
                <th class="text-left">{{ item.name }}</th>
                <th class="text-left">{{ item.email }}</th>
                <th>
                  <div class="text-end">
                    <v-btn class="text-right" @click="deleteuser(item.id)">Delete</v-btn>
                  </div>
                </th>
              </tr>

            </tbody>
          </v-table>
        </div>


      </div>


    </div>



  </v-app>
</template>

<script>
import navbar from '../layouts/Navbar.vue'
import card from '../components/card.vue'
import usercard from '../components/usercard.vue'
import addproduct from '@/components/addproduct.vue'
import axios from 'axios'

export default {
  components: { navbar, card, usercard, addproduct, },
  props: {},
  data() {
    return {
      home: true,
      orders: false,
      users: false,
      search: '',
      addaproduct: false,
      // books: [
      //   // { "id": '1', "title": 'abc', "description": 'Lorem', "price": '20' },
      //   // { "id": '2', "title": 'abcd', "description": 'Loremd', "price": '200' },
      //   // { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
      //   // { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
      //   // { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },
      // ]
      books: '',
      users1: '',
      orders1: '',



    }

  },
  methods: {
    clickevent(name) {
      console.log(name);
      if (name === 'home') {
        this.home = true;
        this.orders = false;
        this.users = false;

      }
      else if (name === 'orders') {
        this.home = false;
        this.orders = true;
        this.users = false;

      }
      else if (name === 'users') {
        this.home = false;
        this.orders = false;
        this.users = true;

      }

    },
    async logout() {
      this.$router.push('/');
      await axios.post('http://10.0.10.220:8080/api/logout', {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userdetails"))}`, // Use a computed getter to access the token property of the first user
        },

      })
        .then((response) => {
          // Handle the response data


          console.log(response);
          // Do something with the fetched products
        })
        .catch((error) => {
          // Handle errors
          console.error('Error fetching products:', error);
        });


    },
    addbook() {
      this.addaproduct = !this.addaproduct;
    },
    async getbooks() {
      // Send a GET request to fetch products using Axios with the authentication token in the headers
      axios.get('http://10.0.10.220:8080/api/book', {
        // headers: {
        //     // 'Authorization': `Bearer ${store.getters.firstUserToken}`, // Use a computed getter to access the token property of the first user
        // },
      })
        .then((response) => {
          // Handle the response data
          console.log(response.data.books);
          this.books = response.data.books;
          console.log(this.books);
          // Do something with the fetched products
        })
        .catch((error) => {
          // Handle errors
          console.error('Error fetching products:', error);
        });

      // return this.books;

    },

    async getorders() {


      // Send a GET request to fetch products using Axios with the authentication token in the headers
      axios.get('http://10.0.10.220:8080/api/order', {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userdetails"))}` // Use a computed getter to access the token property of the first user
        },
      })

        .then((response) => {
          // Handle the response data

          console.log(response);
          this.orders1 = response.data;
          console.log(this.orders1);
          // Do something with the fetched products
        })
        .catch((error) => {
          // Handle errors
          console.error('Error fetching products:', error);
        });

      // return this.orders1;

    },

    async getallusers() {
      // Send a GET request to fetch products using Axios with the authentication token in the headers


      axios.get('http://10.0.10.220:8080/api/users', {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userdetails"))}`, // Use a computed getter to access the token property of the first user
        },
      })
        .then((response) => {
          // Handle the response data
          this.users1 = response.data;
          console.log(this.users1);
          // Do something with the fetched products
        })
        .catch((error) => {
          // Handle errors
          console.error('Error fetching products:', error);
        });

      return this.users1;

    },

    async deleteuser(id) {
      // Send a GET request to fetch products using Axios with the authentication token in the headers

      axios.delete('http://10.0.10.220:8080/api/users/' + id, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userdetails"))}`, // Use a computed getter to access the token property of the first user
        },
      })
        .then((response) => {
          // Handle the response data

          console.log(response.data);
          // Do something with the fetched products
        })
        .catch((error) => {
          // Handle errors
          console.error('Error fetching products:', error);
        });



    },


  },
  mounted() {
    this.getallusers();
    this.getbooks();

    this.getorders();
  },

  computed: {
    // books1() {

    //   return this.$store.state.books

    // },
    // getorders() {

    //   return this.$store.state.orders;

    // },
    // home1() {
    //   return this.$store.state.home;

    // }

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