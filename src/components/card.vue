
<template>
    <v-card class="mx-auto ma-4" max-width="98%" :cardid=id>
        <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcPCYPm9eGKbzw0sfMu6aBQSIHYy9gIdjMQ&usqp=CAU"
            height="250px" cover />
        <v-card-title>
            {{ title }}
        </v-card-title>

        <v-card-subtitle>
            {{ price }} $
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

        </v-card-actions>


    </v-card>
</template>



<script>
export default {
    props: ['id', 'title', 'description', 'price'],
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