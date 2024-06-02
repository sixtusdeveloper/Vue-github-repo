<template>
  <div id="app">
    <RepoList />
  </div>
</template>

<script>
import RepoList from './components/RepoList.vue';

export default {
  name: 'App',
  components: {
    RepoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
