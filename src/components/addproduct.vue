<template>
    <div>
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Add New Product</span>
                </v-card-title>

                <v-card-text>
                    <v-form @submit.prevent="submitForm">
                        <v-text-field v-model="form.title" label="Title" required></v-text-field>

                        <v-textarea v-model="form.description" label="Description" required></v-textarea>

                        <v-textarea v-model="form.author" label="Author" required></v-textarea>

                        <v-text-field v-model="form.price" label="Price" required type="number" step="1"></v-text-field>
                        <v-text-field v-model="form.image" label="ImageURL" required type="text"></v-text-field>

                        <!-- <v-file-input v-model="form.image" label="Image" accept="image/*"
                            @change="onFileChange"></v-file-input> -->
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
                    <v-btn color="blue darken-1" @click="submitForm">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios'
export default {

    props: ['dialog'],
    data() {
        return {
            dialog: this.dialog,
            form: {
                title: '',
                description: '',
                author: '',
                price: null,
                image: null,
            },
        };
    },
    methods: {
        openDialog() {
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
            // Clear the form data when closing the dialog
            this.form.title = '';
            this.form.description = '';
            this.form.author = '';
            this.form.price = null;
            this.form.image = null;
        },
        submitForm() {
            // Handle form submission here, e.g., send data to the server
            this.addbook(this.form);
            console.log('Form submitted:', this.form);
            // Close the dialog after successful submission
            this.dialog = false;
            this.closeDialog();
        },
        onFileChange(event) {
            // Handle file input change to get the selected image
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                this.form.image = selectedFile;
            }
        },

        async addbook(formdata) {
            // Send a GET request to fetch products using Axios with the authentication token in the headers
            console.log(localStorage.getItem("userdetails"));

            const bookdetails = {
                'title': formdata.title,
                'author': formdata.author,
                'description': formdata.description,
                'cover_image': formdata.image,
                'price': formdata.price,

            };
            console.log(bookdetails);
            await axios.post('http://10.0.10.220:8080/api/addbook', bookdetails, {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userdetails"))}`, // Use a computed getter to access the token property of the first user

                    //body:  //JSON.stringify({
                    //     bookdetails
                    // }),
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

    },
};
</script>
