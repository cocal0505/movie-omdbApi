<template>
  <RouterLink 
    to="/"
    class="logo">
    <span>Junmovie</span>.COM
  </RouterLink>
</template>



<script>
export default {
  
}
</script>

<style scoped lang="scss">
@import "~/scss/main";
.logo{
  font-family: "OsWald" , sans-serif;
  font-size:25px; 
  color:$black;
  text-decoration: none;
  margin-right:40px;
  span {
    color: $yellow
  }
}
</style>


