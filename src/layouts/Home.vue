<template>
  <v-app>


    <v-app-bar app class="bg-orange-darken-1 color-blue-lighten-3">
      <v-spacer></v-spacer>
      <div><v-toolbar-title class="text-grey-darken-4"><strong>
            <h2>BOOK SHOP</h2>
          </strong></v-toolbar-title></div>
      <v-spacer></v-spacer>
      <v-toolbar-title class="title" @click="clickevent('home')">Home </v-toolbar-title>
      <v-toolbar-title class="title" @click="clickevent('books')">Books </v-toolbar-title>
      <!-- <v-toolbar-title class="title" @click="clickevent('catelog')">Catelog </v-toolbar-title> -->
      <v-toolbar-title class="title" @click="clickevent('orders')">Orders </v-toolbar-title>


      <v-text-field v-model="search" label="Search" single-line hide-details class="title"></v-text-field>

      <v-btn class="title" density="compact" icon="mdi-magnify"></v-btn>
      <v-spacer></v-spacer>


      <v-btn @click="clickevent('cart')" density="compact" icon="mdi-cart"></v-btn>
      <v-btn text @click="logout">Logout</v-btn>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-account" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item>

            <v-list-item-title>{{ this.username }}</v-list-item-title>
            <v-list-item-title>{{ this.email }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-heart" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <div class="pa-4 bg-light-green text-white">Book ID:ID <v-btn density="compact" icon="mdi-cart"></v-btn>

              </div>
            </v-list-item-title>
            <v-list-item-title>
              <div class="pa-4 bg-light-green text-white" v-for="item in this.wishlistarray">Book ID:{{ item }} |
                <v-btn @click="addtocart(item)" density="compact" icon="mdi-cart"></v-btn>

              </div>
            </v-list-item-title>

          </v-list-item>
        </v-list>
      </v-menu>


      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list class="rounded-xl">
          <v-list-item>
            <v-list-item-title class="pa-4 bg-light-green text-white rounded"
              @click="clickevent('home')">Home</v-list-item-title>
            <v-list-item-title class="pa-4 bg-light-green text-white rounded"
              @click="clickevent('books')">Books</v-list-item-title>
            <!-- <v-list-item-title class="pa-4 bg-light-green text-white rounded"
              @click="clickevent('catelog')">Catelog</v-list-item-title> -->
            <v-list-item-title class="pa-4 bg-light-green text-white rounded"
              @click="clickevent('orders')">Orders</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>



    <div class="my-10 mx-10 py-10">


      <div v-if="home1">
        <h1>HomePage</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in books" :key="book.id" cols="12" sm="4" md="3" lg="2">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price" :user="user"
                  :imageurl="book.cover_image" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="books1">
        <h1>BooksPage</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in books" :key="book.id" cols="12" sm="4" md="3" lg="2">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price"
                  :imageurl="book.cover_image" :user="user" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- <div v-if="catelog1">
        <h1>CatelogPage</h1>

         <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in catelog" :key="book.id" cols="12" sm="6" md="6" lg="4">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price"
                  :user="user" />
              </div>
            </v-col>
          </v-row>
        </v-container>
    </div> -->


      <div v-if="orders1">
        <h1>OrdersPage</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="order in orders" :key="order.id" cols="12" sm="12" md="12" lg="12">
              <div class="d-flex justify-center align-center">
                <v-table class="elevation-5 mt-10 w-75">
                  <thead class="">

                    <tr>
                      <th><v-icon class="">mdi-account</v-icon></th>
                      <th class="text-left">{{ order.id }}</th>
                      <th class="text-left">{{ order.user_id }}</th>
                      <th class="text-left">{{ order.status }}</th>
                      <th class="text-left">{{ order.total_amount }}</th>

                    </tr>


                  </thead>
                  <tbody>
                  </tbody>
                </v-table>
              </div>

            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="cart1">
        <h1>Cart</h1>
        <div v-for="item in cart" :key="item">
          <v-card class="mx-10 my-10" max-width="800px" :cardid=id>
            <v-img :src="item.cover_image" width="250px" height="400px" cover />
            <v-card-title>
              {{ item.title }}
            </v-card-title>


            <v-card-subtitle>
              {{ item.author }}
            </v-card-subtitle>
            <v-card-subtitle>
              $ {{ item.price }}
            </v-card-subtitle>

            <v-expand-transition>
              <div>
                <v-divider></v-divider>

                <v-card-text>
                  description : {{ item.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
            <v-card-actions>
              <div>
                <div class="button">
                  <v-btn color="orange-lighten-2" variant="text" icon="mdi-plus" @click="plus" :bookid="id" />

                </div>
                <div class="buttoncart">
                  <span class="ma-2 pa-2">{{ quantity }}</span>
                </div>
                <div class="button">
                  <v-btn color="orange-lighten-2" variant="text" icon="mdi-minus" :bookid="id" @click="minus" />


                </div>
              </div>
              <v-btn color="orange-lighten-2" variant="text" :bookid="id">
                <span>Product Details</span>
              </v-btn>
              <v-btn @click="deletecart(item.id)" color="orange-lighten-2" variant="text" :bookid="id">
                <span>Delete</span>
              </v-btn>


            </v-card-actions>
            <span class="ma-2 pa-2"> Total Price : {{ quantity * item.price }} </span>

          </v-card>
        </div>

        <v-btn @click="confirmorder" color="orange-lighten-2" variant="text" :bookid="id">
          <span>Confirm Order</span>
        </v-btn>
        <!-- <v-btn @click="goback" color="orange-lighten-2" variant="text" :bookid="id">
          <span>Go Back</span>
        </v-btn> -->


      </div>
    </div>

    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-form>
          <div>
            <v-btn @click="subscribenewsletter" block class="mt-2">Submit</v-btn>
          </div>
        </v-form>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
import navbar from '../layouts/Navbar.vue'
import card from '../components/card.vue'
import cart from '../components/cart.vue'
import axios from 'axios'
import { globalStaticArray } from '@/components/globalArray'
import { globalWishListStaticArray } from '@/components/globalWishListArray'
export default {
  props: [],
  components: { navbar, card, cart },

  data() {
    return {
      newsletter: '',
      home1: true,
      books1: false,
      catelog1: false,
      orders1: false,
      cart1: false,
      user: true,
      books: '',
      orders: '',

      // books: [
      //   { "id": '1', "title": 'abc', "description": 'Lorem', "price": '20' },
      //   { "id": '2', "title": 'abcd', "description": 'Loremd', "price": '200' },
      //   { "id": '3', "title": 'abcde', "description": 'Loremde', "price": '200' },
      //   { "id": '4', "title": 'abcdef', "description": 'Loremdef', "price": '200' },
      //   { "id": '5', "title": 'abcdefg', "description": 'Loremdefg', "price": '200' },
      // ],

      search: '',
      quantity: '1',
      total: '',
      username: '',

      email: '',
      cart: '',
      username: JSON.parse(localStorage.getItem("username")),
      email: JSON.parse(localStorage.getItem("email")),
      wishlistarray: globalWishListStaticArray,


    }

  },
  methods: {
    showToast() {
      // Display a toast message
      this.snackbarText = 'Added To Cart';
      this.snackbarColor = 'success';
      this.snackbar = true;
    },
    deletecart(item) {
      console.log(item);
      globalStaticArray[0] = 0;

    },
    async subscribenewsletter() {
      await axios.post('http://10.0.10.220:8080/api/subscribe', {
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

    plus() {
      this.quantity++;
    },
    minus() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    clickevent(name) {
      console.log(name);
      if (name === 'home') {
        this.home1 = true;
        this.books1 = false;
        this.catelog1 = false;
        this.orders1 = false;
        this.cart1 = false;
        console.log(this.$store.state.users);
      }
      else if (name === 'books') {
        this.home1 = false;
        this.books1 = true;
        this.catelog1 = false;
        this.orders1 = false;
        this.cart1 = false;

      }
      else if (name === 'catelog') {
        this.home1 = false;
        this.books1 = false;
        this.catelog1 = true;
        this.orders1 = false;
        this.cart1 = false;

      }
      else if (name === 'orders') {
        this.home1 = false;
        this.books1 = false;
        this.catelog1 = false;
        this.orders1 = true;
        this.cart1 = false;

      }
      else if (name === 'cart') {
        this.home1 = false;
        this.books1 = false;
        this.catelog1 = false;
        this.orders1 = false;
        this.cart1 = true;
        this.cartproducts();
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

    async confirmorder() {
      const data = {
        book_id: globalStaticArray[0],
        quantity: this.quantity,

      };

      await axios.post('http://10.0.10.220:8080/api/confirm', data, {
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

      return this.books;

    },
    async getorders() {


      // Send a GET request to fetch products using Axios with the authentication token in the headers
      axios.get('http://10.0.10.220:8080/api/userorder', {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userdetails"))}` // Use a computed getter to access the token property of the first user
        },
      })

        .then((response) => {
          // Handle the response data

          console.log(response);
          this.orders = response.data.orders;
          console.log('orders', this.orders);
          // Do something with the fetched products
        })
        .catch((error) => {
          // Handle errors
          console.error('Error fetching products:', error);
        });

      // return this.orders1;

    },
    async cartproducts() {
      // Send a GET request to fetch products using Axios with the authentication token in the headers

      for (let i = 0; i < globalStaticArray.length; i++) {
        var id = globalStaticArray[i];

        axios.get('http://10.0.10.220:8080/api/book/' + id, {
          // headers: {
          //     // 'Authorization': `Bearer ${store.getters.firstUserToken}`, // Use a computed getter to access the token property of the first user
          // },
        })
          .then((response) => {
            // Handle the response data
            console.log(response.data);
            this.cart = response.data;
            console.log(this.cart);
            // Do something with the fetched products
          })
          .catch((error) => {
            // Handle errors
            console.error('Error fetching products:', error);
          });

      }
    },
    async addtocart(id) {
      globalStaticArray.push(id);
      console.log(globalStaticArray);
    },




  },
  computed: {

    // userdetails() {
    //   username = localStorage.getItem(user.name);
    //   email = localStorage.getItem(user.email);

    // },
    // gethome() {

    //   return this.$store.state.home;
    // },


  },
  mounted() {
    this.getbooks();
    this.getorders();
    // this.userdetails();

  }
}


</script>

<style scoped>
/* Add any custom styles for your Navbar here */
.product-info {
  flex-grow: 1;
}

.buttoncart {
  width: 10px;
  height: 15px;
  border: 2px solid #f1b775;
  margin-left: 5px;

  display: inline;
}

.button {
  width: 10px;
  height: 15px;
  margin-left: 5px;

  display: inline;
}

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