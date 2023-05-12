<script>
import {PostService} from "@/services/post.service";
import {FoodTruckService} from "@/services/food-truck.service";

export default {
    name: "post",
    data(){
        return{
            id:0,
            post: [],
            author: [],
            postsService: new PostService(),
            foodTrucksService: new FoodTruckService()
        }
    },
    methods:{
        getDataPost(){
            this.postsService.getPostById(this.id).then((response)=>{
               this.post = response.data;
               console.log(this.post);
               this.getAuthor();
               this.updateViews();
            });
        },
        getAuthor(){
            this.foodTrucksService.getUserById(this.post.foodTruckId).then((response)=>{
                this.author = response.data;
                console.log(this.author);
            });
        },
        updateLike(body){
            body.likes = body.likes + 1;
            console.log('Id: '+body.id);
            console.log('Likes: '+body.likes);
            this.postsService.update(body.id,body).then((response)=>{
                console.log(response);
            });
        },
        updateViews(){
            this.post.views = this.post.views + 1;
            this.postsService.update(this.post.id, this.post).then((response)=>{
                console.log(response);
            });
        }
    },
    beforeMount() {
        this.id =  this.$route.params.id
        console.log(this.id);
        this.getDataPost();
    }
}
</script>

<template>
    <br/>
    <pv-card>
        <template #title>
            {{post.title}}
        </template>
        <template #subtitle>
            {{$t('author')}}: {{author.ownerFirstName}} {{author.ownerLastName}} ({{author.brandName}})
        </template>
        <template #content>
            <p>{{post.content}}</p>
        </template>
        <template #footer>
            <pv-button :label="post.likes +' '+ $t('like')" icon="pi pi-heart" @click="updateLike(post)"></pv-button>
        </template>
    </pv-card>
</template>

<style scoped>

</style>