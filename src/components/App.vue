<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Folder title="Folders" />
        </div>
        <div class="col-md-8">
          <TodoList :title="folderName" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  import Folder from './components/Folder.vue';
  import TodoList from './components/TodoList.vue';
  
  export default {
    components: {
      Folder,
      TodoList,
    },
    setup() {
      const route = useRoute();
      const folderName = computed(() => `To-Do List - ${route.params.id}`);
      console.log("folder",folderName)
  
      return {
        folderName,
      };
    },
  };
  </script>