<template>
    <div class="d-flex justify-center align-center">
        <v-table class="elevation-5 mt-10 w-75">
            <thead class="">

                <tr>
                    <th><v-icon class="">mdi-account</v-icon></th>
                    <th class="text-left">{{ orderid }}</th>
                    <th class="text-left">{{ userid }}</th>
                    <th class="text-left">{{ totalamount }}</th>
                    <th class="text-left">{{ orderstatus }}</th>

                </tr>


            </thead>
            <tbody>
            </tbody>
        </v-table>
    </div>
</template>
<script>
props: ['orderid', 'userid', 'totalamount', 'orderstatus'],

</script>
