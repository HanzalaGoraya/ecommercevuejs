
<template>
    <v-card class="mx-auto" max-width="344" v-for="books in bookdata" :key="books.price">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

        <v-card-title>
            Top western road trips
        </v-card-title>

        <v-card-subtitle>
            1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
                <span>Product Details</span>
            </v-btn>

        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                    sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
                    you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way
                    to escape.
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>



<script>
export default {
    props: {},
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