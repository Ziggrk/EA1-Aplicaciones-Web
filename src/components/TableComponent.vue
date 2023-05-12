<script>
import {FoodTruckService} from "@/services/food-truck.service";

export default {
    name: "table",
    data(){
        return{
            foodTrucks:[],
            foodTruckService : new FoodTruckService()
        }
    },
    methods:{
        getAll(){
            this.foodTruckService.getAll().then((response)=> {
                this.foodTrucks = response.data;
                console.log(response);
            })
        }
    },
    beforeMount() {
        this.getAll();
    }
}

</script>

<template>
    <div class="card">
        <pv-table :value="foodTrucks" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <pv-column field="id" header="id" sortable style="width: 25%"></pv-column>
            <pv-column field="ownerFirstName" :header="$t('ownerFirstName')" sortable style="width: 25%"></pv-column>
            <pv-column field="ownerLastName" :header="$t('ownerLastName')" sortable style="width: 25%"></pv-column>
            <pv-column field="brandName" :header="$t('brandName')" sortable style="width: 25%"></pv-column>
        </pv-table>
    </div>
</template>

<style scoped>

</style>