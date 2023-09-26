
<template>
    <v-card class="mx-auto ma-4" max-width="98%" :cardid=id>
        <v-img
            src="https://png.pngtree.com/template/20190425/ourmid/pngtree-green-color-fluid-book-cover-design-image_147204.jpg"
            height="400px" cover />
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
            <v-btn v-if=this.user color="orange-lighten-2" variant="text" :bookid="id">
                <span>Add To Wishlist</span>
            </v-btn>
            <v-btn v-if=this.delete color="orange-lighten-2" variant="text" :bookid="id">
                <span>Delete</span>
            </v-btn>

        </v-card-actions>


    </v-card>
</template>



<script>
export default {
    props: ['id', 'title', 'description', 'price', 'delete', 'user'],
    data: () => ({
        show: false,


    }),
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