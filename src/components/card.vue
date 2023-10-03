
<template>
    <v-card class="mx-4 ma-4" max-width="98%" :cardid=id>
        <v-img :src="imageurl" height="300px" width="200px" cover />
        <v-card-title>
            {{ title }}
        </v-card-title>

        <v-card-subtitle>
            $ {{ price }}
        </v-card-subtitle>

        <v-expand-transition>
            <div>
                <v-divider></v-divider>

                <v-card-text class="ellipses">
                    description : {{ description }}
                </v-card-text>
            </div>
        </v-expand-transition>
        <!-- <v-card-actions> -->
        <div>
            <v-btn @click="productdetailspage(id)" color="orange-lighten-2" variant="text" :product_id="id">
                <span>Book Details</span>
            </v-btn>
        </div>
        <div>
            <v-btn @click="addtowishlist(id, title)" v-if=this.user color="orange-lighten-2" variant="text" :bookid="id">
                <span>Add To Wishlist</span>
            </v-btn>
        </div>
        <div>
            <v-btn v-if=this.user color="orange-lighten-2" variant="text" :bookid="id" @click="addtocart(id)">
                <span>Add To Cart</span>
            </v-btn>
        </div>
        <div>
            <v-btn v-if=this.delete @click="deletebooks(id)" color="orange-lighten-2" variant="text" :bookid="id">
                <span>Delete</span>
            </v-btn>
        </div>

        <!-- </v-card-actions> -->


    </v-card>
</template>



<script>
import axios from 'axios'
import { globalStaticArray } from '../components/globalArray.js';
import { globalWishListStaticArray } from '../components/globalWishListArray.js';
export default {
    props: ['id', 'userid', 'status', 'price', 'delete', 'imageurl', 'user', 'description'],
    data: () => ({
        show: false,



    }),
    methods: {
        productdetailspage(id) {
            this.$router.push({
                name: "Productpage",
                params: { product_id: id },
            })
        },

        async deletebooks(id) {
            // Send a GET request to fetch products using Axios with the authentication token in the headers

            axios.delete('http://10.0.10.220:8080/api/book/' + id, {
                headers: {
                    'Authorization': `Bearer ${"92|5IirXsvRgV6eAlWyLyCjXKiFlsrH7DQAFQvW0LSX2a8df93c"}`, // Use a computed getter to access the token property of the first user
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
        async addtocart(id) {
            globalStaticArray.push(id);
            console.log(globalStaticArray);
        },
        async addtowishlist(id) {

            globalWishListStaticArray.push(id);
            console.log(globalWishListStaticArray);
        }


    },
}
</script> 
<style>
.ellipses {

    display: -webkit-box;

    -webkit-line-clamp: 2;

    -webkit-box-orient: vertical;

    overflow: hidden;

    text-overflow: ellipsis;

    max-height: 4em;

}
</style>



<!-- 

<template>
    <v-card class="mx-auto" max-width="500px" variant="outlined">
        <v-card-item>
            <div>
                <div class="text-overline mb-1">
                    OVERLINE
                </div>
                <div class="text-h6 mb-1">
                    Headline
                </div>
                <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
            </div>
        </v-card-item>

        <v-card-actions>
            <v-btn variant="outlined">
                Button
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            carditem: {
                
            }
            

        }
    },
    methods: {
        
    }
};
</script>  -->