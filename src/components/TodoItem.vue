<template>
  <div class="todo-item">
    <div class="todo-content">
      <input 
        type="checkbox" 
        :checked="completed" 
        @change="$emit('toggle')" 
        :id="'todo-item-' + id"
      />
      <label :for="'todo-item-' + id" :class="{ completed }">{{ text }}</label>
    </div>
    <button class="delete-btn" @click="$emit('remove')">削除</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    id: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: white;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.todo-content {
  display: flex;
  align-items: center;
  flex: 1;
}

input[type="checkbox"] {
  margin-right: 10px;
}

label {
  margin: 0;
  transition: color 0.3s, text-decoration 0.3s;
}

label.completed {
  color: #999;
  text-decoration: line-through;
}

.delete-btn {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #e45b5b;
}
</style>
