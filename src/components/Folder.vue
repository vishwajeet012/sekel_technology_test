<template>
    <div>
      <h2>{{ title }}</h2>
      <div>
        <input v-model="newFolder" type="text" placeholder="Add New Folder" />
        <button @click="addFolder">Add</button>
      </div>
      <ul>
        <li v-for="(folder, index) in folders" :key="index">
          <router-link :to="{ name: 'folder', params: { id: index } }">{{ folder.text }}</router-link>
          <button @click="removeFolder(index)">x</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      title: String,
    },
    setup() {
      const newFolder = ref('');
      const folders = ref([]);
  
      const addFolder = () => {
        if (newFolder.value.trim()) {
          folders.value.push({
            text: newFolder.value,
        completed: false});
          newFolder.value = '';
          console.log("newfolders",newFolder.value)
        }
      };
      
  
      const removeFolder = (index) => {
        folders.value.splice(index, 1);
      };
  
      return {
        newFolder,
        folders,
        addFolder,
        removeFolder,
      };
    },
  };
  </script>
  