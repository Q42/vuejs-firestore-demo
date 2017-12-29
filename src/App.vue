<template>
  <div id="app">
    <h2>Essential Articles</h2>
    <ul>
      <li v-for="article in store.articles" :key="article.id"><a href="#">{{article.title}} by {{article.author_name}}</a></li>
    </ul>
  </div>
</template>

<script>
import store from './store';

export default {
  name: 'app',
  data () {
    return {
      store
    }
  }
}
</script>
