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


      <v-btn @click="clickevent('cart')" density="compact" icon="mdi-cart"></v-btn>
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
          <v-btn icon="mdi-heart" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <div class="pa-4 bg-light-green text-white">Bookd ID:ID | name : BOOK | <v-btn density="compact"
                  icon="mdi-cart"></v-btn></div>
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
            <v-list-item-title class="pa-4 bg-light-green text-white rounded"
              @click="clickevent('catelog')">Catelog</v-list-item-title>
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
            <v-col v-for="book in gethome" :key="book.id" cols="12" sm="6" md="6" lg="4">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price"
                  :user="user" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="books1">
        <h1>BooksPage</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in getbooks" :key="book.id" cols="12" sm="6" md="6" lg="4">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price"
                  :user="user" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="catelog1">
        <h1>CatelogPage</h1>

        <!-- <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in catelog" :key="book.id" cols="12" sm="6" md="6" lg="4">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price"
                  :user="user" />
              </div>
            </v-col>
          </v-row>
        </v-container> -->
      </div>


      <div v-if="orders1">
        <h1>OrdersPage</h1>

        <v-container class="d-flex" fluid>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="book in userorders" :key="book.id" cols="12" sm="6" md="6" lg="4">
              <div>
                <card :id="book.id" :title="book.title" :description="book.description" :price="book.price"
                  :user="user" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="cart1">
        <h1>Cart</h1>
        <div>
          <v-card class="mx-10 my-10" max-width="80%" :cardid=id>
            <v-img
              src="https://png.pngtree.com/template/20190425/ourmid/pngtree-green-color-fluid-book-cover-design-image_147204.jpg"
              height="300px" cover />
            <v-card-title>
              {{ title }}
            </v-card-title>

            <v-card-subtitle>
              $ {{ price }}
            </v-card-subtitle>

            <v-expand-transition>
              <div>
                <v-divider></v-divider>

                <v-card-text>
                  description : {{ description }}
                </v-card-text>
              </div>
            </v-expand-transition>
            <v-card-actions>
              <div>
                <div class="button">
                  <v-btn color="orange-lighten-2" variant="text" icon="mdi-plus" :bookid="id" />

                </div>
                <div class="buttoncart">
                  <span class="ma-2 pa-2">{{ quantity }}</span>
                </div>
                <div class="button">
                  <v-btn color="orange-lighten-2" variant="text" icon="mdi-minus" :bookid="id" />


                </div>
              </div>
              <v-btn color="orange-lighten-2" variant="text" :bookid="id">
                <span>Product Details</span>
              </v-btn>
              <v-btn color="orange-lighten-2" variant="text" :bookid="id">
                <span>Delete</span>
              </v-btn>


            </v-card-actions>

          </v-card>
        </div>

        <v-btn @click="proceedtocheckout" color="orange-lighten-2" variant="text" :bookid="id">
          <span>Proceed To Checkout</span>
        </v-btn>
        <!-- <v-btn @click="goback" color="orange-lighten-2" variant="text" :bookid="id">
          <span>Go Back</span>
        </v-btn> -->


      </div>
    </div>

    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-form>
          <div><v-text-field type="email" v-model="newsletter"
              label="Enter Email To subscribe to our newsletter"></v-text-field>
            <v-btn @click="" block class="mt-2">Submit</v-btn>
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
        this.cart1 = false;

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

      }

    },
    logout() {

    },

    proceedtocheckout() {
      this.$router.push('/checkout');
    }


  },
  computed: {
    getbooks() {

      return this.$store.state.books;
    },
    // catelog() {

    // },
    gethome() {

      return this.$store.state.home;
    },
    userorders() {

      return this.$store.state.userorders;
    },


  },



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