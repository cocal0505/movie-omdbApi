import axios from 'axios'

export default {
  // modules 이가능하다는 것을 명시 
  namespaced: true,



  // 데이터의 상태
  state: () => ({
    movies: [], 
    message: '',
    loading: false 
  }), 



  // computed 계산된 상태 
  getters:{}, 



  // methods 
  //변이
  mutations: {
    updateState (state, payload){
      Object.keys(payload).forEach(key =>{
        state[key] =payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  }, 



  // 비동기 
  actions: {
    async searchMovies( {commit}, payload ){
      const { title, type , number , year } = payload 
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const {Search, totalResults} = res.data
      commit('updateState' ,{
        movies: Search
      })
    }
  }, 
}



