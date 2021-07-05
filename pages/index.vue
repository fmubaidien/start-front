<template>
<div>
  <Header/>
  <div v-for="blog in loadedBlogs" :key="blog.id">
    <h1>
      {{blog.Title}}
    </h1>
    <p>
      {{blog.Body}}
    </p>
  </div>
</div>
</template>

<script>
import Header from '~/components/Header.vue';
import Blog from '~/components/Blog.vue';

export default {
  components: {
    Header,
    Blog
  },
  created() {
    this.$store.dispatch("fetchBlogs")
  },

  computed: {
    loadedBlogs() {
      return this.$store.getters.loadedBlogs;
    }
  }
}
</script>
