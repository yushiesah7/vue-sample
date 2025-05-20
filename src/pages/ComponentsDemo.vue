<template>
  <div class="components-demo">
    <h2>コンポーネント通信デモ</h2>
    <div class="section">
      <h3>親子コンポーネント間の通信</h3>
      
      <div class="input-container">
        <input 
          v-model="newTodo" 
          @keyup.enter="addTodo" 
          placeholder="新しいTODOを入力してEnterキーを押してください"
          class="todo-input"
        />
        <button @click="addTodo" :disabled="!newTodo.trim()">追加</button>
      </div>
      
      <div class="todos-container">
        <todo-item 
          v-for="(todo, index) in todos" 
          :key="index"
          :id="index"
          :text="todo.text"
          :completed="todo.completed"
          @toggle="toggleTodo(index)"
          @remove="removeTodo(index)"
        ></todo-item>
      </div>
      
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
        <li><code>:text="todo.text"</code> - 親から子へのpropsによるデータ渡し</li>
        <li><code>@toggle="toggleTodo(index)"</code> - 子から親へのイベントによる通信</li>
        <li><code>@remove="removeTodo(index)"</code> - 子コンポーネントの削除ボタンクリック時に親メソッドを実行</li>
        <li>子コンポーネント内では <code>$emit('remove')</code> のようにイベントを発火させている</li>
      </ul>
      
      <h4>TodoItem.vue の実装:</h4>
      <pre><code>// Props定義
props: {
  id: { type: Number, required: true },
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
}

// イベント発火
@click="$emit('remove')"</code></pre>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'ComponentsDemo',
  components: {
    TodoItem
  },
  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'コンポーネントの基本を学ぶ', completed: true },
        { text: 'Props の使い方を理解する', completed: false },
        { text: 'カスタムイベントを理解する', completed: false }
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
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.components-demo {
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

.todos-container {
  margin-bottom: 20px;
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

.explanation pre {
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
