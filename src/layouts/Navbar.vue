<template>
        <v-app-bar app>
        <v-toolbar-title class="text-blue-lighten-3">User Dashboard</v-toolbar-title>
        <v-toolbar-title @click ="clickevent('home')">Home </v-toolbar-title>
        <v-toolbar-title @click ="clickevent('books')">Books </v-toolbar-title>
        <v-toolbar-title @click ="clickevent('catelog')">Catelog </v-toolbar-title>
        <v-toolbar-title @click ="clickevent('orders')">Orders </v-toolbar-title> 
    
          <v-spacer></v-spacer>
        <v-btn text @click="logout">Logout</v-btn>

         <v-menu>
               <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title @click ="clickevent('home')" >Home</v-list-item-title>
                  <v-list-item-title @click ="clickevent('books')">Books</v-list-item-title>
                  <v-list-item-title @click ="clickevent('catelog')">Catelog</v-list-item-title>
                  <v-list-item-title @click ="clickevent('orders')">Orders</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <div v-for="books in bookdata" :key=books.price>
                <card ></card>
            </div>
        </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
            return {
                  type: 'home',
                
            
      }
    },
    methods: {
          clickevent(name) {
           
              console.log(name);
              type = name;      

      },
      logout() {
        // Implement your logout logic here
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for your Navbar here */
  
  /* Media query for screens smaller than 600px */
  @media (max-width: 600px) {
    .toggle-icon {
      display: inline-block; /* Show the hamburger icon */
      font-size: 12em;
    }
    .title {
      display: none; /* Hide the title */
    }
    .logout-btn {
      font-size: 12px; /* Reduce the font size of the Logout button */
    }
  }
  
  /* Add more media queries and styles as needed for other screen sizes */
  </style>
  