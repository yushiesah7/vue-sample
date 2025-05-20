<template>
  <div class="binding-demo">
    <h2>双方向バインディングデモ</h2>
    <div class="section">
      <h3>v-model を使ったTODOリスト</h3>
      
      <div class="input-container">
        <input 
          v-model="newTodo" 
          @keyup.enter="addTodo" 
          placeholder="新しいTODOを入力してEnterキーを押してください"
          class="todo-input"
        />
        <button @click="addTodo" :disabled="!newTodo.trim()">追加</button>
      </div>
      
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <input 
            type="checkbox" 
            v-model="todo.completed" 
            :id="'todo-' + index"
            class="todo-checkbox"
          />
          <label :for="'todo-' + index" :class="{ completed: todo.completed }">
            {{ todo.text }}
          </label>
          <button @click="removeTodo(index)" class="delete-btn">削除</button>
        </li>
      </ul>
      
      <div class="stats" v-if="todos.length > 0">
        <p>合計: {{ todos.length }}個、完了: {{ completedCount }}個</p>
      </div>
      <div v-else class="empty-todo">
        <p>TODOがありません。新しいタスクを追加してください。</p>
      </div>
    </div>
    
    <div class="explanation">
      <h3>コードの説明:</h3>
      <ul>
        <li><code>v-model="newTodo"</code> - 入力フィールドと変数の双方向バインディング</li>
        <li><code>@keyup.enter="addTodo"</code> - Enterキー押下時にメソッド呼び出し</li>
        <li><code>v-model="todo.completed"</code> - チェックボックスと配列内オブジェクトのプロパティをバインド</li>
        <li><code>:class="{ completed: todo.completed }"</code> - 条件付きのクラスバインディング</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BindingDemo',
  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'Vue.jsの基本を学ぶ', completed: true },
        { text: 'v-modelを理解する', completed: false },
        { text: 'TODOアプリを作成する', completed: false }
      ]
    }
  },
  computed: {
    completedCount() {
      return this.todos.filter(todo => todo.completed).length
    }
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodo.trim()
      if (trimmedText) {
        this.todos.push({
          text: trimmedText,
          completed: false
        })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.binding-demo {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.input-container {
  display: flex;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #3aa776;
}

button:disabled {
  background-color: #a8d5c3;
  cursor: not-allowed;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.todo-checkbox {
  margin-right: 10px;
}

label {
  flex: 1;
  margin: 0;
  transition: color 0.3s, text-decoration 0.3s;
}

label.completed {
  color: #999;
  text-decoration: line-through;
}

.delete-btn {
  background-color: #ff6b6b;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
}

.delete-btn:hover {
  background-color: #e45b5b;
}

.stats {
  margin-top: 20px;
  color: #666;
  font-size: 14px;
}

.empty-todo {
  text-align: center;
  color: #999;
  padding: 20px;
}

.explanation {
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.explanation code {
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: monospace;
}
</style>
