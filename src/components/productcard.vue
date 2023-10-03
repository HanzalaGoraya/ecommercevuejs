
<template>
    <div v-for="book in  books " :key=book.id>
        <v-card class="mx-auto ma-4" max-width="95%" :cardid=id>
            <v-img :src="book.cover_image" height="300px" cover></v-img>

            <v-card-title>
                {{ book.title }}
            </v-card-title>
            <v-card-subtitle>
                {{ book.author }}
            </v-card-subtitle>
            <v-card-subtitle>
                {{ book.price }} $
            </v-card-subtitle>

            <v-expand-transition>
                <div>
                    <v-divider></v-divider>

                    <v-card-text>
                        description : {{ book.description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                    <span>Add To Cart</span>
                </v-btn>

            </v-card-actions>


        </v-card>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    props: ['product_id'],
    data: () => ({
        show: false,
        books: '',
        bookid: '',



    }),
    methods: {
        async getbook() {


            console.log(this.bookid);
            // Send a GET request to fetch products using Axios with the authentication token in the headers
            const uri = 'http://10.0.10.220:8080/api/book/';
            console.log(this.bookid)
            axios.get(uri + this.bookid, {
                // headers: {
                //     // 'Authorization': `Bearer ${store.getters.firstUserToken}`, // Use a computed getter to access the token property of the first user
                // },
            })
                .then((response) => {
                    // Handle the response data
                    console.log(response.data);
                    this.books = response.data;
                    console.log(this.books);
                    // Do something with the fetched products
                })
                .catch((error) => {
                    // Handle errors
                    console.error('Error fetching products:', error);
                });

            // return this.books;

        },
    },
    mounted() {

        this.bookid = this.$route.params.product_id,
            console.log(this.bookid);
        this.getbook();


    },
}
</script> 



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