
<template>
    <div v-for="book in  books " :key=book.id>

        <v-card class="mx-auto ma-4" width="600px" :cardid=id>
            <div>
                <div class="left">
                    <v-img :src="book.cover_image" height="400px" width="250px"></v-img>
                </div>
                <div class="right">
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
                            <v-card-text>
                                Ratings : {{ bookdetails.details.rating }}
                            </v-card-text>
                            <v-card max-width="320px" class="customcard">
                                <v-card-text>
                                    Reviews :
                                    <ul v-for="bookreviews in bookdetails.details.reviews">
                                        <li class="ml-4">{{ bookreviews.text }}</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-expand-transition>
                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            <span>Add To Cart</span>
                        </v-btn>
                        <v-btn class="px-10" color="orange-lighten-2" variant="text" @click="goback">
                            <span>Go Back</span>
                        </v-btn>
                    </v-card-actions>

                </div>
            </div>

        </v-card>
        <v-card class="mx-auto ma-4" width="600px">

            <v-card>
                <v-card-title>Write a Review</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="submitReview">
                        <v-textarea v-model="reviewText" label="Write Your Review Here" required></v-textarea>

                        <v-btn type="submit" color="primary">Submit</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>

            <v-card-title>Give Ratings</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submitRating">

                    <v-rating v-model="rating" label="Rating" required></v-rating>
                    <v-divider></v-divider>
                    <v-btn type="submit" color="primary">Submit</v-btn>
                </v-form>
            </v-card-text>

            <v-card class=" ma-4" width="600px">
                <v-btn class="px-10" type="submit" color="primary" @click="goback">
                    <span>Go Back</span>
                </v-btn>
            </v-card>
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
        bookdetails: '',
        ratings: '',
        bookid: '',
        rating: 0,
        reviewText: '',



    }),
    methods: {
        goback() {
            this.$router.go(-1);
        },
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

        async getbookdetails() {


            console.log(this.bookid);
            // Send a GET request to fetch products using Axios with the authentication token in the headers
            const uri = 'http://10.0.10.220:8080/api/bookdetail/';
            console.log(this.bookid)
            axios.get(uri + this.bookid, {
                // headers: {
                //     // 'Authorization': `Bearer ${store.getters.firstUserToken}`, // Use a computed getter to access the token property of the first user
                // },
            })
                .then((response) => {
                    // Handle the response data
                    console.log(response.data);
                    this.bookdetails = response.data;
                    console.log("book details", this.bookdetails);
                    // Do something with the fetched products
                })
                .catch((error) => {
                    // Handle errors
                    console.error('Error fetching products:', error);
                });

            // return this.books;

        },
        async submitReview() {
            // You can handle the review submission here

            console.log('Review:', this.reviewText);
            const data = {
                'text': this.reviewText,
            }

            // You can send the data to your server or perform other actions as needed
            const uri = 'http://10.0.10.220:8080/api/review/';
            await axios.post(uri + this.bookid, data, {
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
            // Clear the form fields
            this.rating = 0;
            this.reviewText = '';
        },
        async submitRating() {
            // You can handle the review submission here
            console.log('Rating:', this.rating);
            const data = {
                'rating': this.rating,
            }
            // You can send the data to your server or perform other actions as needed
            const uri = 'http://10.0.10.220:8080/api/detail/';
            await axios.post(uri + this.bookid, data, {
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
            // Clear the form fields
            this.rating = 0;
            this.reviewText = '';
        },


    },
    mounted() {

        this.bookid = this.$route.params.product_id,
            console.log(this.bookid);
        this.getbook();
        this.getbookdetails();


    },
    computed: {

    },
}
</script> 
<style>
.ellipses {

    display: -webkit-box;

    -webkit-character-clamp: 3;

    -webkit-box-orient: vertical;

    overflow: hidden;

    text-overflow: ellipsis;

    max-height: 4em;

}

.left {
    display: inline;
    float: left;

    padding-left: 20px;

}

.right {
    display: inline;
    float: right;

}

.customcard {
    border: none;
    /* Remove the border */
    box-shadow: none;
    /* Remove the box shadow */
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