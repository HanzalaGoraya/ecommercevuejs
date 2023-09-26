<template>
    <div class="d-flex justify-center align-center">
        <v-table class="elevation-5 mt-10 w-75">
            <thead class="">

                <tr>
                    <th><v-icon class="">mdi-account</v-icon></th>
                    <th class="text-left">OrderID</th>
                    <th class="text-left">UserID</th>
                    <th class="text-left">OrderStatus</th>

                </tr>
                <tr>
                    <th><v-icon class="">mdi-account</v-icon></th>
                    <th class="text-left">OrderID</th>
                    <th class="text-left">UserID</th>
                    <th class="text-left">OrderStatus</th>
                    <th>
                        <div class="text-end">
                            <v-btn class="text-right">Show Order</v-btn>
                        </div>
                    </th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>Username</td>
                    <td>email</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>
<script>

</script>
