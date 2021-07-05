import Vuex from 'vuex';
import blogs from './modules/blogs';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        blogs
    }
  })
}
export default createStore
