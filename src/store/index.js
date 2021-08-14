import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: [
      {id:1, body:'サンプルのメモです'}
    ]
  },
  mutations: {
    save(state, memo){
      state.memos.push(memo)
    }
  },  
}
)
