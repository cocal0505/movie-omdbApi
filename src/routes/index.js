import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
export default createRouter ({
  // hash 모드 
  history: createWebHashHistory(), 
  // pages 
  routes:[
    {
      // https://google.com/  슬레시 하나면 메인페이지 
      path:'/',
      component:Home
    }, 
    {
      path:'/movie', 
      component:Movie
    }, 
    {
      path:'/about', 
      component : About 
    }
  ]
})
