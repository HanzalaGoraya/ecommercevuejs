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

                        <v-text-field v-model="form.price" label="Price" required type="number" step="0.01"></v-text-field>

                        <v-file-input v-model="form.image" label="Image" accept="image/*"
                            @change="onFileChange"></v-file-input>
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
export default {
    props: ['dialog'],
    data() {
        return {
            dialog: this.dialog,
            form: {
                title: '',
                description: '',
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
            this.form.price = null;
            this.form.image = null;
        },
        submitForm() {
            // Handle form submission here, e.g., send data to the server
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
    },
};
</script>
