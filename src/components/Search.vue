<template>
  <div class="container">
    <input 
      v-model="title"
      type="text" 
      placeholder="원하는 영화를 검색해주세요" 
      @keydown.enter="apply" />
    <div class="selectors">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="filters">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn"
      @click="apply">
      Apply
    </button>
  </div>
</template>


<script>

export default {
  data(){
    return{
      title: '',
      type :'movie', 
      number: 10, 
      year: '', 
      filters:[
        {
          name:'type', 
          items: ['movie','series','episode']
        }, 
        {
          name:'number', 
          items:[10, 20 ,30]
        }, 
        {
          name:'year', 
          items:(()=>{
            const years =[]
            const thisYear = new Date().getFullYear()
            for (let i= thisYear; i>=1985; i--){
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  },
  methods:{
    async apply(){
      this.$store.dispatch('movie/searchMovies',{
        title: this.title, 
        type: this.type,
        number: this.number, 
        year: this.year
      })
    }
  }
}
</script> 


<style scoped lang="scss">
  @import '~/scss/main';
   .btn{
        padding:8px 20px ;
        background-color: $yellow;
        border: solid 1px rgb(190, 190, 190);
        border-radius:5px;
        color:#fff;
        font-family: "Oswald";
      }
    .btn:hover{
      background-color:rgb(48, 48, 48);
    }
  @media screen and (min-width:500px) {
    .container{
      display:flex;
      padding:0 100px; 
      .btn{
        
      }
      input{
        width:100%;
        height:40px;
        border: solid 1px rgb(190, 190, 190);
        border-radius: 5px;
        transition: all .1s;
        text-decoration: none;
        outline:none;
        margin-right:10px; 
      }
      input:hover{
        border: solid .1px rgb(219, 187, 4);
        box-shadow: 1px 2px 1px -1px rgb(219, 187, 4) ;

      }
      .selectors{
        display:flex;
        .filters{
          margin-right:10px;
          border: solid 1px rgb(190, 190, 190);
          border-radius: 5px;
          text-decoration: none;
          width:120px; 
        }
      }
    }
  }
  @media screen  and (max-width:500px){
    .container{
      padding:0 40px; 
     .btn{
       margin-top:10px;
     }
      input{
        width:100%;
        height:40px;
        border: solid 1px rgb(190, 190, 190);
        border-radius: 5px;
        transition: all .1s;
        text-decoration: none;
        outline:none
      }
      input:hover{
        border: solid .1px rgb(219, 187, 4);
        box-shadow: 1px 2px 1px -1px rgb(219, 187, 4) ;
        
      }
      .selectors{
        .filters{
          margin:5px 5px 0 0 ;
          border: solid 1px rgb(190, 190, 190);
          border-radius: 5px;
          text-decoration: none;
        }
      }
    }
  }


</style>