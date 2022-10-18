<template>
    
    
          <div class="card kard align-self-start">
            <img src="../assets/img/profile.svg" class="card-img-top" alt="..." />
            <div class="card-body kartu-bodi">
              <h5 class="card-title">{{ name }}</h5>
            </div>
          </div>
          <div class="card my-2">
            <div class="card-header chead text-center">Menu</div>
            <router-link type="button" class="btn btn-outline-primary" to="/indexsup">Supplier</router-link>
            
            <router-link type="button" class="btn btn-outline-primary" to="/indexbar">Barang</router-link>
            

          </div>
          <div class="card kard align-self-start">
          <button @click="logout" class="btn btn-danger">
            LogOut
          </button>
        </div>
        


</template>


<script>
import router from '@/router'
export default {
    data(){
        return{
            username : this.username,
            name: localStorage.getItem("profileName"),
        }
    },
    methods:{
        logout(){
            localStorage.clear();
             setTimeout(()=>{
                router.push({
                    path : "/"
                },3000)
             })
        }
    }
   
}
</script>
