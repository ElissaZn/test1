<template>
    <div>
      <h1> DataPage </h1>
      <div>{{ data }}</div>
    </div>
  </template>
  
  <script setup lang="ts">

  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const data = route.params.data;
  </script>