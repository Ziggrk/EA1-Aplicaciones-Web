<script>
import {FoodTruckService} from "@/services/food-truck.service";

export default {
    name: "winner",
    data(){
        return{
            foodTruck:[],
            foodTruckService : new FoodTruckService()
        }
    },
    methods:{
        getById(){
            this.foodTruckService.getUserById(1).then((response)=> {
                this.foodTruck = response.data;
                console.log(response);
            })
        }
    },
    beforeMount() {
        this.getById();
    }
}
</script>

<template>
  <pv-card>
      <template #title>
          {{$t('food truck winner')}}
      </template>
      <template #content>
          <p>{{$t('name')}}: {{foodTruck.brandName}}</p>
      </template>
  </pv-card>
</template>

<style scoped>

</style>