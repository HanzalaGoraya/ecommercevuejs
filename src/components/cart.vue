<template>
    <v-app>
        <v-main class="my-10" center>

            <v-card class="mx-10 my-10" max-width="60%" center :cardid=id>
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
                    <v-btn color="orange-lighten-2" variant="text" :bookid="id">
                        <span>Product Details</span>
                    </v-btn>
                    <v-btn color="orange-lighten-2" variant="text" :bookid="id">
                        <span>Delete</span>
                    </v-btn>
                    <v-btn @click="goback" color="orange-lighten-2" variant="text" :bookid="id">
                        <span>Go Back</span>
                    </v-btn>

                </v-card-actions>



            </v-card>
        </v-main>
        <v-btn @click="proceedtocheckout" color="orange-lighten-2" variant="text" :bookid="id">
            <span>Proceed To Checkout</span>
        </v-btn>
    </V-app>
</template>

<script>
export default {
    data() {
        return {



        }
    },
    methods: {
        goback() {
            this.$router.go(-1);
        },
        proceedtocheckout() {
            this.$router.push('/checkout');
        }

    }
};
</script>
<style></style>
  
