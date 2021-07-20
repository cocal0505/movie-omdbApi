<template>
  <div class="container">
    <h1>
      <span>OMDb API</span> <br />
      THE OPEN <br /> 
      MOVIE DATABASE FOR JUNO
    </h1>
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
      If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
  </div>
</template>

<style lang="scss" scoped >
  @import '~/scss/main';


.container{
        padding: 0 100px; 
        h1{
          line-height: 1;
          font-family: "Oswald";
          font-size:80px;
          span{
            color:$yellow;
          }
        }
        p{
          margin:30px 0;
          color:$gray-600;
        }
  }
  @media screen and (max-width:500px){
    .container{
        padding: 0 40px; 
        h1{
          line-height: 1;
          font-family: "Oswald";
          font-size:80px;
          span{
            color:$yellow;
          }
        }
        p{
          margin:30px 0;
          color:$gray-600;
        }
      }
    }
  
  
    
 
</style>