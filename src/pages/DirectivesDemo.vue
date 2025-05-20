<template>
  <div class="directives-demo">
    <h2>ディレクティブデモ</h2>
    <div class="section">
      <h3>v-if, v-else, v-for の基本</h3>
      <div class="controls">
        <button @click="toggleItems">リストを {{ showItems ? '非表示' : '表示' }}</button>
        <button @click="addItem">項目を追加</button>
        <button @click="clearItems">リストをクリア</button>
      </div>
      
      <div class="list-container" v-if="showItems && items.length > 0">
        <h4>アイテムリスト:</h4>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            {{ item.name }} - {{ item.description }}
          </li>
        </ul>
      </div>
      <div class="empty-message" v-else-if="showItems && items.length === 0">
        <p>⚠️ リストが空です。「項目を追加」ボタンをクリックしてください。</p>
      </div>
      <div class="hidden-message" v-else>
        <p>リストは現在非表示です。「リストを表示」ボタンをクリックしてください。</p>
      </div>
    </div>
    
    <div class="explanation">
      <h3>コードの説明:</h3>
      <ul>
        <li><code>v-if="showItems && items.length > 0"</code> - 二つの条件が両方真のときのみリストを表示</li>
        <li><code>v-else-if="showItems && items.length === 0"</code> - リストが表示対象だが、中身が空の場合の警告</li>
        <li><code>v-else</code> - 上記の条件に一致しない場合の表示</li>
        <li><code>v-for="(item, index) in items" :key="index"</code> - 配列の各要素をリストとして展開</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectivesDemo',
  data() {
    return {
      showItems: true,
      items: [
        { name: 'アイテム1', description: 'これは最初のアイテムです' },
        { name: 'アイテム2', description: '二つ目のアイテムです' },
        { name: 'アイテム3', description: '三つ目のアイテムです' }
      ]
    }
  },
  methods: {
    toggleItems() {
      this.showItems = !this.showItems
    },
    addItem() {
      const newIndex = this.items.length + 1
      this.items.push({
        name: `アイテム${newIndex}`,
        description: `追加された${newIndex}番目のアイテムです`
      })
    },
    clearItems() {
      this.items = []
    }
  }
}
</script>

<style scoped>
.directives-demo {
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
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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

button:hover {
  background-color: #3aa776;
}

.list-container {
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.empty-message {
  padding: 15px;
  background-color: #fff3cd;
  color: #856404;
  border-radius: 4px;
}

.hidden-message {
  padding: 15px;
  background-color: #e2e3e5;
  color: #383d41;
  border-radius: 4px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
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
