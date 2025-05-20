<template>
  <div class="transition-demo">
    <h2>トランジションデモ</h2>
    <div class="section">
      <h3>リストトランジション</h3>
      
      <div class="controls">
        <input 
          v-model="newItem" 
          @keyup.enter="addItem" 
          placeholder="新しい項目を入力"
          class="item-input"
        />
        <button @click="addItem" :disabled="!newItem.trim()">追加</button>
        <button @click="shuffleItems" class="btn-shuffle">シャッフル</button>
        <button @click="removeItem" class="btn-delete" :disabled="items.length === 0">ランダム削除</button>
      </div>
      
      <div class="list-container">
        <transition-group 
          name="list" 
          tag="ul"
          class="items-list"
        >
          <li v-for="(item, index) in items" 
              :key="item.id"
              class="list-item"
              :style="{ backgroundColor: item.color }"
          >
            <span>{{ item.text }}</span>
            <button @click="removeItemAt(index)" class="remove-btn">&times;</button>
          </li>
        </transition-group>
        
        <div v-if="items.length === 0" class="empty-list">
          項目を追加してトランジション効果を確認してください
        </div>
      </div>
      
      <div class="fade-container">
        <h4>フェードトランジション</h4>
        <button @click="showMessage = !showMessage">{{ showMessage ? '非表示' : '表示' }}</button>
        
        <transition name="fade">
          <div v-if="showMessage" class="message">
            このメッセージはフェードイン/アウトします！
          </div>
        </transition>
      </div>
    </div>
    
    <div class="explanation">
      <h3>コードの説明:</h3>
      <ul>
        <li><code>&lt;transition-group name="list" tag="ul"&gt;</code> - 複数要素のトランジション</li>
        <li><code>&lt;transition name="fade"&gt;</code> - 単一要素のトランジション</li>
        <li>CSSクラス <code>.list-enter-active</code>, <code>.list-leave-active</code> などでアニメーション定義</li>
        <li>要素は <code>:key</code> 属性で一意に識別される必要がある</li>
      </ul>
      
      <div class="code-example">
        <pre><code>/* リストアイテムのCSSトランジション */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.5s;
}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransitionDemo',
  data() {
    return {
      newItem: '',
      items: [
        { id: 1, text: 'トランジション1', color: '#42b983' },
        { id: 2, text: 'トランジション2', color: '#35495e' },
        { id: 3, text: 'トランジション3', color: '#ff7e67' }
      ],
      nextId: 4,
      showMessage: true
    }
  },
  methods: {
    addItem() {
      const text = this.newItem.trim()
      if (text) {
        const colors = ['#42b983', '#35495e', '#ff7e67', '#ffcc5c', '#78c5ef']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        
        this.items.push({
          id: this.nextId++,
          text,
          color: randomColor
        })
        this.newItem = ''
      }
    },
    removeItemAt(index) {
      this.items.splice(index, 1)
    },
    removeItem() {
      if (this.items.length) {
        const index = Math.floor(Math.random() * this.items.length)
        this.items.splice(index, 1)
      }
    },
    shuffleItems() {
      this.items = this.items
        .map(item => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item)
    }
  }
}
</script>

<style scoped>
.transition-demo {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.item-input {
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
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

.btn-shuffle {
  background-color: #ffcc5c;
  color: #333;
}

.btn-shuffle:hover {
  background-color: #efbd4d;
}

.btn-delete {
  background-color: #ff7e67;
}

.btn-delete:hover {
  background-color: #ef6e57;
}

.list-container {
  margin-top: 20px;
  min-height: 200px;
}

.items-list {
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.remove-btn {
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background: rgba(255, 255, 255, 0.5);
}

.empty-list {
  padding: 30px;
  text-align: center;
  color: #999;
  background-color: white;
  border-radius: 4px;
}

.fade-container {
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
}

.message {
  margin-top: 15px;
  padding: 15px;
  background-color: #e7f5ff;
  border-radius: 4px;
}

/* トランジション定義 */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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

.code-example {
  margin-top: 15px;
}

.code-example pre {
  background-color: #2c3e50;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0;
}
</style>
