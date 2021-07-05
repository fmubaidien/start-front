// Blog Store
import axios from 'axios';

const state = {
  loadedBlogs: []
};

const getters = {
  loadedBlogs(state) {
    return (state.loadedBlogs)
  }
};

const mutations = {
  setBlogs(state, blogs) {
    state.loadedBlogs = blogs
  }
};

const actions = {
  fetchBlogs(vuexContext, context) {
    return axios
      .get("http://localhost:1337" + "/guides")
      .then(res => {
        const blogsArray = res.data;
        vuexContext.commit("setBlogs", blogsArray);
      })
      .catch(e =>{
        console.log(e);
      });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
