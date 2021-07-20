<template>
  <header>
    <Logo />
    <div class="nav">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          :to="nav.href"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/logo'
export default {
  components:{
    Logo
  },
  data(){
    return{
      navigations :[
        {
          name:'Search',
          href:"/"
        }, 
        {
          name:'Movie',
          href:'/movie'
        },
        {
          name:'About', 
          href:'/about'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">


@media screen and (min-width: 500px) {
  header{
   display: flex;
   height: 70px;
   padding: 0 40px;
   align-items: center;
   .nav{
     display:flex;
        .nav-link{
        text-decoration-line: none;
        color:rgb(255, 207, 47);
        text-decoration-line: none;
        font-size:20px;
        font-weight: 560;
        padding:15px 20px;
         border-radius:15px;
        transition:all .2s;
        }
        .nav-link:hover{
          background-color:rgba(255, 218, 55, 0.692);
          border-radius:15px;
          color:white; 
        }
      }
 }
}

@media screen and (max-width:500px) {
  header{
    padding:0 20px;
  }
 
  .nav{
    display:flex;
    margin:20px 0 20px 0;
    .nav-link{
      text-decoration-line: none;
        color:rgb(255, 207, 47);
        text-decoration-line: none;
        font-size:20px;
        font-weight: 560;
        padding:15px 20px;
         border-radius:15px;
        transition:all .2s;
        z-index: 1;
   }
    .nav-link:hover{
          background-color:rgba(255, 218, 55, 0.692);
          border-radius:15px;
          color:white; 
        }
  }
  
}
 
 
</style>