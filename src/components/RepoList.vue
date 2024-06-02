<template>
    <div>
      <input v-model="username" placeholder="Enter GitHub username" @keyup.enter="fetchRepos" />
      <button @click="fetchRepos">Fetch Repositories</button>
      <h2 v-if="repos.length">{{ username }}'s Repositories</h2>
      <ul v-if="repos.length">
        <li v-for="repo in repos" :key="repo.id">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        </li>
      </ul>
      <p v-else>No repositories found.</p>
    </div>
  </template>
  
  <script>
  import { getRepos } from '../githubService';
  
  export default {
    data() {
      return {
        username: '',
        repos: [],
      };
    },
    methods: {
      async fetchRepos() {
        try {
          this.repos = await getRepos(this.username);
        } catch (error) {
          console.error('Failed to load repositories:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-bottom: 1em;
    padding: 0.5em;
    font-size: 1em;
  }
  button {
    padding: 0.5em 1em;
    font-size: 1em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0.5em 0;
  }
  </style>
  