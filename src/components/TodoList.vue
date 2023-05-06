<template>
    <div>
      <h2>{{ title }}</h2>
      <div>
        <input v-model="newItem" type="text" placeholder="Add New Item" />
        <button @click="addItem">Add</button>
      </div>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <input type="checkbox" v-model="item.completed" />
          <span :class="{ completed: item.completed }">{{ item.text }}</span>
          <button @click="removeItem(index)">x</button>
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
      const newItem = ref('');
      const items = ref([]);
  
      const addItem = () => {
        if (newItem.value.trim()) {
          items.value.push({
            text: newItem.value,
            completed: false,
          });
          newItem.value = '';
        }
      };
  
      const removeItem = (index) => {
        items.value.splice(index, 1);
      };
  
      return {
        newItem,
        items,
        addItem,
        removeItem,
      };
    },
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
  }
  </style>
  